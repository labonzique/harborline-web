// Static shim for `next/link` used only by the design-sync bundle.
// The design tool renders without a Next.js router, so Link degrades to a plain
// anchor — the correct fallback for navigation that can't run in the tool.
// Strips Next-only props so they don't leak onto the DOM <a>.
import * as React from "react";

type Href = string | { pathname?: string; query?: unknown; hash?: string };

type NextLinkProps = {
  href?: Href;
  children?: React.ReactNode;
  prefetch?: boolean;
  replace?: boolean;
  scroll?: boolean;
  shallow?: boolean;
  passHref?: boolean;
  legacyBehavior?: boolean;
  locale?: string | false;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

const Link = React.forwardRef<HTMLAnchorElement, NextLinkProps>(function Link(
  {
    href,
    children,
    prefetch: _prefetch,
    replace: _replace,
    scroll: _scroll,
    shallow: _shallow,
    passHref: _passHref,
    legacyBehavior: _legacyBehavior,
    locale: _locale,
    ...rest
  },
  ref
) {
  const resolved =
    typeof href === "string" ? href : (href && href.pathname) || "#";
  return (
    <a ref={ref} href={resolved} {...rest}>
      {children}
    </a>
  );
});

export default Link;
