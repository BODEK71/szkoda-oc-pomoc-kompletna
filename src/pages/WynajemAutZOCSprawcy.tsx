
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
  Users,
  Calculator,
  CreditCard,
  MapPin,
  Fuel,
  Key
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const WynajemAutZOCSprawcy = () => {
  const advantages = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Bezpośrednia współpraca z ubezpieczycielami",
      description: "Bezgotówkowy wynajem pojazdu z OC sprawcy bez konieczności zaliczek"
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: "Szeroka flota pojazdów",
      description: "Różne kategorie samochodów, od miejskich kompaktów po duże auta rodzinne i SUV-y"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Szybka realizacja",
      description: "Wynajem samochodu zastępczego możliwy już w ciągu kilku godzin od zgłoszenia szkody"
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Transparentne warunki",
      description: "Bez ukrytych opłat i dodatkowych kosztów nieujętych w umowie z ubezpieczycielem"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Zgłoszenie potrzeby wynajmu pojazdu z OC sprawcy",
      description: "Skontaktuj się z nami telefonicznie lub przez formularz online. Podaj numer szkody i dane ubezpieczyciela sprawcy.",
      icon: <Phone className="w-8 h-8" />
    },
    {
      step: "2", 
      title: "Weryfikacja z ubezpieczycielem",
      description: "Weryfikujemy pokrycie kosztów wynajmu z ubezpieczycielem sprawcy i ustalamy limity czasowe i finansowe.",
      icon: <Shield className="w-8 h-8" />
    },
    {
      step: "3",
      title: "Przygotowanie pojazdu i dokumentów", 
      description: "Przygotowujemy samochód zgodnie z Twoimi potrzebami i kompletujemy niezbędną dokumentację.",
      icon: <FileText className="w-8 h-8" />
    },
    {
      step: "4",
      title: "Odbiór i instruktaż",
      description: "Odbierasz pojazd w naszej siedzibie lub z dostawą. Otrzymujesz szczegółowy instruktaż obsługi.",
      icon: <Key className="w-8 h-8" />
    }
  ];

  const vehicleCategories = [
    {
      category: "Segment A/B – Samochody miejskie",
      description: "Idealne do poruszania się po mieście, ekonomiczne w eksploatacji",
      examples: "Toyota Aygo, Peugeot 108, Citroen C1, Fiat 500, Renault Twingo, Hyundai i10",
      fuel: "Średnie zużycie paliwa: 4-5l/100km",
      kmLimit: "100-150 km/dzień"
    },
    {
      category: "Segment C – Kompakty",
      description: "Uniwersalne pojazdy dla większości użytkowników",
      examples: "Volkswagen Golf, Opel Astra, Ford Focus, Toyota Corolla, Hyundai i30, Kia Ceed",
      fuel: "Pojemność bagażnika: 350-400 litrów",
      kmLimit: "150-200 km/dzień"
    },
    {
      category: "Segment D/E – Samochody średnie i duże",
      description: "Komfortowe auta dla rodzin i podróży biznesowych",
      examples: "Volkswagen Passat, Toyota Camry, Opel Insignia, BMW serii 3, Mercedes klasy C, Audi A4",
      fuel: "Przestronna kabina i duży bagażnik",
      kmLimit: "200-250 km/dzień"
    },
    {
      category: "SUV-y i crossovery",
      description: "Pojazdy o zwiększonym prześwicie dla trudniejszych warunków",
      examples: "Nissan Qashqai, Toyota RAV4, Hyundai Tucson, Volkswagen Tiguan, Ford Kuga, Kia Sportage",
      fuel: "Napęd na przód lub 4x4",
      kmLimit: "200-300 km/dzień"
    }
  ];

  const insuranceCompanies = [
    "PZU", "Warta", "Allianz", "AXA", "Generali", "Aviva", 
    "InterRisk", "HDI", "UNIQA", "Gothaer", "STU Ergo Hestia", 
    "TUiR Warta", "Compensa", "Link4"
  ];

  const additionalServices = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Dostawa i odbiór pojazdu",
      description: "Transport samochodu pod wskazany adres"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Pomoc drogowa 24/7",
      description: "Całodobowe wsparcie techniczne"
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: "Wymiana pojazdu",
      description: "Możliwość zmiany samochodu w trakcie wynajmu"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Elastyczne godziny",
      description: "Odbiór i zwrot poza standardowymi godzinami pracy"
    }
  ];

  const faqItems = [
    {
      question: "Czy wynajem pojazdu z OC sprawcy jest zawsze bezpłatny?",
      answer: "Tak, koszty pokrywa ubezpieczyciel sprawcy w ramach limitów polisy OC. Dodatkowe opłaty mogą dotyczyć tylko usług wykraczających poza standard."
    },
    {
      question: "Jak długo można korzystać z wynajmu auta z OC sprawcy?",
      answer: "Czas wynajmu zależy od okresu naprawy pojazdu. Standardowo od kilku dni do kilku miesięcy, z możliwością przedłużenia za zgodą ubezpieczyciela."
    },
    {
      question: "Czy można wybrać konkretny model samochodu?",
      answer: "Wybór ogranicza się do kategorii pojazdu. Konkretny model zależy od dostępności w danym momencie, ale zawsze w odpowiedniej klasie."
    },
    {
      question: "Co w przypadku awarii wynajętego pojazdu?",
      answer: "Wszystkie nasze pojazdy objęte są kompleksowym ubezpieczeniem i pomocą drogową. W razie awarii zapewniamy natychmiastową pomoc lub pojazd zastępczy."
    },
    {
      question: "Czy wynajęcie pojazdów OC sprawcy obejmuje paliwo?",
      answer: "Standardowo pojazd wydajemy z pełnym bakiem, a zwrot następuje z takim samym poziomem paliwa. Niektóre umowy przewidują ryczałt na paliwo."
    }
  ];

  const requiredDocuments = [
    "Ważne prawo jazdy kategorii B",
    "Dowód osobisty lub paszport", 
    "Protokół z miejsca wypadku lub zgłoszenie szkody",
    "Numer polisy i dane ubezpieczyciela sprawcy",
    "Dokumenty uszkodzonego pojazdu"
  ];

  const formalConditions = [
    "Minimum 21 lat (18 lat dla niektórych kategorii)",
    "Minimum 1 rok posiadania prawa jazdy",
    "Brak przeciwskazań zdrowotnych do prowadzenia pojazdu",
    "Akceptacja regulaminu wypożyczalni"
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
                  🚗 PROFESJONALNA WYPOŻYCZALNIA
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Wynajem samochodu z <span className="text-blue-600">OC sprawcy</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Profesjonalna wypożyczalnia współpracująca z ubezpieczalniami. 
                  Wynajem pojazdów zastępczych z OC sprawcy – Twoje prawo po wypadku.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Bezgotówkowy wynajem",
                  "Współpraca z ubezpieczycielami",
                  "Szeroka flota pojazdów",
                  "Szybka realizacja"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
                  <Phone className="w-5 h-5 mr-2" />
                  Zadzwoń: 123-456-789
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                  Sprawdź dostępność
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/76305d0f-89ec-4769-aaba-307d63ecc85b.png"
                alt="Wynajem samochodu z OC sprawcy"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Dlaczego warto wybrać naszą wypożyczalnię?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Jako wypożyczalnia współpracująca z ubezpieczalniami oferujemy kompleksową obsługę
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                    {advantage.icon}
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {advantage.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {advantage.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Proces wynajmu auta z OC sprawcy krok po kroku
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prosty i przejrzysty proces otrzymania pojazdu zastępczego
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="relative group hover:shadow-xl transition-all duration-300">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                
                <CardHeader className="text-center pt-8 pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-4 text-blue-600 group-hover:scale-110 transition-transform duration-300">
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

      {/* Vehicle Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Kategorie pojazdów dostępnych w wynajmie
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Szeroka flota samochodów dopasowana do Twoich potrzeb
            </p>
          </div>

          <div className="space-y-6">
            {vehicleCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-6 items-center">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{category.category}</h3>
                      <p className="text-gray-600 mb-3">{category.description}</p>
                      <div className="flex items-center space-x-2 text-sm text-blue-600">
                        <Calculator className="w-4 h-4" />
                        <span>{category.kmLimit}</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-700 mb-2"><strong>Przykładowe modele:</strong></p>
                      <p className="text-sm text-gray-600">{category.examples}</p>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Fuel className="w-4 h-4" />
                        <span>{category.fuel}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* No Limit Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Wynajem auta z OC sprawcy bez limitu kilometrów
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Opcja dostępna w szczególnych przypadkach z akceptacją ubezpieczyciela
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Długotrwałe naprawy - ponad 30 dni z powodu trudności w dostępie do części",
                  "Pojazdy służbowe - dla przedsiębiorców dokumentujących służbowy charakter przejazdów", 
                  "Szczególne okoliczności - uzasadnione medycznie lub rodzinnie",
                  "Akceptacja ubezpieczyciela - wymaga wcześniejszej zgody towarzystwa"
                ].map((condition, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{condition}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/c3fc47fd-bd5c-47cc-8f97-eee71fe44429.png"
                alt="Wynajem bez limitu kilometrów"
                className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Companies */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Współpraca z wiodącymi ubezpieczycielami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nasza wypożyczalnia współpracuje z największymi towarzystwami ubezpieczeniowymi
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {insuranceCompanies.map((company, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <p className="font-medium text-gray-700">{company}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Dodatkowe usługi dla klientów
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kompleksowa obsługa wykraczająca poza standardowy wynajem
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                    {service.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Wynajem pojazdu z OC sprawcy – procedury i wymagania
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                  <FileText className="w-6 h-6 mr-2 text-blue-600" />
                  Dokumenty niezbędne do wynajmu
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {requiredDocuments.map((doc, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{doc}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                  <Users className="w-6 h-6 mr-2 text-blue-600" />
                  Warunki formalne wynajęcia
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {formalConditions.map((condition, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{condition}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Wynajem samochodu z OC sprawcy – najczęstsze pytania
            </h2>
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Potrzebujesz wynajmu samochodu zastępczego z OC sprawcy?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Skontaktuj się z nami już dziś i otrzymaj profesjonalne doradztwo oraz szybką realizację usługi. 
            Jako wypożyczalnia współpracująca z ubezpieczalniami gwarantujemy bezproblemowy wynajem pojazdów zastępczych.
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

export default WynajemAutZOCSprawcy;
