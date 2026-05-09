import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carbon Fiber Products | High-Performance Composite Materials",
  description:
    "Explore our carbon fiber product line: surface mats, needled mats, woven cloth, and raw materials for aerospace, motorsport, military, and new energy applications.",
};

export default function CarbonFiberLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
