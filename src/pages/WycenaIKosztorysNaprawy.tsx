
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BenefitsSection from "@/components/BenefitsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import HeroSection from "@/components/valuation/HeroSection";
import ServicesSection from "@/components/valuation/ServicesSection";
import WhyChooseUsSection from "@/components/valuation/WhyChooseUsSection";
import ProcessSection from "@/components/valuation/ProcessSection";
import FAQSection from "@/components/valuation/FAQSection";
import CTASection from "@/components/valuation/CTASection";

const WycenaIKosztorysNaprawy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <FAQSection />
      <BenefitsSection />
      <WhyChooseUs />
      <CTASection />
      <Footer />
    </div>
  );
};

export default WycenaIKosztorysNaprawy;
