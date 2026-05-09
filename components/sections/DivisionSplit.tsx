"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function DivisionSplit() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">
            Two Divisions, One Mission
          </h2>
          <p className="mt-4 text-lg text-neutral-500 max-w-2xl mx-auto">
            Specialized expertise in both carbon fiber and glass fiber materials,
            serving diverse industries worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Carbon Fiber */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/carbon-fiber" className="group block">
              <div className="relative overflow-hidden rounded-2xl bg-carbon-primary h-80 flex flex-col justify-end transition-transform group-hover:scale-[1.02]">
                <Image
                  src="/images/carbon-fiber/carbon_bg.webp"
                  alt="Carbon Fiber Materials"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                <div className="relative z-10 p-10">
                  <span className="text-xs font-semibold text-carbon-accent uppercase tracking-widest">
                    High Performance
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-2">
                    Carbon Fiber Division
                  </h3>
                  <p className="text-neutral-300 mt-2 text-sm">
                    Lightweight, high-strength materials for aerospace, motorsport,
                    and advanced manufacturing.
                  </p>
                  <span className="inline-flex items-center gap-1 text-carbon-accent text-sm font-medium mt-4 group-hover:gap-2 transition-all">
                    Explore Products <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Glass Fiber */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/glass-fiber" className="group block">
              <div className="relative overflow-hidden rounded-2xl bg-neutral-50 h-80 flex flex-col justify-end transition-transform group-hover:scale-[1.02]">
                <Image
                  src="/images/glass-fiber/glass_bg.webp"
                  alt="Glass Fiber Materials"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/15 to-transparent" />
                <div className="relative z-10 p-10">
                  <span className="text-xs font-semibold text-glass-accent uppercase tracking-widest">
                    Reliable & Cost-effective
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-2">
                    Glass Fiber Division
                  </h3>
                  <p className="text-neutral-300 mt-2 text-sm">
                    Insulation, corrosion-resistant materials for wind energy,
                    construction, and industrial applications.
                  </p>
                  <span className="inline-flex items-center gap-1 text-glass-accent text-sm font-medium mt-4 group-hover:gap-2 transition-all">
                    Explore Products <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
