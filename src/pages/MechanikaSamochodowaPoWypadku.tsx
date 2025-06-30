
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, ArrowRight, Wrench, Settings, Cog, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BenefitsSection from "@/components/BenefitsSection";
import WhyChooseUs from "@/components/WhyChooseUs";

const MechanikaSamochodowaPoWypadku = () => {
  const services = [
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Naprawa silnika",
      description: "Kompleksowe naprawy jednostek napędowych"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Wymiana rozrządu",
      description: "Profesjonalna wymiana układu rozrządu"
    },
    {
      icon: <Cog className="w-6 h-6" />,
      title: "Diagnostyka komputerowa",
      description: "Precyzyjne wykrywanie usterek"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Systemy bezpieczeństwa",
      description: "Kontrola airbagów i systemów asystujących"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-green-50 py-20 pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-800">
                  🔧 MECHANIKA
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-green-600">Mechanika</span>
                  <br />
                  <span className="text-gray-900">samochodowa po wypadku</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Profesjonalny serwis mechaniczny po wypadkach. 
                  Przywracamy pełną sprawność techniczną Twojego pojazdu.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Diagnostyka komputerowa",
                  "Naprawa silników",
                  "Wymiana rozrządu",
                  "Gwarancja na naprawy"
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
                  Bezpłatna diagnostyka
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/5679ec86-072c-4128-b1f8-0dec36dd67a9.png"
                alt="Mechanika samochodowa po wypadku"
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
              Mechanika samochodowa po wypadku - profesjonalny serwis mechaniczny
            </h1>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Nasza <strong>mechanika samochodowa</strong> specjalizuje się w naprawach mechanicznych pojazdów po wypadkach i kolizjach. Oferujemy kompleksowe usługi mechaniczne, które przywracają pełną sprawność techniczną samochodu po zdarzeniach drogowych. Nasz zespół doświadczonych specjalistów zapewnia najwyższą jakość napraw wszystkich systemów pojazdu.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Doświadczony mechanik samochodowy - ekspert w naprawach powypadkowych</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Nasz <strong>mechanik samochodowy</strong> to specjalista z wieloletnim doświadczeniem w naprawach mechanicznych po wypadkach. Każdy członek zespołu posiada odpowiednie kwalifikacje i certyfikaty, które potwierdzają wysokie kompetencje w zakresie diagnostyki i napraw mechanicznych wszystkich marek samochodów.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Współpracujemy wyłącznie z wykwalifikowanymi mechanikami, którzy doskonale znają konstrukcję nowoczesnych pojazdów. Dzięki temu możemy zagwarantować profesjonalną diagnostykę i naprawę wszystkich systemów mechanicznych uszkodzonych w wyniku wypadku.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Specjalistyczna naprawa silnika po kolizji</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>Naprawa silnika po kolizji</strong> to jedna z najbardziej wymagających usług mechanicznych. Uszkodzenia silnika w wyniku wypadku mogą obejmować różne komponenty - od drobnych wycieków oleju po poważne uszkodzenia bloku silnika czy głowicy.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Nasz proces naprawy silnika po kolizji obejmuje:
            </p>

            <ul className="text-lg text-gray-700 leading-relaxed mb-8 space-y-2">
              <li>• Szczegółową diagnostykę wszystkich systemów silnika</li>
              <li>• Ocenę stanu elementów wewnętrznych i zewnętrznych</li>
              <li>• Naprawę lub wymianę uszkodzonych komponentów</li>
              <li>• Kontrolę systemów smarowania i chłodzenia</li>
              <li>• Testy wydajności i prawidłowego funkcjonowania</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Profesjonalna wymiana rozrządu po wypadku</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>Wymiana rozrządu po wypadku</strong> to skomplikowana operacja wymagająca specjalistycznej wiedzy i doświadczenia. Uszkodzenia układu rozrządu mogą wystąpić w wyniku silnego uderzenia lub nagłego zatrzymania silnika podczas kolizji.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Realizujemy wymianę wszystkich elementów układu rozrządu:
            </p>

            <ul className="text-lg text-gray-700 leading-relaxed mb-8 space-y-2">
              <li>• Pasek lub łańcuch rozrządu</li>
              <li>• Rolki napinające i prowadzące</li>
              <li>• Pompa wody (jeśli jest napędzana przez rozrząd)</li>
              <li>• Tensometry i napinacze</li>
              <li>• Uszczelki i elementy mocujące</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Kompleksowa naprawa silnika</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Nasza <strong>naprawa silnika</strong> obejmuje pełen zakres usług mechanicznych związanych z jednostką napędową pojazdu. Specjalizujemy się w naprawach silników benzynowych, diesla oraz hybrydowych, stosując najnowocześniejsze technologie diagnostyczne i naprawcze.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Zakres naszych usług mechanicznych:
            </p>

            <ul className="text-lg text-gray-700 leading-relaxed mb-8 space-y-2">
              <li>• <strong>Diagnostyka komputerowa</strong> - precyzyjne wykrywanie usterek elektronicznych</li>
              <li>• <strong>Naprawa układu wtryskowego</strong> - serwis wtryskiwaczy i pompy wysokiego ciśnienia</li>
              <li>• <strong>Regeneracja turbosprężarek</strong> - naprawa i wymiana elementów doładowania</li>
              <li>• <strong>Serwis układu chłodzenia</strong> - naprawa chłodnic, pomp i termostatów</li>
              <li>• <strong>Naprawa układu wydechowego</strong> - wymiana tłumików, katalizatorów i filtrów</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Diagnostyka mechaniczna po wypadku</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Po każdym wypadku przeprowadzamy kompleksową diagnostykę mechaniczną pojazdu, która obejmuje sprawdzenie wszystkich kluczowych systemów. Używamy nowoczesnych urządzeń diagnostycznych, które pozwalają na precyzyjne wykrycie nawet ukrytych uszkodzeń mechanicznych.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Obszary diagnostyki powypadkowej:
            </p>

            <ul className="text-lg text-gray-700 leading-relaxed mb-8 space-y-2">
              <li>• <strong>Układ napędowy</strong> - silnik, skrzynia biegów, sprzęgło</li>
              <li>• <strong>Układ hamulcowy</strong> - sprawdzenie skuteczności i bezpieczeństwa</li>
              <li>• <strong>Zawieszenie</strong> - kontrola amortyzatorów, sprężyn i elementów prowadzących</li>
              <li>• <strong>Układ kierowniczy</strong> - sprawdzenie geometrii i sprawności</li>
              <li>• <strong>Systemy bezpieczeństwa</strong> - kontrola airbagów i systemów asystujących</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Nowoczesne wyposażenie mechaniczne</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Nasz warsztat mechaniczny wyposażony jest w najnowocześniejszy sprzęt diagnostyczny i naprawczy. Dysponujemy urządzeniami do diagnostyki komputerowej, testowania układów mechanicznych oraz specjalistycznymi narzędziami do napraw silników.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Zaawansowane technologie pozwalają nam na wykonywanie napraw z najwyższą precyzją, zachowując wszystkie parametry techniczne i bezpieczeństwa pojazdu. Każdy etap naprawy jest dokładnie kontrolowany, a jakość wykonanych prac sprawdzana przez doświadczonych specjalistów.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Gwarancja jakości napraw mechanicznych</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Wszystkie wykonane przez nas naprawy mechaniczne objęte są gwarancją jakości. Stosujemy wyłącznie oryginalne części zamienne lub ich wysokiej jakości odpowiedniki, co zapewnia trwałość i niezawodność napraw.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Oferujemy:
            </p>

            <ul className="text-lg text-gray-700 leading-relaxed mb-12 space-y-2">
              <li>• Gwarancję na wszystkie wykonane prace mechaniczne</li>
              <li>• Bezgotówkowe rozliczenia z towarzystwami ubezpieczeniowymi</li>
              <li>• Szybkie terminy realizacji napraw</li>
              <li>• Profesjonalną obsługę techniczną</li>
              <li>• Bezpłatną diagnostykę wstępną</li>
            </ul>

            <hr className="border-gray-300 my-12" />

            <p className="text-base text-gray-600 italic leading-relaxed">
              Potrzebujesz naprawy mechanicznej po wypadku? Skontaktuj się z nami - nasi specjaliści przeprowadzą dokładną diagnostykę i przywrócą pełną sprawność Twojego pojazdu.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nasze usługi mechaniczne
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kompleksowe naprawy mechaniczne po wypadkach
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 text-center">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
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

      <BenefitsSection />
      <WhyChooseUs />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Potrzebujesz naprawy mechanicznej po wypadku?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Przywrócimy pełną sprawność Twojego pojazdu!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Zadzwoń: 123-456-789
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              <Wrench className="w-5 h-5 mr-2" />
              Umów diagnostykę
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MechanikaSamochodowaPoWypadku;
