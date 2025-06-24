
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, ArrowRight, MapPin, Shield, Users, Clock, Headphones } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BenefitsSection from "@/components/BenefitsSection";
import WhyChooseUs from "@/components/WhyChooseUs";

const CentrumPomocyPoWypadkuSlawa = () => {
  const services = [
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Infolinia powypadkowa",
      description: "Całodobowa linia pomocy dla poszkodowanych w Sławie"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Wsparcie na miejscu",
      description: "Szybki dojazd do miejsca wypadku w Sławie"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Opieka nad poszkodowanym",
      description: "Kompleksowa pomoc i wsparcie"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Centrum regionalne",
      description: "Punkt obsługi dla województwa lubuskiego"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-white to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-indigo-100 text-indigo-800">
                  🏥 CENTRUM POMOCY SŁAWA
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-indigo-600">Centrum pomocy</span>
                  <br />
                  <span className="text-gray-900">po wypadku Sława</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Regionalne centrum pomocy dla poszkodowanych w wypadkach komunikacyjnych 
                  w Sławie i całym województwie lubuskim.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-lg px-8 py-4">
                  <Phone className="w-5 h-5 mr-2" />
                  Pomoc: 123-456-789
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-indigo-200 text-indigo-600 hover:bg-indigo-50">
                  <MapPin className="w-5 h-5 mr-2" />
                  Centrum Sława
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/98c1a9a6-892d-403f-a83e-d61e11ade53e.png"
                alt="Centrum pomocy po wypadku Sława"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <BenefitsSection />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default CentrumPomocyPoWypadkuSlawa;
