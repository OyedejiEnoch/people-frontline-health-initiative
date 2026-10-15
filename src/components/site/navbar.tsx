"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/site/logo";
import { nav } from "@/lib/content";
import { cn } from "@/lib/utils";

const EASE = [0.23, 1, 0.32, 1] as const;

const panelVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.28, ease: EASE, staggerChildren: 0.055, delayChildren: 0.08 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2, ease: EASE, staggerChildren: 0.025, staggerDirection: -1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
  exit: { opacity: 0, y: 10, transition: { duration: 0.15, ease: EASE } },
};

function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path
        d="M7 17 17 7M9 7h8v8"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Navbar({ overDark = true }: { overDark?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll + allow Escape to close while the menu is open.
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Over a dark hero (top, not scrolled) we invert to light text. Light-hero
  // pages pass overDark={false}; the open menu is always on paper, so ink.
  const light = overDark && !scrolled && !open;

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-[999] px-[3%] pt-3 md:pt-4">
      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={panelVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            id="mobile-navigation"
            className="pointer-events-auto fixed inset-0 z-0 bg-paper lg:hidden"
          >
            <div className="flex h-[100dvh] flex-col px-[7%] pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-28">
              <nav className="flex flex-col">
                {nav.links.map((link) => (
                  <motion.div key={link.title} variants={itemVariants}>
                    <Link
                      href={link.url}
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-between border-b border-ink/10 py-5"
                    >
                      <span className="font-display text-[2rem] font-semibold tracking-tight text-ink">
                        {link.title}
                      </span>
                      <ArrowUpRight className="size-6 text-muted transition-[transform,color] duration-300 group-hover:translate-x-0.5 group-hover:text-ink" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div variants={itemVariants} className="mt-auto flex flex-col gap-5 pt-10">
                <Button asChild size="lg" className="w-full">
                  <Link href={nav.cta.url} onClick={() => setOpen(false)}>
                    {nav.cta.title}
                  </Link>
                </Button>
                <a
                  href="mailto:hello@peoplefrontlinehealth.org"
                  className="text-small font-medium text-muted underline decoration-ink/20 underline-offset-4 transition-colors hover:text-ink"
                >
                  hello@peoplefrontlinehealth.org
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating pill */}
      <div
        className={cn(
          "pointer-events-auto relative z-10 mx-auto flex h-16 max-w-[74rem] items-center justify-between rounded-full border px-4 transition-[background-color,border-color,box-shadow] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] sm:px-5 md:h-[4.25rem] md:px-6",
          scrolled || open
            ? "border-ink/10 bg-paper/90 shadow-[0_14px_44px_-28px_rgb(var(--ink)/0.55)] backdrop-blur-xl"
            : "border-paper/20 bg-ink/20 shadow-[0_14px_44px_-30px_rgba(0,0,0,0.75)] backdrop-blur-lg",
        )}
      >
        <Link
          href="/"
          aria-label={nav.brandFull}
          onClick={() => setOpen(false)}
          className="relative z-10 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paper/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
        >
          <Logo tone={light ? "paper" : "ink"} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.links.map((link) => (
            <Link
              key={link.title}
              href={link.url}
              className={cn(
                "rounded-full px-4 py-2 text-medium font-medium transition-colors",
                light ? "text-paper/80 hover:text-paper" : "text-ink-2 hover:text-ink",
              )}
            >
              {link.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            asChild
            size="sm"
            variant={light ? "alternate" : "default"}
            className="hidden sm:inline-flex"
          >
            <Link href={nav.cta.url}>{nav.cta.title}</Link>
          </Button>

          {/* Mobile toggle */}
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="relative z-10 -mr-1 flex size-11 touch-manipulation flex-col items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/35 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            <span
              className={cn(
                "block h-0.5 w-6 origin-center transition-all duration-300",
                light ? "bg-paper" : "bg-ink",
                open && "translate-y-[3px] rotate-45",
              )}
            />
            <span
              className={cn(
                "mt-1.5 block h-0.5 w-6 origin-center transition-all duration-300",
                light ? "bg-paper" : "bg-ink",
                open && "-translate-y-[5px] -rotate-45",
              )}
            />
          </button>
        </div>
      </div>
    </header>
  );
}
