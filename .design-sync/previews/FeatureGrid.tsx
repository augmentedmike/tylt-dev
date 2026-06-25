import { Bot, Code2, Globe, PenTool, Users, Wallet } from "lucide-react";

import { FeatureGrid } from "tylt-dev";

const icon = "size-5.5";

export function Default() {
  return (
    <FeatureGrid
      eyebrow="The Tylt difference"
      title="A modern team, built for leverage"
      subtitle="We restructured how a development shop works so the savings are real — and the quality doesn't slip."
      features={[
        {
          icon: <Bot className={icon} />,
          title: "Digital employees do the heavy lifting",
          description:
            "AI-powered workers handle the build, the boilerplate, and the busywork — so the bill isn't padded with hours of manual labor.",
        },
        {
          icon: <Users className={icon} />,
          title: "Real product leadership",
          description:
            "Senior product designers and managers own the strategy, the quality bar, and your roadmap. You're never handed off to a queue.",
        },
        {
          icon: <Wallet className={icon} />,
          title: "Savings passed straight to you",
          description:
            "Lower cost to produce means lower cost to you. Same caliber of work, without the onshore agency markup.",
        },
      ]}
    />
  );
}

export function WithChecklists() {
  return (
    <FeatureGrid
      muted
      eyebrow="One team, every discipline"
      title="Software, design, and web — under one roof"
      subtitle="Not a menu of vendors to wrangle. It's a single integrated team that covers the whole build, so nothing falls between the cracks."
      features={[
        {
          icon: <Code2 className={icon} />,
          title: "Software",
          description:
            "Web apps, internal tools, APIs, and automations — architected to scale and shipped production-ready.",
          points: [
            "Full-stack web & mobile",
            "APIs & integrations",
            "Automation & AI features",
          ],
        },
        {
          icon: <PenTool className={icon} />,
          title: "Design",
          description:
            "Product and brand design that converts — from research and flows to polished, on-brand UI systems.",
          points: [
            "UX research & flows",
            "UI & design systems",
            "Brand & marketing",
          ],
        },
        {
          icon: <Globe className={icon} />,
          title: "Web",
          description:
            "Marketing sites and landing pages that load fast, rank well, and turn visitors into customers.",
          points: [
            "Landing pages & sites",
            "SEO & performance",
            "CMS & analytics",
          ],
        },
      ]}
    />
  );
}
