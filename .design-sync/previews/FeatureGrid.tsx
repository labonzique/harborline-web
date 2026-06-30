import { FeatureGrid, ServiceCard, TrustCard } from "harborline-systems";
import { services } from "@/content/services";
import { positioningCards } from "@/content/home";

// The canonical use — the six service categories in a 3-column responsive grid.
export function Services() {
  return (
    <div className="max-w-5xl">
      <FeatureGrid columns={3}>
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </FeatureGrid>
    </div>
  );
}

// Two-column layout holding the positioning-promise TrustCards.
export function Promises() {
  return (
    <div className="max-w-3xl">
      <FeatureGrid columns={2}>
        {positioningCards.map((card) => (
          <TrustCard
            key={card.title}
            title={card.title}
            body={card.description}
            icon={card.icon}
          />
        ))}
      </FeatureGrid>
    </div>
  );
}

// The widest layout — four service cards across at the large breakpoint.
export function FourColumns() {
  return (
    <div className="max-w-6xl">
      <FeatureGrid columns={4}>
        {services.slice(0, 4).map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </FeatureGrid>
    </div>
  );
}
