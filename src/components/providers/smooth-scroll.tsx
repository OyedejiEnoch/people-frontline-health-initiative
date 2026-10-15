"use client";

import { useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const wrapper = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReduced =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      // QA flag (?static): disable Lenis + reveal animations and show all
      // content immediately, so headless screenshots capture a stable frame
      // (the continuous rAF loop otherwise never idles).
      const isStatic =
        typeof window !== "undefined" &&
        new URLSearchParams(window.location.search).has("static");

      if (isStatic) {
        gsap.set("[data-reveal]", { opacity: 1, y: 0 });
        return;
      }

      // Global scroll-reveal for anything tagged [data-reveal].
      // Batched so hundreds of elements share a handful of ScrollTriggers.
      if (!prefersReduced) {
        ScrollTrigger.batch("[data-reveal]", {
          start: "top 88%",
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
              stagger: 0.09,
              overwrite: true,
            }),
        });
        gsap.set("[data-reveal]", { y: 28 });

        // Image reveal masks: uncover from the bottom with a subtle push.
        // Guarded so pages without any masked images don't warn.
        if (document.querySelector("[data-reveal-mask]")) {
          gsap.set("[data-reveal-mask]", { clipPath: "inset(0% 0% 100% 0%)" });
          gsap.set("[data-reveal-mask] img", { scale: 1.14 });
          ScrollTrigger.batch("[data-reveal-mask]", {
            start: "top 85%",
            once: true,
            onEnter: (batch) =>
              batch.forEach((el) => {
                gsap.to(el, {
                  clipPath: "inset(0% 0% 0% 0%)",
                  duration: 1.1,
                  ease: "power3.out",
                });
                const img = el.querySelector("img");
                if (img) gsap.to(img, { scale: 1, duration: 1.3, ease: "power3.out" });
              }),
          });
        }

        ScrollTrigger.refresh();
      }

      if (prefersReduced) return;

      // Lenis smooth scrolling, driven by GSAP's ticker so ScrollTrigger and
      // Lenis stay in perfect sync.
      const lenis = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      lenis.on("scroll", ScrollTrigger.update);
      const ticker = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(ticker);
      gsap.ticker.lagSmoothing(0);

      return () => {
        gsap.ticker.remove(ticker);
        lenis.destroy();
      };
    },
    { scope: wrapper },
  );

  return <div ref={wrapper}>{children}</div>;
}
