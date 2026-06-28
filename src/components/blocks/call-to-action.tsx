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
  /** The single call-to-action — one button converts best. */
  primaryAction?: CtaLink;
  /** Small reassurance note shown beneath the button. */
  note?: string;
}

/**
 * Closing call-to-action band: a restrained panel — thick accent border, no
 * fill — with a headline and a single accent button. The last block before the
 * footer. One action keeps the ask unambiguous.
 */
export function CallToAction({
  id,
  title,
  subtitle,
  primaryAction,
  note,
}: CallToActionProps) {
  return (
    <section id={id} className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-4xl rounded-2xl border-2 border-primary/60 px-6 py-14 text-center sm:px-12 sm:py-20">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground sm:text-lg">
            {subtitle}
          </p>
        )}
        {primaryAction && (
          <div className="mt-8 flex justify-center">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href={primaryAction.href}>
                {primaryAction.label}
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
        )}
        {note && (
          <p className="mt-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
            <Clock className="size-4" />
            {note}
          </p>
        )}
      </div>
    </section>
  );
}
