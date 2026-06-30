import { ServiceCard } from "harborline-systems";
import { services } from "@/content/services";

// A single service category card (used on Home and Services). Real content.
export function Default() {
  return (
    <div className="max-w-sm">
      <ServiceCard service={services[0]} />
    </div>
  );
}

// How the cards read as a catalog grid — icon, name, summary, example tags.
export function Catalog() {
  return (
    <div className="grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.slice(0, 3).map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
}
