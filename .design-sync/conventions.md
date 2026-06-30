# Harborline Systems — build conventions

A Tailwind-based component kit for a digital-operations agency. Calm, editorial, graphite + warm-marble with a single gold accent. Brand voice: plain, concrete, no AI hype, no fake metrics, no prices.

## Setup & theming
- **No providers or context are required.** Components are plain React + Tailwind; just render them. The one exception is the Accordion compound: nest `Accordion` → `AccordionItem` → `AccordionTrigger` / `AccordionContent` (give `Accordion` a `type="single" collapsible` or `type="multiple"`).
- **Themes are class-based, light by default.** Light "Marble" is `:root`; dark "Graphite" turns on when an ancestor has `class="dark"` (e.g. `<div className="dark bg-background text-foreground">`). Every color token below flips automatically — never hard-code hex; use the semantic classes so both themes work.
- `Button` renders an `<a>` when given `href`, otherwise a `<button>`. Internal vs external links are handled for you.

## Styling idiom — Tailwind utilities bound to HSL tokens
Style with these semantic classes (they read `hsl(var(--token))`, so they're theme-aware). Do NOT invent raw colors.

| Role | Classes |
|---|---|
| Page surface / text | `bg-background` `text-foreground` |
| Muted section / caption | `bg-muted` `text-muted-foreground` |
| Card surface | `bg-card` (or `bg-card-grad` for the tactile gradient surface); text stays `text-foreground` |
| Borders / focus ring | `border-border` (focus uses the `--ring` token) |
| Gold accent | `text-gold` `bg-gold-soft` (tint) `bg-gold` `text-gold-foreground` |
| Primary CTA | `bg-primary-grad text-primary-foreground` (light=graphite, dark=gold) |
| Always-dark island | `bg-dark text-dark-foreground` (graphite in both themes) |
| Type | `font-sans` (Inter, body) · `font-display` (Plus Jakarta Sans, headings) |
| Radius / shadow | `rounded-lg/xl/2xl` · `shadow-soft` `shadow-card` `shadow-lift` `shadow-gold` |

**Brand component classes** (defined in the bound stylesheet, use as-is):
- `.eyebrow` — small gold uppercase kicker above a heading (auto gold dash).
- `.section` — standard vertical section padding.
- `.bg-primary-grad` `.bg-gold-grad` `.bg-secondary-grad` `.bg-card-grad` — tactile button/surface gradients.
- `.bg-band` — the warm-marble / graphite feature band (CTA strips). `.bg-horizon` — soft hero background.
- `.prose-measure` — comfortable reading column for long copy.

## Where the truth lives
Read the bound `styles.css` (and the `_ds_bundle.css` it `@import`s — the full compiled token + utility set) before styling, and each component's `<Name>.prompt.md` / `<Name>.d.ts` for its API. Section blocks (`PageHero`, `SectionHeader`, `FeatureGrid`, `CTASection`, `ServiceCard`, `TrustCard`, `ProcessStep`) already encode the brand layout — prefer composing them over hand-rolling sections.

## Idiomatic example
```tsx
<section className="section bg-background">
  <SectionHeader
    eyebrow="What we do"
    title="We build the operating layer behind your business."
    description="Local presence, a site that matches the business, and clean operations."
  />
  <FeatureGrid columns={3} className="mt-12">
    {services.map((s) => <ServiceCard key={s.id} service={s} />)}
  </FeatureGrid>
  <div className="mt-10 flex gap-3">
    <Button href="/contact" variant="primary" size="lg">Book a Free Audit</Button>
    <Button href="/services" variant="secondary" size="lg">View Services</Button>
  </div>
</section>
```
For dark CTA bands, wrap dark-surface button variants (`goldCta`, `outlineLight`, `solidLight`) in a `.dark` ancestor so they pick up their cream-on-graphite treatment.
