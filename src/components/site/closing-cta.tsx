import { Button } from "@/components/ui/button";
import { closing } from "@/lib/content";

export function ClosingCta() {
  return (
    <section id="donate" className="relative overflow-hidden bg-ink">
      {/* Ambient wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, rgb(var(--paper) / 0.08), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-container px-[5%] py-28 text-center md:py-40">
        <h2 data-reveal className="display-1 mx-auto max-w-4xl text-balance text-paper">
          {closing.heading}
        </h2>
        <p data-reveal className="mx-auto mt-6 max-w-xl text-large text-pretty text-paper/70">
          {closing.body}
        </p>
        <div
          data-reveal
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button asChild size="lg" variant="alternate">
            <a href={closing.primary.url}>{closing.primary.title}</a>
          </Button>
          <Button asChild size="lg" variant="secondary-alt">
            <a href={closing.secondary.url}>{closing.secondary.title}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
