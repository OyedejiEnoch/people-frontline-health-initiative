import Image from "next/image";

const WORDS = ["Trust", "Hope", "Impact"];

export function StatementBand() {
  const row = [...WORDS, ...WORDS, ...WORDS, ...WORDS];
  return (
    <section className="relative isolate overflow-hidden bg-black py-24 md:py-36 lg:py-48">
      <Image
        src="/images/hero-outreach.jpg"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover object-center opacity-35 saturate-50"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/85 via-ink/80 to-black/95" />
      <div className="relative mx-auto max-w-container px-[5%]">
        <p
          data-reveal
          className="mb-8 flex items-center gap-3 text-small font-medium uppercase tracking-[0.2em] text-paper/55"
        >
          <span className="h-px w-8 bg-paper/30" />
          The gap we are closing
        </p>
        <h2 data-reveal className="display-1 max-w-5xl text-balance text-paper">
          Distance should never decide who gets to be healthy.
        </h2>
        <div className="mt-16 border-y border-paper/15 md:mt-24">
          {[
            "When care is too far away, small barriers become dangerous.",
            "When information is unclear, preventable illness goes unseen.",
            "When communities lead, healthier futures can take root.",
          ].map((line, index) => (
            <p
              key={line}
              data-reveal
              className={`border-paper/15 py-6 text-h6 font-medium text-paper/75 md:max-w-[76%] md:py-8 md:text-h4 ${
                index > 0 ? "border-t" : ""
              } ${index === 1 ? "md:ml-[12%]" : index === 2 ? "md:ml-[24%]" : ""}`}
            >
              {line}
            </p>
          ))}
        </div>
      </div>

      {/* Three-word marquee */}
      <div
        className="relative mt-16 flex overflow-hidden border-y border-paper/15 py-5 md:mt-24"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10 md:gap-16 md:pr-16">
          {row.map((word, i) => (
            <span key={i} className="flex items-center gap-10 md:gap-16">
              <span className="font-display text-h4 font-semibold tracking-tight text-paper/85">
                {word}
              </span>
              <span className="size-1.5 rounded-full bg-paper/40" aria-hidden />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
