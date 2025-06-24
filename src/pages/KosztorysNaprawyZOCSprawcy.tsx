
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, ArrowRight, FileText, Calculator, Wrench, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BenefitsSection from "@/components/BenefitsSection";
import WhyChooseUs from "@/components/WhyChooseUs";

const KosztorysNaprawyZOCSprawcy = () => {
  const estimateElements = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Robocizna",
      description: "Szczegółowe wycenenie pracy mechaników",
      details: ["Stawki godzinowe", "Czas wykonania", "Specjalistyczne czynności", "Diagnostyka"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Części zamienne",
      description: "Katalogowe ceny wszystkich elementów",
      details: ["Części oryginalne", "Części zamienniki", "Lakiery i materiały", "Płyny eksploatacyjne"]
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Dodatkowe koszty",
      description: "Wszystkie związane z naprawą wydatki",
      details: ["Kalibracja systemów", "Geometria kół", "Testy sprawności", "Certyfikacja"]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Dokumentacja",
      description: "Profesjonalne przygotowanie kosztorysu",
      details: ["Zdjęcia uszkodzeń", "Szczegółowy opis", "Uzasadnienie kosztów", "Podpis rzeczoznawcy"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-purple-100 text-purple-800">
                  📊 KOSZTORYS NAPRAWY
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-purple-600">Kosztorys naprawy</span>
                  <br />
                  <span className="text-gray-900">z OC sprawcy</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Profesjonalne sporządzanie kosztorysów napraw pojazdów dla celów likwidacji szkód 
                  z ubezpieczenia OC sprawcy wypadku.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Certyfikowani rzeczoznawcy",
                  "Szczegółowe wyceny",
                  "Zgodność z cennikami",
                  "Akceptacja ubezpieczycieli"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-4">
                  <Phone className="w-5 h-5 mr-2" />
                  Zamów kosztorys: 123-456-789
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-purple-200 text-purple-600 hover:bg-purple-50">
                  Bezpłatna wycena
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/c3fc47fd-bd5c-47cc-8f97-eee71fe44429.png"
                alt="Kosztorys naprawy z OC sprawcy"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Estimate Elements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Co zawiera nasz kosztorys?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Szczegółowe opracowanie wszystkich kosztów związanych z naprawą
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {estimateElements.map((element, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {element.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                        {element.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        {element.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 pl-20">
                  <div className="space-y-2">
                    {element.details.map((detail, detailIndex) => (
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

      {/* Process */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Jak przygotowujemy kosztorys?
            </h2>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-6 p-6 bg-white rounded-xl shadow-sm border">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Oględziny pojazdu</h3>
                <p className="text-gray-600">
                  Nasz rzeczoznawca przeprowadza szczegółowe oględziny uszkodzonego pojazdu, 
                  dokumentuje wszystkie szkody i wykonuje profesjonalne zdjęcia.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6 p-6 bg-white rounded-xl shadow-sm border">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Analiza uszkodzeń</h3>
                <p className="text-gray-600">
                  Określamy zakres niezbędnych napraw, rodzaj potrzebnych części zamiennych 
                  oraz szacujemy czas wykonania prac.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6 p-6 bg-white rounded-xl shadow-sm border">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Wycena kosztów</h3>
                <p className="text-gray-600">
                  Sporządzamy szczegółowy kosztorys zgodny z aktualnymi cennikami części 
                  i stawkami roboczogodzin obowiązującymi w branży.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6 p-6 bg-white rounded-xl shadow-sm border">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Przekazanie dokumentacji</h3>
                <p className="text-gray-600">
                  Gotowy kosztorys przekazujemy klientowi oraz bezpośrednio do ubezpieczyciela 
                  w celu szybkiego rozpatrzenia sprawy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BenefitsSection />
      <WhyChooseUs />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Potrzebujesz profesjonalnego kosztorysu?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Nasi certyfikowani rzeczoznawcy przygotują szczegółowy kosztorys naprawy, 
            który zostanie zaakceptowany przez ubezpieczyciela.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Zadzwoń: 123-456-789
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              <Calculator className="w-5 h-5 mr-2" />
              Zamów wycenę
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KosztorysNaprawyZOCSprawcy;
