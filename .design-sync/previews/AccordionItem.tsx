import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "harborline-systems";

// AccordionItem is one collapsible panel (a card). It only renders correctly
// composed inside an <Accordion>, so we show the real composition. The first
// item is open by default to reveal the item's open state — the gold border and
// raised card shadow — next to a closed item with the plain border.
export function Default() {
  return (
    <Accordion type="single" collapsible defaultValue="a" className="w-full space-y-4">
      <AccordionItem value="a">
        <AccordionTrigger>How does the free audit work?</AccordionTrigger>
        <AccordionContent>
          We review your current setup — site, lead flow, tools, and data — and
          send back a short, plain-language summary of what is working and where
          to start. No obligation.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="b">
        <AccordionTrigger>Do you push AI on everything?</AccordionTrigger>
        <AccordionContent>
          No. We use AI only where it removes real friction. Most of the value is
          clean records, clear workflows, and a site that matches the business.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
