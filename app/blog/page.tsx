import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Fiber Materials Knowledge & Industry News",
  description:
    "Expert articles on carbon fiber, fiberglass, composite materials, and their applications in wind energy, aerospace, construction, and more.",
};

const posts = [
  {
    slug: "carbon-fiber-vs-fiberglass",
    title: "Carbon Fiber vs Fiberglass: A Complete Comparison Guide",
    excerpt:
      "Understanding the key differences in strength, weight, cost, and applications between carbon fiber and fiberglass materials.",
    date: "2026-04-15",
    tags: ["comparison", "carbon", "glass"],
  },
  {
    slug: "fiberglass-in-wind-energy",
    title: "How Fiberglass Reinforcements Power Wind Turbine Blades",
    excerpt:
      "An in-depth look at how multiaxial and composite mats are used in modern wind turbine blade manufacturing.",
    date: "2026-03-28",
    tags: ["glass", "wind-energy", "application"],
  },
  {
    slug: "understanding-gsm-fiber-materials",
    title: "Understanding GSM in Fiber Materials: A Buyer's Guide",
    excerpt:
      "What does g/m² mean for your application? Learn how to choose the right weight for your composite project.",
    date: "2026-03-10",
    tags: ["guide", "carbon", "glass"],
  },
];

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
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <article className="h-full p-6 bg-neutral-50 border border-neutral-100 rounded-lg hover:border-neutral-200 transition-colors cursor-pointer">
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
                  <h2 className="text-sm font-medium text-neutral-900 group-hover:text-carbon-accent transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm text-neutral-500 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <p className="mt-4 font-mono text-xs text-neutral-400">{post.date}</p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
