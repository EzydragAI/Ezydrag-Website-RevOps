"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { processSteps } from "@/content/story";
import { useIsDesktop } from "@/hooks/useMedia";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function Method() {
  const root = useRef<HTMLElement>(null);
  const num = useRef<HTMLSpanElement>(null);
  const items = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLDivElement>(null);
  const desktop = useIsDesktop();
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      const section = root.current;
      const numEl = num.current;
      const list = items.current;
      const barEl = bar.current;
      if (!section || !numEl || !list || !barEl) return;

      const cards = gsap.utils.toArray<HTMLElement>(list.children);
      if (reduced || !desktop) {
        gsap.set(cards, { opacity: 1, y: 0 });
        return;
      }

      gsap.set(cards, { opacity: 0, y: 28 });
      gsap.set(cards[0], { opacity: 1, y: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.7,
          onUpdate: (self) => {
            const i = Math.min(
              cards.length - 1,
              Math.floor(self.progress * cards.length),
            );
            numEl.textContent = processSteps[i].number;
            gsap.set(barEl, { scaleX: self.progress });
          },
        },
      });

      cards.forEach((card, i) => {
        const at = i / cards.length;
        if (i > 0) {
          tl.to(cards[i - 1], { opacity: 0, y: -24, duration: 0.2 }, at);
          tl.to(card, { opacity: 1, y: 0, duration: 0.2 }, at);
        }
      });

      return () => tl.kill();
    },
    { dependencies: [desktop, reduced], scope: root },
  );

  return (
    <section
      ref={root}
      id="method"
      className={desktop && !reduced ? "relative h-[320vh]" : "px-5 py-16 md:px-10 lg:px-16"}
    >
      <div
        className={
          desktop && !reduced
            ? "sticky top-0 flex h-svh flex-col px-5 pb-10 pt-24 md:px-10 lg:px-16"
            : "space-y-8"
        }
      >
        <p className="shrink-0 font-display text-[11px] uppercase tracking-[0.28em] text-muted">
          02 — Method
        </p>

        <div className="relative mt-8 min-h-0 flex-1">
          <span
            ref={num}
            className="pointer-events-none absolute -right-2 top-0 display-xl text-[20vw] leading-none text-ink/10 md:text-[10vw]"
          >
            01
          </span>
          <div ref={items} className="relative max-w-xl">
            {processSteps.map((step) => (
              <article
                key={step.number}
                className={
                  desktop && !reduced
                    ? "absolute inset-x-0 top-0"
                    : "border-t border-line py-6"
                }
              >
                <p className="font-display text-[11px] uppercase tracking-[0.22em] text-muted">
                  {step.number}
                </p>
                <h2 className="mt-2 font-display text-4xl uppercase tracking-[-0.04em] md:text-6xl">
                  {step.title}
                </h2>
                <p className="mt-3 max-w-md text-sm leading-7 text-muted">{step.body}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="rule mt-8 shrink-0 overflow-hidden">
          <div ref={bar} className="h-px origin-left scale-x-0 bg-ink" />
        </div>
      </div>
    </section>
  );
}
