import { Logo } from "harborline-systems";

// Default: the dark-tone wordmark + mark used in the header on light surfaces.
export function Default() {
  return <Logo />;
}

// Light tone for dark backgrounds (e.g. a dark band): rendered inside a `.dark`
// surface so the wordmark picks up its cream-on-graphite treatment.
export function OnDark() {
  return (
    <div className="dark rounded-2xl bg-dark p-8">
      <Logo tone="light" />
    </div>
  );
}

// Mark only — the layered "harbor lines" tile with the wordmark hidden
// (kept for screen readers). Used in tight spaces.
export function MarkOnly() {
  return <Logo showWordmark={false} />;
}
