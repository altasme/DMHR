"use client";

import { useState } from "react";
import { MessageCircle, Phone, X } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  const options = [
    ...(CONTACT.messengerHref
      ? [
          {
            key: "messenger",
            label: "Messenger",
            href: CONTACT.messengerHref,
            event: "messenger_click" as const,
          },
        ]
      : []),
    {
      key: "whatsapp",
      label: "WhatsApp",
      href: CONTACT.whatsappHref,
      event: "whatsapp_click" as const,
    },
    {
      key: "call",
      label: "Call " + CONTACT.mobileDisplay,
      href: CONTACT.mobileHref,
      event: "phone_click" as const,
    },
  ];

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      {open && (
        <div className="mb-1 flex w-60 flex-col gap-2 rounded-2xl border border-navy-900/10 bg-white p-3 shadow-xl shadow-navy-900/10">
          <p className="px-1 pb-1 text-xs font-semibold tracking-wide text-navy-500 uppercase">
            Message Us
          </p>
          {options.map((opt) => (
            <a
              key={opt.key}
              href={opt.href}
              target={opt.href.startsWith("http") ? "_blank" : undefined}
              rel={opt.href.startsWith("http") ? "noopener noreferrer" : undefined}
              onClick={() => trackEvent(opt.event, { location: "floating_button" })}
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-navy-900 transition-colors hover:bg-navy-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            >
              {opt.key === "call" ? (
                <Phone size={18} className="text-brand-600" />
              ) : (
                <MessageCircle size={18} className="text-brand-600" />
              )}
              {opt.label}
            </a>
          ))}
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close contact options" : "Open contact options"}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-white shadow-lg shadow-brand-900/25 transition-transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-500"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
}
