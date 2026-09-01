"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { services } from "@/content/services";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function Practices() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      const rows = root.current?.querySelectorAll("[data-practice]");
      if (!rows?.length || reduced) return;
      gsap.from(rows, {
        y: 48,
        opacity: 0,
        stagger: 0.08,
        ease: "ember",
        scrollTrigger: {
          trigger: root.current,
          start: "top 75%",
          end: "top 30%",
          scrub: 0.6,
        },
      });
    },
    { dependencies: [reduced], scope: root },
  );

  const current = services[active];

  return (
    <section ref={root} id="practices" className="px-5 py-24 md:px-10 md:py-32 lg:px-16">
      <p className="font-display text-[11px] uppercase tracking-[0.28em] text-muted">
        03 — Services
      </p>
      <h2 className="mt-3 max-w-3xl font-display text-4xl uppercase tracking-tighter md:text-6xl">
        We&apos;re not another RevOps agency selling a CRM cleanup.
      </h2>
      <p className="mt-5 max-w-xl text-sm leading-7 text-muted">
        Plenty of good firms do org alignment and data hygiene. We specialize in the unglamorous,
        high-value work they don&apos;t: making the AI already inside your revenue stack reliable,
        evaluated, and governed — so revenue goes up and the operating cost of running RevOps goes
        down.
      </p>
      <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div>
          {services.map((service, i) => {
            const open = active === i;
            return (
              <button
                key={service.id}
                type="button"
                data-practice
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                className="block w-full border-t border-line py-6 text-left last:border-b"
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="font-display text-[11px] uppercase tracking-[0.2em] text-muted">
                    {service.number}
                  </span>
                  <h3 className="flex-1 font-display text-3xl uppercase tracking-[-0.04em] md:text-5xl">
                    {service.title}
                  </h3>
                  <span className="font-display text-xl">{open ? "–" : "+"}</span>
                </div>
                <div
                  className="grid transition-[grid-template-rows] duration-500 ease-ember"
                  style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-xl pt-4 text-sm leading-7 text-muted">
                      {service.description}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
        <div className="relative aspect-4/5 overflow-hidden bg-teal-deep">
          <Image
            key={current.id}
            src={current.image}
            alt={current.imageAlt}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
