import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { LeadDialog } from "@/components/site/lead-dialog";

/**
 * Shared layout for the public marketing site: sticky nav on top, footer on the
 * bottom, page content in between. Every marketing page (home + sub-pages) uses it.
 */
export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader cta={{ label: "Book a call", href: "#lead-consultation" }} />
      <main id="top" className="flex-1">
        {children}
      </main>
      <LeadDialog />
      <SiteFooter
        tagline="American-owned agentic dev shop. We run in-house digital workers — managed by senior product talent — to build and ship your software for 60%+ less than a traditional onshore agency."
        note="Offshore pricing, onshore results."
        groups={[
          {
            title: "Work with us",
            links: [
              { label: "Book a scoping call", href: "#lead-consultation" },
              { label: "See pricing", href: "#pricing" },
              { label: "Read the FAQ", href: "#faq" },
            ],
          },
          {
            title: "Contact",
            links: [{ label: "hello@tylt.dev", href: "mailto:hello@tylt.dev" }],
          },
        ]}
      />
    </>
  );
}
