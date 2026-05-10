import { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import Link from "next/link";
import Image from "next/image";
import { allGlassFiberCategories } from "@/data/glass-fiber";

export const metadata: Metadata = createPageMetadata({
  title: "Glass Fiber Product Catalog",
  description:
    "Browse fiberglass tissue mats, woven fabrics, stitched mats, chopped strand mats, and specialty glass fiber products.",
  path: "/glass-fiber/products",
});

export default function GlassProductsPage() {
  return (
    <>
      <section className="pt-36 pb-16">
        <div className="container-wide">
          <nav className="flex items-center gap-2 text-sm text-neutral-400 mb-6">
            <Link href="/" className="hover:text-neutral-700 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/glass-fiber" className="hover:text-neutral-700 transition-colors">Glass Fiber</Link>
            <span>/</span>
            <span className="text-neutral-600">All Products</span>
          </nav>
          <h1 className="text-2xl sm:text-3xl font-semibold text-neutral-900">
            Glass Fiber Products
          </h1>
          <p className="text-neutral-500 mt-3 max-w-2xl leading-relaxed">
            Reliable fiberglass materials for wind energy, construction, transportation, and industrial applications.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-wide space-y-16">
          {allGlassFiberCategories.map((category) => (
            <div key={category.slug}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-sm font-medium text-neutral-900">{category.name}</h2>
                <Link
                  href={`/glass-fiber/products/${category.slug}`}
                  className="text-xs font-medium text-glass-accent hover:text-neutral-900 transition-colors"
                >
                  View All →
                </Link>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.products.slice(0, 4).map((product) => (
                  <Link
                    key={product.slug}
                    href={`/glass-fiber/products/${category.slug}/${product.slug}`}
                    className="group block bg-white border border-neutral-100 rounded-lg hover:border-neutral-200 overflow-hidden transition-colors cursor-pointer"
                  >
                    <div className="relative h-36 bg-neutral-100 overflow-hidden">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-sm font-medium text-neutral-900 group-hover:text-glass-accent transition-colors line-clamp-1">
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
