import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

type Variant =
  | "primary"
  | "goldCta"
  | "secondary"
  | "ghost"
  | "outlineLight"
  | "solidLight";
type Size = "sm" | "md" | "lg";

const base =
  // Tactile base: subtle hover lift, crisp active press, and a trailing-icon
  // nudge on hover. `group`/`overflow-hidden` enable the per-variant sheen.
  "group relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-lg font-medium tracking-tight transition-[transform,box-shadow,background-color,border-color,opacity,color] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-75 disabled:hover:translate-y-0 whitespace-nowrap select-none hover:-translate-y-px active:translate-y-0 active:scale-[0.98] motion-reduce:transform-none [&>svg:last-child]:transition-transform [&>svg:last-child]:duration-200 hover:[&>svg:last-child]:translate-x-0.5";

// Subtle light sweep across solid CTAs on hover (a gloss highlight, not a color
// change). Self-resets on un-hover via the left transition.
const sheen =
  "before:pointer-events-none before:absolute before:inset-y-0 before:-left-full before:w-1/3 before:-skew-x-12 before:bg-white/15 before:transition-[left] before:duration-700 before:ease-out hover:before:left-[160%] motion-reduce:before:hidden";

const variants: Record<Variant, string> = {
  // Theme-aware primary CTA: graphite-dark button on light, gold button on dark.
  // Subtle gradient + a faint hover brightness so it reads tactile, not flat.
  // Use on normal (light/marble or graphite) surfaces — NOT on the dark bands.
  primary: `bg-primary-grad text-primary-foreground shadow-soft hover:shadow-card hover:brightness-[1.08] motion-reduce:hover:brightness-100 ${sheen}`,
  // Constant metallic-gold CTA — for the always-dark bands, where theme-aware
  // --primary would collide with the graphite background. Same gold both themes.
  goldCta: `bg-gold-grad text-gold-foreground shadow-gold hover:shadow-lift hover:brightness-[1.05] motion-reduce:hover:brightness-100 focus-visible:ring-offset-dark ${sheen}`,
  // Outline / secondary button with a soft warm-depth gradient.
  secondary:
    "border border-border bg-secondary-grad text-foreground shadow-soft hover:border-gold/40 hover:shadow-card hover:brightness-[1.02] motion-reduce:hover:brightness-100",
  ghost: "text-foreground hover:bg-foreground/5",
  // Outline button for the always-dark graphite bands.
  outlineLight:
    "border border-white/20 text-dark-foreground hover:border-gold/60 hover:bg-white/5 focus-visible:ring-offset-dark",
  // Solid light button for the always-dark graphite bands (cream on graphite).
  solidLight:
    "bg-dark-foreground text-dark shadow-soft hover:opacity-90 focus-visible:ring-offset-dark",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-[0.95rem]",
  lg: "h-12 px-7 text-base",
};

export function buttonVariants({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
} = {}) {
  return cn(base, variants[variant], sizes[size], className);
}

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

/**
 * Button renders a styled <button> by default, or a Next.js <Link> when an
 * `href` is provided. External links (http / mailto) render as a plain anchor.
 */
export function Button(props: ButtonProps) {
  const { variant, size, className, children } = props;
  const classes = buttonVariants({ variant, size, className });

  if (props.href !== undefined) {
    const { href, variant: _v, size: _s, className: _c, children: _ch, ...rest } =
      props;
    const isExternal = /^(https?:|mailto:|tel:)/.test(href);

    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          {...(href.startsWith("http")
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          {...rest}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
