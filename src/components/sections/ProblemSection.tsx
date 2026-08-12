import {
  ClipboardList,
  FileWarning,
  UsersRound,
  Workflow,
} from "lucide-react";
import Container from "../Container";
import SectionHeading from "../SectionHeading";
import CtaLink from "../CtaLink";

const PROBLEMS = [
  {
    icon: UsersRound,
    title: "No Internal HR Team",
    description:
      "You need professional HR support without building a full internal department.",
  },
  {
    icon: FileWarning,
    title: "Unstructured HR Processes",
    description:
      "Your policies, employee records, contracts, and procedures need to be organized.",
  },
  {
    icon: ClipboardList,
    title: "Growing Workforce",
    description:
      "More employees require better onboarding, performance management, and employee relations processes.",
  },
  {
    icon: Workflow,
    title: "Inconsistent Business Processes",
    description:
      "Your business needs documented procedures, policies, and systems that people can follow.",
  },
];

export default function ProblemSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          title="As Your Business Grows, Your Systems Need to Grow With It."
          description="Managing people, policies, documentation, performance, payroll, and business processes can become increasingly complex as your organization grows."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEMS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-navy-900/10 bg-navy-50/50 p-6 transition-colors hover:border-brand-300"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600/10 text-brand-700">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-navy-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">{description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-brand-200 bg-brand-50 p-6 text-center sm:p-8">
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-navy-800 sm:text-lg">
            D.M Human Resource Management Consultancy helps businesses establish practical
            systems and processes that create greater structure, clarity, and consistency.
          </p>
          <div className="mt-6">
            <CtaLink
              href="/contact"
              event="cta_click"
              eventParams={{ location: "problem_section" }}
            >
              Talk to an HR Consultant
            </CtaLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
