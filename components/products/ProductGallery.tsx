"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn, ZoomOut } from "lucide-react";

export function ProductGallery({ images, name }: { images: string[]; name: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoomEnabled, setZoomEnabled] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });
  const containerRef = useRef<HTMLDivElement>(null);

  const zoomFactor = 3;
  const lensSize = 50;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!zoomEnabled || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPosition({ x, y });
  };

  return (
    <div className="space-y-4">
      <div
        className="relative"
        onMouseLeave={() => { if (zoomEnabled) setZoomEnabled(false); }}
      >
        <div
          ref={containerRef}
          className={`relative aspect-square overflow-hidden rounded-lg bg-neutral-100 ${
            zoomEnabled ? "cursor-crosshair" : "cursor-default"
          }`}
          onMouseMove={handleMouseMove}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <Image
                src={images[activeIndex]}
                alt={`${name} - Image ${activeIndex + 1}`}
                fill
                className="object-cover"
                priority={activeIndex === 0}
              />
            </motion.div>
          </AnimatePresence>

          {zoomEnabled && (
            <div
              className="absolute border-2 border-carbon-accent/70 bg-carbon-accent/10 pointer-events-none will-change-transform"
              style={{
                width: `${lensSize / zoomFactor}%`,
                height: `${lensSize / zoomFactor}%`,
                left: 0,
                top: 0,
                transform: `translate(${Math.min(Math.max((zoomPosition.x / 100) * (containerRef.current?.clientWidth ?? 0) - (containerRef.current?.clientWidth ?? 0) * (lensSize / zoomFactor / 100) / 2, 0), (containerRef.current?.clientWidth ?? 0) * (1 - lensSize / zoomFactor / 100))}px, ${Math.min(Math.max((zoomPosition.y / 100) * (containerRef.current?.clientHeight ?? 0) - (containerRef.current?.clientHeight ?? 0) * (lensSize / zoomFactor / 100) / 2, 0), (containerRef.current?.clientHeight ?? 0) * (1 - lensSize / zoomFactor / 100))}px)`,
              }}
            />
          )}
        </div>

        <button
          onClick={() => setZoomEnabled(!zoomEnabled)}
          className={`absolute top-3 right-3 z-20 p-2.5 rounded-full shadow-sm transition-colors ${
            zoomEnabled
              ? "bg-carbon-accent text-white"
              : "bg-white/90 text-neutral-600 hover:bg-white"
          }`}
          aria-label={zoomEnabled ? "Disable zoom" : "Enable zoom"}
        >
          {zoomEnabled ? <ZoomOut className="w-5 h-5" /> : <ZoomIn className="w-5 h-5" />}
        </button>

        {zoomEnabled && (
          <div className="absolute top-0 left-[calc(100%+16px)] w-72 h-72 rounded-lg overflow-hidden border border-neutral-200 shadow-lg bg-neutral-100 hidden lg:block">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `url(${images[activeIndex]})`,
                backgroundSize: `${zoomFactor * 100}%`,
                backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                backgroundRepeat: "no-repeat",
              }}
            />
            <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/60 text-white text-xs rounded-md">
              {zoomFactor}x Zoom
            </div>
          </div>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-colors cursor-pointer ${
                i === activeIndex ? "border-carbon-accent" : "border-neutral-200"
              }`}
            >
              <Image
                src={img}
                alt={`${name} thumbnail ${i + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
