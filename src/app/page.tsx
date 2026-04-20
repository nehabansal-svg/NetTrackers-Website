import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import ProblemSection from "@/components/sections/ProblemSection";
import ServicesSection from "@/components/sections/ServicesSection";
import DifferenceSection from "@/components/sections/DifferenceSection";
import ResultsSection from "@/components/sections/ResultsSection";
import HowItWorks from "@/components/sections/HowItWorks";
import IndustriesSection from "@/components/sections/IndustriesSection";
import TrustSignals from "@/components/sections/TrustSignals";
import LocationsSection from "@/components/sections/LocationsSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTA from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <SmoothScrollProvider>
      <Header />
      <main>
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Trust Bar */}
        <TrustBar />

        {/* Section 3: The Problem We Solve */}
        <ProblemSection />

        {/* Section 4: Services */}
        <ServicesSection />

        {/* Section 5: The NetTrackers Difference */}
        <DifferenceSection />

        {/* Section 6: Results Showcase */}
        <ResultsSection />

        {/* Section 7: How It Works */}
        <HowItWorks />

        {/* Section 8: Industries */}
        <IndustriesSection />

        {/* Section 9: Trust Signals */}
        <TrustSignals />

        {/* Section 10: Locations */}
        <LocationsSection />

        {/* Section 11: FAQ */}
        <FAQSection />

        {/* Section 13: Final CTA */}
        <FinalCTA />
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}
