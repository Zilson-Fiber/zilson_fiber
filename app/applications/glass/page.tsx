import { Metadata } from "next";
import { ApplicationsPageContent } from "@/components/applications/ApplicationsPageContent";

export const metadata: Metadata = {
  title: "Glass Fiber Applications",
  description:
    "Explore glass fiber application industries including wind energy, construction, industrial filtration, transportation, and marine composites.",
  alternates: {
    canonical: "/applications/glass",
  },
};

export default function GlassApplicationsPage() {
  return <ApplicationsPageContent selectedMaterial="glass" />;
}
