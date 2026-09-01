/**
 * Unified WhatsApp lead tracking helper.
 *
 * Pushes a single, consistently-shaped `whatsapp_lead` event to the GTM
 * dataLayer whenever a user completes a real handoff from the website to
 * WhatsApp (i.e. wa.me actually opens). GTM (GTM-PFLHNDBJ) owns forwarding
 * this event to Google Ads / GA4 — this helper never sends a conversion
 * directly from React.
 *
 * Safe to call in any environment: no-ops if `window` or `window.dataLayer`
 * are not available (e.g. server-side rendering, tests).
 */

declare global {
  interface Window {
    dataLayer?: any[];
  }
}

export type WhatsappSource =
  | "floating_whatsapp"
  | "top_banner"
  | "mobile_bottom_nav"
  | "quote_form_modal"
  | "contact_form"
  | "interest_list"
  | "nurseries_catalog"
  | "service_page"
  | "about"
  | "article_best_palms"
  | "article_palm_supply"
  | "article_washingtonia";

export function trackWhatsappLead(source: WhatsappSource): void {
  try {
    if (typeof window === "undefined") return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "whatsapp_lead",
      whatsapp_source: source,
    });
  } catch {
    // Never let tracking break the actual WhatsApp handoff.
  }
}

export type FormSource = "quote_form_modal" | "contact_form";

export function trackQuoteFormWhatsappIntent(formSource: FormSource): void {
  try {
    if (typeof window === "undefined") return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "quote_form_whatsapp_intent",
      form_source: formSource,
    });
  } catch {
    // Never let tracking break form submission.
  }
}
