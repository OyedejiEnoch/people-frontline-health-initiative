import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { ValuesMarquee } from "@/components/site/values-marquee";
import { Mission } from "@/components/site/mission";
import { Programs } from "@/components/site/programs";
import { Approach } from "@/components/site/approach";
import { StatementBand } from "@/components/site/statement-band";
import { Impact } from "@/components/site/impact";
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
      <main className="w-full max-w-full overflow-x-clip">
        <Hero />
        <ValuesMarquee />
        <Mission />
        <Programs />
        <Approach />
        <StatementBand />
        <Impact />
        <StoriesScroll heading={impact.storiesHeading} stories={impact.stories} />
        <Involve />
        <ClosingCta />
        <JoinMovement />
      </main>
      <Footer />
    </>
  );
}
