import * as React from "react";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

type LogoProps = {
  className?: string;
  /** Use light text for dark backgrounds (e.g. the footer). */
  tone?: "dark" | "light";
  showWordmark?: boolean;
};

/**
 * Harborline wordmark + abstract mark.
 * The mark is layered horizontal lines — a quiet nod to "Harborline" / a horizon
 * and to layered systems, with no literal maritime imagery.
 */
export function Logo({
  className,
  tone = "dark",
  showWordmark = true,
}: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      {showWordmark ? (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "font-display text-[1.05rem] font-semibold tracking-tight",
              tone === "light" ? "text-dark-foreground" : "text-foreground"
            )}
          >
            Harborline
          </span>
          <span
            className={cn(
              "text-[0.62rem] font-medium uppercase tracking-[0.28em]",
              tone === "light" ? "text-dark-muted" : "text-muted-foreground"
            )}
          >
            Systems
          </span>
        </span>
      ) : (
        <span className="sr-only">{siteConfig.name}</span>
      )}
    </span>
  );
}

function LogoMark() {
  return (
    <span className="relative inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-dark shadow-soft ring-1 ring-white/5">
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        aria-hidden
        className="text-dark-foreground"
      >
        {/* Layered "harbor lines" — staggered horizontals, the middle one gold. */}
        <line
          x1="5"
          y1="7"
          x2="17"
          y2="7"
          stroke="currentColor"
          strokeOpacity="0.55"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <line
          x1="5"
          y1="11"
          x2="17"
          y2="11"
          stroke="hsl(var(--gold-bright))"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <line
          x1="5"
          y1="15"
          x2="13"
          y2="15"
          stroke="currentColor"
          strokeOpacity="0.55"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        {/* Connecting node on the gold line */}
        <circle cx="17" cy="11" r="1.8" fill="hsl(var(--gold-bright))" />
      </svg>
    </span>
  );
}
