import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[85vh] flex-col justify-end px-5 pb-20 pt-32 md:px-10 lg:px-16">
      <p className="font-display text-[11px] uppercase tracking-[0.28em] text-muted">404</p>
      <h1 className="mt-6 display-xl text-[18vw] md:text-[10vw]">
        Off <span className="italic-accent lowercase">pipeline.</span>
      </h1>
      <Link
        href="/"
        className="btn-fill mt-10 inline-flex h-12 w-fit items-center px-8 font-display text-[11px] uppercase tracking-[0.22em]"
      >
        <span>Back to the site</span>
      </Link>
    </section>
  );
}
