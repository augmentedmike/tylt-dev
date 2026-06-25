import { cn } from "@/lib/utils";
import { LOGO_MARK_DATA_URI } from "@/components/site/logo-mark";

export interface LogoProps {
  /** Image source for the mark. Defaults to the inlined Tylt mark. */
  src?: string;
  /** Show the "Tylt" wordmark next to the mark. */
  showWordmark?: boolean;
  className?: string;
}

/**
 * Tylt brand lockup: the 3D mark (transparent PNG) at a native header/footer
 * size, with the "Tylt" wordmark alongside it for legibility in light mode.
 */
export function Logo({
  src = LOGO_MARK_DATA_URI,
  showWordmark = true,
  className,
}: LogoProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-display text-lg font-bold tracking-tight",
        className,
      )}
    >
      {/* Plain <img> (not next/image) so this component also bundles cleanly
          into the exported design system. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt="Tylt"
        width={233}
        height={120}
        className="h-7 w-auto"
        loading="eager"
        decoding="async"
      />
      {showWordmark && (
        <span>
          Tylt<span className="text-muted-foreground">.</span>
        </span>
      )}
    </span>
  );
}
