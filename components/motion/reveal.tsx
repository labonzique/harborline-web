"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  /** Stagger delay in seconds applied when the element reveals. */
  delay?: number;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

// useLayoutEffect on the client (arms the hidden state before paint, so there
// is no flash), useEffect on the server to avoid the SSR warning.
const useIsoLayoutEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

/**
 * Subtle fade + slide-up reveal on scroll.
 *
 * Robust by design:
 *  - Renders fully visible during SSR / first paint, so the site is never blank
 *    without JavaScript and is safe for crawlers.
 *  - On the client, arms the hidden state in a layout effect (before paint) and
 *    reveals once the element scrolls into view via IntersectionObserver.
 *  - Honors prefers-reduced-motion (shows immediately, no movement).
 */
export function Reveal({ children, delay = 0, className, ...rest }: RevealProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [state, setState] = React.useState<"idle" | "hidden" | "shown">("idle");

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setState("shown");
      return;
    }

    setState("hidden");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setState("shown");
            observer.disconnect();
            break;
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-[opacity,transform] duration-700 ease-out",
        state === "hidden"
          ? "opacity-0 translate-y-4"
          : "opacity-100 translate-y-0",
        className
      )}
      style={
        state === "shown" && delay
          ? { transitionDelay: `${delay}s` }
          : undefined
      }
      {...rest}
    >
      {children}
    </div>
  );
}
