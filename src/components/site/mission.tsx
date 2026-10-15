import { mission } from "@/lib/content";

export function Mission() {
  return (
    <section id="about" className="mx-auto max-w-container px-[5%] py-28 md:py-40 lg:py-48">
      <p
        data-reveal
        className="mb-10 flex items-center gap-3 text-small font-medium uppercase tracking-[0.2em] text-muted md:mb-14"
      >
        <span className="h-px w-8 bg-ink/25" />
        Our purpose
      </p>

      <div className="max-w-5xl">
        <h2 data-reveal className="display-2 text-balance text-ink">
          {mission.lead}
        </h2>
        <p
          data-reveal
          className="mt-8 max-w-2xl text-large text-pretty text-ink-2 md:text-xl"
        >
          {mission.body}
        </p>
      </div>

      <div className="mt-20 grid grid-cols-1 border-y border-ink/10 md:mt-32 md:grid-cols-2 md:divide-x md:divide-ink/10">
        {mission.points.map((point) => (
          <div key={point.label} data-reveal className="py-10 first:border-b first:border-ink/10 md:px-12 md:py-14 md:first:border-b-0 md:first:pl-0 md:last:pr-0">
            <h3 className="mb-4 text-h6 font-semibold text-ink">{point.label}</h3>
            <p className="text-medium text-pretty text-ink-2">{point.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
