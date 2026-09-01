"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import { gsap } from "@/lib/gsap";
import { manifesto } from "@/content/manifesto";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function Thesis() {
  const root = useRef<HTMLElement>(null);
  const copy = useRef<HTMLParagraphElement>(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      const section = root.current;
      const copyEl = copy.current;
      if (!section || !copyEl || reduced) return;

      const split = new SplitType(copyEl, { types: "words" });
      gsap.set(split.words, { opacity: 0.16 });
      gsap.to(split.words, {
        opacity: 1,
        stagger: 0.04,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "center 35%",
          scrub: 0.6,
        },
      });

      return () => split.revert();
    },
    { dependencies: [reduced], scope: root },
  );

  return (
    <section ref={root} id="thesis" className="px-5 py-16 md:px-10 md:py-20 lg:px-16">
      <h2 className="sr-only">
        Why RevOps AI stalls before production — and what reliability engineering fixes
      </h2>
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.28fr)_minmax(0,1fr)] lg:gap-12">
        <div>
          <p className="font-display text-[11px] uppercase tracking-[0.28em] text-muted">
            01 — Thesis
          </p>
          <ul className="mt-6 space-y-3 text-sm text-muted">
            {manifesto.marquee.map((item) => (
              <li key={item} className="border-t border-line pt-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <p
          ref={copy}
          className="max-w-5xl font-display text-3xl uppercase leading-[1.08] tracking-tighter md:text-5xl lg:text-[3.2vw]"
        >
          {manifesto.body}
        </p>
      </div>
    </section>
  );
}
