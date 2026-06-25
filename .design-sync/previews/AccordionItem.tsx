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
            What exactly are "digital employees"?
          </AccordionTrigger>
          <AccordionContent>
            AI-powered workers that handle the repetitive parts of building
            software — boilerplate, scaffolding, and routine implementation —
            under the direction of our human product managers.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            How fast can you start and deliver?
          </AccordionTrigger>
          <AccordionContent>
            Most projects are scoped within a couple of days, and a Sprint
            deliverable ships in one to two weeks.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            What if something breaks after launch?
          </AccordionTrigger>
          <AccordionContent>
            Every project includes a patch window, and Partner clients get
            same-day hotfixes on production issues.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
