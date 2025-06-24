
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, ArrowRight, Search, FileText, Camera, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BenefitsSection from "@/components/BenefitsSection";
import WhyChooseUs from "@/components/WhyChooseUs";

const OcenaUszkodzenPojazdu = () => {
  const evaluationTypes = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Ocena wizualna",
      description: "Szczegółowe oględziny zewnętrzne i wewnętrzne",
      features: ["Karoseria", "Lakier", "Wnętrze", "Szyby"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Ocena mechaniczna",
      description: "Analiza podzespołów i systemów pojazdu",
      features: ["Silnik", "Skrzynia biegów", "Zawieszenie", "Hamulce"]
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Dokumentacja fotograficzna",
      description: "Profesjonalne zdjęcia wszystkich uszkodzeń",
      features: ["Uszkodzenia widoczne", "Szczegóły techniczne", "Numery części", "Stan ogólny"]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Raport końcowy",
      description: "Kompleksowy opis stanu technicznego",
      features: ["Wykaz uszkodzeń", "Kosztorys naprawy", "Zdjęcia", "Wnioski"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-white to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-indigo-100 text-indigo-800">
                  🔍 OCENA POJAZDU
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-indigo-600">Ocena uszkodzeń</span>
                  <br />
                  <span className="text-gray-900">pojazdu</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Profesjonalna ocena stanu technicznego i uszkodzeń pojazdu po wypadku. 
                  Szczegółowa dokumentacja dla ubezpieczycieli i sądów.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Certyfikowani rzeczoznawcy",
                  "Szczegółowa dokumentacja",
                  "Profesjonalne zdjęcia",
                  "Akceptacja ubezpieczycieli"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-lg px-8 py-4">
                  <Phone className="w-5 h-5 mr-2" />
                  Zamów ocenę: 123-456-789
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-indigo-200 text-indigo-600 hover:bg-indigo-50">
                  Bezpłatna wycena
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/a244758c-a742-4eab-a4e7-125d3d6649fd.png"
                alt="Ocena uszkodzeń pojazdu"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Evaluation Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Zakres oceny uszkodzeń
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kompleksowa analiza stanu technicznego pojazdu w 4 etapach
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {evaluationTypes.map((type, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {type.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                        {type.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        {type.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 pl-20">
                  <div className="space-y-2">
                    {type.features.map((feature, featureIndex) => (
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

      {/* Process */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Jak przebiega ocena?
            </h2>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Umówienie terminu</h3>
                <p className="text-gray-700">
                  Kontakt telefoniczny i ustalenie dogodnego terminu oględzin pojazdu 
                  w miejscu jego postoju lub w warsztacie.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Oględziny pojazdu</h3>
                <p className="text-gray-700">
                  Szczegółowe oględziny przez certyfikowanego rzeczoznawcę z wykonaniem 
                  dokumentacji fotograficznej wszystkich uszkodzeń.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sporządzenie raportu</h3>
                <p className="text-gray-700">
                  Przygotowanie szczegółowego raportu z oceną uszkodzeń, kosztorysem naprawy 
                  i dokumentacją fotograficzną.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Przekazanie dokumentów</h3>
                <p className="text-gray-700">
                  Dostarczenie kompletnej dokumentacji do ubezpieczyciela, warsztatu 
                  lub bezpośrednio do klienta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BenefitsSection />
      <WhyChooseUs />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Potrzebujesz profesjonalnej oceny uszkodzeń?
          </h2>
          <p className="text-xl mb-8 text-indigo-100">
            Nasi certyfikowani rzeczoznawcy przeprowadzą szczegółową ocenę Twojego pojazdu. 
            Dokumentacja akceptowana przez wszystkich ubezpieczycieli.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Zadzwoń: 123-456-789
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              <Search className="w-5 h-5 mr-2" />
              Zamów ocenę online
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OcenaUszkodzenPojazdu;
