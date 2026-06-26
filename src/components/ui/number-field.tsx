"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export interface NumberFieldProps
  extends Omit<React.ComponentProps<"input">, "onChange" | "value" | "type"> {
  /** Current numeric value (controlled). */
  value: number | "";
  /** Called with the parsed number (or NaN when empty/invalid). */
  onValueChange: (value: number) => void;
  /** Fixed affix shown inside the field, e.g. "$" (start) or "/mo" (end). */
  prefix?: string;
  suffix?: string;
}

/**
 * Controlled numeric input with an optional prefix/suffix affix. Strips
 * commas/spaces so users can paste "140,000". Styled on the design-system tokens.
 */
function NumberField({
  value,
  onValueChange,
  prefix,
  suffix,
  className,
  ...props
}: NumberFieldProps) {
  return (
    <div
      data-slot="number-field"
      className={cn(
        "flex h-10 items-center gap-1.5 rounded-lg border border-border bg-background/60 px-3 text-sm shadow-sm transition-colors focus-within:border-ring focus-within:ring-2 focus-within:ring-ring/40",
        className,
      )}
    >
      {prefix && (
        <span className="shrink-0 text-muted-foreground select-none">
          {prefix}
        </span>
      )}
      <input
        inputMode="numeric"
        value={value}
        onChange={(e) => {
          const cleaned = e.target.value.replace(/[,\s]/g, "");
          onValueChange(cleaned === "" ? NaN : Number(cleaned));
        }}
        className="w-full min-w-0 bg-transparent text-foreground tabular-nums outline-none placeholder:text-muted-foreground/60"
        {...props}
      />
      {suffix && (
        <span className="shrink-0 text-muted-foreground select-none">
          {suffix}
        </span>
      )}
    </div>
  );
}

export { NumberField };
