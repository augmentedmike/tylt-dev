# Tylt design system (shadcn/ui + Tailwind, themed)

This is a Tailwind v4 + shadcn/ui design system themed for **Tylt** (a dev shop: "offshore prices, onshore quality"). Build with the real components below; style your own layout glue with the Tailwind token utilities below.

## Setup & theming

- **No provider is required** for components to be styled — the tokens live in `styles.css` as CSS variables, applied through Tailwind utilities. Just render the components.
- **Dark mode**: add `class="dark"` to an ancestor (e.g. `<html>` or a wrapper). All tokens have light + `.dark` values; components and your utilities flip automatically.
- **Fonts** are loaded by `styles.css` (Google Fonts) and exposed as utilities — use them, don't hardcode font families:
  - `font-sans` → Inter (body / default)
  - `font-heading` → Geist (headings, card titles)
  - `font-display` → Space Grotesk (decorative accents: eyebrows, big numerals, the logo wordmark)

## Styling idiom — Tailwind token utilities

Style your own markup with these token-backed classes (never raw hex — they carry the brand and dark-mode). The truth is in `styles.css` / `_ds_bundle.css`; read them before inventing classes.

| Purpose         | Classes                                                                                 |
| --------------- | --------------------------------------------------------------------------------------- |
| Surfaces        | `bg-background`, `bg-card`, `bg-muted`, `bg-popover`                                    |
| Text            | `text-foreground`, `text-muted-foreground`, `text-primary`, `text-card-foreground`      |
| Brand / actions | `bg-primary` + `text-primary-foreground`, `bg-secondary`, `bg-accent`, `bg-destructive` |
| Borders / rings | `border-border`, `ring-ring`, `border-border/60` (opacity ok)                           |
| Radius          | `rounded-md`, `rounded-lg`, `rounded-xl`, `rounded-2xl`                                 |

Prefer composing the library components over hand-rolling; reach for these utilities only for layout and spacing around them.

## Components

- **Building blocks (primitives)**: `Button` (variants: default, secondary, outline, ghost, destructive, link; sizes xs/sm/default/lg/icon), `Badge` (same variant set), `Card` (+ `CardHeader`, `CardTitle`, `CardDescription`, `CardAction`, `CardContent`, `CardFooter`), `Avatar` (+ `AvatarImage`, `AvatarFallback`, `AvatarBadge`, `AvatarGroup`, `AvatarGroupCount`), `Accordion` (+ `AccordionItem`, `AccordionTrigger`, `AccordionContent`), `Separator`, `ThemeToggle`.
- **Page blocks (prop-driven sections)**: `Hero`, `Stats`, `FeatureGrid`, `Steps`, `Comparison` (competitor table), `Pricing`, `Testimonials`, `Faq`, `CallToAction`, plus the layout primitives `Section` and `SectionHeading`.
- **Navigation**: `SiteHeader` (sticky nav), `SiteFooter`, `Logo`.

The page blocks take structured props (arrays of features/plans/rows/etc.) — read each component's `<Name>.d.ts` for the exact shape and `<Name>.prompt.md` for usage. Compose a full landing page by stacking blocks; alternate `muted` on sections for banding.

## Idiomatic example

```tsx
<main className="flex min-h-screen flex-col">
  <SiteHeader />
  <Hero
    badge="New-age development shop"
    title="Offshore prices."
    titleAccent="Onshore quality."
    subtitle="Senior product talent plus digital employees — shipped fast, for less."
    primaryAction={{ label: "Book a call", href: "#contact" }}
    secondaryAction={{ label: "See how it works", href: "#process" }}
  />
  <FeatureGrid
    eyebrow="What we do"
    title="Software, design, and web — under one roof"
    columns={3}
    features={[
      { title: "Software", description: "Apps, APIs, automations." },
      { title: "Design", description: "Product & brand that converts." },
      { title: "Web", description: "Fast, ranking marketing sites." },
    ]}
  />
  <SiteFooter />
</main>
```
