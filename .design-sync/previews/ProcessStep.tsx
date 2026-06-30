import { ProcessStep } from "harborline-systems";
import { processSteps } from "@/content/process";

// A single step card — number badge, icon, label, title and description.
// `isLast` hides the connector line so it doesn't dangle below a lone step.
export function Default() {
  return (
    <div className="max-w-xl">
      <ProcessStep step={processSteps[0]} isLast />
    </div>
  );
}

// The full vertical timeline as the Process page renders it — connector line
// links each step, and the final step closes the rail.
export function Timeline() {
  return (
    <div className="mx-auto max-w-xl">
      {processSteps.map((step, i) => (
        <ProcessStep
          key={step.key}
          step={step}
          index={i}
          isLast={i === processSteps.length - 1}
        />
      ))}
    </div>
  );
}
