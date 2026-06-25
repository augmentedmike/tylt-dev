import { Faq } from "tylt-dev";

export function Questions() {
  return (
    <Faq
      eyebrow="FAQ"
      title="Questions, answered"
      subtitle="Still curious? Book a call and we'll walk you through it."
      items={[
        {
          question: "What exactly are “digital employees”?",
          answer:
            "AI-powered workers that handle the repetitive, time-intensive parts of building software — boilerplate, scaffolding, and routine implementation. They work under the direction of our human product designers and managers, who own quality and strategy. The result is agency-grade output produced far more efficiently.",
        },
        {
          question: "How is the quality as good as an onshore team?",
          answer:
            "Because real product designers and managers lead every engagement and review every deliverable. The digital employees accelerate the work; humans guarantee it. You get senior oversight on everything that ships.",
        },
        {
          question: "How fast can you actually start and deliver?",
          answer:
            "Most projects are scoped within a couple of days and a Sprint deliverable ships in 1–2 weeks. Live patches are typically turned around the same day.",
        },
        {
          question: "What if something breaks after launch?",
          answer:
            "Every project includes a patch window, and Partner clients get same-day hotfixes on production issues. You're never left stranded with a broken release.",
        },
        {
          question: "How does the pricing stay so low?",
          answer:
            "We've restructured how a dev shop operates. Digital employees lower our cost to produce, and we pass those savings directly to you — so you pay offshore-level prices for onshore-level work.",
        },
      ]}
    />
  );
}
