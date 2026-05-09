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
      "One-stop OEM/ODM solutions tailored to your exact specifications. We customize every aspect of our fiber materials to match your manufacturing process.",
    features: [
      "Custom color options (black, blue, yellow, green, etc.)",
      "Material composition customization",
      "Performance parameter tuning (weight, tensile strength, binder content)",
      "Custom width and roll length",
    ],
  },
  {
    icon: FlaskConical,
    title: "R&D & Technical Support",
    description:
      "Backed by partnerships with the Chinese Academy of Sciences and leading research institutes, we provide expert technical guidance from material selection to process optimization.",
    features: [
      "Product consultation & material selection guidance",
      "Technical solution recommendations",
      "Process optimization consulting",
      "On-site technical training available",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Rigorous quality control at every stage of production, certified to international standards. Every batch is tested and traceable.",
    features: [
      "ISO 9001 Quality Management System",
      "ISO 14001 Environmental Management System",
      "ISO 45001 Occupational Health & Safety",
      "Multiple patented products with IP certification",
    ],
  },
  {
    icon: Users,
    title: "Dedicated Order Management",
    description:
      "A dedicated expert team follows your order from placement to delivery, keeping you informed at every stage of production.",
    features: [
      "Dedicated project manager for each order",
      "Real-time production progress updates",
      "Transparent communication throughout",
      "Flexible order adjustments when needed",
    ],
  },
  {
    icon: Truck,
    title: "Logistics & Fast Delivery",
    description:
      "Dual manufacturing bases in Nantong and Taizhou, just 240km from Shanghai Port, ensuring efficient export logistics and fast global delivery.",
    features: [
      "Dual production base (Nantong + Taizhou)",
      "240km from Shanghai Port — export-ready",
      "Fast delivery commitment",
      "Flexible shipping terms (FOB/CIF/DDP)",
    ],
  },
  {
    icon: Headphones,
    title: "After-sales Service",
    description:
      "Our commitment doesn't end at delivery. We provide ongoing technical support and quality guarantees to protect your interests.",
    features: [
      "Comprehensive quality guarantee",
      "Ongoing technical support",
      "Fast response to any quality concerns",
      "Long-term partnership approach",
    ],
  },
];

export default function ServicesPage() {
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
              Our Services
            </h1>
            <p className="mt-4 text-lg text-brand-200 max-w-2xl mx-auto">
              From custom R&D to fast global delivery — a complete service
              ecosystem built around your success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-neutral-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-600/10 flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-brand-600" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-neutral-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-neutral-600"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-1.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
              How We Work With You
            </h2>
            <p className="mt-3 text-neutral-500 max-w-xl mx-auto">
              A streamlined process from first inquiry to long-term partnership.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Inquiry", desc: "Tell us your requirements, application, and target specs." },
              { step: "02", title: "Solution", desc: "Our engineers recommend the optimal material and provide samples." },
              { step: "03", title: "Production", desc: "Dedicated team manages your order with real-time updates." },
              { step: "04", title: "Delivery", desc: "Fast global shipping from our export-ready facilities." },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-center p-6"
              >
                <div className="text-4xl font-bold text-brand-600/20">
                  {item.step}
                </div>
                <h3 className="mt-3 text-lg font-semibold text-neutral-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white">
            Ready to Start Your Project?
          </h2>
          <p className="mt-3 text-brand-200 max-w-lg mx-auto">
            Whether you need a custom formulation or a standard product in bulk,
            our team is ready to help.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 mt-8 px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-full transition-colors"
          >
            Get a Free Quote
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
