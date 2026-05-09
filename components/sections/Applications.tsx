"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Wind, Building2, Plane, Shield, Zap } from "lucide-react";

const applications = [
  {
    icon: Plane,
    title: "Aerospace & Aviation",
    description: "Ultra-lightweight carbon fiber composites for structural components and interior panels.",
    href: "/carbon-fiber/applications/aerospace",
    division: "carbon",
  },
  {
    icon: Wind,
    title: "Wind Energy",
    description: "High-performance fiberglass reinforcements for turbine blades and nacelle covers.",
    href: "/glass-fiber/applications/wind-energy",
    division: "glass",
  },
  {
    icon: Building2,
    title: "Construction",
    description: "Durable glass fiber materials for insulation, waterproofing, and structural reinforcement.",
    href: "/glass-fiber/applications/construction",
    division: "glass",
  },
  {
    icon: Shield,
    title: "Military & Defense",
    description: "Specialized carbon fiber solutions for ballistic protection and stealth applications.",
    href: "/carbon-fiber/applications/military-defense",
    division: "carbon",
  },
  {
    icon: Zap,
    title: "New Energy",
    description: "Advanced materials for fuel cells, battery separators, and energy storage systems.",
    href: "/carbon-fiber/applications/new-energy",
    division: "carbon",
  },
];

export function Applications() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">
            Industries We Serve
          </h2>
          <p className="mt-4 text-lg text-neutral-500 max-w-2xl mx-auto">
            Our fiber materials power critical applications across the world&apos;s
            most demanding industries.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app, i) => (
            <motion.div
              key={app.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={app.href} className="group block h-full">
                <div className="h-full p-6 rounded-2xl border border-neutral-100 hover:border-neutral-200 hover:shadow-lg transition-all">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      app.division === "carbon"
                        ? "bg-carbon-primary/5 text-carbon-accent"
                        : "bg-glass-accent/10 text-glass-accent"
                    }`}
                  >
                    <app.icon className="w-6 h-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-neutral-900 group-hover:text-brand-600 transition-colors">
                    {app.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
                    {app.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
