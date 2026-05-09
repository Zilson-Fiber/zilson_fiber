"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
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
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              Get in Touch
            </h1>
            <p className="mt-3 text-brand-200 max-w-xl mx-auto">
              Tell us about your project requirements and our team will respond
              within 24 hours with a tailored solution.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-brand-600/20 focus:border-brand-600 outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-brand-600/20 focus:border-brand-600 outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                      Company
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-brand-600/20 focus:border-brand-600 outline-none transition-all"
                      placeholder="Company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                      Country
                    </label>
                    <input
                      type="text"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-brand-600/20 focus:border-brand-600 outline-none transition-all"
                      placeholder="Your country"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-brand-600/20 focus:border-brand-600 outline-none transition-all"
                      placeholder="+1 234 567 890"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                      Interested In
                    </label>
                    <select
                      value={formData.division}
                      onChange={(e) => setFormData({ ...formData, division: e.target.value })}
                      className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-brand-600/20 focus:border-brand-600 outline-none transition-all"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="carbon">Carbon Fiber Products</option>
                      <option value="glass">Glass Fiber Products</option>
                    </select>
                  </div>
                </div>
                <div className="mt-5">
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                    Product of Interest
                  </label>
                  <input
                    type="text"
                    value={formData.product_interest}
                    onChange={(e) => setFormData({ ...formData, product_interest: e.target.value })}
                    className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-brand-600/20 focus:border-brand-600 outline-none transition-all"
                    placeholder="e.g., Carbon Fiber Surface Mat 10g"
                  />
                </div>
                <div className="mt-5">
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-brand-600/20 focus:border-brand-600 outline-none transition-all resize-none"
                    placeholder="Tell us about your requirements, quantities, and application..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-6 inline-flex items-center gap-2 px-8 py-3 bg-accent-500 hover:bg-accent-600 disabled:opacity-50 text-white font-semibold rounded-full transition-colors"
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
                    Something went wrong. Please try again or contact us via WhatsApp.
                  </p>
                )}
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100">
                <h3 className="font-semibold text-neutral-900 mb-4">Contact Info</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-brand-600 mt-0.5" />
                    <div>
                      <p className="text-sm text-neutral-500">Email</p>
                      <a href="mailto:info@zilsonfiber.com" className="text-sm font-medium text-neutral-800">
                        info@zilsonfiber.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MessageCircle className="w-5 h-5 text-[#25D366] mt-0.5" />
                    <div>
                      <p className="text-sm text-neutral-500">WhatsApp</p>
                      <a href="https://wa.me/8613800000000" className="text-sm font-medium text-neutral-800">
                        +86 138 0000 0000
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-600 mt-0.5" />
                    <div>
                      <p className="text-sm text-neutral-500">Address</p>
                      <p className="text-sm text-neutral-800">
                        Changzhou, Jiangsu, China
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100">
                <h3 className="font-semibold text-neutral-900 mb-4">FAQ</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-neutral-800">What is the MOQ?</p>
                    <p className="text-sm text-neutral-500 mt-1">
                      MOQ varies by product. Generally 100-500 sqm for standard items. Contact us for details.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-800">Can I get samples?</p>
                    <p className="text-sm text-neutral-500 mt-1">
                      Yes, we provide free samples for evaluation. Shipping cost may apply.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-800">Lead time?</p>
                    <p className="text-sm text-neutral-500 mt-1">
                      Standard products: 7-15 days. Custom orders: 15-30 days.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
