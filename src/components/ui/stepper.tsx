"use client";

import * as React from "react";
import { MinusIcon, PlusIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export interface StepperProps {
  value: number;
  onValueChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  /** Accessible label for the control group. */
  "aria-label"?: string;
  className?: string;
}

/** Integer +/- stepper with min/max clamping, on the design-system tokens. */
function Stepper({
  value,
  onValueChange,
  min = 0,
  max = Infinity,
  step = 1,
  className,
  ...props
}: StepperProps) {
  const clamp = (n: number) => Math.min(max, Math.max(min, n));
  const dec = () => onValueChange(clamp(value - step));
  const inc = () => onValueChange(clamp(value + step));

  const btn =
    "flex size-9 items-center justify-center text-muted-foreground transition-colors outline-none hover:text-foreground hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring/40 disabled:pointer-events-none disabled:opacity-40";

  return (
    <div
      data-slot="stepper"
      role="group"
      className={cn(
        "inline-flex items-center overflow-hidden rounded-lg border border-border bg-background/60",
        className,
      )}
      {...props}
    >
      <button
        type="button"
        onClick={dec}
        disabled={value <= min}
        aria-label="Decrease"
        className={btn}
      >
        <MinusIcon className="size-4" />
      </button>
      <span className="min-w-9 border-x border-border px-1 py-1.5 text-center text-sm font-semibold text-foreground tabular-nums">
        {value}
      </span>
      <button
        type="button"
        onClick={inc}
        disabled={value >= max}
        aria-label="Increase"
        className={btn}
      >
        <PlusIcon className="size-4" />
      </button>
    </div>
  );
}

export { Stepper };
