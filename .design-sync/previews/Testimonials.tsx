import { Testimonials } from "tylt-dev";

export function Quotes() {
  return (
    <Testimonials
      eyebrow="Social proof"
      title="Teams that ship with Tylt"
      subtitle="Real product work, delivered fast — without the agency price tag."
      testimonials={[
        {
          quote:
            "Tylt rebuilt our marketing site and a customer portal in three weeks. The quality was indistinguishable from the US agency we'd been paying triple.",
          name: "Dana Reyes",
          role: "Founder, Northwind",
        },
        {
          quote:
            "A bug took down checkout on a Saturday. I messaged Tylt and it was patched within the hour. That responsiveness alone is worth it.",
          name: "Marcus Hale",
          role: "COO, Loophealth",
        },
        {
          quote:
            "They plan fast and actually ship. We went from idea to launched MVP before our last agency would have finished the discovery phase.",
          name: "Priya Anand",
          role: "Head of Product, Tessel",
        },
      ]}
    />
  );
}
