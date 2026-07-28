import { NextResponse } from "next/server";

/** Must match CONTACT_EMAIL in src/lib/contact.ts */
const CONTACT_EMAIL = "americanbillingsolutions@gmail.com";

export const runtime = "nodejs";

type InquiryBody = {
  subject?: string;
  replyTo?: string;
  fields?: Record<string, string>;
};

/**
 * Proxies form inquiries to FormSubmit → americanbillingsolutions@gmail.com
 *
 * First-time setup: FormSubmit emails that inbox an activation link.
 * After one click on "Activate Form", every submission lands in the inbox.
 */
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

  const payload: Record<string, string> = {
    _subject: subject,
    _template: "table",
    _captcha: "false",
    _honey: "",
    ...Object.fromEntries(
      Object.entries(fields)
        .filter(([, v]) => String(v ?? "").trim().length > 0)
        .map(([k, v]) => [k, String(v).trim()]),
    ),
  };

  if (replyTo) {
    payload._replyto = replyTo;
    payload.email = replyTo;
  }

  try {
    const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_EMAIL)}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    const text = await res.text();
    let data: { success?: string | boolean; message?: string; error?: string } = {};
    try {
      data = JSON.parse(text) as typeof data;
    } catch {
      data = { message: text };
    }

    if (!res.ok) {
      const msg = data.message || data.error || text || `FormSubmit error ${res.status}`;
      const needsActivation =
        /activate|confirm|check your email|hasn't been confirmed/i.test(String(msg));

      return NextResponse.json(
        {
          ok: false,
          error: needsActivation
            ? `Activate FormSubmit: check ${CONTACT_EMAIL} inbox for the activation email, then try again.`
            : msg,
          needsActivation,
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      ok: true,
      deliveredTo: CONTACT_EMAIL,
      message: data.success || data.message || "Inquiry delivered",
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
