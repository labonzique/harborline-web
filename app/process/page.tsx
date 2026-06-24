import type { Metadata } from "next";
import { Check, X, MapPin } from "lucide-react";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/sections/page-hero";
import { ProcessStep } from "@/components/sections/process-step";
import { SectionHeader } from "@/components/sections/section-header";
import { CTASection } from "@/components/sections/cta-section";
import { Reveal } from "@/components/motion/reveal";
import { processSteps } from "@/content/process";

export const metadata: Metadata = {
  title: "Process",
  description:
    "A practical audit, demo, build, launch, and support process for cleaning up the digital operations behind a service business.",
  alternates: { canonical: "/process" },
  openGraph: {
    title: "Process | Harborline Systems",
    description:
      "A practical audit, demo, build, launch, and support process for cleaning up digital operations.",
    url: "/process",
  },
};

const goodFit = [
  "Owner-led service businesses",
  "Teams with messy lead flow",
  "Businesses with outdated websites",
  "Businesses using spreadsheets as their main system",
  "Teams that need clearer reporting",
  "Owners who want a practical long-term partner",
];

const notIdeal = [
  "Businesses looking for the cheapest one-off website",
  "Businesses that want AI hype without operational basics",
  "Businesses that want a large enterprise implementation before understanding the actual workflow",
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Process"
        title="A simple process for cleaning up complicated systems."
        description="We do not start by selling a tool. We start by understanding how the business actually works."
      />

      {/* Timeline */}
      <section className="section">
        <Container size="narrow">
          <ol className="relative">
            {processSteps.map((step, index) => (
              <li key={step.key}>
                <ProcessStep
                  step={step}
                  index={index}
                  isLast={index === processSteps.length - 1}
                />
              </li>
            ))}
          </ol>

          {/* Local onsite callout */}
          <Reveal className="mt-10">
            <div className="flex items-start gap-4 rounded-2xl border border-gold/25 bg-gold-soft/40 p-6">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold-bright text-dark">
                <MapPin className="h-5 w-5" aria-hidden />
              </span>
              <p className="text-pretty leading-relaxed text-foreground/85">
                For businesses in Greater Philadelphia and nearby suburbs, onsite
                discovery visits may be available — sometimes the fastest way to
                understand how the work really flows is to see it in person.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Good fit / Not ideal */}
      <section className="section bg-muted/40">
        <Container>
          <Reveal>
            <SectionHeader
              align="center"
              className="mx-auto max-w-2xl"
              eyebrow="Honest fit"
              title="Who this works best for."
              description="We would rather be a great fit for the right businesses than a vague fit for everyone."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-border bg-card p-7 shadow-soft sm:p-8">
                <h3 className="flex items-center gap-2.5 text-lg font-semibold">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gold-soft text-gold">
                    <Check className="h-4 w-4" aria-hidden />
                  </span>
                  Good fit
                </h3>
                <ul className="mt-5 space-y-3">
                  {goodFit.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[0.97rem] text-foreground/85">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="h-full rounded-2xl border border-border bg-card p-7 shadow-soft sm:p-8">
                <h3 className="flex items-center gap-2.5 text-lg font-semibold">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-muted text-muted-foreground">
                    <X className="h-4 w-4" aria-hidden />
                  </span>
                  Not ideal
                </h3>
                <ul className="mt-5 space-y-3">
                  {notIdeal.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[0.97rem] text-muted-foreground">
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/60" aria-hidden />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
