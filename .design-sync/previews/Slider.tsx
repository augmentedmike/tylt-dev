import { Slider } from "tylt-dev";

const wrap: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 24,
  width: 320,
  padding: 8,
};

export function Default() {
  return (
    <div style={wrap}>
      <Slider defaultValue={[60]} max={100} step={1} />
    </div>
  );
}

export function Steps() {
  return (
    <div style={wrap}>
      <Slider defaultValue={[1.3]} min={1} max={1.6} step={0.05} />
    </div>
  );
}
