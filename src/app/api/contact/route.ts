import { NextResponse } from "next/server";
import { Resend } from "resend";
import { CONTACT } from "@/lib/constants";

type ContactPayload = {
  name: string;
  company: string;
  email: string;
  mobile: string;
  services: string[];
  message?: string;
  preferredContact: string;
};

function isValidPayload(body: unknown): body is ContactPayload {
  if (!body || typeof body !== "object") return false;
  const b = body as Record<string, unknown>;
  return (
    typeof b.name === "string" &&
    b.name.trim().length > 0 &&
    typeof b.company === "string" &&
    b.company.trim().length > 0 &&
    typeof b.email === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b.email) &&
    typeof b.mobile === "string" &&
    b.mobile.trim().length > 0 &&
    Array.isArray(b.services) &&
    typeof b.preferredContact === "string"
  );
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!isValidPayload(body)) {
    return NextResponse.json(
      { error: "Please complete all required fields." },
      { status: 400 }
    );
  }

  const { name, company, email, mobile, services, message, preferredContact } = body;

  const submittedAt = new Date().toLocaleString("en-PH", {
    timeZone: "Asia/Manila",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const emailHtml = `
    <h2>New Consultation Request</h2>
    <p><strong>Submitted:</strong> ${submittedAt} (PH time)</p>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Business / Company:</strong> ${escapeHtml(company)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Mobile Number:</strong> ${escapeHtml(mobile)}</p>
    <p><strong>Service Interest:</strong> ${services.map(escapeHtml).join(", ") || "Not specified"}</p>
    <p><strong>Preferred Contact Method:</strong> ${escapeHtml(preferredContact)}</p>
    <p><strong>Message:</strong><br/>${message ? escapeHtml(message).replace(/\n/g, "<br/>") : "(none provided)"}</p>
  `;

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || CONTACT.email;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "D.M HR Consultancy Website <onboarding@resend.dev>";

  if (!apiKey) {
    console.warn(
      "[contact] RESEND_API_KEY is not configured — inquiry was NOT emailed. Set RESEND_API_KEY (and optionally CONTACT_TO_EMAIL / CONTACT_FROM_EMAIL) before launch.",
      { name, company, email, mobile, services, preferredContact }
    );
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New Consultation Request from ${name} (${company})`,
      html: emailHtml,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json(
        { error: "We couldn't send your inquiry right now. Please try again or contact us directly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[contact] Unexpected error sending email:", err);
    return NextResponse.json(
      { error: "We couldn't send your inquiry right now. Please try again or contact us directly." },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
