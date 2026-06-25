import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section, SectionHeading } from "@/components/blocks/section";

export interface FaqItem {
  /** The question. */
  question: string;
  /** The answer. */
  answer: string;
}

export interface FaqProps {
  /** Section id (anchor target). */
  id?: string;
  /** Small uppercase label above the title. */
  eyebrow?: string;
  /** Section title. */
  title: string;
  /** Supporting copy under the title. */
  subtitle?: string;
  /** The question/answer pairs. */
  items: FaqItem[];
  /** Use the muted background band. */
  muted?: boolean;
}

/** Frequently-asked-questions section built on a single-open accordion. */
export function Faq({ id, eyebrow, title, subtitle, items, muted }: FaqProps) {
  return (
    <Section id={id} muted={muted}>
      <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <div className="mx-auto mt-10 max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {items.map((item, i) => (
            <AccordionItem key={item.question} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base font-medium">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="leading-relaxed text-pretty text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
