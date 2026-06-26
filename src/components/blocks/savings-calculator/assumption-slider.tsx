import { Field } from "@/components/ui/field";
import { Slider } from "@/components/ui/slider";

export interface AssumptionSliderProps {
  label: React.ReactNode;
  /** Helper text explaining what the lever does. */
  hint?: React.ReactNode;
  value: number;
  onValueChange: (value: number) => void;
  min: number;
  max: number;
  step?: number;
  /** Formats the live value shown at the end of the label row. */
  format?: (value: number) => string;
}

/** A labeled slider for one model assumption, with its live value and a hint. */
export function AssumptionSlider({
  label,
  hint,
  value,
  onValueChange,
  min,
  max,
  step = 1,
  format = (v) => String(v),
}: AssumptionSliderProps) {
  return (
    <Field label={label} hint={hint} labelEnd={format(value)}>
      <Slider
        value={[value]}
        min={min}
        max={max}
        step={step}
        onValueChange={(vals) => onValueChange(vals[0])}
        className="py-1"
      />
    </Field>
  );
}
