import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  image: string;
  content: string;
};

const blogDirectory = path.join(process.cwd(), "content", "blog");

function readBlogPost(fileName: string): BlogPost {
  const fullPath = path.join(blogDirectory, fileName);
  const source = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(source);

  return {
    slug: String(data.slug ?? fileName.replace(/\.md$/, "")),
    title: String(data.title ?? "Untitled Article"),
    excerpt: String(data.description ?? ""),
    date: String(data.date ?? ""),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    image: String(data.image ?? "/logo.png"),
    content,
  };
}

export function getAllBlogPosts(): BlogPost[] {
  if (!fs.existsSync(blogDirectory)) return [];

  return fs
    .readdirSync(blogDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .map(readBlogPost)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getBlogPost(slug: string) {
  return getAllBlogPosts().find((post) => post.slug === slug);
}

export const blogPosts = getAllBlogPosts();
