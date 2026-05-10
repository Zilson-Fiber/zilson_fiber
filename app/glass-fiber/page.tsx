import type { Metadata } from "next";
import GlassFiberPageContent from "./GlassFiberPageContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Glass Fiber Materials",
  description:
    "Browse fiberglass tissue mats, woven cloth, composite mats, stitched reinforcements, and specialty glass fiber materials for industrial use.",
  path: "/glass-fiber",
});

export default function GlassFiberPage() {
  return <GlassFiberPageContent />;
}
