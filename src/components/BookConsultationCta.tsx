import { MessageCircle } from "lucide-react";
import CtaLink from "./CtaLink";
import { CONTACT } from "@/lib/constants";

type Props = {
  location: string;
  variant?: "primary" | "secondary" | "outline-light";
  size?: "sm" | "md" | "lg";
  className?: string;
  showIcon?: boolean;
};

export default function BookConsultationCta({
  location,
  variant = "primary",
  size = "md",
  className = "",
  showIcon = true,
}: Props) {
  return (
    <CtaLink
      href={CONTACT.whatsappHref}
      variant={variant}
      size={size}
      className={className}
      event="whatsapp_click"
      eventParams={{ location }}
      icon={showIcon ? <MessageCircle size={18} /> : undefined}
    >
      Book a Consultation
    </CtaLink>
  );
}
