import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { ValuesMarquee } from "@/components/site/values-marquee";
import { Mission } from "@/components/site/mission";
import { FieldCollage } from "@/components/site/field-collage";
import { Programs } from "@/components/site/programs";
import { CarePath } from "@/components/site/care-path";
import { Approach } from "@/components/site/approach";
import { StatementBand } from "@/components/site/statement-band";
// import { Impact } from "@/components/site/impact"; // hidden until there are real results
import { JoinMovement } from "@/components/site/join-movement";
import { StoriesScroll } from "@/components/site/stories-scroll";
import { Involve } from "@/components/site/involve";
import { ClosingCta } from "@/components/site/closing-cta";
import { Footer } from "@/components/site/footer";
import { impact } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="w-full max-w-full overflow-x-clip">
        <Hero />
        <ValuesMarquee />
        <Mission />
        <FieldCollage />
        <Programs />
        <CarePath />
        <Approach />
        <StatementBand />
        {/* <Impact /> hidden — no measurable impact yet (just starting) */}
        <StoriesScroll heading={impact.storiesHeading} stories={impact.stories} />
        <Involve />
        <ClosingCta />
        <JoinMovement />
      </main>
      <Footer />
    </>
  );
}
