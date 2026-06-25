import { Card, CardContent } from "@/components/ui/card";
import { Section, SectionHeading } from "@/components/blocks/section";

export interface Testimonial {
  /** The quote text (without surrounding quotation marks). */
  quote: string;
  /** Person's name. */
  name: string;
  /** Person's role / company. */
  role?: string;
}

export interface TestimonialsProps {
  /** Section id (anchor target). */
  id?: string;
  /** Small uppercase label above the title. */
  eyebrow?: string;
  /** Section title. */
  title: string;
  /** Supporting copy under the title. */
  subtitle?: string;
  /** The testimonials to display. */
  testimonials: Testimonial[];
  /** Use the muted background band. */
  muted?: boolean;
}

/** Grid of testimonial cards, each with a quote and an initials avatar + attribution. */
export function Testimonials({
  id,
  eyebrow,
  title,
  subtitle,
  testimonials,
  muted,
}: TestimonialsProps) {
  return (
    <Section id={id} muted={muted}>
      <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <Card key={t.name} className="h-full border-border/60 bg-card/60">
            <CardContent className="flex h-full flex-col gap-5 pt-6">
              <p className="flex-1 leading-relaxed text-pretty">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 font-display text-sm font-bold text-primary">
                  {initials(t.name)}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  {t.role && (
                    <div className="text-xs text-muted-foreground">
                      {t.role}
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}
