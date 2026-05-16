import { HeroImmersive } from "@/components/sections/HeroImmersive";
import { DivisionsSplit } from "@/components/sections/DivisionsSplit";
import { StatsBar } from "@/components/sections/StatsBar";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { WhyPartnerNew } from "@/components/sections/WhyPartnerNew";
import { TrustEvidence } from "@/components/sections/TrustEvidence";
import { CTAFinal } from "@/components/sections/CTAFinal";

export default function Home() {
  return (
    <>
      <HeroImmersive />
      <DivisionsSplit />
      <StatsBar />
      <IndustriesGrid />
      <WhyPartnerNew />
      <TrustEvidence />
      <CTAFinal />
    </>
  );
}
