import { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import { ApplicationsPageContent } from "@/components/applications/ApplicationsPageContent";

export const metadata: Metadata = {
  title: "Carbon Fiber Applications",
  description:
    "Explore carbon fiber application industries including aerospace, automotive, new energy, military defense, and high-end manufacturing.",
  alternates: {
    canonical: "/applications",
  },
};

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
