/**
 * Options for the contact form. These are the single source of truth shared by
 * the form UI and the validation schema (lib/contact-schema.ts).
 */

export const serviceNeeds = [
  "Local Presence",
  "Web Presence",
  "Operations",
  "Data Foundation",
  "Analytics & Business Intelligence",
  "AI & Automation",
  "Not sure yet",
] as const;

export const specificInterests = [
  "Website",
  "Landing page",
  "Lead forms",
  "Booking flow",
  "Google Business Profile",
  "CRM setup",
  "Lead tracking",
  "Follow-up workflow",
  "Database / records cleanup",
  "Dashboard / reporting",
  "Automation",
  "AI-assisted workflow",
] as const;

export const budgetRanges = [
  "Not sure yet",
  "Under $2,500",
  "$2,500 to $5,000",
  "$5,000 to $10,000",
  "$10,000+",
  "Ongoing support / monthly retainer",
] as const;

export const timelines = [
  "As soon as possible",
  "Next few weeks",
  "Next 1 to 2 months",
  "Flexible",
  "Just exploring",
] as const;

export type ServiceNeed = (typeof serviceNeeds)[number];
export type SpecificInterest = (typeof specificInterests)[number];
export type BudgetRange = (typeof budgetRanges)[number];
export type Timeline = (typeof timelines)[number];
