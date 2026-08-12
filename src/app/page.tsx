import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ProblemSection from "@/components/sections/ProblemSection";
import ServicesOverview from "@/components/sections/ServicesOverview";
import WhyDM from "@/components/sections/WhyDM";
import WhoWeHelp from "@/components/sections/WhoWeHelp";
import MeetFounder from "@/components/sections/MeetFounder";
import Credentials from "@/components/sections/Credentials";
import HowItWorks from "@/components/sections/HowItWorks";
import FinalCta from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "HR & Business Solutions for SMEs in Calamba, Laguna",
  description:
    "Professional HR, business, accounting, and organizational solutions for SMEs and growing businesses in Calamba, Laguna and beyond.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <ServicesOverview />
      <WhyDM />
      <WhoWeHelp />
      <MeetFounder />
      <Credentials />
      <HowItWorks />
      <FinalCta location="homepage_final_cta" />
    </>
  );
}
