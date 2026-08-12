import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import PillarSection from "@/components/sections/PillarSection";
import FinalCta from "@/components/sections/FinalCta";
import { SERVICE_PILLARS } from "@/data/services";

export const metadata: Metadata = {
  title: "Services | HR, Accounting & Business Solutions",
  description:
    "Explore D.M's full range of HR consultancy, accounting and business support, and organizational development services for SMEs and growing businesses.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy-950 py-16 sm:py-20">
        <Container>
          <SectionHeading
            light
            eyebrow="Our Services"
            title="Solutions Designed Around Your Business"
            description="From HR systems and talent management to accounting, administration, and organizational development, our services are designed to address the practical needs of your business."
          />

          <div className="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-3">
            {SERVICE_PILLARS.map((pillar) => (
              <a
                key={pillar.id}
                href={`#${pillar.id}`}
                className="rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm font-semibold text-white/90 transition-colors hover:bg-white/10"
              >
                {pillar.shortTitle}
              </a>
            ))}
          </div>
        </Container>
      </section>

      {SERVICE_PILLARS.map((pillar, index) => (
        <PillarSection key={pillar.id} pillar={pillar} index={index} />
      ))}

      <FinalCta location="services_page_final_cta" />
    </>
  );
}
