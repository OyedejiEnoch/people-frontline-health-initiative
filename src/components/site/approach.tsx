import { approach } from "@/lib/content";

export function Approach() {
  return (
    <section className="mx-auto max-w-container px-[5%] py-24 md:py-32 lg:py-40">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Image */}
        <div className="relative order-2 lg:order-1">
          <div data-reveal-mask className="relative aspect-[4/5] overflow-hidden rounded-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={approach.image}
              alt="Working alongside a community, not for it"
              className="size-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="order-1 lg:order-2">
          <h2 data-reveal className="display-2 text-balance text-ink">
            {approach.heading}
          </h2>
          <p data-reveal className="mt-8 max-w-xl text-large text-pretty text-ink-2">
            {approach.body}
          </p>

          <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
            {approach.pillars.map((pillar) => (
              <div key={pillar.title} data-reveal className="border-t border-ink/15 pt-5">
                <h3 className="text-h6 font-semibold text-ink">{pillar.title}</h3>
                <p className="mt-2 text-regular text-pretty text-ink-2">{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
