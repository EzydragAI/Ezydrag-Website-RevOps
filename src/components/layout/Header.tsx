"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { navItems } from "@/content/nav";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { cn } from "@/lib/cn";
import { getLenis, navigateToHash } from "@/lib/lenis";
import { useUIStore } from "@/stores/ui-store";

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const theme = useUIStore((s) => s.headerTheme);
  const menuOpen = useUIStore((s) => s.menuOpen);
  const toggleMenu = useUIStore((s) => s.toggleMenu);
  const setMenuOpen = useUIStore((s) => s.setMenuOpen);
  const preloaderDone = useUIStore((s) => s.preloaderDone);
  const [scrolled, setScrolled] = useState(false);
  const lightType = menuOpen || (theme === "inverse" && !scrolled);

  useEffect(() => {
    const update = () => {
      const y = getLenis()?.scroll ?? window.scrollY;
      setScrolled(y > 40);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    const lenis = getLenis();
    lenis?.on("scroll", update);
    return () => {
      window.removeEventListener("scroll", update);
      lenis?.off("scroll", update);
    };
  }, [preloaderDone]);

  function onNav(href: string) {
    setMenuOpen(false);
    const hash = href.includes("#") ? href.split("#")[1] : null;
    if (hash) {
      navigateToHash(hash, pathname, (to) => router.push(to));
      return;
    }
    router.push(href);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "flex items-center justify-between px-5 py-5 md:px-10 lg:px-16",
          scrolled && !menuOpen && "border-b border-line bg-bg/88 backdrop-blur-md",
        )}
      >
        <Link href="/" onClick={() => setMenuOpen(false)} aria-label="Ezydrag home">
          <Logo inverse={lightType} />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navItems.slice(0, 3).map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => onNav(item.href)}
              className={cn(
                "font-display text-[11px] uppercase tracking-[0.22em] transition-opacity hover:opacity-55",
                lightType ? "text-white" : "text-ink",
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <ThemeToggle inverse={lightType} />
          <button
            type="button"
            onClick={() => onNav("/#desk")}
            className={cn(
              "hidden font-display text-[11px] uppercase tracking-[0.22em] lg:inline",
              lightType ? "text-white" : "text-ink",
            )}
          >
            Book a call
          </button>
          <button
            type="button"
            className={cn(
              "font-display text-[11px] uppercase tracking-[0.22em]",
              lightType ? "text-white" : "text-ink",
            )}
            aria-expanded={menuOpen}
            aria-controls="index-menu"
            aria-label={menuOpen ? "Close index" : "Open index"}
            onClick={toggleMenu}
          >
            {menuOpen ? "Close" : "Index"}
          </button>
        </div>
      </div>
    </header>
  );
}
