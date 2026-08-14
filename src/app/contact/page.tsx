import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone, Smartphone } from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import CtaLink from "@/components/CtaLink";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact & Book a Consultation",
  description:
    "Get in touch with D.M Human Resource Management Consultancy in Calamba, Laguna via phone, WhatsApp, Messenger, or email.",
  alternates: { canonical: "/contact" },
};

const CONTACT_OPTIONS = [
  {
    icon: Phone,
    label: "Telephone",
    value: CONTACT.telephoneDisplay,
    href: CONTACT.telephoneHref,
  },
  {
    icon: Smartphone,
    label: "Mobile / WhatsApp",
    value: CONTACT.mobileDisplay,
    href: CONTACT.mobileHref,
  },
  {
    icon: Mail,
    label: "Email",
    value: CONTACT.email,
    href: CONTACT.emailHref,
  },
  {
    icon: MapPin,
    label: "Location",
    value: CONTACT.addressLine,
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy-950 py-16 sm:py-20">
        <Container>
          <SectionHeading
            level="h1"
            light
            eyebrow="Get In Touch"
            title="Let's Talk About Your Business"
            description="Reach out through whichever channel is easiest for you, and let's discuss the right HR, accounting, or business support solution."
          />
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-4xl">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <CtaLink
              href={CONTACT.whatsappHref}
              variant="whatsapp"
              size="lg"
              icon={<MessageCircle size={18} />}
              event="whatsapp_click"
              eventParams={{ location: "contact_page" }}
              className="w-full"
            >
              Message Us on WhatsApp
            </CtaLink>
            {CONTACT.messengerHref && (
              <CtaLink
                href={CONTACT.messengerHref}
                variant="secondary"
                size="lg"
                icon={<MessageCircle size={18} />}
                event="messenger_click"
                eventParams={{ location: "contact_page" }}
                className="w-full"
              >
                Message Us on Messenger
              </CtaLink>
            )}
            <CtaLink
              href={CONTACT.mobileHref}
              variant="secondary"
              size="lg"
              icon={<Phone size={18} />}
              event="phone_click"
              eventParams={{ location: "contact_page" }}
              className="w-full"
            >
              Call {CONTACT.mobileDisplay}
            </CtaLink>
            <CtaLink
              href={CONTACT.emailHref}
              variant="secondary"
              size="lg"
              icon={<Mail size={18} />}
              className="w-full"
            >
              Email Us
            </CtaLink>
          </div>

          <div className="mt-10 rounded-2xl border border-navy-900/10 bg-navy-50 p-6 sm:p-8">
            <h2 className="font-display text-lg font-bold text-navy-900">
              D.M Human Resource Management Consultancy
            </h2>
            <ul className="mt-5 flex flex-col gap-4">
              {CONTACT_OPTIONS.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-600/10 text-brand-700">
                    <Icon size={18} />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold tracking-wide text-navy-500 uppercase">
                      {label}
                    </span>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm font-semibold break-all text-navy-900 hover:text-brand-700"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="text-sm font-semibold text-navy-900">{value}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
