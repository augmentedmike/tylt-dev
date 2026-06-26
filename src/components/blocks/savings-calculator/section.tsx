import { SavingsCalculator } from "./savings-calculator";
import type { SavingsCalculatorProps } from "./savings-calculator";

export interface TeamSavingsSectionProps extends SavingsCalculatorProps {
  /** Section id (anchor target). */
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}

/**
 * Full "replace your in-house team" section: heading + the interactive savings
 * calculator. Compares against the buyer's own loaded team (a different, higher
 * baseline than the agency comparison used elsewhere on the site).
 */
export function TeamSavingsSection({
  id = "savings",
  eyebrow = "Run the numbers",
  title = "What would Tylt save vs your in-house team?",
  subtitle = "List your current devs, flag who already uses AI, and tweak the assumptions. Every lever is yours to dial — the math stays visible.",
  ...calculatorProps
}: TeamSavingsSectionProps) {
  return (
    <section id={id} className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          {eyebrow && (
            <p className="text-xs font-semibold tracking-[0.12em] text-primary uppercase">
              {eyebrow}
            </p>
          )}
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground sm:text-lg">
              {subtitle}
            </p>
          )}
        </div>
        <SavingsCalculator {...calculatorProps} />
      </div>
    </section>
  );
}
