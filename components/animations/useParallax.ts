"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxOptions {
  speed?: number;
  direction?: "y" | "x";
  scrub?: number;
}

export function useParallax(options: ParallaxOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const { speed = -50, direction = "y", scrub = 0.9 } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const isMobile =
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 768px)").matches;
    const factor = isMobile ? 0.5 : 1;

    const ctx = gsap.context(() => {
      const props: gsap.TweenVars = {
        [direction]: speed * factor,
        ease: "none",
        scrollTrigger: {
          trigger: el.parentElement || el,
          start: "top bottom",
          end: "bottom top",
          scrub,
        },
      };

      gsap.fromTo(el, { [direction]: 0 }, props);
    }, el);

    return () => ctx.revert();
  }, [speed, direction, scrub]);

  return ref;
}
