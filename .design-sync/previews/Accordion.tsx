import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "tylt-dev";

const wrap: React.CSSProperties = {
  maxWidth: 460,
  width: "100%",
};

export function Faq() {
  return (
    <div style={wrap}>
      <Accordion type="single" collapsible>
        <AccordionItem value="timeline">
          <AccordionTrigger>
            How long does a typical engagement take?
          </AccordionTrigger>
          <AccordionContent>
            Most Tylt projects ship a first production release in four to six
            weeks. We scope an initial milestone up front so you see working
            software early and often.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="stack">
          <AccordionTrigger>What stack do you build on?</AccordionTrigger>
          <AccordionContent>
            We default to React, Next.js, and TypeScript with a Postgres
            backend, but we adapt to whatever your team already maintains so you
            are never locked into ours.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="handoff">
          <AccordionTrigger>Do we own the code afterward?</AccordionTrigger>
          <AccordionContent>
            Always. Every line lives in your repositories from day one, with
            documentation and a handoff session so your engineers can keep
            shipping without us.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
