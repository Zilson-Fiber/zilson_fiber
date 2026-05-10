"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Palette,
  FlaskConical,
  ShieldCheck,
  Users,
  Truck,
  Headphones,
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "OEM/ODM Customization",
    description:
      "One-stop OEM/ODM solutions tailored to your exact specifications.",
    features: [
      "Custom color options (black, blue, yellow, green, etc.)",
      "Material composition customization",
      "Performance parameter tuning",
      "Custom width and roll length",
    ],
    iconColor: "text-carbon-accent",
  },
  {
    icon: FlaskConical,
    title: "R&D & Technical Support",
    description:
      "Expert technical guidance from material selection to process optimization.",
    features: [
      "Product consultation & material selection",
      "Technical solution recommendations",
      "Process optimization consulting",
      "On-site technical training available",
    ],
    iconColor: "text-glass-accent",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Rigorous quality control at every stage, certified to international standards.",
    features: [
      "ISO 9001 Quality Management",
      "ISO 14001 Environmental Management",
      "ISO 45001 Occupational Health & Safety",
      "Multiple patented products",
    ],
    iconColor: "text-accent-500",
  },
  {
    icon: Users,
    title: "Dedicated Order Management",
    description:
      "A dedicated expert team follows your order from placement to delivery.",
    features: [
      "Dedicated project manager",
      "Real-time production updates",
      "Transparent communication",
      "Flexible order adjustments",
    ],
    iconColor: "text-carbon-accent",
  },
  {
    icon: Truck,
    title: "Logistics & Fast Delivery",
    description:
      "Dual manufacturing bases, 240km from Shanghai Port for efficient export.",
    features: [
      "Dual production base (Nantong + Taizhou)",
      "240km from Shanghai Port",
      "Fast delivery commitment",
      "Flexible shipping terms (FOB/CIF/DDP)",
    ],
    iconColor: "text-glass-accent",
  },
  {
    icon: Headphones,
    title: "After-sales Service",
    description:
      "Ongoing technical support and quality guarantees beyond delivery.",
    features: [
      "Comprehensive quality guarantee",
      "Ongoing technical support",
      "Fast response to concerns",
      "Long-term partnership approach",
    ],
    iconColor: "text-accent-500",
  },
];

const steps = [
  { step: "01", title: "Inquiry", desc: "Tell us your requirements, application, and target specs." },
  { step: "02", title: "Solution", desc: "Our engineers recommend the optimal material and provide samples." },
  { step: "03", title: "Production", desc: "Dedicated team manages your order with real-time updates." },
  { step: "04", title: "Delivery", desc: "Fast global shipping from our export-ready facilities." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

export default function ServicesPage() {
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
            <p className="type-caption text-neutral-400">Services</p>
            <h1 className="text-3xl sm:text-4xl font-semibold text-neutral-900 mt-3">
              Our Services
            </h1>
            <p className="text-neutral-500 mt-4 max-w-2xl leading-relaxed">
              From custom R&D to fast global delivery — a complete service
              ecosystem built around your success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="p-6 bg-neutral-50 border border-neutral-100 rounded-lg hover:border-neutral-200 transition-colors"
              >
                <service.icon className={`w-5 h-5 ${service.iconColor}`} />
                <h3 className="text-neutral-900 font-medium mt-4 text-sm">
                  {service.title}
                </h3>
                <p className="text-neutral-500 text-sm mt-2 leading-relaxed">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-neutral-600"
                    >
                      <span className="w-1 h-1 rounded-full bg-neutral-300 mt-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="container-wide"><div className="h-px bg-neutral-100" /></div>

      {/* Process */}
      <section className="py-24">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="type-caption text-neutral-400">Process</p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 mt-3">
              How We Work With You
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {steps.map((item, i) => (
              <motion.div
                key={item.step}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="p-6 bg-neutral-50 border border-neutral-100 rounded-lg"
              >
                <span className="text-3xl font-light text-neutral-200">
                  {item.step}
                </span>
                <h3 className="text-neutral-900 font-medium mt-3 text-sm">
                  {item.title}
                </h3>
                <p className="text-neutral-500 text-sm mt-2">{item.desc}</p>
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
            Ready to Start Your Project?
          </h2>
          <p className="text-neutral-500 mt-4 leading-relaxed">
            Whether you need a custom formulation or a standard product in bulk,
            our team is ready to help.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 mt-8 px-7 py-3 bg-accent-500 hover:bg-accent-600 text-white text-sm font-semibold rounded-full transition-colors cursor-pointer"
          >
            Get a Free Quote
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
