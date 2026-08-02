import { Agents } from "@/components/sections/Agents";
import { Community } from "@/components/sections/Community";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Problem } from "@/components/sections/Problem";
import { Roadmap } from "@/components/sections/Roadmap";
import { TokenUtility } from "@/components/sections/TokenUtility";
import { WhyNeura } from "@/components/sections/WhyNeura";
import { Nav } from "@/components/nav/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Agents />
        <HowItWorks />
        <TokenUtility />
        <WhyNeura />
        <Roadmap />
        <Community />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
