import { SectionHeader } from "harborline-systems";
import { homeContent } from "@/content/home";

// Default left-aligned block: eyebrow, heading and supporting copy.
export function Left() {
  const { positioning } = homeContent;
  return (
    <div className="max-w-2xl">
      <SectionHeader
        eyebrow={positioning.eyebrow}
        title={positioning.title}
        description={positioning.description}
      />
    </div>
  );
}

// Centered alignment — used above feature bands and centered sections.
export function Centered() {
  const { processPreview } = homeContent;
  return (
    <div className="mx-auto max-w-2xl">
      <SectionHeader
        align="center"
        eyebrow={processPreview.eyebrow}
        title={processPreview.title}
        description={processPreview.description}
      />
    </div>
  );
}

// Compact variant: eyebrow + heading rendered as an h3, no description.
export function Compact() {
  const { servicesPreview } = homeContent;
  return (
    <div className="max-w-2xl">
      <SectionHeader
        as="h3"
        eyebrow={servicesPreview.eyebrow}
        title={servicesPreview.title}
      />
    </div>
  );
}
