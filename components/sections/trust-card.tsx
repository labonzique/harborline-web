import * as React from "react";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type TrustCardProps = {
  title: string;
  body: React.ReactNode;
  icon?: LucideIcon;
  /** Adds a small numeric marker (e.g. for belief lists). */
  marker?: string;
  className?: string;
};

/**
 * Flexible card for short value statements: positioning promises (with icon)
 * and belief statements (with or without a numeric marker).
 */
export function TrustCard({
  title,
  body,
  icon: Icon,
  marker,
  className,
}: TrustCardProps) {
  return (
    <div
      className={cn(
        "group relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-card",
        className
      )}
    >
      {Icon ? (
        <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gold-soft text-gold ring-1 ring-gold/15 transition-colors group-hover:bg-gold group-hover:text-gold-foreground">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
      ) : null}
      {marker ? (
        <span className="mb-4 font-display text-sm font-semibold text-gold">
          {marker}
        </span>
      ) : null}
      <h3 className="text-lg font-semibold leading-snug">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}
