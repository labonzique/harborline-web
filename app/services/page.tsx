import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/sections/page-hero";
import { ServiceAccordion } from "@/components/sections/service-accordion";
import { CTASection } from "@/components/sections/cta-section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { ctaCopy } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Websites, local presence, CRM, automation, data foundation, analytics, and business intelligence for service businesses in Greater Philadelphia.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | Harborline Systems",
    description:
      "Websites, local presence, CRM, automation, data foundation, analytics, and business intelligence for service businesses.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Services that make the digital side of your business easier to run."
        description="Harborline supports the full digital operations layer behind a service business — from how customers find you to how your team tracks, follows up, reports, and improves."
      />

      <section className="section">
        <Container>
          <ServiceAccordion />

          {/* Not sure where to start */}
          <Reveal className="mt-12">
            <div className="overflow-hidden rounded-3xl border border-gold/25 bg-gold-soft p-8 sm:p-10">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <h2 className="text-2xl font-semibold sm:text-3xl">
                    Not sure where to start?
                  </h2>
                  <p className="mt-3 text-pretty leading-relaxed text-foreground/80">
                    Most projects begin with a free consultation and a high-level
                    audit. We look at what you have, find where time and leads are
                    leaking, and help you decide what to clean up first — no
                    commitment required.
                  </p>
                </div>
                <Button
                  href={ctaCopy.primary.href}
                  variant="primary"
                  size="lg"
                  className="shrink-0"
                >
                  {ctaCopy.primary.label}
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
