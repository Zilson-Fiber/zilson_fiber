"use client";

import Image from "next/image";
import { HorizontalScroll } from "@/components/animations/HorizontalScroll";

const showcaseItems = [
  {
    image: "/images/carbon-fiber/05-carbon-fiber-mat/06-carbon-needled-mat/carbon-needled-mat-01.jpg",
    label: "Carbon Fiber Mat",
    description: "Ultra-lightweight nonwoven solutions",
  },
  {
    image: "/images/glass-fiber/02-fiberglass-cloth/01-plain-weave/200g-plain-weave-cloth-01.jpg",
    label: "Fiberglass Cloth",
    description: "Precision-woven reinforcements",
  },
  {
    image: "/images/carbon-fiber/05-carbon-fiber-mat/04-carbon-glass-hybrid-mat/30g-carbon-glass-hybrid-mat-01.jpg",
    label: "Hybrid Composites",
    description: "Engineered multi-material systems",
  },
  {
    image: "/images/glass-fiber/01-fiberglass-tissue-mat/03-colored-tissue/80g-yellow-tissue-01.jpg",
    label: "Specialty Materials",
    description: "Custom-engineered fiber solutions",
  },
  {
    image: "/images/glass-fiber/03-fiberglass-composite-mat/07-mesh-composite-mat/mesh-composite-mat-01.jpg",
    label: "Composite Mat",
    description: "Multi-axial structural reinforcement",
  },
];

export function MaterialShowcase() {
  return (
    <section className="relative bg-white">
      <HorizontalScroll>
        {showcaseItems.map((item, i) => (
          <div key={i} className="horizontal-scroll-panel relative">
            <Image
              src={item.image}
              alt={item.label}
              fill
              className="object-cover"
              data-parallax-img
              sizes="100vw"
              priority={i === 0}
            />
            {/* Light overlay for text readability */}
            <div className="absolute inset-0 bg-white/60" />
            {/* Content */}
            <div className="absolute bottom-16 left-0 w-full container-wide z-10">
              <p className="type-caption text-text-muted mb-3">
                {String(i + 1).padStart(2, "0")} / {String(showcaseItems.length).padStart(2, "0")}
              </p>
              <h2 className="type-headline">{item.label}</h2>
              <p className="type-body-lg mt-2 max-w-[400px]">{item.description}</p>
            </div>
          </div>
        ))}
      </HorizontalScroll>
    </section>
  );
}
