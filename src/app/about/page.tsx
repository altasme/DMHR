import type { Metadata } from "next";
import { Target, Users2, Sparkles } from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Credentials from "@/components/sections/Credentials";
import FinalCta from "@/components/sections/FinalCta";
import CtaLink from "@/components/CtaLink";

export const metadata: Metadata = {
  title: "About Us | Dominic Mora, Founder",
  description:
    "Learn about D.M Human Resource Management Consultancy, our approach, and founder Dominic Mora's HR and consultancy background.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy-950 py-16 sm:py-20">
        <Container>
          <SectionHeading
            light
            eyebrow="About D.M"
            title="A Practical Business Support Partner"
            description="D.M Human Resource Management Consultancy helps SMEs, startups, and growing businesses put the right people, policies, systems, and processes in place."
          />
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs font-bold tracking-[0.14em] text-brand-600 uppercase">
                What We Do
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                About D.M Human Resource Management Consultancy
              </h2>
              <p className="mt-4 text-base leading-relaxed text-navy-600">
                D.M Human Resource Management Consultancy provides practical HR, accounting,
                administrative, and business development support to businesses that need
                professional expertise without necessarily building a large internal team. We
                were established to give SMEs, startups, and family-owned businesses access to
                the same quality of HR and organizational guidance that larger companies rely on.
              </p>
              <p className="mt-4 text-base leading-relaxed text-navy-600">
                Our approach is consultative and practical: we take the time to understand each
                client&rsquo;s actual business needs, then recommend and help implement the
                specific systems, policies, and processes that fit &mdash; not a generic
                one-size-fits-all package.
              </p>
              <p className="mt-4 text-base leading-relaxed text-navy-600">
                We work with SMEs, startups, growing businesses, family-owned businesses, and
                organizations that either have no internal HR function or need help formalizing,
                auditing, and improving the systems they already have.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <div className="rounded-2xl border border-navy-900/10 bg-navy-50/60 p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600/10 text-brand-700">
                  <Target size={20} />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-navy-900">
                  Our Approach
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">
                  Understand the business first, then recommend practical, right-sized HR and
                  organizational solutions &mdash; not generic templates.
                </p>
              </div>
              <div className="rounded-2xl border border-navy-900/10 bg-navy-50/60 p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600/10 text-brand-700">
                  <Users2 size={20} />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-navy-900">
                  Who We Serve
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">
                  SMEs, startups, growing businesses, family-owned businesses, and organizations
                  requiring outsourced HR, accounting, administrative, or business support.
                </p>
              </div>
              <div className="rounded-2xl border border-navy-900/10 bg-navy-50/60 p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600/10 text-brand-700">
                  <Sparkles size={20} />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-navy-900">
                  Our Philosophy
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">
                  People. Purpose. Performance. &mdash; building better workplaces, empowering
                  people, and driving success.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-navy-50/60 py-20 sm:py-24">
        <Container>
          <div className="mx-auto grid max-w-4xl grid-cols-1 items-start gap-10 sm:grid-cols-[auto_1fr] sm:gap-12">
            {/* TODO(client): replace with Dominic Mora's professional photo once provided. */}
            <div className="mx-auto flex h-40 w-40 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-navy-800 to-brand-600 text-4xl font-bold text-white sm:h-44 sm:w-44">
              DM
            </div>

            <div className="text-center sm:text-left">
              <p className="text-xs font-bold tracking-[0.14em] text-brand-600 uppercase">
                Founder
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                Dominic Mora
              </h2>
              <p className="text-sm font-semibold text-navy-500">Founder / Consultant</p>

              <p className="mt-5 text-base leading-relaxed text-navy-600">
                Dominic brings 7 years of HR experience to every engagement, including 2 years
                as an HR Manager and 4 years of HR consultancy experience working directly with
                businesses and organizations across different industries.
              </p>
              <p className="mt-4 text-base leading-relaxed text-navy-600">
                His background spans HR management, employee relations, recruitment,
                documentation, HR policies and procedures, performance management, and
                organizational systems &mdash; giving him a practical, on-the-ground
                understanding of the challenges growing businesses face.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  "HR Management",
                  "Employee Relations",
                  "HR Consultancy",
                  "Documentation & Policies",
                  "Performance Management",
                  "Organizational Systems",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-navy-900/10 bg-white px-4 py-2 text-center text-xs font-semibold text-navy-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-7">
                <CtaLink href="/contact" event="cta_click" eventParams={{ location: "about_founder" }}>
                  Book a Consultation
                </CtaLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Credentials />

      <FinalCta location="about_page_final_cta" />
    </>
  );
}
