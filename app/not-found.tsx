import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-horizon">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-fine-grid opacity-50" />
      <Container className="relative flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <span className="eyebrow">Page not found</span>
        <h1 className="mt-5 text-balance text-4xl font-semibold sm:text-5xl">
          This page got lost in the system.
        </h1>
        <p className="mt-5 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
          The page you are looking for moved or never existed. Let us point you
          back to something useful.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/" variant="primary" size="lg">
            Back to home
          </Button>
          <Button href="/contact" variant="secondary" size="lg">
            Book a Free Audit
          </Button>
        </div>
      </Container>
    </section>
  );
}
