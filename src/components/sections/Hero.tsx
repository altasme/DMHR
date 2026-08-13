import Image from "next/image";
import Container from "../Container";
import CtaLink from "../CtaLink";
import BookConsultationCta from "../BookConsultationCta";
import Reveal from "../Reveal";
import { TRUST_INDICATORS } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Extremely subtle background: dot grid + soft light-blue gradient + one quiet curved shape */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(23,105,209,0.16) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 65% 20%, black, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 65% 20%, black, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 h-[32rem] w-[32rem] rounded-full bg-brand-100/60 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 -left-40 h-80 w-80 rounded-full border border-brand-200/60"
      />

      <Container className="relative py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <Reveal>
            <p className="mb-5 inline-flex items-center rounded-full border border-navy-900/10 bg-white px-4 py-1.5 text-xs font-semibold tracking-wide text-brand-600 uppercase shadow-sm shadow-navy-900/[0.03]">
              HR, Business &amp; Organizational Solutions
            </p>
            <h1 className="font-display text-[42px] leading-[1.08] font-bold tracking-tight text-navy-900 text-balance sm:text-6xl lg:text-[68px]">
              Helping businesses build{" "}
              <span className="text-brand-600">better people</span>,{" "}
              <span className="text-brand-600">better systems</span>, and{" "}
              <span className="text-brand-600">better organizations</span>.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-600 sm:text-lg">
              D.M Human Resource Management Consultancy provides practical HR, business
              development, accounting, and organizational solutions tailored to the needs of
              SMEs and growing businesses.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <BookConsultationCta location="hero" size="lg" className="w-full sm:w-auto" />
              <CtaLink
                href="/services"
                variant="secondary"
                size="lg"
                event="cta_click"
                eventParams={{ location: "hero_secondary" }}
                showArrow
                className="w-full sm:w-auto"
              >
                Explore Our Services
              </CtaLink>
            </div>
          </Reveal>

          <Reveal delay={150} className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div
              aria-hidden
              className="absolute -top-6 -right-6 h-full w-full rounded-[32px] bg-brand-100/70"
            />
            <div
              aria-hidden
              className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-navy-50"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] shadow-xl shadow-navy-900/10">
              <Image
                src="/images/dominic-mora.jpg"
                alt="Dominic Mora, Founder and HR Consultant at D.M Human Resource Management Consultancy"
                fill
                priority
                sizes="(min-width: 1024px) 480px, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <Reveal
          delay={250}
          className="mt-16 grid grid-cols-2 gap-y-8 border-t border-navy-900/10 pt-10 sm:mt-20 sm:grid-cols-4 sm:pt-12"
        >
          {TRUST_INDICATORS.map((item) => (
            <div key={item.label} className="text-center sm:text-left">
              <p className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                {item.value}
              </p>
              <p className="mt-1 text-xs leading-snug text-navy-600 sm:text-sm">
                {item.label}
              </p>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
