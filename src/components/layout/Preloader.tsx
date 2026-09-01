"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { heroWindowClip } from "@/lib/hero-motion";
import { useUIStore } from "@/stores/ui-store";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const verbs = ["Audit", "Evals", "Monitor", "Govern", "Sustain"] as const;

export function Preloader() {
  const root = useRef<HTMLDivElement>(null);
  const percent = useRef<HTMLSpanElement>(null);
  const verb = useRef<HTMLParagraphElement>(null);
  const line = useRef<HTMLDivElement>(null);
  const chrome = useRef<HTMLDivElement>(null);
  const done = useUIStore((s) => s.preloaderDone);
  const setDone = useUIStore((s) => s.setPreloaderDone);
  const setHandoff = useUIStore((s) => s.setLoaderHandoff);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (done) return;
    document.documentElement.classList.add("overflow-hidden");
    const wrap = root.current;
    const pctEl = percent.current;
    const verbEl = verb.current;
    const lineEl = line.current;
    const chromeEl = chrome.current;
    if (!wrap || !pctEl || !verbEl || !lineEl || !chromeEl) return;

    if (reduced) {
      document.documentElement.classList.remove("overflow-hidden");
      setHandoff();
      setDone();
      return;
    }

    const counter = { value: 0 };
    let verbIndex = 0;

    const tl = gsap.timeline({
      onComplete: () => {
        setHandoff();
        const exit = gsap.timeline({
          onComplete: () => {
            document.documentElement.classList.remove("overflow-hidden");
            setDone();
          },
        });
        exit
          .to(chromeEl, { opacity: 0, duration: 0.35, ease: "ember" }, 0)
          .to(
            wrap,
            {
              clipPath: heroWindowClip(),
              duration: 0.9,
              ease: "ember",
            },
            0.05,
          )
          .to(wrap, { opacity: 0, duration: 0.35, ease: "ember" }, 0.75);
      },
    });

    gsap.set(lineEl, { scaleX: 0, transformOrigin: "center" });

    tl.to(
      counter,
      {
        value: 100,
        duration: 2.2,
        ease: "power2.inOut",
        onUpdate: () => {
          const next = Math.round(counter.value);
          pctEl.textContent = String(next).padStart(2, "0");
          const idx = Math.min(verbs.length - 1, Math.floor(next / 21));
          if (idx !== verbIndex) {
            verbIndex = idx;
            verbEl.textContent = verbs[idx];
          }
        },
      },
      0,
    );
    tl.to(lineEl, { scaleX: 1, duration: 2.2, ease: "power2.inOut" }, 0);

    return () => {
      tl.kill();
    };
  }, [done, reduced, setDone, setHandoff]);

  if (done) return null;

  return (
    <div
      ref={root}
      className="fixed inset-0 z-80 flex flex-col justify-between bg-[#1b1815] px-5 py-8 text-[#fff8ed] md:px-10 lg:px-16"
      aria-hidden={done}
    >
      <div className="noise opacity-20" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #1b1815 0%, #2c231b 100%)",
        }}
      />
      <div ref={chrome} className="relative z-10 flex h-full flex-col justify-between">
        <div className="flex items-start justify-between font-display text-[11px] uppercase tracking-[0.28em] text-white/50">
          <span>Ezydrag</span>
          <span>Running preflight</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p
            ref={verb}
            className="font-display text-[11px] uppercase tracking-[0.32em] text-white/45"
          >
            {verbs[0]}
          </p>
          <p className="display-xl mt-4 text-[28vw] leading-none md:text-[18vw]">
            <span ref={percent}>00</span>
          </p>
        </div>
        <div className="flex items-end justify-between font-display text-[11px] uppercase tracking-[0.22em] text-white/40">
          <span>RevOps AI reliability</span>
          <span>India → Worldwide</span>
        </div>
      </div>
      <div
        ref={line}
        className="absolute left-[10%] right-[10%] top-1/2 z-20 h-px -translate-y-1/2 bg-[#fff8ed]"
      />
    </div>
  );
}
