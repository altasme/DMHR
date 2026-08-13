import Image from "next/image";
import Container from "../Container";
import CtaLink from "../CtaLink";
import Reveal from "../Reveal";

const STATS = [
  { value: "7+", label: "Years HR Experience" },
  { value: "4+", label: "Years HR Consultancy" },
  { value: "100+", label: "Clients & Businesses Assisted" },
  { value: "2", label: "Years as HR Manager" },
];

export default function FounderSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div
              aria-hidden
              className="absolute -top-6 -left-6 h-full w-full rounded-[32px] bg-navy-50"
            />
            <div
              aria-hidden
              className="absolute -right-6 -bottom-6 h-32 w-32 rounded-full border border-brand-200"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] shadow-xl shadow-navy-900/10">
              <Image
                src="/images/dominic-mora.jpg"
                alt="Dominic Mora, Founder and HR Consultant at D.M Human Resource Management Consultancy"
                fill
                sizes="(min-width: 1024px) 480px, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={150}>
            <p className="mb-3 text-xs font-semibold tracking-[0.14em] text-brand-600 uppercase">
              The Consultant
            </p>
            <h2 className="font-display text-4xl leading-[1.15] font-bold tracking-tight text-navy-900 text-balance sm:text-5xl">
              Practical expertise.{" "}
              <span className="text-brand-600">Built around your business.</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-600 sm:text-lg">
              With 7 years of HR experience, including 2 years as an HR Manager and 4 years of
              HR consultancy experience, Dominic Mora provides practical HR and organizational
              solutions designed around the actual needs of each client — not generic
              templates, and sized for businesses that don&rsquo;t need a full internal HR
              department.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-navy-600 sm:text-lg">
              His experience includes HR management, employee relations, business development,
              documentation, policies, performance management, and organizational systems.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-navy-900/10 pt-8 sm:grid-cols-4">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl font-bold text-navy-900">{stat.value}</p>
                  <p className="mt-1 text-xs leading-snug text-navy-600 sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-9">
              <CtaLink
                href="/about"
                variant="secondary"
                event="cta_click"
                eventParams={{ location: "founder_section" }}
                showArrow
              >
                Learn More About D.M
              </CtaLink>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
