"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import { gsap } from "@/lib/gsap";
import { manifesto } from "@/content/manifesto";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function Thesis() {
  const root = useRef<HTMLElement>(null);
  const copy = useRef<HTMLParagraphElement>(null);
  const [active, setActive] = useState<number | null>(null);
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
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.32fr)_minmax(0,1fr)] lg:gap-12">
        <div>
          <p className="font-display text-[11px] uppercase tracking-[0.28em] text-muted">
            {manifesto.eyebrow}
          </p>
          <ul className="mt-6">
            {manifesto.pillars.map((item, i) => {
              const open = active === i;
              return (
                <li key={item.label} className="border-t border-line last:border-b">
                  <button
                    type="button"
                    onClick={() => setActive(open ? null : i)}
                    aria-expanded={open}
                    className="group flex w-full items-center justify-between gap-4 py-3.5 text-left"
                  >
                    <span
                      className={
                        open
                          ? "text-sm text-ink md:text-base"
                          : "text-sm text-muted transition-colors group-hover:text-ink md:text-base"
                      }
                    >
                      {item.label}
                    </span>
                    <span className="font-display text-lg leading-none text-muted transition-colors group-hover:text-ink">
                      {open ? "–" : "+"}
                    </span>
                  </button>
                  <div
                    className="grid transition-[grid-template-rows] duration-500 ease-ember"
                    style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-4 pr-6 text-sm leading-6 text-muted">{item.note}</p>
                    </div>
                  </div>
                </li>
              );
            })}
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
