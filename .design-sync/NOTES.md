# design-sync notes — tylt-dev (shadcn/ui — Tylt)

Project: `shadcn/ui — Tylt` (claude.ai/design) — projectId `290d610e-7b2f-46e3-b218-02c7f65749b1`.

## Source shape & build

- This is a **Next.js app**, not a packaged component library — there is no `dist/`. The converter runs in **synth-entry mode**.
- Pass a **nonexistent** `--entry ./dist/index.js` on every build/rebuild: it makes the converter walk up to the repo root for PKG_DIR while still falling back to synth-entry from `src/`. Without it, PKG_DIR resolves to `node_modules/tylt-dev` (doesn't exist) and the build crashes.
- `cfg.srcDir = "src/components"` scopes the synth entry to components only — keeps `src/app/**` (with `next/font` macros) out of the bundle.
- Discovery is from PascalCase value exports in `src/components` (no `.d.ts`). **Do NOT add non-null `componentSrcMap` entries** — any explicit pin disables the synth auto-discovery (it only runs when the explicit set is empty), collapsing the component list. `componentSrcMap` is therefore limited to `{ "ThemeProvider": null }` (a null exclusion is safe; it doesn't disable discovery).

## CSS / fonts

- `cfg.cssEntry` points at `.design-sync/.cache/compiled.css`, compiled by `cfg.buildCmd` from `.design-sync/ds-input.css`. **Recompile the CSS before each bundle build** (and after authoring previews that introduce new utility classes).
- `ds-input.css` imports the app's `globals.css`, adds explicit `@source` for `../src/components` and `./previews` (Tailwind v4 auto-detection skips hidden `.design-sync/` dirs), loads Geist/Inter/Space Grotesk/Geist Mono from Google Fonts, and defines `--font-sans` (Inter) / `--font-heading` (Geist) / `--font-display` (Space Grotesk) / `--font-geist-mono`. The app's globals.css is untouched (app uses next/font).
- Fonts reach designs via a remote `@import` in the styles.css closure → `[FONT_REMOTE]` (informational, loads at runtime).

## Render check

- No Playwright/Chromium cache; **system Chrome is used** via `DS_CHROMIUM_PATH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"`. Only the `playwright` JS package is installed in `.ds-sync` (no browser binary, `PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1`). Export `DS_CHROMIUM_PATH` for `package-validate.mjs`, `lib/preview-rebuild.mjs`, and `package-capture.mjs`.

## Preview authoring

- Import components from the package name: `import { Button } from "tylt-dev"` (shimmed to `window.TyltUI`). `@/...` alias also resolves.
- Use **inline styles** for preview wrapper layout (flex/gap/padding/maxWidth) — they don't depend on Tailwind recompilation. Components bring their own (compiled) utility classes.
- Icons: `import { ArrowRight } from "lucide-react"` works (esbuild bundles it per preview).
- Calibrated good: Button (Variants/Sizes/WithIcons/Disabled), Card (ProductCard/SimpleCard), Comparison (CompetitorTable).

## Groups

- `blocks` = page sections; `general` = primitives + sub-parts + ThemeToggle + SectionHeading; `site` = SiteHeader/SiteFooter/Logo. (SectionHeading lands in `general` because its file matches `Section`; not worth pinning since pinning breaks discovery.)

## Logo in the DS

- `Logo` defaults `src` to an inlined data-URI of the mark (`src/components/site/logo-mark.ts`, generated from `public/tylt-mark.png` via `base64`). This means the mark renders everywhere — the app, headless capture, and Claude Design — with no public-asset dependency. The app also still ships `public/tylt-mark.png` (unused by the component now, but kept). To refresh the mark: replace `public/tylt-mark.png`, regenerate `logo-mark.ts` (`{ printf 'export const LOGO_MARK_DATA_URI =\n  "data:image/png;base64,'; base64 -i public/tylt-mark.png | tr -d '\n'; printf '";\n'; } > src/components/site/logo-mark.ts`), and rebuild.

## Preview gotchas (from the authoring fan-out)

- `DS_CHROMIUM_PATH` must be set in the SAME Bash invocation as the node command (shell env doesn't persist across tool calls).
- For accordion previews, set `defaultValue="item-0"` (or `defaultValue` on the Accordion) so the first answer renders OPEN in the static screenshot — collapsed content is height-0 and looks blank.
- `AvatarBadge` is a plain `<span>` (not a radix part); it sizes off the parent `Avatar`'s `data-size` and must be nested directly inside an `Avatar`. Color overridable via inline `style={{ backgroundColor }}`.
- `AvatarImage` swaps to `AvatarFallback` if the image fails — always include a fallback so cells never go blank. pravatar.cc images DO load in headless capture here.
- Block previews (Hero/Stats/FeatureGrid/Steps/Pricing/Testimonials/Faq/CallToAction) are ports of the real usage in `src/app/(marketing)/page.tsx` — re-port from there if the blocks change.

## Known render warns (triaged legitimate — not new on re-sync)

- `[RENDER_BLANK]`/`[RENDER_THIN]` may flag tiny floor-card components before previews exist; all 35 now have authored previews.
- Faq (and Accordion) static capture shows rows collapsed unless `defaultValue` is set — expected for single-open accordions.
- Pricing `featured` tier's `-top-3` "Most popular" Badge clips slightly at the card's top edge in capture — cosmetic only.

## Server-only code must stay OUT of `src/components`

- The synth entry does `export * from` **every** `.tsx` under `cfg.srcDir` (`src/components`), regardless of `componentSrcMap`. So any file there that transitively imports a Node-only package breaks the esbuild browser bundle (`Could not resolve "stream"/"fs"/"crypto"/…`).
- This bit us with `LeadDialog`, which imported the `submitLead` **server action** (`@/app/actions` → `@/lib/send-lead-email` → `nodemailer`). Fix was to **move `lead-dialog.tsx` out of `src/components` into `src/app/(marketing)/`** so it's never scanned. `componentSrcMap: {LeadDialog: null}` alone does NOT help — it only drops the card, not the import.
- Rule: anything wired to a server action / `nodemailer` / Node built-ins belongs under `src/app`, not `src/components`. `componentSrcMap` nulls kept for `LeadDialog`/`ScrollEffect` (ScrollEffect renders nothing).

## Component groups & overrides (2026 re-sync)

- New groups beyond the original 35: **savings-calculator** (`SavingsCalculator`, `DevLine`, `AssumptionSlider`, `ResultPanel`) and new **general** primitives (`Slider`, `Checkbox`, `NumberField`, `Stepper`, `Field`, `PressHold`, `Dialog`+subparts). Bespoke landing blocks (`AgenticHero`, `AgentDashboard`, `CompetitorSplit`, `PilotBar`, `PricingCalculator`) ship as floor cards — they render fully (all-default props) so they look fine; author previews later if desired.
- `cfg.overrides` set `cardMode: single` for full-bleed blocks (calculator section, hero, dashboard, competitor split, pricing) and `cardMode: column` for wide rows (`DevLine`, `AssumptionSlider`, `PilotBar`). `AssumptionSlider` tripped `[GRID_OVERFLOW]` until column was set.
- Previews render in **light theme** (no `.dark` ancestor), consistent with the original 35. The brand's dark-magenta look only shows with `class="dark"` (see conventions.md). Components are correctly token-styled either way.

## Re-sync risks

- The CSS must be recompiled (`cfg.buildCmd`) before the converter on every re-sync — it's machine state in `.cache/`, not committed.
- Brand fonts load from Google Fonts at runtime (remote `@import`); if offline, designs fall back to system sans.
- System-Chrome rendering depends on Chrome staying installed at the path above; a Chrome major-version change could affect Playwright protocol compatibility (fallback: `npx playwright install chromium`).
