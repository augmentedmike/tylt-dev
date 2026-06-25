import { Check } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Section, SectionHeading } from "@/components/blocks/section";
import { cn } from "@/lib/utils";

export interface Feature {
  /** Optional icon node (e.g. a lucide icon). */
  icon?: React.ReactNode;
  /** Feature title. */
  title: string;
  /** Supporting description. */
  description: string;
  /** Optional checklist of sub-points shown under the description. */
  points?: string[];
}

export interface FeatureGridProps {
  /** Section id (anchor target). */
  id?: string;
  /** Small uppercase label above the title. */
  eyebrow?: string;
  /** Section title. */
  title: string;
  /** Supporting copy under the title. */
  subtitle?: string;
  /** The features to render as cards. */
  features: Feature[];
  /** Number of columns on desktop. */
  columns?: 2 | 3;
  /** Use the muted background band. */
  muted?: boolean;
}

/**
 * A heading plus a responsive grid of feature/value-prop cards, each with an
 * optional icon, description, and checklist. Used for "why us", capabilities,
 * and benefit sections.
 */
export function FeatureGrid({
  id,
  eyebrow,
  title,
  subtitle,
  features,
  columns = 3,
  muted,
}: FeatureGridProps) {
  return (
    <Section id={id} muted={muted}>
      <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <div
        className={cn(
          "mt-12 grid gap-6",
          columns === 3 ? "md:grid-cols-3" : "sm:grid-cols-2",
        )}
      >
        {features.map((feature) => (
          <Card
            key={feature.title}
            className="group h-full border-border/60 bg-card/60 transition-colors hover:border-primary/40"
          >
            <CardHeader>
              {feature.icon && (
                <div className="mb-2 flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  {feature.icon}
                </div>
              )}
              <CardTitle className="text-lg">{feature.title}</CardTitle>
              <CardDescription className="leading-relaxed text-pretty">
                {feature.description}
              </CardDescription>
            </CardHeader>
            {feature.points && feature.points.length > 0 && (
              <CardContent>
                <ul className="space-y-2">
                  {feature.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="size-4 shrink-0 text-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
}
