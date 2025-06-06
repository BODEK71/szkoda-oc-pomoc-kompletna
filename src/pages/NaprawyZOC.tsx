
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, ArrowRight, Wrench, Palette, Settings, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NaprawyZOC = () => {
  const repairServices = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Naprawa bezgotówkowa",
      description: "Naprawy powypadkowe rozliczane bezpośrednio z ubezpieczeniem sprawcy",
      features: [
        "Bez Twojego udziału finansowego",
        "Rozliczenie bezpośrednio z ubezpieczycielem",
        "Gwarancja na wykonane naprawy", 
        "Możliwość dopłaty do wyższej jakości"
      ],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Blacharstwo i lakiernictwo",
      description: "Profesjonalne usuwanie uszkodzeń karoserii i odnowa lakieru",
      features: [
        "Prostowanie karoserii",
        "Usuwanie wgnieceń",
        "Lakierowanie w technologii wodnej",
        "Dobór koloru komputerowy"
      ],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Mechanika powypadkowa",
      description: "Naprawa układów mechanicznych uszkodzonych w wyniku kolizji",
      features: [
        "Diagnostyka komputerowa",
        "Naprawa zawieszenia",
        "Układy hamulcowe",
        "Mechanika silnika"
      ],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Usługi specjalistyczne",
      description: "Zaawansowane naprawy wymagające specjalistycznego sprzętu",
      features: [
        "Naprawa po gradobiciu",
        "Prostowanie ram",
        "Spawanie aluminium",
        "Rekonstrukcja elementów"
      ],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&q=80"
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
                  🔧 BEZGOTÓWKOWE NAPRAWY
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-orange-600">Naprawy z OC</span>
                  <br />
                  <span className="text-gray-900">sprawcy</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Profesjonalne naprawy powypadkowe bez Twojego udziału finansowego. 
                  Współpracujemy z najlepszymi warsztatami w regionie.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Bezgotówkowe rozliczenie z OC sprawcy",
                  "Gwarancja na wykonane naprawy",
                  "Sprawdzone warsztaty partnerskie",
                  "Kontrola jakości wykonania"
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
                  Umów naprawę: 123-456-789
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                  Znajdź warsztat
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80"
                alt="Naprawy powypadkowe - warsztat samochodowy"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-6 border-l-4 border-orange-500">
                <p className="text-sm font-semibold text-gray-900">Gwarancja</p>
                <p className="text-3xl font-bold text-orange-600">24 mies.</p>
                <p className="text-xs text-gray-600">Na naprawy lakiernicze</p>
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
              Rodzaje napraw powypadkowych
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferujemy kompleksowe naprawy wszystkich rodzajów uszkodzeń powstałych w wyniku kolizji
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {repairServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-4 right-4">
                    <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Potrzebujesz naprawy po wypadku?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Skontaktuj się z nami już teraz. Znajdziemy najlepszy warsztat 
            i załatwimy wszystkie formalności z ubezpieczycielem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Zadzwoń: 123-456-789
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              <Wrench className="w-5 h-5 mr-2" />
              Znajdź warsztat
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NaprawyZOC;
