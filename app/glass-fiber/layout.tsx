import { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Glass Fiber Materials",
  description:
    "Explore fiberglass tissue mats, woven fabrics, composite mats, and specialty reinforcements for industrial applications.",
  path: "/glass-fiber",
});

export default function GlassFiberLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
