
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, ArrowRight, Wrench, Palette, Settings, Shield, Car, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BenefitsSection from "@/components/BenefitsSection";

const NaprawyPowypadkowe = () => {
  const repairServices = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Blacharstwo i lakiernictwo",
      description: "Kompleksowa naprawa uszkodzeń karoserii",
      services: [
        "Prostowanie blach",
        "Usuwanie wgnieceń",
        "Lakierowanie komputerowe",
        "Polerowanie i renowacja lakieru",
        "Naprawa po gradobiciu"
      ],
      image: "/lovable-uploads/5679ec86-072c-4128-b1f8-0dec36dd67a9.png"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Mechanika powypadkowa",
      description: "Naprawa układów mechanicznych po kolizji",
      services: [
        "Diagnostyka komputerowa",
        "Naprawa zawieszenia",
        "Układy hamulcowe",
        "Naprawa silnika",
        "Układy kierownicze"
      ],
      image: "/lovable-uploads/a244758c-a742-4eab-a4e7-125d3d6649fd.png"
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Naprawa elementów karoserii",
      description: "Wymiana i naprawa części karoserii",
      services: [
        "Wymiana zderzaków",
        "Naprawa drzwi",
        "Wymiana szyb",
        "Naprawa lamp",
        "Elementy z tworzywa"
      ],
      image: "/lovable-uploads/71edeeac-71be-4e75-ab8f-996c0158b06e.png"
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
                  🔧 NAPRAWY POWYPADKOWE
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-orange-600">Naprawy powypadkowe</span>
                  <br />
                  <span className="text-gray-900">najwyższej jakości</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Profesjonalne naprawy wszystkich rodzajów uszkodzeń powstałych w wyniku kolizji. 
                  Współpracujemy z najlepszymi warsztatami w regionie.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Gwarancja na naprawy",
                  "Certyfikowane warsztaty",
                  "Oryginalne części",
                  "Bezpłatna wycena"
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
                  Wycena uszkodzeń
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/98c1a9a6-892d-403f-a83e-d61e11ade53e.png"
                alt="Naprawy powypadkowe"
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
              Rodzaje napraw powypadkowych
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferujemy pełen zakres usług naprawczych dla wszystkich typów pojazdów
            </p>
          </div>

          <div className="space-y-16">
            {repairServices.map((service, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center text-white">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {service.services.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BenefitsSection />

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Jak przebiega naprawa?
            </h2>
            <p className="text-xl text-gray-600">
              Prosty proces w 4 krokach
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Wycena szkody",
                description: "Bezpłatna ocena uszkodzeń i kosztorys naprawy"
              },
              {
                step: "02", 
                title: "Wybór warsztatu",
                description: "Polecamy sprawdzone warsztaty w Twojej okolicy"
              },
              {
                step: "03",
                title: "Naprawa pojazdu",
                description: "Profesjonalna naprawa z użyciem oryginalnych części"
              },
              {
                step: "04",
                title: "Odbiór auta",
                description: "Kontrola jakości i gwarancja na wykonane prace"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                    {step.step}
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-200"></div>
                  )}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
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
            Skontaktuj się z nami już teraz. Pomoże dobierzemy najlepszy warsztat 
            i zadbamy o najwyższą jakość naprawy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Zadzwoń: 123-456-789
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              <Wrench className="w-5 h-5 mr-2" />
              Umów wycenę
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NaprawyPowypadkowe;
