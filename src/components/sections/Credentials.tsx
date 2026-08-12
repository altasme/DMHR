import { BadgeCheck, FileCheck2, ShieldCheck } from "lucide-react";
import Container from "../Container";
import SectionHeading from "../SectionHeading";

const CREDENTIALS = [
  {
    icon: FileCheck2,
    title: "DTI Registered",
    description: "Registered with the Department of Trade and Industry.",
  },
  {
    icon: ShieldCheck,
    title: "BIR Registered",
    description: "Registered with the Bureau of Internal Revenue.",
  },
  {
    icon: BadgeCheck,
    title: "DOLE OSH Certified",
    description: "Certified under DOLE Occupational Safety and Health requirements.",
  },
];

export default function Credentials() {
  return (
    <section className="bg-navy-900 py-20 sm:py-24">
      <Container>
        <SectionHeading
          light
          eyebrow="Credentials"
          title="Professional. Registered. Committed to Quality."
        />

        <div className="mx-auto mt-14 flex max-w-2xl flex-col items-center gap-10 sm:flex-row sm:items-start sm:justify-center sm:gap-16">
          {CREDENTIALS.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex max-w-[220px] flex-col items-center text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-brand-400/30 bg-brand-500/10 text-brand-300 ring-4 ring-brand-500/5">
                <Icon size={30} />
              </div>
              <h3 className="mt-5 font-display text-base font-bold text-white">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-white/60">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
