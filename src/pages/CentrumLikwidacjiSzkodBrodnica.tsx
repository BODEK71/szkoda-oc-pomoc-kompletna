
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Phone, Mail, MapPin, Car, Wrench, Palette, Shield, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CentrumLikwidacjiSzkodBrodnica = () => {
  const services = [
    {
      icon: <Car className="w-6 h-6" />,
      title: "Naprawy powypadkowe",
      description: "Profesjonalne naprawy z OC sprawcy w Brodnicy"
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Blacharstwo i mechanika",
      description: "Kompleksowe usługi blacharsko-mechaniczne"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Lakierowanie",
      description: "Profesjonalne lakierowanie powypadkowe"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Pojazdy zastępcze",
      description: "Auto zastępcze z OC sprawcy bezgotówkowo"
    }
  ];

  const faqItems = [
    {
      question: "Jak długo trwa naprawa powypadkowa Brodnica?",
      answer: "Czas naprawy powypadkowej Brodnica zależy od zakresu uszkodzeń. Proste naprawy blacharskie Brodnica trwają 3-5 dni roboczych, bardziej skomplikowane naprawy z OC sprawcy Brodnica mogą wymagać 1-2 tygodni. Zawsze informujemy o przewidywanym terminie zakończenia prac."
    },
    {
      question: "Czy mogę otrzymać samochód zastępczy z OC sprawcy Brodnica?",
      answer: "Tak, oferujemy auto zastępcze z OC sprawcy Brodnica na czas naprawy. Pojazd zastępczy z OC sprawcy Brodnica jest dostępny bezgotówkowo, jeśli sprawca wypadku ma wykupione ubezpieczenie OC. Wynajem auta z OC sprawcy Brodnica organizujemy w ciągu 24 godzin."
    },
    {
      question: "Ile kosztuje holowanie po wypadku Brodnica?",
      answer: "Koszty holowania po wypadku Brodnica są zazwyczaj pokrywane przez ubezpieczenie OC sprawcy. Holowanie z OC sprawcy Brodnica obejmuje transport pojazdu z OC sprawcy Brodnica do wybranego serwisu. Oferujemy również bezpłatne holowanie Brodnica w ramach niektórych polis ubezpieczeniowych."
    },
    {
      question: "Jak zgłosić szkodę komunikacyjną Brodnica?",
      answer: "Zgłoszenie szkody komunikacyjnej Brodnica można dokonać telefonicznie lub osobiście w naszym biurze. Pomożemy w zgłoszeniu szkody ubezpieczeniowej Brodnica i przeprowadzimy wycenę szkody powypadkowej Brodnica. Nasz likwidator szkód Brodnica zadba o całą dokumentację."
    },
    {
      question: "Czy naprawa bezgotówkowa Brodnica jest możliwa?",
      answer: "Tak, oferujemy naprawa bezgotówkowa Brodnica w przypadku szkód z OC sprawcy. Naprawa powypadkowa bezgotówkowa Brodnica jest dostępna po ustaleniu winy sprawcy wypadku. Naprawy ubezpieczeniowe Brodnica realizujemy bez konieczności płacenia z własnej kieszeni."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge className="bg-blue-100 text-blue-800">
                🏢 CENTRUM LIKWIDACJI SZKÓD BRODNICA
              </Badge>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                <span className="text-blue-600">Centrum likwidacji szkód</span>
                <br />
                <span className="text-gray-900">Brodnica</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Kompleksowa obsługa powypadkowa dla mieszkańców Brodnicy. 
                Profesjonalne usługi napraw, likwidacji szkód i pomocy drogowej.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4" asChild>
                <a href="tel:+48506066525">
                  <Phone className="w-5 h-5 mr-2" />
                  Zadzwoń: +48 506 066 525
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-blue-200 text-blue-600 hover:bg-blue-50">
                Zgłoś szkodę
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nasze usługi w Brodnicy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferujemy pełen zakres usług powypadkowych dla mieszkańców Brodnicy i okolic
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed SEO Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Kompleksowe usługi powypadkowe w Brodnicy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sprawdź naszą szeroką ofertę usług dla pojazdów po kolizjach i wypadkach
            </p>
          </div>

          <div className="space-y-16">
            {/* Naprawy powypadkowe */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Naprawy powypadkowe Brodnica</h3>
                <p className="text-gray-600 mb-4">
                  Nasze centrum likwidacji szkód w Brodnicy specjalizuje się w profesjonalnych naprawach powypadkowych. Oferujemy kompleksowe usługi naprawy samochodów po kolizjach drogowych, zapewniając najwyższą jakość wykonania.
                </p>
                <p className="text-gray-600 mb-6">
                  Naprawy powypadkowe Brodnica wykonujemy z zachowaniem standardów producenta, przywracając pojazdy do stanu sprzed wypadku. Wykorzystujemy oryginalne części zamienne i zaawansowane technologie naprawcze.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Bezgotówkowe naprawy powypadkowe z OC sprawcy</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Kompleksowa naprawa struktury pojazdu</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Przywrócenie geometrii nadwozia</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
                <h4 className="text-xl font-semibold text-blue-800 mb-4">Korzyści napraw powypadkowych w Brodnicy</h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-blue-600 rounded-full p-1 mr-3 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Szybki czas realizacji</h5>
                      <p className="text-gray-600 text-sm">Naprawy powypadkowe Brodnica realizujemy w możliwie najkrótszym czasie</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-600 rounded-full p-1 mr-3 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Gwarancja na naprawy</h5>
                      <p className="text-gray-600 text-sm">Wszystkie naprawy powypadkowe objęte są pełną gwarancją</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-600 rounded-full p-1 mr-3 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Zachowanie wartości pojazdu</h5>
                      <p className="text-gray-600 text-sm">Profesjonalne naprawy zachowują wartość rynkową pojazdu</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Blacharstwo powypadkowe */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
                <h4 className="text-xl font-semibold text-blue-800 mb-4">Profesjonalne blacharstwo samochodowe</h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-blue-600 rounded-full p-1 mr-3 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Naprawa karoserii</h5>
                      <p className="text-gray-600 text-sm">Usuwanie wgnieceń, naprawa blach i elementów karoserii</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-600 rounded-full p-1 mr-3 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Wymiana elementów</h5>
                      <p className="text-gray-600 text-sm">Profesjonalna wymiana uszkodzonych elementów karoserii</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-600 rounded-full p-1 mr-3 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Renowacja zabytkowych pojazdów</h5>
                      <p className="text-gray-600 text-sm">Specjalistyczne usługi blacharskie dla samochodów klasycznych</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Blacharstwo powypadkowe Brodnica</h3>
                <p className="text-gray-600 mb-4">
                  Nasze centrum w Brodnicy oferuje pełen zakres usług blacharskich dla pojazdów po kolizjach i wypadkach. Nasi doświadczeni blacharze wykonują precyzyjne naprawy karoserii, przywracając pojazdy do idealnego stanu.
                </p>
                <p className="text-gray-600 mb-6">
                  Blacharstwo powypadkowe Brodnica w naszym centrum to gwarancja profesjonalnej obsługi i najwyższej jakości wykonania. Wykorzystujemy specjalistyczne narzędzia i technologie do naprawy wszelkich uszkodzeń blacharskich.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Dowiedz się więcej
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>

            {/* Lakierowanie samochodów */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Lakierowanie samochodów Brodnica</h3>
                <p className="text-gray-600 mb-4">
                  Profesjonalne lakierowanie pojazdów w Brodnicy to nasza specjalność. Oferujemy kompleksowe usługi lakiernicze z wykorzystaniem najwyższej jakości materiałów i nowoczesnych technologii.
                </p>
                <p className="text-gray-600 mb-6">
                  Lakierowanie samochodów Brodnica wykonujemy w kabinach lakierniczych zapewniających idealną czystość i warunki do uzyskania perfekcyjnego efektu. Gwarantujemy dokładne dopasowanie koloru i wysoką jakość wykończenia.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Lakierowanie całościowe i częściowe</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Dobór koloru i lakierowanie zaprawkowe</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Lakierowanie po naprawach blacharskich</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
                <h4 className="text-xl font-semibold text-blue-800 mb-4">Zalety naszego lakierowania</h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-blue-600 rounded-full p-1 mr-3 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Najwyższa jakość materiałów</h5>
                      <p className="text-gray-600 text-sm">Używamy tylko renomowanych lakierów samochodowych</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-600 rounded-full p-1 mr-3 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Gwarancja trwałości</h5>
                      <p className="text-gray-600 text-sm">Nasze lakierowanie jest odporne na warunki atmosferyczne</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-600 rounded-full p-1 mr-3 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Idealne dopasowanie koloru</h5>
                      <p className="text-gray-600 text-sm">Komputerowy system doboru kolorów lakieru</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pojazdy zastępcze */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
                <h4 className="text-xl font-semibold text-blue-800 mb-4">Dlaczego warto wybrać auto zastępcze z OC sprawcy?</h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-blue-600 rounded-full p-1 mr-3 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Bezkosztowe rozwiązanie</h5>
                      <p className="text-gray-600 text-sm">Samochód zastępczy bez wydatków z własnej kieszeni</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-600 rounded-full p-1 mr-3 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Szybka dostępność</h5>
                      <p className="text-gray-600 text-sm">Auto zastępcze dostępne od ręki lub w ciągu 24h</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-600 rounded-full p-1 mr-3 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Pełne ubezpieczenie</h5>
                      <p className="text-gray-600 text-sm">Auta zastępcze z pełnym pakietem ubezpieczeń</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Pojazdy zastępcze Brodnica</h3>
                <p className="text-gray-600 mb-4">
                  Potrzebujesz samochodu na czas naprawy? W naszym centrum w Brodnicy zapewniamy auta zastępcze z OC sprawcy. Oferujemy bezgotówkowy wynajem samochodów zastępczych na czas naprawy pojazdu po kolizji.
                </p>
                <p className="text-gray-600 mb-6">
                  Auto zastępcze z OC sprawcy Brodnica to wygodne rozwiązanie, które pozwala zachować mobilność w trakcie naprawy. Nasz zespół pomoże w uzyskaniu samochodu zastępczego z ubezpieczenia sprawcy wypadku.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Zamów auto zastępcze
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Najczęściej zadawane pytania
            </h2>
            <p className="text-xl text-gray-600">
              Odpowiedzi na pytania dotyczące usług w Brodnicy
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Skontaktuj się z nami
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Jesteśmy dostępni 24/7 dla mieszkańców Brodnicy
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 mb-2" />
              <h3 className="font-semibold mb-1">Telefon</h3>
              <p>+48 506 066 525</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 mb-2" />
              <h3 className="font-semibold mb-1">Email</h3>
              <p>kontakt@centrumpomocy.pl</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 mb-2" />
              <h3 className="font-semibold mb-1">Lokalizacja</h3>
              <p>Brodnica i okolice</p>
            </div>
          </div>

          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
            <a href="tel:+48506066525">
              <Phone className="w-5 h-5 mr-2" />
              Zadzwoń teraz
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CentrumLikwidacjiSzkodBrodnica;
