import * as React from "react";

import { cn } from "@/lib/utils";

export interface FieldProps extends React.ComponentProps<"div"> {
  /** Field label. */
  label?: React.ReactNode;
  /** Optional helper/hint text under the control. */
  hint?: React.ReactNode;
  /** Optional value/badge shown at the end of the label row (e.g. a live slider value). */
  labelEnd?: React.ReactNode;
  /** Associates the label with a control. */
  htmlFor?: string;
}

/** Label + control + hint wrapper for form rows. Presentational, composes any control. */
function Field({
  label,
  hint,
  labelEnd,
  htmlFor,
  className,
  children,
  ...props
}: FieldProps) {
  return (
    <div data-slot="field" className={cn("flex flex-col gap-1.5", className)} {...props}>
      {(label || labelEnd) && (
        <div className="flex items-center justify-between gap-2">
          {label && (
            <label
              htmlFor={htmlFor}
              className="text-sm font-medium text-foreground"
            >
              {label}
            </label>
          )}
          {labelEnd && (
            <span className="text-sm font-semibold text-foreground tabular-nums">
              {labelEnd}
            </span>
          )}
        </div>
      )}
      {children}
      {hint && <p className="text-xs text-muted-foreground">{hint}</p>}
    </div>
  );
}

export { Field };
