import { ArrowRight, Check, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { CtaLink } from "@/components/blocks/types";

export interface HeroProps {
  /** Small pill above the headline. */
  badge?: string;
  /** Main headline. */
  title: string;
  /** Optional trailing portion of the headline, rendered in the brand gradient. */
  titleAccent?: string;
  /** Supporting subheadline. */
  subtitle?: string;
  /** Primary (filled) call to action. */
  primaryAction?: CtaLink;
  /** Secondary (outline) call to action. */
  secondaryAction?: CtaLink;
  /** Short reassurance bullets shown beneath the actions. */
  highlights?: string[];
}

/**
 * Centered marketing hero: badge, headline with an optional gradient accent,
 * subheadline, dual CTAs, and a row of reassurance bullets — on a subtle grid +
 * glow backdrop. The top block of a landing page.
 */
export function Hero({
  badge,
  title,
  titleAccent,
  subtitle,
  primaryAction,
  secondaryAction,
  highlights = [],
}: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)] bg-[size:64px_64px] opacity-40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -z-10 h-[480px] w-[680px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="mx-auto max-w-6xl px-4 pt-20 pb-20 sm:px-6 sm:pt-28 sm:pb-28">
        <div className="mx-auto max-w-3xl text-center">
          {badge && (
            <Badge
              variant="outline"
              className="mb-6 gap-1.5 rounded-full border-border/80 bg-background/60 px-3 py-1 text-xs font-medium backdrop-blur"
            >
              <Sparkles className="size-3.5 text-primary" />
              {badge}
            </Badge>
          )}

          <h1 className="font-heading text-4xl font-bold tracking-tight text-balance sm:text-6xl">
            {title}
            {titleAccent && (
              <>
                {" "}
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-primary supports-[background-clip:text]:text-transparent">
                  {titleAccent}
                </span>
              </>
            )}
          </h1>

          {subtitle && (
            <p className="mx-auto mt-6 max-w-2xl text-lg text-pretty text-muted-foreground sm:text-xl">
              {subtitle}
            </p>
          )}

          {(primaryAction || secondaryAction) && (
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              {primaryAction && (
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <a href={primaryAction.href}>
                    {primaryAction.label}
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
              )}
              {secondaryAction && (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  <a href={secondaryAction.href}>{secondaryAction.label}</a>
                </Button>
              )}
            </div>
          )}

          {highlights.length > 0 && (
            <p className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {highlights.map((item) => (
                <span key={item} className="inline-flex items-center gap-1.5">
                  <Check className="size-4 text-primary" />
                  {item}
                </span>
              ))}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
