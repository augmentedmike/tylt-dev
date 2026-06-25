import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Section, SectionHeading } from "@/components/blocks/section";

export interface Step {
  /** Optional icon node (e.g. a lucide icon). */
  icon?: React.ReactNode;
  /** Step title. */
  title: string;
  /** Step description. */
  description: string;
}

export interface StepsProps {
  /** Section id (anchor target). */
  id?: string;
  /** Small uppercase label above the title. */
  eyebrow?: string;
  /** Section title. */
  title: string;
  /** Supporting copy under the title. */
  subtitle?: string;
  /** The ordered steps. Numbers (01, 02, …) are generated automatically. */
  steps: Step[];
  /** Use the muted background band. */
  muted?: boolean;
}

/**
 * Numbered process steps as a row of cards (icon, big ghosted step number,
 * title, description). For "how it works" / process sections.
 */
export function Steps({
  id,
  eyebrow,
  title,
  subtitle,
  steps,
  muted,
}: StepsProps) {
  return (
    <Section id={id} muted={muted}>
      <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {steps.map((step, i) => (
          <Card key={step.title} className="h-full border-border/60 bg-card/60">
            <CardHeader>
              <div className="flex items-center justify-between">
                {step.icon && (
                  <div className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {step.icon}
                  </div>
                )}
                <span className="font-display text-3xl font-bold text-muted-foreground/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <CardTitle className="mt-2 text-xl">{step.title}</CardTitle>
              <CardDescription className="leading-relaxed text-pretty">
                {step.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </Section>
  );
}
