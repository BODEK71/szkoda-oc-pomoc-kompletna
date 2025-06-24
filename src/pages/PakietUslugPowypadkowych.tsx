
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, ArrowRight, Package, Shield, Users, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BenefitsSection from "@/components/BenefitsSection";
import WhyChooseUs from "@/components/WhyChooseUs";

const PakietUslugPowypadkowych = () => {
  const packages = [
    {
      icon: <Package className="w-6 h-6" />,
      title: "Pakiet BASIC",
      description: "Podstawowa obsługa szkody OC",
      features: ["Zgłoszenie szkody", "Kontakt z ubezpieczycielem", "Kosztorys napraw"]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Pakiet STANDARD",
      description: "Rozszerzona obsługa powypadkowa",
      features: ["Wszystko z pakietu BASIC", "Auto zastępcze", "Pomoc drogowa", "Pomoc prawna"]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Pakiet PREMIUM",
      description: "Kompleksowa opieka nad poszkodowanym",
      features: ["Wszystko z pakietu STANDARD", "Wsparcie psychologiczne", "Opieka medyczna", "Reprezentacja sądowa"]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Pakiet VIP",
      description: "Najwyższy poziom obsługi 24/7",
      features: ["Wszystko z pakietu PREMIUM", "Priorytetowe traktowanie", "Dedykowany opiekun", "Holowanie premium"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-purple-100 text-purple-800">
                  📦 PAKIETY USŁUG
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-purple-600">Pakiet usług</span>
                  <br />
                  <span className="text-gray-900">powypadkowych</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Wybierz pakiet usług dopasowany do Twoich potrzeb. 
                  Od podstawowej obsługi po kompleksową opiekę VIP.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "4 różne pakiety usług",
                  "Dopasowane do budżetu",
                  "Gwarancja jakości",
                  "Wsparcie 24/7"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-4">
                  <Phone className="w-5 h-5 mr-2" />
                  Wybierz pakiet: 123-456-789
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-purple-200 text-purple-600 hover:bg-purple-50">
                  Porównaj pakiety
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/98c1a9a6-892d-403f-a83e-d61e11ade53e.png"
                alt="Pakiet usług powypadkowych"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nasze pakiety usług
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wybierz pakiet idealnie dopasowany do Twoich potrzeb i budżetu
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                    {pkg.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {pkg.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <BenefitsSection />
      <WhyChooseUs />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Wybierz swój pakiet już dziś!
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Skontaktuj się z nami i wybierz pakiet idealnie dopasowany do Twoich potrzeb
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Zadzwoń: 123-456-789
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              <Package className="w-5 h-5 mr-2" />
              Porównaj pakiety
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PakietUslugPowypadkowych;
