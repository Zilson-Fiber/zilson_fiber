"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const stats = [
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Countries Exported" },
  { value: 100, suffix: "%", label: "Custom Support" },
  { value: 7, suffix: "", label: "Product Lines" },
];

export function StatsBar() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelector("[data-stats-row]"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            once: true,
          },
        }
      );

      const counters = section.querySelectorAll("[data-counter]");
      counters.forEach((el) => {
        const target = parseInt(el.getAttribute("data-counter") || "0");
        const suffix = el.getAttribute("data-suffix") || "";
        const obj = { value: 0 };

        gsap.to(obj, {
          value: target,
          duration: 2.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
          onUpdate: () => {
            el.textContent = Math.round(obj.value) + suffix;
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-neutral-50 py-24 sm:py-32">
      <div className="container-wide">
        <div data-stats-row className="opacity-0">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`text-center py-8 lg:py-0 ${
                  i < stats.length - 1 ? "lg:border-r border-neutral-200" : ""
                } ${i < 2 ? "border-b lg:border-b-0 border-neutral-200" : ""}`}
              >
                <span
                  data-counter={stat.value}
                  data-suffix={stat.suffix}
                  className="text-3xl sm:text-4xl font-semibold text-neutral-900 block"
                >
                  0{stat.suffix}
                </span>
                <span className="text-xs uppercase tracking-wider text-neutral-500 block mt-3">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
