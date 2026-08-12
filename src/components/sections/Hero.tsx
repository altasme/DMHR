import { ArrowRight, MessageCircle } from "lucide-react";
import Container from "../Container";
import CtaLink from "../CtaLink";
import { TRUST_INDICATORS } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(79,178,232,0.25),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-700/20 blur-3xl"
      />

      <Container className="relative py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-brand-200 uppercase">
            HR, Business &amp; Organizational Solutions
          </p>
          <h1 className="font-display text-4xl leading-[1.1] font-extrabold tracking-tight text-white text-balance sm:text-5xl lg:text-6xl">
            Helping Businesses Build Better People, Better Systems, and Better
            Organizations.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            D.M Human Resource Management Consultancy provides practical HR, business
            development, accounting, and organizational solutions tailored to the needs of
            SMEs and growing businesses.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CtaLink
              href="/contact"
              size="lg"
              event="cta_click"
              eventParams={{ location: "hero" }}
              icon={<ArrowRight size={18} />}
              className="w-full sm:w-auto"
            >
              Book a Consultation
            </CtaLink>
            <CtaLink
              href="/services"
              variant="outline-light"
              size="lg"
              event="cta_click"
              eventParams={{ location: "hero_secondary" }}
              icon={<MessageCircle size={18} />}
              className="w-full sm:w-auto"
            >
              Explore Our Services
            </CtaLink>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-4 sm:mt-20 sm:grid-cols-4 sm:gap-6">
          {TRUST_INDICATORS.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-5 text-center backdrop-blur-sm"
            >
              <p className="font-display text-xl font-bold text-white sm:text-2xl">
                {item.value}
              </p>
              <p className="mt-1 text-xs leading-snug text-white/60 sm:text-sm">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
