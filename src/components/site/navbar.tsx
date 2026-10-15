"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/site/logo";
import { nav } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Navbar({ overDark = true }: { overDark?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Over a dark hero (top, not scrolled) we invert to light text. Light-hero
  // pages (e.g. About) pass overDark={false} so text stays ink from the top.
  const light = overDark && !scrolled && !open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[999] transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled || open
          ? "border-b border-ink/10 bg-paper/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-container items-center justify-between px-[5%] md:h-20">
        <a href="/" aria-label={nav.brandFull} className="relative z-10">
          <Logo tone={light ? "paper" : "ink"} />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.links.map((link) => (
            <a
              key={link.title}
              href={link.url}
              className={cn(
                "rounded-full px-4 py-2 text-medium font-medium transition-colors",
                light ? "text-paper/80 hover:text-paper" : "text-ink-2 hover:text-ink",
              )}
            >
              {link.title}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            asChild
            size="sm"
            variant={light ? "alternate" : "default"}
            className="hidden sm:inline-flex"
          >
            <a href={nav.cta.url}>{nav.cta.title}</a>
          </Button>

          {/* Mobile toggle */}
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="relative z-10 flex size-11 flex-col items-center justify-center lg:hidden"
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

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="lg:hidden"
          >
            <div className="flex flex-col gap-1 px-[5%] pb-8 pt-2">
              {nav.links.map((link) => (
                <a
                  key={link.title}
                  href={link.url}
                  onClick={() => setOpen(false)}
                  className="border-b border-ink/10 py-4 text-h6 font-medium text-ink"
                >
                  {link.title}
                </a>
              ))}
              <Button asChild className="mt-6 w-full">
                <a href={nav.cta.url} onClick={() => setOpen(false)}>
                  {nav.cta.title}
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
