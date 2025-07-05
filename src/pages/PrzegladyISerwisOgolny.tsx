import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Phone, ArrowRight, Settings, Wrench, Cog, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BenefitsSection from "@/components/BenefitsSection";
import WhyChooseUs from "@/components/WhyChooseUs";

const PrzegladyISerwisOgolny = () => {
  const services = [
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Przeglądy okresowe",
      description: "Kompleksowe przeglądy zgodnie z zaleceniami producenta"
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Serwis ogólny", 
      description: "Naprawy bieżące i wymiana części eksploatacyjnych"
    },
    {
      icon: <Cog className="w-6 h-6" />,
      title: "Diagnostyka komputerowa",
      description: "Precyzyjne wykrywanie usterek elektronicznych"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Serwis klimatyzacji",
      description: "Kompleksowa obsługa układów klimatyzacyjnych"
    }
  ];

  const faqItems = [
    {
      question: "Jak często należy wykonywać przegląd techniczny pojazdu?",
      answer: "Częstotliwość przeglądów technicznych zależy od wieku pojazdu i zalecenia producenta. Zazwyczaj nowe samochody wymagają przeglądu co 15 000-30 000 km lub raz do roki. Starsze pojazdy mogą wymagać częstszych kontroli - co 10 000-15 000 km."
    },
    {
      question: "Co obejmuje standardowy przegląd techniczny?",
      answer: "Standardowy przegląd obejmuje kontrolę układu hamulcowego, zawieszenia, kierowniczego, oświetlenia, silnika, układu wydechowego, poziomu płynów eksploatacyjnych oraz ogólnego stanu technicznego pojazdu."
    },
    {
      question: "Ile kosztuje przegląd techniczny samochodu?",
      answer: "Koszt przeglądu zależy od typu pojazdu i zakresu wykonywanych czynności. Podstawowy przegląd kosztuje od 200-500 zł, natomiast rozszerzony przegląd może kosztować 500-1000 zł. Dokładną wycenę otrzymają Państwo po diagnostyce."
    },
    {
      question: "Czy przegląd techniczny jest obowiązkowy?",
      answer: "Tak, przegląd techniczny jest obowiązkowy dla wszystkich pojazdów używanych w ruchu drogowym. Pojazdy osobowe do 3 lat są zwolnione z badań, pojazdy 3-5 lat badane są co 2 lata, a starsze niż 5 lat - co rok."
    },
    {
      question: "Jak długo trwa przegląd techniczny pojazdu?",
      answer: "Czas trwania przeglądu zależy od jego zakresu. Podstawowy przegląd trwa 1-2 godziny, natomiast kompleksowy przegląd może zająć 3-5 godzin. W przypadku wykrycia usterek wymagających naprawy, czas może się wydłużyć."
    },
    {
      question: "Co to jest diagnostyka komputerowa i kiedy jest potrzebna?",
      answer: "Diagnostyka komputerowa to sprawdzenie systemów elektronicznych pojazdu za pomocą specjalistycznych urządzeń. Jest potrzebna przy wystąpieniu kontrolek na tablicy rozdzielczej, problemach z silnikiem lub innych systemami elektronicznymi."
    },
    {
      question: "Czy można wykonać przegląd bez wcześniejszego umówienia?",
      answer: "Zalecamy wcześniejsze umówienie wizyty, aby zapewnić najlepszą jakość obsługi i skrócić czas oczekiwania. W pilnych przypadkach przyjmujemy również bez umówienia, jednak może to wiązać się z dłuższym czasem oczekiwania."
    },
    {
      question: "Jakie dokumenty są potrzebne do przeglądu technicznego?",
      answer: "Do przeglądu technicznego potrzebny jest dowód rejestracyjny pojazdu oraz polisa OC. W przypadku pojazdu firmowego dodatkowo potrzebne może być pełnomocnictwo lub dokumenty potwierdzające prawo do dysponowania pojazdem."
    },
    {
      question: "Czy oferujecie gwarancję na wykonane usługi serwisowe?",
      answer: "Tak, wszystkie nasze usługi serwisowe objęte są gwarancją. Na wymienione części dajemy gwarancję zgodną z warunkami producenta, natomiast na robociznę udzielamy 6-miesięcznej gwarancji."
    },
    {
      question: "Co się dzieje, jeśli pojazd nie przejdzie przeglądu technicznego?",
      answer: "Jeśli pojazd nie przejdzie przeglądu, otrzymają Państwo protokół z opisem usterek wymagających usunięcia. Po wykonaniu napraw można ponownie zgłosić pojazd do badania w terminie 30 dni bez dodatkowych opłat."
    },
    {
      question: "Czy wykonujecie serwis klimatyzacji przez cały rok?",
      answer: "Tak, serwis klimatyzacji wykonujemy przez cały rok. Zalecamy kontrolę przed sezonem letnim (marzec-kwiecień) oraz jesiennym (wrzesień-październik). W sezonie zimowym można wykonać przegląd i ewentualne naprawy układu."
    },
    {
      question: "Jak przygotować samochód do przeglądu technicznego?",
      answer: "Przed przeglądem zalecamy sprawdzenie podstawowych elementów: poziomu oleju, płynu hamulcowego, chłodniczego, stanu opon, działania świateł i klaksonu. Samochód powinien być czysty, szczególnie obszary podlegające kontroli."
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
                  🔧 SERWIS
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-blue-600">Przeglądy</span>
                  <br />
                  <span className="text-gray-900">i serwis ogólny</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Kompleksowa obsługa techniczna pojazdów. 
                  Zapewniamy bezpieczną i niezawodną eksploatację Twojego samochodu.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Przeglądy techniczne",
                  "Diagnostyka komputerowa",
                  "Serwis klimatyzacji",
                  "Gwarancja jakości"
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
                  Umów przegląd
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/5679ec86-072c-4128-b1f8-0dec36dd67a9.png"
                alt="Przeglądy i serwis ogólny"
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
              Przeglądy i serwis ogólny - kompleksowa obsługa techniczna pojazdów
            </h1>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Nasz <strong>przegląd techniczny auta</strong> to kompleksowa usługa obejmująca szczegółową kontrolę wszystkich systemów pojazdu oraz wykonanie niezbędnych napraw i regulacji. Oferujemy profesjonalne przeglądy techniczne oraz szeroki zakres usług serwisowych, które zapewniają bezpieczną i niezawodną eksploatację Twojego samochodu.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Profesjonalny przegląd techniczny auta</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>Przegląd techniczny auta</strong> wykonywany w naszym warsztacie to gwarancja dokładnego sprawdzenia wszystkich kluczowych systemów pojazdu. Nasi doświadczeni mechanicy przeprowadzają kompleksową kontrolę techniczną zgodnie z najwyższymi standardami branżowymi.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Zakres naszego przeglądu technicznego obejmuje:
            </p>

            <ul className="text-lg text-gray-700 leading-relaxed mb-8 space-y-2">
              <li>• <strong>Kontrola układu hamulcowego</strong> - sprawdzenie klocków, tarcz, płynu hamulcowego</li>
              <li>• <strong>Diagnostyka układu kierowniczego</strong> - kontrola luzów, geometrii kół</li>
              <li>• <strong>Sprawdzenie zawieszenia</strong> - ocena stanu amortyzatorów, sprężyn, tulei</li>
              <li>• <strong>Kontrola oświetlenia</strong> - sprawdzenie wszystkich lamp i reflektorów</li>
              <li>• <strong>Diagnostyka silnika</strong> - kontrola parametrów pracy, emisji spalin</li>
              <li>• <strong>Sprawdzenie układu wydechowego</strong> - kontrola szczelności i stanu katalizatora</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Kompleksowy serwis ogólny</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Nasz serwis ogólny to pełen zakres usług mechanicznych zapewniających prawidłowe funkcjonowanie pojazdu. Specjalizujemy się w obsłudze samochodów wszystkich marek, oferując zarówno przeglądy okresowe, jak i naprawy bieżące.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Przeglądy okresowe</h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Wykonujemy przeglądy okresowe zgodnie z zaleceniami producentów pojazdów:
            </p>

            <ul className="text-lg text-gray-700 leading-relaxed mb-6 space-y-2">
              <li>• <strong>Przeglądy podstawowe</strong> - wymiana oleju, filtrów, kontrola płynów</li>
              <li>• <strong>Przeglądy rozszerzone</strong> - dodatowa kontrola układów, diagnostyka komputerowa</li>
              <li>• <strong>Przeglądy roczne</strong> - kompleksowa kontrola stanu technicznego pojazdu</li>
              <li>• <strong>Przeglądy sezonowe</strong> - przygotowanie auta do zimy lub lata</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Serwis bieżący i naprawy</h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Nasz serwis obejmuje również naprawy bieżące i wymianę eksploatacyjnych części pojazdu:
            </p>

            <ul className="text-lg text-gray-700 leading-relaxed mb-8 space-y-2">
              <li>• Wymiana oleju silnikowego i filtrów</li>
              <li>• Serwis układu hamulcowego</li>
              <li>• Naprawa i wymiana elementów zawieszenia</li>
              <li>• Serwis układu klimatyzacji</li>
              <li>• Wymiana opon i wyważanie kół</li>
              <li>• Naprawa układu elektrycznego</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Diagnostyka komputerowa</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Nowoczesne pojazdy wymagają specjalistycznej diagnostyki komputerowej. Nasz warsztat wyposażony jest w najnowocześniejsze urządzenia diagnostyczne, które pozwalają na precyzyjne wykrywanie usterek elektronicznych.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Oferujemy:
            </p>

            <ul className="text-lg text-gray-700 leading-relaxed mb-8 space-y-2">
              <li>• <strong>Diagnostyka wszystkich systemów</strong> - silnik, skrzynia, ABS, ESP, airbag</li>
              <li>• <strong>Kodowanie i programowanie</strong> - aktualizacja oprogramowania sterowników</li>
              <li>• <strong>Kasowanie błędów</strong> - usuwanie kodów usterek po wykonanych naprawach</li>
              <li>• <strong>Adaptacje serwisowe</strong> - reset liczników serwisowych, kalibracja systemów</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Przygotowanie do badań technicznych</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Oferujemy kompleksowe przygotowanie pojazdu do obowiązkowych badań technicznych. Nasz przegląd przed badaniami technicznymi pozwala uniknąć nieprzyjemnych niespodzianek podczas kontroli w stacji diagnostycznej.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Kontrolujemy wszystkie elementy sprawdzane podczas badań:
            </p>

            <ul className="text-lg text-gray-700 leading-relaxed mb-8 space-y-2">
              <li>• Stan oświetlenia i sygnalizacji</li>
              <li>• Skuteczność układu hamulcowego</li>
              <li>• Emisja spalin i hałasu</li>
              <li>• Stan opon i geometria kół</li>
              <li>• Sprawność układu kierowniczego</li>
              <li>• Bezpieczeństwo konstrukcji pojazdu</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Serwis klimatyzacji</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Specjalizujemy się w kompleksowym serwisie układów klimatyzacji samochodowej. Oferujemy zarówno przeglądy okresowe, jak i naprawy układów chłodzących.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Nasze usługi klimatyzacyjne:
            </p>

            <ul className="text-lg text-gray-700 leading-relaxed mb-8 space-y-2">
              <li>• <strong>Przegląd układu klimatyzacji</strong> - kontrola szczelności, wydajności</li>
              <li>• <strong>Uzupełnienie czynnika</strong> - uzupełnienie gazu chłodniczego</li>
              <li>• <strong>Wymiana filtrów</strong> - kabinowy, osuszacz, filtr cząstek stałych</li>
              <li>• <strong>Dezynfekcja układu</strong> - usuwanie bakterii i nieprzyjemnych zapachów</li>
              <li>• <strong>Naprawa komponentów</strong> - wymiana sprężarek, skraplaczy, parowników</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Gwarancja jakości usług serwisowych</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Wszystkie wykonane przez nas usługi serwisowe objęte są gwarancją jakości. Stosujemy wyłącznie oryginalne części zamienne lub ich wysokiej jakości odpowiedniki, co zapewnia niezawodność i trwałość wykonanych prac.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Nasze zalety:
            </p>

            <ul className="text-lg text-gray-700 leading-relaxed mb-12 space-y-2">
              <li>• Doświadczony zespół mechaników</li>
              <li>• Nowoczesne wyposażenie diagnostyczne</li>
              <li>• Konkurencyjne ceny usług</li>
              <li>• Szybkie terminy realizacji</li>
              <li>• Profesjonalna obsługa klienta</li>
              <li>• Gwarancja na wykonane prace</li>
            </ul>

            <hr className="border-gray-300 my-12" />

            <p className="text-base text-gray-600 italic leading-relaxed">
              Potrzebujesz przeglądu technicznego lub serwisu swojego pojazdu? Umów się na wizytę - nasi specjaliści zadbają o bezpieczeństwo i niezawodność Twojego samochodu.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nasze usługi serwisowe
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kompleksowa obsługa techniczna wszystkich marek pojazdów
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Odpowiedzi na pytania dotyczące przeglądów technicznych i serwisu ogólnego
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-gray-900 pr-4">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-6 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <BenefitsSection />
      <WhyChooseUs />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Potrzebujesz przeglądu lub serwisu pojazdu?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Zadbamy o bezpieczeństwo i niezawodność Twojego samochodu!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Zadzwoń: 123-456-789
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              <Settings className="w-5 h-5 mr-2" />
              Umów przegląd
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrzegladyISerwisOgolny;
