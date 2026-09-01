"use client";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "@/lib/gsap";
import { useUIStore } from "@/stores/ui-store";

export function HeaderThemeSync() {
  const setHeaderTheme = useUIStore((s) => s.setHeaderTheme);
  const preloaderDone = useUIStore((s) => s.preloaderDone);

  useGSAP(
    () => {
      if (!preloaderDone) return;
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("[data-inverse-header]"),
      );

      const triggers = sections.map((section) =>
        ScrollTrigger.create({
          trigger: section,
          start: "top 64px",
          end: "bottom 64px",
          onToggle: () => {
            const active = sections.some((el) => {
              const rect = el.getBoundingClientRect();
              return rect.top <= 64 && rect.bottom >= 64;
            });
            setHeaderTheme(active ? "inverse" : "light");
          },
        }),
      );

      return () => {
        triggers.forEach((t) => t.kill());
        setHeaderTheme("light");
      };
    },
    { dependencies: [preloaderDone, setHeaderTheme] },
  );

  return null;
}
