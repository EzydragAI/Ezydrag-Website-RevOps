import type Lenis from "lenis";

let instance: Lenis | null = null;

export function setLenis(lenis: Lenis | null) {
  instance = lenis;
}

export function getLenis() {
  return instance;
}

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return false;
  const lenis = getLenis();
  if (lenis) {
    lenis.scrollTo(el, { offset: -72, duration: 1.2 });
  } else {
    const top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: "smooth" });
  }
  return true;
}

export function navigateToHash(
  hash: string,
  pathname: string,
  push: (href: string) => void,
) {
  if (pathname === "/") {
    scrollToId(hash);
    return;
  }
  push(`/#${hash}`);
}

export function lockScroll() {
  instance?.stop();
  document.documentElement.classList.add("overflow-hidden");
}

export function unlockScroll() {
  instance?.start();
  document.documentElement.classList.remove("overflow-hidden");
}
