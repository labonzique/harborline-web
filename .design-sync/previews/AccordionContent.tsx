import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "harborline-systems";

// AccordionContent is the hidden body that slides open to reveal the answer. It
// only renders correctly inside a composed <Accordion>, so we show the real
// composition. The first item is open so its content — the padded answer text
// below the trigger — is visible; the second item's content stays collapsed.
export function Default() {
  return (
    <Accordion type="single" collapsible defaultValue="a" className="w-full space-y-4">
      <AccordionItem value="a">
        <AccordionTrigger>What does a project usually start with?</AccordionTrigger>
        <AccordionContent>
          Most projects begin with a free, high-level audit. We look at what you
          have, find where time and leads are leaking, and help you decide what to
          clean up first — no commitment required.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="b">
        <AccordionTrigger>Who is this built for?</AccordionTrigger>
        <AccordionContent>
          Service businesses that have outgrown spreadsheets and sticky notes and
          want their digital operations to run as well as the work they deliver.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
