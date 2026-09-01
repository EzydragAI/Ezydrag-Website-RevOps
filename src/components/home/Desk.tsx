import { site } from "@/content/site";
import { PartnerForm } from "@/components/contact/PartnerForm";

const gmailComposeUrl = (() => {
  const subject = "Free pain-point analysis — [your company]";
  const body = [
    "Hi Ezydrag team,",
    "",
    "We'd like to book the free pain-point analysis call.",
    "",
    "Company:",
    "What our revenue AI does today (forecasting / scoring / reporting / agents):",
    "Where it stalls or isn't trusted:",
    "Times that work for us (with timezone):",
    "",
    "Thanks,",
  ].join("\n");
  // encodeURIComponent keeps spaces as %20 (not "+"), which Gmail decodes reliably.
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(site.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
})();

export function Desk() {
  return (
    <section id="desk" className="border-t border-line px-5 py-24 md:px-10 md:py-32 lg:px-16">
      <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-20">
        <div>
          <p className="font-display text-[11px] uppercase tracking-[0.28em] text-muted">
            08 — Book a call
          </p>
          <h2 className="mt-6 display-xl text-[15vw] md:text-[7vw]">
            Free pain-point <span className="italic-accent lowercase">analysis.</span>
          </h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-muted">
            A 30-minute call about your revenue stack — where the forecasting, scoring, or
            reporting AI actually stalls, and what it would take to trust it. If an audit
            isn&apos;t the right fit, we&apos;ll tell you that directly. No deck, no pitch, no
            invoice.
          </p>
          <div className="mt-10 flex flex-col items-start gap-5">
            <a
              href={gmailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-fill inline-flex h-12 items-center justify-center px-8 font-display text-[11px] uppercase tracking-[0.22em]"
            >
              <span>Schedule via Gmail</span>
            </a>
            <p className="text-xs leading-5 text-muted">
              Opens a prefilled email — add your company and the times that suit you. Prefer your
              own client?{" "}
              <a
                href={`mailto:${site.email}?subject=${encodeURIComponent("Free pain-point analysis — [your company]")}`}
                className="text-ink underline underline-offset-4 hover:opacity-70"
              >
                {site.email}
              </a>
            </p>
          </div>
          <p className="mt-12 font-display text-[11px] uppercase tracking-[0.2em] text-muted">
            {site.region} · Overlapping hours with UK, GCC, and APAC
          </p>
        </div>

        <div className="border-t border-line pt-10 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
          <p className="font-display text-[11px] uppercase tracking-[0.28em] text-muted">
            Channel partners
          </p>
          <h3 className="mt-6 font-display text-3xl uppercase tracking-tighter md:text-5xl">
            Bring us a client.
          </h3>
          <p className="mt-4 max-w-md text-sm leading-7 text-muted">
            If you sit close to mid-market revenue teams — as a consultant, agency, or fractional
            operator — and can open doors, we share the upside. One click and a short note; it
            lands straight in our inbox.
          </p>
          <div className="mt-8">
            <PartnerForm />
          </div>
        </div>
      </div>
    </section>
  );
}
