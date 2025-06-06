
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, ArrowRight, Truck, Clock, MapPin, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PomocDrogowaZOC = () => {
  const roadAssistanceServices = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Holowanie z OC sprawcy",
      description: "Transport pojazdów uszkodzonych rozliczany z ubezpieczeniem sprawcy",
      features: [
        "Holowanie z miejsca wypadku",
        "Transport do warsztatu",
        "Rozliczenie z OC sprawcy",
        "Bez kosztów dla poszkodowanego"
      ],
      image: "/lovable-uploads/250f3df5-0af2-4c94-b521-bf9d59babee1.png"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Dostępność 24/7",
      description: "Całodobowa pomoc drogowa przez wszystkie dni w roku",
      features: [
        "Pomoc przez całą dobę",
        "Interwencja w dni świąteczne",
        "Średni czas dojazdu: 30 min",
        "Profesjonalna obsługa"
      ],
      image: "/lovable-uploads/ed7a47ae-36e0-465d-ac4d-f9b660d03ffc.png"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Usunięcie z miejsca wypadku",
      description: "Szybkie usunięcie pojazdu z drogi i zabezpieczenie miejsca zdarzenia",
      features: [
        "Usunięcie z jezdni",
        "Zabezpieczenie miejsca wypadku",
        "Oczyszczenie drogi",
        "Współpraca z policją"
      ],
      image: "/lovable-uploads/0e823a63-eccb-449c-849f-922c9794e9aa.png"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Transport specjalistyczny",
      description: "Profesjonalny transport pojazdów z wykorzystaniem nowoczesnego sprzętu",
      features: [
        "Lawety o różnej ładowności",
        "Transport pojazdów luksusowych",
        "Holowanie motocykli",
        "Transport na długie dystanse"
      ],
      image: "/lovable-uploads/c3fc47fd-bd5c-47cc-8f97-eee71fe44429.png"
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
                  🚛 HOLOWANIE 24/7
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-red-600">Pomoc drogowa</span>
                  <br />
                  <span className="text-gray-900">z OC sprawcy</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Profesjonalna pomoc drogowa 24/7. Holowanie i transport pojazdów 
                  rozliczane bezpośrednio z ubezpieczeniem sprawcy wypadku.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Dostępność 24 godziny na dobę",
                  "Rozliczenie z OC sprawcy",
                  "Średni czas dojazdu: 30 min",
                  "Profesjonalny sprzęt"
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
                  Wezwij pomoc: 123-456-789
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                  Sprawdź lokalizację
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              {/* Emergency Notice */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-bold text-yellow-800 mb-2">⚠️ W przypadku wypadku:</h3>
                <ol className="text-sm text-yellow-700 space-y-1">
                  <li>1. Zabezpiecz miejsce wypadku</li>
                  <li>2. Zadzwoń pod numer alarmowy (jeśli potrzeba)</li>
                  <li>3. Skontaktuj się z nami: 123-456-789</li>
                </ol>
              </div>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/250f3df5-0af2-4c94-b521-bf9d59babee1.png"
                alt="Pomoc drogowa - holowanie pojazdu"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-6 border-l-4 border-red-500">
                <p className="text-sm font-semibold text-gray-900">Czas dojazdu</p>
                <p className="text-3xl font-bold text-red-600">30 min</p>
                <p className="text-xs text-gray-600">Średni czas interwencji</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Usługi pomocy drogowej
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kompleksowa pomoc drogowa - od holowania do transportu specjalistycznego
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {roadAssistanceServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-4 right-4">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white">
                      {service.icon}
                    </div>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
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

      {/* Emergency Contact Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Potrzebujesz natychmiastowej pomocy?
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Nasza pomoc drogowa jest dostępna przez całą dobę. 
            Zadzwoń już teraz - dojedziemy do Ciebie w ciągu 30 minut.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              ZADZWOŃ: 123-456-789
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              <MapPin className="w-5 h-5 mr-2" />
              Podaj lokalizację
            </Button>
          </div>
          
          <div className="mt-8 bg-white/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">📍 Obszar działania</h3>
            <p className="text-red-100">
              Obsługujemy całą Warszawę i okolice w promieniu 100 km. 
              Specjalizujemy się w holowaniu pojazdów z miejsca wypadku do warsztatu.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PomocDrogowaZOC;
