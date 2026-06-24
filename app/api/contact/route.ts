import { NextResponse } from "next/server";

import { contactSchema } from "@/lib/contact-schema";

/**
 * Contact form endpoint.
 *
 * In development (or until you connect an email provider) submissions are
 * validated and logged to the server console, so the form works end-to-end
 * without any API keys.
 *
 * To deliver real emails, set the relevant environment variables (see
 * .env.example) and fill in the provider block below. Two common options are
 * sketched out: Resend and SendGrid. Never hard-code API keys — always read
 * them from process.env.
 */
export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed.", issues: parsed.error.flatten() },
      { status: 422 }
    );
  }

  const data = parsed.data;

  // Honeypot: if a bot filled the hidden field, pretend success and drop it.
  if (data.company_website && data.company_website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const toEmail = process.env.CONTACT_TO_EMAIL || "hello@harborlinesystems.com";
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL || "website@harborlinesystems.com";
  const subject = `New consultation request — ${data.businessName}`;
  const text = formatSubmission(data);

  try {
    const provider = process.env.EMAIL_PROVIDER?.toLowerCase();

    if (provider === "resend" && process.env.RESEND_API_KEY) {
      // --- Resend ----------------------------------------------------------
      // 1) npm install resend
      // 2) import { Resend } from "resend";
      // 3) const resend = new Resend(process.env.RESEND_API_KEY);
      //    await resend.emails.send({
      //      from: fromEmail,
      //      to: toEmail,
      //      replyTo: data.email,
      //      subject,
      //      text,
      //    });
      await sendViaFetchResend({ toEmail, fromEmail, subject, text, replyTo: data.email });
    } else if (provider === "sendgrid" && process.env.SENDGRID_API_KEY) {
      // --- SendGrid --------------------------------------------------------
      // 1) npm install @sendgrid/mail
      // 2) import sgMail from "@sendgrid/mail";
      // 3) sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      //    await sgMail.send({ to: toEmail, from: fromEmail, replyTo: data.email, subject, text });
      await sendViaFetchSendgrid({ toEmail, fromEmail, subject, text, replyTo: data.email });
    } else {
      // --- No provider configured: log so local development still works. ----
      console.info("[contact] New submission (no email provider configured):");
      console.info(text);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact] Failed to deliver submission:", error);
    return NextResponse.json(
      { error: "Unable to send your request right now." },
      { status: 502 }
    );
  }
}

/** Human-readable plain-text version of a submission for the notification email. */
function formatSubmission(data: {
  name: string;
  email: string;
  businessName: string;
  website?: string;
  phone?: string;
  serviceNeeds: string[];
  specificInterests: string[];
  budget?: string;
  timeline?: string;
  message?: string;
}) {
  const lines = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Business: ${data.businessName}`,
    data.website ? `Website: ${data.website}` : null,
    data.phone ? `Phone: ${data.phone}` : null,
    `Service needs: ${data.serviceNeeds.join(", ") || "—"}`,
    `Specific interests: ${data.specificInterests.join(", ") || "—"}`,
    `Budget: ${data.budget || "—"}`,
    `Timeline: ${data.timeline || "—"}`,
    "",
    "Message:",
    data.message || "(none)",
  ].filter(Boolean);
  return lines.join("\n");
}

/**
 * Example Resend call using fetch (no extra dependency required).
 * Kept here so the route works as soon as RESEND_API_KEY is set.
 */
async function sendViaFetchResend(opts: {
  toEmail: string;
  fromEmail: string;
  subject: string;
  text: string;
  replyTo: string;
}) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: opts.fromEmail,
      to: opts.toEmail,
      reply_to: opts.replyTo,
      subject: opts.subject,
      text: opts.text,
    }),
  });
  if (!res.ok) throw new Error(`Resend responded ${res.status}`);
}

/**
 * Example SendGrid call using fetch (no extra dependency required).
 * Kept here so the route works as soon as SENDGRID_API_KEY is set.
 */
async function sendViaFetchSendgrid(opts: {
  toEmail: string;
  fromEmail: string;
  subject: string;
  text: string;
  replyTo: string;
}) {
  const res = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: opts.toEmail }] }],
      from: { email: opts.fromEmail },
      reply_to: { email: opts.replyTo },
      subject: opts.subject,
      content: [{ type: "text/plain", value: opts.text }],
    }),
  });
  if (!res.ok) throw new Error(`SendGrid responded ${res.status}`);
}
