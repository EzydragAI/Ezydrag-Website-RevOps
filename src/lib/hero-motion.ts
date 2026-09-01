export const HERO_CLIP = {
  // Window must be tall enough to contain the stacked headline at load;
  // the headline is ~24vh on desktop, ~20vh on mobile.
  desktop: "inset(32% 10% 32% 10%)",
  mobile: "inset(38% 6% 38% 6%)",
  open: "inset(0% 0% 0% 0%)",
} as const;

export function heroWindowClip() {
  if (typeof window === "undefined") return HERO_CLIP.desktop;
  return window.innerWidth >= 1024 ? HERO_CLIP.desktop : HERO_CLIP.mobile;
}
