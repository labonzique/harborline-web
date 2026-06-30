import { SiteHeader } from "harborline-systems";

// The sticky top navigation shown on every page: logo, primary menu, theme
// toggle and the "Book a Free Audit" CTA. Self-sufficient — pulls its nav and
// CTA copy from lib/site.
export function Default() {
  return <SiteHeader />;
}
