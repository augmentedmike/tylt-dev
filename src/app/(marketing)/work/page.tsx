import { Gauge, Globe, PenTool } from "lucide-react";

import { Hero } from "@/components/blocks/hero";
import { FeatureGrid } from "@/components/blocks/feature-grid";
import { CallToAction } from "@/components/blocks/call-to-action";
import { JsonLd } from "@/components/seo/json-ld";
import { pageMetadata, breadcrumbLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Our work",
  description:
    "A look at the products, brands, and sites Tylt has planned, built, and shipped.",
  path: "/work",
});

const breadcrumb = breadcrumbLd([
  { name: "Home", path: "/" },
  { name: "Our work", path: "/work" },
]);

const icon = "size-5.5";

/**
 * Example sub-page — demonstrates the sub-page layout: a compact hero followed
 * by content blocks, reusing the same design-system pieces as the homepage.
 */
export default function WorkPage() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      <Hero
        badge="Selected work"
        title="Built fast."
        titleAccent="Shipped right."
        subtitle="A sample of what a small, leveraged team ships when planning, design, and build move together."
        primaryAction={{ label: "Start a project", href: "/#contact" }}
        secondaryAction={{ label: "See pricing", href: "/#savings" }}
      />

      <FeatureGrid
        eyebrow="Recent engagements"
        title="Products our clients put their name on"
        subtitle="Representative engagements across our three disciplines."
        features={[
          {
            icon: <Globe className={icon} />,
            title: "Northwind — marketing site + portal",
            description:
              "A full rebrand, marketing site, and authenticated customer portal delivered in three weeks.",
            points: [
              "Brand & UI system",
              "Next.js build",
              "Launched in 3 weeks",
            ],
          },
          {
            icon: <PenTool className={icon} />,
            title: "Tessel — MVP design + build",
            description:
              "From idea to a launched MVP before the previous agency finished discovery.",
            points: ["Product design", "Full-stack build", "Idea → live MVP"],
          },
          {
            icon: <Gauge className={icon} />,
            title: "Loophealth — live reliability",
            description:
              "Ongoing same-day patching that kept checkout up through a high-traffic launch.",
            points: ["Monitoring", "Same-day hotfixes", "Zero downtime launch"],
          },
        ]}
      />

      <CallToAction
        title="Want to be the next one?"
        subtitle="Tell us what you're building. We'll scope it, price it, and give you a ship date."
        primaryAction={{ label: "Book a call", href: "mailto:hello@tylt.dev" }}
        secondaryAction={{ label: "Back home", href: "/" }}
        note="Typical reply within a few hours"
      />
    </>
  );
}
