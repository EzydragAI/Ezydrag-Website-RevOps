export const HERO_CLIP = {
  desktop: "inset(44% 10% 44% 10%)",
  mobile: "inset(40% 6% 40% 6%)",
  open: "inset(0% 0% 0% 0%)",
} as const;

export function heroWindowClip() {
  if (typeof window === "undefined") return HERO_CLIP.desktop;
  return window.innerWidth >= 1024 ? HERO_CLIP.desktop : HERO_CLIP.mobile;
}
