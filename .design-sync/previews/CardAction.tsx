import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  Badge,
} from "tylt-dev";

export function InCard() {
  return (
    <div style={{ maxWidth: 360 }}>
      <Card>
        <CardHeader>
          <CardTitle>Launch</CardTitle>
          <CardDescription>
            A full product build from scoping to ship, run by a dedicated
            product manager.
          </CardDescription>
          <CardAction>
            <Badge>Best value</Badge>
          </CardAction>
        </CardHeader>
        <CardContent>
          <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
            <span
              style={{
                fontSize: 36,
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              $12,000
            </span>
            <span style={{ fontSize: 14, opacity: 0.6 }}>/ project</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
