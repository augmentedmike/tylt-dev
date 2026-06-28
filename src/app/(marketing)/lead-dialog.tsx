"use client";

import * as React from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { PressHold } from "@/components/ui/press-hold";
import { submitLead } from "@/app/actions";

type LeadType = "pilot" | "consultation";

interface FormConfig {
  title: string;
  description: string;
  messageLabel: string;
  messagePlaceholder: string;
  contextLabel: string;
  contextOptions: string[];
  submitLabel: string;
  successTitle: string;
  successBody: string;
}

const CONFIG: Record<LeadType, FormConfig> = {
  pilot: {
    title: "Apply to the pilot program",
    description:
      "10 of 15 spots left — pilot partners get workers at $12.50/hr for their first 6 months.",
    messageLabel: "What are you looking to build?",
    messagePlaceholder:
      "A few sentences on the product, the stack, and what you'd want us shipping first.",
    contextLabel: "Team size",
    contextOptions: ["Just me", "2–10", "11–50", "50+"],
    submitLabel: "Apply for a pilot spot",
    successTitle: "Application received",
    successBody:
      "Thanks — we review pilot applications fast and will be in touch within a few hours.",
  },
  consultation: {
    title: "Book a call",
    description:
      "Tell us what you're working on and we'll get back to you within a few hours.",
    messageLabel: "What do you need help with?",
    messagePlaceholder:
      "A few sentences on the project, timeline, and where you're stuck.",
    contextLabel: "Budget range",
    contextOptions: [
      "Under $5k/mo",
      "$5k–$15k/mo",
      "$15k–$50k/mo",
      "Not sure yet",
    ],
    submitLabel: "Request a call",
    successTitle: "Request received",
    successBody:
      "Thanks — we'll reply within a few hours to set up a time that works.",
  },
};

const HASH_TO_TYPE: Record<string, LeadType> = {
  "#lead-pilot": "pilot",
  "#lead-consultation": "consultation",
};

const fieldClass =
  "w-full rounded-lg border border-border bg-background/60 px-3 py-2 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:outline-none";
const labelClass = "mb-1.5 block text-sm font-medium text-foreground";

export function LeadDialog() {
  const [type, setType] = React.useState<LeadType | null>(null);
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success">(
    "idle",
  );
  const [error, setError] = React.useState<string | null>(null);
  // Bumped on each failed attempt to remount the hold gate (resets its state).
  const [attempt, setAttempt] = React.useState(0);
  const formRef = React.useRef<HTMLFormElement>(null);

  // Intercept clicks on any CTA that points at #lead-pilot / #lead-consultation.
  React.useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest<HTMLAnchorElement>("a[href]");
      if (!anchor) return;
      const hash = anchor.getAttribute("href") ?? "";
      const next = HASH_TO_TYPE[hash];
      if (!next) return;
      e.preventDefault();
      setType(next);
      setStatus("idle");
      setError(null);
      setAttempt(0);
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  function onOpenChange(open: boolean) {
    if (!open) setType(null);
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!type) return;
    const data = new FormData(e.currentTarget);
    const get = (k: string) => (data.get(k) as string | null) ?? "";
    setStatus("submitting");
    setError(null);
    try {
      const result = await submitLead({
        type,
        name: get("name"),
        email: get("email"),
        company: get("company"),
        context: get("context"),
        message: get("message"),
        company_url: get("company_url"),
      });
      if (!result.ok) {
        setError(result.error);
        setStatus("idle");
        setAttempt((a) => a + 1);
        return;
      }
      setStatus("success");
    } catch {
      setError("Network error. Please try again.");
      setStatus("idle");
      setAttempt((a) => a + 1);
    }
  }

  // The hold gate submits the form (running native validation first).
  function onHoldComplete() {
    formRef.current?.requestSubmit();
  }

  const config = type ? CONFIG[type] : null;

  return (
    <Dialog open={type !== null} onOpenChange={onOpenChange}>
      {config && (
        <DialogContent key={type}>
          {status === "success" ? (
            <div className="flex flex-col items-center py-4 text-center">
              <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-primary/15 text-primary">
                <Check className="size-6" />
              </div>
              <DialogTitle className="mb-2">{config.successTitle}</DialogTitle>
              <DialogDescription>{config.successBody}</DialogDescription>
            </div>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle>{config.title}</DialogTitle>
                <DialogDescription>{config.description}</DialogDescription>
              </DialogHeader>

              <form
                ref={formRef}
                onSubmit={onSubmit}
                className="flex flex-col gap-4"
              >
                {/* Honeypot — hidden from real users. */}
                <div
                  aria-hidden
                  className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
                >
                  <label>
                    Company URL
                    <input
                      type="text"
                      name="company_url"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </label>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="lead-name" className={labelClass}>
                      Name
                    </label>
                    <input
                      id="lead-name"
                      name="name"
                      required
                      autoComplete="name"
                      className={fieldClass}
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="lead-email" className={labelClass}>
                      Work email
                    </label>
                    <input
                      id="lead-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className={fieldClass}
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="lead-company" className={labelClass}>
                      Company
                    </label>
                    <input
                      id="lead-company"
                      name="company"
                      autoComplete="organization"
                      className={fieldClass}
                      placeholder="Acme Inc."
                    />
                  </div>
                  <div>
                    <label htmlFor="lead-context" className={labelClass}>
                      {config.contextLabel}
                    </label>
                    <select
                      id="lead-context"
                      name="context"
                      defaultValue=""
                      className={fieldClass}
                    >
                      <option value="" disabled>
                        Select…
                      </option>
                      {config.contextOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="lead-message" className={labelClass}>
                    {config.messageLabel}
                  </label>
                  <textarea
                    id="lead-message"
                    name="message"
                    required
                    rows={4}
                    className={`${fieldClass} resize-y`}
                    placeholder={config.messagePlaceholder}
                  />
                </div>

                {error && (
                  <p className="text-sm text-destructive" role="alert">
                    {error}
                  </p>
                )}

                {status === "submitting" ? (
                  <div className="mt-1 flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-primary text-sm font-semibold text-primary-foreground">
                    <Loader2 className="size-4 animate-spin" />
                    Sending…
                  </div>
                ) : (
                  <PressHold
                    key={attempt}
                    holdMs={6_000}
                    onComplete={onHoldComplete}
                    className="mt-1"
                    holdingLabel={(s) => `Keep holding… ${s}s`}
                  >
                    {config.submitLabel}
                    <ArrowRight className="size-4" />
                  </PressHold>
                )}
                <p className="text-center text-xs text-muted-foreground">
                  Press &amp; hold to submit — confirms you&apos;re human.
                  We&apos;ll only use this to reply about your project.
                </p>
              </form>
            </>
          )}
        </DialogContent>
      )}
    </Dialog>
  );
}
