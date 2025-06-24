
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, ArrowRight, User, Shield, FileText, Clock, Award, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BenefitsSection from "@/components/BenefitsSection";
import WhyChooseUs from "@/components/WhyChooseUs";

const LikwidatorSzkod = () => {
  const services = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Kompletna dokumentacja",
      description: "Przygotowanie wszystkich niezbędnych dokumentów",
      details: ["Protokół z miejsca zdarzenia", "Dokumenty pojazdu", "Korespondencja z ubezpieczycielem"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Reprezentacja wobec towarzystwa",
      description: "Pełna obsługa kontaktów z ubezpieczycielem",
      details: ["Negocjacje warunków", "Obrona interesów klienta", "Dochodzenie pełnego odszkodowania"]
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Szybka likwidacja",
      description: "Przyspieszenie procesu wypłaty odszkodowania",
      details: ["Terminowe składanie dokumentów", "Monitoring postępu sprawy", "Regularne informowanie klienta"]
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Maksymalizacja odszkodowania",
      description: "Zapewnienie najwyższej możliwej kwoty",
      details: ["Szczegółowa wycena szkód", "Uwzględnienie wszystkich kosztów", "Profesjonalne argumentowanie"]
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
                  👨‍💼 EKSPERT
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-indigo-600">Likwidator szkód</span>
                  <br />
                  <span className="text-gray-900">komunikacyjnych</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Profesjonalny likwidator szkód z wieloletnim doświadczeniem. 
                  Kompleksowa obsługa od zgłoszenia do wypłaty odszkodowania.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Doświadczony likwidator",
                  "Pełna obsługa sprawy",
                  "Maksymalne odszkodowanie",
                  "Szybka realizacja"
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
                  Zadzwoń: 123-456-789
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-indigo-200 text-indigo-600 hover:bg-indigo-50">
                  Bezpłatna konsultacja
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/76305d0f-89ec-4769-aaba-307d63ecc85b.png"
                alt="Likwidator szkód komunikacyjnych"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Zakres usług likwidatora
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kompleksowa obsługa likwidacji szkód komunikacyjnych
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    {service.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Dlaczego warto wybrać naszego likwidatora?
            </h2>
          </div>

          <div className="bg-indigo-50 rounded-2xl p-8">
            <div className="flex items-start space-x-4">
              <User className="w-8 h-8 text-indigo-600 flex-shrink-0 mt-1" />
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Doświadczenie i wiedza</h3>
                <p className="text-gray-700 leading-relaxed">
                  Nasz likwidator posiada wieloletnie doświadczenie w branży ubezpieczeniowej. 
                  Doskonale zna procedury, przepisy prawne i praktyki towarzystw ubezpieczeniowych.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Nasze atuty:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Ponad 10 lat doświadczenia</li>
                      <li>• Tysiące zlikwidowanych szkód</li>
                      <li>• Specjalizacja w szkodach komunikacyjnych</li>
                      <li>• Znajomość rynku ubezpieczeniowego</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Gwarancje:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Pełne odszkodowanie</li>
                      <li>• Terminowa realizacja</li>
                      <li>• Profesjonalna obsługa</li>
                      <li>• Stała komunikacja</li>
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
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Potrzebujesz profesjonalnego likwidatora?
          </h2>
          <p className="text-xl mb-8 text-indigo-100">
            Skontaktuj się z nami już dziś. Zajmiemy się Twoją sprawą 
            kompleksowo i profesjonalnie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Zadzwoń: 123-456-789
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              <Users className="w-5 h-5 mr-2" />
              Sprawdzone doświadczenie
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LikwidatorSzkod;
