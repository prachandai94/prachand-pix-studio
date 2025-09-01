import HeroSection from "@/components/HeroSection"
import ServicesSection from "@/components/ServicesSection"
import ShowcaseSection from "@/components/ShowcaseSection"
import DownloadBrochureSection from "@/components/DownloadBrochureSection"
import CTASection from "@/components/CTASection"

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <HeroSection />
      <ServicesSection />
      <ShowcaseSection />
      <DownloadBrochureSection />
      <CTASection />
    </div>
  );
};

export default Index;
