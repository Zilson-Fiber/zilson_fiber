"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { allGlassFiberCategories } from "@/data/glass-fiber";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

export default function GlassFiberPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-36 pb-16">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="type-caption text-glass-accent">
              Glass Fiber Division
            </p>
            <h1 className="text-3xl sm:text-4xl font-semibold text-neutral-900 mt-3">
              Reliable Glass Fiber Materials
            </h1>
            <p className="text-neutral-500 mt-4 max-w-2xl leading-relaxed">
              Cost-effective, corrosion-resistant fiberglass solutions for wind
              energy, construction, transportation, and industrial filtration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="pb-24">
        <div className="container-wide">
          <p className="type-caption text-neutral-400 mb-8">Product Categories</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {allGlassFiberCategories.map((category, i) => (
              <motion.div
                key={category.slug}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Link
                  href={`/glass-fiber/products/${category.slug}`}
                  className="group block h-full"
                >
                  <div className="h-full bg-white border border-neutral-100 rounded-lg hover:border-neutral-200 overflow-hidden transition-colors cursor-pointer">
                    <div className="relative h-48 bg-neutral-100 overflow-hidden">
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-sm font-medium text-neutral-900 group-hover:text-glass-accent transition-colors">
                        {category.name}
                      </h3>
                      <p className="mt-2 text-sm text-neutral-500 line-clamp-2 leading-relaxed">
                        {category.description}
                      </p>
                      <span className="inline-flex items-center gap-1 mt-4 text-xs font-medium text-glass-accent">
                        View Products{" "}
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="container-wide"><div className="h-px bg-neutral-100" /></div>

      {/* CTA */}
      <section className="py-24">
        <div className="container-wide text-center max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900">
            Looking for Custom Glass Fiber Solutions?
          </h2>
          <p className="text-neutral-500 mt-4 leading-relaxed">
            We offer custom weights, widths, and binder formulations to match your
            process.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 mt-8 px-7 py-3 bg-accent-500 hover:bg-accent-600 text-white text-sm font-semibold rounded-full transition-colors cursor-pointer"
          >
            Get a Quote
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
