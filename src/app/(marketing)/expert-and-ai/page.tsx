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
import { TeamFormula } from "@/components/blocks/team-formula";
import { CallToAction } from "@/components/blocks/call-to-action";
import { Section, SectionHeading } from "@/components/blocks/section";
import { JsonLd } from "@/components/seo/json-ld";
import { cn } from "@/lib/utils";
import { pageMetadata, breadcrumbLd, SITE_URL } from "@/lib/seo";

// CTA target — intercepted by <LeadDialog/> to open the consultation modal.
const CONSULT_HREF = "#lead-consultation";
const RESCUE_HREF = "/#rescue";
const icon = "size-5.5";

const PAGE_TITLE = "Why great software takes more than AI";
const PAGE_DESCRIPTION =
  "Every shop can prompt the same models. What turns them into software that ships and scales is the system around them — AI-native senior engineers, a purpose-built agentic harness, and your product requirements. The difference was never who prompts the AI; it's the engineering and process wrapped around it.";

export const metadata = pageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/expert-and-ai",
});

const breadcrumb = breadcrumbLd([
  { name: "Home", path: "/" },
  { name: PAGE_TITLE, path: "/expert-and-ai" },
]);

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  url: `${SITE_URL}/expert-and-ai`,
  mainEntityOfPage: `${SITE_URL}/expert-and-ai`,
  image: `${SITE_URL}/opengraph-image`,
  author: { "@type": "Organization", name: "Tylt", url: SITE_URL },
  publisher: {
    "@type": "Organization",
    name: "Tylt",
    url: SITE_URL,
    logo: { "@type": "ImageObject", url: `${SITE_URL}/tylt-mark.png` },
  },
};

/** One side of the "who's driving" split. */
interface SplitColumn {
  eyebrow: string;
  title: string;
  positive: boolean;
  points: string[];
}

const expertColumn: SplitColumn = {
  eyebrow: "AI + engineering expertise, on our system",
  title: "Expertise, applied by a system built for it.",
  positive: true,
  points: [
    "AI experts who know exactly what to trust from a model — and discard the ~40% that only looks right.",
    "Senior engineers own the architecture, security, and quality bar, so it scales past the demo.",
    "A purpose-built harness runs a reviewed fleet of agent workers — specs, code, tests, docs, deploys.",
    "Every line is read and owned by someone accountable, never generated and shipped blind.",
    "Built to hold up under the real load you'll actually see in production.",
  ],
};

const anyoneColumn: SplitColumn = {
  eyebrow: "AI in unskilled hands",
  title: "A prompt box and hope.",
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
        eyebrow="Why the outcomes differ"
        title="A raw model is the easy part."
        subtitle="Any tool can generate plausible code. Turning it into software that ships and scales takes what a prompt box never will: real AI and engineering expertise, and a purpose-built system to apply it. Same model — a completely different machine around it."
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
      <JsonLd data={breadcrumb} />
      <JsonLd data={articleLd} />
      <Hero
        badge="The difference that matters"
        title="Great software isn't generated."
        titleAccent="It's engineered."
        subtitle="Every shop can prompt the same models. What turns them into software that ships and scales is the system around them — AI-native senior engineers directing a purpose-built harness of agent workers, built against the requirements only your team can set. The difference was never who prompts the AI. It's the engineering and the process wrapped around it."
        primaryAction={{ label: "Get a free code audit", href: CONSULT_HREF }}
        secondaryAction={{ label: "Back to rescue", href: RESCUE_HREF }}
        highlights={[
          "AI-native senior engineering",
          "A purpose-built agentic harness",
          "Reviewed, scaled, and owned",
        ]}
      />

      <DriverSplit />

      <Stats
        stats={[
          {
            value: "45%",
            label:
              "of AI-generated code ships with an OWASP-class flaw (Veracode)",
          },
          {
            value: "3×",
            label: "faster delivery when an expert drives the tooling",
          },
          {
            value: "100%",
            label: "of our code is reviewed and owned by a senior engineer",
          },
          {
            value: "0",
            label: "handoffs to a queue who didn't write your code",
          },
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
        title="Same model. Three very different outcomes."
        subtitle="The raw speed is similar across the board. Everything that decides whether the software does its job and survives real traffic comes down to the expertise and the system behind it."
        columns={[
          { label: "Tylt", highlight: true },
          { label: "Anyone + AI" },
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
          {
            label: "Production-ready, not just demo-ready",
            values: [true, false, false],
          },
        ]}
      />

      <TeamFormula muted />

      <CallToAction
        title="Have an expert look at what you built."
        subtitle="Send us the repo — vibe-coded, half-finished, or just unsure. A senior engineer will tell you exactly what's solid, what's a liability, and what it takes to get it to production."
        primaryAction={{ label: "Get a free code audit", href: CONSULT_HREF }}
        note="Typical reply within a few hours"
      />
    </>
  );
}
