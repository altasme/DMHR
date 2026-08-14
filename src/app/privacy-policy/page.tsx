import type { Metadata } from "next";
import Container from "@/components/Container";
import { CONTACT, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${SITE_NAME}.`,
  alternates: { canonical: "/privacy-policy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <h1 className="font-display text-3xl font-bold text-navy-900">Privacy Policy</h1>
        <p className="mt-2 text-sm text-navy-500">Last updated: {new Date().toLocaleDateString("en-PH", { year: "numeric", month: "long", day: "numeric" })}</p>

        <div className="mt-8 flex flex-col gap-6 text-base leading-relaxed text-navy-700">
          <p>
            {SITE_NAME} (&ldquo;D.M,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
            respects your privacy. This Privacy Policy explains how we collect, use, and protect
            information submitted through this website.
          </p>

          <div>
            <h2 className="font-display text-xl font-bold text-navy-900">
              Information We Collect
            </h2>
            <p className="mt-2">
              When you submit a consultation or inquiry form on this website, we may collect your
              name, business/company name, email address, mobile number, service interest,
              preferred contact method, and any message you provide.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-navy-900">
              How We Use Your Information
            </h2>
            <p className="mt-2">We use the information you provide to:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Respond to your consultation or service inquiry</li>
              <li>Communicate with you about our HR, accounting, and business support services</li>
              <li>Improve our website and services</li>
            </ul>
            <p className="mt-2">
              We do not sell or rent your personal information to third parties.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-navy-900">Data Retention</h2>
            <p className="mt-2">
              We retain inquiry information for as long as reasonably necessary to respond to
              your request and, where applicable, to maintain business records.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-navy-900">Your Rights</h2>
            <p className="mt-2">
              Under the Philippine Data Privacy Act of 2012, you have the right to access,
              correct, or request deletion of your personal information. To exercise these
              rights, contact us using the details below.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-navy-900">Contact Us</h2>
            <p className="mt-2">
              If you have questions about this Privacy Policy, please contact us at{" "}
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
