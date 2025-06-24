
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, ArrowRight, Shield, Car, FileText, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BenefitsSection from "@/components/BenefitsSection";
import WhyChooseUs from "@/components/WhyChooseUs";

const LikwidacjaSzkodyZOC = () => {
  const benefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Pełna ochrona prawna",
      description: "Reprezentacja w rozmowach z ubezpieczycielem",
      features: ["Analiza praw klienta", "Negocjacje z towarzystwem", "Obrona interesów poszkodowanego"]
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Auto zastępcze",
      description: "Bezgotówkowy wynajem na czas likwidacji",
      features: ["Pojazd tej samej klasy", "Bez zaliczek", "Odbiór i zwrot gratis"]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Kompleksowa dokumentacja",
      description: "Przygotowanie wszystkich niezbędnych dokumentów",
      features: ["Wycena szkody", "Kosztorysy napraw", "Dokumentacja medyczna"]
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Szybka realizacja",
      description: "Ekspresowe załatwienie formalności",
      features: ["Kontakt w 24h", "Regularna informacja", "Monitoring postępów"]
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
                  🛡️ LIKWIDACJA Z OC
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-blue-600">Likwidacja szkody</span>
                  <br />
                  <span className="text-gray-900">z OC sprawcy</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Specjalistyczna obsługa likwidacji szkód z ubezpieczenia OC sprawcy wypadku. 
                  Maksymalne odszkodowanie bez Twojego zaangażowania finansowego.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "100% sukcesu w sprawach",
                  "Bez kosztów z góry",
                  "Pełne odszkodowanie",
                  "Obsługa 24/7"
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
                  Bezpłatna konsultacja
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/71edeeac-71be-4e75-ab8f-996c0158b06e.png"
                alt="Likwidacja szkody z OC sprawcy"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Dlaczego warto skorzystać z naszych usług?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kompleksowa obsługa likwidacji szkód z OC sprawcy
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {benefit.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                        {benefit.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        {benefit.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 pl-20">
                  <div className="space-y-2">
                    {benefit.features.map((feature, featureIndex) => (
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

      <BenefitsSection />
      <WhyChooseUs />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Miałeś wypadek? Nie jesteś sprawcą?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Skontaktuj się z nami natychmiast. Im szybciej zaczniemy działać, 
            tym większe masz szanse na maksymalne odszkodowanie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Zadzwoń teraz: 123-456-789
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              <Shield className="w-5 h-5 mr-2" />
              Sprawdź swoje prawa
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LikwidacjaSzkodyZOC;
