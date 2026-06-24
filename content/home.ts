import {
  Eye,
  Inbox,
  Repeat2,
  LineChart,
  type LucideIcon,
} from "lucide-react";

/** Concrete "systems problem" symptoms for the Home problem section. */
export const problemPoints: string[] = [
  "The website does not match the quality of the work.",
  "Leads come from too many places at once.",
  "Follow-up depends on memory.",
  "Customer information lives in spreadsheets.",
  "Reporting is unclear.",
  "Tools do not talk to each other.",
];

export type PositioningCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

/** The four-part promise under "We build the operating layer behind your business." */
export const positioningCards: PositioningCard[] = [
  {
    title: "Show up clearly",
    description:
      "A website and local presence that explain the business and earn trust before the first call.",
    icon: Eye,
  },
  {
    title: "Capture leads cleanly",
    description:
      "Every inquiry lands in one place instead of scattering across inboxes, texts, and notes.",
    icon: Inbox,
  },
  {
    title: "Follow up reliably",
    description:
      "A follow-up system the team can actually use, so good leads stop slipping through the cracks.",
    icon: Repeat2,
  },
  {
    title: "See what is working",
    description:
      "Clear reporting that shows where time, leads, and revenue are really coming from.",
    icon: LineChart,
  },
];

/** Local-first selling points for the Home local section. */
export const localPoints: string[] = [
  "Serving Greater Philadelphia and the surrounding suburbs",
  "Local onsite discovery visits available",
  "Remote work available for businesses outside the area",
  "A practical partner — not a faceless platform",
];

/** Nodes shown in the abstract hero "operating layer" diagram. */
export const systemNodes = [
  "Website",
  "Leads",
  "CRM",
  "Data",
  "Reporting",
  "Automation",
] as const;
