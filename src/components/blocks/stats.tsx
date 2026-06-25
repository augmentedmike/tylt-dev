export interface Stat {
  /** The headline figure, e.g. "60%" or "<24h". */
  value: string;
  /** What the figure describes. */
  label: string;
}

export interface StatsProps {
  /** The stat figures to display in the band. */
  stats: Stat[];
}

/** Full-width band of headline metrics, two-up on mobile and four-up on desktop. */
export function Stats({ stats }: StatsProps) {
  return (
    <section className="border-y border-border/60 bg-muted/30">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden px-4 sm:px-6 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="px-2 py-8 text-center sm:py-10">
            <div className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {stat.value}
            </div>
            <div className="mt-1.5 text-sm text-balance text-muted-foreground">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
