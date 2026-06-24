"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Light/Dark theme toggle.
 *
 * Light ("Marble") is the default. The user's choice persists in localStorage
 * and is applied before paint by the inline script in app/layout.tsx, so there
 * is no flash. This button just reads/writes that state.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const [isDark, setIsDark] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* ignore storage errors (private mode, etc.) */
    }
    setIsDark(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={cn(
        "inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-card text-foreground transition-colors hover:bg-muted hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
    >
      {/* Render a stable icon until mounted to avoid hydration mismatch. */}
      {mounted && isDark ? (
        <Sun className="h-5 w-5" aria-hidden />
      ) : (
        <Moon className="h-5 w-5" aria-hidden />
      )}
    </button>
  );
}
