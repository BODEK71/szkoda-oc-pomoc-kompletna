
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, ArrowRight, Truck, Clock, MapPin, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HolowanieZOCGlogów = () => {
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
                  🚛 HOLOWANIE Z OC SPRAWCY - GŁOGÓW
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-red-600">Holowanie z OC</span>
                  <br />
                  <span className="text-gray-900">sprawcy Głogów</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Pomoc drogowa 24h w Głogowie. Laweta, holowanie i transport pojazdu z OC sprawcy. 
                  Bezpłatne usługi po wypadku w Głogowie i okolicach.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Pomoc drogowa 24h Głogów",
                  "Laweta z OC sprawcy",
                  "Transport pojazdu Głogów",
                  "Holowanie z OC sprawcy Głogów"
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
                  Holowanie Głogów: 123-456-789
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                  Laweta 24h
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/93ced69c-ab42-4978-ae9c-74d304614342.png"
                alt="Holowanie z OC sprawcy Głogów - laweta"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-6 border-l-4 border-red-500">
                <p className="text-sm font-semibold text-gray-900">Głogów</p>
                <p className="text-3xl font-bold text-red-600">24/7</p>
                <p className="text-xs text-gray-600">Pomoc drogowa</p>
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
              Pomoc drogowa w Głogowie
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kompleksowe usługi holowania i transportu pojazdów z OC sprawcy w Głogowie
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Truck className="w-8 h-8" />,
                title: "Laweta Głogów 24h",
                description: "Profesjonalny transport pojazdu na lawecie",
                features: [
                  "Laweta z OC sprawcy",
                  "Transport na długie dystanse",
                  "Bezpieczne zabezpieczenie pojazdu",
                  "Dostępność 24/7 w Głogowie"
                ],
                image: "/lovable-uploads/93ced69c-ab42-4978-ae9c-74d304614342.png"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Pomoc drogowa 24h",
                description: "Natychmiastowa pomoc po wypadku w Głogowie",
                features: [
                  "Interwencja w ciągu 30 min",
                  "Pomoc drogowa z OC sprawcy",
                  "Zabezpieczenie miejsca wypadku",
                  "Wsparcie techniczne"
                ],
                image: "/lovable-uploads/ed7a47ae-36e0-465d-ac4d-f9b660d03ffc.png"
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "Transport Głogów",
                description: "Transport do warsztatu lub miejsca docelowego",
                features: [
                  "Transport do warsztatu",
                  "Przewóz na miejsce zamieszkania",
                  "Koordynacja z warsztatem",
                  "Rozliczenie z OC sprawcy"
                ],
                image: "/lovable-uploads/c3fc47fd-bd5c-47cc-8f97-eee71fe44429.png"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Holowanie z OC",
                description: "Bezgotówkowe usługi holowania",
                features: [
                  "Bez Twojego udziału finansowego",
                  "Bezpośrednie rozliczenie",
                  "Dokumentacja dla ubezpieczyciela",
                  "Pełna obsługa formalna"
                ],
                image: "/lovable-uploads/98c1a9a6-892d-403f-a83e-d61e11ade53e.png"
              }
            ].map((service, index) => (
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

      <Footer />
    </div>
  );
};

export default HolowanieZOCGlogów;
