import { CallToAction } from "tylt-dev";

export function ClosingBand() {
  return (
    <CallToAction
      title="Ready to ship faster for less?"
      subtitle="Book a free scoping call. We'll map out your project, give you a fixed price, and tell you exactly when it ships."
      primaryAction={{ label: "Book a call", href: "mailto:hello@tylt.dev" }}
      secondaryAction={{ label: "View pricing", href: "#pricing" }}
      note="Typical reply within a few hours"
    />
  );
}
