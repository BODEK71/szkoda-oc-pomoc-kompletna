
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, ArrowRight, FileText, Clock, Euro, Shield, Calculator } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BenefitsSection from "@/components/BenefitsSection";
import WhyChooseUs from "@/components/WhyChooseUs";

const OdszkodowanieZOCSprawcy = () => {
  const compensationTypes = [
    {
      icon: <Euro className="w-8 h-8" />,
      title: "Odszkodowanie za pojazd",
      description: "Pełna wartość pojazdu lub kosztów naprawy",
      details: ["Wycena rzeczoznawcy", "Analiza rynkowa", "Uwzględnienie amortyzacji"]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Koszty dodatkowe",
      description: "Wszystkie uzasadnione koszty związane ze szkodą",
      details: ["Holowanie pojazdu", "Ekspertyza techniczna", "Koszty parkingowe"]
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Utracone korzyści",
      description: "Odszkodowanie za okres niemożności korzystania",
      details: ["Auto zastępcze", "Komunikacja publiczna", "Utracone dochody"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Szkody osobowe",
      description: "Odszkodowanie za doznanąkrzywdę",
      details: ["Koszty leczenia", "Utracone zarobki", "Zadośćuczynienie"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 via-white to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-emerald-100 text-emerald-800">
                  💰 ODSZKODOWANIE
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-emerald-600">Odszkodowanie</span>
                  <br />
                  <span className="text-gray-900">z OC sprawcy</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Profesjonalne dochodzenie pełnego odszkodowania z ubezpieczenia OC sprawcy wypadku. 
                  Walczymy o każdą złotówkę, na którą masz prawo.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Pełne odszkodowanie",
                  "Szybka wypłata",
                  "Brak kosztów własnych",
                  "Profesjonalne negocjacje"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-4">
                  <Phone className="w-5 h-5 mr-2" />
                  Zadzwoń: 123-456-789
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-emerald-200 text-emerald-600 hover:bg-emerald-50">
                  Bezpłatna konsultacja
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/c3fc47fd-bd5c-47cc-8f97-eee71fe44429.png"
                alt="Odszkodowanie z OC sprawcy"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Compensation Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Rodzaje odszkodowań z OC
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kompleksowe pokrycie wszystkich szkód związanych z wypadkiem
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {compensationTypes.map((type, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                    {type.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {type.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {type.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    {type.details.map((detail, detailIndex) => (
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

      {/* Calculation Process */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Jak obliczamy odszkodowanie?
            </h2>
          </div>

          <div className="bg-emerald-50 rounded-2xl p-8">
            <div className="flex items-start space-x-4">
              <Calculator className="w-8 h-8 text-emerald-600 flex-shrink-0 mt-1" />
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Precyzyjna kalkulacja</h3>
                <p className="text-gray-700 leading-relaxed">
                  Nasze doświadczenie pozwala nam dokładnie określić wysokość należnego odszkodowania. 
                  Uwzględniamy wszystkie elementy składowe i negocjujemy najwyższą możliwą kwotę.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Elementy odszkodowania:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Wartość pojazdu przed wypadkiem</li>
                      <li>• Koszt części zamiennych</li>
                      <li>• Koszt robocizny</li>
                      <li>• Utrata wartości pojazdu</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Koszty dodatkowe:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Auto zastępcze</li>
                      <li>• Ekspertyza rzeczoznawcy</li>
                      <li>• Holowanie i przechowanie</li>
                      <li>• Inne uzasadnione koszty</li>
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
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Nie zgadzasz się z oferowaną kwotą?
          </h2>
          <p className="text-xl mb-8 text-emerald-100">
            Skontaktuj się z nami! Sprawdzimy czy odszkodowanie jest uczciwe 
            i pomożemy wynegocjować wyższą kwotę.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Zadzwoń: 123-456-789
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              <Euro className="w-5 h-5 mr-2" />
              Sprawdź odszkodowanie
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OdszkodowanieZOCSprawcy;
