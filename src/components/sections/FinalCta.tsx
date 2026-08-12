import { ArrowRight } from "lucide-react";
import Container from "../Container";
import CtaLink from "../CtaLink";
import { CONTACT } from "@/lib/constants";

export default function FinalCta({ location = "final_cta" }: { location?: string }) {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_110%,rgba(79,178,232,0.2),transparent)]"
      />
      <Container className="relative text-center">
        <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl">
          Ready to Build a Stronger Business?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
          Let&rsquo;s discuss how D.M Human Resource Management Consultancy can support your
          people, processes, and business operations.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CtaLink
            href="/contact"
            size="lg"
            icon={<ArrowRight size={18} />}
            event="cta_click"
            eventParams={{ location }}
            className="w-full sm:w-auto"
          >
            Book a Consultation
          </CtaLink>
          <CtaLink
            href={CONTACT.whatsappHref}
            variant="whatsapp"
            size="lg"
            event="whatsapp_click"
            eventParams={{ location }}
            className="w-full sm:w-auto"
          >
            Message Us on WhatsApp
          </CtaLink>
        </div>
      </Container>
    </section>
  );
}
