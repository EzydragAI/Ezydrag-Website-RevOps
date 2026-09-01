"use client";

import type { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Preloader } from "@/components/layout/Preloader";
import { MenuOverlay } from "@/components/layout/MenuOverlay";
import { HashScroll } from "@/components/layout/HashScroll";
import { HeaderThemeSync } from "@/components/layout/HeaderThemeSync";

export function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Preloader />
      <HeaderThemeSync />
      <HashScroll />
      <Header />
      <MenuOverlay />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
