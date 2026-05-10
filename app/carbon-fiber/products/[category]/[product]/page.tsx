import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { allCarbonFiberCategories } from "@/data/carbon-fiber";
import { ProductGallery } from "@/components/products/ProductGallery";
import { SpecTable } from "@/components/products/SpecTable";

type Props = { params: Promise<{ category: string; product: string }> };

export async function generateStaticParams() {
  const paths: { category: string; product: string }[] = [];
  allCarbonFiberCategories.forEach((cat) => {
    cat.products.forEach((prod) => {
      paths.push({ category: cat.slug, product: prod.slug });
    });
  });
  return paths;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: catSlug, product: prodSlug } = await params;
  const category = allCarbonFiberCategories.find((c) => c.slug === catSlug);
  const product = category?.products.find((p) => p.slug === prodSlug);
  if (!product) return {};
  return {
    title: `${product.name} | Carbon Fiber Manufacturer`,
    description: product.description,
  };
}

export default async function CarbonProductPage({ params }: Props) {
  const { category: catSlug, product: prodSlug } = await params;
  const category = allCarbonFiberCategories.find((c) => c.slug === catSlug);
  if (!category) notFound();
  const product = category.products.find((p) => p.slug === prodSlug);
  if (!product) notFound();

  return (
    <>
      <section className="pt-36 pb-4">
        <div className="container-wide">
          <nav className="flex items-center gap-2 text-sm text-neutral-400">
            <Link href="/" className="hover:text-neutral-700 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/carbon-fiber" className="hover:text-neutral-700 transition-colors">Carbon Fiber</Link>
            <span>/</span>
            <Link href={`/carbon-fiber/products/${category.slug}`} className="hover:text-neutral-700 transition-colors">
              {category.name}
            </Link>
            <span>/</span>
            <span className="text-neutral-600">{product.name}</span>
          </nav>
        </div>
      </section>

      <section className="py-10">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            <ProductGallery images={product.images} name={product.name} />
            <div>
              <h1 className="text-xl sm:text-2xl font-semibold text-neutral-900">
                {product.name}
              </h1>
              <p className="mt-4 text-neutral-600 leading-relaxed text-sm">
                {product.description}
              </p>
              <div className="mt-6">
                <h3 className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-3">
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-neutral-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-carbon-accent mt-1.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white text-sm font-semibold rounded-full transition-colors cursor-pointer"
                >
                  Send Inquiry
                </Link>
                <a
                  href="https://wa.me/8613800000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border border-neutral-200 hover:border-neutral-300 text-neutral-700 text-sm font-semibold rounded-full transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-wide"><div className="h-px bg-neutral-100" /></div>

      <section className="py-12">
        <div className="container-wide">
          <h2 className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-6">
            Specifications
          </h2>
          <div className="max-w-xl">
            <SpecTable specs={product.specs} />
          </div>
        </div>
      </section>

      <div className="container-wide"><div className="h-px bg-neutral-100" /></div>

      <section className="py-12">
        <div className="container-wide">
          <h2 className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-6">
            Applications
          </h2>
          <div className="flex flex-wrap gap-2">
            {product.applications.map((app) => (
              <span
                key={app}
                className="px-3 py-1.5 bg-neutral-50 border border-neutral-100 text-neutral-600 text-sm rounded-full"
              >
                {app}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
