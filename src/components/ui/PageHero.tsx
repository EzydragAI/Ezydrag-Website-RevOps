import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: ReactNode;
  lede: ReactNode;
}) {
  return (
    <header className="border-b border-line px-5 pb-16 pt-32 md:px-10 md:pb-20 md:pt-40 lg:px-16">
      <p className="font-display text-[11px] uppercase tracking-[0.28em] text-muted">{eyebrow}</p>
      <h1 className="mt-6 max-w-4xl display-xl text-5xl md:text-7xl">{title}</h1>
      <div className="mt-6 max-w-xl text-sm leading-7 text-muted md:text-base">{lede}</div>
    </header>
  );
}
