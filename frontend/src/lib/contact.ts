/** All site form submissions and contact links go here. */
export const CONTACT_EMAIL = "americanbillingsolutions@gmail.com";

export type FormPayload = Record<string, string>;

/** Opens the user's email client with a prefilled message to CONTACT_EMAIL. */
export function submitToEmail(subject: string, fields: FormPayload) {
  const body = Object.entries(fields)
    .filter(([, v]) => v.trim().length > 0)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");

  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailto;
}

/** Quick mailto with optional subject/body (for buttons / apply links). */
export function emailUs(subject: string, body = "") {
  const q = [
    `subject=${encodeURIComponent(subject)}`,
    body ? `body=${encodeURIComponent(body)}` : "",
  ]
    .filter(Boolean)
    .join("&");
  window.location.href = `mailto:${CONTACT_EMAIL}?${q}`;
}
