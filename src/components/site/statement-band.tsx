const WORDS = ["Trust", "Hope", "Impact"];

export function StatementBand() {
  const row = [...WORDS, ...WORDS, ...WORDS, ...WORDS];
  return (
    <section className="relative overflow-hidden bg-black py-24 md:py-32 lg:py-40">
      {/* Ambient wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, rgb(var(--paper) / 0.08), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-container px-[5%] text-center">
        <p
          data-reveal
          className="mb-8 flex items-center justify-center gap-3 text-small font-medium uppercase tracking-[0.2em] text-paper/50"
        >
          <span className="h-px w-8 bg-paper/30" />
          Why we exist
          <span className="h-px w-8 bg-paper/30" />
        </p>
        <h2 data-reveal className="display-2 mx-auto max-w-4xl text-balance text-paper">
          Preventable illness still takes lives that basic care could save. We exist to close that
          gap.
        </h2>
      </div>

      {/* Three-word marquee */}
      <div
        className="relative mt-16 flex overflow-hidden border-y border-paper/15 py-5 md:mt-20"
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
