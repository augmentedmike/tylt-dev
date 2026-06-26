"use client";

import * as React from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/site/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import type { CtaLink } from "@/components/blocks/types";

export interface NavLink {
  /** Link label. */
  label: string;
  /** Link href (in-page anchor or route). */
  href: string;
}

export interface SiteHeaderProps {
  /** Primary navigation links. */
  links?: NavLink[];
  /** Optional call-to-action button shown at the end of the bar. */
  cta?: CtaLink;
  /** Show the light/dark theme toggle. */
  showThemeToggle?: boolean;
}

const DEFAULT_LINKS: NavLink[] = [
  { href: "#capabilities", label: "What we do" },
  { href: "#process", label: "How it works" },
  { href: "#why", label: "Why Tylt" },
  { href: "#savings", label: "Pricing" },
];

/**
 * Sticky, blurred top navigation bar: brand logo, centered links, an optional
 * theme toggle and CTA, and a collapsible mobile menu.
 */
export function SiteHeader({
  links = DEFAULT_LINKS,
  cta = { label: "Book a call", href: "#contact" },
  showThemeToggle = true,
}: SiteHeaderProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="shrink-0">
          <Logo />
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          {showThemeToggle && <ThemeToggle />}
          {cta && (
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <a href={cta.href}>{cta.label}</a>
            </Button>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-border/60 md:hidden",
          open ? "max-h-80" : "max-h-0",
          "transition-[max-height] duration-300 ease-in-out",
        )}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 sm:px-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          {cta && (
            <Button asChild className="mt-2">
              <a href={cta.href} onClick={() => setOpen(false)}>
                {cta.label}
              </a>
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
}
