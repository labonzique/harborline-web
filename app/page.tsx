import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Sparkles,
  ClipboardCheck,
  PenLine,
  ListChecks,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeader } from "@/components/sections/section-header";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { ServiceCard } from "@/components/sections/service-card";
import { TrustCard } from "@/components/sections/trust-card";
import { LocalCallout } from "@/components/sections/local-callout";
import { CTASection } from "@/components/sections/cta-section";
import { HeroSystemDiagram } from "@/components/sections/hero-system-diagram";
import { services } from "@/content/services";
import { processSteps } from "@/content/process";
import {
  problemPoints,
  positioningCards,
  localPoints,
} from "@/content/home";
import { ctaCopy } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* ----------------------------------------------------------------- Hero */}
      <section className="relative overflow-hidden bg-horizon">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-fine-grid opacity-50" />
        <div
          aria-hidden
          className="absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
        />
        <Container size="wide" className="relative">
          <div className="grid items-center gap-14 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-24">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3.5 py-1.5 text-xs font-medium text-muted-foreground shadow-soft backdrop-blur-sm">
                <MapPin className="h-3.5 w-3.5 text-gold" aria-hidden />
                Digital operations agency · Greater Philadelphia
              </span>

              <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-[3.6rem]">
                Less digital clutter.{" "}
                <span className="text-gold">More time</span> to run your
                business.
              </h1>

              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Harborline Systems helps service businesses turn websites, leads,
                CRMs, records, reporting, and automation into one calmer, cleaner
                operating layer.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button href={ctaCopy.primary.href} variant="primary" size="lg">
                  {ctaCopy.primary.label}
                </Button>
                <Button href={ctaCopy.secondary.href} variant="secondary" size="lg">
                  {ctaCopy.secondary.label}
                </Button>
              </div>

              <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
                Free first consultation. High-level audit included. Local onsite
                visits available in Greater Philadelphia.
              </p>
            </Reveal>

            <Reveal delay={0.12} className="lg:pl-6">
              <HeroSystemDiagram />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* -------------------------------------------------------------- Problem */}
      <section className="section">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <Reveal>
              <SectionHeader
                eyebrow="The real problem"
                title={
                  <>
                    Most service businesses do not have a business problem. They
                    have a <span className="text-gold">systems problem</span>.
                  </>
                }
              />
            </Reveal>

            <Reveal delay={0.08}>
              <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {problemPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 border-l-2 border-border pl-4 text-[0.97rem] leading-relaxed text-muted-foreground"
                  >
                    {point}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-pretty text-lg font-medium leading-relaxed text-foreground">
                And slowly, the owner becomes the glue holding everything
                together.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ---------------------------------------------------------- Positioning */}
      <section className="section bg-muted/40">
        <Container>
          <Reveal>
            <SectionHeader
              align="center"
              className="mx-auto max-w-2xl"
              eyebrow="What we do"
              title="We build the operating layer behind your business."
              description="Harborline can start with a website, a lead form, a CRM, a dashboard, or an automation project. But the goal is bigger than one tool — we help the digital side of the business work together, so the business feels easier to run."
            />
          </Reveal>

          <FeatureGrid columns={4} className="mt-14">
            {positioningCards.map((card) => (
              <TrustCard
                key={card.title}
                title={card.title}
                body={card.description}
                icon={card.icon}
              />
            ))}
          </FeatureGrid>
        </Container>
      </section>

      {/* ----------------------------------------------------- Services preview */}
      <section className="section">
        <Container>
          <Reveal>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeader
                className="max-w-2xl"
                eyebrow="Services"
                title="Six ways we clean up the digital side of the business."
                description="Start with the one that hurts most. Most projects grow from there into a connected system."
              />
              <Button href="/services" variant="secondary" className="shrink-0">
                View all services
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
            </div>
          </Reveal>

          <FeatureGrid columns={3} className="mt-14">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </FeatureGrid>
        </Container>
      </section>

      {/* ------------------------------------------------------- Demo-first */}
      <section className="section bg-muted/40">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <SectionHeader
                eyebrow="Demo-first approach"
                title="See the direction before you commit."
                description="For the right projects, we begin with a consultation, a high-level audit, and a practical demo direction — so you can see what better might look like before committing to a full build."
              />
              <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
                Depending on the project, we may create a lightweight demo,
                outline, or improvement plan before the paid build begins.
              </p>
              <Button href={ctaCopy.secondary.href} variant="primary" className="mt-8">
                {ctaCopy.secondary.label}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8">
                <div className="flex items-center gap-2 text-sm font-medium text-gold">
                  <Sparkles className="h-4 w-4" aria-hidden />
                  Before the build
                </div>
                <ul className="mt-6 space-y-4">
                  {[
                    {
                      icon: ClipboardCheck,
                      title: "High-level audit",
                      body: "A clear read on where leads, time, and clarity are leaking today.",
                    },
                    {
                      icon: PenLine,
                      title: "Demo or outline",
                      body: "A practical direction you can see and react to — not a vague pitch.",
                    },
                    {
                      icon: ListChecks,
                      title: "Improvement plan",
                      body: "A short, prioritized list of what to clean up first and why.",
                    },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.title} className="flex gap-4">
                        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold-soft text-gold ring-1 ring-gold/15">
                          <Icon className="h-5 w-5" aria-hidden />
                        </span>
                        <div>
                          <p className="font-medium text-foreground">{item.title}</p>
                          <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                            {item.body}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------- Local */}
      <section className="section">
        <Container>
          <Reveal>
            <LocalCallout
              title="Built local-first for Greater Philadelphia businesses."
              description="We serve Greater Philadelphia and the surrounding suburbs, with onsite visits when it helps. Outside the area, we work remotely — for owners who want a practical partner, not a faceless platform."
              points={localPoints}
            >
              <Button href={ctaCopy.primary.href} variant="primary">
                {ctaCopy.primary.label}
              </Button>
            </LocalCallout>
          </Reveal>
        </Container>
      </section>

      {/* ------------------------------------------------------ Process preview */}
      <section className="section bg-muted/40">
        <Container>
          <Reveal>
            <SectionHeader
              align="center"
              className="mx-auto max-w-2xl"
              eyebrow="How we work"
              title="A clear path from messy to managed."
              description="Five practical steps. We start by understanding how the business actually works — not by selling a tool."
            />
          </Reveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <Reveal
                key={step.key}
                delay={index * 0.06}
                className="relative flex h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-soft"
              >
                <span className="font-display text-sm font-semibold text-gold">
                  {step.number}
                </span>
                <h3 className="mt-3 text-base font-semibold">{step.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.preview}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/process"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-gold"
            >
              See the full process
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------ Founder-led trust */}
      <section className="section">
        <Container>
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-card">
              <div className="grid gap-10 p-8 sm:p-10 lg:grid-cols-[1fr_1px_1fr] lg:gap-12 lg:p-12">
                <div>
                  <span className="eyebrow">Founder-led</span>
                  <h2 className="mt-5 text-balance text-2xl font-semibold leading-tight sm:text-3xl">
                    Practical systems, not tech theater.
                  </h2>
                </div>
                <div aria-hidden className="hidden bg-border lg:block" />
                <div className="flex flex-col justify-center">
                  <p className="text-pretty leading-relaxed text-muted-foreground">
                    Harborline is founder-led and built around practical business
                    operations. The background combines sales systems, reporting,
                    automation, data workflows, and process improvement across
                    smaller business environments and enterprise organizations.
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {[
                      "Sales systems",
                      "Reporting",
                      "Automation",
                      "Data workflows",
                      "Process improvement",
                    ].map((tag) => (
                      <li
                        key={tag}
                        className="rounded-md border border-border bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* --------------------------------------------------------- Final CTA */}
      <CTASection
        eyebrow="Start here"
        title="Tell us what is slowing the business down."
      />
    </>
  );
}
