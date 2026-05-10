import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "@/data/blog";
import { createPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return createPageMetadata({
      title: "Article Not Found",
      description: "The requested Zilson Fiber article could not be found.",
      path: `/blog/${slug}`,
    });
  }

  return createPageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.image,
    type: "article",
  });
}

function renderInline(text: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\)|`[^`]+`|\*\*[^*]+\*\*)/g);

  return parts.map((part, index) => {
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      return (
        <Link key={index} href={link[2]} className="text-carbon-accent hover:text-neutral-900 transition-colors">
          {link[1]}
        </Link>
      );
    }

    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }

    if (part.startsWith("`") && part.endsWith("`")) {
      return <code key={index} className="rounded bg-neutral-100 px-1 py-0.5 text-xs">{part.slice(1, -1)}</code>;
    }

    return part;
  });
}

function renderMarkdown(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let paragraph: string[] = [];
  let list: string[] = [];
  let table: string[] = [];

  const flushParagraph = () => {
    if (!paragraph.length) return;
    elements.push(
      <p key={`p-${elements.length}`} className="leading-relaxed text-neutral-600">
        {renderInline(paragraph.join(" "))}
      </p>,
    );
    paragraph = [];
  };

  const flushList = () => {
    if (!list.length) return;
    elements.push(
      <ul key={`ul-${elements.length}`} className="list-disc space-y-2 pl-5 text-neutral-600">
        {list.map((item) => (
          <li key={item}>{renderInline(item)}</li>
        ))}
      </ul>,
    );
    list = [];
  };

  const flushTable = () => {
    if (table.length < 2) {
      table = [];
      return;
    }

    const rows = table
      .filter((row) => !/^\|?\s*:?-{3,}:?/.test(row.replace(/\|/g, "").trim()))
      .map((row) => row.split("|").map((cell) => cell.trim()).filter(Boolean));
    const [head, ...body] = rows;

    elements.push(
      <div key={`table-${elements.length}`} className="overflow-x-auto rounded-xl border border-neutral-100">
        <table className="w-full text-left text-sm">
          <thead className="bg-neutral-50 text-neutral-900">
            <tr>{head.map((cell) => <th key={cell} className="px-4 py-3 font-medium">{renderInline(cell)}</th>)}</tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {body.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => <td key={cellIndex} className="px-4 py-3 text-neutral-600">{renderInline(cell)}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>,
    );
    table = [];
  };

  const flushAll = () => {
    flushParagraph();
    flushList();
    flushTable();
  };

  lines.forEach((line) => {
    const trimmed = line.trim();

    if (!trimmed) {
      flushAll();
      return;
    }

    if (trimmed.startsWith("|")) {
      flushParagraph();
      flushList();
      table.push(trimmed);
      return;
    }

    flushTable();

    const image = trimmed.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
    if (image) {
      flushParagraph();
      flushList();
      elements.push(
        <figure key={`img-${elements.length}`} className="my-8 overflow-hidden rounded-2xl border border-neutral-100 bg-neutral-50">
          <Image src={image[2]} alt={image[1]} width={1200} height={720} className="h-auto w-full object-cover" />
          {image[1] && <figcaption className="px-4 py-3 text-xs text-neutral-400">{image[1]}</figcaption>}
        </figure>,
      );
      return;
    }

    if (trimmed.startsWith("# ")) return;

    if (trimmed.startsWith("## ")) {
      flushParagraph();
      flushList();
      elements.push(<h2 key={`h2-${elements.length}`} className="mt-10 text-2xl font-semibold text-neutral-900">{renderInline(trimmed.slice(3))}</h2>);
      return;
    }

    if (trimmed.startsWith("### ")) {
      flushParagraph();
      flushList();
      elements.push(<h3 key={`h3-${elements.length}`} className="mt-7 text-lg font-semibold text-neutral-900">{renderInline(trimmed.slice(4))}</h3>);
      return;
    }

    if (trimmed.startsWith("- ")) {
      flushParagraph();
      list.push(trimmed.slice(2));
      return;
    }

    if (/^\d+\.\s/.test(trimmed)) {
      flushParagraph();
      list.push(trimmed.replace(/^\d+\.\s/, ""));
      return;
    }

    paragraph.push(trimmed);
  });

  flushAll();
  return elements;
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <article className="pt-36 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-sm text-neutral-400 mb-8">
          <Link href="/" className="hover:text-neutral-700 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-neutral-700 transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-neutral-600">{post.title}</span>
        </nav>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {post.tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-0.5 bg-neutral-50 text-neutral-500 border border-neutral-200 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-3xl sm:text-4xl font-semibold text-neutral-900 leading-tight">
          {post.title}
        </h1>
        <p className="mt-4 font-mono text-xs text-neutral-400">{post.date}</p>
        <p className="mt-6 text-lg leading-relaxed text-neutral-500">{post.excerpt}</p>

        <div className="mt-10 space-y-5 text-sm">
          {renderMarkdown(post.content)}
        </div>

        <div className="mt-12 rounded-2xl border border-neutral-100 bg-neutral-50 p-6">
          <h2 className="text-lg font-semibold text-neutral-900">Need help choosing a material?</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-600">
            Send your target application, process, and required specifications. Zilson Fiber can help compare carbon fiber and glass fiber material options for your project.
          </p>
          <Link href="/contact" className="inline-flex mt-5 rounded-full bg-accent-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-600 transition-colors">
            Contact Zilson Fiber
          </Link>
        </div>
      </div>
    </article>
  );
}
