"use client";

import * as React from "react";
import { PlusIcon } from "lucide-react";

import { Checkbox } from "@/components/ui/checkbox";
import {
  computeSavings,
  DEFAULT_PARAMS,
  type DevLine as DevLineData,
  type ModelParams,
} from "@/lib/savings-model";
import { DevLine } from "./dev-line";
import { AssumptionSlider } from "./assumption-slider";
import { ResultPanel } from "./result-panel";

export interface SavingsCalculatorProps {
  /** Starting team. Each line: role, annual salary, uses-AI flag. */
  defaultTeam?: DevLineData[];
  /** Override any model default (loaded multiplier, anchor, rates…). */
  defaultParams?: Partial<ModelParams>;
  /** CTA target — opens the consultation modal. */
  ctaHref?: string;
}

const STARTER_TEAM: DevLineData[] = [
  {
    id: "dev-1",
    role: "Senior engineer",
    annualSalary: 180_000,
    usesAi: false,
  },
  { id: "dev-2", role: "Mid engineer", annualSalary: 140_000, usesAi: false },
  {
    id: "dev-3",
    role: "Product / PM lead",
    annualSalary: 160_000,
    usesAi: false,
  },
];

export function SavingsCalculator({
  defaultTeam = STARTER_TEAM,
  defaultParams,
  ctaHref = "#lead-consultation",
}: SavingsCalculatorProps) {
  const base = React.useMemo(
    () => ({ ...DEFAULT_PARAMS, ...defaultParams }),
    [defaultParams],
  );

  const [lines, setLines] = React.useState<DevLineData[]>(defaultTeam);
  const [loadedMultiplier, setLoadedMultiplier] = React.useState(
    base.loadedMultiplier,
  );
  const [anchor, setAnchor] = React.useState(base.agentHoursPerDevMonth);
  const [pilot, setPilot] = React.useState(base.agentRate <= 12.5);
  const idCounter = React.useRef(defaultTeam.length);

  const params: ModelParams = {
    ...base,
    loadedMultiplier,
    agentHoursPerDevMonth: anchor,
    agentRate: pilot ? 12.5 : 25,
  };

  // Only real lines (a filled salary) feed the math; blank rows stay in the UI.
  const result = computeSavings(
    lines.filter((l) => Number.isFinite(l.annualSalary) && l.annualSalary > 0),
    params,
  );

  const patch = (id: string, p: Partial<DevLineData>) =>
    setLines((ls) => ls.map((l) => (l.id === id ? { ...l, ...p } : l)));
  const remove = (id: string) =>
    setLines((ls) => ls.filter((l) => l.id !== id));
  const add = () => {
    idCounter.current += 1;
    setLines((ls) => [
      ...ls,
      {
        id: `dev-${idCounter.current}`,
        role: "",
        annualSalary: NaN,
        usesAi: false,
      },
    ]);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_minmax(360px,420px)] lg:items-start">
      {/* Left: team builder + assumptions */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-foreground">
              Your current team
            </h3>
            <span className="text-xs text-muted-foreground">
              Tick “Uses AI” for anyone already on Claude Code, Copilot, etc.
            </span>
          </div>
          {lines.map((line) => (
            <DevLine
              key={line.id}
              line={line}
              onChange={(p) => patch(line.id, p)}
              onRemove={() => remove(line.id)}
              removable={lines.length > 1}
            />
          ))}
          <button
            type="button"
            onClick={add}
            className="flex items-center justify-center gap-2 rounded-xl border border-dashed border-border py-2.5 text-sm font-medium text-muted-foreground transition-colors outline-none hover:border-primary/50 hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/40"
          >
            <PlusIcon className="size-4" />
            Add a developer
          </button>
        </div>

        <div className="flex flex-col gap-5 rounded-2xl border border-border bg-card/40 p-5">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-foreground">
              Assumptions
            </h3>
            <label className="flex items-center gap-2 text-xs text-muted-foreground select-none">
              <Checkbox
                checked={pilot}
                onCheckedChange={(c) => setPilot(c === true)}
              />
              Pilot rate ($12.50/hr)
            </label>
          </div>
          <AssumptionSlider
            label="Loaded-cost multiplier"
            hint="Base salary → true cost (benefits, tax, equipment, overhead). Industry standard ≈ 1.3×."
            value={loadedMultiplier}
            onValueChange={setLoadedMultiplier}
            min={1}
            max={1.6}
            step={0.05}
            format={(v) => `${v.toFixed(2)}×`}
          />
          <AssumptionSlider
            label="Agent-hours per shipped dev-month"
            hint="How much agent time it takes us to deliver one developer-month of reviewed output. Higher = more conservative."
            value={anchor}
            onValueChange={setAnchor}
            min={160}
            max={600}
            step={20}
            format={(v) => `${v} hrs`}
          />
        </div>
      </div>

      {/* Right: result */}
      <div className="lg:sticky lg:top-24">
        <ResultPanel result={result} ctaHref={ctaHref} />
      </div>
    </div>
  );
}
