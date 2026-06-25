import { Badge } from "tylt-dev";
import { Check, Sparkles } from "lucide-react";

const row: React.CSSProperties = {
  display: "flex",
  gap: 8,
  flexWrap: "wrap",
  alignItems: "center",
};

export function Variants() {
  return (
    <div style={row}>
      <Badge>Most popular</Badge>
      <Badge variant="secondary">New</Badge>
      <Badge variant="destructive">Deprecated</Badge>
      <Badge variant="outline">Beta</Badge>
      <Badge variant="ghost">Draft</Badge>
      <Badge variant="link">Changelog</Badge>
    </div>
  );
}

export function WithIcon() {
  return (
    <div style={row}>
      <Badge>
        <Check />
        Verified
      </Badge>
      <Badge variant="secondary">
        <Sparkles />
        AI powered
      </Badge>
    </div>
  );
}
