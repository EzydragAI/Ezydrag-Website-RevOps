"use client";

import { useEffect } from "react";
import { THEME_KEY, useUIStore } from "@/stores/ui-store";
import type { ColorMode } from "@/types";

export function ThemeProvider() {
  const setColorMode = useUIStore((s) => s.setColorMode);

  useEffect(() => {
    let mode: ColorMode = "light";
    try {
      const stored = localStorage.getItem(THEME_KEY);
      if (stored === "light" || stored === "dark") {
        mode = stored;
      } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        mode = "dark";
      }
    } catch {
      /* ignore */
    }
    setColorMode(mode);
  }, [setColorMode]);

  return null;
}
