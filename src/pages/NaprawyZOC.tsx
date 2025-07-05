import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, ArrowRight, Wrench, Settings, Paintbrush, FileText, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BenefitsSection from "@/components/BenefitsSection";
import WhyChooseUs from "@/components/WhyChooseUs";

const NaprawyZOC = () => {
  const services = [
    {
      icon: <Paintbrush className="w-6 h-6" />,
      title: "Lakierowanie z OC sprawcy",
      description: "Profesjonalne lakierowanie finansowane przez ubezpieczenie sprawcy",
      features: ["Idealne dopasowanie koloru", "Nowoczesne technologie", "Gwarancja jakości"]
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Naprawa blacharsko-lakiernicza",
      description: "Kompleksowe naprawy karoserii i lakiernictwo",
      features: ["Prostowanie karoserii", "Wymiana części", "Pełne lakierowanie"]
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Naprawa bezgotówkowa",
      description: "Wygodna forma naprawy bez ponoszenia kosztów",
      features: ["Bez płacenia z góry", "Rozliczenie z ubezpieczeniem", "Pełna obsługa"]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Gwarancja jakości",
      description: "Wszystkie naprawy objęte gwarancją",
      features: ["Oryginalne części", "Doświadczeni specjaliści", "Terminowa realizacja"]
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Kontakt i wstępna wycena",
      description: "Przyjmujemy zgłoszenie i oceniamy zakres uszkodzeń"
    },
    {
      step: "2", 
      title: "Odbiór pojazdu",
      description: "Bezpłatnie odbieramy samochód z miejsca wskazanego przez klienta"
    },
    {
      step: "3",
      title: "Szczegółowa diagnostyka", 
      description: "Dokładnie oceniamy wszystkie uszkodzenia"
    },
    {
      step: "4",
      title: "Kosztorys i uzgodnienia",
      description: "Przygotowujemy dokument do akceptacji przez ubezpieczyciela"
    },
    {
      step: "5",
      title: "Realizacja naprawy",
      description: "Wykonujemy wszystkie niezbędne prace"
    },
    {
      step: "6",
      title: "Odbiór gotowego pojazdu",
      description: "Dostarczamy naprawiony samochód do klienta"
    }
  ];

  const faqItems = [
    {
      question: "Jak działa naprawa bezgotówkowa z OC sprawcy?",
      answer: "Naprawa bezgotówkowa oznacza, że nie płacisz za naprawę z własnej kieszeni. Rozliczamy się bezpośrednio z ubezpieczycielem sprawcy wypadku. Wystarczy, że dostarczysz pojazd i dokumenty - my zajmujemy się resztą formalności."
    },
    {
      question: "Jakie dokumenty są potrzebne do naprawy z OC sprawcy?",
      answer: "Potrzebujesz: dowodu rejestracyjnego pojazdu, prawa jazdy, oświadczenia o zdarzeniu drogowym, protokołu policji (jeśli był sporządzony) oraz danych ubezpieczyciela sprawcy. Pomożemy Ci w przygotowaniu wszystkich dokumentów."
    },
    {
      question: "Ile trwa naprawa z ubezpieczenia sprawcy?",
      answer: "Czas naprawy zależy od zakresu uszkodzeń. Drobne naprawy lakiernicze trwają 3-5 dni, kompleksowe naprawy blacharsko-lakiernicze mogą potrwać 1-3 tygodni. Po wstępnej ocenie podajemy dokładny termin."
    },
    {
      question: "Czy mogę wybrać warsztat do naprawy z OC sprawcy?",
      answer: "Tak, jako poszkodowany masz prawo wyboru warsztatu. Możesz wskazać nasz serwis ubezpieczycielowi sprawcy jako miejsce wykonania naprawy. Pomożemy Ci w załatwieniu wszystkich formalności."
    },
    {
      question: "Jakiej gwarancji udzielacie na naprawy z OC sprawcy?",
      answer: "Udzielamy pełnej gwarancji na wszystkie wykonane prace: lakiernicze do 5 lat, blacharskie do 3 lat, mechaniczne zgodnie ze standardami. Gwarancja obejmuje zarówno robociznę jak i użyte materiały."
    },
    {
      question: "Co się dzieje, jeśli ubezpieczyciel nie chce pokryć pełnych kosztów naprawy?",
      answer: "W takim przypadku reprezentujemy Twoje interesy w negocjacjach z ubezpieczycielem. Przygotowujemy szczegółowe uzasadnienie kosztów i przy potrzebie angażujemy rzeczoznawcę. Nie zostajesz sam z tym problemem."
    },
    {
      question: "Czy naprawa z OC sprawcy obejmuje lakierowanie?",
      answer: "Tak, lakierowanie z OC sprawcy jest w pełni pokryte przez ubezpieczenie. Wykonujemy profesjonalne lakierowanie z ideałnym dopasowaniem koloru i długoterminową gwarancją jakości."
    },
    {
      question: "Jakie części zamienne używacie w naprawach z OC sprawcy?",
      answer: "Stosujemy wyłącznie oryginalne części zamienne lub ich wysokiej jakości odpowiedniki zatwierdzone przez producentów. Wszystkie części są objęte gwarancją i akceptowane przez ubezpieczycieli."
    },
    {
      question: "Czy oferujecie pojazd zastępczy podczas naprawy z OC sprawcy?",
      answer: "Tak, organizujemy pojazd zastępczy na czas naprawy. Koszt może być pokryty przez ubezpieczenie sprawcy lub assistance. Pomożemy w załatwieniu wszystkich formalności z ubezpieczycielem."
    },
    {
      question: "Jak szybko można rozpocząć naprawę po wypadku?",
      answer: "Naprawę można rozpocząć natychmiast po uzgodnieniu zakresu prac z ubezpieczycielem sprawcy. Oferujemy bezpłatny odbiór pojazdu z miejsca wskazanego przez klienta."
    },
    {
      question: "Co obejmuje naprawa blacharsko-lakiernicza z OC sprawcy?",
      answer: "Kompleksowa naprawa obejmuje: prostowanie karoserii, wymianę uszkodzonych części, przygotowanie powierzchni, malowanie w komorze lakierniczej, polerowanie i montaż wszystkich elementów."
    },
    {
      question: "Czy można śledzić postęp naprawy z OC sprawcy?",
      answer: "Tak, regularnie informujemy o postępach w naprawie. Możesz odwiedzić warsztat w ustalonych terminach, a także kontaktować się telefonicznie w celu uzyskania aktualnych informacji o statusie naprawy."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800">
                  💰 NAPRAWY BEZGOTÓWKOWE
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-blue-600">Naprawy z OC sprawcy</span>
                  <br />
                  <span className="text-gray-900">bezgotówkowa naprawa</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Profesjonalne naprawy finansowane przez ubezpieczenie sprawcy wypadku. 
                  Kompleksowa obsługa bez ponoszenia kosztów z własnej kieszeni.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Naprawy w pełni bezgotówkowe",
                  "Rozliczenie z ubezpieczeniem",
                  "Oryginalne części zamienne",
                  "Gwarancja na wykonane prace"
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
                  Zadzwoń: 123-456-789
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-blue-200 text-blue-600 hover:bg-blue-50">
                  Bezpłatna wycena
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/98c1a9a6-892d-403f-a83e-d61e11ade53e.png"
                alt="Naprawy z OC sprawcy"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Naprawy z OC sprawcy - bezgotówkowa naprawa po wypadku
            </h1>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Jeśli ucierpiałeś w wypadku samochodowym nie z własnej winy, masz prawo do <strong>naprawy z winy sprawcy</strong> w pełni pokrytej przez jego ubezpieczenie OC. Nasza firma specjalizuje się w profesjonalnych naprawach finansowanych przez ubezpieczenie sprawcy zdarzenia, oferując kompleksowe rozwiązania bez konieczności ponoszenia kosztów z własnej kieszeni.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Bezgotówkowa naprawa - wygoda i oszczędność</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>Naprawa bezgotówkowa</strong> to najwygodniejsza forma naprawy pojazdu po wypadku. Nie musisz martwić się o płacenie za naprawę ani o skomplikowane procedury rozliczeniowe z ubezpieczycielami. My zajmujemy się wszystkimi formalnościami, a Ty odbierasz swój pojazd w pełni sprawny i naprawiony.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Proces <strong>naprawy z OC</strong> w naszym warsztacie jest maksymalnie uproszczony dla klienta. Wystarczy, że dostarczysz nam pojazd wraz z dokumentami dotyczącymi zdarzenia, a my przeprowadzimy pełną naprawę rozliczając się bezpośrednio z towarzystwem ubezpieczeniowym sprawcy.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Profesjonalne lakierowanie z OC sprawcy</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Nasze <strong>lakierowanie z OC sprawcy</strong> wykonywane jest przez doświadczonych specjalistów z wykorzystaniem najwyższej jakości farb i lakierów. Stosujemy nowoczesne technologie mieszania kolorów, dzięki czemu uzyskujemy idealne dopasowanie odcienia do oryginalnego koloru pojazdu.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Proces lakierowania obejmuje przygotowanie powierzchni, aplikację podkładu, malowanie oraz końcowe polerowanie i zabezpieczenie. Wszystkie prace są objęte gwarancją jakości, a ich koszt w pełni pokrywa ubezpieczenie OC sprawcy wypadku.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Kompleksowa naprawa blacharsko-lakiernicza z OC sprawcy</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>Naprawa blacharsko-lakiernicza z OC sprawcy</strong> to nasz główny obszar specjalizacji. Wykonujemy pełen zakres prac blacharskich, począwszy od prostowania i wyginania elementów karoserii, przez wymianę uszkodzonych części, aż po końcowe lakierowanie i polerowanie.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Nasze usługi obejmują:
            </p>

            <ul className="text-lg text-gray-700 leading-relaxed mb-8 space-y-2">
              <li>• Naprawę i prostowanie elementów karoserii</li>
              <li>• Wymianę uszkodzonych części na oryginalne lub odpowiedniki OEM</li>
              <li>• Profesjonalne przygotowanie powierzchni do lakierowania</li>
              <li>• Malowanie w komorze lakierniczej z kontrolą temperatury i wilgotności</li>
              <li>• Polerowanie i zabezpieczenie lakieru</li>
              <li>• Montaż wszystkich elementów wyposażenia</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Gwarancja jakości i terminowości</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Wszystkie wykonane przez nas naprawy objęte są gwarancją jakości. Współpracujemy z renomowanymi dostawcami części zamiennych, zapewniając najwyższy standard wykonywanych usług. Nasze doświadczenie w branży oraz nowoczesne wyposażenie warsztatu gwarantują terminową realizację każdego zlecenia.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              Zaufaj profesjonalistom - wybierz nasz warsztat dla naprawy swojego pojazdu z ubezpieczenia OC sprawcy. Kontakt z nami jest bezpłatny, a doradztwo w zakresie procedur ubezpieczeniowych świadczymy bez dodatkowych opłat.
            </p>

            <hr className="border-gray-300 my-12" />

            <p className="text-base text-gray-600 italic leading-relaxed">
              Masz pytania dotyczące naprawy z OC sprawcy? Skontaktuj się z nami - chętnie udzielimy szczegółowych informacji i pomożemy w całym procesie naprawy pojazdu.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nasze usługi naprawcze z OC sprawcy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kompleksowe naprawy finansowane przez ubezpieczenie sprawcy wypadku
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 mb-4">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Proces naprawy - krok po kroku
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Współpraca z nami przy naprawie pojazdu z ubezpieczenia sprawcy przebiega w kilku prostych krokach
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="absolute top-4 right-4 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-lg">{step.step}</span>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 pr-16 mb-2">
                    {step.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {step.description}
                  </CardDescription>
                </CardHeader>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-blue-300" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Najczęściej zadawane pytania
            </h2>
            <p className="text-xl text-gray-600">
              Odpowiedzi na pytania dotyczące napraw z OC sprawcy
            </p>
          </div>

          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.question}</h3>
                <p className="text-gray-600 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BenefitsSection />
      <WhyChooseUs />

      <Footer />
    </div>
  );
};

export default NaprawyZOC;
