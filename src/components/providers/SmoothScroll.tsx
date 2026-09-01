"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { getLenis, setLenis } from "@/lib/lenis";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useIsDesktop } from "@/hooks/useMedia";
import { useUIStore } from "@/stores/ui-store";

export function SmoothScroll() {
  const reduced = usePrefersReducedMotion();
  const desktop = useIsDesktop();
  const menuOpen = useUIStore((s) => s.menuOpen);
  const inquiryOpen = useUIStore((s) => s.inquiryOpen);

  useEffect(() => {
    if (reduced || !desktop) {
      setLenis(null);
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1,
    });

    setLenis(lenis);
    lenis.on("scroll", ScrollTrigger.update);

    const ticker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(ticker);
      lenis.destroy();
      setLenis(null);
    };
  }, [reduced, desktop]);

  useEffect(() => {
    const lenis = getLenis();
    if (menuOpen || inquiryOpen) {
      lenis?.stop();
      document.documentElement.classList.add("overflow-hidden");
    } else {
      lenis?.start();
      document.documentElement.classList.remove("overflow-hidden");
    }
  }, [menuOpen, inquiryOpen]);

  return null;
}
