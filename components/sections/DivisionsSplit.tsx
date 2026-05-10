"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const divisions = [
  {
    id: "carbon",
    label: "Carbon Fiber Division",
    headline: "High Performance,\nLightweight Solutions",
    description:
      "Ultra-lightweight carbon fiber composites for aerospace, motorsport, and advanced manufacturing. From 10g/m² surface mats to complex hybrid structures.",
    image: "/images/carbon-fiber/carbon_bg.webp",
    href: "/carbon-fiber",
    accent: "text-cyan-600",
  },
  {
    id: "glass",
    label: "Glass Fiber Division",
    headline: "Reliable, Cost-Effective\nReinforcements",
    description:
      "Insulation, corrosion-resistant materials for wind energy, construction, and industrial filtration. Tissue mats, woven cloth, and composite reinforcements.",
    image: "/images/glass-fiber/glass_bg.webp",
    href: "/glass-fiber",
    accent: "text-emerald-600",
  },
];

export function DivisionsSplit() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const blocks = section.querySelectorAll("[data-division]");

      blocks.forEach((block) => {
        const img = block.querySelector("[data-division-img]");
        const parallax = block.querySelector("[data-division-parallax]");
        const content = block.querySelector("[data-division-content]");
        const contentChildren = content?.children;

        if (img) {
          gsap.fromTo(
            img,
            { clipPath: "circle(0% at 50% 50%)" },
            {
              clipPath: "circle(75% at 50% 50%)",
              ease: "none",
              scrollTrigger: {
                trigger: block,
                start: "top 70%",
                end: "center center",
                scrub: 0.8,
              },
            }
          );
        }

        if (parallax) {
          gsap.to(parallax, {
            yPercent: -15,
            ease: "none",
            scrollTrigger: {
              trigger: block,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.9,
            },
          });
        }

        if (contentChildren) {
          gsap.fromTo(
            Array.from(contentChildren),
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.12,
              ease: "power3.out",
              scrollTrigger: {
                trigger: block,
                start: "40% 70%",
                once: true,
              },
            }
          );
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white section-padding">
      <div className="container-wide space-y-32 sm:space-y-48">
        {divisions.map((div, i) => (
          <div
            key={div.id}
            data-division
            className={`grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 items-center ${
              i % 2 === 1 ? "lg:direction-rtl" : ""
            }`}
            style={i % 2 === 1 ? { direction: "rtl" } : undefined}
          >
            {/* Image */}
            <div className="lg:col-span-3 relative aspect-[4/3] overflow-hidden rounded-xl" style={{ direction: "ltr" }}>
              <div data-division-img className="absolute inset-0 clip-hidden-circle">
                <div data-division-parallax className="absolute inset-x-0 -top-[15%] -bottom-[15%]">
                  <Image
                    src={div.image}
                    alt={div.label}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div data-division-content className="lg:col-span-2 space-y-6" style={{ direction: "ltr" }}>
              <p className={`type-caption ${div.accent} opacity-0`}>{div.label}</p>
              <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 whitespace-pre-line opacity-0">{div.headline}</h2>
              <p className="text-neutral-500 leading-relaxed opacity-0">{div.description}</p>
              <Link
                href={div.href}
                className={`inline-flex items-center gap-2 text-sm font-medium ${div.accent} hover:gap-3 transition-all duration-300 opacity-0`}
              >
                Explore Products <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
