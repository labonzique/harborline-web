import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeader } from "@/components/sections/section-header";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { TrustCard } from "@/components/sections/trust-card";
import { LocalCallout } from "@/components/sections/local-callout";
import { CTASection } from "@/components/sections/cta-section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { beliefs } from "@/content/beliefs";
import { ctaCopy } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Harborline Systems is a founder-led digital operations agency built for local service businesses in Greater Philadelphia.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | Harborline Systems",
    description:
      "Founder-led digital operations agency built for local service businesses.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Built for owners who need the digital side to simply work."
        description="Harborline Systems is a founder-led digital operations agency helping service businesses organize the tools, workflows, and data behind their daily work."
      />

      {/* Why Harborline exists */}
      <section className="section">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <Reveal>
              <SectionHeader
                eyebrow="Why we exist"
                title="Most businesses are not held back by effort."
              />
            </Reveal>
            <Reveal delay={0.08} className="prose-measure space-y-5 text-pretty">
              <p>
                Many strong local businesses are held back by disconnected
                systems. A good lead comes in, but follow-up is manual. A website
                exists, but it does not reflect the business. Customer records
                live in scattered spreadsheets. Reporting is unclear. Follow-up
                depends on memory.
              </p>
              <p>
                Slowly, the owner becomes the system — the one person holding all
                the moving parts together. That is expensive, fragile, and
                exhausting.
              </p>
              <p className="text-lg font-medium text-foreground">
                Harborline exists to fix that — to build the quiet operating layer
                that lets owners get back to the work only they can do.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Founder-led, practical by design */}
      <section className="section bg-muted/40">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <Reveal className="prose-measure space-y-5 text-pretty">
              <span className="eyebrow">Founder-led, practical by design</span>
              <p className="mt-5">
                Harborline was founded by a data and operations professional who
                has worked with different business environments, from smaller
                companies to enterprise organizations. The work has included sales
                systems, reporting, automation, data workflows, process
                improvement, and practical tools that reduce manual work and help
                teams make better decisions.
              </p>
              <p>
                That background shapes how we work: start with the real workflow,
                keep things practical, and build systems people actually use.
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-2xl border border-border bg-card p-7 shadow-soft sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Experience spans
                </p>
                <ul className="mt-5 space-y-3">
                  {[
                    "Sales systems & CRM",
                    "Reporting & dashboards",
                    "Automation & integrations",
                    "Data workflows & cleanup",
                    "Process improvement",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 border-b border-border pb-3 text-sm text-foreground/85 last:border-0 last:pb-0"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* What we believe */}
      <section className="section">
        <Container>
          <Reveal>
            <SectionHeader
              align="center"
              className="mx-auto max-w-2xl"
              eyebrow="What we believe"
              title="A few principles we build by."
              description="These are the ideas behind every system we put in place."
            />
          </Reveal>

          <FeatureGrid columns={3} className="mt-14">
            {beliefs.map((belief) => (
              <TrustCard
                key={belief.title}
                title={belief.title}
                body={belief.body}
              />
            ))}
          </FeatureGrid>
        </Container>
      </section>

      {/* Local-first */}
      <section className="section bg-muted/40">
        <Container>
          <Reveal>
            <LocalCallout
              eyebrow="Local-first"
              title="Based around Greater Philadelphia."
              description="Harborline works best with owners who value a practical, direct relationship. Remote work is available, but local businesses can benefit from onsite discovery when it is useful."
            >
              <Button href={ctaCopy.primary.href} variant="primary">
                {ctaCopy.primary.label}
              </Button>
            </LocalCallout>
          </Reveal>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
