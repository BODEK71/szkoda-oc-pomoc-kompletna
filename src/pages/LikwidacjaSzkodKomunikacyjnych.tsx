
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, ArrowRight, FileText, Shield, Clock, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BenefitsSection from "@/components/BenefitsSection";
import WhyChooseUs from "@/components/WhyChooseUs";

const LikwidacjaSzkodKomunikacyjnych = () => {
  const processSteps = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Zgłoszenie szkody",
      description: "Kontakt telefoniczny lub przez formularz online",
      details: ["Przyjęcie zgłoszenia 24/7", "Pierwsza pomoc prawna", "Ustalenie okoliczności"]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Dokumentacja",
      description: "Zebranie i przygotowanie niezbędnych dokumentów",
      details: ["Protokół policji", "Dokumenty pojazdu", "Zaświadczenia lekarskie"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Negocjacje",
      description: "Rozmowy z ubezpieczycielem sprawcy",
      details: ["Ustalenie wysokości odszkodowania", "Negocjacja warunków", "Obrona Twoich praw"]
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Wypłata",
      description: "Otrzymanie pełnego odszkodowania",
      details: ["Szybka wypłata", "Bez ukrytych kosztów", "Pełne zadowolenie klienta"]
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
                  🚗 LIKWIDACJA SZKÓD
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-red-600">Likwidacja szkód</span>
                  <br />
                  <span className="text-gray-900">komunikacyjnych</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Profesjonalna obsługa likwidacji szkód komunikacyjnych. 
                  Załatwimy wszystko za Ciebie - od dokumentacji po wypłatę odszkodowania.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Bezpłatna wycena szkody",
                  "Obsługa 24/7",
                  "Pełne odszkodowanie",
                  "Brak ukrytych kosztów"
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
                  Zadzwoń: 123-456-789
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-red-200 text-red-600 hover:bg-red-50">
                  Bezpłatna wycena
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/98c1a9a6-892d-403f-a83e-d61e11ade53e.png"
                alt="Likwidacja szkód komunikacyjnych"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Jak przebiega proces likwidacji?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profesjonalny proces likwidacji szkód w 4 prostych krokach
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 relative">
                <div className="absolute -top-4 left-4 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <CardHeader className="text-center pb-4 pt-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {step.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {step.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
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

      <BenefitsSection />
      <WhyChooseUs />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Potrzebujesz pomocy w likwidacji szkody?
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Skontaktuj się z nami już teraz. Zajmiemy się wszystkimi formalnościami, 
            abyś mógł skupić się na powrocie do normalności.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Zadzwoń: 123-456-789
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              <FileText className="w-5 h-5 mr-2" />
              Bezpłatna konsultacja
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LikwidacjaSzkodKomunikacyjnych;
