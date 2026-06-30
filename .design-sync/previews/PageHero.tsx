import { PageHero, Button } from "harborline-systems";
import { servicesPageContent } from "@/content/services";
import { processPageContent } from "@/content/process";
import { ArrowRight } from "lucide-react";

// Top-of-page header with a single primary CTA in the children slot.
export function Services() {
  const { hero } = servicesPageContent;
  return (
    <PageHero
      eyebrow={hero.eyebrow}
      title={hero.title}
      description={hero.description}
    >
      <Button href="/contact" variant="primary" size="lg">
        Book a Free Audit
        <ArrowRight className="h-4 w-4" aria-hidden />
      </Button>
    </PageHero>
  );
}

// The Process page hero with a two-button CTA row in the children slot.
export function Process() {
  const { hero } = processPageContent;
  return (
    <PageHero
      eyebrow={hero.eyebrow}
      title={hero.title}
      description={hero.description}
    >
      <div className="flex flex-wrap gap-3">
        <Button href="/contact" variant="primary" size="lg">
          Book a Free Audit
        </Button>
        <Button href="/services" variant="secondary" size="lg">
          View Services
        </Button>
      </div>
    </PageHero>
  );
}
