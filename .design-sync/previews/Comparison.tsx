import { Comparison } from "tylt-dev";

export function CompetitorTable() {
  return (
    <Comparison
      eyebrow="Why Tylt"
      title="The best of both worlds"
      subtitle="Onshore agencies are slow and expensive. Pure offshore is cheap but risky. Tylt is built to beat both."
      columns={[
        { label: "Tylt", highlight: true },
        { label: "US agency" },
        { label: "Offshore" },
      ]}
      rows={[
        { label: "Senior product oversight", values: [true, true, false] },
        { label: "Offshore-level pricing", values: [true, false, true] },
        { label: "Days-not-quarters turnaround", values: [true, false, false] },
        { label: "Same-day live patching", values: [true, false, false] },
        { label: "Transparent, fixed pricing", values: [true, false, false] },
      ]}
    />
  );
}
