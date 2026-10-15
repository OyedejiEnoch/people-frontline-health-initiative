import type { Metadata } from "next";
import { Navbar } from "@/components/site/navbar";
import { AboutHero } from "@/components/site/about-hero";
import { ManifestoScroll } from "@/components/site/manifesto-scroll";
import { AboutIndex } from "@/components/site/about-index";
import { StackSpread } from "@/components/site/stack-spread";
import { ClosingCta } from "@/components/site/closing-cta";
import { Footer } from "@/components/site/footer";
import { values } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "PFHI was created to bridge healthcare inequalities — ensuring vulnerable populations have access to quality care, accurate information, and sustainable public health interventions.",
};

const story = [
  "PFHI was created to bridge healthcare inequalities — to ensure that vulnerable populations have access to quality care, accurate health information, and sustainable public health interventions, regardless of where they live or their socioeconomic status.",
  "We don’t just implement projects. We combine grassroots community engagement with research, technology, and strategic partnerships to deliver practical, scalable, evidence-based health solutions — co-created with the communities they serve.",
];

const vision = [
  {
    horizon: "In five years",
    text: "PFHI is recognized nationally for delivering innovative community health programs that measurably improve lives.",
  },
  {
    horizon: "In ten years",
    text: "PFHI is a leading African public health organization — influencing policy and improving the lives of millions.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar overDark />
      <main className="w-full max-w-full overflow-x-clip">
        <AboutHero />
        <ManifestoScroll />
        <AboutIndex />

        {/* Who we are */}
        <section id="story" className="mx-auto max-w-container px-[5%] py-24 md:py-32">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <p
                data-reveal
                className="mb-6 flex items-center gap-3 text-small font-medium uppercase tracking-[0.2em] text-muted"
              >
                <span className="h-px w-8 bg-ink/25" />
                Who we are
              </p>
              <h2 data-reveal className="display-2 text-balance text-ink">
                We place people at the frontline of healthcare.
              </h2>
            </div>
            <div className="flex flex-col gap-6">
              {story.map((para) => (
                <p key={para} data-reveal className="text-large text-pretty text-ink-2">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section id="values" className="bg-paper-2 py-24 md:py-32">
          <div className="mx-auto max-w-container px-[5%]">
            <div className="mb-14 max-w-2xl md:mb-20">
              <p
                data-reveal
                className="mb-6 flex items-center gap-3 text-small font-medium uppercase tracking-[0.2em] text-muted"
              >
                <span className="h-px w-8 bg-ink/25" />
                What we stand for
              </p>
              <h2 data-reveal className="display-2 text-balance text-ink">
                The values behind every decision.
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-card border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((value, i) => (
                <div
                  key={value}
                  data-reveal
                  className="flex items-baseline gap-4 bg-paper p-6 md:p-8"
                >
                  <span className="font-display text-tiny font-semibold text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-h6 font-semibold text-ink">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision */}
        <section id="vision" className="mx-auto max-w-container px-[5%] py-24 md:py-32">
          <p
            data-reveal
            className="mb-12 flex items-center gap-3 text-small font-medium uppercase tracking-[0.2em] text-muted md:mb-16"
          >
            <span className="h-px w-8 bg-ink/25" />
            Where we’re going
          </p>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-card border border-ink/10 bg-ink/10 md:grid-cols-2">
            {vision.map((v) => (
              <div key={v.horizon} data-reveal className="bg-paper p-8 md:p-12 lg:p-16">
                <p className="mb-5 text-small font-medium uppercase tracking-[0.15em] text-muted">
                  {v.horizon}
                </p>
                <p className="text-h4 font-semibold text-balance text-ink">{v.text}</p>
              </div>
            ))}
          </div>
        </section>

        <StackSpread />

        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
