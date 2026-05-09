"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Wind, Building2, Filter, Train, Anchor } from "lucide-react";

const applications = [
  {
    slug: "wind-energy",
    icon: Wind,
    title: "Wind Energy",
    description:
      "High-performance fiberglass reinforcements for turbine blades, nacelle covers, and structural components. Our multiaxial and composite mats deliver superior strength-to-weight ratios for demanding wind energy applications.",
    products: ["Biaxial Stitched Mat", "Multiaxial Stitched Mat", "Unidirectional Cloth"],
  },
  {
    slug: "construction",
    icon: Building2,
    title: "Construction & Building",
    description:
      "Durable glass fiber materials for insulation, waterproofing membranes, wall coverings, and structural reinforcement. Our tissue mats and cloth provide fire retardancy, corrosion resistance, and long-term durability.",
    products: ["Surface Tissue Mat", "Black Tissue Facing", "Roofing Tissue Mat"],
  },
  {
    slug: "industrial-filtration",
    icon: Filter,
    title: "Industrial Filtration",
    description:
      "Specialized fiber materials for high-temperature filtration, chemical processing, and environmental protection. Our needled mats and specialty fibers withstand extreme conditions.",
    products: ["Basalt Fiber Mat", "Knitted Stitched Mat", "Chopped Strand Mat"],
  },
  {
    slug: "transportation",
    icon: Train,
    title: "Transportation & Rail",
    description:
      "Lightweight composite materials for high-speed rail interiors, automotive components, and transportation infrastructure. Our PP core sandwich mats meet strict safety and performance standards.",
    products: ["PP Core Sandwich Mat", "Composite Mat", "Woven Roving"],
  },
  {
    slug: "marine",
    icon: Anchor,
    title: "Marine & Corrosion Protection",
    description:
      "Corrosion-resistant fiberglass solutions for shipbuilding, chemical storage tanks, and marine infrastructure. Our materials provide long-term protection in harsh environments.",
    products: ["Woven Roving", "Chopped Strand Mat", "Surface Tissue Mat"],
  },
];

export default function GlassApplicationsPage() {
  return (
    <>
      <section className="pt-32 pb-12 bg-gradient-to-b from-brand-700 to-brand-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-xs font-semibold text-glass-accent uppercase tracking-widest">
              Glass Fiber Division
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-white">
              Application Industries
            </h1>
            <p className="mt-3 text-brand-200 max-w-xl mx-auto">
              Our glass fiber materials power critical applications across
              diverse industries worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {applications.map((app, i) => (
            <motion.div
              key={app.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-neutral-100"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-xl bg-glass-accent/10 flex items-center justify-center flex-shrink-0">
                  <app.icon className="w-7 h-7 text-glass-accent" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-neutral-900">{app.title}</h2>
                  <p className="mt-2 text-neutral-600 leading-relaxed">
                    {app.description}
                  </p>
                  <div className="mt-4">
                    <p className="text-sm font-medium text-neutral-500 mb-2">
                      Recommended Products:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {app.products.map((p) => (
                        <span
                          key={p}
                          className="px-3 py-1 bg-glass-accent/10 text-neutral-700 text-sm rounded-full"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-glass-accent hover:underline"
                  >
                    Inquire about solutions <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
