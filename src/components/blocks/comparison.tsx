import { Check, Minus } from "lucide-react";

import { Section, SectionHeading } from "@/components/blocks/section";
import { cn } from "@/lib/utils";

export interface ComparisonColumn {
  /** Column header label, e.g. "Tylt" or "US agency". */
  label: string;
  /** Highlight this column as the recommended/own option. */
  highlight?: boolean;
}

export interface ComparisonRow {
  /** The capability being compared. */
  label: string;
  /** One boolean per column (same order as `columns`). */
  values: boolean[];
}

export interface ComparisonProps {
  /** Section id (anchor target). */
  id?: string;
  /** Small uppercase label above the title. */
  eyebrow?: string;
  /** Section title. */
  title: string;
  /** Supporting copy under the title. */
  subtitle?: string;
  /** Columns being compared (the first data column is usually your own offering). */
  columns: ComparisonColumn[];
  /** Capability rows, each with a yes/no value per column. */
  rows: ComparisonRow[];
  /** Use the muted background band. */
  muted?: boolean;
}

/**
 * Competitor comparison table: capabilities down the left, options across the
 * top, check / dash per cell, with one column visually highlighted as the
 * winner. Built for "why us vs. them" sections.
 */
export function Comparison({
  id,
  eyebrow,
  title,
  subtitle,
  columns,
  rows,
  muted,
}: ComparisonProps) {
  const gridStyle: React.CSSProperties = {
    gridTemplateColumns: `1fr repeat(${columns.length}, minmax(64px, 88px))`,
  };

  return (
    <Section id={id} muted={muted}>
      <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />

      {/* Mobile: one card per option (a wide table can't fit a phone). */}
      <div className="mx-auto mt-10 flex max-w-md flex-col gap-4 md:hidden">
        {columns.map((col, ci) => (
          <div
            key={col.label}
            className={cn(
              "rounded-xl border bg-card p-5",
              col.highlight ? "border-primary/40" : "border-border/60",
            )}
          >
            <div
              className={cn(
                "font-heading text-base font-semibold",
                col.highlight ? "text-primary" : "text-foreground",
              )}
            >
              {col.label}
            </div>
            <ul className="mt-3 space-y-2.5">
              {rows.map((row) => (
                <li
                  key={row.label}
                  className="flex items-start gap-2.5 text-sm"
                >
                  {row.values[ci] ? (
                    <Check
                      className={cn(
                        "mt-0.5 size-4 shrink-0",
                        col.highlight ? "text-primary" : "text-foreground",
                      )}
                    />
                  ) : (
                    <Minus className="mt-0.5 size-4 shrink-0 text-muted-foreground/40" />
                  )}
                  <span
                    className={cn(
                      "text-pretty",
                      row.values[ci]
                        ? "text-foreground"
                        : "text-muted-foreground line-through decoration-muted-foreground/30",
                    )}
                  >
                    {row.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Desktop: full comparison table. */}
      <div className="mx-auto mt-12 hidden max-w-3xl overflow-hidden rounded-xl border border-border/60 bg-card md:block">
        <div
          style={gridStyle}
          className="grid items-center gap-2 border-b border-border/60 bg-muted/40 px-4 py-3 text-xs font-semibold sm:px-6 sm:text-sm"
        >
          <div className="text-muted-foreground">Capability</div>
          {columns.map((col) => (
            <div
              key={col.label}
              className={cn(
                "text-center",
                col.highlight ? "text-primary" : "text-muted-foreground",
              )}
            >
              {col.label}
            </div>
          ))}
        </div>
        {rows.map((row, i) => (
          <div
            key={row.label}
            style={gridStyle}
            className={cn(
              "grid items-center gap-2 px-4 py-3.5 text-sm sm:px-6",
              i % 2 ? "bg-muted/20" : "",
            )}
          >
            <div className="font-medium text-pretty">{row.label}</div>
            {row.values.map((on, c) => (
              <ComparisonCell
                key={columns[c]?.label ?? c}
                on={on}
                highlight={columns[c]?.highlight}
              />
            ))}
          </div>
        ))}
      </div>
    </Section>
  );
}

function ComparisonCell({
  on,
  highlight,
}: {
  on: boolean;
  highlight?: boolean;
}) {
  return (
    <div className="flex justify-center">
      {on ? (
        <span
          className={cn(
            "flex size-6 items-center justify-center rounded-full",
            highlight
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-foreground",
          )}
        >
          <Check className="size-3.5" />
        </span>
      ) : (
        <span className="text-muted-foreground/40">—</span>
      )}
    </div>
  );
}
