import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";

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
  title: {
    default: "Tylt — We're the AI experts. Your team doesn't have to be.",
    template: "%s — Tylt",
  },
  description:
    "Tylt is an American-owned agentic dev shop. We run in-house AI digital workers, steered by senior product leads, to design, build, and ship your software for 60%+ less than a traditional onshore agency.",
  metadataBase: new URL("https://tylt.dev"),
  openGraph: {
    title: "Tylt — We're the AI experts. Your team doesn't have to be.",
    description:
      "American-owned agentic dev shop. In-house AI workers managed by senior product talent build and ship your software for 60%+ less than a traditional onshore agency.",
    type: "website",
  },
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
