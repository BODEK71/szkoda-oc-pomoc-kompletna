
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, ArrowRight, MapPin, Shield, Users, Clock, Headphones } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BenefitsSection from "@/components/BenefitsSection";
import WhyChooseUs from "@/components/WhyChooseUs";

const CentrumPomocyPoWypadkuPoznan = () => {
  const services = [
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Infolinia powypadkowa",
      description: "Całodobowa linia pomocy dla poszkodowanych w Poznaniu"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Wsparcie na miejscu",
      description: "Najszybszy dojazd w centrum Poznania"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Opieka nad poszkodowanym",
      description: "Kompleksowa pomoc i wsparcie"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Centralna lokalizacja",
      description: "Punkt obsługi w centrum Poznania"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-800">
                  🏥 CENTRUM POMOCY POZNAŃ
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-green-600">Centrum pomocy</span>
                  <br />
                  <span className="text-gray-900">po wypadku Poznań</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Główne centrum pomocy dla poszkodowanych w wypadkach komunikacyjnych 
                  w Poznaniu i całej Wielkopolsce. Profesjonalne wsparcie 24/7.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Całodobowa dostępność",
                  "Doświadczony zespół w Poznaniu",
                  "Najszybsza reakcja w mieście",
                  "Kompleksowe wsparcie"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4">
                  <Phone className="w-5 h-5 mr-2" />
                  Pomoc: 123-456-789
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-green-200 text-green-600 hover:bg-green-50">
                  <MapPin className="w-5 h-5 mr-2" />
                  Centrum Poznań
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/98c1a9a6-892d-403f-a83e-d61e11ade53e.png"
                alt="Centrum pomocy po wypadku Poznań"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Jak możemy pomóc w Poznaniu
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Główne centrum wsparcia dla poszkodowanych w Wielkopolsce
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 text-center">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <BenefitsSection />
      <WhyChooseUs />

      {/* Emergency CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Miałeś wypadek w Poznaniu?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Zadzwoń natychmiast - główne centrum pomocy w Wielkopolsce działa 24/7!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Zadzwoń: 123-456-789
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              <Headphones className="w-5 h-5 mr-2" />
              Centrum pomocy
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CentrumPomocyPoWypadkuPoznan;
