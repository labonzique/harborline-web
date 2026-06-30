import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "harborline-systems";

// AccordionTrigger is the clickable header row that opens/closes its panel. It
// only renders correctly inside a composed <Accordion>, so we show the real
// composition. With the first item open, the trigger's open state is visible —
// the round badge fills gold and its "+" rotates 45° into an "x"; the closed
// trigger below shows the resting "+" badge.
export function Default() {
  return (
    <Accordion type="single" collapsible defaultValue="a" className="w-full space-y-4">
      <AccordionItem value="a">
        <AccordionTrigger>How long until something is live?</AccordionTrigger>
        <AccordionContent>
          We build the first working layer in weeks, not quarters — and put it
          into daily use early, so you feel the difference before the whole
          system is finished.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="b">
        <AccordionTrigger>Will this work with the tools we already use?</AccordionTrigger>
        <AccordionContent>
          Usually, yes. We connect to your existing CRM, inbox, and booking tools
          where we can, rather than forcing a rip-and-replace.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
