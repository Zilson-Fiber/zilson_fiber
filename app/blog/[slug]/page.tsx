import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog Article",
};

export default function BlogArticlePage() {
  return (
    <>
      <section className="pt-36 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-neutral-400 mb-8">
            <Link href="/" className="hover:text-neutral-700 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-neutral-700 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-neutral-600">Article</span>
          </nav>
          <h1 className="text-xl sm:text-2xl font-semibold text-neutral-900">
            Coming Soon
          </h1>
          <p className="mt-4 text-neutral-500 text-sm leading-relaxed">
            This article is being prepared. Check back soon for expert insights
            on fiber materials and composite manufacturing.
          </p>
          <Link
            href="/blog"
            className="inline-block mt-8 text-sm font-medium text-carbon-accent hover:text-neutral-900 transition-colors"
          >
            ← Back to Blog
          </Link>
        </div>
      </section>
    </>
  );
}
