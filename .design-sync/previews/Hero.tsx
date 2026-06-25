import { Hero } from "tylt-dev";

export function Default() {
  return (
    <Hero
      badge="New-age development shop"
      title="Offshore prices."
      titleAccent="Onshore quality."
      subtitle="Tylt pairs senior product designers and managers with digital employees to plan, build, and patch your software — shipping the work of a full agency at a fraction of the cost, and a fraction of the wait."
      primaryAction={{ label: "Book a call", href: "#contact" }}
      secondaryAction={{ label: "See how it works", href: "#process" }}
      highlights={[
        "No bloated agency retainers",
        "Fixed, transparent pricing",
        "Ship in days, not quarters",
      ]}
    />
  );
}
