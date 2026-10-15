"use client";

import { useEffect, useRef, useState } from "react";
import { programs } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Programs() {
  const items = programs.items;
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.step));
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    stepRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="programs" className="bg-paper-2 py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-container px-[5%]">
        {/* Header */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:mb-20 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p
              data-reveal
              className="mb-6 flex items-center gap-3 text-small font-medium uppercase tracking-[0.2em] text-muted"
            >
              <span className="h-px w-8 bg-ink/25" />
              {programs.heading}
            </p>
            <h2 data-reveal className="display-2 text-balance text-ink">
              Care that reaches the last mile.
            </h2>
          </div>
          <p data-reveal className="max-w-sm text-medium text-pretty text-ink-2">
            {programs.intro}
          </p>
        </div>

        {/* Mobile: stacked cards */}
        <div className="flex flex-col gap-6 lg:hidden">
          {items.map((item) => (
            <article
              key={item.no}
              data-reveal
              className="overflow-hidden rounded-card border border-ink/10 bg-paper"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.image} alt="" className="size-full object-cover" />
                <span className="absolute left-4 top-4 font-display text-tiny font-semibold tracking-widest text-paper/90">
                  {item.no}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-h6 font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-regular text-pretty text-ink-2">{item.text}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Desktop: sticky visual + scrolling index */}
        <div className="hidden lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Sticky visual */}
          <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:items-center">
            <div className="relative aspect-[4/5] max-h-[80vh] w-full overflow-hidden rounded-card bg-ink">
              {items.map((item, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={item.no}
                  src={item.image}
                  alt=""
                  className={cn(
                    "absolute inset-0 size-full object-cover transition-[opacity,transform] duration-700 ease-out",
                    i === active ? "scale-100 opacity-100" : "scale-105 opacity-0",
                  )}
                />
              ))}
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <span className="absolute left-8 top-8 font-display text-h4 font-semibold text-paper/90">
                {items[active].no}
              </span>
              <div className="absolute inset-x-8 bottom-8">
                <h3 className="text-h4 font-semibold text-paper">{items[active].title}</h3>
              </div>
              {/* Progress ticks */}
              <div className="absolute right-8 top-1/2 flex -translate-y-1/2 flex-col gap-2">
                {items.map((item, i) => (
                  <span
                    key={item.no}
                    className={cn(
                      "h-6 w-0.5 rounded-full transition-colors duration-500",
                      i === active ? "bg-paper" : "bg-paper/30",
                    )}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Scrolling steps */}
          <div>
            {items.map((item, i) => (
              <div
                key={item.no}
                data-step={i}
                ref={(el) => {
                  stepRefs.current[i] = el;
                }}
                className="flex min-h-[88vh] flex-col justify-center"
              >
                <span
                  className={cn(
                    "font-display text-h5 font-semibold tracking-tight transition-colors duration-500",
                    i === active ? "text-ink" : "text-ink/25",
                  )}
                >
                  {item.no}
                </span>
                <h3
                  className={cn(
                    "mt-4 text-h3 font-semibold text-balance transition-colors duration-500",
                    i === active ? "text-ink" : "text-ink/30",
                  )}
                >
                  {item.title}
                </h3>
                <p
                  className={cn(
                    "mt-5 max-w-md text-medium text-pretty transition-colors duration-500",
                    i === active ? "text-ink-2" : "text-ink/30",
                  )}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
