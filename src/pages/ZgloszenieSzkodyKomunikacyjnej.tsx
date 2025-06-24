
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, ArrowRight, FileText, Shield, Clock, AlertTriangle, Users, Camera } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BenefitsSection from "@/components/BenefitsSection";
import WhyChooseUs from "@/components/WhyChooseUs";

const ZgloszenieSzkodyKomunikacyjnej = () => {
  const reportingSteps = [
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Zabezpiecz miejsce",
      description: "Włącz światła awaryjne, ustaw trójkąt ostrzegawczy",
      details: ["Sprawdź czy wszyscy są bezpieczni", "Wezwij pomoc medyczną jeśli potrzeba", "Nie blokuj ruchu"]
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Powiadom służby",
      description: "Zadzwoń na policję (997) lub numer alarmowy (112)",
      details: ["Podaj dokładną lokalizację", "Opisz sytuację", "Poczekaj na przyjazd służb"]
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Dokumentuj szkodę",
      description: "Zrób zdjęcia pojazdów i miejsca wypadku",
      details: ["Sfotografuj uszkodzenia", "Zrób zdjęcia ogólne", "Zapisz numery rejestracyjne"]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Zgłoś ubezpieczycielowi",
      description: "Skontaktuj się z towarzystwem ubezpieczeniowym",
      details: ["Zadzwoń w ciągu 7 dni", "Przygotuj dokumenty", "Opisz przebieg zdarzenia"]
    }
  ];

  const requiredDocuments = [
    "Dowód rejestracyjny pojazdu",
    "Polisa ubezpieczeniowa OC",
    "Prawo jazdy kierowcy",
    "Protokół z miejsca zdarzenia",
    "Zdjęcia szkód i miejsca wypadku",
    "Dane drugiej strony (jeśli dotyczy)"
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
                  🚨 ZGŁASZANIE SZKÓD
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-orange-600">Zgłoszenie szkody</span>
                  <br />
                  <span className="text-gray-900">komunikacyjnej</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Kompletny przewodnik krok po kroku, jak prawidłowo zgłosić szkodę komunikacyjną. 
                  Dowiedz się, co robić od pierwszych chwil po wypadku.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Instrukcja krok po kroku",
                  "Lista wymaganych dokumentów",
                  "Terminy zgłaszania",
                  "Wsparcie eksperta 24/7"
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
                  Zadzwoń: 123-456-789
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-orange-200 text-orange-600 hover:bg-orange-50">
                  Pomoc w zgłoszeniu
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/71edeeac-71be-4e75-ab8f-996c0158b06e.png"
                alt="Zgłoszenie szkody komunikacyjnej"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reporting Steps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Jak zgłosić szkodę komunikacyjną?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Postępuj zgodnie z poniższymi krokami, aby prawidłowo zgłosić szkodę
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reportingSteps.map((step, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 relative">
                <div className="absolute -top-4 left-4 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <CardHeader className="text-center pb-4 pt-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
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

      {/* Required Documents */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Wymagane dokumenty
            </h2>
            <p className="text-xl text-gray-600">
              Przygotuj te dokumenty przed zgłoszeniem szkody
            </p>
          </div>

          <div className="bg-orange-50 rounded-2xl p-8">
            <div className="flex items-start space-x-4 mb-6">
              <FileText className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Lista dokumentów</h3>
                <p className="text-gray-700 mb-6">
                  Aby zgłosić szkodę komunikacyjną, będziesz potrzebować następujących dokumentów:
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {requiredDocuments.map((document, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{document}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-white rounded-xl border border-orange-200">
              <h4 className="text-lg font-semibold text-orange-900 mb-3">Ważne terminy</h4>
              <div className="space-y-2 text-orange-800">
                <p>• <strong>7 dni</strong> - maksymalny czas na zgłoszenie szkody</p>
                <p>• <strong>14 dni</strong> - termin na dostarczenie dokumentów</p>
                <p>• <strong>30 dni</strong> - czas na rozpatrzenie wniosku przez ubezpieczyciela</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BenefitsSection />
      <WhyChooseUs />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Potrzebujesz pomocy w zgłoszeniu szkody?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Nasi eksperci pomogą Ci prawidłowo zgłosić szkodę i przygotować wszystkie 
            wymagane dokumenty. Skontaktuj się z nami już teraz!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Zadzwoń: 123-456-789
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              <Users className="w-5 h-5 mr-2" />
              Pomoc eksperta 24/7
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ZgloszenieSzkodyKomunikacyjnej;
