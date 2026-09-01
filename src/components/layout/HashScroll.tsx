"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useUIStore } from "@/stores/ui-store";
import { scrollToId } from "@/lib/lenis";

export function HashScroll() {
  const preloaderDone = useUIStore((s) => s.preloaderDone);
  const pathname = usePathname();

  useEffect(() => {
    if (!preloaderDone) return;
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    const timer = window.setTimeout(() => scrollToId(hash), 80);
    return () => window.clearTimeout(timer);
  }, [preloaderDone, pathname]);

  return null;
}
