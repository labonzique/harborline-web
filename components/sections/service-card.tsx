import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Service } from "@/content/services";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  service: Service;
  className?: string;
};

/** Compact preview card for a service category (used on Home and Services). */
export function ServiceCard({ service, className }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <Link
      href={`/services#${service.id}`}
      className={cn(
        "group relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gold-soft text-gold ring-1 ring-gold/15 transition-colors group-hover:bg-gold group-hover:text-gold-foreground">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <ArrowUpRight
          className="h-5 w-5 text-muted-foreground/50 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold"
          aria-hidden
        />
      </div>

      <h3 className="mt-5 text-lg font-semibold">{service.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {service.summary}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {service.previewExamples.map((example) => (
          <li
            key={example}
            className="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground"
          >
            {example}
          </li>
        ))}
      </ul>
    </Link>
  );
}
