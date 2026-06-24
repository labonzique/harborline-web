/**
 * Central site configuration: identity, navigation, contact details, and the
 * booking link. Edit values here to update them everywhere across the site.
 */

export const siteConfig = {
  name: "Harborline Systems",
  shortName: "Harborline",
  tagline: "Digital Operations for Service Businesses",
  description:
    "Harborline Systems helps service businesses in Greater Philadelphia clean up websites, lead flow, CRM, data, reporting, and automation so owners can focus on running the business.",
  // Used for absolute SEO / OpenGraph URLs. Override with NEXT_PUBLIC_SITE_URL.
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://harborlinesystems.com",
  locale: "en_US",
  region: "Greater Philadelphia",
  email: "hello@harborlinesystems.com",
  // Placeholder — replace with a real number when one is available.
  phonePlaceholder: "(215) 000-0000",
} as const;

/**
 * Booking link for "Book a Free Consultation".
 * Set NEXT_PUBLIC_BOOKING_URL to a Calendly / Cal.com link in production.
 * Falls back to the on-site contact form when not configured.
 */
export const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || "/contact";

export type NavItem = {
  label: string;
  href: string;
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerServiceLinks: NavItem[] = [
  { label: "Local Presence", href: "/services#local-presence" },
  { label: "Web Presence", href: "/services#web-presence" },
  { label: "Operations", href: "/services#operations" },
  { label: "Data Foundation", href: "/services#data-foundation" },
  { label: "Analytics & BI", href: "/services#analytics-bi" },
  { label: "AI & Automation", href: "/services#ai-automation" },
];

export const ctaCopy = {
  primary: {
    label: "Book a Free Consultation",
    href: "/contact",
  },
  secondary: {
    label: "Request a Demo",
    href: "/contact?intent=demo",
  },
} as const;
