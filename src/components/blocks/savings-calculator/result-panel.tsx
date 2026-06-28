import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { SavingsResult } from "@/lib/savings-model";

export interface ResultPanelProps {
  result: SavingsResult;
  /** CTA target (opens the consultation modal via #lead-consultation). */
  ctaHref?: string;
}

const usd = (n: number) => "$" + Math.round(n).toLocaleString("en-US");

/** Headline savings panel: % cost reduction up top, then the cost breakdown. */
export function ResultPanel({
  result,
  ctaHref = "#lead-consultation",
}: ResultPanelProps) {
  const pct = Math.round(result.percentReduction * 100);
  const negative = result.monthlySavings < 0;

  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-primary/30 bg-card p-6 sm:p-8">
      {/* Headline — % cost reduction */}
      <div>
        <p className="text-xs font-semibold tracking-[0.1em] text-primary uppercase">
          {negative ? "Cost change" : "Cost reduction"} vs your in-house team
        </p>
        <div className="mt-2 flex items-baseline gap-3">
          <span className="font-display text-6xl font-bold text-foreground tabular-nums">
            {pct}%
          </span>
          <span className="text-sm text-muted-foreground">
            {negative ? "more with Tylt" : "less with Tylt"}
          </span>
        </div>
      </div>

      {/* Breakdown */}
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border">
        <div className="bg-card p-4">
          <p className="text-xs text-muted-foreground">Your team, loaded</p>
          <p className="mt-1 text-xl font-semibold text-foreground tabular-nums">
            {usd(result.currentMonthlyCost)}
            <span className="text-sm font-normal text-muted-foreground">
              /mo
            </span>
          </p>
        </div>
        <div className="bg-card p-4">
          <p className="text-xs text-primary">With Tylt</p>
          <p className="mt-1 text-xl font-semibold text-foreground tabular-nums">
            {usd(result.tyltMonthlyCost)}
            <span className="text-sm font-normal text-muted-foreground">
              /mo
            </span>
          </p>
        </div>
      </div>

      {/* Savings */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs text-muted-foreground">
            {negative ? "Added cost" : "You save"} / year
          </p>
          <p className="font-display text-3xl font-bold text-primary tabular-nums">
            {usd(Math.abs(result.annualSavings))}
          </p>
          <p className="mt-0.5 text-xs text-muted-foreground tabular-nums">
            {usd(Math.abs(result.monthlySavings))}/mo · ~
            {result.teamEffectiveDevMonths.toFixed(1)} effective dev-months
            matched
          </p>
        </div>
        <Button asChild size="lg">
          <a href={ctaHref}>
            Get this quote
            <ArrowRight className="size-4" />
          </a>
        </Button>
      </div>
    </div>
  );
}
