
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  Phone, 
  ArrowRight, 
  Car, 
  Clock, 
  Shield, 
  FileText,
  AlertTriangle,
  Users,
  Calculator,
  CreditCard
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AutoZastepczeZOC = () => {
  const conditions = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Udowodniona wina sprawcy wypadku",
      description: "Konieczne jest jednoznaczne ustalenie odpowiedzialności za zdarzenie drogowe"
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: "Rzeczywiste uszkodzenia pojazdu",
      description: "Samochód musi być niezdatny do bezpiecznej jazdy lub wymagać naprawy"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Uzasadniona potrzeba mobilności",
      description: "Należy wykazać, że auto na czas szkody z OC jest niezbędne"
    }
  ];

  const procedureSteps = [
    {
      step: "1",
      title: "Zgłoszenie szkody i wniosek",
      description: "Niezwłocznie zgłoś wypadek do ubezpieczyciela sprawcy i złóż wniosek o auto na czas szkody z OC",
      icon: <Phone className="w-8 h-8" />
    },
    {
      step: "2", 
      title: "Ekspertyza i akceptacja",
      description: "Rzeczoznawca ubezpieczyciela oceni uszkodzenia i zatwierdzi przyznanie auta zastępczego",
      icon: <FileText className="w-8 h-8" />
    },
    {
      step: "3",
      title: "Wybór wypożyczalni", 
      description: "Wybierz wypożyczalnię z listy akceptowanych przez ubezpieczyciela",
      icon: <Car className="w-8 h-8" />
    },
    {
      step: "4",
      title: "Odbiór pojazdu",
      description: "Podpisz umowę najmu i sprawdź stan techniczny pojazdu zastępczego",
      icon: <CheckCircle className="w-8 h-8" />
    }
  ];

  const vehicleCategories = [
    "Samochody miejskie (segment A/B) – dla właścicieli małych aut ekonomicznych",
    "Kompakty (segment C) – standardowe pojazdy rodzinne o średniej wielkości",
    "Samochody średnie i duże (segment D/E) – dla aut biznesowych",
    "SUV-y i crossovery – pojazdy terenowe",
    "Vany i busy – dla użytkowników pojazdów dostawczych"
  ];

  const limits = [
    "Maksymalna dzienna stawka wynajmu (80-200 zł/dzień)",
    "Całkowity limit kosztów (do 15 000 zł w skali roku)",
    "Kategoria pojazdu odpowiadająca uszkodzonemu samochodowi",
    "Okres korzystania zgodny z czasem naprawy"
  ];

  const faqItems = [
    {
      question: "Czy auto zastępcze z OC sprawcy bezgotówkowo jest zawsze dostępne?",
      answer: "Tak, w większości przypadków, gdy wina sprawcy jest jednoznaczna i uszkodzenia wymagają naprawy uniemożliwiającej jazdę."
    },
    {
      question: "Jakie dokumenty potrzebne są do otrzymania pojazdu zastępczego z OC?",
      answer: "Protokół policji, dokumenty pojazdu, prawo jazdy, dowód osobisty oraz dokumenty potwierdzające konieczność korzystania z samochodu."
    },
    {
      question: "Czy można wymienić przyznany samochód zastępczy na inny?",
      answer: "Tak, ale wymaga to zgody ubezpieczyciela i może wiązać się z dodatkowymi formalnościami."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-800">
                  🚗 AUTO ZASTĘPCZE Z OC SPRAWCY
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Auto zastępcze po wypadku z <span className="text-green-600">OC sprawcy</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Samochód zastępczy z OC sprawcy na czas naprawy. Pojazd zastępczy z OC sprawcy 
                  jest gwarantowany przez polskie prawo i umożliwia zachowanie mobilności podczas naprawy.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Bezgotówkowy wynajem",
                  "Bezpośrednie rozliczenie z OC",
                  "Pojazd na czas naprawy",
                  "Wsparcie prawne"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4">
                  <Phone className="w-5 h-5 mr-2" />
                  Zamów auto: 123-456-789
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                  Sprawdź warunki
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/76305d0f-89ec-4769-aaba-307d63ecc85b.png"
                alt="Auto zastępcze z OC sprawcy"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Conditions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Kiedy przysługuje samochód zastępczy z OC sprawcy?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Podstawowe warunki otrzymania auta zastępczego z OC sprawcy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {conditions.map((condition, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                    {condition.icon}
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {condition.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {condition.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Procedure Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Procedura otrzymania samochodu zastępczego z OC sprawcy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Krok po kroku do uzyskania pojazdu zastępczego na czas naprawy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {procedureSteps.map((step, index) => (
              <Card key={index} className="relative group hover:shadow-xl transition-all duration-300">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                
                <CardHeader className="text-center pt-8 pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-4 text-green-600 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {step.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {step.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bezgotówkowy Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Auto zastępcze z OC sprawcy bezgotówkowo
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Auto zastępcze z OC sprawcy bezgotówkowo to najwygodniejsza forma otrzymania pojazdu zastępczego.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Ubezpieczyciel bezpośrednio rozlicza się z wypożyczalnią",
                  "Poszkodowany nie musi płacić z własnej kieszeni", 
                  "Nie ma konieczności składania wniosków o zwrot kosztów",
                  "Proces jest szybszy i prostszy"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CreditCard className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-gray-600">
                Samochód na czas likwidacji szkody w formule bezgotówkowej jest dostępny w większości przypadków, 
                gdy szkoda jest jednoznacznie rozliczona z ubezpieczycielem sprawcy.
              </p>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/c3fc47fd-bd5c-47cc-8f97-eee71fe44429.png"
                alt="Auto zastępcze bezgotówkowo"
                className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Kategorie dostępnych pojazdów zastępczych z OC
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Auto zastępcze z OC sprawcy powinno odpowiadać klasie uszkodzonego pojazdu
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {vehicleCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Car className="w-6 h-6 text-green-600" />
                    </div>
                    <p className="text-gray-700">{category}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Limits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Limity dla auta zastępczego ze szkody sprawcy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Auto zastępcze ze szkody sprawcy podlega określonym limitom finansowym
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {limits.map((limit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Calculator className="w-6 h-6 text-yellow-600" />
                    </div>
                    <p className="text-gray-700">{limit}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Często zadawane pytania
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Najważniejsze informacje o aucie zastępczym po wypadku z OC sprawcy
            </p>
          </div>

          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Important Tips */}
      <section className="py-20 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Praktyczne wskazówki
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <FileText className="w-6 h-6" />,
                title: "Dokumentuj wszystko",
                description: "Rób zdjęcia, zbieraj rachunki i potwierdzenia wszystkich czynności"
              },
              {
                icon: <Phone className="w-6 h-6" />,
                title: "Komunikuj się",
                description: "Regularnie informuj ubezpieczyciela o postępach naprawy"
              },
              {
                icon: <Calculator className="w-6 h-6" />,
                title: "Sprawdzaj limity",
                description: "Śledź dzienne i miesięczne limity kosztów"
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: "Zachowaj elastyczność",
                description: "Bądź gotowy na kompromisy dotyczące kategorii pojazdu"
              }
            ].map((tip, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 text-yellow-600">
                    {tip.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{tip.title}</h3>
                  <p className="text-sm text-gray-600">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Potrzebujesz pomocy w uzyskaniu samochodu zastępczego?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Nasi eksperci w prawie komunikacyjnym pomogą Ci skutecznie dochodzić prawa do pojazdu zastępczego 
            na czas naprawy i otrzymać pełne świadczenia od ubezpieczyciela sprawcy wypadku.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Zadzwoń: 123-456-789
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              <Calculator className="w-5 h-5 mr-2" />
              Bezpłatna konsultacja
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AutoZastepczeZOC;
