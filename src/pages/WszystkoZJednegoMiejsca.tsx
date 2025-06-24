
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, ArrowRight, MapPin, Shield, Wrench, Car, Headphones, Scale, FileCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BenefitsSection from "@/components/BenefitsSection";
import WhyChooseUs from "@/components/WhyChooseUs";

const WszystkoZJednegoMiejsca = () => {
  const services = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Obsługa szkód OC",
      description: "Kompleksowa likwidacja szkód ubezpieczeniowych"
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Naprawy powypadkowe",
      description: "Profesjonalne naprawy blacharsko-lakiernicze"
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: "Auto zastępcze",
      description: "Pojazdy zastępcze na czas napraw"
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Pomoc drogowa",
      description: "24/7 holowanie i pomoc na drodze"
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Pomoc prawna",
      description: "Wsparcie prawne i reprezentacja"
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Obsługa dokumentów",
      description: "Załatwianie wszystkich formalności"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-orange-100 text-orange-800">
                  🏢 JEDNE MIEJSCE
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-orange-600">Wszystko</span>
                  <br />
                  <span className="text-gray-900">z jednego miejsca</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Kompleksowa obsługa powypadkowa w jednym miejscu. 
                  Od zgłoszenia szkody po odbiór naprawionego pojazdu - zajmujemy się wszystkim.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Jedna firma - wszystkie usługi",
                  "Brak konieczności szukania podwykonawców",
                  "Koordynacja całego procesu",
                  "Oszczędność czasu i nerwów"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-4">
                  <Phone className="w-5 h-5 mr-2" />
                  Kontakt: 123-456-789
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-orange-200 text-orange-600 hover:bg-orange-50">
                  Poznaj ofertę
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/98c1a9a6-892d-403f-a83e-d61e11ade53e.png"
                alt="Wszystko z jednego miejsca"
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
              Wszystkie usługi pod jednym dachem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kompleksowa obsługa powypadkowa bez konieczności kontaktu z wieloma firmami
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 text-center">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
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
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Dlaczego wybierać kilka firm?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Skorzystaj z naszej kompleksowej oferty - wszystko czego potrzebujesz znajdziesz u nas!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Zadzwoń: 123-456-789
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              <MapPin className="w-5 h-5 mr-2" />
              Sprawdź lokalizację
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WszystkoZJednegoMiejsca;
