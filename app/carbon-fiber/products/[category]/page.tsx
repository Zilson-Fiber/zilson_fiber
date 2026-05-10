import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { allCarbonFiberCategories } from "@/data/carbon-fiber";
import { ProductCard } from "@/components/products/ProductCard";
import { createPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ category: string }> };

export async function generateStaticParams() {
  return allCarbonFiberCategories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params;
  const category = allCarbonFiberCategories.find((c) => c.slug === slug);
  if (!category) return {};
  return createPageMetadata({
    title: `${category.name} Products`,
    description: category.description,
    path: `/carbon-fiber/products/${category.slug}`,
    image: category.image,
  });
}

export default async function CarbonCategoryPage({ params }: Props) {
  const { category: slug } = await params;
  const category = allCarbonFiberCategories.find((c) => c.slug === slug);
  if (!category) notFound();

  return (
    <>
      <section className="pt-36 pb-16">
        <div className="container-wide">
          <nav className="flex items-center gap-2 text-sm text-neutral-400 mb-6">
            <Link href="/" className="hover:text-neutral-700 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/carbon-fiber" className="hover:text-neutral-700 transition-colors">Carbon Fiber</Link>
            <span>/</span>
            <span className="text-neutral-600">{category.name}</span>
          </nav>
          <h1 className="text-2xl sm:text-3xl font-semibold text-neutral-900">
            {category.name}
          </h1>
          <p className="text-neutral-500 mt-3 max-w-2xl leading-relaxed">{category.description}</p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-wide">
          <h2 className="sr-only">Products in this category</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {category.products.map((product) => (
              <ProductCard
                key={product.slug}
                product={product}
                basePath={`/carbon-fiber/products/${category.slug}`}
                accentColor="carbon-accent"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
