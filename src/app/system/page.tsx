import type { Metadata } from "next";
import { Lock, LogOut, Inbox, Clock, Check, RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { isAuthenticated, isConfigured } from "@/lib/system-auth";
import {
  listLeads,
  countOpenLeads,
  type Lead,
  type LeadFilter,
} from "@/lib/leads";
import { loginAction, logoutAction, setHandledAction } from "./actions";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "System",
  robots: { index: false, follow: false },
};

const dateFmt = new Intl.DateTimeFormat("en-US", {
  dateStyle: "medium",
  timeStyle: "short",
});

type SearchParams = Promise<{ filter?: string; error?: string }>;

export default async function SystemPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const sp = await searchParams;

  if (!(await isAuthenticated())) {
    return <Login error={Boolean(sp.error)} configured={isConfigured()} />;
  }

  const filter: LeadFilter =
    sp.filter === "handled" ? "handled" : sp.filter === "all" ? "all" : "open";
  const [leads, openCount] = await Promise.all([
    listLeads(filter),
    countOpenLeads(),
  ]);

  return <Dashboard leads={leads} filter={filter} openCount={openCount} />;
}

/* ── Login ─────────────────────────────────────────────────────────────── */

function Login({ error, configured }: { error: boolean; configured: boolean }) {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <form
        action={loginAction}
        className="w-full max-w-sm rounded-2xl border border-border bg-card/50 p-8"
      >
        <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Lock className="size-5" />
        </div>
        <h1 className="mt-4 font-heading text-xl font-bold">System access</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Enter the password to view booking requests.
        </p>

        <input
          type="password"
          name="password"
          autoFocus
          required
          placeholder="Password"
          aria-label="Password"
          className="mt-6 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40"
        />

        {error && (
          <p className="mt-3 text-sm text-destructive">Incorrect password.</p>
        )}
        {!configured && (
          <p className="mt-3 text-sm text-destructive">
            SYSTEM_PASSWORD isn&apos;t set. Add it to your environment.
          </p>
        )}

        <Button type="submit" size="lg" className="mt-6 w-full">
          Sign in
        </Button>
      </form>
    </main>
  );
}

/* ── Dashboard ─────────────────────────────────────────────────────────── */

const FILTERS: { key: LeadFilter; label: string }[] = [
  { key: "open", label: "Open" },
  { key: "handled", label: "Handled" },
  { key: "all", label: "All" },
];

function Dashboard({
  leads,
  filter,
  openCount,
}: {
  leads: Lead[];
  filter: LeadFilter;
  openCount: number;
}) {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-2xl font-bold">Booking requests</h1>
          <p className="mt-0.5 text-sm text-muted-foreground">
            {openCount} open · {leads.length} shown
          </p>
        </div>
        <form action={logoutAction}>
          <Button type="submit" variant="outline" size="sm">
            <LogOut className="size-4" />
            Sign out
          </Button>
        </form>
      </header>

      {/* Filter */}
      <div className="mt-6 inline-flex rounded-lg border border-border bg-card/50 p-1">
        {FILTERS.map((f) => (
          <a
            key={f.key}
            href={`/system?filter=${f.key}`}
            className={cn(
              "rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
              filter === f.key
                ? "bg-primary/15 text-primary"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {f.label}
          </a>
        ))}
      </div>

      {/* List */}
      <div className="mt-6 flex flex-col gap-3">
        {leads.length === 0 ? (
          <div className="flex flex-col items-center gap-2 rounded-2xl border border-dashed border-border py-16 text-center text-muted-foreground">
            <Inbox className="size-6" />
            <p className="text-sm">
              No {filter === "all" ? "" : filter} requests.
            </p>
          </div>
        ) : (
          leads.map((lead) => <LeadCard key={lead.id} lead={lead} />)
        )}
      </div>
    </main>
  );
}

function LeadCard({ lead }: { lead: Lead }) {
  const handled = Boolean(lead.handledAt);
  const contextLabel = lead.type === "pilot" ? "Team size" : "Budget";
  const messageLabel = lead.type === "pilot" ? "Building" : "Needs help with";

  return (
    <article
      className={cn(
        "rounded-2xl border bg-card/50 p-5",
        handled ? "border-border/60 opacity-70" : "border-border",
      )}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={cn(
                "rounded-full border px-2 py-0.5 text-[11px] font-semibold tracking-wide uppercase",
                lead.type === "pilot"
                  ? "border-primary/40 text-primary"
                  : "border-border text-muted-foreground",
              )}
            >
              {lead.type}
            </span>
            <h2 className="font-heading text-base font-semibold text-foreground">
              {lead.name}
            </h2>
            {handled && (
              <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                <Check className="size-3.5" /> Handled
              </span>
            )}
          </div>
          <a
            href={`mailto:${lead.email}`}
            className="mt-1 block truncate text-sm text-primary hover:underline"
          >
            {lead.email}
          </a>
        </div>

        <form action={setHandledAction}>
          <input type="hidden" name="id" value={lead.id} />
          <input type="hidden" name="handled" value={handled ? "0" : "1"} />
          <Button
            type="submit"
            size="sm"
            variant={handled ? "ghost" : "default"}
          >
            {handled ? (
              <>
                <RotateCcw className="size-4" /> Reopen
              </>
            ) : (
              <>
                <Check className="size-4" /> Mark handled
              </>
            )}
          </Button>
        </form>
      </div>

      <dl className="mt-4 grid gap-x-4 gap-y-2 text-sm sm:grid-cols-[7rem_1fr]">
        {lead.company && (
          <>
            <dt className="text-muted-foreground">Company</dt>
            <dd className="text-foreground">{lead.company}</dd>
          </>
        )}
        {lead.context && (
          <>
            <dt className="text-muted-foreground">{contextLabel}</dt>
            <dd className="text-foreground">{lead.context}</dd>
          </>
        )}
        <dt className="text-muted-foreground">{messageLabel}</dt>
        <dd className="whitespace-pre-wrap text-foreground">{lead.message}</dd>
      </dl>

      <p className="mt-4 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
        <Clock className="size-3.5" />
        {dateFmt.format(new Date(lead.createdAt))}
        {handled && lead.handledAt
          ? ` · handled ${dateFmt.format(new Date(lead.handledAt))}`
          : ""}
      </p>
    </article>
  );
}
