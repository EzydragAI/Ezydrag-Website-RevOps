"use client";

import { cn } from "@/lib/cn";
import { useUIStore } from "@/stores/ui-store";

export function ThemeToggle({ inverse = false }: { inverse?: boolean }) {
  const mode = useUIStore((s) => s.colorMode);
  const toggle = useUIStore((s) => s.toggleColorMode);
  const dark = mode === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        "font-display text-[11px] uppercase tracking-[0.22em] transition-opacity hover:opacity-60",
        inverse ? "text-white" : "text-ink",
      )}
    >
      {dark ? "Light" : "Dark"}
    </button>
  );
}
