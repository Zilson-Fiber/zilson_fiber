"use client";

import { motion } from "framer-motion";
import { Award, Factory, Globe, Users } from "lucide-react";
import { contactInfo } from "@/lib/contact";

const milestones = [
  { year: "2008", event: "Company founded in Nantong, Jiangsu" },
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
    description:
      "State-of-the-art production lines with strict quality control at every stage.",
    iconColor: "text-carbon-accent",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Serving customers in 50+ countries across 6 continents with reliable logistics.",
    iconColor: "text-glass-accent",
  },
  {
    icon: Award,
    title: "Quality Certified",
    description:
      "ISO 9001 certified with SGS testing reports for all product lines.",
    iconColor: "text-accent-500",
  },
  {
    icon: Users,
    title: "Customer First",
    description:
      "Dedicated technical support team providing custom solutions for every project.",
    iconColor: "text-carbon-accent",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

export default function AboutPageContent() {
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
            <p className="type-caption text-neutral-400">About Us</p>
            <h1 className="text-3xl sm:text-4xl font-semibold text-neutral-900 mt-3">
              Composite Materials Expert Since 2008
            </h1>
	            <p className="text-neutral-500 mt-4 max-w-2xl leading-relaxed">
	              {contactInfo.company} is a professional manufacturer of fiberglass
	              and carbon fiber composite materials based in Nantong, Jiangsu
	              Province, China, serving global industries for over 15 years.
	            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="pb-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-lg text-neutral-700 leading-relaxed">
                ZeYuSen Fiber serves customers across wind energy, aerospace,
                construction, automotive, military, and new energy sectors
                worldwide.
              </p>
              <p className="text-neutral-500 leading-relaxed mt-5">
                Our product portfolio spans from ultra-thin 10g/m² carbon fiber
                surface mats to heavy-duty 1200g/m² multiaxial composite
                reinforcements. We offer full customization of weight, width,
                binder type, and fiber orientation to match your specific
                manufacturing process.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { num: "15+", label: "Years Experience" },
                { num: "50+", label: "Export Countries" },
                { num: "7", label: "Product Lines" },
                { num: "100%", label: "Custom Support" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-5 bg-neutral-50 border border-neutral-100 rounded-lg"
                >
                  <span className="text-2xl font-light text-neutral-900">
                    {stat.num}
                  </span>
                  <p className="text-xs uppercase tracking-wider text-neutral-400 mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <div className="container-wide"><div className="h-px bg-neutral-100" /></div>

      {/* Values */}
      <section className="py-24">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="type-caption text-neutral-400">Why Choose Us</p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 mt-3">
              Built on Trust & Precision
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {values.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="p-6 bg-neutral-50 border border-neutral-100 rounded-lg hover:border-neutral-200 transition-colors"
              >
                <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                <h3 className="text-neutral-900 font-medium mt-4 text-sm">
                  {item.title}
                </h3>
                <p className="text-neutral-500 mt-2 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="container-wide"><div className="h-px bg-neutral-100" /></div>

      {/* Timeline */}
      <section className="py-24">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="type-caption text-neutral-400">Our Journey</p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 mt-3">
              Milestones
            </h2>
          </motion.div>

          <div className="mt-12 max-w-xl">
            {milestones.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-6 pb-8 last:pb-0 relative"
              >
                {i < milestones.length - 1 && (
                  <div className="absolute left-[2.35rem] top-7 bottom-0 w-px bg-neutral-100" />
                )}
                <span className="font-mono text-xs text-carbon-accent w-10 pt-0.5 flex-shrink-0 text-right">
                  {item.year}
                </span>
                <div className="mt-2 flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-br from-carbon-accent to-glass-accent" />
                </div>
                <p className="text-neutral-600 text-sm pt-0.5">{item.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
