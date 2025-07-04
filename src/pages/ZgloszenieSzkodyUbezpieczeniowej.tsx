
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BenefitsSection from "@/components/BenefitsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import HeroSection from "@/components/damage-reporting/HeroSection";
import BasicInformationSection from "@/components/damage-reporting/BasicInformationSection";
import ReportingTimesSection from "@/components/damage-reporting/ReportingTimesSection";
import ReportingMethodsSection from "@/components/damage-reporting/ReportingMethodsSection";
import BLSSystemSection from "@/components/damage-reporting/BLSSystemSection";
import DocumentationSection from "@/components/damage-reporting/DocumentationSection";
import ProcessStepsSection from "@/components/damage-reporting/ProcessStepsSection";
import FAQSection from "@/components/damage-reporting/FAQSection";
import CTASection from "@/components/damage-reporting/CTASection";

const ZgloszenieSzkodyUbezpieczeniowej = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      
      <div className="space-y-16">
        <BasicInformationSection />
        <ReportingTimesSection />
        <ReportingMethodsSection />
        <BLSSystemSection />
      </div>

      <DocumentationSection />
      <ProcessStepsSection />
      <BenefitsSection />
      <WhyChooseUs />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default ZgloszenieSzkodyUbezpieczeniowej;
