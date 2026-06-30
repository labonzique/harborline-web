import { CTASection } from "harborline-systems";
import { homeContent } from "@/content/home";

// Self-sufficient — with no props it renders the real homepage CTA copy on the
// warm marble band (light theme).
export function Default() {
  return <CTASection />;
}

// The same band on the always-dark graphite surface (wrapped in `.dark`), where
// the gold CTA and outline buttons get their cream-on-graphite treatment.
export function OnDark() {
  return (
    <div className="dark">
      <CTASection />
    </div>
  );
}

// Single-action variant — the secondary "Request a Demo" button is hidden.
export function PrimaryOnly() {
  return (
    <div className="dark">
      <CTASection showSecondary={false} />
    </div>
  );
}

// Custom heading/eyebrow for the bottom-of-home "Start here" close.
export function CustomCopy() {
  const { finalCta } = homeContent;
  return (
    <div className="dark">
      <CTASection
        eyebrow={finalCta.eyebrow}
        title={finalCta.title}
        body="Tell us what is slowing the business down and we will send back a short, plain-language read on where to start."
        supportText="Free first audit, no obligation."
      />
    </div>
  );
}
