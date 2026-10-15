"use client";

import { useRef } from "react";
import Image from "next/image";
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

      // Parallax: image drifts slower than scroll.
      gsap.to(".hero-image", {
        yPercent: 8,
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
    <section ref={root} id="top" className="relative min-h-[min(60rem,100svh)] w-full overflow-hidden bg-black">
      {/* Background image */}
      <div className="absolute inset-0 -z-0">
        <Image
          src={hero.image}
          alt={hero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="hero-image scale-105 object-cover object-center brightness-[0.82]"
        />
        {/* Legibility washes */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />
      </div>

      {/* Content — lower-third editorial */}
      <div className="relative z-10 mx-auto flex min-h-[min(60rem,100svh)] max-w-container flex-col justify-end px-[5%] pb-12 pt-32 md:pb-20">
        <div className="max-w-[58rem]">
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

          <p className="hero-body mt-7 max-w-xl text-medium text-pretty text-paper/80 md:text-large">
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

        <div className="hero-body mt-12 grid max-w-3xl grid-cols-1 gap-px overflow-hidden rounded-[0.875rem] border border-paper/20 bg-paper/20 backdrop-blur-md sm:grid-cols-3 lg:absolute lg:bottom-20 lg:right-[5%] lg:mt-0 lg:w-[28rem] lg:grid-cols-1">
          {[
            ["Community-led", "Built with the people closest to the need"],
            ["Evidence-informed", "Research and learning shape the response"],
            ["Designed to last", "Local capacity remains after the project"],
          ].map(([title, text]) => (
            <div key={title} className="bg-ink/45 p-4 text-paper md:p-5">
              <p className="text-small font-semibold">{title}</p>
              <p className="mt-1 text-small leading-relaxed text-paper/65">{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="hero-cue absolute bottom-8 right-[5%] z-10 hidden items-center gap-3 text-tiny uppercase tracking-[0.2em] text-paper/60 md:flex">
        Scroll
        <span className="h-10 w-px bg-paper/35" />
      </div>
    </section>
  );
}
