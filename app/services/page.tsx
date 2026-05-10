import type { Metadata } from "next";
import ServicesPageContent from "./ServicesPageContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Composite Material Services",
  description:
    "Explore Zilson Fiber services including OEM and ODM customization, technical support, quality assurance, logistics, and after-sales support.",
  path: "/services",
});

export default function ServicesPage() {
  return <ServicesPageContent />;
}
