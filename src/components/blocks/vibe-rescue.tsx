import {
  ShieldCheck,
  Blocks,
  FlaskConical,
  FileCheck2,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export interface VibeRescueProps {
  /** Section id (anchor target). */
  id?: string;
  /** CTA target — opens the consultation modal. */
  ctaHref?: string;
  /** "Learn more" target — the expert-vs-anyone explainer page. */
  detailHref?: string;
}

const pillars = [
  {
    icon: ShieldCheck,
    title: "Security, verified",
    body: "We scan for the leaked keys, exposed customer data, and OWASP-class flaws these tools ship by default — then close every one and prove it with a clean report.",
  },
  {
    icon: Blocks,
    title: "Proper architecture",
    body: "We untangle the spaghetti into a documented, modular codebase designed to scale and be maintained — not just to survive the next demo.",
  },
  {
    icon: FlaskConical,
    title: "Tests & CI that hold",
    body: "We add the types, test coverage, and deploy pipelines the generator skipped, so every future change ships safely instead of breaking prod.",
  },
  {
    icon: FileCheck2,
    title: "Production-grade & owned",
    body: "You get an app your team — or ours — can keep building on, fully documented, with 100% of the code and IP yours to keep.",
  },
];

/**
 * "Rescue your vibe-coded app" section: the solution-side counterpart to the
 * vibe-coding trap. Audit → rebuild → verify → hand off, on real architecture
 * with verified security.
 */
export function VibeRescue({
  id = "rescue",
  ctaHref = "#lead-consultation",
  detailHref = "/expert-and-ai",
}: VibeRescueProps) {
  return (
    <section id={id} className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.12em] text-primary uppercase">
            Vibe-code rescue
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
            Bring us your vibe-coded mess.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground sm:text-lg">
            Base44, Bolt, Lovable, or a half-finished Cursor sprint — if it got
            you to a demo but can&apos;t go to production, we turn it into a real
            application with good code, proper architecture, and verified
            security. Without throwing away what already works.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card/40 p-6"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <pillar.icon className="size-5.5" />
              </div>
              <div>
                <h3 className="font-heading text-base font-semibold text-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {pillar.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
          <Button asChild size="lg">
            <a href={ctaHref}>
              Get a free code audit
              <ArrowRight className="size-4" />
            </a>
          </Button>
          <p className="text-sm text-muted-foreground">
            Send us the repo — we&apos;ll tell you exactly what it&apos;ll take.
          </p>
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          <a
            href={detailHref}
            className="inline-flex items-center gap-1.5 font-medium text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
          >
            Why an expert engineer + AI beats anyone + AI
            <ArrowRight className="size-3.5" />
          </a>
        </p>
      </div>
    </section>
  );
}
