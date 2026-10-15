import { impact } from "@/lib/content";

export function Impact() {
  return (
    <section id="impact" className="bg-paper py-28 md:py-40 lg:py-48">
      <div className="mx-auto max-w-container px-[5%]">
        <div className="mb-14 max-w-3xl md:mb-20">
          <p
            data-reveal
            className="mb-6 flex items-center gap-3 text-small font-medium uppercase tracking-[0.2em] text-muted"
          >
            <span className="h-px w-8 bg-ink/25" />
            Our impact
          </p>
          <h2 data-reveal className="display-2 text-balance text-ink">
            {impact.heading}
          </h2>
          <p data-reveal className="mt-6 text-large text-pretty text-ink-2">
            {impact.intro}
          </p>
        </div>

        {/* Stats — hidden until the milestones are real (see content.ts) */}
        {impact.stats.length > 0 && (
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 border-t border-ink/15 pt-10 md:grid-cols-4">
            {impact.stats.map((stat) => (
              <div key={stat.label} data-reveal>
                <div className="font-display text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-none tracking-tight text-accent">
                  {stat.value}
                </div>
                <div className="mt-3 text-small font-medium text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
