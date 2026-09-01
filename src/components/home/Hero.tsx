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
  const intro = useRef<HTMLDivElement>(null);
  const left = useRef<HTMLSpanElement>(null);
  const right = useRef<HTMLSpanElement>(null);
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
      gsap.set(intro.current, { opacity: 0 });
      gsap.set(meta.current, { opacity: 0 });
      gsap.set([left.current, right.current], { x: 0, y: 0 });
    },
    { scope: root },
  );

  useGSAP(
    () => {
      if (!handoff || !copy.current) return;
      const introTl = gsap.timeline({ defaults: { ease: "ember" } });
      introTl
        .to(copy.current, { opacity: 1, duration: 0.8 }, 0)
        .to(intro.current, { opacity: 1, duration: 0.7 }, 0.15)
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
        // Dark descriptor text would sit on the photo when the clip is open.
        gsap.set(intro.current, { autoAlpha: 0 });
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
              intro.current,
              { opacity: 1 },
              { opacity: 0, duration: 0.22, ease: "none", immediateRender: false },
              0,
            )
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
            .fromTo(media.current, { scale: 1.2 }, { scale: 1, ease: "none" }, 0)
            .fromTo(
              intro.current,
              { opacity: 1 },
              { opacity: 0, duration: 0.22, ease: "none", immediateRender: false },
              0,
            );
        },
      );

      return () => mm.revert();
    },
    { scope: root, dependencies: [preloaderDone] },
  );

  return (
    <section ref={root} id="hero" className="relative h-[240vh] bg-bg">
      <div className="sticky top-0 h-svh overflow-hidden">
        {/* Descriptor above the letterbox window: the first thing a visitor reads. */}
        <div
          ref={intro}
          className="pointer-events-none absolute inset-x-0 bottom-[64.5%] z-10 flex flex-col items-center gap-3 px-5 text-center opacity-0 md:gap-4 lg:bottom-[70.5%]"
        >
          <p className="font-display text-[11px] uppercase tracking-[0.3em] text-muted">
            AI production readiness for revenue operations
          </p>
          <p className="max-w-2xl text-base leading-7 text-ink md:text-lg md:leading-8">
            We make the AI inside your revenue stack reliable enough to run the business on — and
            cheap enough to keep running.
          </p>
        </div>

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
            <h1 className="relative flex flex-col items-center justify-center text-white">
              <span
                ref={left}
                className="display-xl whitespace-nowrap text-[15vw] md:text-[8.5vw]"
              >
                Revenue up.
              </span>
              <span
                ref={right}
                className="italic-accent mt-[-0.24em] whitespace-nowrap text-[12vw] leading-none text-white/90 md:text-[6vw]"
              >
                ops cost down.
              </span>
              <span className="sr-only">
                Ezydrag is the AI production readiness and governance partner for Revenue
                Operations teams. We turn forecasting, lead scoring, reporting, and AI agent
                workflows into reliable, governed production systems that grow revenue and reduce
                the cost of running revenue operations.
              </span>
            </h1>
          </div>
        </div>

        <div
          ref={meta}
          className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex items-end justify-between px-5 pb-8 font-display text-[11px] uppercase tracking-[0.22em] text-[#fff8ed] opacity-0 mix-blend-difference md:px-10 lg:px-16"
        >
          <p className="max-w-64 normal-case tracking-normal opacity-90">
            Forecasting, lead scoring, reporting, and AI agents — hardened, monitored, and governed
            in production.
          </p>
          <p className="hidden opacity-80 md:block">Scroll to open</p>
          <p>
            <span ref={pct}>00</span>
            <span className="opacity-40"> / 100</span>
          </p>
        </div>
      </div>
    </section>
  );
}
