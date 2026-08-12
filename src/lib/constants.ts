export const SITE_NAME = "D.M Human Resource Management Consultancy";
export const SITE_SHORT_NAME = "D.M HR Consultancy";
export const SITE_URL = "https://www.dmhrconsultancy.com";

export const TAGLINE =
  "Helping businesses build better people, better systems, and better organizations.";

export const CONTACT = {
  telephoneDisplay: "(049) 560-8835",
  telephoneHref: "tel:+63495608835",
  mobileDisplay: "0924 574 8959",
  mobileHref: "tel:+639245748959",
  whatsappNumber: "639245748959",
  whatsappHref:
    "https://wa.me/639245748959?text=" +
    encodeURIComponent(
      "Hi D.M Human Resource Management Consultancy, I'd like to book a consultation."
    ),
  email: "dmhrmanagementconsultancy@gmail.com",
  emailHref: "mailto:dmhrmanagementconsultancy@gmail.com",
  addressLine: "Calamba, Laguna, Philippines",
  // TODO(client): provide Facebook Messenger username/URL to enable this link.
  messengerHref: "",
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const FOOTER_LEGAL_LINKS = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Website Disclaimer" },
];

// TODO(client): confirm/replace with live social URLs.
export const SOCIAL_LINKS = {
  facebook: "",
  instagram: "",
  linkedin: "",
};

export const TRUST_INDICATORS = [
  { value: "7+", label: "Years HR Experience" },
  { value: "100+", label: "Clients & Businesses Assisted" },
  { value: "DTI & BIR", label: "Registered Business" },
  { value: "DOLE OSH", label: "Certified" },
];

export const CONSULTATION_SERVICE_OPTIONS = [
  "HR Consultancy",
  "HR Systems",
  "Recruitment & Talent",
  "Employee Management",
  "HR Policies & Documentation",
  "Performance Management",
  "Accounting / Bookkeeping",
  "Payroll",
  "Business Development",
  "Organizational Development",
  "Other",
];

export const PREFERRED_CONTACT_METHODS = [
  "Messenger",
  "WhatsApp",
  "Phone",
  "Email",
];
