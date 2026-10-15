import { involve } from "@/lib/content";
import { cn } from "@/lib/utils";

function Arrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={cn("size-5 transition-transform duration-300 ease-out", className)}
    >
      <path
        d="M5 12h14m0 0-6-6m6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Involve() {
  return (
    <section id="involve" className="mx-auto max-w-container px-[5%] py-28 md:py-40 lg:py-48">
      <div className="mb-14 max-w-2xl md:mb-20">
        <p
          data-reveal
          className="mb-6 flex items-center gap-3 text-small font-medium uppercase tracking-[0.2em] text-muted"
        >
          <span className="h-px w-8 bg-ink/25" />
          Get involved
        </p>
        <h2 data-reveal className="display-2 text-balance text-ink">
          {involve.heading}
        </h2>
        <p data-reveal className="mt-6 text-large text-pretty text-ink-2">
          {involve.intro}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {involve.options.map((option, i) => {
          const primary = i === 0;
          return (
            <a
              key={option.no}
              href={option.cta.url}
              data-reveal
              className={cn(
                "group flex min-h-[22rem] flex-col justify-between rounded-card p-8 transition-[transform,box-shadow] duration-500 ease-out hover:-translate-y-1 md:p-10",
                primary
                  ? "bg-accent text-accent-foreground hover:shadow-[0_28px_70px_-28px_rgb(var(--accent)/0.65)]"
                  : "border border-ink/12 bg-paper text-ink hover:shadow-[0_24px_60px_-24px_rgb(var(--ink)/0.25)]",
              )}
            >
              <div className="flex items-start justify-between">
                <span
                  className={cn(
                    "font-display text-tiny font-semibold tracking-widest",
                    primary ? "text-paper/60" : "text-muted",
                  )}
                >
                  {option.no}
                </span>
                <Arrow
                  className={cn(
                    "group-hover:translate-x-1",
                    primary ? "text-paper" : "text-ink",
                  )}
                />
              </div>
              <div>
                <h3 className="text-h4 font-semibold">{option.title}</h3>
                <p
                  className={cn(
                    "mt-4 text-medium text-pretty",
                    primary ? "text-paper/75" : "text-ink-2",
                  )}
                >
                  {option.text}
                </p>
                <span
                  className={cn(
                    "mt-6 inline-flex items-center gap-2 text-medium font-medium",
                    primary ? "text-paper" : "text-ink",
                  )}
                >
                  {option.cta.title}
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
