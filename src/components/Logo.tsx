import Link from "next/link";
import Image from "next/image";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="shrink-0" aria-label="D.M HR Consultancy home">
      <Image
        src="/images/logo/lockup.png"
        alt="D.M HR Consultancy"
        width={960}
        height={246}
        priority
        className={`h-9 w-auto sm:h-11 ${light ? "brightness-0 invert" : ""}`}
      />
    </Link>
  );
}
