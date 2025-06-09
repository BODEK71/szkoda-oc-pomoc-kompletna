import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, ArrowRight, Car, Users, Clock, CreditCard } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AutoZastepczeZOC = () => {
  const carCategories = [
    {
      icon: <Car className="w-8 h-8" />,
      title: "Samochody osobowe",
      description: "Komfortowe pojazdy na czas naprawy Twojego auta",
      features: [
        "Klasa ekonomiczna i kompaktowa",
        "Bez limitu kilometrów",
        "Pełne ubezpieczenie",
        "Podstawienie w ciągu 24h"
      ],
      image: "/lovable-uploads/76305d0f-89ec-4769-aaba-307d63ecc85b.png"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Pojazdy dla firm",
      description: "Specjalistyczne pojazdy dla potrzeb biznesowych",
      features: [
        "Busy dostawcze",
        "Pojazdy specjalistyczne",
        "Flota zastępcza",
        "Długoterminowy wynajem"
      ],
      image: "/lovable-uploads/ed7a47ae-36e0-465d-ac4d-f9b660d03ffc.png"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Dostępność 24/7",
      description: "Pomoc i podstawienie pojazdu o każdej porze",
      features: [
        "Całodobowa dostępność",
        "Podstawienie w miejscu wypadku",
        "Szybka procedura odbioru",
        "Wsparcie telefoniczne"
      ],
      image: "/lovable-uploads/93ced69c-ab42-4978-ae9c-74d304614342.png"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Rozliczenie z OC",
      description: "Bezgotówkowy wynajem rozliczany z ubezpieczeniem sprawcy",
      features: [
        "Bez Twojego udziału finansowego",
        "Bezpośrednie rozliczenie",
        "Brak zaliczek",
        "Transparentne warunki"
      ],
      image: "/lovable-uploads/c3fc47fd-bd5c-47cc-8f97-eee71fe44429.png"
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
                  🚗 BEZ LIMITU KILOMETRÓW
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-green-600">Auto zastępcze</span>
                  <br />
                  <span className="text-gray-900">z OC sprawcy</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Pojazdy zastępcze na czas naprawy rozliczane z ubezpieczenia sprawcy. 
                  Bez limitu kilometrów i bez Twojego udziału finansowego.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Bez limitu kilometrów",
                  "Rozliczenie z OC sprawcy",
                  "Podstawienie w ciągu 24h",
                  "Pełne ubezpieczenie pojazdu"
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
                  Zamów auto: 123-456-789
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                  Sprawdź dostępność
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/76305d0f-89ec-4769-aaba-307d63ecc85b.png"
                alt="Auto zastępcze - samochód na czas naprawy"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Rodzaje pojazdów zastępczych
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferujemy szeroki wybór pojazdów dostosowanych do Twoich potrzeb
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {carCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-4 right-4">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white">
                      {category.icon}
                    </div>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {category.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {category.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-3">
                    {category.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Potrzebujesz auta zastępczego?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Zadzwoń już teraz i zamów pojazd zastępczy. Podstawimy go w ciągu 24 godzin, 
            a rozliczenie odbywa się bezpośrednio z ubezpieczeniem sprawcy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Zadzwoń: 123-456-789
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              <Car className="w-5 h-5 mr-2" />
              Sprawdź dostępność
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AutoZastepczeZOC;
