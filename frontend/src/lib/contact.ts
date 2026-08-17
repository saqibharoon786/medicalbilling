/** All site form submissions and contact links go here. */
import { CONTACT_EMAIL } from "@/lib/site-config";

export { CONTACT_EMAIL };

export type FormPayload = Record<string, string>;

export type InquiryResult = {
  ok: boolean;
  method: "api" | "mailto";
  error?: string;
  needsActivation?: boolean;
};

/**
 * Sends inquiry details to CONTACT_EMAIL.
 * Primary: Next.js /api/inquiry → FormSubmit.co (email delivered to inbox).
 * Fallback: opens mailto only if the API is unreachable.
 */
export async function sendInquiry(
  subject: string,
  fields: FormPayload,
): Promise<InquiryResult> {
  const cleaned: FormPayload = {};
  for (const [k, v] of Object.entries(fields)) {
    const t = (v ?? "").trim();
    if (t) cleaned[k] = t;
  }

  const replyTo =
    cleaned.Email ||
    cleaned.email ||
    cleaned["Email address"] ||
    undefined;

  try {
    const res = await fetch("/api/inquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        subject,
        replyTo,
        fields: cleaned,
      }),
    });

    const data = (await res.json().catch(() => ({}))) as {
      ok?: boolean;
      error?: string;
      needsActivation?: boolean;
    };

    if (!res.ok || !data.ok) {
      return {
        ok: false,
        method: "api",
        error: data.error || `Request failed (${res.status})`,
        needsActivation: data.needsActivation,
      };
    }

    return { ok: true, method: "api" };
  } catch (err) {
    // Last-resort fallback so the visitor can still send manually
    submitToEmail(subject, cleaned);
    return {
      ok: false,
      method: "mailto",
      error: err instanceof Error ? err.message : "Delivery failed",
    };
  }
}

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
