import {
  MapPin,
  Globe,
  Workflow,
  Database,
  BarChart3,
  Bot,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  /** Stable id used for anchor links (e.g. /services#web-presence). */
  id: string;
  name: string;
  icon: LucideIcon;
  /** One-line plain-English summary for preview cards. */
  summary: string;
  /** The angle/promise shown under the category heading. */
  angle: string;
  /** Detailed "what we support" list for the Services page. */
  whatWeSupport: string[];
  /** Concrete symptoms an owner would recognize. */
  commonSigns: string[];
  /** A short, hopeful description of the better state. */
  whatBetterLooksLike: string;
  /** A short subset of examples for compact preview cards. */
  previewExamples: string[];
};

export const services: Service[] = [
  {
    id: "local-presence",
    name: "Local Presence",
    icon: MapPin,
    summary:
      "Look credible, visible, and consistent everywhere customers search for you.",
    angle:
      "When a customer searches for you, the business should look active, credible, and easy to contact.",
    whatWeSupport: [
      "Google Business Profile setup and cleanup",
      "Local search visibility basics",
      "Business listings consistency",
      "Customer-facing business information cleanup",
      "Review and reputation signals",
      "Basic local SEO structure",
      "Service area clarity",
      "Location and contact information consistency",
    ],
    commonSigns: [
      "Your Google listing is incomplete, outdated, or hard to find.",
      "Hours, address, or phone number are different across the web.",
      "Customers struggle to tell what you do or where you serve.",
      "Reviews come in but nothing is done with them.",
    ],
    whatBetterLooksLike:
      "A consistent, trustworthy presence in local search — accurate details everywhere, a clean Google profile, and the basics in place so the right customers can find and reach you without friction.",
    previewExamples: [
      "Google Business Profile cleanup",
      "Listings consistency",
      "Local search basics",
      "Review & reputation signals",
    ],
  },
  {
    id: "web-presence",
    name: "Web Presence",
    icon: Globe,
    summary:
      "A website that explains the business clearly and makes the next step obvious.",
    angle:
      "A website should not just look better. It should explain the business clearly, make the next step obvious, and support the way customers actually decide.",
    whatWeSupport: [
      "Modern business websites",
      "Multi-page sites, landing pages, and service pages",
      "Lead forms and inquiry flows",
      "Booking flows",
      "Website structure and messaging",
      "Conversion-focused customer journeys",
      "Mobile responsiveness",
      "Basic analytics setup",
      "Website performance cleanup",
    ],
    commonSigns: [
      "Your website looks outdated compared with the quality of your work.",
      "Customers have to search too hard to understand services, location, or next steps.",
      "Leads come in, but the inquiry flow is unclear.",
      "The site is hard to update or does not support campaigns.",
    ],
    whatBetterLooksLike:
      "A clean, modern site that explains the business clearly, guides visitors to the right next step, and connects naturally to your lead and follow-up process.",
    previewExamples: [
      "Business websites",
      "Landing & service pages",
      "Lead forms & booking flows",
      "Analytics setup",
    ],
  },
  {
    id: "operations",
    name: "Operations",
    icon: Workflow,
    summary:
      "Make the flow of leads, customers, tasks, and follow-ups easier to manage.",
    angle:
      "Good leads should not disappear into inboxes, sticky notes, or memory. We help build a follow-up system the team can actually use.",
    whatWeSupport: [
      "CRM setup",
      "Lead tracking and pipeline visibility",
      "Follow-up and intake workflows",
      "Internal process automation",
      "Tool integration",
      "Email and notification flows",
      "Booking and scheduling cleanup",
      "Task handoff structure",
      "Simple internal dashboards",
      "Manual workflow reduction",
    ],
    commonSigns: [
      "Leads live in inboxes, texts, and sticky notes.",
      "Follow-up depends on who remembers to do it.",
      "Nobody can say where a customer is in the process.",
      "The same information gets entered into several tools by hand.",
    ],
    whatBetterLooksLike:
      "A clear, shared system where leads are captured in one place, follow-up happens on time, and the team can see exactly what needs attention next — without depending on memory.",
    previewExamples: [
      "CRM setup",
      "Lead tracking",
      "Follow-up workflows",
      "Internal automation",
    ],
  },
  {
    id: "data-foundation",
    name: "Data Foundation",
    icon: Database,
    summary: "Make business data clean, structured, and actually usable.",
    angle:
      "Before a business can report, automate, or make better decisions, it needs records that are organized and trustworthy.",
    whatWeSupport: [
      "Structured databases",
      "Clean customer and lead records",
      "Data cleanup and deduplication",
      "Spreadsheet replacement or cleanup",
      "Reporting-ready tables",
      "Operational data organization",
      "Lightweight data pipelines",
      "Integrations between tools",
      "Data quality checks",
      "Source-of-truth design",
    ],
    commonSigns: [
      "Customer information lives in too many spreadsheets.",
      "The same customer shows up three times, spelled three ways.",
      "Nobody is sure which file or tool is the real source of truth.",
      "Reporting takes hours of copying and pasting.",
    ],
    whatBetterLooksLike:
      "One organized, trustworthy place for your records — clean, consistent, and structured so reporting, automation, and better decisions all become possible.",
    previewExamples: [
      "Structured databases",
      "Records cleanup",
      "Source-of-truth design",
      "Tool integrations",
    ],
  },
  {
    id: "analytics-bi",
    name: "Analytics & Business Intelligence",
    icon: BarChart3,
    summary:
      "Clear visibility into what is working, what is slowing down, and where to look.",
    angle:
      "Owners should be able to see what is working, what is slowing down, and where attention is needed — without digging through disconnected files.",
    whatWeSupport: [
      "Lightweight reports",
      "Performance dashboards",
      "Sales and customer insights",
      "Lead source reporting",
      "Follow-up performance tracking",
      "Revenue and pipeline visibility",
      "Operational KPIs",
      "Monthly reporting views",
      "Simple executive dashboards",
      "Decision support reporting",
    ],
    commonSigns: [
      "You can't easily tell which lead sources actually pay off.",
      "Reporting is a once-a-quarter scramble, if it happens at all.",
      "Decisions get made on gut feel because the numbers are buried.",
      "Different tools tell you different stories.",
    ],
    whatBetterLooksLike:
      "A small set of clear, reliable dashboards and reports that answer the questions you actually ask — so you can see performance at a glance and decide with confidence.",
    previewExamples: [
      "Performance dashboards",
      "Lead source reporting",
      "Pipeline visibility",
      "Monthly reporting views",
    ],
  },
  {
    id: "ai-automation",
    name: "AI & Automation",
    icon: Bot,
    summary:
      "Practical automation and optional AI — used only where it saves real time.",
    angle:
      "AI is not the starting point for every business. When it fits, we use it quietly inside practical workflows to save time and reduce repetitive work.",
    whatWeSupport: [
      "Practical automation around existing tools",
      "AI-assisted internal workflows",
      "Simple AI agents for repetitive admin tasks",
      "Customer inquiry triage",
      "Knowledge-base assistants",
      "Document and email summarization workflows",
      "Lead prioritization support",
      "Automated reporting notes",
      "Decision support tools",
    ],
    commonSigns: [
      "Your team retypes the same emails and notes every day.",
      "Routine admin work eats hours that should go to customers.",
      "Inquiries pile up before anyone can sort and prioritize them.",
      "You're curious about AI but wary of hype and wasted spend.",
    ],
    whatBetterLooksLike:
      "Quiet automation that handles the repetitive parts and, where it genuinely helps, AI that drafts, summarizes, or triages in the background — saving time without becoming one more thing to manage.",
    previewExamples: [
      "Workflow automation",
      "Inquiry triage",
      "Summarization workflows",
      "Lead prioritization",
    ],
  },
];

export function getServiceById(id: string) {
  return services.find((service) => service.id === id);
}
