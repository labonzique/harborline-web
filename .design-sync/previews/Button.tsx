import { Button } from "harborline-systems";
import { ArrowRight } from "lucide-react";

// Primary CTA — the most common use. Theme-aware graphite button on light.
export function Primary() {
  return (
    <Button href="/contact" variant="primary" size="lg">
      Book a Free Audit
    </Button>
  );
}

// The variants meant for normal (light / marble) surfaces.
export function Surfaces() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="primary">Get started</Button>
      <Button variant="secondary">See our work</Button>
      <Button variant="ghost">Learn more</Button>
    </div>
  );
}

// The variants built for the always-dark feature bands (gold / cream on graphite).
// Rendered inside `.dark` so the theme-aware variants (outlineLight) pick up
// their cream-on-graphite treatment, as they do on the real dark bands.
export function OnDarkBand() {
  return (
    <div className="dark flex flex-wrap items-center gap-3 rounded-2xl bg-dark p-8">
      <Button variant="goldCta">Book a Free Audit</Button>
      <Button variant="outlineLight">Request a Demo</Button>
      <Button variant="solidLight">View Services</Button>
    </div>
  );
}

// The three sizes: sm (header), md (default), lg (page CTAs).
export function Sizes() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="primary" size="sm">Small</Button>
      <Button variant="primary" size="md">Medium</Button>
      <Button variant="primary" size="lg">Large</Button>
    </div>
  );
}

// Trailing icon and the disabled state.
export function States() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="primary">
        Continue
        <ArrowRight className="h-4 w-4" aria-hidden />
      </Button>
      <Button variant="primary" disabled>
        Disabled
      </Button>
    </div>
  );
}
