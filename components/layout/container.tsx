import * as React from "react";

import { cn } from "@/lib/utils";

type ContainerProps = {
  as?: React.ElementType;
  size?: "default" | "narrow" | "wide";
  className?: string;
  children: React.ReactNode;
};

const sizes = {
  narrow: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
};

/** Centered, padded content wrapper used by every section. */
export function Container({
  as: Component = "div",
  size = "default",
  className,
  children,
}: ContainerProps) {
  return (
    <Component
      className={cn("mx-auto w-full px-5 sm:px-6 lg:px-8", sizes[size], className)}
    >
      {children}
    </Component>
  );
}
