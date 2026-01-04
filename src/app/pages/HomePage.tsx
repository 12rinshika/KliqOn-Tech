import { useRef } from "react";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { ServicesSection } from "../components/ServicesSection";
import { TechStackSection } from "../components/TechStackSection";
import { MissionSection } from "../components/MissionSection";
import { AboutSection } from "../components/AboutSection";
import { ClientsSection } from "../components/ClientsSection";
import { CTASection } from "../components/CTASection";
import { Footer } from "../components/Footer";

export function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-[#0E1322] min-h-screen font-['Space_Grotesk',sans-serif] overflow-x-hidden">
      <Navbar />
      <HeroSection heroRef={heroRef}/>
      <ServicesSection />
      <TechStackSection />
      <AboutSection />
      <MissionSection />
      <ClientsSection />
      <CTASection />
      <Footer />
    </div>
  );
}

