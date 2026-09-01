"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { products } from "@/content/products";
import { useIsDesktop } from "@/hooks/useMedia";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function ProductsReel() {
  const root = useRef<HTMLElement>(null);
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const desktop = useIsDesktop();
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      const section = root.current;
      const frame = viewport.current;
      const rail = track.current;
      if (!section || !frame || !rail || reduced || !desktop) return;

      const distance = () => Math.max(0, rail.scrollWidth - frame.clientWidth);

      gsap.to(rail, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${distance()}`,
          scrub: 0.75,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    },
    { dependencies: [desktop, reduced], scope: root },
  );

  return (
    <section
      ref={root}
      id="products"
      className={desktop && !reduced ? "overflow-hidden bg-bg" : "bg-bg py-16"}
    >
      <div className={desktop && !reduced ? "flex h-svh flex-col" : ""}>
        <div className="px-5 pb-6 pt-20 md:px-10 md:pt-24 lg:px-16">
          <p className="font-display text-[11px] uppercase tracking-[0.28em] text-muted">
            05 — Products · Coming soon
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl uppercase tracking-tighter md:text-6xl">
            The reliability stack, productized.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-muted md:max-w-2xl md:text-base md:leading-8">
            The tools we use inside engagements, on their way to becoming products. Unnamed on
            purpose — we ship names when we ship software. Services above are live today.
          </p>
        </div>
        <div
          ref={viewport}
          className={
            desktop && !reduced
              ? "min-h-0 flex-1 overflow-hidden pb-10"
              : "px-5 md:px-10 lg:px-16"
          }
        >
          <div
            ref={track}
            className={
              desktop && !reduced
                ? "flex h-full w-max gap-5 px-5 md:px-10 lg:px-16"
                : "grid grid-cols-1 gap-5 sm:grid-cols-2"
            }
          >
            {products.map((product) => (
              <article
                key={product.id}
                className={
                  desktop && !reduced
                    ? "relative h-full w-[min(38vw,28rem)] shrink-0 overflow-hidden"
                    : "relative aspect-3/4 overflow-hidden"
                }
              >
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 38vw, 100vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/15 to-transparent" />
                <div className="absolute right-4 top-4 border border-white/40 px-3 py-1.5 font-display text-[10px] uppercase tracking-[0.22em] text-white/90 backdrop-blur-sm">
                  Coming soon
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 text-white md:p-6">
                  <p className="font-display text-[11px] uppercase tracking-[0.2em] text-white/60">
                    {product.focus}
                  </p>
                  <h3 className="mt-2 font-display text-3xl uppercase tracking-[-0.04em] md:text-4xl">
                    {product.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-white/70">
                    {product.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
