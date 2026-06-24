import * as React from "react";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

import { Logo } from "@/components/layout/logo";
import { Container } from "@/components/layout/container";
import {
  mainNav,
  footerServiceLinks,
  siteConfig,
} from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/50">
      <Container size="wide" className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Digital operations agency helping service businesses clean up
              websites, lead flow, workflows, data, reporting, and automation.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-gold"
            >
              <Mail className="h-4 w-4 text-gold" aria-hidden />
              {siteConfig.email}
            </a>
          </div>

          {/* Navigate */}
          <nav aria-label="Footer">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Navigate
            </h3>
            <ul className="mt-4 space-y-2.5">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-foreground/80 transition-colors hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Services">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerServiceLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-foreground/80 transition-colors hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Local */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Where we work
            </h3>
            <div className="mt-4 flex items-start gap-2.5 text-sm text-foreground/80">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
              <p className="leading-relaxed">
                Based in and serving{" "}
                <span className="font-medium text-foreground">
                  Greater Philadelphia
                </span>{" "}
                and the surrounding suburbs. Remote support available beyond the
                region.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs">
            The quiet operating layer behind local service businesses.
          </p>
        </div>
      </Container>
    </footer>
  );
}
