import { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Carbon Fiber Materials",
  description:
    "Explore carbon fiber mats, cloth, raw fiber, and custom composite reinforcements for demanding industrial applications.",
  path: "/carbon-fiber",
});

export default function CarbonFiberLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
