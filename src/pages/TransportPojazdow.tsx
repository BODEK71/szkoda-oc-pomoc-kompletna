
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
  Star
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

  const vehicleCategories = [
    {
      category: "Samochody osobowe",
      description: "Transport wszystkich kategorii pojazdów osobowych",
      examples: "Małe, średnie, SUV-y, pojazdy premium"
    },
    {
      category: "Pojazdy dostawcze", 
      description: "Specjalistyczny sprzęt dla pojazdów użytkowych",
      examples: "Busy do 3,5t, samochody ciężarowe, pojazdy chłodnicze"
    },
    {
      category: "Pojazdy specjalistyczne",
      description: "Transport wymagający szczególnej ostrożności",
      examples: "Motocykle, pojazdy zabytkowe, auta elektryczne"
    },
    {
      category: "Transport specjalny",
      description: "Usługi dla pojazdów luksusowych i kolekcjonerskich", 
      examples: "Lawety zamknięte, klimatyzowane, dodatkowe zabezpieczenia"
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

  const faqItems = [
    {
      question: "Kiedy transport pojazdu jest bezpłatny?",
      answer: "Transport pojazdu z OC sprawcy jest bezpłatny gdy druga strona ponosi winę za zdarzenie. Koszty pokrywa ubezpieczyciel sprawcy bez limitów odległości do wskazanego warsztatu."
    },
    {
      question: "Jakie pojazdy mogą być transportowane?",
      answer: "Transportujemy wszystkie kategorie pojazdów: osobowe, dostawcze do 3,5t, ciężarowe, motocykle, pojazdy zabytkowe i elektryczne. Dysponujemy różnymi typami lawet."
    },
    {
      question: "Jak długo trwa dojazd na miejsce?",
      answer: "Średni czas dojazdu to 30-45 minut w obszarach miejskich. Na tereny bardziej oddalone może to potrwać dłużej, ale informujemy o przewidywanym czasie przyjazdu."
    },
    {
      question: "Czy pojazd jest ubezpieczony podczas transportu?",
      answer: "Tak, wszystkie transportowane pojazdy są objęte pełnym ubezpieczeniem podczas przewozu. Auto-Ram posiada polisę odpowiedzialności cywilnej i ubezpieczenie transportu."
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
      answer: "Obsługujemy całą Polskę oraz kraje UE. Transport lokalny, regionalny, krajowy i międzynarodowy z pełną dokumentacją i procedurami."
    },
    {
      question: "Jak są naliczane koszty transportu?",
      answer: "Koszty zależą od odległości, rodzaju pojazdu, metody transportu i pilności zlecenia. Z OC sprawcy transport jest bezpłatny dla poszkodowanego."
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

      {/* Vehicle Categories */}
      <section className="py-20 bg-gray-50">
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
                  <p className="text-gray-600 font-medium">
                    Przykłady: {category.examples}
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
