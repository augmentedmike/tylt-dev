import { AssumptionSlider } from "tylt-dev";

const noop = () => {};

export function LoadedMultiplier() {
  return (
    <div style={{ width: 360, padding: 8 }}>
      <AssumptionSlider
        label="Loaded-cost multiplier"
        hint="Base salary → true cost (benefits, tax, equipment). ≈ 1.3×."
        value={1.3}
        onValueChange={noop}
        min={1}
        max={1.6}
        step={0.05}
        format={(v) => `${v.toFixed(2)}×`}
      />
    </div>
  );
}

export function Anchor() {
  return (
    <div style={{ width: 360, padding: 8 }}>
      <AssumptionSlider
        label="Agent-hours per shipped dev-month"
        hint="Higher = more conservative."
        value={360}
        onValueChange={noop}
        min={160}
        max={600}
        step={20}
        format={(v) => `${v} hrs`}
      />
    </div>
  );
}
