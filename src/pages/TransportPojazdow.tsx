
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  Phone, 
  ArrowRight, 
  Truck, 
  Clock, 
  MapPin, 
  Shield,
  AlertTriangle,
  FileText,
  Users,
  Headphones,
  Star,
  Euro,
  Camera,
  Wrench,
  Car,
  Globe
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TransportPojazdow = () => {
  const transportServices = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Transport pojazdu z OC sprawcy",
      description: "Pełne pokrycie kosztów przez ubezpieczyciela sprawcy",
      features: [
        "Bezpłatny transport",
        "Bez limitów odległości",
        "Natychmiastowa realizacja",
        "Pełna dokumentacja"
      ],
      image: "/lovable-uploads/250f3df5-0af2-4c94-b521-bf9d59babee1.png"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Transport aut powypadkowych",
      description: "Specjalistyczne podejście do uszkodzonych pojazdów",
      features: [
        "Nowoczesny park maszynowy",
        "Systemy mocowania",
        "Specjalistyczne wyposażenie",
        "Bezpieczny transport"
      ],
      image: "/lovable-uploads/93ced69c-ab42-4978-ae9c-74d304614342.png"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Przewóz uszkodzonego pojazdu",
      description: "Kompleksowa obsługa pojazdów niesprawnych",
      features: [
        "Przygotowanie do transportu",
        "Właściwe mocowanie",
        "Ochrona przed uszkodzeniami",
        "Ubezpieczenie transportu"
      ],
      image: "/lovable-uploads/ed7a47ae-36e0-465d-ac4d-f9b660d03ffc.png"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Transport różnych kategorii",
      description: "Samochody osobowe, dostawcze i specjalistyczne",
      features: [
        "Transport lokalny i regionalny",
        "Transport krajowy",
        "Transport międzynarodowy",
        "Pojazdy luksusowe"
      ],
      image: "/lovable-uploads/c3fc47fd-bd5c-47cc-8f97-eee71fe44429.png"
    }
  ];

  const ocTransportSteps = [
    {
      step: "1",
      title: "Zgłoszenie zdarzenia",
      description: "Kontakt z Auto-Ram 24/7, udokumentowanie wypadku",
      icon: <Phone className="w-6 h-6" />
    },
    {
      step: "2", 
      title: "Ocena sytuacji",
      description: "Określenie metody transportu, wybór odpowiedniego sprzętu",
      icon: <FileText className="w-6 h-6" />
    },
    {
      step: "3",
      title: "Koordinacja z ubezpieczycielem",
      description: "Potwierdzenie pokrycia kosztów przez TU sprawcy",
      icon: <Shield className="w-6 h-6" />
    },
    {
      step: "4",
      title: "Realizacja transportu",
      description: "Bezpieczne przewiezienie pojazdu do wybranego miejsca",
      icon: <Truck className="w-6 h-6" />
    }
  ];

  const equipmentTypes = [
    {
      name: "Lawety otwarte",
      description: "Dla standardowych pojazdów osobowych",
      icon: <Truck className="w-6 h-6" />
    },
    {
      name: "Lawety zamknięte", 
      description: "Ochrona przed warunkami atmosferycznymi",
      icon: <Shield className="w-6 h-6" />
    },
    {
      name: "Lawety z windą",
      description: "Dla pojazdów z niskim prześwitem",
      icon: <ArrowRight className="w-6 h-6" />
    },
    {
      name: "Lawety wielopoziomowe",
      description: "Transport kilku pojazdów jednocześnie",
      icon: <Users className="w-6 h-6" />
    }
  ];

  const vehicleCategories = [
    {
      category: "Samochody osobowe",
      description: "Transport wszystkich kategorii pojazdów osobowych",
      examples: "Małe, średnie, SUV-y, pojazdy premium",
      details: [
        "Małe samochody (city car, kompakt)",
        "Samochody średnie (sedan, kombi)", 
        "SUV-y i crossovery",
        "Pojazdy premium z dodatkową ochroną"
      ]
    },
    {
      category: "Pojazdy dostawcze", 
      description: "Specjalistyczny sprzęt dla pojazdów użytkowych",
      examples: "Busy do 3,5t, samochody ciężarowe, pojazdy chłodnicze",
      details: [
        "Busy towarowe do 3,5 tony DMC",
        "Samochody ciężarowe większej nośności",
        "Pojazdy chłodnicze z zachowaniem łańcucha chłodniczego",
        "Auta z przyczepą - kompleksowy transport"
      ]
    },
    {
      category: "Pojazdy specjalistyczne",
      description: "Transport wymagający szczególnej ostrożności",
      examples: "Motocykle, pojazdy zabytkowe, auta elektryczne",
      details: [
        "Motocykle - specjalne mocowania",
        "Pojazdy zabytkowe - maksymalna ostrożność",
        "Auta elektryczne - specjalne procedury",
        "Pojazdy sportowe - kontrolowane warunki"
      ]
    },
    {
      category: "Transport specjalny",
      description: "Usługi dla pojazdów luksusowych i kolekcjonerskich", 
      examples: "Lawety zamknięte, klimatyzowane, dodatkowe zabezpieczenia",
      details: [
        "Lawety zamknięte - ochrona przed warunkami",
        "Kontrola temperatury i wilgotności",
        "Systemy alarmowe i monitoring",
        "Ubezpieczenie na wyższą wartość"
      ]
    }
  ];

  const serviceRange = [
    {
      scope: "Transport lokalny i regionalny",
      description: "Obsługa miast, aglomeracji i regionów",
      areas: [
        "Miasta i aglomeracje - szybki dojazd",
        "Regiony - transport międzywojewódzki", 
        "Trasy komunikacyjne - autostrady i drogi ekspresowe",
        "Miejsca trudnodostępne - parkingi podziemne"
      ],
      icon: <MapPin className="w-8 h-8" />
    },
    {
      scope: "Transport krajowy i międzynarodowy",
      description: "Szeroki zasięg działania Auto-Ram",
      areas: [
        "Cała Polska - transport door-to-door",
        "Kraje UE - z pełną dokumentacją",
        "Trasy międzynarodowe - współpraca z partnerami",
        "Transport powrotny - optymalizacja kosztów"
      ],
      icon: <Globe className="w-8 h-8" />
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Zgłoszenie potrzeby transportu",
      description: "Kontakt telefoniczny, określenie lokalizacji, opis pojazdu, miejsce docelowe",
      icon: <Phone className="w-8 h-8" />
    },
    {
      step: "2",
      title: "Wycena i planowanie",
      description: "Ocena kosztów, wybór metody transportu, ustalenie terminu, potwierdzenie",
      icon: <FileText className="w-8 h-8" />
    },
    {
      step: "3", 
      title: "Realizacja transportu",
      description: "Dojazd na miejsce, załadunek pojazdu, bezpieczny transport, rozładunek",
      icon: <Truck className="w-8 h-8" />
    },
    {
      step: "4",
      title: "Finalizacja usługi",
      description: "Protokół zdawczy, dokumentacja, rozliczenia, feedback klienta",
      icon: <CheckCircle className="w-8 h-8" />
    }
  ];

  const costFactors = [
    {
      factor: "Odległość transportu",
      description: "Podstawowy element kalkulacji kosztów",
      icon: <MapPin className="w-6 h-6" />
    },
    {
      factor: "Rodzaj pojazdu",
      description: "Wymiary, masa, specjalne wymagania",
      icon: <Car className="w-6 h-6" />
    },
    {
      factor: "Metoda transportu", 
      description: "Laweta, holowanie, transport specjalistyczny",
      icon: <Truck className="w-6 h-6" />
    },
    {
      factor: "Pilność zlecenia",
      description: "Transport ekspresowy vs standardowy",
      icon: <Clock className="w-6 h-6" />
    }
  ];

  const safetyProcedures = [
    {
      procedure: "Inspekcja sprzętu",
      description: "Regularne przeglądy techniczne lawet i osprzętu",
      icon: <Wrench className="w-6 h-6" />
    },
    {
      procedure: "Szkolenia operatorów",
      description: "Certyfikowane kursy i regularne aktualizacje wiedzy",
      icon: <Users className="w-6 h-6" />
    },
    {
      procedure: "Ubezpieczenie transportu",
      description: "Pełna ochrona podczas przewozu pojazdu",
      icon: <Shield className="w-6 h-6" />
    },
    {
      procedure: "Systemy monitoringu",
      description: "GPS, komunikacja radiowa, kontrola jakości",
      icon: <Camera className="w-6 h-6" />
    }
  ];

  const benefits = [
    {
      title: "15+ lat doświadczenia",
      description: "Profesjonalizm potwierdzony tysiącami zrealizowanych transportów"
    },
    {
      title: "Nowoczesny park maszynowy",
      description: "Lawety różnych typów i nośności dostosowane do każdego pojazdu"
    },
    {
      title: "Obsługa 24/7",
      description: "Dostępność przez całą dobę, każdego dnia w roku"
    },
    {
      title: "Szybki czas reakcji",
      description: "Dojazd w ciągu 45 minut w obszarach miejskich"
    }
  ];

  const faqItems = [
    {
      question: "Kiedy transport pojazdu jest bezpłatny?",
      answer: "Transport pojazdu z OC sprawcy jest bezpłatny gdy druga strona ponosi winę za zdarzenie. Koszty pokrywa ubezpieczyciel sprawcy bez limitów odległości do wskazanego warsztatu."
    },
    {
      question: "Jakie pojazdy mogą być transportowane?",
      answer: "Transportujemy wszystkie kategorie pojazdów: osobowe, dostawcze do 3,5t, ciężarowe, motocykle, pojazdy zabytkowe i elektryczne. Dysponujemy różnymi typami lawet dostosowanymi do specyfiki każdego pojazdu."
    },
    {
      question: "Jak długo trwa dojazd na miejsce?",
      answer: "Średni czas dojazdu to 30-45 minut w obszarach miejskich. Na tereny bardziej oddalone może to potrwać dłużej, ale zawsze informujemy o przewidywanym czasie przyjazdu."
    },
    {
      question: "Czy pojazd jest ubezpieczony podczas transportu?",
      answer: "Tak, wszystkie transportowane pojazdy są objęte pełnym ubezpieczeniem podczas przewozu. Auto-Ram posiada polisę odpowiedzialności cywilnej oraz ubezpieczenie transportu."
    },
    {
      question: "Jakie dokumenty są potrzebne do transportu?",
      answer: "Potrzebne są: dowód rejestracyjny pojazdu, dokument tożsamości właściciela, zgłoszenie szkody (jeśli dotyczy), oraz wskazanie miejsca docelowego."
    },
    {
      question: "Czy można transportować pojazd z uszkodzonym układem kierowniczym?",
      answer: "Tak, pojazdy z uszkodzonym układem kierowniczym transportujemy wyłącznie na lawecie z pełnym podnoszeniem. To gwarantuje bezpieczeństwo transportu."
    },
    {
      question: "Jaki jest zasięg usług transportowych?",
      answer: "Obsługujemy całą Polskę oraz kraje UE. Oferujemy transport lokalny, regionalny, krajowy i międzynarodowy z pełną dokumentacją i procedurami."
    },
    {
      question: "Jak są naliczane koszty transportu?",
      answer: "Koszty zależą od odległości, rodzaju pojazdu, metody transportu i pilności zlecenia. Z OC sprawcy transport jest bezpłatny dla poszkodowanego."
    },
    {
      question: "Czy transportujecie pojazdy po pożarze lub zalaniu?",
      answer: "Tak, oferujemy transport pojazdów po pożarze, zalaniu i innych poważnych uszkodzeniach. Stosujemy specjalne procedury bezpieczeństwa i odpowiednie zabezpieczenia."
    },
    {
      question: "Czy można transportować pojazdy luksusowe?",
      answer: "Tak, dla pojazdów luksusowych używamy lawet zamkniętych z dodatkowymi zabezpieczeniami, kontrolą klimatu i wyższym ubezpieczeniem."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800">
                  🚛 TRANSPORT POJAZDÓW
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-blue-600">Transport pojazdów</span>
                  <br />
                  <span className="text-gray-900">Profesjonalne usługi transportowe</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Kompleksowe rozwiązania transportowe dla wszystkich typów pojazdów. 
                  Transport z OC sprawcy, przewóz aut powypadkowych, usługi specjalistyczne.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Transport z OC sprawcy",
                  "Pojazdy powypadkowe", 
                  "Obsługa 24/7",
                  "Cała Polska"
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
                  Zamów transport: 123-456-789
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-blue-200 text-blue-600 hover:bg-blue-50">
                  Bezpłatna wycena
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              {/* Transport Notice */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-bold text-green-800 mb-2 flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  Transport z OC sprawcy:
                </h3>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Bezpłatny transport - płaci ubezpieczyciel sprawcy</li>
                  <li>• Bez limitów odległości do wskazanego warsztatu</li>
                  <li>• Natychmiastowa realizacja - bez oczekiwania na akceptację</li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/250f3df5-0af2-4c94-b521-bf9d59babee1.png"
                alt="Transport pojazdów"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Usługi transportowe
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profesjonalny transport pojazdów wszystkich kategorii z pełnym zabezpieczeniem
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {transportServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-4 right-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
                      {service.icon}
                    </div>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
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

      {/* OC Transport Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Transport pojazdu z OC sprawcy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pełne pokrycie kosztów przez ubezpieczyciela sprawcy - to Twoje prawo!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Warunki transportu z OC sprawcy</h3>
              <div className="space-y-4">
                {[
                  "Udokumentowane zdarzenie drogowe z udziałem drugiej strony",
                  "Ustalona wina sprawcy wypadku",
                  "Pojazd niezdolny do jazdy własnej lub wymagający transportu",
                  "Zgłoszenie szkody do towarzystwa ubezpieczeniowego"
                ].map((condition, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{condition}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-blue-900 mb-6">Korzyści z transportu OC</h3>
              <div className="space-y-4">
                {[
                  { title: "Bezpłatny transport", desc: "Koszty pokrywa ubezpieczyciel sprawcy" },
                  { title: "Bez limitów odległości", desc: "Do wskazanego warsztatu lub miejsca" },
                  { title: "Natychmiastowa realizacja", desc: "Bez oczekiwania na akceptację" },
                  { title: "Pełna dokumentacja", desc: "Dla celów rozliczeniowych" }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-blue-900">{benefit.title}</p>
                      <p className="text-blue-700 text-sm">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {ocTransportSteps.map((step, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    {step.step}
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-blue-600">
                    {step.icon}
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">{step.title}</CardTitle>
                  <CardDescription className="text-gray-600">{step.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nowoczesny park maszynowy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Różnorodne lawety i specjalistyczne wyposażenie dla każdego typu pojazdu
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipmentTypes.map((equipment, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-4 text-blue-600">
                    {equipment.icon}
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">{equipment.name}</CardTitle>
                  <CardDescription className="text-gray-600">{equipment.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Specjalistyczne wyposażenie</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Systemy mocowania", desc: "Bezpieczne zamocowanie pojazdów" },
                { name: "Urządzenia podnoszące", desc: "Dla aut z zablokowanymi kołami" },
                { name: "Osprzęt ratowniczy", desc: "Wyciąganie z trudnych miejsc" },
                { name: "Zabezpieczenia", desc: "Plandeky, folie, materiały ochronne" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Wrench className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{item.name}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Kategorie transportowanych pojazdów
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specjalizujemy się w transporcie wszystkich rodzajów pojazdów
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {vehicleCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                    <Truck className="w-6 h-6 mr-3 text-blue-600" />
                    {category.category}
                  </CardTitle>
                  <CardDescription className="text-gray-600 mt-2">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 font-medium mb-4">
                    Przykłady: {category.examples}
                  </p>
                  <div className="space-y-2">
                    {category.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
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

      {/* Service Range */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Zasięg usług transportowych
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Obsługujemy transport lokalny, krajowy i międzynarodowy
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {serviceRange.map((range, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center text-blue-600">
                      {range.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900">{range.scope}</CardTitle>
                      <CardDescription className="text-gray-600">{range.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {range.areas.map((area, areaIndex) => (
                      <div key={areaIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{area}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
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
              Procedura transportu krok po kroku
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profesjonalna obsługa od zgłoszenia do dostawy pojazdu
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

      {/* Costs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Koszty transportu i rozliczenia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Przejrzyste zasady naliczania kosztów i różne formy płatności
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Czynniki wpływające na koszt</h3>
              <div className="space-y-6">
                {costFactors.map((factor, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                      {factor.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{factor.factor}</h4>
                      <p className="text-gray-600">{factor.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Formy rozliczenia</h3>
              <div className="space-y-6">
                {[
                  { name: "Gotówka", desc: "Płatność na miejscu po wykonaniu usługi", icon: <Euro className="w-6 h-6" /> },
                  { name: "Karta płatnicza", desc: "Terminal mobilny - wygodna płatność", icon: <Euro className="w-6 h-6" /> },
                  { name: "Przelew bankowy", desc: "Dla firm i instytucji - faktura VAT", icon: <Euro className="w-6 h-6" /> },
                  { name: "Rozliczenia ubezpieczeniowe", desc: "Bezpośrednio z towarzystwem ubezpieczeniowym", icon: <Shield className="w-6 h-6" /> }
                ].map((payment, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 flex-shrink-0">
                      {payment.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{payment.name}</h4>
                      <p className="text-gray-600">{payment.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Bezpieczeństwo transportu
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Najwyższe standardy bezpieczeństwa i pełne ubezpieczenie
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {safetyProcedures.map((procedure, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center mx-auto mb-4 text-red-600">
                    {procedure.icon}
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">{procedure.procedure}</CardTitle>
                  <CardDescription className="text-gray-600">{procedure.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="bg-red-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-red-900 mb-6 text-center">Zabezpieczenia podczas transportu</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Właściwe mocowanie zgodnie z normami",
                "Ochrona przed uszkodzeniami - plandeky, folie",
                "Kontrola podczas jazdy - sprawdzanie mocowań",
                "Dokumentacja - zdjęcia, protokoły, potwierdzenia"
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-red-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Korzyści współpracy z Auto-Ram
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profesjonalizm, doświadczenie i kompleksowa obsługa
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                    <Star className="w-6 h-6 mr-3 text-yellow-600" />
                    {benefit.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 mt-2">
                    {benefit.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">Kompleksowość usług</h3>
            <p className="text-blue-800 text-center mb-6">
              Transport pojazdów to część szerszej oferty Auto-Ram:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Naprawy powypadkowe", desc: "Kompleksowe przywrócenie pojazdu" },
                { name: "Wynajem zastępczy", desc: "Mobilność na czas naprawy" },
                { name: "Pomoc drogowa", desc: "Interwencje na miejscu" },
                { name: "Obsługa szkód", desc: "Wsparcie ubezpieczeniowe" }
              ].map((service, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Truck className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-blue-900 mb-2">{service.name}</h4>
                  <p className="text-blue-700 text-sm">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Special Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Specjalne usługi transportowe
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedykowane rozwiązania dla pojazdów wymagających wyjątkowej ostrożności
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <Star className="w-8 h-8 mr-3 text-yellow-600" />
                  Transport pojazdów luksusowych
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    "Lawety zamknięte - ochrona przed warunkami zewnętrznymi",
                    "Dodatkowe zabezpieczenia - systemy alarmowe, monitoring",
                    "Dyskrecja - poufność transportu",
                    "Ubezpieczenie na wyższą wartość - pełna ochrona"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <Shield className="w-8 h-8 mr-3 text-blue-600" />
                  Transport pojazdów kolekcjonerskich
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    "Maksymalna ostrożność - specjalne procedury",
                    "Klimatyzowane lawety - kontrola temperatury i wilgotności",
                    "Dodatkowe mocowania - minimalizacja ryzyka uszkodzeń",
                    "Dokumentacja szczegółowa - stan przed i po transporcie"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
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
              Odpowiedzi na najważniejsze pytania dotyczące transportu pojazdów
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
            Potrzebujesz transportu pojazdu?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Profesjonalne usługi transportowe 24/7! Transport z OC sprawcy, 
            przewóz aut powypadkowych, transport specjalistyczny.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              ZADZWOŃ: 123-456-789
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              <Headphones className="w-5 h-5 mr-2" />
              Bezpłatna konsultacja
            </Button>
          </div>
          
          <div className="mt-8 bg-white/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center justify-center">
              <MapPin className="w-5 h-5 mr-2" />
              Obszar działania
            </h3>
            <p className="text-blue-100">
              Obsługujemy całą Polskę i kraje UE. Transport lokalny, regionalny, krajowy 
              i międzynarodowy z pełną dokumentacją i profesjonalną obsługą.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TransportPojazdow;
