import type { Metadata } from "next";
import { site } from "@/content/site";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Ezydrag handles information you share through this website.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="How we handle what you send us."
        lede="This page covers the company website and the desk form. It is not a claim about your ad accounts or CRM."
      />
      <article className="mx-auto max-w-3xl space-y-8 px-5 py-16 text-base leading-7 text-muted md:px-8">
        <section className="space-y-3">
          <h2 className="font-display text-2xl tracking-tight text-ink">What we collect</h2>
          <p>
            If you submit the contact form, we receive your name, email, and the message you
            write. We use that information only to reply and to understand whether Ezydrag can
            help. We do not sell it.
          </p>
        </section>
        <section className="space-y-3">
          <h2 className="font-display text-2xl tracking-tight text-ink">What we do not want</h2>
          <p>
            Please do not send customer lists, ad-account credentials, or other sensitive
            marketing data through this website. Brief us on the operational loop, not the
            underlying audience file.
          </p>
        </section>
        <section className="space-y-3">
          <h2 className="font-display text-2xl tracking-tight text-ink">Hosting and mail</h2>
          <p>
            Form submissions are processed by our application server. If email delivery is
            configured, messages are forwarded to {site.email}. Access is limited to the people
            who operate Ezydrag.
          </p>
        </section>
        <section className="space-y-3">
          <h2 className="font-display text-2xl tracking-tight text-ink">Questions</h2>
          <p>
            Write to{" "}
            <a href={`mailto:${site.email}`} className="text-teal">
              {site.email}
            </a>
            .
          </p>
        </section>
      </article>
    </>
  );
}
