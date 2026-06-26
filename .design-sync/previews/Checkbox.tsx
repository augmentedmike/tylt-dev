import { Checkbox } from "tylt-dev";

const row: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 10,
  fontSize: 14,
};

export function States() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14, padding: 8 }}>
      <label style={row}>
        <Checkbox defaultChecked />
        Uses AI (Claude Code, Copilot…)
      </label>
      <label style={row}>
        <Checkbox />
        Apply pilot rate ($12.50/hr)
      </label>
    </div>
  );
}
