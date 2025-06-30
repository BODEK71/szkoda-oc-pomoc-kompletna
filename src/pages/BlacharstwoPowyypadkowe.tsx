
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, ArrowRight, Hammer, Shield, Settings, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BenefitsSection from "@/components/BenefitsSection";
import WhyChooseUs from "@/components/WhyChooseUs";

const BlacharstwoPowyypadkowe = () => {
  const services = [
    {
      icon: <Hammer className="w-6 h-6" />,
      title: "Prostowanie karoserii",
      description: "Profesjonalne usuwanie wgnieceń i deformacji"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Wymiana elementów",
      description: "Wymiana uszkodzonych części karoserii"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Spawanie karoserii",
      description: "Naprawy spawalnicze elementów nośnych"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Finishing i wykończenie",
      description: "Przygotowanie do lakierowania"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-50 via-white to-yellow-50 py-20 pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-yellow-100 text-yellow-800">
                  🔨 BLACHARSTWO
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-yellow-600">Blacharstwo</span>
                  <br />
                  <span className="text-gray-900">powypadkowe</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Profesjonalne usługi blacharskie po wypadkach. 
                  Przywracamy Twojemu samochodowi pierwotny kształt.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Prostowanie wgnieceń",
                  "Wymiana elementów karoserii",
                  "Spawanie profesjonalne",
                  "Przygotowanie do lakierowania"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-lg px-8 py-4">
                  <Phone className="w-5 h-5 mr-2" />
                  Zadzwoń: 123-456-789
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-yellow-200 text-yellow-600 hover:bg-yellow-50">
                  Wycena naprawy
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/5679ec86-072c-4128-b1f8-0dec36dd67a9.png"
                alt="Blacharstwo powypadkowe"
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
              Blacharstwo powypadkowe - profesjonalne naprawy karoserii
            </h1>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Nasze <strong>blacharstwo powypadkowe</strong> to gwarancja najwyższej jakości napraw karoserii po zdarzeniach drogowych. Dysponujemy nowoczesnym sprzętem i zespołem doświadczonych specjalistów, którzy przywrócą Twój pojazd do stanu pierwotnego z zachowaniem wszystkich parametrów bezpieczeństwa.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Doświadczony blacharz samochodowy - ekspert w naprawach</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Nasz <strong>blacharz samochodowy</strong> to specjalista z wieloletnim doświadczeniem w branży motoryzacyjnej. Każdy członek naszego zespołu posiada odpowiednie kwalifikacje i certyfikaty, które potwierdzają wysokie kompetencje w zakresie napraw blacharskich wszystkich typów pojazdów.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Współpracujemy wyłącznie z wykwalifikowanymi blacharzami, którzy doskonale znają konstrukcję współczesnych samochodów. Dzięki temu możemy zagwarantować, że każda naprawa zostanie wykonana zgodnie z wymogami producenta pojazdu i zachowa wszystkie parametry bezpieczeństwa.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Kompleksowe naprawy blacharskie</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Nasze <strong>naprawy blacharskie</strong> obejmują pełen zakres usług związanych z regeneracją karoserii po wypadkach i kolizjach. Specjalizujemy się w naprawach uszkodzeń zarówno powierzchniowych, jak i strukturalnych, stosując najnowocześniejsze technologie i metody pracy.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Zakres naszych usług blacharskich:
            </p>

            <ul className="text-lg text-gray-700 leading-relaxed mb-8 space-y-2">
              <li>• <strong>Prostowanie i naprawy elementów karoserii</strong> - przywracamy pierwotny kształt uszkodzonych części</li>
              <li>• <strong>Wymiana elementów karoserii</strong> - montujemy oryginalne części zamienne lub ich wysokiej jakości odpowiedniki</li>
              <li>• <strong>Naprawy strukturalne</strong> - profesjonalna naprawa ram nośnych i elementów konstrukcyjnych</li>
              <li>• <strong>Spawanie i lutowanie</strong> - precyzyjna naprawa pęknięć i uszkodzeń blach</li>
              <li>• <strong>Przygotowanie powierzchni</strong> - szlifowanie, gruntowanie i przygotowanie do lakierowania</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Nowoczesne wyposażenie warsztatu blacharskiego</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Nasz warsztat wyposażony jest w najnowocześniejszy sprzęt do napraw blacharskich. Dysponujemy urządzeniami do pomiaru geometrii nadwozia, co pozwala na precyzyjne odtworzenie oryginalnych wymiarów pojazdu. Używamy również nowoczesnych narzędzi do prostowania bez lakierowania (PDR) oraz specjalistycznych urządzeń spawalniczych.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Zaawansowane technologie pozwalają nam na wykonywanie napraw z najwyższą precyzją, zachowując wszystkie parametry bezpieczeństwa i komfortu jazdy. Każdy etap naprawy jest dokładnie kontrolowany, a jakość wykonanych prac sprawdzana przez doświadczonych specjalistów.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Proces naprawy blacharskiej</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Naprawy w naszym warsztacie przebiegają według sprawdzonej procedury:
            </p>

            <ol className="text-lg text-gray-700 leading-relaxed mb-8 space-y-2">
              <li>1. <strong>Wstępna diagnostyka</strong> - szczegółowa ocena zakresu uszkodzeń karoserii</li>
              <li>2. <strong>Demontaż elementów</strong> - bezpieczne zdjęcie uszkodzonych części i elementów wykończenia</li>
              <li>3. <strong>Naprawa strukturalna</strong> - odtworzenie geometrii nadwozia i naprawy ram nośnych</li>
              <li>4. <strong>Prostowanie i kształtowanie</strong> - przywrócenie pierwotnego kształtu elementów karoserii</li>
              <li>5. <strong>Spawanie i łączenie</strong> - profesjonalne połączenie naprawianych elementów</li>
              <li>6. <strong>Przygotowanie do lakierowania</strong> - szlifowanie, gruntowanie i przygotowanie powierzchni</li>
              <li>7. <strong>Kontrola jakości</strong> - sprawdzenie wszystkich parametrów naprawionej karoserii</li>
            </ol>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Gwarancja jakości napraw blacharskich</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Wszystkie wykonane przez nas naprawy blacharskie objęte są gwarancją jakości. Stosujemy wyłącznie sprawdzone materiały i oryginalne części zamienne, co zapewnia trwałość i niezawodność napraw. Nasze doświadczenie oraz nowoczesne wyposażenie gwarantują najwyższy standard wykonywanych usług.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              Współpracujemy z największymi towarzystwami ubezpieczeniowymi, oferując bezgotówkowe rozliczenia dla napraw finansowanych z ubezpieczenia OC sprawcy. Zapewniamy również szybkie terminy realizacji oraz profesjonalną obsługę klienta na każdym etapie naprawy.
            </p>

            <hr className="border-gray-300 my-12" />

            <p className="text-base text-gray-600 italic leading-relaxed">
              Potrzebujesz profesjonalnych napraw blacharskich? Skontaktuj się z nami - nasi specjaliści ocenią zakres uszkodzeń i przedstawią optymalne rozwiązanie dla Twojego pojazdu.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nasze usługi blacharskie
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kompleksowe naprawy karoserii po wypadkach
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 text-center">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
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
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-yellow-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Potrzebujesz naprawy blacharskiej?
          </h2>
          <p className="text-xl mb-8 text-yellow-100">
            Skontaktuj się z nami - naprawimy Twój samochód profesjonalnie!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-yellow-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Zadzwoń: 123-456-789
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              <Hammer className="w-5 h-5 mr-2" />
              Umów wizytę
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlacharstwoPowyypadkowe;
