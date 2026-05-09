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
      <section className="pt-32 pb-12 bg-gradient-to-b from-brand-700 to-brand-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Blog</h1>
          <p className="mt-3 text-brand-200">
            Industry insights, product knowledge, and technical guides.
          </p>
        </div>
      </section>

      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <article className="h-full bg-white rounded-2xl p-6 border border-neutral-100 hover:shadow-lg transition-all">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 bg-brand-600/10 text-brand-600 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-lg font-semibold text-neutral-900 group-hover:text-brand-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm text-neutral-500 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <p className="mt-4 text-xs text-neutral-400">{post.date}</p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
