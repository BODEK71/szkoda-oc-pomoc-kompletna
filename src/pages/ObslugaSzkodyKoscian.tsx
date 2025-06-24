
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, ArrowRight, MapPin, Clock, Car, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BenefitsSection from "@/components/BenefitsSection";
import WhyChooseUs from "@/components/WhyChooseUs";

const ObslugaSzkodyKoscian = () => {
  const localServices = [
    {
      icon: <Car className="w-6 h-6" />,
      title: "Auto zastępcze w Kościanie",
      description: "Bezgotówkowy wynajem pojazdu zastępczego na czas naprawy"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Holowanie w regionie",
      description: "Transport uszkodzonego pojazdu do warsztatu w Kościanie"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Ekspresowa likwidacja",
      description: "Szybka obsługa szkód dla mieszkańców Kościana"
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
                  📍 KOŚCIAN
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-teal-600">Obsługa szkody</span>
                  <br />
                  <span className="text-gray-900">Kościan</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Kompleksowa obsługa szkód komunikacyjnych w Kościanie i okolicach. 
                  Lokalna obecność, szybka reakcja, pełne wsparcie.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Obsługa 24/7 w Kościanie",
                  "Lokalni partnerzy warsztatowi",
                  "Szybki dojazd w regionie",
                  "Znajomość lokalnych procedur"
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
                  Zadzwoń: 123-456-789
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-teal-200 text-teal-600 hover:bg-teal-50">
                  Bezpłatna wycena
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/ed7a47ae-36e0-465d-ac4d-f9b660d03ffc.png"
                alt="Obsługa szkody Kościan"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Local Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nasze usługi w Kościanie
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specjalizujemy się w obsłudze mieszkańców Kościana
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {localServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 text-center">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
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

      {/* Location Info */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Obsługujemy teren Kościana
            </h2>
          </div>

          <div className="bg-teal-50 rounded-2xl p-8">
            <div className="flex items-start space-x-4">
              <MapPin className="w-8 h-8 text-teal-600 flex-shrink-0 mt-1" />
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Kościan i okolice</h3>
                <p className="text-gray-700 leading-relaxed">
                  Świadczymy usługi dla mieszkańców Kościana oraz okolicznych miejscowości. 
                  Nasz zespół doskonale zna lokalne warsztaty i szybko dojedzie w każde miejsce w regionie.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Obszar działania:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Kościan centrum</li>
                      <li>• Czempiń</li>
                      <li>• Śmigiel</li>
                      <li>• Krzywiń</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Czas dojazdu:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Do 15 min w centrum</li>
                      <li>• Do 30 min w okolicy</li>
                      <li>• Dostępność 24/7</li>
                      <li>• Pomoc w weekend</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BenefitsSection />
      <WhyChooseUs />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Miałeś wypadek w Kościanie?
          </h2>
          <p className="text-xl mb-8 text-teal-100">
            Jesteśmy w Twojej okolicy! Szybko dojedziemy na miejsce 
            i zajmiemy się całą procedurą likwidacji szkody.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Zadzwoń: 123-456-789
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              <MapPin className="w-5 h-5 mr-2" />
              Lokalna pomoc 24/7
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ObslugaSzkodyKoscian;
