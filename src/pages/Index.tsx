import Navigation from "@/components/Navigation"
import HeroSection from "@/components/HeroSection"
import ServicesSection from "@/components/ServicesSection"
import ShowcaseSection from "@/components/ShowcaseSection"
import CTASection from "@/components/CTASection"

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <ShowcaseSection />
      <CTASection />
    </div>
  );
};

export default Index;
