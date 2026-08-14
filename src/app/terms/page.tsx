import type { Metadata } from "next";
import Container from "@/components/Container";
import { CONTACT, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms & Website Disclaimer",
  description: `Terms of use and website disclaimer for ${SITE_NAME}.`,
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <h1 className="font-display text-3xl font-bold text-navy-900">
          Terms &amp; Website Disclaimer
        </h1>
        <p className="mt-2 text-sm text-navy-500">
          Last updated:{" "}
          {new Date().toLocaleDateString("en-PH", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <div className="mt-8 flex flex-col gap-6 text-base leading-relaxed text-navy-700">
          <p>
            This website is operated by {SITE_NAME}. By using this website, you agree to the
            following terms.
          </p>

          <div>
            <h2 className="font-display text-xl font-bold text-navy-900">General Information</h2>
            <p className="mt-2">
              The content on this website is provided for general informational purposes about
              our HR, accounting, administrative, and business development services. It does not
              constitute legal, tax, accounting, or professional advice, and should not be relied
              upon as a substitute for consultation with a qualified professional regarding your
              specific circumstances.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-navy-900">No Guaranteed Results</h2>
            <p className="mt-2">
              While we bring practical HR and business experience to every engagement, outcomes
              depend on each client&rsquo;s specific circumstances. We do not guarantee specific
              results, compliance outcomes, or approvals from any government agency.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-navy-900">Intellectual Property</h2>
            <p className="mt-2">
              The content, layout, and design of this website are owned by {SITE_NAME} unless
              otherwise noted, and may not be reproduced without permission.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-navy-900">External Links</h2>
            <p className="mt-2">
              This website may contain links to third-party sites, including Messenger and
              WhatsApp. We are not responsible for the content or privacy practices of external
              sites.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-navy-900">Contact Us</h2>
            <p className="mt-2">
              Questions about these terms can be directed to{" "}
              <a href={CONTACT.emailHref} className="font-semibold break-all text-brand-700">
                {CONTACT.email}
              </a>{" "}
              or {CONTACT.telephoneDisplay}.
            </p>
          </div>

          <p className="text-sm text-navy-500">
            This page is a general template and should be reviewed by the client and, where
            appropriate, legal counsel before publication.
          </p>
        </div>
      </Container>
    </section>
  );
}
