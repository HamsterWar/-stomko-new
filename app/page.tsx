import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Promos } from "@/components/sections/Promos";
import { StatsBand } from "@/components/sections/StatsBand";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { PricingTeaser } from "@/components/sections/PricingTeaser";
import { DoctorsCarousel } from "@/components/sections/DoctorsCarousel";
import { WhyUs } from "@/components/sections/WhyUs";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Reviews } from "@/components/sections/Reviews";
import { Branches } from "@/components/sections/Branches";
import { FAQ } from "@/components/sections/FAQ";
import { PreFooterCTA } from "@/components/sections/PreFooterCTA";
import { faqLd } from "@/lib/schema-ld";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd()) }}
      />
      <Hero />
      <TrustBar />
      <Promos />
      <ServicesGrid />
      <StatsBand />
      <PricingTeaser />
      <DoctorsCarousel />
      <WhyUs />
      <BeforeAfter />
      <Reviews />
      <Branches />
      <FAQ />
      <PreFooterCTA />
    </>
  );
}
