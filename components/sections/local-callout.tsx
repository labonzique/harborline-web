import * as React from "react";
import { MapPin, Check } from "lucide-react";

import { cn } from "@/lib/utils";

type LocalCalloutProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  points?: string[];
  children?: React.ReactNode;
  className?: string;
};

/**
 * Local-first panel highlighting Greater Philadelphia coverage.
 * Uses an abstract "service-area" graphic (concentric rings) rather than
 * literal maritime or map imagery.
 */
export function LocalCallout({
  eyebrow = "Local-first",
  title,
  description,
  points,
  children,
  className,
}: LocalCalloutProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-border bg-card shadow-card",
        className
      )}
    >
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="p-8 sm:p-10 lg:p-12">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="mt-5 text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {description}
            </p>
          ) : null}

          {points && points.length > 0 ? (
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-soft text-gold">
                    <Check className="h-3 w-3" aria-hidden />
                  </span>
                  <span className="leading-relaxed text-foreground/85">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          ) : null}

          {children ? <div className="mt-8">{children}</div> : null}
        </div>

        {/* Abstract service-area graphic */}
        <div className="relative hidden min-h-[280px] items-center justify-center bg-dark-gradient lg:flex">
          <ServiceAreaGraphic />
        </div>
      </div>
    </div>
  );
}

function ServiceAreaGraphic() {
  return (
    <div
      aria-hidden
      className="relative flex h-full w-full items-center justify-center"
    >
      <div className="absolute inset-0 bg-fine-grid opacity-20" />
      {/* Concentric service-area rings */}
      <div className="relative flex items-center justify-center">
        {[260, 200, 140, 84].map((size, i) => (
          <span
            key={size}
            className="absolute rounded-full border border-gold/25"
            style={{
              width: size,
              height: size,
              opacity: 0.25 + i * 0.18,
            }}
          />
        ))}
        {/* Outer node markers */}
        {[
          { top: "8%", left: "62%" },
          { top: "70%", left: "26%" },
          { top: "30%", left: "16%" },
          { top: "78%", left: "74%" },
        ].map((pos, i) => (
          <span
            key={i}
            className="absolute h-2 w-2 rounded-full bg-gold/50"
            style={pos}
          />
        ))}
        {/* Center pin */}
        <span className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold-bright text-dark shadow-gold">
          <MapPin className="h-5 w-5" />
        </span>
      </div>
    </div>
  );
}
