import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { PageHero } from "@/components/site/page-hero";
import { JoinMovement } from "@/components/site/join-movement";
import { ClosingCta } from "@/components/site/closing-cta";
import { Footer } from "@/components/site/footer";
import { Button } from "@/components/ui/button";
import { involve } from "@/lib/content";

export const metadata: Metadata = {
  title: "Get involved",
  description:
    "Stand at the frontline with PFHI — donate to fund community programs, volunteer your skills, or partner with us to co-create scalable, evidence-based health solutions.",
};

export default function GetInvolvedPage() {
  return (
    <>
      <Navbar overDark />
      <main className="w-full max-w-full overflow-x-clip">
        <PageHero
          image="/images/hero-home.webp"
          imageAlt="PFHI volunteers sharing time with a community"
          kicker="Get involved"
          title="Stand at the frontline with us."
          subtitle="Communities are ready. Change moves at the speed of the people willing to back it — and there’s a place here for you."
        />

        {/* The three paths */}
        <div>
          {involve.options.map((option) => (
            <section
              key={option.no}
              id={option.title.toLowerCase()}
              className="scroll-mt-24 border-t border-ink/10 py-20 md:py-28"
            >
              <div className="mx-auto max-w-container px-[5%]">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
                  <div>
                    <span className="font-display text-h5 font-semibold tracking-tight text-accent">
                      {option.no}
                    </span>
                    <h2 data-reveal className="mt-3 text-h2 font-semibold text-balance text-ink">
                      {option.title}
                    </h2>
                  </div>
                  <div>
                    <p data-reveal className="max-w-xl text-large text-pretty text-ink-2">
                      {option.detail}
                    </p>
                    <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                      {option.points.map((point) => (
                        <li
                          key={point}
                          data-reveal
                          className="flex items-start gap-3 border-t border-ink/12 pt-3 text-regular text-ink-2"
                        >
                          <span
                            className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                            aria-hidden
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <Button asChild size="lg" className="mt-10">
                      <a href={option.cta.url}>{option.cta.title}</a>
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        <JoinMovement />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
