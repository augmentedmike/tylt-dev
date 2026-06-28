import Link from "next/link";

import { Button } from "@/components/ui/button";

/**
 * Global 404 — rendered for any unmatched URL. Next.js returns a 404 status and
 * automatically adds `<meta name="robots" content="noindex">` here.
 */
export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <p className="font-display text-sm font-semibold tracking-[0.12em] text-primary uppercase">
        404
      </p>
      <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
        This page took a wrong turn.
      </h1>
      <p className="mx-auto mt-4 max-w-md text-pretty text-muted-foreground sm:text-lg">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
        Let&apos;s get you back on track.
      </p>
      <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
        <Button asChild size="lg">
          <Link href="/">Back to home</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/expert-and-ai">Why the engineer matters</Link>
        </Button>
      </div>
    </main>
  );
}
