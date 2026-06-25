import { ThemeToggle } from "tylt-dev";

const wrap: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 16,
};

export function Default() {
  return (
    <div style={wrap}>
      <ThemeToggle />
    </div>
  );
}
