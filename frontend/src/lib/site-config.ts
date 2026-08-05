/** Central business / contact details — single source of truth */

export const SITE_NAME = "American Billing Solutions";
export const SITE_LEGAL_NAME = "American Billing Solutions";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://americanbillingsolutions.com";

export const CONTACT_EMAIL = "americanbillingsolutions@gmail.com";

export const PHONE_DISPLAY = "(850) 470-1312";
export const PHONE_TEL = "tel:+18504701312";
export const PHONE_E164 = "+18504701312";

export const ADDRESS = {
  streetAddress: "602 W Swann Ave #100",
  addressLocality: "Tampa",
  addressRegion: "FL",
  postalCode: "33609",
  addressCountry: "US",
} as const;

export const ADDRESS_LINE =
  "602 W Swann Ave #100, Tampa, FL 33609, United States";

export const ADDRESS_SHORT = "602 W Swann Ave #100, Tampa, FL 33609";

export const BUSINESS_HOURS = "Mon–Fri 8am–8pm EST";

export const LOGO_URL = `${SITE_URL}/abs-logo-clear.png`;

/** Marketing pillar pages (root-level service URLs) — also discovered via app/ folders */
export const PILLAR_SERVICE_PATHS = [
  "/medical-billing-services",
  "/revenue-cycle-management",
  "/medical-coding-services",
  "/provider-credentialing-services",
  "/insurance-verification-services",
  "/accounts-receivable-management",
] as const;
