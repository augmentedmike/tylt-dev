import type { Metadata } from "next";
import { Bot, Users, Wallet } from "lucide-react";

import { JsonLd } from "@/components/seo/json-ld";
import { SITE_URL } from "@/lib/seo";
import { Stats } from "@/components/blocks/stats";
import { FeatureGrid } from "@/components/blocks/feature-grid";
import { Comparison } from "@/components/blocks/comparison";
import { Faq } from "@/components/blocks/faq";
import { CallToAction } from "@/components/blocks/call-to-action";
import { PilotBar } from "@/components/blocks/pilot-bar";
import { AgenticHero } from "@/components/blocks/agentic-hero";
import { AgentDashboard } from "@/components/blocks/agent-dashboard";
import { CompetitorSplit } from "@/components/blocks/competitor-split";
import { VibeRescue } from "@/components/blocks/vibe-rescue";
import { TeamSavingsSection } from "@/components/blocks/savings-calculator";
import { ScrollEffect } from "@/components/blocks/scroll-effect";

// CTA targets — intercepted by <LeadDialog/> to open the matching modal.
const CONSULT_HREF = "#lead-consultation";
const PILOT_HREF = "#lead-pilot";
const icon = "size-5.5";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

// Single source of truth for the FAQ — rendered as UI and as FAQPage JSON-LD.
const faqItems = [
  {
    question: "Can Tylt be our entire engineering department?",
    answer:
      "Yes — and that's exactly how most of our clients use us. Whether you're a startup with no engineers or a mid-size company that wants to stop hiring, Tylt acts as your full product and engineering org: a senior PM and designer own strategy and quality, digital employees execute the build, and you stay in the loop without managing a team.",
  },
  {
    question: "We have an existing codebase. Can Tylt take it over?",
    answer:
      "Absolutely. We onboard into your repo, your stack, your deployment setup. We do a technical review in the first week, get familiar with the architecture, and start shipping from there. You don't need to rebuild anything to work with us.",
  },
  {
    question: "How does Tylt fit alongside our internal team?",
    answer:
      "Flexibly. Some clients hand off everything; others keep a small internal team for strategy while Tylt handles all execution. We work in your tools (Slack, Linear, GitHub, Figma), join standups if you want, and operate however your team operates. We're an extension, not a replacement — unless you want us to be.",
  },
  {
    question: "What about security, IP ownership, and NDAs?",
    answer:
      "You own everything. All code, designs, and assets built under your engagement are yours — no licensing, no lock-in. We sign NDAs before any work begins. For enterprise clients we offer custom MSAs, SOC 2 documentation, and can work within your existing security and compliance requirements.",
  },
  {
    question: "How do we scale up or wind down?",
    answer:
      "Workers scale month to month. Need to move faster? Add workers. Shipping a smaller scope this month? Reduce utilization or pause. There are no minimums, no penalties for scaling down, and no lock-in contracts. Enterprise clients can run multiple concurrent workstreams under a single engagement.",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Software design, development & delivery",
  serviceType: "Agentic software development",
  url: SITE_URL,
  description:
    "An American-owned agentic dev shop: in-house AI digital workers, steered by senior product leads, design, build, and ship your software for 60%+ less than a traditional onshore agency.",
  provider: { "@type": "Organization", name: "Tylt", url: SITE_URL },
  areaServed: { "@type": "Country", name: "United States" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Tylt services",
    itemListElement: [
      "Product design",
      "Full-stack software development",
      "Vibe-code rescue & security audit",
      "Ongoing maintenance & same-day support",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={serviceLd} />
      <JsonLd data={faqLd} />
      <ScrollEffect />
      <PilotBar ctaHref={PILOT_HREF} />
      <AgenticHero ctaHref={CONSULT_HREF} />
      <AgentDashboard />

      <Stats
        stats={[
          { value: "67%", label: "Lower cost vs a traditional onshore agency" },
          { value: "3×", label: "Faster time to delivery" },
          { value: "<24h", label: "Patch turnaround, guaranteed" },
          { value: "100%", label: "Senior oversight on every project" },
        ]}
      />

      <FeatureGrid
        id="how-it-works"
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

      <CompetitorSplit />

      <VibeRescue ctaHref={CONSULT_HREF} />

      <Comparison
        id="why"
        eyebrow="Why Tylt"
        title="Professional AI labor vs. the alternatives"
        subtitle="Traditional onshore agencies charge human rates for work AI now handles. DIY vibe-coding tools ship fast — then leak secrets and pile up technical debt your engineers have to unwind. Tylt is the third option."
        columns={[
          { label: "Tylt", highlight: true },
          { label: "Traditional agency" },
          { label: "DIY vibe coding" },
        ]}
        rows={[
          { label: "Senior product oversight", values: [true, true, false] },
          { label: "60%+ cost savings", values: [true, false, false] },
          { label: "Production-grade quality", values: [true, true, false] },
          {
            label: "No AI expertise needed from you",
            values: [true, true, false],
          },
          { label: "Your team stays focused", values: [true, true, false] },
          {
            label: "Consistent, predictable velocity",
            values: [true, false, false],
          },
          { label: "Same-day patch support", values: [true, false, false] },
        ]}
      />

      <TeamSavingsSection id="savings" ctaHref={CONSULT_HREF} />

      <Faq
        id="faq"
        eyebrow="FAQ"
        title="Questions, answered"
        subtitle="Still curious? Book a call — we'll walk you through everything."
        items={faqItems}
      />

      <CallToAction
        id="cta"
        title="Ready to ship faster for less?"
        subtitle="Book a free scoping call. We'll map out your project, give you a fixed price, and tell you exactly when it ships."
        primaryAction={{ label: "Book a call", href: CONSULT_HREF }}
        secondaryAction={{ label: "View pricing", href: "#savings" }}
        note="Typical reply within a few hours"
      />
    </>
  );
}
