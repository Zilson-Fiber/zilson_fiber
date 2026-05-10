import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Fiber Materials Blog",
  description:
    "Read practical guides on carbon fiber, fiberglass, composite material selection, wind energy, construction, and advanced manufacturing applications.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-36 pb-16">
        <div className="container-wide">
          <p className="type-caption text-neutral-400">Blog</p>
          <h1 className="text-3xl sm:text-4xl font-semibold text-neutral-900 mt-3">
            Insights & Guides
          </h1>
          <p className="text-neutral-500 mt-4 max-w-xl leading-relaxed">
            Industry insights, product knowledge, and technical guides for
            composite material professionals.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="pb-24">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <article className="h-full overflow-hidden bg-neutral-50 border border-neutral-100 rounded-xl hover:border-neutral-200 transition-colors cursor-pointer">
                  <div className="relative h-44 bg-neutral-100 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 bg-white text-neutral-500 border border-neutral-200 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-base font-medium text-neutral-900 group-hover:text-carbon-accent transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-sm text-neutral-500 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <p className="mt-4 font-mono text-xs text-neutral-400">{post.date}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
