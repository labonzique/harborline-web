# design-sync notes — Harborline Systems

Repo-specific gotchas for syncing this repo to claude.ai/design. Read before any re-sync.

## What this repo is
- A **Next.js 14 marketing app**, NOT a packaged component library. No `dist/`, no Storybook.
- Shape = `package`, driven off an explicit re-export entry (`.design-sync/ds-entry.tsx`) and an explicit `componentSrcMap` (23 components) because there's no shipped `.d.ts`.
- `--entry ./.design-sync/ds-entry.tsx` makes `PKG_DIR` resolve to the repo root (the entry's nearest `package.json` is the repo's, name `harborline-systems`). Keep passing `--entry` on every build.

## Build commands (exact)
```sh
# 1. Compile CSS (cfg.buildCmd) — REQUIRED before every package-build, and it must
#    re-run after authoring/editing previews (the previews dir is in its content glob,
#    so new preview utility classes only land in the CSS after a recompile).
eval "$(node -e "console.log(require('./.design-sync/config.json').buildCmd)")"

# 2. Build
node .ds-sync/package-build.mjs --config .design-sync/config.json \
  --node-modules ./node_modules --entry ./.design-sync/ds-entry.tsx --out ./ds-bundle

# 3. Validate / capture / serve — ALL need the NSS libs on LD_LIBRARY_PATH (see Chromium below)
SNAPLIB=$(dirname "$(ls /snap/figma-linux/*/usr/lib/x86_64-linux-gnu/libnss3.so 2>/dev/null | head -1)")
LD_LIBRARY_PATH="$SNAPLIB" node .ds-sync/package-validate.mjs ./ds-bundle
```

## Next.js coupling — aliased to static shims
- `next/link` → `.design-sync/shims/next-link.tsx` (renders a plain `<a>`), `next/navigation` →
  `.design-sync/shims/next-navigation.ts` (`usePathname` returns `/`, router methods are no-ops).
  Wired via `cfg.tsconfig` = `.design-sync/tsconfig.ds.json` (esbuild paths plugin). Also resolves the repo's `@/*` alias.
- **TRAP: never put a `"//"` comment key (or any `//`) in `tsconfig.ds.json`.** The converter's
  `tsconfigPathsPlugin` strips `//...` line comments before `JSON.parse`; a `"//"` key corrupts the
  JSON, the plugin silently returns null, and ALL aliases break → real `next/link` gets bundled →
  `ReferenceError: process is not defined` + every component fails the `window.Harborline` export check.

## process polyfill
- `lib/site.ts` reads `process.env.NEXT_PUBLIC_SITE_URL` / `NEXT_PUBLIC_BOOKING_URL` at module-init.
  esbuild's `define` only covers `NODE_ENV`. `.design-sync/ds-polyfill.ts` (imported FIRST in
  `ds-entry.tsx`) defines `globalThis.process = { env: {} }` before any component loads. Both site.ts
  reads have fallbacks, so undefined values are fine.

## Fonts
- Brand fonts = **Inter** (body) + **Plus Jakarta Sans** (display), loaded by the site via
  `next/font/google`. The design tool has no next/font, so `.design-sync/brand-fonts.css` pulls them
  from Google Fonts (`@import url(...)`) and defines `--font-sans` / `--font-display`. buildCmd
  concatenates it ahead of the compiled Tailwind CSS (keeps the `@import` valid at the top).
- `[FONT_REMOTE]` on validate is EXPECTED and fine (families load at runtime from the font host).

## Chromium / render check
- Playwright chromium is installed but the system lacks `libnss3`/`libnspr4` and **sudo needs a
  password** (can't `apt install` non-interactively). Workaround used: borrow those libs from the
  Figma snap via `LD_LIBRARY_PATH=/snap/figma-linux/*/usr/lib/x86_64-linux-gnu` (resolved dynamically
  so it survives a Figma revision bump). Every validate/capture/http-serve command needs it.
- **Permanent fix the user can run:** `sudo apt-get install -y libnss3 libnspr4` — then LD_LIBRARY_PATH
  is no longer needed.

## Grouping
- The converter filters generic dir names (incl. `ui`), so `components/ui/*` (Button, Accordion family)
  land in group **general** alongside ThemeToggle. Other groups map cleanly: sections, layout, motion, contact.
  (Cosmetic; could regroup via `docsMap` category stubs if desired.)

## Render behavior observed
- Reveal-wrapped components (CTASection, PageHero, FeatureGrid, ProcessStep) do NOT blank out in
  headless — IntersectionObserver fires within `networkidle`, content shows. No reduced-motion hack needed.
- Self-sufficient components render their own content fully with no props: ServiceAccordion, SiteFooter,
  SiteHeader, ContactForm, HeroSystemDiagram, LocalCallout, Logo, ThemeToggle.
- Need authored previews (real props/composition; show floor card or thin render with defaults):
  Button, Accordion(+Item/Trigger/Content), ServiceCard, TrustCard, FeatureGrid, ProcessStep, PageHero,
  SectionHeader, Container, Reveal, MobileCtaBar.

## Capture: reduced-motion is REQUIRED
- Several components animate in (HeroSystemDiagram's `animate-pop-in` nodes, Reveal). The capture's
  `settle()` waits only for fonts/images, so without reduced-motion HeroSystemDiagram's lower three
  nodes shoot mid-entrance at ~0 opacity (connectors run to empty space).
- Fix applied: `reducedMotion: 'reduce'` added to `newPage(...)` in BOTH `.ds-sync/package-capture.mjs`
  (line ~101) and `.ds-sync/package-validate.mjs` (line ~441). The components collapse entrance timing
  under `prefers-reduced-motion` (globals.css), so everything captures settled. Faithful + low-risk.
- **`.ds-sync/` is gitignored and re-copied from the skill on every resync, so this edit DOES NOT
  persist — re-apply both one-line edits after the `cp -r` staging step on each resync.**

## Card layout overrides (cfg.overrides)
- Seven components trip `[GRID_OVERFLOW]` (wide / multi-column / full-width stories crop in the
  product grid cell): SiteFooter, SiteHeader, Reveal, FeatureGrid, ProcessStep, ServiceCard, TrustCard.
  Fixed with `cfg.overrides.<Name> = {"cardMode": "column"}` (one story per row, full card width).
  Column cards can't re-flag `wide`, so no confirming re-validate is needed.

## .d.ts prop contracts are hand-written (cfg.dtsPropsFor)
- In synth-entry mode (no shipped `.d.ts`) the extractor yields EMPTY stubs (`[key: string]: unknown`)
  for every component — useless as an API contract. So all 23 prop bodies are hand-written in
  `cfg.dtsPropsFor` (config.json), transcribed from each component's source `type <Name>Props`.
- **On re-sync, if a component's props change in source, update its `cfg.dtsPropsFor` entry to match** —
  the build does NOT re-derive them. Validate's "all .d.ts parse cleanly" confirms they're valid TS.

## Content shape note
- `positioningCards` in `content/home.ts` is `{title, description, icon}[]` (field is `description`,
  not `body`). TrustCard's prop is `body`, so previews map `body={card.description}`.

## Known render warns
- `[FONT_REMOTE] "Inter", "Plus Jakarta Sans"` — expected (see Fonts).
- `[GRID_OVERFLOW]` on the 7 components above is expected and resolved by their `cardMode: column`
  overrides — re-syncs that re-emit those cards as column won't re-flag.
- Full-width components (SiteHeader/SiteFooter/ServiceAccordion/LocalCallout) clip below/right of the
  card fold; visible content is complete and on-brand. SiteHeader shows the mobile hamburger at the
  capture viewport (< lg breakpoint) rather than the desktop nav — cosmetic, card thumbnail only.

## Re-sync risks (watch-list)
- **The `reducedMotion: 'reduce'` capture/validate edits do NOT survive `.ds-sync/` re-staging** —
  re-apply them after `cp -r` or HeroSystemDiagram regrades needs-work. (See "Capture: reduced-motion".)
- **Figma snap path is borrowed for NSS libs.** If Figma is uninstalled/updated and the snap dir is
  gone, the render check fails to launch chromium. Prefer `sudo apt install libnss3 libnspr4`.
- **buildCmd must run before package-build** (CSS is generated, gitignored). resync must regenerate it.
- **Remote Google Fonts** require network at render time; offline → system-ui fallback (no crash).
- Component data (services, nav, footer) is pulled from `content/*.ts` and `lib/site.ts` — previews that
  inline that content will drift if those files change; prefer composing from the real exports.
