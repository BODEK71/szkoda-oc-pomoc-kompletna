import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, ArrowRight, MapPin, Shield, Users, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BenefitsSection from "@/components/BenefitsSection";
import WhyChooseUs from "@/components/WhyChooseUs";

const KompleksowaObslugaPowypadkowaNowyTomysl = () => {
  const services = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Obsługa szkód OC",
      description: "Pełne wsparcie w procesie likwidacji szkód w Nowym Tomyślu"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Opieka nad poszkodowanym",
      description: "Kompleksowa pomoc prawna i administracyjna"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Dostępność",
      description: "Całodobowe wsparcie w sytuacjach kryzysowych"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Lokalna obsługa",
      description: "Profesjonalne usługi bezpośrednio w Nowym Tomyślu"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-purple-50 py-20 pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-purple-100 text-purple-800">
                  📍 NOWY TOMYŚL
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-purple-600">Kompleksowa obsługa</span>
                  <br />
                  <span className="text-gray-900">powypadkowa Nowy Tomyśl</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Profesjonalna obsługa powypadkowa w Nowym Tomyślu i okolicach. 
                  Lokalne centrum pomocy w powiecie nowotomyskim.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Lokalna obsługa w Nowym Tomyślu",
                  "Znajomość regionu wielkopolskiego",
                  "Szybka reakcja w mieście",
                  "Współpraca z lokalnymi warsztatami"
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
                  Zadzwoń: 123-456-789
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-purple-200 text-purple-600 hover:bg-purple-50">
                  <MapPin className="w-5 h-5 mr-2" />
                  Lokalizacja Nowy Tomyśl
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/98c1a9a6-892d-403f-a83e-d61e11ade53e.png"
                alt="Kompleksowa obsługa powypadkowa Nowy Tomyśl"
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
              Nasze usługi w Nowym Tomyślu
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kompleksowa obsługa powypadkowa w sercu powiatu nowotomyskiego
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 text-center">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
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

      <Footer />
    </div>
  );
};

export default KompleksowaObslugaPowypadkowaNowyTomysl;
