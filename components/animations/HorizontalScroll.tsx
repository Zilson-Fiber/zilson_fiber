"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface HorizontalScrollProps {
  children: React.ReactNode;
  className?: string;
}

export function HorizontalScroll({ children, className = "" }: HorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    const progress = progressRef.current;
    if (!container || !track) return;

    const panels = track.children;
    const totalWidth = track.scrollWidth;
    const viewportWidth = window.innerWidth;
    const scrollDistance = totalWidth - viewportWidth;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${scrollDistance}`,
          pin: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      });

      tl.to(track, {
        x: -scrollDistance,
        ease: "none",
      });

      if (progress) {
        tl.to(
          progress,
          {
            scaleX: 1,
            ease: "none",
          },
          0
        );
      }

      // Subtle zoom-out on each panel image
      Array.from(panels).forEach((panel) => {
        const img = panel.querySelector("[data-parallax-img]");
        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.15 },
            {
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: panel as Element,
                containerAnimation: tl,
                start: "left right",
                end: "right left",
                scrub: true,
              },
            }
          );
        }
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={`horizontal-scroll-container relative ${className}`}>
      <div ref={trackRef} className="horizontal-scroll-track">
        {children}
      </div>
      {/* Progress bar */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[120px] h-[2px] bg-white/10 rounded-full overflow-hidden z-10">
        <div
          ref={progressRef}
          className="h-full bg-white/60 origin-left"
          style={{ transform: "scaleX(0)" }}
        />
      </div>
    </div>
  );
}
