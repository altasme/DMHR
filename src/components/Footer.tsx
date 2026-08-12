import { Mail, MapPin, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "./icons/SocialIcons";
import Container from "./Container";
import Logo from "./Logo";
import CtaLink from "./CtaLink";
import {
  CONTACT,
  FOOTER_LEGAL_LINKS,
  NAV_LINKS,
  SOCIAL_LINKS,
  TAGLINE,
} from "@/lib/constants";

export default function Footer() {
  const socials = [
    { href: SOCIAL_LINKS.facebook, label: "Facebook", Icon: FacebookIcon },
    { href: SOCIAL_LINKS.instagram, label: "Instagram", Icon: InstagramIcon },
    { href: SOCIAL_LINKS.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  ].filter((s) => s.href);

  return (
    <footer className="bg-navy-950 text-navy-100">
      <Container className="py-14 sm:py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo light />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">{TAGLINE}</p>
            <div className="mt-6">
              <CtaLink href="/contact" event="cta_click" eventParams={{ location: "footer" }}>
                Book a Consultation
              </CtaLink>
            </div>
            {socials.length > 0 && (
              <div className="mt-8 flex gap-3">
                {socials.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white/30 hover:text-white"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            )}
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white/50 uppercase">
              Site
            </h3>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/80 hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
              {FOOTER_LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/80 hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white/50 uppercase">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2.5">
                <Phone size={16} className="mt-0.5 shrink-0 text-brand-300" />
                <span className="flex flex-col">
                  <a href={CONTACT.telephoneHref} className="hover:text-white">
                    {CONTACT.telephoneDisplay}
                  </a>
                  <a href={CONTACT.mobileHref} className="hover:text-white">
                    {CONTACT.mobileDisplay}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={16} className="mt-0.5 shrink-0 text-brand-300" />
                <a href={CONTACT.emailHref} className="hover:text-white break-all">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-brand-300" />
                <span>{CONTACT.addressLine}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} D.M Human Resource Management Consultancy. All
            rights reserved.
          </p>
          <p>Calamba, Laguna, Philippines</p>
        </div>
      </Container>
    </footer>
  );
}
