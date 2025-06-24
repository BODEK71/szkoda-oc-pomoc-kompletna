
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, ArrowRight, UserCheck, Scale, FileCheck, Briefcase } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BenefitsSection from "@/components/BenefitsSection";
import WhyChooseUs from "@/components/WhyChooseUs";

const PelnaObslugaPoszkodowanych = () => {
  const services = [
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Opieka nad poszkodowanym",
      description: "Kompleksowa opieka od momentu wypadku"
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Reprezentacja prawna",
      description: "Profesjonalna pomoc prawna i reprezentacja"
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Obsługa dokumentacji",
      description: "Załatwianie wszystkich formalności"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Dochodzenie odszkodowań",
      description: "Maksymalizacja należnych odszkodowań"
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
                  👥 PEŁNA OBSŁUGA
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-green-600">Pełna obsługa</span>
                  <br />
                  <span className="text-gray-900">poszkodowanych</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Kompleksowa opieka nad poszkodowanymi w wypadkach komunikacyjnych. 
                  Zapewniamy pełne wsparcie prawne, medyczne i administracyjne.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Reprezentacja prawna",
                  "Pomoc w dochodzeniu odszkodowań",
                  "Opieka medyczna i rehabilitacja",
                  "Wsparcie psychologiczne"
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
                  Kontakt: 123-456-789
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-green-200 text-green-600 hover:bg-green-50">
                  Bezpłatna konsultacja
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/98c1a9a6-892d-403f-a83e-d61e11ade53e.png"
                alt="Pełna obsługa poszkodowanych"
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
              Zakres naszej opieki
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kompleksowa opieka nad poszkodowanymi na każdym etapie procesu
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Jesteś poszkodowanym w wypadku?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Nie zostawimy Cię samego - zapewnimy pełną opiekę i wsparcie!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Zadzwoń: 123-456-789
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              <UserCheck className="w-5 h-5 mr-2" />
              Zgłoś się po pomoc
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PelnaObslugaPoszkodowanych;
