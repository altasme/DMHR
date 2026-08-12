export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

type GtagFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
  }
}

export type AnalyticsEvent =
  | "cta_click"
  | "phone_click"
  | "whatsapp_click"
  | "messenger_click";

export function trackEvent(
  event: AnalyticsEvent,
  params: Record<string, string | number | boolean | undefined> = {}
) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }
  window.gtag("event", event, params);
}
