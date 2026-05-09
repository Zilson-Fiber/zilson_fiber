"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { allGlassFiberCategories } from "@/data/glass-fiber";

export default function GlassFiberPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-glass-50" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-glass-accent/5 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold text-glass-accent uppercase tracking-widest">
              Glass Fiber Division
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-neutral-900">
              Reliable Glass Fiber Materials
            </h1>
            <p className="mt-4 text-lg text-neutral-500 max-w-2xl">
              Cost-effective, corrosion-resistant fiberglass solutions for wind
              energy, construction, transportation, and industrial filtration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-10">
            Product Categories
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allGlassFiberCategories.map((category, i) => (
              <motion.div
                key={category.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  href={`/glass-fiber/products/${category.slug}`}
                  className="group block h-full"
                >
                  <div className="h-full bg-white rounded-2xl overflow-hidden border border-neutral-100 hover:shadow-lg transition-all">
                    <div className="relative h-48 bg-neutral-100">
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-glass-accent transition-colors">
                        {category.name}
                      </h3>
                      <p className="mt-2 text-sm text-neutral-500 line-clamp-2">
                        {category.description}
                      </p>
                      <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-glass-accent">
                        View Products <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white">
            Looking for Custom Glass Fiber Solutions?
          </h2>
          <p className="mt-3 text-brand-200">
            We offer custom weights, widths, and binder formulations to match your process.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-6 px-8 py-3 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-full transition-colors"
          >
            Get a Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
