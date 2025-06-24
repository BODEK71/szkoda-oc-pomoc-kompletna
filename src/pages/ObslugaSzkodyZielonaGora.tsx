
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, ArrowRight, MapPin, Clock, Car, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BenefitsSection from "@/components/BenefitsSection";

const ObslugaSzkodyZielonaGora = () => {
  const localServices = [
    {
      icon: <Car className="w-8 h-8" />,
      title: "Obsługa szkód OC",
      description: "Kompleksowa obsługa szkód komunikacyjnych w Zielonej Górze",
      features: ["Wycena na miejscu", "Negocjacje z ubezpieczycielem", "Pełne odszkodowanie"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Auto zastępcze",
      description: "Bezgotówkowy wynajem pojazdów zastępczych",
      features: ["Dostawa do domu", "Pojazdy wszystkich klas", "Bez zaliczek"]
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Pomoc drogowa 24/7",
      description: "Całodobowa pomoc na terenie Zielonej Góry",
      features: ["Holowanie pojazdów", "Pomoc przy awarii", "Szybki dojazd"]
    }
  ];

  const coverage = [
    "Zielona Góra centrum",
    "Ochla",
    "Racula",
    "Kiełpin",
    "Wilkanowo",
    "Jędrzychów",
    "Przylep",
    "Zawada"
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
                  📍 ZIELONA GÓRA
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-green-600">Obsługa szkód</span>
                  <br />
                  <span className="text-gray-900">Zielona Góra</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Profesjonalna obsługa szkód komunikacyjnych w Zielonej Górze i okolicach. 
                  Lokalni eksperci, szybka realizacja, pełne odszkodowanie.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Obsługa w 24h",
                  "Lokalny zespół",
                  "Bez kosztów z góry",
                  "100% zadowolonych klientów"
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
                  Zadzwoń: 123-456-789
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-green-200 text-green-600 hover:bg-green-50">
                  Bezpłatna wycena
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/a244758c-a742-4eab-a4e7-125d3d6649fd.png"
                alt="Obsługa szkód Zielona Góra"
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
              Nasze usługi w Zielonej Górze
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kompleksowa obsługa szkód komunikacyjnych na terenie całej Zielonej Góry
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {localServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
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

      {/* Coverage Area */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-gray-900">
                  Obszar działania
                </h2>
                <p className="text-xl text-gray-600">
                  Obsługujemy klientów na terenie całej Zielonej Góry oraz okolicznych miejscowości
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {coverage.map((area, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{area}</span>
                  </div>
                ))}
              </div>

              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Kontakt lokalny - Zielona Góra
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>123-456-789 (całodobowo)</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>Obsługa na terenie całego miasta</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>Dojazd w ciągu 30 minut</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/c3fc47fd-bd5c-47cc-8f97-eee71fe44429.png"
                alt="Mapa Zielona Góra"
                className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <BenefitsSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Miałeś wypadek w Zielonej Górze?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Skontaktuj się z naszym lokalnym zespołem. Jesteśmy dostępni 24/7 
            i możemy dotrzeć do Ciebie w ciągu 30 minut.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Zadzwoń: 123-456-789
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              <MapPin className="w-5 h-5 mr-2" />
              Wezwij pomoc na miejsce
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ObslugaSzkodyZielonaGora;
