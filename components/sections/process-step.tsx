import type { ProcessStep as ProcessStepType } from "@/content/process";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

type ProcessStepProps = {
  step: ProcessStepType;
  isLast?: boolean;
  index?: number;
};

/** A single step in the vertical process timeline (Process page). */
export function ProcessStep({ step, isLast, index = 0 }: ProcessStepProps) {
  const Icon = step.icon;

  return (
    <Reveal delay={index * 0.05} className="relative flex gap-6 sm:gap-8">
      {/* Left rail: number badge + connector line */}
      <div className="flex flex-col items-center">
        <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-card font-display text-sm font-semibold text-gold shadow-soft">
          {step.number}
        </span>
        {!isLast ? (
          <span
            aria-hidden
            className="mt-2 w-px flex-1 bg-gradient-to-b from-gold/30 via-border to-border"
          />
        ) : null}
      </div>

      {/* Step content card */}
      <div
        className={cn(
          "flex-1 rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-7",
          !isLast && "mb-6"
        )}
      >
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gold-soft text-gold ring-1 ring-gold/15">
            <Icon className="h-5 w-5" aria-hidden />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
              {step.label}
            </p>
            <h3 className="text-lg font-semibold leading-tight">{step.title}</h3>
          </div>
        </div>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          {step.description}
        </p>
      </div>
    </Reveal>
  );
}
