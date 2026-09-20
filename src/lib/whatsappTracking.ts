/**
 * Unified WhatsApp lead tracking helper and Enhanced Conversions utility.
 *
 * Pushes a single, consistently-shaped `whatsapp_lead` event to the GTM
 * dataLayer whenever a user completes a real handoff from the website to
 * WhatsApp (i.e. wa.me actually opens). GTM (GTM-PFLHNDBJ) owns forwarding
 * this event to Google Ads / GA4 — this helper never sends a conversion
 * directly from React.
 *
 * For quote forms, `trackQuoteFormWhatsappIntent` allows optional, sanitized
 * Enhanced Conversions user data (E.164 phone and normalized name) to be passed
 * to GTM for the secondary quote form conversion action.
 *
 * Safe to call in any environment: no-ops if `window` or `window.dataLayer`
 * are not available (e.g. server-side rendering, tests).
 */

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

export interface UserProvidedDataPayload {
  phone_number?: string;
  address?: {
    first_name?: string;
    last_name?: string;
  };
}

export interface RawUserDataInput {
  name?: string;
  phone?: string;
}

/**
 * Normalizes a Saudi mobile phone number into E.164 format (+9665XXXXXXXX).
 * Converts Eastern Arabic numerals, strips non-numeric characters, validates
 * standard Saudi mobile prefix, and strictly guards against Rayat Najd's business number.
 */
export function normalizeSaudiPhoneNumber(rawPhone?: string): string | null {
  if (!rawPhone || typeof rawPhone !== "string") return null;

  // Convert Arabic-Indic numerals (٠١٢٣٤٥٦٧٨٩) to standard ASCII digits (0123456789)
  const arabicIndicDigits = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
  let sanitized = rawPhone.trim();
  for (let i = 0; i < 10; i++) {
    sanitized = sanitized.split(arabicIndicDigits[i]).join(i.toString());
  }

  // Remove spaces, hyphens, parentheses, dots, slashes, and leading '+'
  const digitsOnly = sanitized.replace(/\D/g, "");
  if (!digitsOnly) return null;

  let nationalDigits = ""; // Expected 9 digits starting with 5 (e.g. 551234567)

  if (digitsOnly.startsWith("009665") && digitsOnly.length === 14) {
    nationalDigits = digitsOnly.slice(5);
  } else if (digitsOnly.startsWith("9665") && digitsOnly.length === 12) {
    nationalDigits = digitsOnly.slice(3);
  } else if (digitsOnly.startsWith("05") && digitsOnly.length === 10) {
    nationalDigits = digitsOnly.slice(1);
  } else if (digitsOnly.startsWith("5") && digitsOnly.length === 9) {
    nationalDigits = digitsOnly;
  } else {
    // Invalid or unsupported format (e.g. landline, wrong length, non-Saudi)
    return null;
  }

  // Validate exactly 9 digits starting with '5'
  if (!/^5\d{8}$/.test(nationalDigits)) {
    return null;
  }

  const e164 = `+966${nationalDigits}`;

  // Strict guard: Exclude Rayat Najd business phone (+966557555716)
  if (e164 === "+966557555716") {
    return null;
  }

  return e164;
}

/**
 * Normalizes a customer name into first_name and optional last_name tokens.
 */
export function normalizeCustomerName(rawName?: string): { first_name?: string; last_name?: string } | null {
  if (!rawName || typeof rawName !== "string") return null;

  // Trim whitespace and collapse duplicate whitespace tokens
  const cleaned = rawName.trim().replace(/\s+/g, " ");
  if (!cleaned) return null;

  const parts = cleaned.split(" ");
  const firstName = parts[0];
  const lastName = parts.length > 1 ? parts.slice(1).join(" ") : undefined;

  const result: { first_name?: string; last_name?: string } = {};
  if (firstName) result.first_name = firstName;
  if (lastName) result.last_name = lastName;

  return Object.keys(result).length > 0 ? result : null;
}

/**
 * Builds standard User-Provided Data object for GTM / Google Ads Enhanced Conversions.
 */
export function buildEnhancedConversionUserData(rawInput?: RawUserDataInput): UserProvidedDataPayload | undefined {
  if (!rawInput) return undefined;

  const normalizedPhone = normalizeSaudiPhoneNumber(rawInput.phone);
  const normalizedName = normalizeCustomerName(rawInput.name);

  const userData: UserProvidedDataPayload = {};

  if (normalizedPhone) {
    userData.phone_number = normalizedPhone;
  }

  if (normalizedName) {
    userData.address = normalizedName;
  }

  return Object.keys(userData).length > 0 ? userData : undefined;
}

export function trackQuoteFormWhatsappIntent(formSource: FormSource, rawUserData?: RawUserDataInput): void {
  try {
    if (typeof window === "undefined") return;
    window.dataLayer = window.dataLayer || [];

    const payload: {
      event: string;
      form_source: FormSource;
      user_data?: UserProvidedDataPayload;
    } = {
      event: "quote_form_whatsapp_intent",
      form_source: formSource,
    };

    const userData = buildEnhancedConversionUserData(rawUserData);
    if (userData) {
      payload.user_data = userData;
    }

    window.dataLayer.push(payload);
  } catch {
    // Never let tracking break form submission.
  }
}
