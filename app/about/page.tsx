import type { Metadata } from "next";
import AboutPageContent from "./AboutPageContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About Zilson Fiber",
  description:
    "Learn about Zilson Fiber's composite material manufacturing capabilities, carbon fiber and glass fiber product focus, and global service approach.",
  path: "/about",
});

export default function AboutPage() {
  return <AboutPageContent />;
}
