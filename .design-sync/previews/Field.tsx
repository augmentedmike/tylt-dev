import { Field, NumberField } from "tylt-dev";

const noop = () => {};

export function WithControl() {
  return (
    <div style={{ width: 280, padding: 8 }}>
      <Field
        label="Annual salary"
        hint="Base salary — we apply the loaded multiplier."
        htmlFor="salary"
      >
        <NumberField
          value={180000}
          onValueChange={noop}
          prefix="$"
          suffix="/yr"
        />
      </Field>
    </div>
  );
}

export function WithValue() {
  return (
    <div style={{ width: 280, padding: 8 }}>
      <Field label="Utilization" labelEnd="80%" hint="Share of monthly hours worked.">
        <NumberField value={80} onValueChange={noop} suffix="%" />
      </Field>
    </div>
  );
}
