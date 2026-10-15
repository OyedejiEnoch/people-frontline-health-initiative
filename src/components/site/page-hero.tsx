/* Reusable inner-page hero: full-bleed image + black washes + kicker/title. */
export function PageHero({
  image,
  imageAlt,
  kicker,
  title,
  subtitle,
}: {
  image: string;
  imageAlt: string;
  kicker: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative flex min-h-[78svh] w-full items-end overflow-hidden bg-black">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 size-full object-cover object-center brightness-[0.8]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

      <div className="animate-hero-rise relative z-10 mx-auto w-full max-w-container px-[5%] pb-16 pt-36 md:pb-24">
        <div className="max-w-4xl">
          <p className="mb-6 flex items-center gap-3 text-small font-medium uppercase tracking-[0.2em] text-paper/70">
            <span className="h-px w-8 bg-paper/40" />
            {kicker}
          </p>
          <h1 className="display-1 text-balance text-paper">{title}</h1>
          {subtitle && (
            <p className="mt-6 max-w-2xl text-large text-pretty text-paper/80">{subtitle}</p>
          )}
        </div>
      </div>
    </section>
  );
}
