import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const siteConfig = {
  name: "Zilson Fiber",
  url: siteUrl,
  title: "Zilson Fiber | Engineered Fiber Solutions",
  description:
    "Carbon fiber and glass fiber composite materials for aerospace, wind energy, construction, transportation, and advanced manufacturing applications.",
  ogImage: "/logo.png",
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function createPageMetadata({
  title,
  description,
  path,
  image = siteConfig.ogImage,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
}): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type,
      siteName: siteConfig.name,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 1200,
          alt: `${siteConfig.name} logo`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}
