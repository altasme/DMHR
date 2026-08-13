import { Building2, Calculator, Check, UsersRound } from "lucide-react";
import Container from "../Container";
import SectionHeading from "../SectionHeading";
import CtaLink from "../CtaLink";
import { SERVICE_PILLARS } from "@/data/services";

const PILLAR_ICONS = {
  hr: UsersRound,
  accounting: Calculator,
  "business-development": Building2,
};

const HIGHLIGHTS: Record<string, string[]> = {
  hr: [
    "HR Consultancy",
    "Employment Contracts",
    "Employee Handbooks",
    "Performance Management",
    "Recruitment & Onboarding",
  ],
  accounting: [
    "Bookkeeping",
    "Payroll Support",
    "Income & Expense Monitoring",
    "BIR Filing Assistance",
  ],
  "business-development": [
    "SOP Development",
    "Company Policy Development",
    "Organizational Development",
    "Management Consultation",
  ],
};

export default function ServicesOverview() {
  return (
    <section id="services-overview" className="bg-navy-50 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="Solutions Designed Around Your Business"
          description="From HR systems and talent management to accounting, administration, and organizational development, our services are designed to address the practical needs of your business."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {SERVICE_PILLARS.map((pillar) => {
            const Icon = PILLAR_ICONS[pillar.id as keyof typeof PILLAR_ICONS];
            return (
              <div
                key={pillar.id}
                className="flex flex-col rounded-2xl border border-navy-900/10 bg-white p-7 shadow-sm shadow-navy-900/[0.02] transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-white">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold text-navy-900">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm font-semibold text-brand-600">{pillar.tagline}</p>
                <p className="mt-3 text-sm leading-relaxed text-navy-600">
                  {pillar.description}
                </p>

                <ul className="mt-5 flex flex-1 flex-col gap-2.5">
                  {HIGHLIGHTS[pillar.id]?.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-navy-700">
                      <Check size={16} className="mt-0.5 shrink-0 text-brand-600" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-7">
                  <CtaLink
                    href={`/services#${pillar.id}`}
                    variant="secondary"
                    className="w-full"
                    event="cta_click"
                    eventParams={{ location: "services_overview", pillar: pillar.id }}
                    showArrow
                  >
                    {pillar.ctaLabel}
                  </CtaLink>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
