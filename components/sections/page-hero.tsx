import * as React from "react";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Optional CTA row or extra content below the description. */
  children?: React.ReactNode;
  className?: string;
};

/** Consistent header used at the top of the Services, Process, About, Contact pages. */
export function PageHero({
  eyebrow,
  title,
  description,
  children,
  className,
}: PageHeroProps) {
  return (
    <section className={cn("relative overflow-hidden bg-horizon", className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-fine-grid opacity-60"
      />
      {/* Thin gold horizon line — a quiet brand cue. */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-[5.5rem] h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
      />
      <Container className="relative py-20 sm:py-24 lg:py-28">
        <Reveal className="max-w-3xl">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-[3.4rem]">
            {title}
          </h1>
          {description ? (
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {description}
            </p>
          ) : null}
          {children ? <div className="mt-9">{children}</div> : null}
        </Reveal>
      </Container>
    </section>
  );
}
