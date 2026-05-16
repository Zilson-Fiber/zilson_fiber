"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Award,
  BadgeCheck,
  FileCheck2,
  Handshake,
  MapPin,
  Ship,
  Truck,
} from "lucide-react";
import { gsap } from "@/lib/gsap";

const trustMetrics = [
  {
    number: "01",
    metric: "15",
    suffix: "+",
    unit: "Years",
    title: "Composite Experience",
    text: "Focused exclusively on fiberglass and carbon fiber since 2008, serving demanding industrial applications worldwide.",
  },
  {
    number: "02",
    metric: "2",
    suffix: "",
    unit: "R&D Centers",
    title: "Engineering Backbone",
    text: "Dedicated R&D staff guide you from material selection through production — engineers who understand your process.",
  },
  {
    number: "03",
    metric: "50",
    suffix: "+",
    unit: "Countries",
    title: "Export Footprint",
    text: "Stable global delivery from dual production bases, 240 km to Shanghai Port. FOB, CIF, DDP — coordinated to your terms.",
  },
];

const certificates = [
  {
    src: "/images/placeholders/certificate-iso-9001.svg",
    alt: "ISO 9001 Quality Management System certificate",
    label: "ISO 9001",
    sublabel: "Quality Management",
  },
  {
    src: "/images/placeholders/certificate-iso-14001.svg",
    alt: "ISO 14001 Environmental Management System certificate",
    label: "ISO 14001",
    sublabel: "Environmental",
  },
  {
    src: "/images/placeholders/certificate-iso-45001.svg",
    alt: "ISO 45001 Occupational Health & Safety certificate",
    label: "ISO 45001",
    sublabel: "Health & Safety",
  },
  {
    src: "/images/placeholders/certificate-ip.svg",
    alt: "Intellectual Property Management System certificate",
    label: "IP Management",
    sublabel: "Innovation",
  },
];

const logistics = [
  {
    icon: MapPin,
    label: "Dual Production Base",
    text: "Manufacturing in Nantong and Taizhou — stable, scalable output.",
  },
  {
    icon: Ship,
    label: "240 km to Shanghai Port",
    text: "Export-ready logistics hub with efficient sea freight worldwide.",
  },
  {
    icon: Truck,
    label: "Flexible Trade Terms",
    text: "FOB, CIF, DDP — sample shipments to bulk orders.",
  },
];

const supportSteps = ["Inquiry", "Production", "Inspection", "Shipment"];

function AnimatedMetric({ metric, suffix }: { metric: string; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const target = parseInt(metric, 10);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obj = { val: 0 };
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        val: target,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
        onUpdate: () => setValue(Math.round(obj.val)),
      });
    }, el);

    return () => ctx.revert();
  }, [target]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
      {suffix}
    </span>
  );
}

export function TrustEvidence() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const heading = section.querySelector("[data-trust-heading]");
      if (heading) {
        gsap.fromTo(
          heading,
          { clipPath: "inset(0 100% 0 0)" },
          {
            clipPath: "inset(0 0% 0 0)",
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: { trigger: heading, start: "top 85%", once: true },
          }
        );
      }

      const support = section.querySelector("[data-trust-support]");
      if (support) {
        gsap.fromTo(
          support,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: support, start: "top 85%", once: true },
          }
        );
      }

      gsap.fromTo(
        section.querySelectorAll("[data-trust-metric]"),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section.querySelector("[data-trust-metrics]"),
            start: "top 80%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        section.querySelectorAll("[data-trust-panel]"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section.querySelector("[data-trust-panels]"),
            start: "top 80%",
            once: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white section-padding">
      <div className="container-wide">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-24">
          <h2
            data-trust-heading
            className="text-2xl sm:text-3xl font-semibold text-neutral-900 clip-hidden-left"
          >
            Every claim,
            <br />
            verifiable.
          </h2>
          <p
            data-trust-support
            className="text-neutral-500 leading-relaxed self-end opacity-0"
          >
            Certifications, R&D capability, logistics infrastructure, and order
            support — documented and ready for your review before you place a
            single order.
          </p>
        </div>

        {/* Metrics row */}
        <div
          data-trust-metrics
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-200 mb-px"
        >
          {trustMetrics.map((item) => (
            <div
              key={item.number}
              data-trust-metric
              className="bg-white p-8 sm:p-10 opacity-0"
            >
              <span className="font-mono text-xs text-neutral-400 block mb-6">
                {item.number}
              </span>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl sm:text-5xl font-semibold text-neutral-900">
                  <AnimatedMetric metric={item.metric} suffix={item.suffix} />
                </span>
                <span className="text-sm text-neutral-500">{item.unit}</span>
              </div>
              <h3 className="text-lg font-medium text-neutral-900 mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Detail panels */}
        <div
          data-trust-panels
          className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-neutral-200"
        >
          {/* Certificates */}
          <div
            data-trust-panel
            className="bg-white p-8 sm:p-10 opacity-0"
          >
            <div className="flex items-baseline justify-between mb-8">
              <div>
                <span className="font-mono text-xs text-neutral-400 block mb-3">
                  04
                </span>
                <h3 className="text-lg font-medium text-neutral-900 flex items-center gap-2">
                  <Award className="w-4 h-4 text-neutral-400" />
                  Certified Quality
                </h3>
              </div>
              <span className="type-caption text-neutral-400">
                ISO 9001 / 14001 / 45001
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {certificates.map((cert) => (
                <div key={cert.label} className="group/cert">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-md bg-neutral-50 border border-neutral-100 mb-3">
                    <Image
                      src={cert.src}
                      alt={cert.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, 25vw"
                      className="object-cover group-hover/cert:scale-[1.03] transition-transform duration-500"
                    />
                  </div>
                  <p className="text-xs font-medium text-neutral-900 flex items-center gap-1">
                    <BadgeCheck className="w-3 h-3 text-neutral-400" />
                    {cert.label}
                  </p>
                  <p className="text-[11px] text-neutral-400 mt-0.5">
                    {cert.sublabel}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-xs text-neutral-400 mt-6 leading-relaxed">
              Scanned certificate copies available upon request.
            </p>
          </div>

          {/* Logistics + Support */}
          <div
            data-trust-panel
            className="bg-white p-8 sm:p-10 opacity-0"
          >
            <div className="flex items-baseline justify-between mb-8">
              <div>
                <span className="font-mono text-xs text-neutral-400 block mb-3">
                  05
                </span>
                <h3 className="text-lg font-medium text-neutral-900 flex items-center gap-2">
                  <FileCheck2 className="w-4 h-4 text-neutral-400" />
                  Delivery & Support
                </h3>
              </div>
              <span className="type-caption text-neutral-400">
                Inquiry → Shipment
              </span>
            </div>

            <ul className="space-y-5 mb-8">
              {logistics.map((item) => (
                <li key={item.label} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-md border border-neutral-200 flex items-center justify-center mt-0.5">
                    <item.icon className="w-4 h-4 text-neutral-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-900">
                      {item.label}
                    </p>
                    <p className="text-sm text-neutral-500 leading-relaxed mt-1">
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-neutral-100 pt-6">
              <div className="flex items-center gap-2 mb-4">
                <Handshake className="w-4 h-4 text-neutral-400" />
                <span className="type-caption text-neutral-500">
                  End-to-end follow-up
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {supportSteps.map((step, i) => (
                  <div key={step} className="flex items-center gap-2">
                    <span className="text-xs font-medium text-neutral-700 bg-neutral-50 border border-neutral-200 px-3 py-1.5 rounded-full">
                      {step}
                    </span>
                    {i < supportSteps.length - 1 && (
                      <span className="w-3 h-px bg-neutral-300" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
