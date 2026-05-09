"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { allCarbonFiberCategories } from "@/data/carbon-fiber";

export default function CarbonFiberPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-carbon-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-carbon-primary to-neutral-800" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-carbon-accent/5 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold text-carbon-accent uppercase tracking-widest">
              Carbon Fiber Division
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-white">
              High-Performance Carbon Fiber Materials
            </h1>
            <p className="mt-4 text-lg text-neutral-400 max-w-2xl">
              Lightweight, ultra-strong carbon fiber solutions for aerospace,
              motorsport, military defense, and advanced manufacturing industries.
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
            {allCarbonFiberCategories.map((category, i) => (
              <motion.div
                key={category.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  href={`/carbon-fiber/products/${category.slug}`}
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
                      <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-carbon-accent transition-colors">
                        {category.name}
                      </h3>
                      <p className="mt-2 text-sm text-neutral-500 line-clamp-2">
                        {category.description}
                      </p>
                      <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-carbon-accent">
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
      <section className="py-16 bg-carbon-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white">
            Need a Custom Carbon Fiber Solution?
          </h2>
          <p className="mt-3 text-neutral-400">
            Our engineers can recommend the optimal material for your application.
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
