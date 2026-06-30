import { ThemeToggle } from "harborline-systems";

// On a light ("Marble") surface — the default. Shows the moon icon and the
// bordered card-style button used in the site header.
export function Default() {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-border bg-card-grad p-6 shadow-soft">
      <ThemeToggle />
      <p className="text-sm text-muted-foreground">
        Switches between the light and dark theme.
      </p>
    </div>
  );
}

// On a dark surface — wrapped in `.dark` so the button picks up its dark-theme
// border, surface, and gold hover treatment, as it does in the dark header.
export function OnDark() {
  return (
    <div className="dark flex items-center gap-4 rounded-2xl bg-dark p-8">
      <ThemeToggle />
      <p className="text-sm text-muted-foreground">
        Same button, dark surface.
      </p>
    </div>
  );
}
