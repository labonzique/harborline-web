"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ctaCopy } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Sticky bottom call-to-action bar for mobile. Appears once the user scrolls
 * past the hero and hides as they approach the footer (so it never overlaps the
 * final CTA band). Mobile only; desktop keeps the header CTA.
 */
export function MobileCtaBar() {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pastHero = y > 480;
      const nearFooter = max - y < 560;
      setShow(pastHero && !nearFooter);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/90 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-md transition-all duration-300 lg:hidden",
        show
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-full opacity-0"
      )}
    >
      <div className="flex items-center gap-3">
        <p className="min-w-0 flex-1 text-xs leading-tight text-muted-foreground">
          <span className="font-medium text-foreground">Free audit</span> — no
          obligation, ~30 min.
        </p>
        <Button
          href={ctaCopy.primary.href}
          variant="primary"
          size="sm"
          className="shrink-0"
        >
          {ctaCopy.primary.label}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Button>
      </div>
    </div>
  );
}
