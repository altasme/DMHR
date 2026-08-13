import Container from "../Container";
import SectionHeading from "../SectionHeading";
import BookConsultationCta from "../BookConsultationCta";

const STEPS = [
  {
    number: "01",
    title: "Understand",
    description:
      "We start by understanding your business, your current challenges, and what you need help with.",
  },
  {
    number: "02",
    title: "Assess",
    description:
      "We assess your existing HR, business, and organizational systems to identify gaps and opportunities.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "We develop the right mix of HR, accounting, and business solutions tailored to your business.",
  },
  {
    number: "04",
    title: "Support",
    description:
      "We work alongside you to implement and support practical, lasting systems and processes.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-navy-950 py-20 sm:py-28">
      <Container>
        <SectionHeading
          light
          eyebrow="Our Process"
          title="A Clear Path to Better Systems"
          description="A simple, consistent approach we follow with every client, from first conversation to implementation."
        />

        <div className="relative mt-16">
          <div
            aria-hidden
            className="absolute top-6 right-0 left-0 hidden h-px bg-white/10 lg:block"
          />
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-4">
            {STEPS.map((step) => (
              <div key={step.number}>
                <p className="relative z-10 inline-block bg-navy-950 font-display text-4xl font-bold text-brand-400 lg:pr-4">
                  {step.number}
                </p>
                <h3 className="mt-4 font-display text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <BookConsultationCta location="process_section" variant="primary" />
        </div>
      </Container>
    </section>
  );
}
