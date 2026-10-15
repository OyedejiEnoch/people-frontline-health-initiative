"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Token =
  | { type: "word"; text: string }
  | { type: "chip"; src: string; alt: string };

// The manifesto. Chips are real faces nested inline in the sentence — the
// people literally live inside the words about healthcare being a right.
const TOKENS: Token[] = [
  { type: "word", text: "Healthcare" },
  { type: "word", text: "is" },
  { type: "word", text: "a" },
  { type: "word", text: "right" },
  { type: "word", text: "—" },
  { type: "word", text: "for" },
  { type: "word", text: "every" },
  { type: "chip", src: "/images/program-wellbeing.jpg", alt: "A child" },
  { type: "word", text: "child," },
  { type: "word", text: "every" },
  { type: "chip", src: "/images/program-maternal.jpg", alt: "A family" },
  { type: "word", text: "family," },
  { type: "word", text: "every" },
  { type: "chip", src: "/images/approach-community.jpg", alt: "A community" },
  { type: "word", text: "community," },
  { type: "word", text: "and" },
  { type: "word", text: "everyone" },
  { type: "word", text: "on" },
  { type: "word", text: "the" },
  { type: "chip", src: "/images/hero-outreach.jpg", alt: "A frontline health worker" },
  { type: "word", text: "frontline." },
];

export function ManifestoScroll() {
  const section = useRef<HTMLElement>(null);
  const kicker = useRef<HTMLParagraphElement>(null);
  const chips = useRef<HTMLSpanElement[]>([]);
  const words = useRef<HTMLSpanElement[]>([]);
  const [enhanced, setEnhanced] = useState(false);

  chips.current = [];
  words.current = [];

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isStatic = new URLSearchParams(window.location.search).has("static");
    setEnhanced(desktop && !reduced && !isStatic);
  }, []);

  useGSAP(
    () => {
      if (!enhanced || !section.current) return;

      const build = () => {
        const sEl = section.current!;
        const sRect = sEl.getBoundingClientRect();
        const n = chips.current.length;

        // Measure each chip's natural (in-flow, scale 1) centre.
        gsap.set(chips.current, { x: 0, y: 0, scale: 1 });
        const inlineSize = chips.current[0]?.getBoundingClientRect().width || 44;
        const clusterSize = Math.min(sRect.width * 0.16, 190);
        const bigScale = clusterSize / inlineSize;
        const gap = clusterSize * 0.16;
        const totalW = n * clusterSize + (n - 1) * gap;

        const deltas = chips.current.map((chip, i) => {
          const r = chip.getBoundingClientRect();
          const naturalX = r.left - sRect.left + r.width / 2;
          const naturalY = r.top - sRect.top + r.height / 2;
          const clusterX = sRect.width / 2 - totalW / 2 + i * (clusterSize + gap) + clusterSize / 2;
          const clusterY = sRect.height * 0.56;
          return { x: clusterX - naturalX, y: clusterY - naturalY };
        });

        const tl = gsap.timeline({ defaults: { ease: "none" } });

        // Kicker fades out as the sequence begins.
        tl.fromTo(kicker.current, { opacity: 1, y: 0 }, { opacity: 0, y: -24, duration: 0.12 }, 0);

        // Chips fly from the centred cluster into their inline slots.
        chips.current.forEach((chip, i) => {
          tl.fromTo(
            chip,
            { x: deltas[i].x, y: deltas[i].y, scale: bigScale },
            { x: 0, y: 0, scale: 1, duration: 0.6, ease: "power2.inOut" },
            0.04 * i,
          );
        });

        // Words resolve in, riding just behind the chips.
        tl.fromTo(
          words.current,
          { opacity: 0, filter: "blur(6px)", y: 8 },
          { opacity: 1, filter: "blur(0px)", y: 0, stagger: 0.015, duration: 0.25 },
          0.5,
        );

        ScrollTrigger.create({
          trigger: sEl,
          start: "top top",
          end: () => "+=" + window.innerHeight * 3,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          animation: tl,
        });
      };

      build();

      // Rebuild on resize so positions stay exact.
      let t: number;
      const onResize = () => {
        clearTimeout(t);
        t = window.setTimeout(() => {
          ScrollTrigger.getAll().forEach((st) => {
            if (st.trigger === section.current) st.kill();
          });
          gsap.set([...chips.current, kicker.current, ...words.current], { clearProps: "all" });
          build();
        }, 200);
      };
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    },
    { dependencies: [enhanced], scope: section },
  );

  return (
    <section
      ref={section}
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-paper px-[6%] py-24"
    >
      <div className="relative mx-auto w-full max-w-5xl text-center">
        <p
          ref={kicker}
          className="mb-10 flex items-center justify-center gap-3 text-small font-medium uppercase tracking-[0.2em] text-muted"
        >
          <span className="h-px w-8 bg-ink/25" />
          What we believe
          <span className="h-px w-8 bg-ink/25" />
        </p>

        <h2 className="display-2 flex flex-wrap items-center justify-center gap-x-[0.28em] gap-y-2 text-ink">
          {TOKENS.map((token, i) =>
            token.type === "word" ? (
              <span
                key={i}
                ref={(el) => {
                  if (el) words.current.push(el);
                }}
                className="inline-block"
              >
                {token.text}
              </span>
            ) : (
              <span
                key={i}
                ref={(el) => {
                  if (el) chips.current.push(el);
                }}
                className="inline-flex aspect-square h-[1.05em] w-[1.05em] shrink-0 items-center justify-center overflow-hidden rounded-full align-middle shadow-[0_6px_20px_-8px_rgb(var(--ink)/0.4)] will-change-transform md:h-[1.15em] md:w-[1.15em]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={token.src} alt={token.alt} className="size-full object-cover" />
              </span>
            ),
          )}
        </h2>
      </div>
    </section>
  );
}
