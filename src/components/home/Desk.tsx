import { site } from "@/content/site";
import { ContactForm } from "@/components/contact/ContactForm";

export function Desk() {
  return (
    <section id="desk" className="border-t border-line px-5 py-24 md:px-10 md:py-32 lg:px-16">
      <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
        <div>
          <p className="font-display text-[11px] uppercase tracking-[0.28em] text-muted">
            08 — The desk
          </p>
          <h2 className="mt-6 display-xl text-[16vw] md:text-[8vw]">
            Write the <span className="italic-accent lowercase">brief.</span>
          </h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-muted">
            Tell us the loop that stalls — campaigns, routing, content, or attribution. We reply
            from {site.email}. Do not send customer lists or ad-account credentials.
          </p>
          <p className="mt-10 font-display text-[11px] uppercase tracking-[0.2em] text-muted">
            {site.region}
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
