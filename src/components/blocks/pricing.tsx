import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section, SectionHeading } from "@/components/blocks/section";
import type { CtaLink } from "@/components/blocks/types";

export interface PricingPlan {
  /** Plan name, e.g. "Sprint". */
  name: string;
  /** Price string, e.g. "$2,500" or "Let's talk". */
  price: string;
  /** Optional cadence suffix, e.g. "/ month". */
  cadence?: string;
  /** Short description of who the plan is for. */
  blurb?: string;
  /** Included features. */
  features: string[];
  /** The plan's call to action. */
  cta: CtaLink;
  /** Render this plan as the highlighted/most-popular tier. */
  featured?: boolean;
}

export interface PricingProps {
  /** Section id (anchor target). */
  id?: string;
  /** Small uppercase label above the title. */
  eyebrow?: string;
  /** Section title. */
  title: string;
  /** Supporting copy under the title. */
  subtitle?: string;
  /** The pricing tiers to display. */
  plans: PricingPlan[];
  /** Use the muted background band. */
  muted?: boolean;
}

/** Pricing section: a row of plan cards with one highlighted "most popular" tier. */
export function Pricing({
  id,
  eyebrow,
  title,
  subtitle,
  plans,
  muted,
}: PricingProps) {
  return (
    <Section id={id} muted={muted}>
      <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <div className="mt-12 grid items-start gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={
              plan.featured
                ? "relative h-full border-primary shadow-lg shadow-primary/10"
                : "h-full border-border/60"
            }
          >
            {plan.featured && (
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3">
                Most popular
              </Badge>
            )}
            <CardHeader>
              <CardTitle className="text-lg">{plan.name}</CardTitle>
              <div className="flex items-baseline gap-1">
                <span className="font-heading text-4xl font-bold tracking-tight">
                  {plan.price}
                </span>
                {plan.cadence && (
                  <span className="text-sm text-muted-foreground">
                    {plan.cadence}
                  </span>
                )}
              </div>
              {plan.blurb && (
                <CardDescription className="text-pretty">
                  {plan.blurb}
                </CardDescription>
              )}
            </CardHeader>
            <CardContent className="flex flex-1 flex-col gap-6">
              <ul className="space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check className="size-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                variant={plan.featured ? "default" : "outline"}
                className="mt-auto w-full"
              >
                <a href={plan.cta.href}>{plan.cta.label}</a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
