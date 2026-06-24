import type { Metadata } from "next";
import { Mail, Check, CalendarClock, MapPin } from "lucide-react";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/sections/page-hero";
import { ContactForm } from "@/components/contact/contact-form";
import { Button } from "@/components/ui/button";
import { siteConfig, bookingUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free consultation with Harborline Systems. Tell us what you want to clean up — website, lead flow, CRM, reporting, or automation.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Harborline Systems",
    description: "Book a free consultation with Harborline Systems.",
    url: "/contact",
  },
};

const perks = [
  "Free first consultation",
  "High-level audit included",
  "Demo direction available for the right projects",
  "Local onsite visits available in Greater Philadelphia",
  "Remote support available outside the region",
];

// Only show a live booking button when a real booking link is configured.
const hasBooking = bookingUrl !== "/contact";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you want to clean up."
        description="Whether you need a better website, cleaner lead flow, a CRM, reporting, automation, or just a second set of eyes on the digital side of the business — start here."
      />

      <section className="section">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
            {/* Form */}
            <div className="order-2 lg:order-1">
              <ContactForm />
            </div>

            {/* Sidebar */}
            <aside className="order-1 lg:order-2">
              <div className="lg:sticky lg:top-28">
                <div className="rounded-2xl border border-border bg-card p-7 shadow-soft">
                  <h2 className="text-lg font-semibold">What to expect</h2>
                  <ul className="mt-5 space-y-3">
                    {perks.map((perk) => (
                      <li key={perk} className="flex items-start gap-3 text-sm">
                        <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-soft text-gold">
                          <Check className="h-3 w-3" aria-hidden />
                        </span>
                        <span className="leading-relaxed text-foreground/85">
                          {perk}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Booking placeholder — wires up when NEXT_PUBLIC_BOOKING_URL is set. */}
                <div className="mt-5 rounded-2xl border border-border bg-card p-7 shadow-soft">
                  <h2 className="flex items-center gap-2 text-lg font-semibold">
                    <CalendarClock className="h-5 w-5 text-gold" aria-hidden />
                    Prefer to book a time?
                  </h2>
                  {hasBooking ? (
                    <>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        Grab a slot that works for you and we will talk through
                        what is slowing the business down.
                      </p>
                      <Button
                        href={bookingUrl}
                        variant="primary"
                        className="mt-5 w-full"
                      >
                        Book a Free Consultation
                      </Button>
                    </>
                  ) : (
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      Online scheduling is coming soon. For now, send the form and
                      we will follow up to find a time that works.
                    </p>
                  )}
                </div>

                {/* Direct contact */}
                <div className="mt-5 rounded-2xl border border-border bg-card p-7 shadow-soft">
                  <h2 className="text-lg font-semibold">Reach us directly</h2>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-4 flex items-center gap-2.5 text-sm font-medium text-foreground transition-colors hover:text-gold"
                  >
                    <Mail className="h-4 w-4 text-gold" aria-hidden />
                    {siteConfig.email}
                  </a>
                  <p className="mt-4 flex items-start gap-2.5 text-sm text-muted-foreground">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                    <span className="leading-relaxed">
                      Greater Philadelphia and surrounding suburbs · remote
                      support available beyond the region
                    </span>
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
