import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "tylt-dev";

export function InAccordion() {
  return (
    <div style={{ maxWidth: 560 }}>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-0">
          <AccordionTrigger>
            How is quality as good as an onshore team?
          </AccordionTrigger>
          <AccordionContent>
            Real product managers lead every engagement and review every
            deliverable. The digital employees accelerate the work; humans
            guarantee it.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-1">
          <AccordionTrigger>How does the pricing stay so low?</AccordionTrigger>
          <AccordionContent>
            Digital employees lower our cost to produce, and we pass those
            savings directly to you — offshore-level prices for onshore-level
            work.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Do I get a dedicated point of contact?
          </AccordionTrigger>
          <AccordionContent>
            Yes. Every engagement is led by a senior product manager who owns
            scope, quality, and communication end to end.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
