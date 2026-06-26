import { XIcon } from "lucide-react";

import { Checkbox } from "@/components/ui/checkbox";
import { NumberField } from "@/components/ui/number-field";
import { cn } from "@/lib/utils";
import type { DevLine as DevLineData } from "@/lib/savings-model";

export interface DevLineProps {
  line: DevLineData;
  onChange: (patch: Partial<DevLineData>) => void;
  onRemove?: () => void;
  /** Hide the remove button (e.g. when it's the only line). */
  removable?: boolean;
}

const inputClass =
  "h-10 w-full rounded-lg border border-border bg-background/60 px-3 text-sm text-foreground shadow-sm transition-colors outline-none placeholder:text-muted-foreground/60 focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40";

/** One developer in the team: role, annual salary, and whether they already use AI. */
export function DevLine({
  line,
  onChange,
  onRemove,
  removable = true,
}: DevLineProps) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-border bg-card/40 p-3 sm:flex-row sm:items-center sm:gap-3">
      <input
        type="text"
        value={line.role}
        onChange={(e) => onChange({ role: e.target.value })}
        placeholder="Role (e.g. Senior engineer)"
        aria-label="Role"
        className={cn(inputClass, "sm:flex-1")}
      />
      <NumberField
        value={Number.isNaN(line.annualSalary) ? "" : line.annualSalary}
        onValueChange={(v) => onChange({ annualSalary: v })}
        prefix="$"
        suffix="/yr"
        placeholder="140,000"
        aria-label="Annual salary"
        className="sm:w-44"
      />
      <label className="flex shrink-0 items-center gap-2 px-1 text-sm text-muted-foreground select-none">
        <Checkbox
          checked={line.usesAi}
          onCheckedChange={(c) => onChange({ usesAi: c === true })}
        />
        Uses AI
      </label>
      <button
        type="button"
        onClick={onRemove}
        disabled={!removable}
        aria-label="Remove developer"
        className="flex size-9 shrink-0 items-center justify-center self-end rounded-lg text-muted-foreground transition-colors outline-none hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/40 disabled:pointer-events-none disabled:opacity-30 sm:self-auto"
      >
        <XIcon className="size-4" />
      </button>
    </div>
  );
}
