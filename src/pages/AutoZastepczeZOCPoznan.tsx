
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, ArrowRight, Car, Clock, CreditCard, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AutoZastepczeZOCPoznan = () => {
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
                  🚗 AUTO ZASTĘPCZE Z OC SPRAWCY - POZNAŃ
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-orange-600">Auto zastępcze z OC</span>
                  <br />
                  <span className="text-gray-900">sprawcy Poznań</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Wynajem aut z OC sprawcy w Poznaniu. Pojazdy zastępcze bez limitu kilometrów 
                  na czas naprawy Twojego samochodu po wypadku.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Bez limitu kilometrów w Poznaniu",
                  "Rozliczenie z OC sprawcy",
                  "Podstawienie w ciągu 24h",
                  "Wynajem aut z OC Poznań"
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
                  Auto zastępcze Poznań: 123-456-789
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
                alt="Auto zastępcze z OC sprawcy Poznań"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-6 border-l-4 border-orange-500">
                <p className="text-sm font-semibold text-gray-900">Poznań</p>
                <p className="text-3xl font-bold text-orange-600">24h</p>
                <p className="text-xs text-gray-600">Podstawienie pojazdu</p>
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
              Wynajem aut z OC w Poznaniu
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kompleksowa obsługa aut zastępczych rozliczanych z OC sprawcy w Poznaniu
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Car className="w-8 h-8" />,
                title: "Samochody osobowe Poznań",
                description: "Komfortowe pojazdy na czas naprawy w Poznaniu",
                features: [
                  "Klasa ekonomiczna i kompaktowa",
                  "Bez limitu kilometrów w Poznaniu",
                  "Pełne ubezpieczenie",
                  "Podstawienie w ciągu 24h"
                ],
                image: "/lovable-uploads/76305d0f-89ec-4769-aaba-307d63ecc85b.png"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Pojazdy dla firm Poznań",
                description: "Specjalistyczne pojazdy dla biznesu w Poznaniu",
                features: [
                  "Busy dostawcze",
                  "Pojazdy specjalistyczne",
                  "Flota zastępcza Poznań",
                  "Długoterminowy wynajem"
                ],
                image: "/lovable-uploads/ed7a47ae-36e0-465d-ac4d-f9b660d03ffc.png"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Dostępność 24/7 Poznań",
                description: "Pomoc i podstawienie pojazdu o każdej porze",
                features: [
                  "Całodobowa dostępność",
                  "Podstawienie w Poznaniu",
                  "Szybka procedura odbioru",
                  "Wsparcie telefoniczne"
                ],
                image: "/lovable-uploads/93ced69c-ab42-4978-ae9c-74d304614342.png"
              },
              {
                icon: <CreditCard className="w-8 h-8" />,
                title: "Rozliczenie z OC Poznań",
                description: "Bezgotówkowy wynajem rozliczany z ubezpieczeniem",
                features: [
                  "Bez Twojego udziału finansowego",
                  "Bezpośrednie rozliczenie",
                  "Brak zaliczek",
                  "Transparentne warunki"
                ],
                image: "/lovable-uploads/c3fc47fd-bd5c-47cc-8f97-eee71fe44429.png"
              }
            ].map((category, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-4 right-4">
                    <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white">
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

      <Footer />
    </div>
  );
};

export default AutoZastepczeZOCPoznan;
