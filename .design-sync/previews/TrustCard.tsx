import { TrustCard } from "harborline-systems";
import { beliefs } from "@/content/beliefs";
import { positioningCards } from "@/content/home";

// A belief statement — no icon, so it gets the brand's gold left-border.
export function Belief() {
  return (
    <div className="max-w-sm">
      <TrustCard title={beliefs[0].title} body={beliefs[0].body} />
    </div>
  );
}

// A positioning promise — the icon badge replaces the gold border.
export function Promise() {
  const card = positioningCards[0];
  return (
    <div className="max-w-sm">
      <TrustCard title={card.title} body={card.description} icon={card.icon} />
    </div>
  );
}

// Numbered belief list — the `marker` adds a small gold "01"/"02" label.
export function NumberedBeliefs() {
  return (
    <div className="grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-3">
      {beliefs.slice(0, 3).map((belief, i) => (
        <TrustCard
          key={belief.title}
          marker={`0${i + 1}`}
          title={belief.title}
          body={belief.body}
        />
      ))}
    </div>
  );
}

// The four positioning promises as the home page lays them out — each with its icon.
export function PromiseGrid() {
  return (
    <div className="grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2">
      {positioningCards.map((card) => (
        <TrustCard
          key={card.title}
          title={card.title}
          body={card.description}
          icon={card.icon}
        />
      ))}
    </div>
  );
}
