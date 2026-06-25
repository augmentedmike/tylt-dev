import { ArrowRight, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { CtaLink } from "@/components/blocks/types";

export interface CallToActionProps {
  /** Section id (anchor target). */
  id?: string;
  /** Headline. */
  title: string;
  /** Supporting copy. */
  subtitle?: string;
  /** Primary (filled) action. */
  primaryAction?: CtaLink;
  /** Secondary (outline) action. */
  secondaryAction?: CtaLink;
  /** Small reassurance note shown beneath the buttons. */
  note?: string;
}

/**
 * Closing call-to-action band: a high-contrast primary-colored panel with a
 * headline, dual actions, and a reassurance note. The last block before the footer.
 */
export function CallToAction({
  id,
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  note,
}: CallToActionProps) {
  return (
    <section id={id} className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-border/60 bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12 sm:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_60%)]"
        />
        <div className="relative">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mx-auto mt-4 max-w-xl text-pretty text-primary-foreground/80 sm:text-lg">
              {subtitle}
            </p>
          )}
          {(primaryAction || secondaryAction) && (
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              {primaryAction && (
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto"
                >
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
                  className="w-full border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground sm:w-auto"
                >
                  <a href={secondaryAction.href}>{secondaryAction.label}</a>
                </Button>
              )}
            </div>
          )}
          {note && (
            <p className="mt-6 inline-flex items-center gap-1.5 text-sm text-primary-foreground/70">
              <Clock className="size-4" />
              {note}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
