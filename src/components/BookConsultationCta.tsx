import CtaLink from "./CtaLink";
import { CONTACT } from "@/lib/constants";

type Props = {
  location: string;
  variant?: "primary" | "secondary" | "outline-light";
  size?: "sm" | "md" | "lg";
  className?: string;
};

export default function BookConsultationCta({
  location,
  variant = "primary",
  size = "md",
  className = "",
}: Props) {
  return (
    <CtaLink
      href={CONTACT.whatsappHref}
      variant={variant}
      size={size}
      className={className}
      event="whatsapp_click"
      eventParams={{ location }}
      showArrow
    >
      Book a Consultation
    </CtaLink>
  );
}
