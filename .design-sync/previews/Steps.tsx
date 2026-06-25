import { Gauge, Rocket, ShieldCheck } from "lucide-react";

import { Steps } from "tylt-dev";

const icon = "size-5.5";

export function Default() {
  return (
    <Steps
      eyebrow="How it works"
      title="One engagement, three phases"
      subtitle="A tight loop from idea to launch — and we don't disappear once you're live."
      steps={[
        {
          icon: <Gauge className={icon} />,
          title: "Plan",
          description:
            "We scope the work with you in days, not weeks — clear deliverables, a fixed price, and a timeline you can hold us to.",
        },
        {
          icon: <Rocket className={icon} />,
          title: "Build",
          description:
            "Designers and digital employees move in parallel across software, design, and web. You get working previews early and often, not a big-bang reveal at the end.",
        },
        {
          icon: <ShieldCheck className={icon} />,
          title: "Patch",
          description:
            "After launch we stay on. Bugs and live issues get same-day hotfixes, and your roadmap keeps moving.",
        },
      ]}
    />
  );
}
