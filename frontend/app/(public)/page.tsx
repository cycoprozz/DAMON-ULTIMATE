import HeroSection from "@/components/shared/HeroSection";
import ServicesSection from "@/components/shared/ServicesSection";
import HowItWorksSection from "@/components/shared/HowItWorksSection";
import PortfolioShowcase from "@/components/shared/PortfolioShowcase";
import FinalCTA from "@/components/shared/FinalCTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <PortfolioShowcase />
      <FinalCTA />
    </div>
  );
}
