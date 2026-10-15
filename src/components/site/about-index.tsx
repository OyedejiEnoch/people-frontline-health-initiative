"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const SECTIONS = [
  { id: "story", label: "Who we are" },
  { id: "values", label: "What we stand for" },
  { id: "vision", label: "Where we’re going" },
];

export function AboutIndex() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const seen = new Set<string>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const id = (e.target as HTMLElement).id;
          if (e.isIntersecting) {
            seen.add(id);
            setActive(SECTIONS.findIndex((s) => s.id === id));
          } else {
            seen.delete(id);
          }
        });
        setVisible(seen.size > 0);
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <nav
      aria-label="Page sections"
      className={cn(
        "fixed right-[3%] top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-5 transition-opacity duration-500 lg:flex",
        visible ? "opacity-100" : "pointer-events-none opacity-0",
      )}
    >
      {SECTIONS.map((s, i) => (
        <a key={s.id} href={`#${s.id}`} className="group flex items-center justify-end gap-3">
          <span
            className={cn(
              "text-tiny font-medium uppercase tracking-[0.15em] transition-all duration-300",
              i === active
                ? "text-ink opacity-100"
                : "text-muted opacity-0 group-hover:opacity-100",
            )}
          >
            {s.label}
          </span>
          <span
            className={cn(
              "font-display text-tiny font-semibold transition-colors duration-300",
              i === active ? "text-ink" : "text-muted",
            )}
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <span
            className={cn(
              "h-px transition-all duration-300",
              i === active ? "w-8 bg-accent" : "w-4 bg-ink/25",
            )}
          />
        </a>
      ))}
    </nav>
  );
}
