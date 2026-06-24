import * as React from "react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { ctaCopy } from "@/lib/site";

type CTASectionProps = {
  eyebrow?: string;
  title?: React.ReactNode;
  body?: React.ReactNode;
  supportText?: React.ReactNode;
  /** Hide the "Request a Demo" secondary action when not needed. */
  showSecondary?: boolean;
};

/**
 * Inverted (dark) call-to-action band used at the bottom of pages.
 * Defaults to the homepage "Bring us the messy version" message.
 */
export function CTASection({
  eyebrow = "Start here",
  title = "Bring us the messy version.",
  body = "You do not need a perfect brief. Tell us what is slow, scattered, outdated, or unclear. We will help identify what should be cleaned up first.",
  supportText = "No pressure. The first consultation and high-level audit are free.",
  showSecondary = true,
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-dark text-dark-foreground">
      <div aria-hidden className="absolute inset-0 bg-dark-gradient" />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
      />
      <Container className="relative section">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center text-center">
          {/* Brighter gold for legibility on the dark background. */}
          <span className="eyebrow text-gold-bright before:bg-gold-bright/60">
            {eyebrow}
          </span>
          <h2 className="mt-5 text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">
            {title}
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-dark-muted">
            {body}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href={ctaCopy.primary.href} variant="goldCta" size="lg">
              {ctaCopy.primary.label}
            </Button>
            {showSecondary ? (
              <Button
                href={ctaCopy.secondary.href}
                variant="outlineLight"
                size="lg"
              >
                {ctaCopy.secondary.label}
              </Button>
            ) : null}
          </div>
          {supportText ? (
            <p className="mt-6 text-sm text-dark-muted">{supportText}</p>
          ) : null}
        </Reveal>
      </Container>
    </section>
  );
}
