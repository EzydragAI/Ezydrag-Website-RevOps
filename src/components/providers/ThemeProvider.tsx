"use client";

import { useEffect } from "react";
import { THEME_KEY, useUIStore } from "@/stores/ui-store";
import type { ColorMode } from "@/types";

export function ThemeProvider() {
  const setColorMode = useUIStore((s) => s.setColorMode);

  useEffect(() => {
    // Light is the default; dark applies only when explicitly chosen before.
    let mode: ColorMode = "light";
    try {
      if (localStorage.getItem(THEME_KEY) === "dark") {
        mode = "dark";
      }
    } catch {
      /* ignore */
    }
    setColorMode(mode);
  }, [setColorMode]);

  return null;
}
