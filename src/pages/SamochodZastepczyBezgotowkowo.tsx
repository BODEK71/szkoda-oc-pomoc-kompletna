
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
  CreditCard,
  MapPin,
  Fuel,
  Key,
  Euro
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SamochodZastepczyBezgotowkowo = () => {
  const advantages = [
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Brak konieczności płacenia z góry",
      description: "Auto zastępcze bezgotówkowo oznacza brak angażowania własnych środków finansowych"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Szybka realizacja",
      description: "Samochód zastępczy z ubezpieczenia można otrzymać w ciągu kilku godzin"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Automatyczne rozliczenia",
      description: "Wypożyczalnia bezpośrednio rozlicza się z ubezpieczycielem"
    },
    {
      icon: <Euro className="w-6 h-6" />,
      title: "Transparentność kosztów",
      description: "Wszystkie opłaty pokrywane przez polisę OC sprawcy"
    }
  ];

  const conditions = [
    "Jednoznaczna wina sprawcy wypadku",
    "Aktywna polisa OC sprawcy",
    "Udokumentowane uszkodzenia pojazdu",
    "Współpraca z akredytowaną wypożyczalnią"
  ];

  const processSteps = [
    {
      step: "1",
      title: "Zgłoszenie szkody i wniosek o auto zastępcze",
      description: "Zgłoś wypadek do ubezpieczyciela sprawcy i złóż wniosek o samochód zastępczy z ubezpieczenia.",
      icon: <Phone className="w-8 h-8" />
    },
    {
      step: "2", 
      title: "Akceptacja przez ubezpieczyciela",
      description: "Ubezpieczyciel weryfikuje okoliczności i ustala limity dla auta zastępczego bezgotówkowo.",
      icon: <Shield className="w-8 h-8" />
    },
    {
      step: "3",
      title: "Kontakt z wypożyczalnią", 
      description: "Wybierz wypożyczalnię z listy akceptowanych i umów termin odbioru.",
      icon: <Car className="w-8 h-8" />
    },
    {
      step: "4",
      title: "Odbiór pojazdu bez przedpłat",
      description: "Odbierz samochód zastępczy bezgotówkowo bez wpłacania kaucji.",
      icon: <Key className="w-8 h-8" />
    }
  ];

  const vehicleCategories = [
    {
      category: "Segment A/B – Samochody miejskie",
      description: "Idealne do codziennych dojazdów po mieście",
      examples: "Fiat 500, Toyota Aygo, Peugeot 108",
      dailyLimit: "80-120 zł/dzień"
    },
    {
      category: "Segment C – Kompakty",
      description: "Uniwersalne pojazdy dla większości użytkowników",
      examples: "Volkswagen Golf, Opel Astra, Toyota Corolla",
      dailyLimit: "100-150 zł/dzień"
    },
    {
      category: "Segment D/E – Auta średnie i duże",
      description: "Przestronne pojazdy rodzinne i biznesowe",
      examples: "Passat, Camry, Insignia",
      dailyLimit: "150-200 zł/dzień"
    },
    {
      category: "SUV-y i crossovery",
      description: "Pojazdy o zwiększonym prześwicie",
      examples: "Qashqai, Tucson, RAV4",
      dailyLimit: "180-250 zł/dzień"
    }
  ];

  const benefits = [
    {
      icon: <Euro className="w-6 h-6" />,
      title: "Korzyści finansowe",
      points: [
        "Brak angażowania własnych środków",
        "Eliminacja ryzyka zwrotu",
        "Przejrzystość kosztów",
        "Brak ukrytych opłat"
      ]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Korzyści organizacyjne", 
      points: [
        "Szybkość realizacji",
        "Prostota procedur",
        "Profesjonalna obsługa",
        "Elastyczność"
      ]
    }
  ];

  const commonReasons = [
    {
      reason: "Uszkodzenia nie wymagają naprawy",
      solution: "Zlecenie niezależnej ekspertyzy technicznej"
    },
    {
      reason: "Brak udokumentowanej potrzeby mobilności",
      solution: "Zaświadczenie z pracy o konieczności dojazdów"  
    },
    {
      reason: "Przekroczenie limitów polisy",
      solution: "Sprawdzenie dokładnych warunków ubezpieczenia"
    }
  ];

  const helpSources = [
    "Rzecznik Finansowy",
    "Federacja Konsumentów", 
    "Kancelarie prawne",
    "Stowarzyszenia poszkodowanych"
  ];

  const practicalTips = [
    {
      phase: "Przed odbiorem",
      tips: [
        "Sprawdź dokumenty i system bezgotówkowy",
        "Zweryfikuj stan pojazdu",
        "Zapoznaj się z warunkami",
        "Sprawdź ubezpieczenie"
      ]
    },
    {
      phase: "W trakcie użytkowania",
      tips: [
        "Dokumentuj przebieg",
        "Komunikuj się z wypożyczalnią",
        "Przestrzegaj limitów",
        "Zachowaj dokumenty"
      ]
    }
  ];

  const faqItems = [
    {
      question: "Czy auto zastępcze bezgotówkowo wymaga wpłacenia kaucji?",
      answer: "Nie, prawdziwy system bezgotówkowy nie wymaga żadnych przedpłat ani kaucji od poszkodowanego. Wszystkie rozliczenia odbywają się między wypożyczalnią a ubezpieczycielem."
    },
    {
      question: "Co się stanie, jeśli spowoduje wypadek samochodem zastępczym z ubezpieczenia?",
      answer: "Pojazd jest objęty pełnym ubezpieczeniem AC/OC. Ewentualne szkody pokrywa ubezpieczenie wypożyczalni, ale możesz ponieść koszt udziału własnego."
    },
    {
      question: "Czy można przedłużyć okres korzystania z auta zastępczego bezgotówkowo?",
      answer: "Tak, jeśli naprawa trwa dłużej lub wystąpiły nieprzewidziane komplikacje. Wymagana jest akceptacja ubezpieczyciela i uzasadnienie przedłużenia."
    },
    {
      question: "Jakie dokumenty są potrzebne do otrzymania samochodu zastępczego bez przedpłat?",
      answer: "Prawo jazdy, dowód osobisty, protokół wypadku, numer szkody oraz dokumenty potwierdzające potrzebę korzystania z pojazdu."
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
                  💳 BEZGOTÓWKOWO
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-green-600">Samochód zastępczy</span>
                  <br />
                  <span className="text-gray-900">bezgotówkowo</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Auto zastępcze z ubezpieczenia bez zaliczek i przedpłat. 
                  System bezgotówkowy eliminuje konieczność angażowania własnych środków finansowych.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Bez przedpłat i kaucji",
                  "Automatyczne rozliczenia",
                  "Szybka realizacja",
                  "Transparentne koszty"
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
                  Zadzwoń: 123-456-789
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-green-200 text-green-600 hover:bg-green-50">
                  Sprawdź warunki
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/76305d0f-89ec-4769-aaba-307d63ecc85b.png"
                alt="Samochód zastępczy bezgotówkowo"
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
              Kluczowe zalety auta zastępczego bezgotówkowo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              System bezgotówkowy eliminuje konieczność angażowania własnych środków
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
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

      {/* Conditions Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Warunki otrzymania auta zastępczego bezgotówkowo
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Aby skorzystać z systemu bezgotówkowego, muszą być spełnione następujące warunki:
              </p>
              
              <div className="space-y-4">
                {conditions.map((condition, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{condition}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/c3fc47fd-bd5c-47cc-8f97-eee71fe44429.png"
                alt="Warunki auta zastępczego bezgotówkowo"
                className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Procedura otrzymania samochodu zastępczego bezgotówkowo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prosty proces w czterech krokach do otrzymania auta bez przedpłat
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
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

      {/* Vehicle Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Rodzaje pojazdów dostępnych w systemie bezgotówkowym
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Różne kategorie samochodów zastępczych z ubezpieczenia
            </p>
          </div>

          <div className="space-y-6">
            {vehicleCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-4 gap-6 items-center">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{category.category}</h3>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-700 mb-2"><strong>Przykłady:</strong></p>
                      <p className="text-sm text-gray-600">{category.examples}</p>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 text-sm text-green-600">
                        <Euro className="w-4 h-4" />
                        <span><strong>Limit dzienny:</strong></span>
                      </div>
                    </div>
                    <div>
                      <span className="text-lg font-semibold text-green-600">{category.dailyLimit}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Zalety systemu bezgotówkowego dla poszkodowanych
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 text-green-600">
                      {benefit.icon}
                    </div>
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {benefit.points.map((point, pointIndex) => (
                      <div key={pointIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{point}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Refusal Reasons Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Co zrobić, gdy ubezpieczyciel odmawia auta zastępczego bezgotówkowo?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Najczęstsze powody odmowy i sposoby rozwiązania
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {commonReasons.map((item, index) => (
              <Card key={index} className="border-orange-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-4 h-4 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{item.reason}</h3>
                      <p className="text-sm text-gray-600">{item.solution}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-900">
                Gdzie szukać pomocy przy problemach z autem zastępczym bezgotówkowo?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {helpSources.map((source, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{source}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Practical Tips */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Praktyczne wskazówki dotyczące auta zastępczego bezgotówkowo
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {practicalTips.map((tip, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">{tip.phase}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {tip.tips.map((tipItem, tipIndex) => (
                      <div key={tipIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{tipItem}</span>
                      </div>
                    ))}
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
              Najczęstsze pytania o samochód zastępczy bezgotówkowo
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
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Potrzebujesz auta zastępczego bezgotówkowo?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Skontaktuj się z nami i otrzymaj profesjonalne doradztwo oraz szybką realizację usługi. 
            Gwarantujemy samochód zastępczy z ubezpieczenia bez żadnych przedpłat i ukrytych kosztów.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Zadzwoń: 123-456-789
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              <Calculator className="w-5 h-5 mr-2" />
              Sprawdź warunki
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SamochodZastepczyBezgotowkowo;
