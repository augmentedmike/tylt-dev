import { SectionHeading } from "tylt-dev";

export function Centered() {
  return (
    <SectionHeading
      eyebrow="Why Tylt"
      title="The best of both worlds"
      subtitle="Senior product leadership and digital employees on one team — offshore prices with onshore quality, shipped in days, not quarters."
    />
  );
}

export function LeftAligned() {
  return (
    <SectionHeading
      align="left"
      eyebrow="How it works"
      title="Plan, build, patch — without the agency overhead"
      subtitle="We restructured how a development shop runs so the savings are real and the quality never slips."
    />
  );
}
