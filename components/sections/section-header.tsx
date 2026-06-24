import * as React from "react";

import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  as?: "h2" | "h3";
  className?: string;
  titleClassName?: string;
};

/** Reusable eyebrow + heading + supporting copy block for sections. */
export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  as: Heading = "h2",
  className,
  titleClassName,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <Heading
        className={cn(
          "text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl",
          titleClassName
        )}
      >
        {title}
      </Heading>
      {description ? (
        <p
          className={cn(
            "text-pretty text-lg leading-relaxed text-muted-foreground",
            align === "center" ? "max-w-2xl" : "max-w-2xl"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
