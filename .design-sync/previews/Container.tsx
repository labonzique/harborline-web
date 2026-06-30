import { Container } from "harborline-systems";

// The canonical use: a centered, padded column that every section sits in.
// Container is invisible on its own, so we drop a visible card inside to show
// the constrained, centered content width.
export function Default() {
  return (
    <div className="w-full">
      <Container size="default">
        <div className="rounded-2xl border border-border bg-card-grad p-6 shadow-soft">
          <p className="font-display text-base font-semibold text-foreground">
            One shared page width
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Every section — hero, services, footer — is wrapped in a Container,
            so the whole site keeps the same max width and side padding.
          </p>
        </div>
      </Container>
    </div>
  );
}

// The three sizes, stacked inside a dashed frame that marks the full available
// width. Each centered card shows how far that size lets content stretch.
export function Sizes() {
  const rows = [
    { size: "narrow", note: "max-w-3xl — tight column for long-form reading" },
    { size: "default", note: "max-w-6xl — standard page width" },
    { size: "wide", note: "max-w-7xl — widest, e.g. header & footer" },
  ] as const;

  return (
    <div className="w-full space-y-4 rounded-2xl border border-dashed border-border/60 py-5">
      {rows.map(({ size, note }) => (
        <Container key={size} size={size}>
          <div className="rounded-xl border border-border bg-card-grad px-5 py-4 text-center shadow-soft">
            <p className="font-display text-sm font-semibold text-foreground">
              size=&quot;{size}&quot;
            </p>
            <p className="mt-1 text-xs text-muted-foreground">{note}</p>
          </div>
        </Container>
      ))}
    </div>
  );
}
