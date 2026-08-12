import Container from "../Container";
import SectionHeading from "../SectionHeading";
import BookConsultationCta from "../BookConsultationCta";

const STEPS = [
  {
    number: "01",
    title: "Book a Consultation",
    description: "Tell us about your business and what you need help with.",
  },
  {
    number: "02",
    title: "Understand Your Needs",
    description: "We discuss your current challenges, requirements, and objectives.",
  },
  {
    number: "03",
    title: "Receive a Recommended Solution",
    description: "We identify the appropriate services and approach for your business.",
  },
  {
    number: "04",
    title: "Build Better Systems",
    description:
      "Work with D.M to implement practical HR, business, and organizational solutions.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading eyebrow="How It Works" title="Getting Started Is Simple" />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 font-display text-sm font-bold text-white">
                {step.number}
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-navy-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">{step.description}</p>
              {index < STEPS.length - 1 && (
                <div
                  aria-hidden
                  className="absolute top-6 -right-3 hidden h-px w-6 bg-navy-900/15 sm:block"
                />
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <BookConsultationCta location="how_it_works" />
        </div>
      </Container>
    </section>
  );
}
