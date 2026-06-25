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
          <CardTitle>Same-day patching</CardTitle>
          <CardDescription>
            Production broke? We jump on hotfixes with same-day turnaround so
            your users never notice.
          </CardDescription>
          <CardAction>
            <Badge>Included</Badge>
          </CardAction>
        </CardHeader>
        <CardContent>
          <p style={{ fontSize: 13, opacity: 0.7 }}>
            Available on every Partner engagement, no extra retainer.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
