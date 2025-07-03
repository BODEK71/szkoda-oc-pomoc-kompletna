
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
  Building2,
  Users,
  Truck,
  Wrench,
  Star,
  MapPin,
  Headphones
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AutoZastepczeDlaFirm = () => {
  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Bezgotówkowa obsługa szkód",
      description: "Współpracujemy z wszystkimi towarzystwami ubezpieczeniowymi na rynku"
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: "Kompleksowa obsługa door-to-door",
      description: "Od odbioru uszkodzonego pojazdu po zwrot naprawionego auta"
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Szeroka flota pojazdów",
      description: "Pojazdy dostosowane do specifiki działalności firm"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Obsługa 24/7",
      description: "Pomoc powypadkowa dostępna przez całą dobę, 7 dni w tygodniu"
    }
  ];

  const vehicleTypes = [
    {
      type: "Samochody osobowe",
      description: "Dla kadry zarządzającej",
      icon: <Car className="w-8 h-8" />
    },
    {
      type: "Pojazdy dostawcze",
      description: "Dla branży kurierskiej i logistycznej",
      icon: <Truck className="w-8 h-8" />
    },
    {
      type: "Auta segmentu premium",
      description: "Dla firm reprezentacyjnych",
      icon: <Star className="w-8 h-8" />
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Zgłoszenie szkody",
      description: "Jeden telefon do Auto-Ram",
      icon: <Phone className="w-8 h-8" />
    },
    {
      step: "2",
      title: "Ocena sytuacji",
      description: "Nasz ekspert dojedzie na miejsce",
      icon: <Users className="w-8 h-8" />
    },
    {
      step: "3",
      title: "Podstawienie pojazdu zastępczego",
      description: "Natychmiast po odbiorze uszkodzonego auta",
      icon: <Car className="w-8 h-8" />
    },
    {
      step: "4",
      title: "Likwidacja szkody",
      description: "Zajmujemy się wszystkimi formalnościami z ubezpieczycielem",
      icon: <FileText className="w-8 h-8" />
    },
    {
      step: "5",
      title: "Zwrot naprawionego pojazdu",
      description: "Dostarczamy auto pod wskazany adres",
      icon: <MapPin className="w-8 h-8" />
    }
  ];

  const additionalServices = [
    "Naprawy blacharsko-lakiernicze",
    "Diagnostykę komputerową",
    "Serwis klimatyzacji",
    "Wymianę opon",
    "Kompleksową obsługę flot firmowych"
  ];

  const businessBenefits = [
    "Nieprzerwanej działalności biznesowej",
    "Minimalizacji strat finansowych związanych z postojem floty",
    "Profesjonalnej obsługi przez doświadczony zespół",
    "Zgodności z wymogami ubezpieczeniowymi"
  ];

  const faqItems = [
    {
      question: "Jakie dokumenty są potrzebne do otrzymania pojazdu zastępczego dla firmy?",
      answer: "Potrzebne są: protokół wypadku, dokumenty pojazdu, NIP firmy, pełnomocnictwo do działania w imieniu firmy oraz dokumenty ubezpieczeniowe. Nasz zespół pomoże w kompletowaniu wszystkich niezbędnych dokumentów."
    },
    {
      question: "Czy pojazd zastępczy dla firm jest rozliczany bezgotówkowo?",
      answer: "Tak, współpracujemy z wszystkimi towarzystwami ubezpieczeniowymi i zapewniamy całkowicie bezgotówkową obsługę. Firma nie ponosi żadnych kosztów związanych z pojazdem zastępczym."
    },
    {
      question: "Jak długo firma może korzystać z pojazdu zastępczego?",
      answer: "Czas korzystania zależy od czasu naprawy pojazdu. Standardowo od kilku dni do kilku tygodni. W przypadku długotrwałych napraw możliwe jest przedłużenie za zgodą ubezpieczyciela."
    },
    {
      question: "Czy Auto-Ram oferuje pojazdy dostosowane do specyfiki branży?",
      answer: "Tak, dysponujemy szeroką flotą pojazdów: od samochodów osobowych, przez dostawcze, po auta segmentu premium. Dobieramy pojazd do specyfiki działalności firmy."
    },
    {
      question: "Co w przypadku awarii pojazdu zastępczego?",
      answer: "Wszystkie nasze pojazdy są objęte kompleksowym ubezpieczeniem i pomocą drogową 24/7. W przypadku awarii natychmiast zapewniamy pomoc lub pojazd zastępczy."
    },
    {
      question: "Czy Auto-Ram obsługuje duże floty firmowe?",
      answer: "Tak, mamy doświadczenie w obsłudze dużych flot firmowych. Oferujemy dedykowane rozwiązania dla firm posiadających wiele pojazdów, w tym priorytetową obsługę."
    },
    {
      question: "Jakie są godziny pracy Auto-Ram?",
      answer: "Nasza pomoc powypadkowa dostępna jest 24/7. Rozumiemy, że wypadki nie wybierają pory dnia, dlatego jesteśmy gotowi do pomocy o każdej godzinie."
    },
    {
      question: "Czy Auto-Ram świadczy usługi w całej Polsce?",
      answer: "Tak, świadczymy usługi na terenie całej Polski. Mamy sieć partnerów, która pozwala nam na szybką reakcję niezależnie od lokalizacji wypadku."
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
                  🏢 DLA FIRM
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-blue-600">Pojazd zastępczy</span>
                  <br />
                  <span className="text-gray-900">z OC sprawcy dla firm</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Kompleksowe rozwiązania mobilności dla Twojej firmy. 
                  Auto-Ram zapewnia ciągłość działania biznesu w przypadku kolizji czy wypadku.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Obsługa bezgotówkowa",
                  "Flota dostosowana do firm",
                  "Obsługa 24/7",
                  "Door-to-door service"
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
                  Dowiedz się więcej
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/71edeeac-71be-4e75-ab8f-996c0158b06e.png"
                alt="Auto zastępcze dla firm"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Dlaczego firmy wybierają Auto-Ram?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profesjonalne rozwiązania mobilności dostosowane do potrzeb biznesu
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {benefit.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {benefit.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Szeroka flota pojazdów zastępczych
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pojazdy dostosowane do specyfiki działalności firm
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {vehicleTypes.map((vehicle, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-blue-600">
                    {vehicle.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{vehicle.type}</h3>
                  <p className="text-gray-600">{vehicle.description}</p>
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
              Jak to działa?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prosty proces w pięciu krokach
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
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

      {/* Business Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Korzyści dla przedsiębiorców
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Pojazd zastępczy z OC sprawcy dla firm od Auto-Ram to gwarancja:
              </p>
              
              <div className="space-y-4">
                {businessBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/98c1a9a6-892d-403f-a83e-d61e11ade53e.png"
                alt="Korzyści dla firm"
                className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Dodatkowe usługi Auto-Ram
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kompleksowa obsługa pojazdów firmowych
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Wrench className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{service}</span>
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
              Najczęstsze pytania
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Odpowiedzi na pytania dotyczące pojazdów zastępczych dla firm
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
            Zaufaj ekspertom Auto-Ram
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Potrzebujesz pojazdu zastępczego z OC sprawcy dla firm? Skontaktuj się z nami już dziś! 
            Nasz zespół ekspertów jest gotowy do natychmiastowej pomocy i zapewnienia Twojej firmie mobilności w każdej sytuacji.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Zadzwoń: 123-456-789
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              <Headphones className="w-5 h-5 mr-2" />
              Skontaktuj się z nami
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AutoZastepczeDlaFirm;
