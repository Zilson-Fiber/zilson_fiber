import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { allCarbonFiberCategories } from "@/data/carbon-fiber";
import { allGlassFiberCategories } from "@/data/glass-fiber";
import { applicationGroups } from "@/data/applications";
import { blogPosts } from "@/data/blog";

const staticRoutes = [
  "",
  "/about",
  "/applications",
  "/applications/glass",
  "/blog",
  "/carbon-fiber",
  "/carbon-fiber/products",
  "/contact",
  "/glass-fiber",
  "/glass-fiber/products",
  "/privacy",
  "/services",
  "/terms",
];

const blogRoutes = blogPosts.map((post) => `/blog/${post.slug}`);

function productRoutes(basePath: string, categories: typeof allCarbonFiberCategories) {
  return categories.flatMap((category) => [
    `${basePath}/products/${category.slug}`,
    ...category.products.map((product) => `${basePath}/products/${category.slug}/${product.slug}`),
  ]);
}

function applicationRoutes() {
  return applicationGroups.flatMap((group) =>
    group.applications
      .map((application) => application.detailHref)
      .filter((href): href is string => Boolean(href)),
  );
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ...staticRoutes,
    ...blogRoutes,
    ...productRoutes("/carbon-fiber", allCarbonFiberCategories),
    ...productRoutes("/glass-fiber", allGlassFiberCategories),
    ...applicationRoutes(),
  ];

  return routes.map((route) => ({
    url: absoluteUrl(route || "/"),
    lastModified: new Date(),
    changeFrequency: route.includes("/blog/") ? "monthly" : "weekly",
    priority: route === "" ? 1 : route.split("/").length <= 2 ? 0.8 : 0.6,
  }));
}
