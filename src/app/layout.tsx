import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { JsonLd } from "@/components/seo/json-ld";

const SITE_URL = "https://tylt.dev";
const SITE_NAME = "Tylt";
const TITLE = "Tylt — We're the AI experts. Your team doesn't have to be.";
const DESCRIPTION =
  "Tylt is an American-owned agentic dev shop. We run in-house AI digital workers, steered by senior product leads, to design, build, and ship your software for 60%+ less than a traditional onshore agency.";
const OG_DESCRIPTION =
  "American-owned agentic dev shop. In-house AI workers managed by senior product talent build and ship your software for 60%+ less than a traditional onshore agency.";

// Body — neutral and highly legible at small sizes.
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

// Headings — crisp and characterful at display sizes.
const geistSans = Geist({
  variable: "--font-heading",
  subsets: ["latin"],
});

// Decorative — distinctive geometry for accents (logo, eyebrows, numerals).
const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s — Tylt",
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "technology",
  referrer: "origin-when-cross-origin",
  appleWebApp: { capable: true, title: SITE_NAME, statusBarStyle: "default" },
  formatDetection: { telephone: false, address: false, email: false },
  keywords: [
    "agentic dev shop",
    "AI software development",
    "AI digital workers",
    "AI development agency",
    "American-owned dev shop",
    "vibe code rescue",
    "senior product engineering",
    "custom software development",
    "ship software faster",
    "AI coding agency",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    title: TITLE,
    description: OG_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: OG_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a12" },
  ],
};

// Site-wide structured data: who we are and what the site is.
const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/tylt-mark.png`,
  description: OG_DESCRIPTION,
  email: "hello@tylt.dev",
  areaServed: "US",
  knowsAbout: [
    "Software development",
    "Agentic AI",
    "Product design",
    "Application security",
  ],
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description: DESCRIPTION,
  publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${geistSans.variable} ${spaceGrotesk.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <JsonLd data={organizationLd} />
        <JsonLd data={websiteLd} />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
