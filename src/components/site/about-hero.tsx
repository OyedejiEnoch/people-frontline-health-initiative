/*
  Symbiotic-Projects-style About hero: full-bleed cinematic background + a big,
  light-weight centered mission line. No PFHI video footage yet, so we use a
  slow Ken-Burns image. TO ADD REAL FOOTAGE later: replace the <img> below with
    <video autoPlay muted loop playsInline poster="/images/hero-outreach.jpg"
      className="absolute inset-0 size-full object-cover">
      <source src="/videos/about-hero.mp4" type="video/mp4" />
    </video>
  and drop the `animate-kenburns` class.
*/
export function AboutHero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-ink">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/approach-community.jpg"
        alt="A community coming together"
        className="animate-kenburns absolute inset-0 size-full object-cover object-center"
      />
      {/* Legibility washes (green-black) */}
      <div className="absolute inset-0 bg-ink/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-transparent to-ink/70" />

      <div className="relative z-10 flex min-h-[100svh] items-center justify-center px-[6%] py-32 text-center">
        <h1 className="animate-hero-rise mx-auto max-w-5xl font-display text-[clamp(2.25rem,6vw,5.5rem)] font-normal leading-[1.06] tracking-tight text-paper">
          We are on a mission to bring care to the communities the system{" "}
          <span className="text-paper/65">leaves behind.</span>
        </h1>
      </div>

      {/* Scroll cue (sits above the overlapping story panel) */}
      <div className="absolute inset-x-0 bottom-[10vh] z-10 flex justify-center">
        <span className="flex flex-col items-center gap-2 text-tiny uppercase tracking-[0.2em] text-paper/60">
          Our story
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-80"
            aria-hidden="true"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </span>
      </div>
    </section>
  );
}
