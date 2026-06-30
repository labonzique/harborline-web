import { LocalCallout, Button } from "harborline-systems";
import { homeContent, localPoints } from "@/content/home";
import { ctaCopy } from "@/lib/site";

// The "Local-first" panel from the Home page: Greater Philadelphia focus, a
// coverage checklist, and a booking CTA. The right rail renders the
// service-area tags pulled from lib/site.
export function Default() {
  return (
    <LocalCallout
      title={homeContent.local.title}
      description={homeContent.local.description}
      points={localPoints}
    >
      <Button href={ctaCopy.primary.href} variant="primary">
        {ctaCopy.primary.label}
      </Button>
    </LocalCallout>
  );
}
