import type { Metadata } from "next";
import CarbonFiberPageContent from "./CarbonFiberPageContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Carbon Fiber Materials",
  description:
    "Browse carbon fiber mats, woven cloth, hybrid cloth, and raw fiber materials for aerospace, motorsport, defense, and energy applications.",
  path: "/carbon-fiber",
});

export default function CarbonFiberPage() {
  return <CarbonFiberPageContent />;
}
