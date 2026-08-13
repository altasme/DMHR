import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import AnalyticsScript from "@/components/AnalyticsScript";
import RouteAnalytics from "@/components/RouteAnalytics";
import { SITE_NAME, SITE_URL, TAGLINE } from "@/lib/constants";
import "./globals.css";

// Self-hosted (rather than next/font/google) so the build never depends on
// reaching fonts.gstatic.com at build time — that fetch is unreliable in some
// CI/deploy environments (e.g. it 404s during Cloudflare Pages builds) and
// fails the whole build when it does. Variable font, Latin subset only.
//
// Single family (Manrope) per the design spec, used for both --font-body and
// --font-display: components use the `font-display` utility for headings and
// `font-sans` (default) for body text, but both resolve to the same typeface.
const manrope = localFont({
  src: "./fonts/manrope-variable-latin.woff2",
  variable: "--font-body",
  weight: "200 800",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | HR & Business Solutions`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Professional HR, business, accounting, and organizational solutions for SMEs and growing businesses in Calamba, Laguna and beyond.",
  openGraph: {
    title: `${SITE_NAME} | HR & Business Solutions`,
    description: TAGLINE,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_PH",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | HR & Business Solutions`,
    description: TAGLINE,
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_NAME,
    alternateName: "D.M HR Consultancy",
    description:
      "Professional HR, accounting, administrative, and business development consultancy for SMEs and growing businesses.",
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo/icon-mark.png`,
    image: `${SITE_URL}/images/og-image.jpg`,
    email: "dmhrmanagementconsultancy@gmail.com",
    telephone: "+63-49-560-8835",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Calamba",
      addressRegion: "Laguna",
      addressCountry: "PH",
    },
    areaServed: ["Calamba", "Laguna", "Philippines"],
    knowsAbout: [
      "Human Resource Consultancy",
      "HR Systems Development",
      "Recruitment",
      "Employee Handbook Development",
      "HR Policies and Procedures",
      "Bookkeeping",
      "Payroll",
      "Business Process Development",
      "Organizational Development",
    ],
  };

  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:font-semibold focus:text-navy-900 focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingContact />
        <AnalyticsScript />
        <RouteAnalytics />
      </body>
    </html>
  );
}
