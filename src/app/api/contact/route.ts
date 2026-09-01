import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations/contact";
import { site } from "@/content/site";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const message = parsed.error.issues[0]?.message ?? "Please check the form.";
    return NextResponse.json({ error: message }, { status: 400 });
  }

  const { name, email, issue, company } = parsed.data;
  if (company) {
    return NextResponse.json({ ok: true });
  }

  const key = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM ?? "Ezydrag Website <onboarding@resend.dev>";

  if (key) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [site.email],
        reply_to: email,
        subject: `Marketing briefing from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${issue}`,
      }),
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Mail could not be sent. Please email us directly." },
        { status: 502 },
      );
    }
  } else {
    console.info("[contact]", { name, email, issue });
  }

  return NextResponse.json({ ok: true });
}
