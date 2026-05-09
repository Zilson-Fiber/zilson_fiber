"use client";

import { motion } from "framer-motion";
import { Award, Factory, Globe, Users } from "lucide-react";

const milestones = [
  { year: "2008", event: "Company founded in Changzhou, Jiangsu" },
  { year: "2012", event: "Expanded into carbon fiber product line" },
  { year: "2015", event: "Achieved ISO 9001 certification" },
  { year: "2018", event: "Began exporting to 30+ countries" },
  { year: "2021", event: "New production facility commissioned" },
  { year: "2024", event: "Reached 50+ export destinations worldwide" },
];

const values = [
  {
    icon: Factory,
    title: "Manufacturing Excellence",
    description: "State-of-the-art production lines with strict quality control at every stage.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Serving customers in 50+ countries across 6 continents with reliable logistics.",
  },
  {
    icon: Award,
    title: "Quality Certified",
    description: "ISO 9001 certified with SGS testing reports for all product lines.",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Dedicated technical support team providing custom solutions for every project.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-brand-700 to-brand-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              About Zilson Fiber
            </h1>
            <p className="mt-4 text-lg text-brand-200 max-w-2xl mx-auto">
              A leading composite materials manufacturer specializing in carbon
              fiber and glass fiber products for global industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
                Composite Materials Expert Since 2008
              </h2>
              <p className="mt-6 text-neutral-600 leading-relaxed">
                Zilson Fiber is a professional manufacturer of fiberglass and
                carbon fiber composite materials based in Changzhou, Jiangsu
                Province, China. With over 15 years of experience, we serve
                customers across wind energy, aerospace, construction,
                automotive, military, and new energy sectors worldwide.
              </p>
              <p className="mt-4 text-neutral-600 leading-relaxed">
                Our product portfolio spans from ultra-thin 10g/m² carbon fiber
                surface mats to heavy-duty 1200g/m² multiaxial composite
                reinforcements. We offer full customization of weight, width,
                binder type, and fiber orientation to match your specific
                manufacturing process.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-neutral-900 text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-neutral-100"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-600/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-brand-600" />
                </div>
                <h3 className="mt-4 font-semibold text-neutral-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-500">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-neutral-900 text-center mb-12">
            Our Journey
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-8">
              {milestones.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-6"
                >
                  <div className="flex-shrink-0 w-16 text-right">
                    <span className="text-lg font-bold text-brand-600">
                      {item.year}
                    </span>
                  </div>
                  <div className="relative flex-shrink-0">
                    <div className="w-3 h-3 rounded-full bg-brand-600 mt-2" />
                    {i < milestones.length - 1 && (
                      <div className="absolute top-5 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-neutral-200" />
                    )}
                  </div>
                  <p className="text-neutral-700 pt-0.5">{item.event}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
