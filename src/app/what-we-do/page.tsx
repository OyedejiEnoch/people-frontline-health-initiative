import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { PageHero } from "@/components/site/page-hero";
import { Approach } from "@/components/site/approach";
import { ClosingCta } from "@/components/site/closing-cta";
import { Footer } from "@/components/site/footer";
import { programs } from "@/lib/content";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "What we do",
  description:
    "PFHI's work spans six connected areas — community health & outreach, maternal & child health, mental health, research & advocacy, digital health, and capacity building — grounded in communities and strengthened by evidence.",
};

const slug = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export default function WhatWeDoPage() {
  return (
    <>
      <Navbar overDark />
      <main id="main-content" className="w-full max-w-full overflow-x-clip">
        <PageHero
          image="/images/hero-outreach.jpg"
          imageAlt="A PFHI health worker delivering care at a community outreach"
          kicker="What we do"
          title="Care that reaches the last mile."
          subtitle="Six connected areas of work — grounded in communities, strengthened by research, and built to last."
        />

        {/* Overview */}
        <section className="mx-auto max-w-container px-[5%] py-20 md:py-28">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
            <p
              data-reveal
              className="flex items-center gap-3 text-small font-medium uppercase tracking-[0.2em] text-muted"
            >
              <span className="h-px w-8 bg-ink/25" />
              Our programs
            </p>
            <div>
              <h2 data-reveal className="display-2 text-balance text-ink">
                We don’t run isolated projects. We build a system of care.
              </h2>
              <p data-reveal className="mt-6 max-w-2xl text-large text-pretty text-ink-2">
                Each area of our work reinforces the others — outreach surfaces need, research
                sharpens the response, technology extends the reach, and partnerships make it last.
                Together they close the gap between people and the care they deserve.
              </p>
            </div>
          </div>
        </section>

        {/* Program detail sections */}
        <div>
          {programs.items.map((item, i) => {
            const reversed = i % 2 === 1;
            return (
              <section
                key={item.no}
                id={slug(item.title)}
                className="scroll-mt-24 border-t border-ink/10 py-20 md:py-28"
              >
                <div className="mx-auto max-w-container px-[5%]">
                  <div
                    className={cn(
                      "grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20",
                      reversed && "lg:[direction:rtl]",
                    )}
                  >
                    {/* Image */}
                    <div className="lg:[direction:ltr]">
                      <div
                        data-reveal-mask
                        className="relative aspect-[4/3] overflow-hidden rounded-card"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={item.image} alt="" className="size-full object-cover" />
                      </div>
                    </div>

                    {/* Text */}
                    <div className="lg:[direction:ltr]">
                      <span className="font-display text-h5 font-semibold tracking-tight text-accent">
                        {item.no}
                      </span>
                      <h3 data-reveal className="mt-3 text-h3 font-semibold text-balance text-ink">
                        {item.title}
                      </h3>
                      <p data-reveal className="mt-5 max-w-md text-medium text-pretty text-ink-2">
                        {item.text}
                      </p>
                      <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                        {item.activities.map((activity) => (
                          <li
                            key={activity}
                            data-reveal
                            className="flex items-start gap-3 border-t border-ink/12 pt-3 text-regular text-ink-2"
                          >
                            <span
                              className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                              aria-hidden
                            />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        <Approach />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
