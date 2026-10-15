"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Story = { tag: string; title: string; text: string; image: string };

export function StoriesScroll({
  heading,
  stories,
}: {
  heading: string;
  stories: Story[];
}) {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  // initializeWithValue:false => first client render matches the server ("stack"),
  // then upgrades to "pin" after mount. Prevents a hydration mismatch.
  const desktop = useMediaQuery("(min-width: 1024px)", { initializeWithValue: false });
  const reduced = useMediaQuery("(prefers-reduced-motion: reduce)", { initializeWithValue: false });
  const isStatic =
    typeof window !== "undefined" && new URLSearchParams(window.location.search).has("static");
  const mode: "stack" | "pin" = desktop && !reduced && !isStatic ? "pin" : "stack";

  useGSAP(
    () => {
      if (mode !== "pin" || !track.current || !root.current) return;

      const el = track.current;
      const distance = () => el.scrollWidth - window.innerWidth + window.innerWidth * 0.05;

      const tl = gsap.timeline();
      tl.to(el, { x: () => -distance(), ease: "none" }, 0)
        // Gentle vertical drift => the row reads diagonally as it moves.
        .fromTo(el, { y: -36 }, { y: 36, ease: "none" }, 0);

      ScrollTrigger.create({
        trigger: root.current,
        start: "top top",
        end: () => "+=" + distance(),
        pin: true,
        scrub: 1,
        animation: tl,
        invalidateOnRefresh: true,
      });
    },
    { dependencies: [mode], scope: root },
  );

  // ---- Pinned horizontal (desktop, motion) ----
  if (mode === "pin") {
    return (
      <section ref={root} className="relative overflow-hidden bg-paper">
        <div ref={track} className="flex h-screen items-center gap-8 pl-[5%] will-change-transform">
          {/* Leading title panel */}
          <div className="flex h-[68vh] w-[26rem] shrink-0 flex-col justify-end pr-8">
            <span className="mb-5 h-px w-12 bg-ink/30" />
            <h2 className="display-2 text-balance text-ink">{heading}</h2>
            <p className="mt-5 text-medium text-muted">
              Real change, one community at a time. Scroll to move through the stories.
            </p>
          </div>

          {stories.map((story, i) => (
            <article
              key={i}
              style={{ transform: `translateY(${i % 2 === 0 ? -1.5 : 1.5}rem)` }}
              className="grid h-[70vh] w-[72vw] max-w-[62rem] shrink-0 grid-cols-[1.5fr_1fr] overflow-hidden rounded-card bg-ink"
            >
              <div className="relative overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={story.image} alt="" className="size-full object-cover" />
              </div>
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <span className="mb-5 w-fit rounded-full border border-paper/25 px-3 py-1 text-tiny font-medium uppercase tracking-[0.15em] text-paper/70">
                  {story.tag}
                </span>
                <h3 className="text-h3 font-semibold text-balance text-paper">{story.title}</h3>
                <p className="mt-4 text-medium text-pretty text-paper/75">{story.text}</p>
              </div>
            </article>
          ))}

          <div className="w-[5vw] shrink-0" aria-hidden />
        </div>
      </section>
    );
  }

  // ---- Stacked fallback (mobile, reduced motion, static) ----
  return (
    <section ref={root} className="bg-paper py-24 md:py-36">
      <div className="mx-auto max-w-container px-[5%]">
        <div className="mb-10 max-w-2xl md:mb-14">
          <span className="mb-5 block h-px w-12 bg-ink/30" />
          <h2 className="display-2 text-balance text-ink">{heading}</h2>
        </div>
        <div className="flex flex-col gap-6">
          {stories.map((story, i) => (
            <article
              key={i}
              className={cn(
                "grid grid-cols-1 overflow-hidden rounded-card bg-ink md:grid-cols-2",
                i % 2 === 1 && "md:[direction:rtl]",
              )}
            >
              <div className="relative min-h-[240px] overflow-hidden md:min-h-[360px] md:[direction:ltr]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={story.image} alt="" className="size-full object-cover" />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12 md:[direction:ltr]">
                <span className="mb-5 w-fit rounded-full border border-paper/25 px-3 py-1 text-tiny font-medium uppercase tracking-[0.15em] text-paper/70">
                  {story.tag}
                </span>
                <h3 className="text-h4 font-semibold text-balance text-paper">{story.title}</h3>
                <p className="mt-4 text-regular text-pretty text-paper/75">{story.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
