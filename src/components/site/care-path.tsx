import { carePath } from "@/lib/content";

export function CarePath() {
  return (
    <section className="bg-paper py-28 text-ink md:py-44 lg:py-52">
      <div className="mx-auto max-w-container px-[5%]">
        <div className="grid gap-10 border-b border-ink/12 pb-16 md:grid-cols-[1.15fr_0.85fr] md:items-end md:pb-24">
          <h2 data-reveal className="display-2 max-w-3xl text-balance">
            {carePath.heading}
          </h2>
          <p data-reveal className="max-w-md text-medium text-pretty text-ink-2 md:justify-self-end">
            {carePath.intro}
          </p>
        </div>

        <ol className="divide-y divide-ink/10">
          {carePath.steps.map((step) => (
            <li
              key={step.no}
              data-reveal
              className="group grid gap-5 py-10 md:grid-cols-[5rem_0.8fr_1.2fr] md:items-baseline md:gap-10 md:py-14"
            >
              <span className="font-display text-small font-semibold tabular-nums text-accent">
                {step.no}
              </span>
              <h3 className="text-h5 font-semibold tracking-tight text-ink md:text-h4">
                {step.title}
              </h3>
              <p className="max-w-xl text-medium text-pretty text-ink-2 md:justify-self-end">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
