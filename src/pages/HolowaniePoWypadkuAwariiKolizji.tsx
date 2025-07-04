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
  Headphones
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HolowaniePoWypadkuAwariiKolizji = () => {
  const towingServices = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Holowanie z OC sprawcy",
      description: "Pełne pokrycie kosztów przez ubezpieczyciela sprawcy zdarzenia",
      features: [
        "Bez limitów odległości",
        "Natychmiastowa realizacja", 
        "Kompleksowa obsługa",
        "Bezpośrednie rozliczenie"
      ],
      image: "/lovable-uploads/250f3df5-0af2-4c94-b521-bf9d59babee1.png"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Transport na lawecie",
      description: "Bezpieczny transport pojazdów poważnie uszkodzonych",
      features: [
        "Laweta otwarta i zamknięta",
        "Transport specjalistyczny",
        "Maksymalne bezpieczeństwo",
        "Profesjonalne mocowania"
      ],
      image: "/lovable-uploads/93ced69c-ab42-4978-ae9c-74d304614342.png"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Pomoc drogowa 24/7",
      description: "Dostępność przez całą dobę w sytuacjach awaryjnych",
      features: [
        "Szybki czas reakcji 30-45 min",
        "Obsługa weekendy i święta",
        "Doświadczony zespół",
        "Nowoczesny sprzęt"
      ],
      image: "/lovable-uploads/ed7a47ae-36e0-465d-ac4d-f9b660d03ffc.png"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Zasięg całościowy",
      description: "Obsługujemy całą Polskę i kraje UE",
      features: [
        "Transport lokalny i regionalny",
        "Przewozy krajowe",
        "Obsługa międzynarodowa",
        "Różne metody holowania"
      ],
      image: "/lovable-uploads/c3fc47fd-bd5c-47cc-8f97-eee71fe44429.png"
    }
  ];

  const vehicleTypes = [
    {
      category: "Samochody osobowe",
      description: "Wszystkie typy pojazdów osobowych",
      examples: "City car, kompakt, sedan, SUV, premium"
    },
    {
      category: "Pojazdy dostawcze", 
      description: "Busy i samochody ciężarowe",
      examples: "Do 3,5t, pojazdy chłodnicze, z przyczepą"
    },
    {
      category: "Pojazdy specjalistyczne",
      description: "Wymagające szczególnej uwagi",
      examples: "Motocykle, auta zabytkowe, elektryczne"
    },
    {
      category: "Transport w trudnych warunkach",
      description: "Sytuacje wymagające specjalistycznego podejścia", 
      examples: "Autostrady, tereny trudnodostępne, warunki pogodowe"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Zgłoszenie zdarzenia",
      description: "Telefon na numer alarmowy, określenie lokalizacji, opis sytuacji",
      icon: <Phone className="w-8 h-8" />
    },
    {
      step: "2",
      title: "Dojazd na miejsce",
      description: "Szybka reakcja 30-45 min, profesjonalny sprzęt, zabezpieczenie miejsca",
      icon: <Truck className="w-8 h-8" />
    },
    {
      step: "3", 
      title: "Ocena i wybór metody",
      description: "Inspekcja pojazdu, wybór sposobu transportu, dokumentacja",
      icon: <FileText className="w-8 h-8" />
    },
    {
      step: "4",
      title: "Realizacja holowania",
      description: "Zabezpieczenie pojazdu, transport, dostawa do celu",
      icon: <Shield className="w-8 h-8" />
    }
  ];

  const faqItems = [
    {
      question: "Kiedy holowanie jest bezpłatne?",
      answer: "Bezpłatne holowanie przysługuje z OC sprawcy (gdy druga strona ponosi winę), w ramach assistance komunikacyjnego, gwarancji producenta lub niektórych kart kredytowych premium."
    },
    {
      question: "Jak szybko przyjedziecie na miejsce?",
      answer: "Średni czas dojazdu to 30-45 minut od zgłoszenia. W miastach często jesteśmy szybciej, na terenach oddalonych może to potrwać nieco dłużej."
    },
    {
      question: "Na jaką odległość można holować pojazd?",
      answer: "Z OC sprawcy holowanie odbywa się bez limitów odległości do najbliższego warsztatu lub wskazanego miejsca. W ramach assistance mogą obowiązywać limity kilometrowe."
    },
    {
      question: "Czy holujecie pojazdy ciężarowe?",
      answer: "Tak, obsługujemy pojazdy dostawcze do 3,5 tony oraz większe samochody ciężarowe przy użyciu specjalistycznego sprzętu i odpowiednich lawet."
    },
    {
      question: "Co zrobić z rzeczami osobistymi w aucie?",
      answer: "Przed holowaniem zabezpiecz dokumenty pojazdu, rzeczy osobiste i wartościowe przedmioty. Operator pomoże Ci w bezpiecznym przeniesieniu najważniejszych rzeczy."
    },
    {
      question: "Czy można wybrać warsztat do którego zostanie odholowany pojazd?",
      answer: "Tak, możesz wskazać warsztat. Z OC sprawcy holowanie do wybranego warsztatu jest bezpłatne, o ile znajduje się w rozsądnej odległości od miejsca zdarzenia."
    },
    {
      question: "Jak wygląda rozliczenie z ubezpieczycielem?",
      answer: "Współpracujemy ze wszystkimi towarzystwami ubezpieczeniowymi. Rozliczamy się bezpośrednio z ubezpieczycielem - nie musisz płacić z własnej kieszeni."
    },
    {
      question: "Czy obsługujecie holowanie w nocy i w weekendy?",
      answer: "Tak, jesteśmy dostępni 24/7 przez cały rok, włączając weekendy, święta i noce. Nasza pomoc drogowa nie zna przerw."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-50 via-white to-red-50 py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-red-100 text-red-800">
                  🚛 HOLOWANIE 24/7
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-red-600">Holowanie</span>
                  <br />
                  <span className="text-gray-900">po wypadku, awarii, kolizji</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Profesjonalna pomoc drogowa 24/7. Holowanie i transport pojazdów 
                  z pełnym wsparciem ubezpieczeniowym. Bezpłatne holowanie z OC sprawcy.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Dostępność 24/7",
                  "Holowanie z OC sprawcy", 
                  "Szybki czas dojazdu",
                  "Profesjonalny sprzęt"
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
                  Wezwij pomoc: 123-456-789
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-red-200 text-red-600 hover:bg-red-50">
                  Sprawdź lokalizację
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              {/* Emergency Notice */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-bold text-yellow-800 mb-2 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  W przypadku wypadku:
                </h3>
                <ol className="text-sm text-yellow-700 space-y-1">
                  <li>1. Zabezpiecz miejsce wypadku</li>
                  <li>2. Zadzwoń pod numer alarmowy (jeśli potrzeba)</li>
                  <li>3. Skontaktuj się z nami: 123-456-789</li>
                </ol>
              </div>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/250f3df5-0af2-4c94-b521-bf9d59babee1.png"
                alt="Holowanie po wypadku"
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
              Usługi holowania i transportu
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kompleksowa pomoc drogowa - od holowania standardowego do transportu specjalistycznego
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {towingServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-4 right-4">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white">
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

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Procedura holowania krok po kroku
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profesjonalna obsługa od zgłoszenia do dostawy pojazdu
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="relative group hover:shadow-xl transition-all duration-300">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                
                <CardHeader className="text-center pt-8 pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center mx-auto mb-4 text-red-600 group-hover:scale-110 transition-transform duration-300">
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

      {/* Vehicle Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Holowanie różnych typów pojazdów
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specjalizujemy się w transporcie wszystkich rodzajów pojazdów
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {vehicleTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                    <Truck className="w-6 h-6 mr-3 text-red-600" />
                    {type.category}
                  </CardTitle>
                  <CardDescription className="text-gray-600 mt-2">
                    {type.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 font-medium">
                    Przykłady: {type.examples}
                  </p>
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
              Najczęściej zadawane pytania
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Odpowiedzi na najważniejsze pytania dotyczące holowania
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
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Potrzebujesz holowania po wypadku lub awarii?
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Jesteśmy dostępni 24/7! Profesjonalna pomoc drogowa z pełnym wsparciem ubezpieczeniowym. 
            Holowanie z OC sprawcy bez dodatkowych kosztów.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-4">
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
            <p className="text-red-100">
              Obsługujemy całą Polskę i kraje UE. Specjalizujemy się w holowaniu pojazdów 
              po wypadkach, awariach i kolizjach z pełnym wsparciem ubezpieczeniowym.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HolowaniePoWypadkuAwariiKolizji;
