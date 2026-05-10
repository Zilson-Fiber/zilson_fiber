"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function CTAFinal() {
  const sectionRef = useRef<HTMLElement>(null);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const elements = section.querySelectorAll("[data-cta-reveal]");
      gsap.fromTo(
        elements,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            once: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Quick Inquiry",
          email,
          message,
          division: "general",
        }),
      });
      if (res.ok) {
        setStatus("sent");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section ref={sectionRef} className="relative bg-neutral-50 section-padding overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-cyan-500/20 via-transparent to-emerald-500/20 animate-[gradient-rotate_20s_linear_infinite]" />
      </div>

      <div className="relative z-10 container-wide max-w-[800px] text-center">
        <h2 data-cta-reveal className="text-2xl sm:text-3xl font-semibold text-neutral-900 opacity-0">
          Let&apos;s Build Something
          <br />
          Together
        </h2>
        <p data-cta-reveal className="text-neutral-500 mt-6 leading-relaxed opacity-0">
          Tell us your requirements. Our engineers will provide a tailored
          recommendation within 24 hours.
        </p>

        {status === "sent" ? (
          <div data-cta-reveal className="mt-12 p-6 border border-emerald-500/30 rounded-lg opacity-0">
            <p className="text-emerald-600 font-medium">
              Thank you! We&apos;ll be in touch within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-12 space-y-4">
            <div data-cta-reveal className="opacity-0">
              <label htmlFor="quick-inquiry-email" className="sr-only">
                Email address
              </label>
              <input
                id="quick-inquiry-email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="w-full px-5 py-4 bg-white border border-neutral-200 rounded-lg text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-400 transition-colors"
              />
            </div>
            <div data-cta-reveal className="opacity-0">
              <label htmlFor="quick-inquiry-message" className="sr-only">
                Project requirements
              </label>
              <textarea
                id="quick-inquiry-message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="What are you looking for?"
                required
                rows={3}
                className="w-full px-5 py-4 bg-white border border-neutral-200 rounded-lg text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-400 transition-colors resize-none"
              />
            </div>
            <div data-cta-reveal className="opacity-0">
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-colors disabled:opacity-50"
              >
                {status === "sending" ? "Sending..." : "Send Inquiry"}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            {status === "error" && (
              <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
