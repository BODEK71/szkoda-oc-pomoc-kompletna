
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, ArrowRight, Truck, Clock, MapPin, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BenefitsSection from "@/components/BenefitsSection";
import WhyChooseUs from "@/components/WhyChooseUs";

const Holowanie24h = () => {
  const services = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Holowanie standardowe",
      description: "Transport samochodów osobowych i dostawczych"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Transport bezpieczny",
      description: "Profesjonalny sprzęt i doświadczeni operatorzy"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Dostępność 24/7",
      description: "Pomoc drogowa przez całą dobę, 7 dni w tygodniu"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Cała Wielkopolska",
      description: "Działamy na terenie całego województwa wielkopolskiego"
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
                  🚛 POMOC DROGOWA 24H
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-red-600">Holowanie</span>
                  <br />
                  <span className="text-gray-900">24 godziny</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Profesjonalna pomoc drogowa przez całą dobę. 
                  Szybki dojazd, bezpieczny transport, konkurencyjne ceny.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Dostępność 24/7",
                  "Szybki czas dojazdu",
                  "Profesjonalny sprzęt",
                  "Doświadczeni operatorzy"
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
                  Wezwij pomoc
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/76305d0f-89ec-4769-aaba-307d63ecc85b.png"
                alt="Holowanie 24h"
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
              Nasze usługi holowania
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kompleksowa pomoc drogowa dostępna przez cały rok
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 text-center">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
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
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Potrzebujesz pomocy drogowej?
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Zadzwoń już teraz - jesteśmy dostępni 24 godziny na dobę!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Zadzwoń: 123-456-789
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              <Truck className="w-5 h-5 mr-2" />
              Pomoc natychmiast
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Holowanie24h;
