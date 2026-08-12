"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import {
  CONSULTATION_SERVICE_OPTIONS,
  PREFERRED_CONTACT_METHODS,
} from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [preferredContact, setPreferredContact] = useState(PREFERRED_CONTACT_METHODS[0]);

  function toggleService(service: string) {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      company: String(formData.get("company") || ""),
      email: String(formData.get("email") || ""),
      mobile: String(formData.get("mobile") || ""),
      services: selectedServices,
      message: String(formData.get("message") || ""),
      preferredContact,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      trackEvent("consultation_request", { preferred_contact: preferredContact });
      setStatus("success");
      form.reset();
      setSelectedServices([]);
      setPreferredContact(PREFERRED_CONTACT_METHODS[0]);
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-brand-200 bg-brand-50 px-6 py-12 text-center">
        <CheckCircle2 size={40} className="text-brand-600" />
        <h3 className="mt-4 font-display text-xl font-bold text-navy-900">
          Thank you for contacting D.M Human Resource Management Consultancy.
        </h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-navy-600">
          We&rsquo;ve received your inquiry and will get back to you regarding your consultation
          request.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-brand-700 underline underline-offset-4"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="name" required>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClasses}
          />
        </Field>
        <Field label="Business / Company Name" htmlFor="company" required>
          <input
            id="company"
            name="company"
            type="text"
            required
            autoComplete="organization"
            className={inputClasses}
          />
        </Field>
        <Field label="Email Address" htmlFor="email" required>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClasses}
          />
        </Field>
        <Field label="Mobile Number" htmlFor="mobile" required>
          <input
            id="mobile"
            name="mobile"
            type="tel"
            required
            autoComplete="tel"
            className={inputClasses}
          />
        </Field>
      </div>

      <fieldset>
        <legend className="mb-2 text-sm font-semibold text-navy-800">
          What service are you interested in?
        </legend>
        <div className="flex flex-wrap gap-2">
          {CONSULTATION_SERVICE_OPTIONS.map((service) => {
            const active = selectedServices.includes(service);
            return (
              <button
                key={service}
                type="button"
                onClick={() => toggleService(service)}
                aria-pressed={active}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "border-brand-600 bg-brand-600 text-white"
                    : "border-navy-900/15 bg-white text-navy-700 hover:border-brand-400"
                }`}
              >
                {service}
              </button>
            );
          })}
        </div>
      </fieldset>

      <Field label="Tell us briefly about what you need help with" htmlFor="message">
        <textarea
          id="message"
          name="message"
          rows={4}
          className={inputClasses}
          placeholder="Optional"
        />
      </Field>

      <fieldset>
        <legend className="mb-2 text-sm font-semibold text-navy-800">
          Preferred Contact Method
        </legend>
        <div className="flex flex-wrap gap-2">
          {PREFERRED_CONTACT_METHODS.map((method) => {
            const active = preferredContact === method;
            return (
              <button
                key={method}
                type="button"
                onClick={() => setPreferredContact(method)}
                aria-pressed={active}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "border-navy-900 bg-navy-900 text-white"
                    : "border-navy-900/15 bg-white text-navy-700 hover:border-navy-400"
                }`}
              >
                {method}
              </button>
            );
          })}
        </div>
      </fieldset>

      {status === "error" && (
        <p role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-brand-700 disabled:opacity-60"
      >
        {status === "submitting" && <Loader2 size={18} className="animate-spin" />}
        Request a Consultation
      </button>
    </form>
  );
}

const inputClasses =
  "w-full rounded-xl border border-navy-900/15 bg-white px-4 py-3 text-base text-navy-900 outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20";

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-semibold text-navy-800">
        {label}
        {required && <span className="text-brand-600"> *</span>}
      </label>
      {children}
    </div>
  );
}
