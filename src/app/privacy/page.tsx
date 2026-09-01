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
        lede="This page covers the company website — the call-scheduling link and the channel partner form. It is not a claim about client engagements, which run under their own agreements."
      />
      <article className="mx-auto max-w-3xl space-y-8 px-5 py-16 text-base leading-7 text-muted md:px-8">
        <section className="space-y-3">
          <h2 className="font-display text-2xl tracking-tight text-ink">What we collect</h2>
          <p>
            If you email us to schedule a call, we receive whatever you write. If you submit the
            channel partner form, we receive your name, email, and note by mail. We use that
            information only to reply and to understand whether working together makes sense. We
            do not sell it.
          </p>
        </section>
        <section className="space-y-3">
          <h2 className="font-display text-2xl tracking-tight text-ink">What we do not want</h2>
          <p>
            Please do not send CRM exports, forecast data, credentials, or other sensitive revenue
            data through this website. Describe the problem — the underlying data stays inside
            your access controls until an engagement agreement covers it.
          </p>
        </section>
        <section className="space-y-3">
          <h2 className="font-display text-2xl tracking-tight text-ink">Hosting and mail</h2>
          <p>
            Partner form submissions are processed by our application server and forwarded to{" "}
            {site.email}. Access is limited to the people who operate Ezydrag.
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
