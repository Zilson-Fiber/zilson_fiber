import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";

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
  aerospace: {
    title: "Aerospace & Aviation",
    metaTitle: "Carbon Fiber for Aerospace & Aviation | Zilson Fiber",
    metaDescription:
      "High-performance carbon fiber composites for aerospace structural components, interior panels, and lightweight aviation solutions.",
    headline: "Engineered for the Skies",
    description:
      "The aerospace industry demands materials that combine exceptional strength with minimal weight. Our carbon fiber solutions are specifically engineered for aircraft structural components, satellite systems, UAV frames, and interior cabin panels.",
    benefits: [
      "Ultra-lightweight: up to 70% lighter than aluminum alloys",
      "Exceptional fatigue resistance for extended service life",
      "High temperature stability up to 300°C",
      "Excellent vibration damping properties",
      "Corrosion-free performance in extreme environments",
      "Custom weight specifications from 10g/m² to 600g/m²",
    ],
    products: [
      { name: "Carbon Fiber Surface Mat 10g", href: "/carbon-fiber/products/carbon-fiber-mat/surface-mat-10g" },
      { name: "Carbon Fiber Needled Mat", href: "/carbon-fiber/products/carbon-fiber-mat/nickel-plated-mat" },
      { name: "Carbon-Glass Hybrid Cloth", href: "/carbon-fiber/products/carbon-fiber-cloth" },
    ],
    relatedIndustries: ["military-defense", "new-energy"],
  },
  "military-defense": {
    title: "Military & Defense",
    metaTitle: "Carbon Fiber for Military & Defense Applications | Zilson Fiber",
    metaDescription:
      "Specialized carbon fiber materials for EMI shielding, ballistic protection, and stealth applications.",
    headline: "Protection Through Innovation",
    description:
      "Modern defense systems require materials that provide electromagnetic shielding, structural integrity, and stealth capabilities. Our nickel-plated carbon fiber mats deliver superior EMI/RFI protection while maintaining lightweight profiles.",
    benefits: [
      "Superior EMI/RFI shielding effectiveness (60-90 dB)",
      "Lightweight ballistic protection solutions",
      "Radar-absorbing material (RAM) capabilities",
      "Chemical and corrosion resistance",
      "High impact strength and damage tolerance",
      "Custom specifications for classified applications",
    ],
    products: [
      { name: "Nickel-Plated Carbon Fiber Mat", href: "/carbon-fiber/products/carbon-fiber-mat/nickel-plated-mat" },
      { name: "Carbon Fiber Composite Mat", href: "/carbon-fiber/products/carbon-fiber-mat" },
      { name: "Carbon Fiber Surface Mat 10g", href: "/carbon-fiber/products/carbon-fiber-mat/surface-mat-10g" },
    ],
    relatedIndustries: ["aerospace", "new-energy"],
  },
  "new-energy": {
    title: "New Energy",
    metaTitle: "Carbon Fiber for Fuel Cells & Energy Storage | Zilson Fiber",
    metaDescription:
      "Advanced carbon fiber materials for hydrogen fuel cell GDL, battery separators, and energy storage systems.",
    headline: "Powering Tomorrow's Energy",
    description:
      "The transition to clean energy demands advanced materials with exceptional electrical conductivity and chemical stability. Our ultra-thin carbon fiber mats serve as gas diffusion layers (GDL) in hydrogen fuel cells and separators in advanced batteries.",
    benefits: [
      "Optimized porosity for gas diffusion layer applications",
      "Excellent electrical conductivity (< 5 mΩ·cm²)",
      "Chemical stability in acidic and alkaline environments",
      "Ultra-thin options from 10g/m² for fuel cell applications",
      "Consistent thickness uniformity (±5%)",
      "Scalable production for commercial energy systems",
    ],
    products: [
      { name: "Carbon Fiber Surface Mat 10g", href: "/carbon-fiber/products/carbon-fiber-mat/surface-mat-10g" },
      { name: "Carbon Fiber Surface Mat 20g", href: "/carbon-fiber/products/carbon-fiber-mat/surface-mat-20g" },
      { name: "Carbon-Glass Hybrid Mat", href: "/carbon-fiber/products/carbon-fiber-mat" },
    ],
    relatedIndustries: ["aerospace", "military-defense"],
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
  return {
    title: app.metaTitle,
    description: app.metaDescription,
  };
}

export default async function CarbonApplicationPage({ params }: Props) {
  const { slug } = await params;
  const app = applications[slug];
  if (!app) notFound();

  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-16">
        <div className="container-wide">
          <Link
            href="/applications"
            className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-neutral-700 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Applications
          </Link>
          <p className="type-caption text-carbon-accent mb-3">{app.title}</p>
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
                <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-carbon-accent transition-colors" />
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
            Our engineers can tailor carbon fiber materials to your exact specifications.
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
