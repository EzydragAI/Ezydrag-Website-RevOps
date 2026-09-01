"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { audiences, roles } from "@/content/story";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function Desks() {
  const root = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      const rows = root.current?.querySelectorAll("[data-desk]");
      if (!rows?.length || reduced) return;
      gsap.from(rows, {
        x: 40,
        opacity: 0,
        stagger: 0.06,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top 70%",
          end: "top 25%",
          scrub: 0.55,
        },
      });
    },
    { dependencies: [reduced], scope: root },
  );

  const tape = [...roles, ...roles];

  return (
    <section
      ref={root}
      id="desks"
      data-inverse-header
      className="overflow-hidden bg-teal-deep py-24 text-[#fff8ed] md:py-32"
    >
      <div className="mb-16 overflow-hidden border-y border-white/10 py-4">
        <div className="marquee-track flex gap-10 px-6">
          {tape.map((role, i) => (
            <span
              key={`${role}-${i}`}
              className="display-xl shrink-0 text-[8vw] text-white/25 md:text-[4.5vw]"
            >
              {role}
            </span>
          ))}
        </div>
      </div>
      <div className="px-5 md:px-10 lg:px-16">
        <p className="font-display text-[11px] uppercase tracking-[0.28em] text-white/45">
          04 — Who we serve
        </p>
        <h2 className="mt-3 max-w-3xl font-display text-4xl uppercase tracking-tighter md:text-6xl">
          Built for the revenue team in the middle.
        </h2>
        <p className="mt-5 max-w-xl text-sm leading-7 text-white/60 md:max-w-2xl md:text-base md:leading-8">
          Too complex for a two-person automation shop. Too specific for a Big&nbsp;4 framework.
          Mature enough to have already tried AI — and honest enough to admit it isn&apos;t trusted
          yet.
        </p>
        <div className="mt-12 grid gap-x-16 gap-y-10 md:grid-cols-2">
          {audiences.map((item, i) => (
            <article key={item.title} data-desk className="border-t border-white/15 pt-5">
              <p className="font-display text-[11px] uppercase tracking-[0.2em] text-white/40">
                0{i + 1}
              </p>
              <h3 className="mt-2 font-display text-3xl uppercase tracking-[-0.04em]">
                {item.title}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-7 text-white/60 md:text-base md:leading-8">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
