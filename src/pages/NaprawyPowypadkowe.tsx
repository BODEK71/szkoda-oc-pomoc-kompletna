
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, ArrowRight, Wrench, Settings, Paintbrush, Cog, Shield, Star, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BenefitsSection from "@/components/BenefitsSection";
import WhyChooseUs from "@/components/WhyChooseUs";

const NaprawyPowypadkowe = () => {
  const services = [
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Naprawy z OC sprawcy",
      description: "Bezgotówkowe naprawy finansowane przez ubezpieczenie sprawcy",
      href: "/naprawy-z-oc-sprawcy"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Blacharstwo samochodowe",
      description: "Profesjonalne usługi blacharskie po wypadkach",
      href: "/blacharstwo-samochodowe"
    },
    {
      icon: <Paintbrush className="w-6 h-6" />,
      title: "Lakiernictwo samochodowe",
      description: "Kompleksowe lakierowanie elementów pojazdu",
      href: "/lakiernictwo-samochodowe"
    },
    {
      icon: <Cog className="w-6 h-6" />,
      title: "Mechanika po wypadku",
      description: "Naprawa układów mechanicznych uszkodzonych w wypadku",
      href: "/mechanika-samochodowa-po-wypadku"
    }
  ];

  const advantages = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Pełne ubezpieczenie",
      description: "Wszystkie prace objęte są ubezpieczeniem i gwarancją jakości"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Szybkie terminy",
      description: "Realizujemy naprawy w najkrótszych możliwych terminach"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Najwyższa jakość",
      description: "Używamy tylko oryginalnych części zamiennych i nowoczesnych technologii"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Doświadczony zespół",
      description: "Nasi specjaliści mają wieloletnie doświadczenie w naprawach powypadkowych"
    }
  ];

  const repairProcess = [
    { step: "1", title: "Ocena szkód", desc: "Szczegółowa wycena uszkodzeń pojazdu" },
    { step: "2", title: "Zatwierdzenie naprawy", desc: "Akceptacja kosztorysu przez ubezpieczyciela" },
    { step: "3", title: "Demontaż", desc: "Profesjonalny demontaż uszkodzonych elementów" },
    { step: "4", title: "Naprawa", desc: "Wykonanie prac blacharskich, lakierniczych i mechanicznych" },
    { step: "5", title: "Kontrola jakości", desc: "Sprawdzenie i odbiór naprawionego pojazdu" }
  ];

  const faqItems = [
    {
      question: "Ile trwa naprawa powypadkowa?",
      answer: "Czas naprawy powypadkowej zależy od zakresu uszkodzeń. Drobne naprawy mogą potrwać 3-5 dni, podczas gdy kompleksowe naprawy po poważnych wypadkach mogą wymagać 2-4 tygodni. Po wstępnej ocenie zawsze informujemy o przewidywanym czasie naprawy."
    },
    {
      question: "Czy naprawy powypadkowe są bezgotówkowe?",
      answer: "Tak, oferujemy naprawy bezgotówkowe z OC sprawcy wypadku. Oznacza to, że nie musisz płacić z własnej kieszeni - rozliczamy się bezpośrednio z towarzystwem ubezpieczeniowym sprawcy."
    },
    {
      question: "Jakiej gwarancji udzielacie na naprawy powypadkowe?",
      answer: "Udzielamy gwarancji lakierniczej do 5 lat, gwarancji blacharskiej do 3 lat oraz gwarancji mechanicznej zgodnie ze standardami producenta. Wszystkie prace są objęte pełną gwarancją jakości."
    },
    {
      question: "Czy mogę wybrać warsztat do naprawy powypadkowej?",
      answer: "Tak, jako poszkodowany masz prawo wyboru warsztatu do naprawy powypadkowej. Możesz wskazać nasz serwis ubezpieczycielowi jako miejsce wykonania naprawy z OC sprawcy."
    },
    {
      question: "Jakie części zamienne używacie w naprawach powypadkowych?",
      answer: "Stosujemy wyłącznie oryginalne części zamienne lub ich wysokiej jakości odpowiedniki zatwierdzone przez producentów. Wszystkie części są objęte gwarancją producenta."
    },
    {
      question: "Czy oferujecie pojazd zastępczy podczas naprawy?",
      answer: "Tak, zapewniamy pojazd zastępczy na czas naprawy powypadkowej. Koszt pojazdu zastępczego może być pokryty przez ubezpieczenie OC sprawcy lub assistance."
    },
    {
      question: "Co obejmuje naprawa powypadkowa?",
      answer: "Naprawa powypadkowa obejmuje wszystkie prace niezbędne do przywrócenia pojazdu do stanu sprzed wypadku: naprawy blacharskie, lakiernicze, mechaniczne, wymianę szyb oraz kalibrację systemów bezpieczeństwa."
    },
    {
      question: "Jak długo mam na zgłoszenie naprawy powypadkowej?",
      answer: "Naprawę powypadkową można zgłosić nawet kilka miesięcy po wypadku, jednak zalecamy szybkie działanie. Im wcześniej zgłosisz naprawę, tym szybciej odzyskasz sprawny pojazd."
    },
    {
      question: "Czy naprawiacie wszystkie marki samochodów?",
      answer: "Tak, wykonujemy naprawy powypadkowe wszystkich marek i modeli samochodów - od popularnych aut osobowych po pojazdy luksusowe i dostawcze. Nasz zespół ma doświadczenie z każdym typem pojazdu."
    },
    {
      question: "Co zrobić, jeśli ubezpieczyciel nie chce pokryć pełnych kosztów naprawy?",
      answer: "W takim przypadku możemy pomóc w negocjacjach z ubezpieczycielem. Nasz zespół ma doświadczenie w rozwiązywaniu sporów dotyczących wyceny szkód i zakresu napraw powypadkowych."
    },
    {
      question: "Czy wykonujecie naprawy powypadkowe dla firm?",
      answer: "Tak, obsługujemy zarówno klientów indywidualnych, jak i firmy. Oferujemy specjalne warunki dla flot samochodowych i długoterminową współpracę z przedsiębiorstwami."
    },
    {
      question: "Jak wygląda proces odbioru naprawionego pojazdu?",
      answer: "Po zakończeniu naprawy przeprowadzamy szczegółową kontrolę jakości, a następnie zapraszamy do odbioru pojazdu. Podczas odbioru otrzymasz dokumentację wykonanych prac i instrukcje dotyczące gwarancji."
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
                  🔧 NAPRAWY POWYPADKOWE
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-blue-600">Naprawy powypadkowe</span>
                  <br />
                  <span className="text-gray-900">najwyższej jakości</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Kompleksowe naprawy pojazdów po wypadkach. Blacharstwo, lakiernictwo, 
                  mechanika - wszystko w jednym miejscu z gwarancją jakości i bezgotówkowym rozliczeniem z OC sprawcy.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Naprawy bezgotówkowe z OC",
                  "Profesjonalne blacharstwo",
                  "Lakiernictwo najwyższej jakości",
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
                  Darmowa wycena
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/98c1a9a6-892d-403f-a83e-d61e11ade53e.png"
                alt="Naprawy powypadkowe"
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
              Naprawy powypadkowe - profesjonalny serwis samochodowy po wypadku
            </h1>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Nasza firma specjalizuje się w <strong>naprawach powypadkowych</strong> wszystkich typów pojazdów. Oferujemy kompleksową <strong>naprawę powypadkową bezgotówkową</strong>, która pozwala na szybkie przywrócenie samochodu do stanu pierwotnego bez konieczności ponoszenia kosztów z własnej kieszeni.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Kompleksowe naprawy ubezpieczeniowe</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Realizujemy <strong>naprawy ubezpieczeniowe</strong> w pełnym zakresie, współpracując z największymi towarzystwami ubezpieczeniowymi w Polsce. Nasza <strong>naprawa auta po kolizji z OC sprawcy</strong> obejmuje wszystkie niezbędne prace przywracające pojazd do stanu sprzed zdarzenia.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Specjalizujemy się w <strong>naprawie auta po wypadku z OC sprawcy</strong>, oferując najwyższą jakość wykonywanych usług. Bez względu na zakres uszkodzeń, nasza <strong>naprawa pojazdu po stłuczce z OC sprawcy</strong> jest przeprowadzana przez doświadczonych specjalistów z wykorzystaniem nowoczesnego sprzętu diagnostycznego.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Profesjonalne usuwanie uszkodzeń powypadkowych</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Nasze <strong>usuwanie uszkodzeń powypadkowych</strong> to proces wieloetapowy, który rozpoczynamy od szczegółowej diagnostyki pojazdu. <strong>Naprawy karoserii po stłuczce</strong> wykonujemy z zachowaniem oryginalnych parametrów fabrycznych, stosując tylko oryginalne części zamienne lub ich odpowiedniki najwyższej jakości.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Nasz <strong>serwis samochodowy po wypadku</strong> to gwarancja profesjonalizmu i terminowości. Zespół wykwalifikowanych mechaników zapewnia kompleksową obsługę każdego zlecenia, od drobnych napraw po rozległe uszkodzenia strukturalne.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Serwis mechaniczny i naprawa samochodów</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Oferujemy profesjonalną <strong>naprawę samochodów osobowych</strong> wszystkich marek i modeli. Nasz <strong>serwis samochodowy</strong> wyposażony jest w najnowocześniejsze urządzenia diagnostyczne, co pozwala na precyzyjne określenie zakresu niezbędnych napraw.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              <strong>Naprawa samochodów</strong> w naszym warsztacie to połączenie tradycyjnych metod rzemiosła z nowoczesnymi technologiami. Nasz <strong>serwis mechaniczny powypadkowy</strong> obejmuje naprawy silnika, układu hamulcowego, zawieszenia, układu kierowniczego oraz wszystkich innych systemów pojazdu.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Dlaczego warto wybrać nasze usługi?</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Nasz warsztat to synonim jakości i niezawodności w branży napraw powypadkowych. Oferujemy:
            </p>

            <ul className="text-lg text-gray-700 leading-relaxed mb-8 space-y-2">
              <li>• Bezgotówkową rozliczenie z ubezpieczycielem</li>
              <li>• Gwarancję na wszystkie wykonane prace</li>
              <li>• Szybkie terminy realizacji zleceń</li>
              <li>• Profesjonalną obsługę klienta</li>
              <li>• Współpracę z wszystkimi towarzystwami ubezpieczeniowymi</li>
            </ul>

            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              Zaufaj profesjonalistom - wybierz nasz serwis dla naprawy swojego pojazdu po wypadku. Kontakt telefoniczny dostępny całodobowo, bezpłatny dojazd po odbiór pojazdu na terenie całego województwa.
            </p>

            <hr className="border-gray-300 my-12" />

            <p className="text-base text-gray-600 italic leading-relaxed">
              Zapraszamy do kontaktu w celu omówienia szczegółów naprawy Twojego pojazdu. Nasi specjaliści chętnie udzielą wszystkich niezbędnych informacji dotyczących procesu naprawy i rozliczenia z ubezpieczeniem.
            </p>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Dlaczego wybierają nas klienci?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nasze zalety w naprawach powypadkowych
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nasze usługi naprawcze
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferujemy pełen zakres usług naprawczych dla pojazdów uszkodzonych w wypadkach
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 text-center">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Link to={service.href}>
                    <Button variant="outline" className="w-full group-hover:bg-blue-50 group-hover:border-blue-200">
                      Dowiedz się więcej
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Proces naprawy powypadkowej
            </h2>
            <p className="text-xl text-gray-600">
              Jak przebiega naprawa Twojego pojazdu po wypadku
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {repairProcess.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Najczęściej zadawane pytania
            </h2>
            <p className="text-xl text-gray-600">
              Odpowiedzi na pytania dotyczące napraw powypadkowych
            </p>
          </div>

          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-sm border p-6">
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

export default NaprawyPowypadkowe;
