import { Building2, Calculator, UsersRound } from "lucide-react";
import Container from "../Container";
import CtaLink from "../CtaLink";
import type { ServicePillar } from "@/data/services";

const PILLAR_ICONS = {
  hr: UsersRound,
  accounting: Calculator,
  "business-development": Building2,
};

export default function PillarSection({
  pillar,
  index,
}: {
  pillar: ServicePillar;
  index: number;
}) {
  const Icon = PILLAR_ICONS[pillar.id as keyof typeof PILLAR_ICONS];
  const alt = index % 2 === 1;

  return (
    <section
      id={pillar.id}
      className={`scroll-mt-20 py-16 sm:py-20 ${alt ? "bg-navy-50/60" : "bg-white"}`}
    >
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-white">
                <Icon size={20} />
              </span>
              <p className="text-xs font-bold tracking-[0.14em] text-brand-600 uppercase">
                {pillar.tagline}
              </p>
            </div>
            <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl">
              {pillar.title}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-navy-600">{pillar.description}</p>
          </div>
          <div className="shrink-0">
            <CtaLink
              href="/contact"
              event="cta_click"
              eventParams={{ location: "services_page", pillar: pillar.id }}
            >
              Talk to a Consultant
            </CtaLink>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pillar.services.map((service) => (
            <div
              key={service.name}
              className="flex flex-col rounded-2xl border border-navy-900/10 bg-white p-6"
            >
              <h3 className="font-display text-base font-bold text-navy-900">
                {service.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
