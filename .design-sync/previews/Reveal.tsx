import { Reveal, TrustCard } from "harborline-systems";
import { ShieldCheck, MapPin, Workflow } from "lucide-react";

// The everyday use: wrap a section's card so it fades + slides up as it scrolls
// into view. The revealed content is shown here (Reveal renders fully visible
// at rest), so the card reads exactly as it will once on screen.
export function Default() {
  return (
    <div className="max-w-sm">
      <Reveal>
        <TrustCard
          icon={ShieldCheck}
          title="No hype, just what works"
          body="We use AI only where it removes real friction — most of the value is clean records, clear workflows, and a site that matches the business."
        />
      </Reveal>
    </div>
  );
}

// Staggered reveals: each card gets a slightly larger delay, so a row animates
// in one after another instead of all at once.
export function Staggered() {
  const cards = [
    {
      icon: MapPin,
      title: "Local Presence",
      body: "Look credible and consistent everywhere customers search for you.",
    },
    {
      icon: Workflow,
      title: "Operations",
      body: "Make the flow of leads, customers, and follow-ups easier to manage.",
    },
    {
      icon: ShieldCheck,
      title: "Data Foundation",
      body: "Clean, structured records you can actually report and build on.",
    },
  ];

  return (
    <div className="grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-3">
      {cards.map((card, i) => (
        <Reveal key={card.title} delay={i * 0.12}>
          <TrustCard icon={card.icon} title={card.title} body={card.body} />
        </Reveal>
      ))}
    </div>
  );
}
