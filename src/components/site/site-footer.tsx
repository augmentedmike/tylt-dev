import { Logo } from "@/components/site/logo";
import { Badge } from "@/components/ui/badge";

export interface FooterLink {
  /** Link label. */
  label: string;
  /** Link href. */
  href: string;
}

export interface FooterGroup {
  /** Column heading. */
  title: string;
  /** Links in the column. */
  links: FooterLink[];
}

export interface SiteFooterProps {
  /** Tagline shown under the logo. */
  tagline?: string;
  /** Link column groups. */
  groups?: FooterGroup[];
  /** Industry experience, shown under the tagline (e.g. ["Insurance", "Medical"]). */
  industries?: string[];
  /** Compliance standards supported, shown as badges in the bottom bar. */
  compliance?: string[];
  /** Small print shown at the bottom-left (year is prefixed automatically). */
  copyright?: string;
  /** Short note shown at the bottom-right. */
  note?: string;
}

const DEFAULT_GROUPS: FooterGroup[] = [
  {
    title: "Capabilities",
    links: [
      { label: "Software", href: "#capabilities" },
      { label: "Design", href: "#capabilities" },
      { label: "Web", href: "#capabilities" },
    ],
  },
  {
    title: "Process",
    links: [
      { label: "Plan", href: "#process" },
      { label: "Build", href: "#process" },
      { label: "Patch", href: "#process" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Why Tylt", href: "#why" },
      { label: "Pricing", href: "#pricing" },
      { label: "Book a call", href: "#contact" },
    ],
  },
];

/** Site footer: brand + tagline alongside columns of links, with a bottom bar. */
export function SiteFooter({
  tagline = "A new-age development shop. Offshore prices, onshore quality — powered by product talent and digital employees.",
  groups = DEFAULT_GROUPS,
  industries,
  compliance,
  copyright = "Tylt, LLC. All rights reserved.",
  note = "Built fast. Shipped right.",
}: SiteFooterProps) {
  return (
    <footer className="border-t border-border/60 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              {tagline}
            </p>
            {industries && industries.length > 0 && (
              <div className="mt-5">
                <p className="text-xs font-semibold tracking-[0.1em] text-muted-foreground/70 uppercase">
                  Industry experience
                </p>
                <p className="mt-1.5 max-w-xs text-sm text-foreground/80">
                  {industries.join(" · ")}
                </p>
              </div>
            )}
          </div>

          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold">{group.title}</h3>
              <ul className="mt-3 space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-border/60 pt-6">
          {compliance && compliance.length > 0 && (
            <div className="mb-6 flex flex-wrap items-center gap-2">
              <span className="mr-1 text-xs font-medium tracking-[0.1em] text-muted-foreground/70 uppercase">
                Built to support
              </span>
              {compliance.map((standard) => (
                <Badge key={standard} variant="outline" className="font-medium">
                  {standard}
                </Badge>
              ))}
            </div>
          )}
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
            <p>
              © {new Date().getFullYear()} {copyright}
            </p>
            <p>{note}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
