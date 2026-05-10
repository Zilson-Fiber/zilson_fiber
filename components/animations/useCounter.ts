"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CounterOptions {
  target: number;
  duration?: number;
  suffix?: string;
  start?: string;
}

export function useCounter(options: CounterOptions) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const { target, duration = 2, suffix = "", start = "top 80%" } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obj = { value: 0 };

    const ctx = gsap.context(() => {
      gsap.to(obj, {
        value: target,
        duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start,
          once: true,
        },
        onUpdate: () => setValue(Math.round(obj.value)),
      });
    }, el);

    return () => ctx.revert();
  }, [target, duration, start]);

  return { ref, value, display: `${value}${suffix}` };
}
