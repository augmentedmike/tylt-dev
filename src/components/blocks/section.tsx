import { cn } from "@/lib/utils";

export interface SectionProps extends React.ComponentProps<"section"> {
  /** Apply the muted background + top/bottom borders used for alternating bands. */
  muted?: boolean;
}

/**
 * Vertical page band with consistent padding and a centered max-width container.
 * The building block every landing-page section sits inside.
 */
export function Section({
  muted,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "px-4 py-20 sm:px-6 sm:py-24",
        muted && "border-y border-border/60 bg-muted/30",
        className,
      )}
      {...props}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export interface SectionHeadingProps {
  /** Small uppercase label above the title. */
  eyebrow?: string;
  /** The section title. */
  title: string;
  /** Supporting copy below the title. */
  subtitle?: string;
  /** Heading alignment. */
  align?: "center" | "left";
}

/** Eyebrow + title + subtitle heading used at the top of most sections. */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      {eyebrow && (
        <div className="mb-3 font-display text-sm font-semibold tracking-wider text-primary uppercase">
          {eyebrow}
        </div>
      )}
      <h2 className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-pretty text-muted-foreground sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
