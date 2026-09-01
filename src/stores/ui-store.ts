import { create } from "zustand";
import type { ColorMode, HeaderTheme } from "@/types";

type UIState = {
  preloaderDone: boolean;
  loaderHandoff: boolean;
  menuOpen: boolean;
  inquiryOpen: boolean;
  headerTheme: HeaderTheme;
  colorMode: ColorMode;
  setPreloaderDone: () => void;
  setLoaderHandoff: () => void;
  setMenuOpen: (open: boolean) => void;
  toggleMenu: () => void;
  setInquiryOpen: (open: boolean) => void;
  setHeaderTheme: (theme: HeaderTheme) => void;
  setColorMode: (mode: ColorMode) => void;
  toggleColorMode: () => void;
};

const THEME_KEY = "ezydrag-mkt-theme";

function applyMode(mode: ColorMode) {
  if (typeof document === "undefined") return;
  document.documentElement.classList.toggle("dark", mode === "dark");
  document.documentElement.style.colorScheme = mode;
}

export const useUIStore = create<UIState>((set, get) => ({
  preloaderDone: false,
  loaderHandoff: false,
  menuOpen: false,
  inquiryOpen: false,
  headerTheme: "light",
  colorMode: "light",
  setPreloaderDone: () => set({ preloaderDone: true, loaderHandoff: true }),
  setLoaderHandoff: () => set({ loaderHandoff: true }),
  setMenuOpen: (open) => set({ menuOpen: open }),
  toggleMenu: () => set((state) => ({ menuOpen: !state.menuOpen })),
  setInquiryOpen: (open) => set({ inquiryOpen: open, menuOpen: false }),
  setHeaderTheme: (theme) => set({ headerTheme: theme }),
  setColorMode: (mode) => {
    applyMode(mode);
    try {
      localStorage.setItem(THEME_KEY, mode);
    } catch {
      /* ignore */
    }
    set({ colorMode: mode });
  },
  toggleColorMode: () => {
    const next = get().colorMode === "dark" ? "light" : "dark";
    get().setColorMode(next);
  },
}));

export { THEME_KEY };
