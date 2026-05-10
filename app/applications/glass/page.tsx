import { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { ApplicationsPageContent } from "@/components/applications/ApplicationsPageContent";

export const metadata: Metadata = createPageMetadata({
  title: "Glass Fiber Applications",
  description:
    "Explore glass fiber applications in wind energy, construction, marine, filtration, transportation, and industrial composite uses.",
  path: "/applications/glass",
});

export default function GlassApplicationsPage() {
  return <ApplicationsPageContent selectedMaterial="glass" />;
}
