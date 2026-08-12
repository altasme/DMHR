import {
  Briefcase,
  Building,
  ClipboardCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import Container from "../Container";
import SectionHeading from "../SectionHeading";

const DIFFERENTIATORS = [
  {
    icon: Briefcase,
    title: "7+ Years of HR Experience",
    description:
      "Professional experience across HR management, employee relations, documentation, policies, performance management, and organizational systems.",
  },
  {
    icon: ClipboardCheck,
    title: "4+ Years of HR Consultancy Experience",
    description:
      "Experience providing practical HR solutions to businesses and organizations.",
  },
  {
    icon: Building,
    title: "2 Years as an HR Manager",
    description: "Management experience supporting people and organizational functions.",
  },
  {
    icon: Users,
    title: "100+ Clients & Businesses Assisted",
    description: "Demonstrates practical experience working with different business needs.",
  },
  {
    icon: Sparkles,
    title: "Customized Solutions",
    description: "Solutions are developed according to the client's actual business requirements.",
  },
  {
    icon: Target,
    title: "SME-Focused",
    description:
      "Designed to support businesses that need professional expertise without necessarily maintaining large internal teams.",
  },
];

export default function WhyDM() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading eyebrow="Why D.M" title="Practical Expertise for Real Business Needs" />

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {DIFFERENTIATORS.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-600/10 text-brand-700">
                <Icon size={20} />
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-navy-900">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-navy-600">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
