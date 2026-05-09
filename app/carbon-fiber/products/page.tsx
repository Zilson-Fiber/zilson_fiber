import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { allCarbonFiberCategories } from "@/data/carbon-fiber";

export const metadata: Metadata = {
  title: "All Carbon Fiber Products",
  description: "Browse our complete range of carbon fiber materials including mats, cloth, and raw materials.",
};

export default function CarbonProductsPage() {
  return (
    <>
      <section className="pt-32 pb-12 bg-gradient-to-b from-neutral-900 to-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-neutral-400 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/carbon-fiber" className="hover:text-white">Carbon Fiber</Link>
            <span>/</span>
            <span className="text-white">All Products</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Carbon Fiber Products
          </h1>
          <p className="mt-3 text-neutral-400 max-w-2xl">
            High-performance carbon fiber materials for aerospace, motorsport, military, and advanced manufacturing.
          </p>
        </div>
      </section>

      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {allCarbonFiberCategories.map((category) => (
            <div key={category.slug}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-neutral-900">{category.name}</h2>
                <Link
                  href={`/carbon-fiber/products/${category.slug}`}
                  className="text-sm font-medium text-carbon-accent hover:underline"
                >
                  View All →
                </Link>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.products.slice(0, 4).map((product) => (
                  <Link
                    key={product.slug}
                    href={`/carbon-fiber/products/${category.slug}/${product.slug}`}
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
                      <h3 className="text-sm font-semibold text-neutral-900 group-hover:text-carbon-accent transition-colors line-clamp-1">
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
