import {
  Section,
  SectionHeading,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "tylt-dev";
import { Code2, PenTool, Globe } from "lucide-react";

const icon = "size-5.5 text-primary";

function Capabilities() {
  return (
    <div
      style={{
        marginTop: 48,
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 24,
      }}
    >
      <Card>
        <CardHeader>
          <Code2 className={icon} />
          <CardTitle style={{ marginTop: 12 }}>Software</CardTitle>
          <CardDescription>
            Web apps, internal tools, APIs, and automations — architected to
            scale and shipped production-ready.
          </CardDescription>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <PenTool className={icon} />
          <CardTitle style={{ marginTop: 12 }}>Design</CardTitle>
          <CardDescription>
            Product and brand design that converts — from research and flows to
            polished, on-brand UI systems.
          </CardDescription>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <Globe className={icon} />
          <CardTitle style={{ marginTop: 12 }}>Web</CardTitle>
          <CardDescription>
            Marketing sites and landing pages that load fast, rank well, and
            turn visitors into customers.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}

export function Default() {
  return (
    <Section>
      <SectionHeading
        eyebrow="One team, every discipline"
        title="Software, design, and web — under one roof"
        subtitle="A single integrated team that covers the whole build, so nothing falls between the cracks."
      />
      <Capabilities />
    </Section>
  );
}

export function Muted() {
  return (
    <Section muted>
      <SectionHeading
        eyebrow="The Tylt difference"
        title="A modern team, built for leverage"
        subtitle="We restructured how a development shop works so the savings are real — and the quality doesn't slip."
      />
      <Capabilities />
    </Section>
  );
}
