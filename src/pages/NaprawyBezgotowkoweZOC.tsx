
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, ArrowRight, Wrench, Shield, Clock, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BenefitsSection from "@/components/BenefitsSection";
import WhyChooseUs from "@/components/WhyChooseUs";

const NaprawyBezgotowkoweZOC = () => {
  const repairTypes = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Naprawa blacharsko-lakiernicza",
      description: "Kompleksowa naprawa uszkodzeń karoserii i lakieru",
      features: [
        "Prostowanie karoserii",
        "Usuwanie wgnieceń", 
        "Lakierowanie komputerowe",
        "Polerowanie i renowacja"
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Mechanika powypadkowa",
      description: "Naprawa układów mechanicznych po kolizji",
      features: [
        "Diagnostyka komputerowa",
        "Naprawa zawieszenia",
        "Układy hamulcowe",
        "Naprawa silnika"
      ]
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Szybka realizacja",
      description: "Ekspresowe naprawy dla pilnych przypadków",
      features: [
        "Naprawa w 24h",
        "Auto zastępcze na czas naprawy",
        "Holowanie bezgotówkowe",
        "Całodobowa obsługa"
      ]
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Gwarancja jakości",
      description: "Najwyższa jakość wykonanych napraw",
      features: [
        "Gwarancja na naprawy",
        "Certyfikowane warsztaty",
        "Oryginalne części",
        "Kontrola jakości"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-50 via-white to-red-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-red-100 text-red-800">
                  🔧 NAPRAWY BEZGOTÓWKOWE
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-red-600">Naprawy bezgotówkowe</span>
                  <br />
                  <span className="text-gray-900">z OC sprawcy</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Profesjonalne naprawy powypadkowe bez Twojego udziału finansowego. 
                  Wszystkie formalności załatwiamy za Ciebie.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Bezgotówkowe rozliczenie",
                  "Gwarancja na naprawy",
                  "Auto zastępcze gratis",
                  "Holowanie bezpłatne"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-lg px-8 py-4">
                  <Phone className="w-5 h-5 mr-2" />
                  Zadzwoń: 123-456-789
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-red-200 text-red-600 hover:bg-red-50">
                  Bezpłatna wycena
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/98c1a9a6-892d-403f-a83e-d61e11ade53e.png"
                alt="Naprawy bezgotówkowe z OC sprawcy"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Repair Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Rodzaje napraw bezgotówkowych
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferujemy pełen zakres napraw powypadkowych rozliczanych bezpośrednio z OC sprawcy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {repairTypes.map((type, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                    {type.icon}
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {type.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {type.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    {type.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <BenefitsSection />
      <WhyChooseUs />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Potrzebujesz naprawy bezgotówkowej?
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Skontaktuj się z nami już teraz. Załatwimy wszystkie formalności 
            z ubezpieczycielem i znajdziemy najlepszy warsztat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Zadzwoń: 123-456-789
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              <Wrench className="w-5 h-5 mr-2" />
              Bezpłatna wycena
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NaprawyBezgotowkoweZOC;
