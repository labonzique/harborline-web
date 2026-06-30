// Design-sync bundle entry for Harborline Systems.
// Re-exports the marketing-site component layer so the converter can esbuild it
// into window.Harborline. Next.js framework primitives (next/link,
// next/navigation) are aliased to static shims via .design-sync/tsconfig.ds.json
// — there is no Next runtime in the design tool.
// First import: side-effect polyfill for `process` (must precede component
// modules, which read process.env at init via lib/site.ts).
import "./ds-polyfill";

export * from "@/components/ui/button";
export * from "@/components/ui/accordion";
export * from "@/components/sections/service-card";
export * from "@/components/sections/trust-card";
export * from "@/components/sections/feature-grid";
export * from "@/components/sections/process-step";
export * from "@/components/sections/page-hero";
export * from "@/components/sections/section-header";
export * from "@/components/sections/cta-section";
export * from "@/components/sections/local-callout";
export * from "@/components/sections/service-accordion";
export * from "@/components/sections/hero-system-diagram";
export * from "@/components/layout/container";
export * from "@/components/layout/logo";
export * from "@/components/layout/site-header";
export * from "@/components/layout/site-footer";
export * from "@/components/layout/mobile-cta-bar";
export * from "@/components/motion/reveal";
export * from "@/components/theme-toggle";
export * from "@/components/contact/contact-form";
