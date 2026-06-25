import { Pricing } from "tylt-dev";

export function Plans() {
  return (
    <Pricing
      eyebrow="Pricing"
      title="Transparent pricing, no surprises"
      subtitle="Pick an engagement that fits. Every plan is fixed-price — you always know what you'll pay."
      plans={[
        {
          name: "Sprint",
          price: "$2,500",
          cadence: "/ project",
          blurb:
            "A landing page, a feature, or a fix — scoped and shipped fast.",
          features: [
            "One clear deliverable",
            "Design + build included",
            "1–2 week turnaround",
            "30 days of patches",
          ],
          cta: { label: "Start a sprint", href: "#contact" },
        },
        {
          name: "Partner",
          price: "$6,000",
          cadence: "/ month",
          blurb:
            "An embedded product team for companies shipping continuously.",
          features: [
            "Dedicated product lead",
            "Ongoing design & build",
            "Same-day live patching",
            "Roadmap planning",
            "Priority turnaround",
          ],
          cta: { label: "Become a partner", href: "#contact" },
          featured: true,
        },
        {
          name: "Custom",
          price: "Let's talk",
          blurb:
            "Bigger build, multiple teams, or something unusual? We'll scope it.",
          features: [
            "Tailored scope & team",
            "Flexible engagement",
            "Volume pricing",
            "Dedicated Slack channel",
          ],
          cta: { label: "Get a quote", href: "#contact" },
        },
      ]}
    />
  );
}
