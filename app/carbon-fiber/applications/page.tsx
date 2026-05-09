"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Plane, Car, Zap, Shield, Factory } from "lucide-react";

const applications = [
  {
    slug: "aerospace",
    icon: Plane,
    title: "Aerospace & Aviation",
    description:
      "Ultra-lightweight carbon fiber composites for structural components, interior panels, and advanced aerospace applications. Our materials meet the strictest weight and performance requirements.",
    products: ["Carbon Fiber Surface Mat 10g", "Carbon Fiber Needled Mat", "Carbon Fiber Yarn"],
  },
  {
    slug: "motorsport",
    icon: Car,
    title: "Motorsport & Automotive",
    description:
      "High-performance carbon fiber materials for body panels, structural reinforcement, and lightweight components. Achieve maximum strength with minimum weight for competitive advantage.",
    products: ["Carbon-Glass Hybrid Woven Cloth", "Carbon Fiber Twill Cloth", "Carbon Fiber Plain Cloth"],
  },
  {
    slug: "new-energy",
    icon: Zap,
    title: "New Energy & Fuel Cells",
    description:
      "Advanced carbon fiber materials for hydrogen fuel cell GDL, battery separators, and energy storage systems. Our ultra-thin mats provide optimal conductivity and durability.",
    products: ["Carbon Fiber Surface Mat 10g", "Carbon Fiber Surface Mat 20g", "Carbon-Glass Hybrid Mat"],
  },
  {
    slug: "military-defense",
    icon: Shield,
    title: "Military & Defense",
    description:
      "Specialized carbon fiber solutions for electromagnetic shielding, ballistic protection, and stealth applications. Military-grade quality with superior EMI/RFI protection.",
    products: ["Nickel-Plated Carbon Fiber Mat", "Carbon Fiber Surface Mat 10g", "Carbon Fiber Composite Mat"],
  },
  {
    slug: "manufacturing",
    icon: Factory,
    title: "High-end Manufacturing",
    description:
      "Premium carbon fiber materials for pultrusion processes, mold making, and advanced composite manufacturing. Optimized for industrial-scale production with consistent quality.",
    products: ["Carbon Fiber Composite Mat", "Carbon Fiber Needled Mat", "Short Cut Carbon Fiber"],
  },
];

export default function CarbonApplicationsPage() {
  return (
    <>
      <section className="pt-32 pb-12 bg-gradient-to-b from-neutral-900 to-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-xs font-semibold text-carbon-accent uppercase tracking-widest">
              Carbon Fiber Division
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-white">
              Application Industries
            </h1>
            <p className="mt-3 text-neutral-400 max-w-xl mx-auto">
              Our carbon fiber materials enable breakthrough performance in the
              world&apos;s most demanding industries.
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
                <div className="w-14 h-14 rounded-xl bg-carbon-primary/5 flex items-center justify-center flex-shrink-0">
                  <app.icon className="w-7 h-7 text-carbon-accent" />
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
                          className="px-3 py-1 bg-carbon-primary/5 text-neutral-700 text-sm rounded-full"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-carbon-accent hover:underline"
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
