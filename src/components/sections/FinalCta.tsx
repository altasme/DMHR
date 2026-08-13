import Container from "../Container";
import CtaLink from "../CtaLink";
import { CONTACT } from "@/lib/constants";

export default function FinalCta({ location = "final_cta" }: { location?: string }) {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_110%,rgba(61,139,232,0.18),transparent)]"
      />
      <Container className="relative text-center">
        <h2 className="mx-auto max-w-2xl font-display text-4xl leading-[1.15] font-bold tracking-tight text-white text-balance sm:text-5xl">
          Let&rsquo;s build a stronger business from the inside out.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
          Let&rsquo;s discuss how D.M Human Resource Management Consultancy can support your
          people, processes, and business operations.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CtaLink
            href="/contact"
            variant="outline-light"
            size="lg"
            showArrow
            event="cta_click"
            eventParams={{ location }}
            className="w-full sm:w-auto"
          >
            See Contact Options
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
