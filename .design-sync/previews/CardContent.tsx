import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "tylt-dev";
import { Check } from "lucide-react";

export function InCard() {
  return (
    <div style={{ maxWidth: 360 }}>
      <Card>
        <CardHeader>
          <CardTitle>What's included</CardTitle>
          <CardDescription>
            Every Partner engagement ships with the essentials baked in.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
              margin: 0,
              padding: 0,
              listStyle: "none",
            }}
          >
            {[
              "Senior product manager on every sprint",
              "Same-day production hotfixes",
              "Weekly shipped deliverables",
              "Onshore-level review on all code",
            ].map((item) => (
              <li
                key={item}
                style={{ display: "flex", alignItems: "center", gap: 8 }}
              >
                <Check size={16} style={{ flexShrink: 0, opacity: 0.7 }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
