
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  Phone, 
  ArrowRight, 
  Clock, 
  Shield, 
  FileText,
  Car,
  Users,
  MapPin,
  Headphones,
  Calculator,
  Calendar,
  CreditCard
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const InformacjeOWynajmieAutaZOCSprawcy = () => {
  const rentalCategories = [
    {
      category: "Klasa ekonomiczna",
      examples: "Fiat 500, Toyota Aygo",
      description: "Idealne do codziennych dojazdów w mieście",
      icon: <Car className="w-8 h-8" />
    },
    {
      category: "Klasa kompaktowa", 
      examples: "VW Golf, Ford Focus, Skoda Octavia",
      description: "Uniwersalne pojazdy do większości zadań",
      icon: <Car className="w-8 h-8" />
    },
    {
      category: "Klasa średnia",
      examples: "Toyota Corolla, VW Passat",
      description: "Komfortowe i przestronne samochody",
      icon: <Car className="w-8 h-8" />
    },
    {
      category: "Klasa premium",
      examples: "BMW serii 3, Mercedes klasy C, Audi A4",
      description: "Luksusowe pojazdy reprezentacyjne",
      icon: <Car className="w-8 h-8" />
    }
  ];

  const timeFactors = [
    {
      factor: "Zakres uszkodzeń pojazdu",
      description: "Im większe szkody, tym dłuższy czas naprawy",
      icon: <Shield className="w-6 h-6" />
    },
    {
      factor: "Dostępność części zamiennych",
      description: "Oryginalne części mogą wymagać dłuższego oczekiwania",
      icon: <Clock className="w-6 h-6" />
    },
    {
      factor: "Obciążenie warsztatu",
      description: "Sezonowe wahania w dostępności terminów",
      icon: <Calendar className="w-6 h-6" />
    },
    {
      factor: "Kompleksowość naprawy",
      description: "Naprawy mechaniczne vs. tylko blacharskie",
      icon: <FileText className="w-6 h-6" />
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Zgłoszenie szkody i rezerwacja",
      description: "Kontakt z Auto-Ram, ocena uprawnień, dobór pojazdu",
      icon: <Phone className="w-8 h-8" />
    },
    {
      step: "2", 
      title: "Formalności ubezpieczeniowe",
      description: "Zgłoszenie do ubezpieczyciela, akceptacja kosztów",
      icon: <FileText className="w-8 h-8" />
    },
    {
      step: "3",
      title: "Przekazanie pojazdu",
      description: "Dostawa pod adres, instruktaż, uruchomienie ubezpieczenia",
      icon: <Car className="w-8 h-8" />
    }
  ];

  const requiredDocuments = [
    "Ważne prawo jazdy - odpowiednia kategoria",
    "Dokument tożsamości - dowód osobisty lub paszport",
    "Zgłoszenie szkody - numer sprawy ubezpieczeniowej", 
    "Protokół z miejsca zdarzenia - jeśli sporządzano"
  ];

  const formalConditions = [
    "Wiek minimum 21 lat - dla podstawowych kategorii pojazdów",
    "Staż jazdy minimum 2 lata - dla większości wypożyczalni",
    "Brak przeciwwskazań - aktualnych zakazów prowadzenia pojazdów",
    "Miejsca zamieszkania w Polsce - lub długoterminowy pobyt"
  ];

  const faqItems = [
    {
      question: "Czy mogę wybrać konkretny model pojazdu?",
      answer: "Koszt wynajmu auta z OC sprawcy pokrywa pojazd z odpowiedniej kategorii. Konkretny model zależy od dostępności w danym momencie."
    },
    {
      question: "Co gdy potrzebuję przedłużyć wynajem?",
      answer: "Czas wynajmu auta z OC sprawcy można przedłużyć po uzgodnieniu z ubezpieczycielem i przedstawieniu uzasadnienia (opóźnienie naprawy, dodatkowe uszkodzenia)."
    },
    {
      question: "Czy wynajem obejmuje paliwo?",
      answer: "Standardowo koszt wynajmu auta z OC sprawcy nie obejmuje paliwa - pojazd wydawany jest z pełnym bakiem i należy go zwrócić w takim samym stanie."
    },
    {
      question: "Co w przypadku szkody w wynajętym aucie?",
      answer: "Pojazd objęty jest pełnym ubezpieczeniem OC i AC. Ewentualne szkody zgłaszane są do ubezpieczyciela wynajmującego."
    },
    {
      question: "Jaki jest minimalny czas wynajmu z OC sprawcy?",
      answer: "Minimalny czas wynajmu to 3 dni, nawet przy drobnych uszkodzeniach. Maksymalnie wynajem trwa do zakończenia naprawy."
    },
    {
      question: "Kto pokrywa koszty wynajmu pojazdu zastępczego?",
      answer: "Koszty pokrywa ubezpieczyciel sprawcy wypadku. Auto-Ram współpracuje z wszystkimi towarzystwami, zapewniając bezgotówkowe rozliczenia."
    },
    {
      question: "Czy mogę wynająć pojazd dostawczy z OC sprawcy?",
      answer: "Tak, oferujemy busy towarowe do 3,5 tony, samochody chłodnicze, pojazdy z windą oraz auta z przyczepą - według kategorii uszkodzonego pojazdu."
    },
    {
      question: "Jak szybko mogę otrzymać pojazd zastępczy?",
      answer: "Pojazd może być dostarczony pod wskazany adres w ciągu kilku godzin od akceptacji wynajmu przez ubezpieczyciela."
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
                  📋 INFORMACJE O WYNAJMIE
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-blue-600">Informacje o wynajmie</span>
                  <br />
                  <span className="text-gray-900">auta z OC sprawcy</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Wszystko, co musisz wiedzieć o wynajmie pojazdu zastępczego. 
                  Kompleksowy przewodnik po czasie, kosztach i procedurach wynajmu z OC sprawcy.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Bezgotówkowe rozliczenia",
                  "Dostawa pod adres",
                  "Pełne ubezpieczenie OC/AC",
                  "Obsługa 24/7"
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
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-blue-200 text-blue-600 hover:bg-blue-50">
                  Sprawdź uprawnienia
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/98c1a9a6-892d-403f-a83e-d61e11ade53b.png"
                alt="Informacje o wynajmie auta z OC sprawcy"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Time Factors */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Czas wynajmu auta z OC sprawcy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Czynniki wpływające na długość wynajmu pojazdu zastępczego
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {timeFactors.map((factor, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                    {factor.icon}
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {factor.factor}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {factor.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
                Standardowe okresy wynajmu
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">3 dni</div>
                  <div className="text-gray-700">Minimum dla drobnych uszkodzeń</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">7-14 dni</div>
                  <div className="text-gray-700">Typowe naprawy blacharsko-lakiernicze</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">30+ dni</div>
                  <div className="text-gray-700">Poważne uszkodzenia</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">Do naprawy</div>
                  <div className="text-gray-700">Bez sztywnych limitów</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Vehicle Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Kategorie pojazdów i koszty wynajmu
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Koszt wynajmu auta z OC sprawcy pokrywa ubezpieczyciel sprawcy
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {rentalCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                      {category.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-gray-900">
                        {category.category}
                      </CardTitle>
                      <CardDescription className="text-gray-600 mt-1">
                        {category.examples}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Procedura wynajmu krok po kroku
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prosty proces wynajmu pojazdu z OC sprawcy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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

      {/* Requirements */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Wymagania i dokumenty
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Co potrzebujesz, aby wynająć pojazd z OC sprawcy
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                  <FileText className="w-6 h-6 mr-3 text-blue-600" />
                  Dokumenty niezbędne do wynajmu
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {requiredDocuments.map((doc, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{doc}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                  <Users className="w-6 h-6 mr-3 text-blue-600" />
                  Warunki formalne
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {formalConditions.map((condition, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{condition}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Najczęściej zadawane pytania
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Odpowiedzi na pytania dotyczące wynajmu z OC sprawcy
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
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
            Masz pytania o wynajem z OC sprawcy?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Skontaktuj się z ekspertami Auto-Ram! Zapewniamy bezpłatną konsultację, 
            szybką wycenę i kompleksową obsługę wynajmu pojazdów zastępczych.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Zadzwoń: 123-456-789
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              <Headphones className="w-5 h-5 mr-2" />
              Bezpłatna konsultacja
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InformacjeOWynajmieAutaZOCSprawcy;
