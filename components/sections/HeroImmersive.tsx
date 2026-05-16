"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function HeroImmersive() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollMobileRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const glassLayerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Desktop: mouse-follow mask
  useEffect(() => {
    if (isMobile) return;
    const container = imageContainerRef.current;
    const glassLayer = glassLayerRef.current;
    if (!container || !glassLayer) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      glassLayer.style.maskImage = `radial-gradient(circle 160px at ${x}px ${y}px, black 0%, black 50%, transparent 100%)`;
      glassLayer.style.webkitMaskImage = `radial-gradient(circle 160px at ${x}px ${y}px, black 0%, black 50%, transparent 100%)`;
      glassLayer.style.opacity = "1";
    };

    const handleMouseLeave = () => {
      glassLayer.style.opacity = "0";
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isMobile]);

  // Mobile: auto breathing animation
  useEffect(() => {
    if (!isMobile) return;
    const glassLayer = glassLayerRef.current;
    if (!glassLayer) return;

    const tl = gsap.timeline({ repeat: -1 });

    tl.to(glassLayer, {
      maskImage: "radial-gradient(circle 60% at 50% 50%, black 0%, transparent 100%)",
      webkitMaskImage: "radial-gradient(circle 60% at 50% 50%, black 0%, transparent 100%)",
      opacity: 1,
      duration: 5,
      ease: "power2.inOut",
    })
      .to(glassLayer, {
        maskImage: "radial-gradient(circle 10% at 50% 50%, black 0%, transparent 100%)",
        webkitMaskImage: "radial-gradient(circle 10% at 50% 50%, black 0%, transparent 100%)",
        opacity: 0.3,
        duration: 5,
        ease: "power2.inOut",
      })
      .to(glassLayer, {
        maskImage: "radial-gradient(circle 50% at 30% 70%, black 0%, transparent 100%)",
        webkitMaskImage: "radial-gradient(circle 50% at 30% 70%, black 0%, transparent 100%)",
        opacity: 1,
        duration: 4,
        ease: "power2.inOut",
      })
      .to(glassLayer, {
        maskImage: "radial-gradient(circle 5% at 30% 70%, black 0%, transparent 100%)",
        webkitMaskImage: "radial-gradient(circle 5% at 30% 70%, black 0%, transparent 100%)",
        opacity: 0,
        duration: 4,
        ease: "power2.inOut",
      });

    return () => { tl.kill(); };
  }, [isMobile]);

  // Entry animations + scroll parallax
  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        tagRef.current,
        { opacity: 0, clipPath: "inset(0 100% 0 0)" },
        { opacity: 1, clipPath: "inset(0 0% 0 0)", duration: 1 }
      )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 1.2 },
          "-=0.5"
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          imageContainerRef.current,
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 1.2 },
          "-=1"
        )
        .fromTo(
          scrollRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          "-=0.2"
        );

      // Mobile arrow fade in
      if (scrollMobileRef.current) {
        tl.fromTo(
          scrollMobileRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          "-=0.6"
        );
      }

      // Content fades out on scroll
      gsap.to(content, {
        y: -100,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-svh flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-white" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(6,182,212,0.06),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_60%,rgba(16,185,129,0.04),transparent_60%)]" />
      </div>

      {/* Content */}
      <div ref={contentRef} className="relative z-10 container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8 lg:gap-16 items-center lg:min-h-screen pt-32 pb-16 lg:pt-16 lg:pb-0">
          {/* Left: Text */}
          <div>
            <p
              ref={tagRef}
              className="type-caption text-text-muted mb-6 opacity-0"
            >
              Composite Materials Expert
            </p>
            <h1
              ref={titleRef}
              className="type-display opacity-0"
            >
              Engineered for
              <br />
              <span className="hero-gradient-text">
                What Comes Next
              </span>
            </h1>
            <p
              ref={subtitleRef}
              className="type-body-lg max-w-[500px] mt-8 opacity-0"
            >
              From carbon fiber composites to fiberglass reinforcements —
              high-performance materials for the world&apos;s most demanding industries.
            </p>
          </div>

          {/* Right: Dual-layer Möbius image */}
          <div
            ref={imageContainerRef}
            className="relative aspect-square w-full max-w-[75%] mx-auto lg:max-w-none lg:mx-0 opacity-0"
          >
            {/* Carbon fiber layer (always visible) */}
            <div
              className="absolute inset-0 bg-center bg-no-repeat bg-contain"
              style={{ backgroundImage: "url(/images/hero/carbon_hero.png)" }}
            />

            {/* Glass fiber layer (revealed by mask) */}
            <div
              ref={glassLayerRef}
              className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-0 transition-opacity duration-300"
              style={{ backgroundImage: "url(/images/hero/glass_hero.png)" }}
            />

            {/* Hint text */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden lg:block">
              <p className="type-mono text-neutral-400 text-center">
                hover to reveal glass fiber
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - desktop: mouse wheel, mobile: arrow */}
      <div
        ref={scrollRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 z-20 hidden lg:block"
      >
        <div className="flex w-5 h-9 border border-black/20 rounded-full justify-center items-start overflow-hidden">
          <div className="w-1 h-2 bg-black/40 rounded-full mt-2" />
        </div>
      </div>
      {/* Mobile arrow - stays in hero */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 lg:hidden"
        ref={scrollMobileRef}
      >
        <div className="flex flex-col items-center animate-[bounce_2s_infinite]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-black/30">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
