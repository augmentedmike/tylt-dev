import { NumberField } from "tylt-dev";

const noop = () => {};

export function Currency() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 240, padding: 8 }}>
      <NumberField value={140000} onValueChange={noop} prefix="$" suffix="/yr" />
      <NumberField value={25} onValueChange={noop} prefix="$" suffix="/hr" />
    </div>
  );
}
