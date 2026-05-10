"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  {
    number: "01",
    title: "Custom Engineering",
    description: "Tailored fiber solutions from 10g/m² to 1200g/m², any specification.",
  },
  {
    number: "02",
    title: "Global Logistics",
    description: "Dual production bases, 240km from Shanghai Port. Exporting to 50+ countries.",
  },
  {
    number: "03",
    title: "Quality Certified",
    description: "ISO 9001, 14001, 45001 certified. 15+ patents in composite materials.",
  },
];

export function WhyPartnerNew() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const headline = section.querySelector("[data-why-headline]");
      if (headline) {
        gsap.fromTo(
          headline,
          { clipPath: "inset(0 100% 0 0)" },
          {
            clipPath: "inset(0 0% 0 0)",
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headline,
              start: "top 80%",
              once: true,
            },
          }
        );
      }

      const support = section.querySelector("[data-why-support]");
      if (support) {
        gsap.fromTo(
          support,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: support,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      const blocks = section.querySelectorAll("[data-capability]");
      gsap.fromTo(
        blocks,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section.querySelector("[data-capabilities]"),
            start: "top 80%",
            once: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-neutral-50 section-padding">
      <div className="container-wide">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-24">
          <h2 data-why-headline className="text-2xl sm:text-3xl font-semibold text-neutral-900 clip-hidden-left">
            Precision at
            <br />
            every scale.
          </h2>
          <p data-why-support className="text-neutral-500 leading-relaxed self-end opacity-0">
            With 15+ years of manufacturing expertise and partnerships with
            leading research institutions, we deliver composite materials that
            meet the most demanding specifications — on time, every time.
          </p>
        </div>

        {/* Capabilities */}
        <div data-capabilities className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-200">
          {capabilities.map((cap) => (
            <div
              key={cap.number}
              data-capability
              className="bg-neutral-50 p-8 sm:p-10 opacity-0"
            >
              <span className="font-mono text-xs text-neutral-400 block mb-4">
                {cap.number}
              </span>
              <h3 className="text-lg font-medium text-neutral-900 mb-3">
                {cap.title}
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed">{cap.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
