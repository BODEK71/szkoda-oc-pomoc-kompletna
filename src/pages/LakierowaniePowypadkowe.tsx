import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, ArrowRight, Palette, Droplets, Brush, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BenefitsSection from "@/components/BenefitsSection";
import WhyChooseUs from "@/components/WhyChooseUs";

const LakierowaniePowypadkowe = () => {
  const services = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Lakierowanie punktowe", 
      description: "Naprawa lokalnych uszkodzeń lakieru"
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Lakierowanie wodne",
      description: "Ekologiczne lakiery wodne najwyższej jakości"
    },
    {
      icon: <Brush className="w-6 h-6" />,
      title: "Lakierowanie elementów",
      description: "Profesjonalne lakierowanie zderzaków, masek, drzwi"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Dobór koloru",
      description: "Komputerowy dobór koloru lakieru"
    }
  ];

  const faqItems = [
    {
      question: "Ile trwa lakierowanie samochodu po wypadku?",
      answer: "Czas lakierowania zależy od zakresu prac. Lakierowanie punktowe może potrwać 1-2 dni, natomiast kompleksowe lakierowanie kilku elementów wymaga 3-5 dni roboczych. Po wstępnej ocenie zawsze informujemy o dokładnym terminie realizacji."
    },
    {
      question: "Czy lakierowanie jest objęte gwarancją?",
      answer: "Tak, wszystkie wykonane przez nas prace lakiernicze objęte są 3-letnią gwarancją. Gwarancja obejmuje przyczepność lakieru, odporność na warunki atmosferyczne oraz zachowanie koloru."
    },
    {
      question: "Jak dopasowujecie kolor lakieru do oryginalnego?",
      answer: "Używamy komputerowego systemu mieszania farb, który analizuje oryginalny kolor lakieru. Dodatkowo uwzględniamy stopień wyblakłego lakieru, co pozwala na idealne dopasowanie odcienia do reszty karoserii."
    },
    {
      question: "Jakie rodzaje lakierów stosujecie?",
      answer: "Stosujemy wyłącznie wysokiej jakości lakiery wodne renomowanych producentów jak Spies Hecker, PPG czy DuPont. Lakiery wodne są bardziej ekologiczne i zapewniają doskonałą trwałość oraz głęboki połysk."
    },
    {
      question: "Czy można lakierować samochód częściowo?",
      answer: "Tak, specjalizujemy się w lakierowaniu punktowym i częściowym. Możemy polakierować pojedyncze elementy jak zderzak, maskę, drzwi czy błotniki, zachowując pełną zgodność kolorystyczną z resztą pojazdu."
    },
    {
      question: "Co obejmuje proces lakierowania?",
      answer: "Proces obejmuje: przygotowanie powierzchni, szlifowanie, odtłuszczanie, aplikację podkładu, nakładanie farby bazowej, lakierowanie bezbarwnym lakierem oraz polerowanie. Każdy etap jest starannie kontrolowany."
    },
    {
      question: "Czy lakierujecie wszystkie marki samochodów?",
      answer: "Tak, lakierujemy pojazdy wszystkich marek i modeli. Mamy doświadczenie z każdym typem lakieru fabrycznego, od zwykłych jednowarstwowych po lakiery efektowe i metaliczne."
    },
    {
      question: "Jak przygotowujecie powierzchnię do lakierowania?",
      answer: "Przygotowanie obejmuje dokładne mycie, odrdzewianie, szlifowanie, wypełnianie nierówności szpachlą, gruntowanie oraz ostateczne wygładzenie powierzchni. To najważniejszy etap wpływający na jakość końcową."
    },
    {
      question: "Czy oferujecie bezgotówkowe rozliczenie z ubezpieczeniem?",
      answer: "Tak, współpracujemy z wszystkimi towarzystwami ubezpieczeniowymi. Oferujemy pełne bezgotówkowe rozliczenie dla lakierowania finansowanego z OC sprawcy, zajmując się całą dokumentacją."
    },
    {
      question: "Co to jest lakierowanie wodne i dlaczego je stosujecie?",
      answer: "Lakierowanie wodne używa lakierów na bazie wody zamiast rozpuszczalników. Jest bardziej ekologiczne, bezpieczniejsze dla pracowników, zapewnia lepszą przyczepność i trwałość oraz daje równomierniejsze pokrycie."
    },
    {
      question: "Czy można naprawić zarysowania bez pełnego lakierowania?",
      answer: "Tak, powierzchowne zarysowania można usunąć metodą polerowania lub lakierowania punktowego. Głębokie rysy wymagają szpachlowania i lakierowania, ale można to zrobić lokalnie bez malowania całego elementu."
    },
    {
      question: "Jak dbać o świeżo polakierowaną powierzchnię?",
      answer: "Przez pierwsze 30 dni unikaj mycia automatycznego, nie parkuj pod drzewami, unikaj silnych detergentów. Po tym czasie zalecamy regularne woskowanie i używanie wysokiej jakości kosmetyków samochodowych."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-purple-50 py-20 pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-purple-100 text-purple-800">
                  🎨 LAKIEROWANIE
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-purple-600">Lakierowanie</span>
                  <br />
                  <span className="text-gray-900">powypadkowe</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Profesjonalne lakierowanie powypadkowe z użyciem najnowszych technologii. 
                  Przywracamy pierwotny wygląd Twojego pojazdu.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Komputerowy dobór koloru",
                  "Lakiery wodne ekologiczne",
                  "Kabina lakiernicza z filtracją",
                  "Gwarancja na lakierowanie"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-4">
                  <Phone className="w-5 h-5 mr-2" />
                  Zadzwoń: 123-456-789
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-purple-200 text-purple-600 hover:bg-purple-50">
                  Wycena lakierowania
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/5679ec86-072c-4128-b1f8-0dec36dd67a9.png"
                alt="Lakierowanie powypadkowe"
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
              Lakierowanie powypadkowe - profesjonalne malowanie samochodów
            </h1>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Nasze <strong>lakierowanie powypadkowe</strong> to gwarancja przywrócenia pierwotnego wyglądu Twojego pojazdu po wypadku lub kolizji. Specjalizujemy się w kompleksowym <strong>lakierowaniu samochodów</strong> wszystkich marek i modeli, oferując najwyższą jakość wykonania oraz pełne dopasowanie kolorystyczne do oryginalnego lakieru.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Kompleksowe lakierowanie elementów karoserii</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Realizujemy profesjonalne <strong>lakierowanie elementów karoserii</strong> z wykorzystaniem najnowocześniejszych technologii mieszania farb i aplikacji lakierów. Nasze <strong>lakierowanie elementów</strong> obejmuje zarówno drobne poprawki, jak i kompleksowe odmalowanie całych sekcji pojazdu.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Dysponujemy nowoczesną komorą lakierniczą z kontrolą temperatury i wilgotności, co zapewnia idealne warunki do aplikacji lakieru. Dzięki temu uzyskujemy równomierne pokrycie i trwały efekt wizualny, który zachowuje swój wygląd przez wiele lat.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Specjalistyczne lakierowanie poszczególnych elementów</h2>
            
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Lakierowanie zderzaka</h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>Lakierowanie zderzaka</strong> to jedna z najczęściej wykonywanych przez nas usług. Zderzaki są najbardziej narażone na uszkodzenia podczas codziennej eksploatacji pojazdu. Nasze doświadczenie pozwala na precyzyjne odtworzenie faktury i koloru, niezależnie od typu materiału, z którego wykonany jest zderzak.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Lakierowanie maski</h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              <strong>Lakierowanie maski</strong> wymaga szczególnej precyzji ze względu na dużą powierzchnię elementu i jego widoczność. Nasz proces obejmuje dokładne przygotowanie powierzchni, aplikację podkładu, malowanie oraz końcowe polerowanie, które nadaje lakierowi głęboki połysk i trwałość.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Profesjonalne malowanie auta</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Nasze <strong>malowanie auta</strong> to proces wieloetapowy, który rozpoczynamy od szczegółowej analizy stanu lakieru i dopasowania koloru. Wykorzystujemy komputerowe systemy mieszania farb, które pozwalają na osiągnięcie idealnego dopasowania do oryginalnego odcienia pojazdu.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Proces malowania obejmuje:
            </p>

            <ul className="text-lg text-gray-700 leading-relaxed mb-8 space-y-2">
              <li>• <strong>Przygotowanie powierzchni</strong> - szlifowanie i czyszczenie elementów do lakierowania</li>
              <li>• <strong>Aplikacja podkładu</strong> - nałożenie warstwy gruntującej zapewniającej przyczepność</li>
              <li>• <strong>Malowanie bazowe</strong> - aplikacja farby w kontrolowanych warunkach komory lakierniczej</li>
              <li>• <strong>Lakierowanie</strong> - nałożenie warstwy lakieru zabezpieczającego i nadającego połysk</li>
              <li>• <strong>Polerowanie</strong> - końcowe wykończenie nadające głęboki połysk</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Doświadczony lakiernik samochodowy</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Nasz <strong>lakiernik samochodowy</strong> to specjalista z wieloletnim doświadczeniem w branży motoryzacyjnej. Każdy członek zespołu posiada odpowiednie certyfikaty i kwalifikacje, które potwierdzają wysokie kompetencje w zakresie lakierowania pojazdów wszystkich typów.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Współpracujemy wyłącznie z wykwalifikowanymi lakiernikami, którzy doskonale znają właściwości różnych typów farb i lakierów. Dzięki temu możemy zagwarantować, że każde lakierowanie zostanie wykonane zgodnie z najwyższymi standardami jakości.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Nowoczesne technologie lakierowania</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Nasz warsztat wyposażony jest w najnowocześniejszy sprzęt do lakierowania samochodów. Dysponujemy komorą lakierniczą z systemem filtracji powietrza, urządzeniami do mieszania farb oraz profesjonalnymi narzędziami do aplikacji lakierów.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Używamy wyłącznie wysokiej jakości farb i lakierów renomowanych producentów, co zapewnia trwałość i odporność na warunki atmosferyczne. Nasze technologie pozwalają na wykonywanie lakierowania z najwyższą precyzją, zachowując wszystkie parametry estetyczne i ochronne.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Gwarancja jakości lakierowania</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Wszystkie wykonane przez nas prace lakiernicze objęte są gwarancją jakości. Stosujemy sprawdzone materiały i procedury, co zapewnia trwałość i niezawodność lakierowania. Nasze doświadczenie oraz nowoczesne wyposażenie gwarantują najwyższy standard wykonywanych usług.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Oferujemy:
            </p>

            <ul className="text-lg text-gray-700 leading-relaxed mb-12 space-y-2">
              <li>• Gwarancję na wykonane prace lakiernicze</li>
              <li>• Bezgotówkowe rozliczenia z towarzystwami ubezpieczeniowymi</li>
              <li>• Szybkie terminy realizacji zleceń</li>
              <li>• Profesjonalną obsługę klienta</li>
              <li>• Bezpłatny transport pojazdu na terenie miasta</li>
            </ul>

            <hr className="border-gray-300 my-12" />

            <p className="text-base text-gray-600 italic leading-relaxed">
              Potrzebujesz profesjonalnego lakierowania po wypadku? Skontaktuj się z nami - nasi specjaliści dobiorą optymalne rozwiązanie i przywrócą Twojemu pojazdowi pierwotny wygląd.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nasze usługi lakiernicze
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kompleksowe lakierowanie powypadkowe z najwyższą jakością wykonania
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 text-center">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
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
              Odpowiedzi na pytania dotyczące lakierowania samochodów
            </p>
          </div>

          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow duration-300">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.question}</h3>
                <p className="text-gray-600 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BenefitsSection />
      <WhyChooseUs />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Potrzebujesz lakierowania po wypadku?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Przywrócimy Twojemu autu pierwotny wygląd i połysk!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Zadzwoń: 123-456-789
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              <Palette className="w-5 h-5 mr-2" />
              Umów lakierowanie
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LakierowaniePowypadkowe;
