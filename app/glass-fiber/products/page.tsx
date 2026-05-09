import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { allGlassFiberCategories } from "@/data/glass-fiber";

export const metadata: Metadata = {
  title: "All Glass Fiber Products",
  description: "Browse our complete range of fiberglass materials including tissue mats, cloth, composite mats, and specialty fibers.",
};

export default function GlassProductsPage() {
  return (
    <>
      <section className="pt-32 pb-12 bg-gradient-to-b from-brand-700 to-brand-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-brand-200 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/glass-fiber" className="hover:text-white">Glass Fiber</Link>
            <span>/</span>
            <span className="text-white">All Products</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Glass Fiber Products
          </h1>
          <p className="mt-3 text-brand-200 max-w-2xl">
            Reliable fiberglass materials for wind energy, construction, transportation, and industrial applications.
          </p>
        </div>
      </section>

      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {allGlassFiberCategories.map((category) => (
            <div key={category.slug}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-neutral-900">{category.name}</h2>
                <Link
                  href={`/glass-fiber/products/${category.slug}`}
                  className="text-sm font-medium text-glass-accent hover:underline"
                >
                  View All →
                </Link>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.products.slice(0, 4).map((product) => (
                  <Link
                    key={product.slug}
                    href={`/glass-fiber/products/${category.slug}/${product.slug}`}
                    className="group block bg-white rounded-xl overflow-hidden border border-neutral-100 hover:shadow-md transition-all"
                  >
                    <div className="relative h-36 bg-neutral-100">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-sm font-semibold text-neutral-900 group-hover:text-glass-accent transition-colors line-clamp-1">
                        {product.name}
                      </h3>
                      <p className="mt-1 text-xs text-neutral-500 line-clamp-1">
                        {product.specs[0]?.value}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
