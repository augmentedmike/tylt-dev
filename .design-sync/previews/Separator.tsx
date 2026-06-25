import { Separator } from "tylt-dev";

const stack: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 12,
  maxWidth: 280,
};

const label: React.CSSProperties = {
  fontSize: 14,
  fontWeight: 500,
};

const muted: React.CSSProperties = {
  fontSize: 13,
  color: "var(--muted-foreground)",
};

const vrow: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 16,
  height: 24,
  fontSize: 14,
};

export function Horizontal() {
  return (
    <div style={stack}>
      <div>
        <div style={label}>Tylt Studio</div>
        <div style={muted}>Product design and engineering</div>
      </div>
      <Separator />
      <div style={muted}>Trusted by 40+ teams shipping faster.</div>
    </div>
  );
}

export function Vertical() {
  return (
    <div style={vrow}>
      <span>Docs</span>
      <Separator orientation="vertical" />
      <span>Pricing</span>
      <Separator orientation="vertical" />
      <span>Contact</span>
    </div>
  );
}
