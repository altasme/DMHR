import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone, Smartphone } from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact & Book a Consultation",
  description:
    "Get in touch with D.M Human Resource Management Consultancy in Calamba, Laguna. Book a consultation via phone, WhatsApp, Messenger, or our inquiry form.",
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
            light
            eyebrow="Get In Touch"
            title="Let's Talk About Your Business"
            description="Book a consultation and tell us what you need help with. We'll get back to you to discuss the right HR, accounting, or business support solution."
          />
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-2">
              <h2 className="font-display text-xl font-bold text-navy-900">
                Contact Information
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">
                D.M Human Resource Management Consultancy
              </p>

              <ul className="mt-6 flex flex-col gap-4">
                {CONTACT_OPTIONS.map(({ icon: Icon, label, value, href }) => (
                  <li
                    key={label}
                    className="flex items-start gap-3 rounded-xl border border-navy-900/10 p-4"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-600/10 text-brand-700">
                      <Icon size={18} />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold tracking-wide text-navy-500 uppercase">
                        {label}
                      </span>
                      {href ? (
                        <a href={href} className="text-sm font-semibold text-navy-900 hover:text-brand-700">
                          {value}
                        </a>
                      ) : (
                        <span className="text-sm font-semibold text-navy-900">{value}</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1fbd5a]"
              >
                <MessageCircle size={18} />
                Message Us on WhatsApp
              </a>
            </div>

            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-navy-900/10 bg-navy-50/40 p-6 sm:p-8">
                <h2 className="font-display text-xl font-bold text-navy-900">
                  Request a Consultation
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">
                  Fill out the short form below and we&rsquo;ll reach out to discuss your needs.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
