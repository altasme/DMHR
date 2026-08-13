"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";
import { AnalyticsEvent, trackEvent } from "@/lib/analytics";

type Variant = "primary" | "secondary" | "outline-light" | "whatsapp" | "ghost";

const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    "bg-brand-600 text-white hover:bg-brand-700 shadow-sm shadow-brand-900/10 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-500",
  secondary:
    "bg-white text-navy-900 border border-navy-900/15 hover:bg-navy-50 hover:border-navy-900/25 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-500",
  "outline-light":
    "bg-transparent text-white border border-white/40 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white focus-visible:ring-offset-navy-950",
  // emerald-700/800 (not WhatsApp's #25D366) so white button text clears WCAG AA contrast (~5.5:1 vs ~2:1)
  whatsapp:
    "bg-emerald-700 text-white hover:bg-emerald-800 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-600",
  ghost:
    "bg-transparent text-brand-700 hover:text-brand-800 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-500",
};

// Heights land in the 48–56px "substantial but not oversized" range from the
// design spec; horizontal padding 20–32px.
const SIZE_CLASSES: Record<"sm" | "md" | "lg", string> = {
  sm: "h-11 px-5 text-sm",
  md: "h-12 px-6 text-sm sm:text-base",
  lg: "h-14 px-8 text-base",
};

export default function CtaLink({
  href,
  children,
  variant = "primary",
  className = "",
  event,
  eventParams,
  icon,
  showArrow = false,
  size = "md",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  event?: AnalyticsEvent;
  eventParams?: Record<string, string | number | boolean | undefined>;
  /** Leading icon — for channel-identifying buttons (WhatsApp, call, email). */
  icon?: ReactNode;
  /** Trailing arrow that nudges forward on hover — for navigational/action CTAs. */
  showArrow?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const isExternal =
    href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");

  const classes = `group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-150 focus-visible:outline-none ${SIZE_CLASSES[size]} ${VARIANT_CLASSES[variant]} ${className}`;

  const handleClick = () => {
    if (event) trackEvent(event, eventParams);
  };

  const content = (
    <>
      {icon}
      {children}
      {showArrow && (
        <ArrowRight
          size={size === "sm" ? 15 : 18}
          className="shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-1"
        />
      )}
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        onClick={handleClick}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} onClick={handleClick} className={classes}>
      {content}
    </Link>
  );
}
