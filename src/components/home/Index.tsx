"use client";

import { useState } from "react";
import { faqs } from "@/content/story";

export function Index() {
  const [active, setActive] = useState(0);
  const current = faqs[active];

  return (
    <section id="index" className="px-5 py-24 md:px-10 md:py-32 lg:px-16">
      <p className="font-display text-[11px] uppercase tracking-[0.28em] text-muted">
        07 — Index
      </p>
      <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <ol>
          {faqs.map((item, i) => (
            <li key={item.q} className="border-t border-line last:border-b">
              <button
                type="button"
                onClick={() => setActive(i)}
                className="flex w-full items-baseline gap-4 py-5 text-left"
              >
                <span className="font-display text-[11px] uppercase tracking-[0.2em] text-muted">
                  0{i + 1}
                </span>
                <span
                  className={
                    active === i
                      ? "font-display text-2xl uppercase tracking-[-0.04em]"
                      : "text-sm text-muted"
                  }
                >
                  {item.q}
                </span>
              </button>
            </li>
          ))}
        </ol>
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="font-display text-[11px] uppercase tracking-[0.22em] text-muted">
            Answer
          </p>
          <p className="mt-6 max-w-xl text-2xl leading-snug md:text-3xl">{current.a}</p>
        </div>
      </div>
    </section>
  );
}
