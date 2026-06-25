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
          <CardTitle>Partner</CardTitle>
          <CardDescription>
            An embedded product team for companies shipping continuously.
          </CardDescription>
          <CardAction>
            <Badge>Popular</Badge>
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
              $6,000
            </span>
            <span style={{ fontSize: 14, opacity: 0.6 }}>/ month</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
