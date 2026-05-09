"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTABanner() {
  return (
    <section className="py-24 bg-brand-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Need a Custom Fiber Solution?
          </h2>
          <p className="mt-4 text-lg text-brand-200 max-w-xl mx-auto">
            Tell us your requirements and our engineers will provide a tailored
            material recommendation within 24 hours.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 mt-8 px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-full transition-colors"
          >
            Get a Free Quote
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
