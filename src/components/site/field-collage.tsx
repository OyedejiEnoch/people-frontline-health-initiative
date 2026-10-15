import { fieldCollage } from "@/lib/content";

export function FieldCollage() {
  return (
    <section className="bg-paper py-28 md:py-40 lg:py-48">
      <div className="mx-auto max-w-container px-[5%]">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <p
              data-reveal
              className="mb-6 flex items-center gap-3 text-small font-medium uppercase tracking-[0.2em] text-muted"
            >
              <span className="h-px w-8 bg-ink/25" />
              {fieldCollage.kicker}
            </p>
            <h2 data-reveal className="display-2 max-w-3xl text-balance text-ink">
              {fieldCollage.heading}
            </h2>
          </div>
          <p
            data-reveal
            className="max-w-md text-medium text-pretty text-ink-2 md:justify-self-end"
          >
            {fieldCollage.body}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 border-t border-ink/12 md:mt-24 md:grid-cols-3 md:divide-x md:divide-ink/10">
          {fieldCollage.points.map((point, i) => (
            <div
              key={point.title}
              data-reveal
              className="border-b border-ink/10 py-10 last:border-b-0 md:border-b-0 md:px-10 md:py-12 md:first:pl-0 md:last:pr-0"
            >
              <span className="font-display text-tiny font-semibold tracking-widest text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-h5 font-semibold text-ink">{point.title}</h3>
              <p className="mt-3 text-regular text-pretty text-ink-2">{point.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
