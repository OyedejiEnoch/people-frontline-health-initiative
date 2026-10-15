"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";
import { hero } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const isStatic = new URLSearchParams(window.location.search).has("static");
      if (prefersReduced || isStatic) return;

      // Entrance: kicker, headline lines, body, actions.
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from(".hero-kicker", { y: 20, opacity: 0, duration: 0.6, delay: 0.15 })
        .from(".hero-line", { yPercent: 110, opacity: 0, duration: 1, stagger: 0.12 }, "-=0.3")
        .from(".hero-body", { y: 20, opacity: 0, duration: 0.7 }, "-=0.5")
        .from(".hero-actions", { y: 20, opacity: 0, duration: 0.7 }, "-=0.5")
        .from(".hero-cue", { opacity: 0, duration: 0.8 }, "-=0.4");

      // Looping scroll-cue tick.
      gsap.fromTo(
        ".hero-tick",
        { yPercent: -110 },
        { yPercent: 260, duration: 1.7, ease: "power1.inOut", repeat: -1 },
      );

      // Parallax: image drifts slower than scroll.
      gsap.to(".hero-image", {
        yPercent: 18,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} id="top" className="relative min-h-[100svh] w-full overflow-hidden bg-black">
      {/* Background image */}
      <div className="absolute inset-0 -z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={hero.image}
          alt={hero.imageAlt}
          className="hero-image absolute inset-0 size-full scale-110 object-cover object-center brightness-[0.82]"
        />
        {/* Legibility washes */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />
      </div>

      {/* Content — lower-third editorial */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-container flex-col justify-end px-[5%] pb-16 pt-32 md:pb-24">
        <div className="max-w-4xl">
          <p className="hero-kicker mb-6 flex items-center gap-3 text-small font-medium uppercase tracking-[0.2em] text-paper/70">
            <span className="h-px w-8 bg-paper/40" />
            {hero.kicker}
          </p>

          <h1 className="display-1 text-balance text-paper">
            <span className="block overflow-hidden">
              <span className="hero-line block">{hero.headline}</span>
            </span>
            <span className="block overflow-hidden">
              <span className="hero-line block text-paper/60">{hero.headlineAccent}</span>
            </span>
          </h1>

          <p className="hero-body mt-8 max-w-xl text-large text-pretty text-paper/80">
            {hero.body}
          </p>

          <div className="hero-actions mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg" variant="alternate">
              <a href={hero.primary.url}>{hero.primary.title}</a>
            </Button>
            <Button asChild size="lg" variant="secondary-alt">
              <a href={hero.secondary.url}>{hero.secondary.title}</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="hero-cue absolute bottom-8 right-[5%] z-10 hidden items-center gap-3 text-tiny uppercase tracking-[0.2em] text-paper/60 md:flex">
        Scroll
        <span className="relative h-10 w-px overflow-hidden bg-paper/20">
          <span className="hero-tick absolute inset-x-0 top-0 h-4 bg-paper/80" />
        </span>
      </div>
    </section>
  );
}
