import Link from "next/link";

/**
 * TODO(client): replace with the official D.M HR Consultancy logo file once
 * provided (see spec section 37 "Confirmed" assets). This is a type-based
 * placeholder using the brand's navy/blue palette.
 */
export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label="D.M HR Consultancy home">
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-lg text-base font-bold tracking-tight ${
          light ? "bg-white text-navy-900" : "bg-navy-900 text-white"
        }`}
      >
        DM
      </span>
      <span className="flex flex-col leading-tight">
        <span
          className={`font-display text-[15px] font-bold tracking-tight sm:text-base ${
            light ? "text-white" : "text-navy-900"
          }`}
        >
          D.M HR Consultancy
        </span>
        <span
          className={`text-[11px] font-medium tracking-wide sm:text-xs ${
            light ? "text-brand-200" : "text-brand-600"
          }`}
        >
          Human Resource Management
        </span>
      </span>
    </Link>
  );
}
