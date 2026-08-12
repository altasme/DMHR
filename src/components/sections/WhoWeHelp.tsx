import {
  Building2,
  Rocket,
  Search,
  TrendingUp,
  UserX,
  Users,
} from "lucide-react";
import Container from "../Container";
import SectionHeading from "../SectionHeading";

const AUDIENCES = [
  {
    icon: Rocket,
    title: "Startups",
    description: "Establish the HR and operational foundations needed to grow.",
  },
  {
    icon: Building2,
    title: "Small & Medium Businesses",
    description: "Get professional support without the cost of building every function internally.",
  },
  {
    icon: TrendingUp,
    title: "Growing Companies",
    description: "Improve systems, policies, employee management, and organizational processes.",
  },
  {
    icon: Users,
    title: "Family-Owned Businesses",
    description: "Create clearer structures, responsibilities, and documented processes.",
  },
  {
    icon: UserX,
    title: "Businesses Without an HR Department",
    description: "Access professional HR expertise when you need it.",
  },
  {
    icon: Search,
    title: "Businesses Improving Existing Systems",
    description: "Audit, improve, and formalize existing HR and organizational processes.",
  },
];

export default function WhoWeHelp() {
  return (
    <section className="bg-navy-50/60 py-20 sm:py-24">
      <Container>
        <SectionHeading eyebrow="Who We Help" title="Built for Businesses That Are Growing" />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {AUDIENCES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-navy-900/10 bg-white p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-white">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-navy-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
