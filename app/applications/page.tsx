import { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { permanentRedirect } from "next/navigation";
import { ApplicationsPageContent } from "@/components/applications/ApplicationsPageContent";

export const metadata: Metadata = createPageMetadata({
  title: "Carbon Fiber Applications",
  description:
    "Explore carbon fiber application areas including aerospace, defense, new energy, motorsport, and advanced manufacturing.",
  path: "/applications",
});

type Props = {
  searchParams?: Promise<{ material?: string }>;
};

export default async function ApplicationsPage({ searchParams }: Props) {
  const params = await searchParams;

  if (params?.material === "glass") {
    permanentRedirect("/applications/glass");
  }

  if (params?.material === "carbon") {
    permanentRedirect("/applications");
  }

  return <ApplicationsPageContent selectedMaterial="carbon" />;
}
