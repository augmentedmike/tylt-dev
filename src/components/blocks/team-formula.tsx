import { Target, BrainCircuit, Bot, Plus, Check } from "lucide-react";

import { Section, SectionHeading } from "@/components/blocks/section";
import { cn } from "@/lib/utils";

export interface TeamFormulaProps {
  /** Section id (anchor target). */
  id?: string;
  /** Use the muted background band. */
  muted?: boolean;
}

interface Ingredient {
  icon: React.ElementType;
  /** Who supplies this ingredient. */
  supplier: "You" | "Tylt";
  who: string;
  role: string;
  body: string;
  /** What this ingredient alone guarantees. */
  guarantee: string;
  /** Concrete work this role does. */
  points?: string[];
}

const ingredients: Ingredient[] = [
  {
    icon: Target,
    supplier: "You",
    who: "Your product expert",
    role: "Product expertise",
    body: "One person on your side owns what to build and how you'll know it's right — the requirements up front and the acceptance testing at the end. Nobody knows your business like you do.",
    guarantee: "It does what your business actually needs",
  },
  {
    icon: BrainCircuit,
    supplier: "Tylt",
    who: "An AI-native senior engineer",
    role: "AI + engineering expertise",
    body: "One of our top engineers — fluent in both the model and the architecture — owns the quality bar, reviews everything the agents produce, and rejects what only looks right.",
    guarantee: "It works as expected and scales to your daily active users",
  },
  {
    icon: Bot,
    supplier: "Tylt",
    who: "Our agentic worker system",
    role: "The system we built",
    body: "A purpose-built harness puts a configurable fleet of agent workers to work under that engineer's direction, doing the physical build at speed. Dial it up or down to match your pace.",
    guarantee: "It ships fast, without the headcount or the bill",
    points: ["Coding", "Specs", "Documentation", "Testing", "Deployment"],
  },
];

/**
 * The Tylt operating model as an equation: your product knowledge + a senior
 * engineer + AI workers. Each ingredient alone is insufficient; all three
 * produce software that does what it should AND scales to the load you need.
 */
export function TeamFormula({ id = "the-formula", muted }: TeamFormulaProps) {
  return (
    <Section id={id} muted={muted}>
      <SectionHeading
        eyebrow="The formula"
        title="It takes all three."
        subtitle="A model supplies none of what makes great software. You bring the product expertise — what to build and how you'll know it's right. We bring the AI and engineering expertise, plus the agentic system that turns it into reviewed, production-grade code. Drop any one of the three and you get plausible code that doesn't fit, doesn't scale, or never ships."
      />

      <div className="mt-12 grid items-stretch gap-4 lg:grid-cols-3">
        {ingredients.map((ing, i) => (
          <div key={ing.who} className="relative flex">
            {/* Plus connector between cards */}
            {i > 0 && (
              <div
                aria-hidden
                className="absolute -top-7 left-1/2 -translate-x-1/2 lg:top-1/2 lg:-left-3.5 lg:-translate-x-1/2 lg:-translate-y-1/2"
              >
                <span className="flex size-7 items-center justify-center rounded-full border border-border bg-background text-muted-foreground">
                  <Plus className="size-3.5" />
                </span>
              </div>
            )}
            <div className="flex flex-col rounded-2xl border border-border bg-card/50 p-6">
              <div className="flex items-center justify-between gap-2">
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <ing.icon className="size-5.5" />
                </div>
                <span
                  className={cn(
                    "rounded-full border px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase",
                    ing.supplier === "You"
                      ? "border-primary/40 text-primary"
                      : "border-border text-muted-foreground",
                  )}
                >
                  {ing.supplier === "You"
                    ? "You bring this"
                    : "Tylt brings this"}
                </span>
              </div>
              <p className="mt-4 font-display text-xs font-semibold tracking-[0.12em] text-primary uppercase">
                {ing.role}
              </p>
              <h3 className="mt-1.5 font-heading text-lg font-semibold text-foreground">
                {ing.who}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {ing.body}
              </p>
              {ing.points && (
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {ing.points.map((p) => (
                    <li
                      key={p}
                      className="rounded-md border border-border bg-background px-2 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              )}
              <div className="mt-5 flex items-start gap-2 border-t border-border/60 pt-4">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                <span className="text-sm font-medium text-foreground">
                  {ing.guarantee}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Result */}
      <div className="mx-auto mt-6 flex max-w-3xl flex-col items-center gap-2 rounded-2xl border border-primary/30 bg-primary/5 px-6 py-7 text-center">
        <p className="font-display text-xs font-semibold tracking-[0.12em] text-primary uppercase">
          = a great product
        </p>
        <p className="text-pretty text-foreground sm:text-lg">
          Software that does exactly what it&apos;s supposed to do — and scales
          to the daily active users you need it to.
        </p>
      </div>
    </Section>
  );
}
