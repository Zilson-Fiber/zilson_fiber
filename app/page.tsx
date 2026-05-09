import { Hero } from "@/components/sections/Hero";
import { DivisionSplit } from "@/components/sections/DivisionSplit";
import { Stats } from "@/components/sections/Stats";
import { Applications } from "@/components/sections/Applications";
import { CTABanner } from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <DivisionSplit />
      <Stats />
      <Applications />
      <CTABanner />
    </>
  );
}
