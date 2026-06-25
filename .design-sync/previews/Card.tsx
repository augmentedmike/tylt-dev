import {
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Badge,
} from "tylt-dev";
import { ArrowRight } from "lucide-react";

export function ProductCard() {
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
        <CardFooter>
          <Button style={{ width: "100%" }}>
            Become a partner
            <ArrowRight />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export function SimpleCard() {
  return (
    <div style={{ maxWidth: 360 }}>
      <Card>
        <CardHeader>
          <CardTitle>Same-day patching</CardTitle>
          <CardDescription>
            Production broke? We jump on hotfixes with same-day turnaround so
            your users never notice.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
