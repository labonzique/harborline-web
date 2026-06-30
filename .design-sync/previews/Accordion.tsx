import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "harborline-systems";

// FAQ-style single-open accordion (the canonical use). First panel opens by
// default so the open state — gold border + rotated "+" toggle — is visible.
export function Faq() {
  return (
    <Accordion type="single" collapsible defaultValue="audit" className="w-full space-y-4">
      <AccordionItem value="audit">
        <AccordionTrigger>How does the free audit work?</AccordionTrigger>
        <AccordionContent>
          We review your current setup — site, lead flow, tools and data — and
          send back a short, plain-language summary of what is working, what is
          slowing you down, and where to start. No obligation.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="timeline">
        <AccordionTrigger>How long until something is live?</AccordionTrigger>
        <AccordionContent>
          We build the first working layer in weeks, not quarters — and put it
          into daily use early, so you feel the difference before the whole
          system is finished.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="ai">
        <AccordionTrigger>Do you push AI on everything?</AccordionTrigger>
        <AccordionContent>
          No. We use AI only where it removes real friction. Most of the value
          is clean records, clear workflows and a site that matches the
          business.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

// Multiple panels can stay open at once when type="multiple".
export function MultiOpen() {
  return (
    <Accordion type="multiple" defaultValue={["a", "b"]} className="w-full space-y-4">
      <AccordionItem value="a">
        <AccordionTrigger>Local Presence</AccordionTrigger>
        <AccordionContent>
          Look credible and consistent everywhere customers search for you.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="b">
        <AccordionTrigger>Operations</AccordionTrigger>
        <AccordionContent>
          Make the flow of leads, customers and follow-ups easier to manage.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
