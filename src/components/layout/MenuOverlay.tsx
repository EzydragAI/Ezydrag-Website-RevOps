"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { navItems } from "@/content/nav";
import { site } from "@/content/site";
import { lockScroll, navigateToHash, unlockScroll } from "@/lib/lenis";
import { useUIStore } from "@/stores/ui-store";
import { cn } from "@/lib/cn";

const indexCopy = [
  { hint: "The argument" },
  { hint: "How we engage" },
  { hint: "What we harden" },
  { hint: "Coming soon" },
  { hint: "Free analysis" },
] as const;

export function MenuOverlay() {
  const root = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const open = useUIStore((s) => s.menuOpen);
  const setMenuOpen = useUIStore((s) => s.setMenuOpen);

  useEffect(() => {
    if (open) lockScroll();
    else unlockScroll();
    return () => unlockScroll();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, setMenuOpen]);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;
      const items = el.querySelectorAll("[data-index-item]");
      const foot = el.querySelector("[data-index-foot]");

      gsap.killTweensOf([el, items, foot]);

      if (open) {
        gsap.set(el, { autoAlpha: 1, pointerEvents: "auto" });
        gsap.fromTo(
          el,
          { clipPath: "inset(0 0 100% 0)" },
          { clipPath: "inset(0 0 0% 0)", duration: 0.75, ease: "ember" },
        );
        gsap.fromTo(
          items,
          { yPercent: 120 },
          { yPercent: 0, duration: 0.9, stagger: 0.07, ease: "ember", delay: 0.16 },
        );
        gsap.fromTo(
          foot,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.5, ease: "ember", delay: 0.45 },
        );
        return;
      }

      gsap.to(el, {
        clipPath: "inset(0 0 100% 0)",
        duration: 0.5,
        ease: "ember",
        onComplete: () => {
          gsap.set(el, { autoAlpha: 0, pointerEvents: "none" });
        },
      });
    },
    { dependencies: [open] },
  );

  function onNav(href: string) {
    setMenuOpen(false);
    const hash = href.includes("#") ? href.split("#")[1] : null;
    if (hash) {
      window.setTimeout(() => {
        navigateToHash(hash, pathname, (to) => router.push(to));
      }, 420);
      return;
    }
    router.push(href);
  }

  return (
    <div
      ref={root}
      id="index-menu"
      className="invisible pointer-events-none fixed inset-0 z-40 bg-[#1b1815] text-[#fff8ed]"
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
      aria-label="Site index"
    >
      <div className="noise opacity-25" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "linear-gradient(160deg, #1b1815 0%, #2a211b 55%, #1b1815 100%)" }}
      />

      <div className="relative flex h-svh min-h-0 flex-col px-5 pt-24 md:px-10 md:pt-28 lg:px-16">
        <p className="mb-2 shrink-0 font-display text-[11px] uppercase tracking-[0.32em] text-white/35 md:mb-3">
          Index — 0{navItems.length}
        </p>

        <ol className="flex min-h-0 flex-1 flex-col justify-center">
          {navItems.map((item, i) => (
            <li key={item.href} className="border-t border-white/12 last:border-b">
              <button
                type="button"
                onClick={() => onNav(item.href)}
                className={cn(
                  "group flex w-full items-center gap-4 py-2 text-left md:gap-10 md:py-3",
                  "transition-colors duration-500",
                )}
              >
                <span className="w-10 shrink-0 font-display text-[11px] uppercase tracking-[0.22em] text-white/35 transition-colors duration-500 group-hover:text-[#e8874a] md:w-14">
                  0{i + 1}
                </span>
                <span className="min-w-0 flex-1 overflow-hidden">
                  <span
                    data-index-item
                    className="block py-[0.1em] font-display text-[clamp(2.1rem,6.4vh,5.75rem)] font-medium uppercase leading-none tracking-[-0.06em] text-white/88 transition-colors duration-500 group-hover:text-white"
                  >
                    {item.label}
                  </span>
                </span>
                <span className="hidden w-36 shrink-0 text-right font-display text-[11px] uppercase tracking-[0.2em] text-white/0 transition-colors duration-500 group-hover:text-white/50 lg:block">
                  {indexCopy[i]?.hint}
                </span>
              </button>
            </li>
          ))}
        </ol>

        <div
          data-index-foot
          className="mt-4 flex shrink-0 items-center justify-between gap-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] font-display text-[11px] uppercase tracking-[0.2em] text-white/40 md:mt-5 md:pb-[max(2rem,env(safe-area-inset-bottom))]"
        >
          <p>{site.region}</p>
          <a href={`mailto:${site.email}`} className="hover:text-white">
            {site.email}
          </a>
        </div>
      </div>
    </div>
  );
}
