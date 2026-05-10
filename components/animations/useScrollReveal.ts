"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealOptions {
  y?: number;
  x?: number;
  duration?: number;
  stagger?: number;
  start?: string;
  ease?: string;
  batch?: boolean;
}

export function useScrollReveal(options: ScrollRevealOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const {
    y = 50,
    x = 0,
    duration = 0.8,
    stagger = 0.1,
    start = "top 85%",
    ease = "power3.out",
    batch = false,
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      if (batch) {
        const children = el.querySelectorAll("[data-reveal]");
        if (children.length === 0) return;

        gsap.set(children, { opacity: 0, y, x });

        ScrollTrigger.batch(children, {
          onEnter: (elements) => {
            gsap.to(elements, {
              opacity: 1,
              y: 0,
              x: 0,
              duration,
              stagger,
              ease,
            });
          },
          start,
        });
      } else {
        const targets = el.querySelectorAll("[data-reveal]");
        const elements = targets.length > 0 ? targets : [el];

        gsap.fromTo(
          elements,
          { opacity: 0, y, x },
          {
            opacity: 1,
            y: 0,
            x: 0,
            duration,
            stagger,
            ease,
            scrollTrigger: {
              trigger: el,
              start,
              once: true,
            },
          }
        );
      }
    }, el);

    return () => ctx.revert();
  }, [y, x, duration, stagger, start, ease, batch]);

  return ref;
}
