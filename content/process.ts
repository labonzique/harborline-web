import {
  Search,
  LayoutTemplate,
  Hammer,
  Rocket,
  LifeBuoy,
  type LucideIcon,
} from "lucide-react";

export type ProcessStep = {
  number: string;
  key: string;
  /** Short verb label used in compact previews. */
  label: string;
  /** Descriptive title used on the Process page. */
  title: string;
  description: string;
  /** Tight one-liner for the home page preview. */
  preview: string;
  icon: LucideIcon;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    key: "audit",
    label: "Audit",
    title: "Understand the current mess",
    description:
      "We look at the website, lead sources, forms, scheduling, CRM, spreadsheets, reporting, customer journey, and manual workarounds. The goal is to understand where time, leads, and clarity are being lost.",
    preview:
      "Understand the business, current tools, pain points, and customer journey.",
    icon: Search,
  },
  {
    number: "02",
    key: "demo",
    label: "Demo",
    title: "Show the direction",
    description:
      "For the right projects, we create a practical demo, outline, or improvement plan so you can see the direction before committing to a full build.",
    preview: "Show a practical direction or high-level improvement plan.",
    icon: LayoutTemplate,
  },
  {
    number: "03",
    key: "build",
    label: "Build",
    title: "Build the first working layer",
    description:
      "We build the highest-impact layer first: website, forms, CRM, workflow, dashboard, database, or automation. The goal is practical improvement, not unnecessary complexity.",
    preview:
      "Create the website, workflow, CRM, data, dashboard, or automation layer.",
    icon: Hammer,
  },
  {
    number: "04",
    key: "launch",
    label: "Launch",
    title: "Put it into daily use",
    description:
      "We help launch the system, connect the moving parts, test the flow, and make sure the team understands how to use it.",
    preview: "Put the system into use and clean up the handoff.",
    icon: Rocket,
  },
  {
    number: "05",
    key: "support",
    label: "Support",
    title: "Improve as the business grows",
    description:
      "After launch, we can maintain, improve, and expand the system so it does not become another forgotten tool.",
    preview: "Improve, maintain, and expand the system over time.",
    icon: LifeBuoy,
  },
];
