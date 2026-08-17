import { NextResponse } from "next/server";

/** Must match CONTACT_EMAIL in src/lib/site-config.ts */
import { CONTACT_EMAIL, SITE_URL } from "@/lib/site-config";

export const runtime = "nodejs";

type InquiryBody = {
  subject?: string;
  replyTo?: string;
  fields?: Record<string, string>;
};

function isTruthySuccess(value: unknown): boolean {
  return value === true || value === "true";
}

function needsFormSubmitActivation(message: string): boolean {
  return /activate|confirm|check your email|hasn't been confirmed|actived/i.test(message);
}

function isFormSubmitDelivered(message: string, success: unknown): boolean {
  if (isTruthySuccess(success)) return true;
  return /thank you|thanks|submitted|received your/i.test(message);
}

function buildFormSubmitPayload(
  subject: string,
  fields: Record<string, string>,
  replyTo: string,
): Record<string, string> {
  const name = fields.Name || fields["Full name"] || "";
  const email = replyTo || fields.Email || fields.email || "";
  const phone = fields.Phone || fields.phone || "";
  const message = fields.Message || fields.message || "";
  const practice = fields.Practice || fields["Practice name"] || "";

  const inquiryDetails = Object.entries(fields)
    .filter(([, v]) => String(v ?? "").trim().length > 0)
    .map(([k, v]) => `${k}: ${String(v).trim()}`)
    .join("\n");

  const payload: Record<string, string> = {
    _subject: subject,
    _template: "table",
    _captcha: "false",
    _honey: "",
    name,
    email,
    phone,
    message,
    practice,
    inquiry_details: inquiryDetails,
  };

  for (const [k, v] of Object.entries(fields)) {
    const trimmed = String(v ?? "").trim();
    if (!trimmed) continue;
    payload[k.replace(/\s+/g, "_").toLowerCase()] = trimmed;
  }

  if (email) {
    payload._replyto = email;
  }

  return payload;
}

async function sendViaWeb3Forms(
  subject: string,
  fields: Record<string, string>,
  replyTo: string,
): Promise<{ ok: true } | { ok: false; error: string }> {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY?.trim();
  if (!accessKey) {
    return { ok: false, error: "Web3Forms not configured" };
  }

  const message = Object.entries(fields)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      subject,
      from_name: fields.Name || fields["Full name"] || "Website Visitor",
      email: replyTo || CONTACT_EMAIL,
      message,
      ...fields,
    }),
    cache: "no-store",
  });

  const data = (await res.json().catch(() => ({}))) as {
    success?: boolean;
    message?: string;
  };

  if (!res.ok || !data.success) {
    return {
      ok: false,
      error: data.message || `Web3Forms error ${res.status}`,
    };
  }

  return { ok: true };
}

async function sendViaFormSubmit(
  subject: string,
  fields: Record<string, string>,
  replyTo: string,
): Promise<
  | { ok: true; message: string }
  | { ok: false; error: string; needsActivation?: boolean }
> {
  const endpoint =
    process.env.FORMSUBMIT_ENDPOINT?.trim() ||
    `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_EMAIL)}`;

  const payload = buildFormSubmitPayload(subject, fields, replyTo);
  const body = new URLSearchParams(payload).toString();

  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
      Origin: SITE_URL,
      Referer: `${SITE_URL}/contact`,
    },
    body,
    cache: "no-store",
  });

  const text = await res.text();
  let data: { success?: string | boolean; message?: string; error?: string } = {};
  try {
    data = JSON.parse(text) as typeof data;
  } catch {
    data = { message: text };
  }

  const msg = String(data.message || data.error || text || "");
  const delivered = res.ok && isFormSubmitDelivered(msg, data.success);

  if (!delivered) {
    const activation = needsFormSubmitActivation(msg);
    return {
      ok: false,
      error: activation
        ? "FormSubmit activation pending"
        : msg || `FormSubmit error ${res.status}`,
      needsActivation: activation,
    };
  }

  return {
    ok: true,
    message: msg || "Inquiry delivered",
  };
}

export async function POST(req: Request) {
  let body: InquiryBody;
  try {
    body = (await req.json()) as InquiryBody;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body" }, { status: 400 });
  }

  const fields = body.fields ?? {};
  const subject =
    (body.subject || "").trim() || "Website Inquiry — American Billing Solutions";

  const hasContent = Object.values(fields).some((v) => String(v || "").trim().length > 0);
  if (!hasContent) {
    return NextResponse.json({ ok: false, error: "Empty inquiry" }, { status: 400 });
  }

  const replyTo = (body.replyTo || fields.Email || fields.email || "").trim();

  try {
    if (process.env.WEB3FORMS_ACCESS_KEY?.trim()) {
      const web3 = await sendViaWeb3Forms(subject, fields, replyTo);
      if (web3.ok) {
        return NextResponse.json({
          ok: true,
          deliveredTo: CONTACT_EMAIL,
          provider: "web3forms",
        });
      }
    }

    const result = await sendViaFormSubmit(subject, fields, replyTo);
    if (!result.ok) {
      return NextResponse.json(
        {
          ok: false,
          error: result.error,
          needsActivation: result.needsActivation,
        },
        { status: result.needsActivation ? 503 : 502 },
      );
    }

    return NextResponse.json({
      ok: true,
      deliveredTo: CONTACT_EMAIL,
      provider: "formsubmit",
    });
  } catch (err) {
    return NextResponse.json(
      {
        ok: false,
        error: err instanceof Error ? err.message : "Failed to reach mail service",
      },
      { status: 502 },
    );
  }
}
