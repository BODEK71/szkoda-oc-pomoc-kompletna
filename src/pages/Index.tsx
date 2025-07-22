
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Phone, Mail, MapPin, CheckCircle, Car, Wrench, CreditCard, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import KeyBenefitsSection from "@/components/KeyBenefitsSection";
import BenefitsSection from "@/components/BenefitsSection";
import AboutCenterSection from "@/components/AboutCenterSection";
import HowCenterWorksSection from "@/components/HowCenterWorksSection";
import CenterDepartmentsSection from "@/components/CenterDepartmentsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <KeyBenefitsSection />
      <AboutCenterSection />
      <HowCenterWorksSection />
      <CenterDepartmentsSection />
      <BenefitsSection />
      <WhyChooseUs />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
