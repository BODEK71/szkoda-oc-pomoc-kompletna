
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, ArrowRight, Building, Users, Award, MapPin, Shield, Clock, Star, Wrench } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BenefitsSection from "@/components/BenefitsSection";
import WhyChooseUs from "@/components/WhyChooseUs";

const CentrumNaprawPowypadkowych = () => {
  const centers = [
    {
      icon: <Building className="w-6 h-6" />,
      title: "Centrum Poznań",
      description: "Główne centrum napraw w Poznaniu",
      address: "ul. Przykładowa 123, Poznań"
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Centrum Wolsztyn",
      description: "Centrum napraw w Wolsztynie",
      address: "ul. Główna 45, Wolsztyn"
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Centrum Zielona Góra",
      description: "Punkt napraw w Zielonej Górze",
      address: "ul. Nowa 78, Zielona Góra"
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Centrum Leszno",
      description: "Centrum napraw w Lesznie",
      address: "ul. Centralna 90, Leszno"
    }
  ];

  const services = [
    {
      title: "Naprawy blacharskie",
      items: [
        "Prostowanie i wymiana elementów karoserii",
        "Naprawa ram i podwozi",
        "Przywracanie geometrii pojazdu",
        "Spawanie i lutowanie elementów metalowych"
      ]
    },
    {
      title: "Usługi lakiernicze",
      items: [
        "Lakierowanie całego pojazdu lub jego części",
        "Usuwanie rys i zadrapań",
        "Polerowanie i renowacja lakieru",
        "Dobór kolorów metodą komputerową"
      ]
    },
    {
      title: "Naprawy mechaniczne",
      items: [
        "Naprawa układów zawieszenia",
        "Wymiana elementów silnika",
        "Naprawa układów hamulcowych",
        "Regeneracja układów kierowniczych"
      ]
    },
    {
      title: "Wymiana szyb",
      items: [
        "Wymiana szyb przednich i tylnych",
        "Naprawa szyb bocznych",
        "Kalibracja systemów wspomagających",
        "Montaż folii ochronnych"
      ]
    }
  ];

  const repairProcess = [
    { step: "1", title: "Przyjęcie pojazdu", desc: "Dokładne oględziny i wycena szkód" },
    { step: "2", title: "Demontaż", desc: "Precyzyjny demontaż uszkodzonych elementów" },
    { step: "3", title: "Naprawa", desc: "Wykonanie napraw zgodnie z procedurami" },
    { step: "4", title: "Lakierowanie", desc: "Profesjonalne lakierowanie w komorze" },
    { step: "5", title: "Montaż i kontrola", desc: "Montaż elementów i kontrola jakości" }
  ];

  const warranties = [
    { type: "Gwarancja lakiernicza", period: "do 5 lat", desc: "na wykonane prace lakiernicze" },
    { type: "Gwarancja blacharska", period: "do 3 lat", desc: "na naprawy karoseryjne" },
    { type: "Gwarancja mechaniczna", period: "standardowa", desc: "zgodnie ze standardami producenta" },
    { type: "Gwarancja szyb", period: "pełna", desc: "producenta na wymienione szyby" }
  ];

  const insurers = [
    "PZU", "Warta", "Allianz", "Generali", "Ergo Hestia", "AXA", "Compensa"
  ];

  const faqItems = [
    {
      question: "Jakie usługi oferuje centrum napraw powypadkowych?",
      answer: "Nasze centrum napraw powypadkowych oferuje pełen zakres usług: naprawy blacharskie, lakiernicze, mechaniczne, wymianę szyb, a także usługi dodatkowe jak pojazd zastępczy czy pomoc w formalościach ubezpieczeniowych."
    },
    {
      question: "Jak długo trwa naprawa pojazdu w centrum?",
      answer: "Czas naprawy zależy od zakresu uszkodzeń. Drobne naprawy lakiernicze mogą potrwać 2-3 dni, natomiast kompleksowe naprawy powypadkowe mogą wymagać 1-3 tygodni. Zawsze informujemy o przewidywanym czasie naprawy."
    },
    {
      question: "Czy centrum napraw powypadkowych współpracuje z ubezpieczycielami?",
      answer: "Tak, współpracujemy z wszystkimi głównymi towarzystwami ubezpieczeniowymi w Polsce, w tym PZU, Warta, Allianz, Generali i innymi. Pomagamy w rozliczeniu naprawy bezpośrednio z ubezpieczycielem."
    },
    {
      question: "Jakiej gwarancji udziela centrum napraw powypadkowych?",
      answer: "Oferujemy gwarancję lakierniczą do 5 lat, gwarancję blacharską do 3 lat, gwarancję mechaniczną zgodnie ze standardami producenta oraz pełną gwarancję producenta na wymienione szyby."
    },
    {
      question: "Czy mogę otrzymać pojazd zastępczy podczas naprawy?",
      answer: "Tak, oferujemy pojazdy zastępcze podczas naprawy w naszym centrum. Dysponujemy szeroką gamą pojazdów dostosowanych do różnych potrzeb klientów."
    },
    {
      question: "Jakie części zamienne używa centrum napraw powypadkowych?",
      answer: "Stosujemy wyłącznie oryginalne części zamienne lub ich odpowiedniki najwyższej jakości. Wszystkie części pochodzą od certyfikowanych dostawców i są objęte gwarancją."
    },
    {
      question: "Czy centrum oferuje odbiór i dostawę pojazdu?",
      answer: "Tak, zapewniamy bezpłatny odbiór pojazdu z miejsca wypadku oraz dostawę po zakończeniu naprawy na terenie całego województwa."
    },
    {
      question: "Jakie certyfikaty posiada centrum napraw powypadkowych?",
      answer: "Posiadamy certyfikat ISO 9001, uprawnienia do napraw pojazdów luksusowych, certyfikaty producentów farb i lakierów oraz licencje na obsługę systemów bezpieczeństwa."
    },
    {
      question: "Czy centrum pomaga w załatwieniu formalności ubezpieczeniowych?",
      answer: "Tak, nasz zespół oferuje kompleksową pomoc w załatwieniu wszystkich formalności związanych z naprawą i dokumentacją ubezpieczeniową."
    },
    {
      question: "Jak wygląda proces wyceny szkód w centrum?",
      answer: "Wykonujemy szczegółowe oględziny pojazdu, sporządzamy dokumentację fotograficzną uszkodzeń i przygotowujemy profesjonalną wycenę kosztów naprawy zgodnie ze standardami ubezpieczeniowymi."
    },
    {
      question: "Czy centrum napraw powypadkowych ma odpowiednie wyposażenie?",
      answer: "Tak, jesteśmy wyposażeni w najnowocześniejszy sprzęt do napraw karoseryjnych i lakierniczych, w tym profesjonalne systemy pomiarowe do przywracania geometrii pojazdu."
    },
    {
      question: "Jak skontaktować się z centrum napraw powypadkowych?",
      answer: "Możesz skontaktować się z nami telefonicznie, przez stronę internetową lub osobiście w naszym centrum. Oferujemy bezpłatną wycenę szkód i profesjonalną konsultację."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-green-50 py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-800">
                  🔧 CENTRUM NAPRAW
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-green-600">Centrum napraw powypadkowych</span>
                </h1>
                
                <h2 className="text-2xl font-semibold text-gray-800">
                  Profesjonalna naprawa pojazdów po wypadkach
                </h2>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Nasze centrum napraw powypadkowych to miejsce, gdzie Twój pojazd odzyska pierwotny wygląd i sprawność techniczną. 
                  Specjalizujemy się w naprawach pojazdów uszkodzonych w wypadkach drogowych, oferując najwyższy standard usług 
                  i gwarancję jakości wykonanych prac.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Nowoczesne wyposażenie",
                  "Doświadczony zespół",
                  "Współpraca z ubezpieczycielami",
                  "Gwarancja na wszystkie usługi"
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
                  Kontakt: 123-456-789
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-green-200 text-green-600 hover:bg-green-50">
                  Bezpłatna wycena
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/98c1a9a6-892d-403f-a83e-d61e11ade53e.png"
                alt="Centrum napraw powypadkowych"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Dlaczego warto wybrać nasze centrum napraw powypadkowych?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Nowoczesne wyposażenie</h3>
              <p className="text-gray-600 text-center">
                Nasze centrum napraw powypadkowych wyposażone jest w najnowocześniejszy sprzęt do napraw karoseryjnych 
                i lakierniczych. Używamy profesjonalnych systemów pomiarowych, które pozwalają na precyzyjne 
                przywrócenie geometrii pojazdu.
              </p>
            </Card>

            <Card className="p-6">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Doświadczony zespół</h3>
              <p className="text-gray-600 text-center">
                W naszym centrum napraw powypadkowych pracują wyłącznie wykwalifikowani specjaliści z wieloletnim 
                doświadczeniem w naprawach powypadkowych. Każdy mechanik i lakiernik przeszedł specjalistyczne 
                szkolenia u renomowanych producentów.
              </p>
            </Card>

            <Card className="p-6">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Współpraca z ubezpieczycielami</h3>
              <p className="text-gray-600 text-center">
                Nasze centrum napraw powypadkowych współpracuje z największymi towarzystwami ubezpieczeniowymi w Polsce. 
                Dzięki temu proces rozliczenia naprawy jest sprawny i bezproblemowy dla naszych klientów.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Usługi centrum napraw powypadkowych
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Repair Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Proces naprawy w centrum
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {repairProcess.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warranty Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Gwarancja i jakość
            </h2>
            <p className="text-xl text-gray-600">
              Nasze centrum napraw powypadkowych oferuje gwarancję na wszystkie wykonane prace
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {warranties.map((warranty, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{warranty.type}</h3>
                <p className="text-green-600 font-bold text-xl mb-2">{warranty.period}</p>
                <p className="text-gray-600 text-sm">{warranty.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Insurers Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Współpraca z ubezpieczycielami
            </h2>
            <p className="text-xl text-gray-600">
              Centrum napraw powypadkowych współpracuje z:
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {insurers.map((insurer, index) => (
              <Badge key={index} variant="outline" className="text-lg px-6 py-2">
                {insurer}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Centers Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nasze centra napraw
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profesjonalne centra napraw powypadkowych w kluczowych lokalizacjach
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {centers.map((center, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                    {center.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 text-center">
                    {center.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-center">
                    {center.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center space-x-2 text-sm text-gray-600 justify-center">
                    <MapPin className="w-4 h-4" />
                    <span>{center.address}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Dodatkowe usługi
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pojazd zastępczy</h3>
              <p className="text-gray-600">
                Podczas naprawy w naszym centrum napraw powypadkowych możesz skorzystać z pojazdu zastępczego. 
                Oferujemy szeroką gamę pojazdów dostosowanych do Twoich potrzeb.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Odbiór i dostawa</h3>
              <p className="text-gray-600">
                Zapewniamy bezpłatny odbiór pojazdu z miejsca wypadku oraz dostawę po zakończeniu naprawy. 
                Nasza flota pojazdów pomocniczych jest dostępna na terenie całego województwa.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pomoc w formalościach</h3>
              <p className="text-gray-600">
                Nasz zespół pomoże Ci w załatwieniu wszystkich formalności związanych z naprawą. 
                Centrum napraw powypadkowych oferuje kompleksową obsługę dokumentacji ubezpieczeniowej.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              FAQ - Najczęściej zadawane pytania
            </h2>
            <p className="text-xl text-gray-600">
              Odpowiedzi na najważniejsze pytania dotyczące centrum napraw powypadkowych
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

      {/* Why Choose Us Reasons */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Dlaczego klienci wybierają nasze centrum?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Transparentność</h3>
              <p className="text-gray-600">
                W naszym centrum napraw powypadkowych stawiamy na pełną transparentność. 
                Każdy etap naprawy jest dokumentowany i przedstawiany klientowi.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Terminowość</h3>
              <p className="text-gray-600">
                Dotrzymujemy uzgodnionych terminów naprawy. Centrum napraw powypadkowych planuje prace 
                tak, aby minimalizować czas pozostawania pojazdu w serwisie.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Konkurencyjne ceny</h3>
              <p className="text-gray-600">
                Oferujemy konkurencyjne ceny przy zachowaniu najwyższej jakości usług. 
                Nasze centrum napraw powypadkowych współpracuje bezpośrednio z dostawcami części.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Indywidualne podejście</h3>
              <p className="text-gray-600">
                Każdy klient i każdy pojazd to dla nas indywidualny przypadek. 
                Nasze centrum napraw powypadkowych dostosowuje usługi do konkretnych potrzeb.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BenefitsSection />
      <WhyChooseUs />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Kontakt z centrum napraw powypadkowych
          </h2>
          <p className="text-xl mb-6 text-green-100">
            Potrzebujesz naprawy pojazdu po wypadku? Skontaktuj się z naszym centrum napraw powypadkowych już dziś!
          </p>
          <p className="text-lg mb-8 text-green-100">
            Nasze centrum napraw powypadkowych to gwarancja profesjonalnej obsługi i zadowolenia klientów. 
            Zaufaj naszemu doświadczeniu i zobacz, jak Twój pojazd odzyska dawną świetność!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Zadzwoń: 123-456-789
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              <MapPin className="w-5 h-5 mr-2" />
              Bezpłatna wycena
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CentrumNaprawPowypadkowych;
