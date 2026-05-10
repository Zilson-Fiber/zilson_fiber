import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { createPageMetadata } from "@/lib/seo";

const applications: Record<
  string,
  {
    title: string;
    metaTitle: string;
    metaDescription: string;
    headline: string;
    description: string;
    benefits: string[];
    products: { name: string; href: string }[];
    relatedIndustries: string[];
  }
> = {
  "wind-energy": {
    title: "Wind Energy",
    metaTitle: "Fiberglass for Wind Energy & Turbine Blades | Zilson Fiber",
    metaDescription:
      "High-performance fiberglass reinforcements for wind turbine blades, nacelle covers, and structural components.",
    headline: "Reinforcing Renewable Power",
    description:
      "Wind energy is one of the fastest-growing sectors in renewable power generation, and fiberglass composites are at the heart of turbine blade manufacturing. Our multiaxial fabrics and composite mats are specifically engineered for blade production.",
    benefits: [
      "Multiaxial fabrics optimized for blade spar caps and shells",
      "Excellent fatigue resistance for 20+ year service life",
      "Superior resin infusion characteristics for void-free laminates",
      "Consistent fiber distribution for predictable mechanical properties",
      "Compatible with epoxy, polyester, and vinyl ester resin systems",
      "Available in weights from 300g/m² to 1200g/m²",
    ],
    products: [
      { name: "Multiaxial Fabric", href: "/glass-fiber/products/fiberglass-cloth" },
      { name: "Unidirectional Fabric", href: "/glass-fiber/products/fiberglass-cloth" },
      { name: "Stitched Composite Mat", href: "/glass-fiber/products/composite-mat" },
    ],
    relatedIndustries: ["construction"],
  },
  construction: {
    title: "Construction",
    metaTitle: "Fiberglass for Construction & Building Materials | Zilson Fiber",
    metaDescription:
      "Durable fiberglass materials for roofing, waterproofing, insulation, and structural reinforcement in construction.",
    headline: "Building Stronger Foundations",
    description:
      "The construction industry relies on fiberglass materials for waterproofing membranes, roofing systems, pipe insulation, and structural reinforcement. Our tissue mats provide excellent surface quality for SBS/APP modified bitumen membranes.",
    benefits: [
      "Excellent dimensional stability under thermal cycling",
      "Superior bonding with bitumen and polymer-modified systems",
      "Alkali-resistant options for concrete reinforcement",
      "Lightweight yet high-strength for structural applications",
      "UV and moisture resistant for exterior applications",
      "Fire-retardant grades available (Class A rating)",
    ],
    products: [
      { name: "Surface Tissue Mat", href: "/glass-fiber/products/tissue-mat/surface-tissue" },
      { name: "Chopped Strand Mat", href: "/glass-fiber/products/chopped-strand-mat" },
      { name: "Woven Roving", href: "/glass-fiber/products/fiberglass-cloth" },
    ],
    relatedIndustries: ["wind-energy"],
  },
};

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return Object.keys(applications).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const app = applications[slug];
  if (!app) return { title: "Not Found" };
  return createPageMetadata({
    title: app.title,
    description: app.metaDescription,
    path: `/glass-fiber/applications/${slug}`,
  });
}

export default async function GlassApplicationPage({ params }: Props) {
  const { slug } = await params;
  const app = applications[slug];
  if (!app) notFound();

  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-16">
        <div className="container-wide">
          <Link
            href="/applications/glass"
            className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-neutral-700 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Applications
          </Link>
          <p className="type-caption text-glass-accent mb-3">{app.title}</p>
          <h1 className="text-3xl sm:text-4xl font-semibold text-neutral-900 max-w-[700px]">
            {app.headline}
          </h1>
          <p className="text-neutral-500 max-w-[600px] mt-6 leading-relaxed">
            {app.description}
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-neutral-50">
        <div className="container-wide">
          <h2 className="text-xl font-semibold text-neutral-900 mb-10">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {app.benefits.map((benefit, i) => (
              <div
                key={i}
                className="p-6 border border-neutral-100 bg-white rounded-lg"
              >
                <span className="font-mono text-xs text-neutral-400 block mb-3">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-neutral-700 text-sm leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Products */}
      <section className="py-16">
        <div className="container-wide">
          <h2 className="text-xl font-semibold text-neutral-900 mb-10">Recommended Products</h2>
          <div className="space-y-3">
            {app.products.map((product) => (
              <Link
                key={product.name}
                href={product.href}
                className="group flex items-center justify-between p-5 border border-neutral-100 rounded-lg hover:border-neutral-200 transition-colors"
              >
                <span className="text-neutral-700 group-hover:text-neutral-900 transition-colors text-sm">
                  {product.name}
                </span>
                <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-glass-accent transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-neutral-50">
        <div className="container-wide text-center">
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-neutral-500 mb-8 max-w-[500px] mx-auto leading-relaxed">
            Our engineers can tailor fiberglass materials to your exact specifications.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 bg-accent-500 hover:bg-accent-600 text-white text-sm font-semibold rounded-full transition-colors"
          >
            Get a Free Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
