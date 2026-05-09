import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { allCarbonFiberCategories } from "@/data/carbon-fiber";
import { ProductCard } from "@/components/products/ProductCard";

type Props = { params: Promise<{ category: string }> };

export async function generateStaticParams() {
  return allCarbonFiberCategories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params;
  const category = allCarbonFiberCategories.find((c) => c.slug === slug);
  if (!category) return {};
  return {
    title: `${category.name} | Carbon Fiber Products`,
    description: category.description,
  };
}

export default async function CarbonCategoryPage({ params }: Props) {
  const { category: slug } = await params;
  const category = allCarbonFiberCategories.find((c) => c.slug === slug);
  if (!category) notFound();

  return (
    <>
      <section className="pt-32 pb-12 bg-gradient-to-b from-neutral-900 to-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-neutral-400 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/carbon-fiber" className="hover:text-white">Carbon Fiber</Link>
            <span>/</span>
            <span className="text-white">{category.name}</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            {category.name}
          </h1>
          <p className="mt-3 text-neutral-400 max-w-2xl">
            {category.description}
          </p>
        </div>
      </section>

      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
