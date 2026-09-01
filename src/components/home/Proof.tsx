"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { outcomes } from "@/content/story";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function Proof() {
  const root = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      const nums = root.current?.querySelectorAll("[data-proof]");
      if (!nums?.length || reduced) return;
      gsap.from(nums, {
        yPercent: 30,
        scale: 0.86,
        opacity: 0.2,
        stagger: 0.08,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top 80%",
          end: "top 28%",
          scrub: 0.65,
        },
      });
    },
    { dependencies: [reduced], scope: root },
  );

  return (
    <section
      ref={root}
      id="proof"
      data-inverse-header
      className="bg-teal-deep px-5 py-28 text-[#fff8ed] md:px-10 md:py-36 lg:px-16"
    >
      <p className="font-display text-[11px] uppercase tracking-[0.28em] text-white/45">
        06 — The gap, in numbers
      </p>
      <h2 className="mt-3 max-w-3xl font-display text-4xl uppercase tracking-tighter md:text-6xl">
        You&apos;re not behind. You&apos;re in good company — and that&apos;s the problem.
      </h2>
      <div className="mt-16 grid gap-12 md:grid-cols-2 xl:grid-cols-4">
        {outcomes.map((item) => (
          <article key={item.label} className="border-t border-white/15 pt-6">
            <p data-proof className="display-xl text-[18vw] md:text-[8vw]">
              {item.value}
            </p>
            <p className="mt-3 font-display text-sm uppercase tracking-[0.16em] md:text-base">
              {item.label}
            </p>
            <p className="mt-2 text-sm leading-6 text-white/55 md:text-base md:leading-7">
              {item.detail}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
