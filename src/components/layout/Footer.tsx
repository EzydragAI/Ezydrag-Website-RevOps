"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { navItems } from "@/content/nav";
import { site } from "@/content/site";
import { Logo } from "@/components/ui/Logo";
import { navigateToHash } from "@/lib/lenis";

export function Footer() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <footer className="border-t border-line bg-bg px-5 py-12 md:px-8 lg:px-12">
      <div className="mx-auto flex max-w-360 flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-sm text-sm leading-6 text-muted">
            Ezydrag is the AI production readiness partner for Revenue Operations: we make
            forecasting, lead scoring, reporting, and agent AI reliable, governed, and worth
            trusting — so revenue grows and RevOps costs less to run. {site.region}.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="text-sm text-ink underline-offset-4 hover:underline"
          >
            {site.email}
          </a>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-ink">
              {item.label}
            </Link>
          ))}
          <Link href="/privacy" className="hover:text-ink">
            Privacy
          </Link>
          <button
            type="button"
            className="hover:text-ink"
            onClick={() => navigateToHash("index", pathname, (to) => router.push(to))}
          >
            FAQ
          </button>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-360 text-xs tracking-wide text-muted">
        {site.legalName} {new Date().getFullYear()} · India — Worldwide
      </p>
    </footer>
  );
}
