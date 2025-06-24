
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, ArrowRight, MapPin, Calculator, FileText, Clock, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BenefitsSection from "@/components/BenefitsSection";
import WhyChooseUs from "@/components/WhyChooseUs";

const WycenaSzkodyPoznan = () => {
  const valuationServices = [
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Profesjonalna wycena w Poznaniu",
      description: "Dokładna wycena szkód przez doświadczonego rzeczoznawcę"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Szczegółowy kosztorys",
      description: "Kompletny kosztorys naprawy z podziałem na części i robociznę"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Uznawana przez ubezpieczycieli",
      description: "Nasza wycena jest akceptowana przez wszystkie towarzystwa"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800">
                  📍 POZNAŃ
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-blue-600">Wycena szkody</span>
                  <br />
                  <span className="text-gray-900">Poznań</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Profesjonalna wycena szkód powypadkowych w Poznaniu. 
                  Dokładne oszacowanie wartości naprawy przez doświadczonych rzeczoznawców.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Certyfikowani rzeczoznawcy",
                  "Szybka wycena w Poznaniu",
                  "Akceptacja ubezpieczycieli",
                  "Konkurencyjne ceny"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
                  <Phone className="w-5 h-5 mr-2" />
                  Zadzwoń: 123-456-789
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-blue-200 text-blue-600 hover:bg-blue-50">
                  Umów wycenę
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/5679ec86-072c-4128-b1f8-0dec36dd67a9.png"
                alt="Wycena szkody Poznań"
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
              Usługi wyceny w Poznaniu
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kompleksowe usługi wyceny szkód dla mieszkańców Poznania
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {valuationServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 text-center">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
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

      {/* Location Coverage */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Obszar działania w Poznaniu
            </h2>
          </div>

          <div className="bg-blue-50 rounded-2xl p-8">
            <div className="flex items-start space-x-4">
              <MapPin className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Poznań i aglomeracja</h3>
                <p className="text-gray-700 leading-relaxed">
                  Oferujemy usługi wyceny szkód na terenie całego Poznania i okolic. 
                  Nasi rzeczoznawcy szybko dojeżdżają w każde miejsce w aglomeracji poznańskiej.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Dzielnice Poznania:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Stare Miasto</li>
                      <li>• Wilda</li>
                      <li>• Grunwald</li>
                      <li>• Jeżyce</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Czas realizacji:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Wycena w ciągu 24h</li>
                      <li>• Dojazd do 30 min</li>
                      <li>• Raport w 48h</li>
                      <li>• Obsługa 7 dni w tygodniu</li>
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Potrzebujesz wyceny szkody w Poznaniu?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Skontaktuj się z nami już dziś! Umówimy się na dogodny termin 
            i wykonamy profesjonalną wycenę szkód.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Zadzwoń: 123-456-789
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              <Calculator className="w-5 h-5 mr-2" />
              Bezpłatna wycena
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WycenaSzkodyPoznan;
