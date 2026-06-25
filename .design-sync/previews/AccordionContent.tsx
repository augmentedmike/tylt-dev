import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "tylt-dev";

export function InAccordion() {
  return (
    <div style={{ maxWidth: 560 }}>
      <Accordion type="single" collapsible defaultValue="item-0">
        <AccordionItem value="item-0">
          <AccordionTrigger>What does an engagement include?</AccordionTrigger>
          <AccordionContent>
            A senior product manager leads the work, digital employees handle
            the heavy lifting, and every deliverable is reviewed before it
            ships. You get weekly progress and same-day patches when something
            breaks.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Can you work with our existing codebase?
          </AccordionTrigger>
          <AccordionContent>
            Absolutely. We slot into your repo, follow your conventions, and
            ship pull requests your team can review just like any other
            contributor.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How do we get started?</AccordionTrigger>
          <AccordionContent>
            Book a call, we scope the work within a couple of days, and your
            first deliverable ships in one to two weeks.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
