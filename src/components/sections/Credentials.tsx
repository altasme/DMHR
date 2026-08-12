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

        <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-3">
          {CREDENTIALS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/20 text-brand-300">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
