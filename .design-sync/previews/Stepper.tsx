import { Stepper } from "tylt-dev";

const noop = () => {};

export function Default() {
  return (
    <div style={{ padding: 8 }}>
      <Stepper value={2} onValueChange={noop} min={1} max={8} aria-label="Workers" />
    </div>
  );
}
