"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { HERO_CLIP, heroWindowClip } from "@/lib/hero-motion";
import { photos } from "@/content/photos";
import { useUIStore } from "@/stores/ui-store";

function splitX(el: HTMLElement | null, direction: -1 | 1) {
  if (!el) return 0;
  const pad = Math.min(72, window.innerWidth * 0.055);
  return direction * (window.innerWidth / 2 - pad - el.offsetWidth / 2);
}

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const frame = useRef<HTMLDivElement>(null);
  const media = useRef<HTMLDivElement>(null);
  const copy = useRef<HTMLDivElement>(null);
  const left = useRef<HTMLHeadingElement>(null);
  const right = useRef<HTMLParagraphElement>(null);
  const meta = useRef<HTMLDivElement>(null);
  const pct = useRef<HTMLSpanElement>(null);
  const handoff = useUIStore((s) => s.loaderHandoff);
  const preloaderDone = useUIStore((s) => s.preloaderDone);

  useGSAP(
    () => {
      if (!frame.current) return;
      gsap.set(frame.current, { clipPath: heroWindowClip() });
      gsap.set(media.current, { scale: 1.28 });
      gsap.set(copy.current, { opacity: 0 });
      gsap.set(meta.current, { opacity: 0 });
      gsap.set([left.current, right.current], { x: 0, y: 0 });
    },
    { scope: root },
  );

  useGSAP(
    () => {
      if (!handoff || !copy.current) return;
      const intro = gsap.timeline({ defaults: { ease: "ember" } });
      intro
        .to(copy.current, { opacity: 1, duration: 0.8 }, 0)
        .to(meta.current, { opacity: 1, duration: 0.5 }, 0.28);
    },
    { scope: root, dependencies: [handoff] },
  );

  useGSAP(
    () => {
      if (!preloaderDone || !root.current || !frame.current) return;

      const windowClip = heroWindowClip();
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(frame.current, { clipPath: HERO_CLIP.open });
        gsap.set(media.current, { scale: 1 });
        gsap.set([copy.current, meta.current], { opacity: 1 });
      });

      mm.add(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => {
          gsap.set(frame.current, { clipPath: windowClip });
          gsap.set([left.current, right.current], { x: 0, y: 0 });

          gsap
            .timeline({
              scrollTrigger: {
                trigger: root.current,
                start: "top top",
                end: "bottom bottom",
                scrub: 0.85,
                invalidateOnRefresh: true,
              },
            })
            .fromTo(
              frame.current,
              { clipPath: windowClip },
              { clipPath: HERO_CLIP.open, ease: "none" },
              0,
            )
            .fromTo(media.current, { scale: 1.28 }, { scale: 1, ease: "none" }, 0)
            .fromTo(
              left.current,
              { x: 0 },
              { x: () => splitX(left.current, -1), ease: "none" },
              0,
            )
            .fromTo(
              right.current,
              { x: 0 },
              { x: () => splitX(right.current, 1), ease: "none" },
              0,
            );

          ScrollTrigger.create({
            trigger: root.current,
            start: "top top",
            end: "bottom bottom",
            onUpdate: (self) => {
              if (pct.current) {
                pct.current.textContent = String(Math.round(self.progress * 100)).padStart(2, "0");
              }
            },
          });
        },
      );

      mm.add(
        "(max-width: 1023px) and (prefers-reduced-motion: no-preference)",
        () => {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: root.current,
                start: "top top",
                end: "bottom bottom",
                scrub: 0.7,
              },
            })
            .fromTo(
              frame.current,
              { clipPath: HERO_CLIP.mobile },
              { clipPath: HERO_CLIP.open, ease: "none" },
              0,
            )
            .fromTo(media.current, { scale: 1.2 }, { scale: 1, ease: "none" }, 0);
        },
      );

      return () => mm.revert();
    },
    { scope: root, dependencies: [preloaderDone] },
  );

  return (
    <section
      ref={root}
      id="hero"
      data-inverse-header
      className="relative h-[240vh] bg-teal-deep"
    >
      <div className="sticky top-0 h-svh overflow-hidden">
        <div ref={frame} data-hero-frame className="absolute inset-0">
          <div ref={media} className="absolute inset-0 origin-center">
            <Image
              src={photos.hero.src}
              alt={photos.hero.alt}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/15 to-black/25" />
          </div>

          <div
            ref={copy}
            className="absolute inset-0 z-10 flex items-center justify-center px-5 opacity-0"
          >
            <div className="relative flex flex-col items-center justify-center">
              <h1
                ref={left}
                className="display-xl whitespace-nowrap text-[16vw] md:text-[9vw]"
              >
                Compound
              </h1>
              <p
                ref={right}
                className="italic-accent mt-[-0.28em] whitespace-nowrap text-[14vw] leading-none text-white/90 md:text-[7vw]"
              >
                demand.
              </p>
            </div>
          </div>
        </div>

        <div
          ref={meta}
          className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex items-end justify-between px-5 pb-8 font-display text-[11px] uppercase tracking-[0.22em] text-white/70 opacity-0 md:px-10 lg:px-16"
        >
          <p className="max-w-56 normal-case tracking-normal text-white/80">
            AI desks that run campaigns, routing, and attribution — so growth teams write the story.
          </p>
          <p className="hidden md:block">Scroll to open</p>
          <p>
            <span ref={pct}>00</span>
            <span className="text-white/40"> / 100</span>
          </p>
        </div>
      </div>
    </section>
  );
}
