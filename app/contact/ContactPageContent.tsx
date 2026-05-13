"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle, Mail, MapPin } from "lucide-react";
import { contactInfo, whatsappPhone } from "@/lib/contact";

export default function ContactPageContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    phone: "",
    division: "general",
    product_interest: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source_page: window.location.pathname,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          country: "",
          phone: "",
          division: "general",
          product_interest: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full px-4 py-3 bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-400 transition-colors text-sm rounded-lg";

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
            <p className="type-caption text-neutral-400">Contact</p>
            <h1 className="text-3xl sm:text-4xl font-semibold text-neutral-900 mt-3">
              Get in Touch
            </h1>
            <p className="text-neutral-500 mt-4 max-w-xl leading-relaxed">
              Tell us about your project requirements and our team will respond
              within 24 hours with a tailored solution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="pb-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Form */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <form
                onSubmit={handleSubmit}
                className="p-8 bg-white border border-neutral-100 rounded-xl shadow-sm"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-neutral-600 mb-1.5">
                      Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className={inputClass}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-neutral-600 mb-1.5">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className={inputClass}
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-xs font-medium text-neutral-600 mb-1.5">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className={inputClass}
                      placeholder="Company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-xs font-medium text-neutral-600 mb-1.5">
                      Country
                    </label>
                    <input
                      id="country"
                      name="country"
                      type="text"
                      value={formData.country}
                      onChange={(e) =>
                        setFormData({ ...formData, country: e.target.value })
                      }
                      className={inputClass}
                      placeholder="Your country"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-neutral-600 mb-1.5">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className={inputClass}
                      placeholder="+1 234 567 890"
                    />
                  </div>
                  <div>
                    <label htmlFor="division" className="block text-xs font-medium text-neutral-600 mb-1.5">
                      Interested In
                    </label>
                    <select
                      id="division"
                      name="division"
                      value={formData.division}
                      onChange={(e) =>
                        setFormData({ ...formData, division: e.target.value })
                      }
                      className={inputClass}
                    >
                      <option value="general">General Inquiry</option>
                      <option value="carbon">Carbon Fiber Products</option>
                      <option value="glass">Glass Fiber Products</option>
                    </select>
                  </div>
                </div>
                <div className="mt-4">
                  <label htmlFor="product_interest" className="block text-xs font-medium text-neutral-600 mb-1.5">
                    Product of Interest
                  </label>
                  <input
                    id="product_interest"
                    name="product_interest"
                    type="text"
                    value={formData.product_interest}
                    onChange={(e) =>
                      setFormData({ ...formData, product_interest: e.target.value })
                    }
                    className={inputClass}
                    placeholder="e.g., Carbon Fiber Surface Mat 10g"
                  />
                </div>
                <div className="mt-4">
                  <label htmlFor="message" className="block text-xs font-medium text-neutral-600 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className={`${inputClass} resize-none`}
                    placeholder="Tell us about your requirements, quantities, and application..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-6 inline-flex items-center gap-2 px-7 py-3 bg-accent-500 hover:bg-accent-600 disabled:opacity-50 text-white text-sm font-semibold rounded-full transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  {status === "sending" ? "Sending..." : "Send Inquiry"}
                </button>
                {status === "success" && (
                  <p className="mt-4 text-sm text-green-600">
                    Thank you! We&apos;ll respond within 24 hours.
                  </p>
                )}
                {status === "error" && (
                  <p className="mt-4 text-sm text-red-600">
                    Something went wrong. Please try again or contact us via
                    WhatsApp.
                  </p>
                )}
              </form>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              className="space-y-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="p-6 bg-white border border-neutral-100 rounded-xl shadow-sm">
                <h2 className="text-sm font-medium text-neutral-900 mb-4">
                  Contact Info
                </h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-neutral-400">Company</p>
                    <p className="text-sm text-neutral-700 mt-1">
                      {contactInfo.company}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-carbon-accent mt-0.5" />
                    <div>
                      <p className="text-xs uppercase tracking-wider text-neutral-400">Email</p>
                      <div className="space-y-1">
                        {contactInfo.emails.map((email) => (
                          <a
                            key={email}
                            href={`mailto:${email}`}
                            className="block text-sm text-neutral-700 hover:text-neutral-900 transition-colors"
                          >
                            {email}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MessageCircle className="w-4 h-4 text-[#25D366] mt-0.5" />
                    <div>
                      <p className="text-xs uppercase tracking-wider text-neutral-400">Phone</p>
                      <a
                        href={`https://wa.me/${whatsappPhone}`}
                        className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors"
                      >
                        {contactInfo.phones[1]}
                      </a>
                      <a
                        href={`tel:${contactInfo.phones[0]}`}
                        className="block text-sm text-neutral-700 hover:text-neutral-900 transition-colors mt-1"
                      >
                        {contactInfo.phones[0]}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-glass-accent mt-0.5" />
                    <div>
                      <p className="text-xs uppercase tracking-wider text-neutral-400">Address</p>
                      <p className="text-sm text-neutral-700">
                        {contactInfo.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white border border-neutral-100 rounded-xl shadow-sm">
                <h2 className="text-sm font-medium text-neutral-900 mb-4">
                  FAQ
                </h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-neutral-800">
                      What is the MOQ?
                    </p>
                    <p className="text-sm text-neutral-500 mt-1">
                      MOQ varies by product. Generally 100-500 sqm for standard
                      items.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-800">
                      Can I get samples?
                    </p>
                    <p className="text-sm text-neutral-500 mt-1">
                      Yes, we provide free samples for evaluation. Shipping cost
                      may apply.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-800">Lead time?</p>
                    <p className="text-sm text-neutral-500 mt-1">
                      Standard products: 7-15 days. Custom orders: 15-30 days.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
