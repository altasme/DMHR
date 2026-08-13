import Image from "next/image";
import Container from "../Container";
import CtaLink from "../CtaLink";

export default function MeetFounder() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <div className="mx-auto grid max-w-4xl grid-cols-1 items-center gap-10 sm:grid-cols-[auto_1fr] sm:gap-12">
          <Image
            src="/images/dominic-mora.jpg"
            alt="Dominic Mora, Founder and HR Consultant at D.M Human Resource Management Consultancy"
            width={176}
            height={176}
            className="mx-auto h-40 w-40 shrink-0 rounded-full object-cover sm:h-44 sm:w-44"
          />

          <div className="text-center sm:text-left">
            <p className="text-xs font-bold tracking-[0.14em] text-brand-600 uppercase">
              Meet Your HR Consultant
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold text-navy-900 sm:text-3xl">
              Dominic Mora
            </h2>
            <p className="text-sm font-semibold text-navy-500">Founder / Consultant</p>
            <p className="mt-4 text-base leading-relaxed text-navy-600">
              With 7 years of HR experience, including 2 years as an HR Manager and 4 years of
              HR consultancy experience, Dominic Mora provides practical HR and organizational
              solutions designed around the actual needs of each client.
            </p>
            <p className="mt-3 text-base leading-relaxed text-navy-600">
              His experience includes HR management, employee relations, business development,
              documentation, policies, performance management, and organizational systems.
            </p>
            <div className="mt-6">
              <CtaLink
                href="/about"
                variant="secondary"
                event="cta_click"
                eventParams={{ location: "meet_founder" }}
              >
                Learn More About D.M
              </CtaLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
