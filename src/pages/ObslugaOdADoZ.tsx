
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, ArrowRight, ListChecks, Clock, Users, Award, Shield, FileText, Wrench } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BenefitsSection from "@/components/BenefitsSection";
import WhyChooseUs from "@/components/WhyChooseUs";

const ObslugaOdADoZ = () => {
  const steps = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "A - Analiza sytuacji",
      description: "Szczegółowa analiza wypadku i dokumentacji"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "B - Bezpośredni kontakt z ubezpieczycielem",
      description: "Profesjonalna komunikacja z towarzystwem ubezpieczeniowym"
    },
    {
      icon: <ListChecks className="w-6 h-6" />,
      title: "C - Całościowa dokumentacja",
      description: "Kompletne przygotowanie wszystkich dokumentów"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "D - Dedykowana opieka",
      description: "Osobisty opiekun przez cały proces"
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "E - Ekspertkie naprawy",
      description: "Profesjonalne naprawy w sprawdzonych warsztatach"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "F - Finalizacja sprawy",
      description: "Pełne rozliczenie i przekazanie naprawionego pojazdu"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 via-white to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-teal-100 text-teal-800">
                  📋 KOMPLETNA OBSŁUGA
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-teal-600">Obsługa</span>
                  <br />
                  <span className="text-gray-900">od A do Z</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Kompletna obsługa powypadkowa według sprawdzonego systemu. 
                  Przeprowadzimy Cię przez każdy etap - od analizy po finalizację.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Sprawdzony system obsługi",
                  "Każdy etap pod kontrolą",
                  "Dedykowany opiekun",
                  "Gwarancja jakości"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-lg px-8 py-4">
                  <Phone className="w-5 h-5 mr-2" />
                  Rozpocznij: 123-456-789
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-teal-200 text-teal-600 hover:bg-teal-50">
                  Poznaj proces
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/98c1a9a6-892d-403f-a83e-d61e11ade53e.png"
                alt="Obsługa od A do Z"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nasz sprawdzony proces
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Obsługa powypadkowa według alfabetu - każdy etap ma swoje miejsce
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 text-center">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {step.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {step.description}
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
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Gotowy na pełną obsługę?
          </h2>
          <p className="text-xl mb-8 text-teal-100">
            Pozwól nam przeprowadzić Cię przez cały proces - od A do Z!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Zadzwoń: 123-456-789
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              <ListChecks className="w-5 h-5 mr-2" />
              Sprawdź proces
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ObslugaOdADoZ;
