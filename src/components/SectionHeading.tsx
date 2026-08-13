import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  level = "h2",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
  level?: "h1" | "h2";
}) {
  const Heading = level;

  return (
    <Reveal
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}
    >
      {eyebrow && (
        <p
          className={`mb-3 text-xs font-semibold tracking-[0.14em] uppercase ${
            light ? "text-brand-300" : "text-brand-600"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <Heading
        className={`font-display font-bold tracking-tight text-balance ${
          level === "h1"
            ? "text-[42px] leading-[1.1] sm:text-6xl lg:text-7xl"
            : "text-4xl leading-[1.15] sm:text-5xl"
        } ${light ? "text-white" : "text-navy-900"}`}
      >
        {title}
      </Heading>
      {description && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            light ? "text-white/70" : "text-navy-600"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
