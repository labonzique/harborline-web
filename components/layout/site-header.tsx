"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { Logo } from "@/components/layout/logo";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { mainNav, ctaCopy } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on route change.
  React.useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll while the mobile menu is open.
  React.useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-background/0"
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          aria-label="Harborline Systems — home"
        >
          <Logo />
        </Link>

        {/* Desktop navigation */}
        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cn(
                "relative rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-foreground/5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                isActive(item.href) ? "text-foreground" : "text-muted-foreground"
              )}
            >
              {item.label}
              {isActive(item.href) ? (
                <span className="absolute inset-x-4 -bottom-px h-px bg-gold" />
              ) : null}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <Button href={ctaCopy.primary.href} variant="primary" size="sm">
            {ctaCopy.primary.label}
          </Button>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-card text-foreground transition-colors hover:bg-foreground/5 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "lg:hidden",
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        <div
          className={cn(
            // visibility flips with a transition so the closed menu is removed
            // from the tab order + a11y tree (no focus leak) while preserving
            // the slide/fade animation.
            "absolute inset-x-0 top-20 origin-top border-b border-border bg-background/95 backdrop-blur-md transition-all duration-200",
            menuOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0"
          )}
        >
          <nav
            className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-5 sm:px-6"
            aria-label="Mobile"
          >
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "rounded-lg px-4 py-3 text-base font-medium transition-colors",
                  isActive(item.href)
                    ? "bg-foreground/[0.07] text-foreground"
                    : "text-muted-foreground hover:bg-foreground/5 hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button
              href={ctaCopy.primary.href}
              variant="primary"
              size="lg"
              className="mt-3 w-full"
            >
              {ctaCopy.primary.label}
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
