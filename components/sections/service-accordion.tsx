"use client";

import * as React from "react";
import { Check, AlertCircle, Sparkles } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { services } from "@/content/services";

/**
 * Full expandable list of service categories for the Services page.
 * Opens the item matching the URL hash (e.g. /services#operations) on load.
 */
export function ServiceAccordion() {
  const [open, setOpen] = React.useState<string[]>([]);

  React.useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && services.some((s) => s.id === hash)) {
      setOpen((prev) => (prev.includes(hash) ? prev : [...prev, hash]));
    }
  }, []);

  return (
    <Accordion
      type="multiple"
      value={open}
      onValueChange={setOpen}
      className="flex flex-col gap-4"
    >
      {services.map((service) => {
        const Icon = service.icon;
        return (
          <AccordionItem
            key={service.id}
            value={service.id}
            id={service.id}
            className="scroll-mt-28"
          >
            <AccordionTrigger>
              <span className="flex items-center gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gold-soft text-gold ring-1 ring-gold/15">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <span className="flex flex-col">
                  <span className="text-lg font-semibold text-foreground">
                    {service.name}
                  </span>
                  <span className="mt-0.5 hidden text-sm font-normal text-muted-foreground sm:block">
                    {service.summary}
                  </span>
                </span>
              </span>
            </AccordionTrigger>

            <AccordionContent>
              <p className="max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground">
                {service.angle}
              </p>

              <div className="mt-7 grid gap-8 lg:grid-cols-2">
                <div>
                  <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-foreground">
                    <Check className="h-4 w-4 text-gold" aria-hidden />
                    What we support
                  </h4>
                  <ul className="mt-4 grid gap-2.5">
                    {service.whatWeSupport.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span
                          aria-hidden
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/70"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-7">
                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-foreground">
                      <AlertCircle className="h-4 w-4 text-gold" aria-hidden />
                      Common signs you need this
                    </h4>
                    <ul className="mt-4 grid gap-2.5">
                      {service.commonSigns.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span
                            aria-hidden
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/40"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-xl border border-gold/20 bg-gold-soft/50 p-5">
                    <h4 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                      <Sparkles className="h-4 w-4 text-gold" aria-hidden />
                      What better looks like
                    </h4>
                    <p className="mt-2.5 text-sm leading-relaxed text-foreground/80">
                      {service.whatBetterLooksLike}
                    </p>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
