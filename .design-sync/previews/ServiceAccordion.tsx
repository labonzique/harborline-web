import { ServiceAccordion } from "harborline-systems";

// Full expandable list of service categories for the Services page. Each row
// has an icon, name and summary; opening a panel reveals "what we support",
// common signs, and the "what better looks like" outcome box. Self-sufficient —
// it pulls its own services from content.
export function Default() {
  return <ServiceAccordion />;
}
