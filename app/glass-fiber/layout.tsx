import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Glass Fiber Products | Reliable Composite Materials",
  description:
    "Explore our glass fiber product line: tissue mats, woven cloth, composite mats, and specialty materials for wind energy, construction, and industrial applications.",
};

export default function GlassFiberLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
