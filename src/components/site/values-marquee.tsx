import { values } from "@/lib/content";

export function ValuesMarquee() {
  const row = [...values, ...values];
  return (
    <section
      aria-label="Our values"
      className="border-y border-ink/10 bg-paper-2 py-5 md:py-6"
    >
      <div
        className="relative flex overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex shrink-0 animate-marquee items-center gap-8 pr-8 md:gap-12 md:pr-12">
          {row.map((value, i) => (
            <span key={i} className="flex items-center gap-8 md:gap-12">
              <span className="text-medium font-medium tracking-tight text-ink-2 md:text-large">
                {value}
              </span>
              <span className="size-1.5 rounded-full bg-accent/40" aria-hidden />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
