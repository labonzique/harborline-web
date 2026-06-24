import * as React from "react";

import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

type FeatureGridProps = {
  children: React.ReactNode;
  /** Number of columns at the large breakpoint. */
  columns?: 2 | 3 | 4;
  /** Wrap each child in a staggered reveal animation. */
  stagger?: boolean;
  className?: string;
};

const columnClasses: Record<NonNullable<FeatureGridProps["columns"]>, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

/** Responsive grid that lays out feature/service/belief cards with optional stagger. */
export function FeatureGrid({
  children,
  columns = 3,
  stagger = true,
  className,
}: FeatureGridProps) {
  const items = React.Children.toArray(children);

  return (
    <div className={cn("grid grid-cols-1 gap-5", columnClasses[columns], className)}>
      {stagger
        ? items.map((child, index) => (
            <Reveal key={index} delay={(index % columns) * 0.06}>
              {child}
            </Reveal>
          ))
        : children}
    </div>
  );
}
