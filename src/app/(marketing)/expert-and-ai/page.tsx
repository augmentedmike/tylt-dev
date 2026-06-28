import type { Metadata } from "next";
import {
  Brain,
  Blocks,
  ShieldCheck,
  Bug,
  FileText,
  BadgeCheck,
  Check,
  X,
} from "lucide-react";

import { Hero } from "@/components/blocks/hero";
import { Stats } from "@/components/blocks/stats";
import { FeatureGrid } from "@/components/blocks/feature-grid";
import { Comparison } from "@/components/blocks/comparison";
import { CallToAction } from "@/components/blocks/call-to-action";
import { Section, SectionHeading } from "@/components/blocks/section";
import { cn } from "@/lib/utils";

// CTA target — intercepted by <LeadDialog/> to open the consultation modal.
const CONSULT_HREF = "#lead-consultation";
const RESCUE_HREF = "/#rescue";
const icon = "size-5.5";

export const metadata: Metadata = {
  title: "Expert + AI vs. anyone + AI",
  description:
    "AI coding tools are a multiplier. Pointed at an expert engineer, they produce senior work at speed. Pointed at someone who can't tell good code from code that merely runs, they produce a demo that breaks in production. Same tool, opposite outcome.",
};

/** One side of the "who's driving" split. */
interface SplitColumn {
  eyebrow: string;
  title: string;
  positive: boolean;
  points: string[];
}

const expertColumn: SplitColumn = {
  eyebrow: "Expert engineer + AI",
  title: "The tool amplifies real judgment.",
  positive: true,
  points: [
    "Knows what good looks like — and rejects the AI output that only looks right.",
    "Reviews every line, because they can actually read and reason about it.",
    "Designs the architecture first, so the codebase scales instead of ossifying.",
    "Catches the security hole, the race condition, and the edge case the model glossed over.",
    "Owns the result — there's a name, a reputation, and accountability behind every commit.",
  ],
};

const anyoneColumn: SplitColumn = {
  eyebrow: "Anyone + AI",
  title: "The tool amplifies the gaps.",
  positive: false,
  points: [
    "Can't tell working software from code that merely ran once on a happy path.",
    'Accepts whatever compiles — "review" means "did the demo load?"',
    "No architecture, just accreting prompts until it sort of holds together.",
    "Ships the leaked API key and the injection flaw without knowing they're there.",
    "When it breaks in production, no one in the building actually understands the code.",
  ],
};

/** Two-up panel contrasting who is holding the tool. */
function DriverSplit() {
  return (
    <Section>
      <SectionHeading
        eyebrow="The multiplier"
        title="The AI is the same. The person driving it is the whole difference."
        subtitle="A coding model doesn't supply judgment — it multiplies whatever judgment is already there. That makes the operator, not the tool, the thing that decides whether you get a product or a liability."
      />
      <div className="mt-12 grid gap-4 lg:grid-cols-2">
        {[expertColumn, anyoneColumn].map((col) => (
          <div
            key={col.eyebrow}
            className={cn(
              "rounded-2xl border p-7 sm:p-8",
              col.positive
                ? "border-primary/30 bg-card"
                : "border-border/60 bg-card/40",
            )}
          >
            <div className="mb-6 flex items-center gap-2.5">
              <span
                className={cn(
                  "size-2 shrink-0 rounded-full",
                  col.positive
                    ? "tylt-pulse bg-primary shadow-[0_0_8px_var(--color-primary)]"
                    : "bg-muted-foreground/40",
                )}
              />
              <span
                className={cn(
                  "font-display text-xs font-bold tracking-[0.08em] uppercase",
                  col.positive ? "text-primary" : "text-muted-foreground",
                )}
              >
                {col.eyebrow}
              </span>
            </div>
            <h3
              className={cn(
                "font-heading text-xl font-semibold tracking-tight text-balance",
                col.positive ? "text-foreground" : "text-muted-foreground",
              )}
            >
              {col.title}
            </h3>
            <ul className="mt-5 flex flex-col gap-3.5">
              {col.points.map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  {col.positive ? (
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  ) : (
                    <X className="mt-0.5 size-4 shrink-0 text-muted-foreground/50" />
                  )}
                  <span
                    className={cn(
                      "text-sm leading-relaxed",
                      col.positive
                        ? "text-foreground/90"
                        : "text-muted-foreground",
                    )}
                  >
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

/**
 * Information page linked from the vibe-code rescue section: the difference
 * between building with an expert engineer + AI versus anyone + AI.
 */
export default function ExpertAndAiPage() {
  return (
    <>
      <Hero
        badge="The difference that matters"
        title="AI writes the code."
        titleAccent="Someone has to be right about it."
        subtitle="Every AI coding tool is a multiplier. Point it at an expert and you get senior-grade work at three times the speed. Point it at someone who can't tell good code from code that merely runs, and you get a demo that breaks the moment it meets the real world. Same tool — opposite outcome."
        primaryAction={{ label: "Get a free code audit", href: CONSULT_HREF }}
        secondaryAction={{ label: "Back to rescue", href: RESCUE_HREF }}
        highlights={[
          "Senior review on every line",
          "Architecture, not accretion",
          "Security verified, not assumed",
        ]}
      />

      <DriverSplit />

      <Stats
        stats={[
          { value: "45%", label: "of AI-generated code ships with an OWASP-class flaw (Veracode)" },
          { value: "3×", label: "faster delivery when an expert drives the tooling" },
          { value: "100%", label: "of our code is reviewed and owned by a senior engineer" },
          { value: "0", label: "handoffs to a queue who didn't write your code" },
        ]}
      />

      <FeatureGrid
        eyebrow="What the prompt can't supply"
        title="The expert brings the things AI was never going to"
        subtitle="A model can generate plausible code all day. What it can't do is decide whether that code is correct, safe, and built to last. That judgment is the job — and it only comes from someone who's done it before."
        columns={3}
        features={[
          {
            icon: <Brain className={icon} />,
            title: "Judgment",
            description:
              "Knowing which of the model's suggestions to keep and which to throw away — the 40% that looks right but isn't.",
          },
          {
            icon: <Blocks className={icon} />,
            title: "Architecture",
            description:
              "Designing the structure up front so the system scales and stays maintainable, instead of accreting until it collapses.",
          },
          {
            icon: <ShieldCheck className={icon} />,
            title: "Security review",
            description:
              "Spotting the leaked secret, the injection vector, and the exposed customer data before they reach production — not after the breach.",
          },
          {
            icon: <Bug className={icon} />,
            title: "Edge cases & failure modes",
            description:
              "Anticipating the inputs, race conditions, and error paths the demo never exercised but real users will hit on day one.",
          },
          {
            icon: <FileText className={icon} />,
            title: "Maintainability",
            description:
              "Types, tests, and documentation so the next change ships safely — and the codebase is something a team can actually build on.",
          },
          {
            icon: <BadgeCheck className={icon} />,
            title: "Accountability",
            description:
              "A senior engineer who owns the outcome and can be held to it — not a tool that shrugs when the output is wrong.",
          },
        ]}
      />

      <Comparison
        eyebrow="Side by side"
        title="Who's holding the keyboard decides what you ship"
        subtitle="The speed is real either way. Everything that determines whether the software survives contact with production comes down to who's driving."
        columns={[
          { label: "Expert + AI", highlight: true },
          { label: "Employee + AI" },
          { label: "AI alone" },
        ]}
        rows={[
          { label: "Ships fast", values: [true, true, true] },
          {
            label: "Output reviewed by someone who can read it",
            values: [true, false, false],
          },
          {
            label: "Architecture designed to scale",
            values: [true, false, false],
          },
          {
            label: "Security verified before launch",
            values: [true, false, false],
          },
          {
            label: "Edge cases & failure modes handled",
            values: [true, false, false],
          },
          {
            label: "Maintainable, documented codebase",
            values: [true, false, false],
          },
          {
            label: "Someone accountable for the result",
            values: [true, false, false],
          },
          { label: "Production-ready, not just demo-ready", values: [true, false, false] },
        ]}
      />

      <CallToAction
        title="Have an expert look at what you built."
        subtitle="Send us the repo — vibe-coded, half-finished, or just unsure. A senior engineer will tell you exactly what's solid, what's a liability, and what it takes to get it to production."
        primaryAction={{ label: "Get a free code audit", href: CONSULT_HREF }}
        secondaryAction={{ label: "Back to rescue", href: RESCUE_HREF }}
        note="Typical reply within a few hours"
      />
    </>
  );
}
