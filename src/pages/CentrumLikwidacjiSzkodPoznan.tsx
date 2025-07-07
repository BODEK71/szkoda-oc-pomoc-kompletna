
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Phone, Mail, MapPin, Car, Wrench, Palette, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CentrumLikwidacjiSzkodPoznan = () => {
  const services = [
    {
      icon: <Car className="w-6 h-6" />,
      title: "Naprawy powypadkowe",
      description: "Profesjonalne naprawy z OC sprawcy w Poznaniu"
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
      question: "Jak długo trwa naprawa powypadkowa Poznań?",
      answer: "Czas naprawy powypadkowej Poznań zależy od zakresu uszkodzeń. Proste naprawy blacharskie Poznań trwają 3-5 dni roboczych, bardziej skomplikowane naprawy z OC sprawcy Poznań mogą wymagać 1-2 tygodni. Zawsze informujemy o przewidywanym terminie zakończenia prac."
    },
    {
      question: "Czy mogę otrzymać samochód zastępczy z OC sprawcy Poznań?",
      answer: "Tak, oferujemy auto zastępcze z OC sprawcy Poznań na czas naprawy. Pojazd zastępczy z OC sprawcy Poznań jest dostępny bezgotówkowo, jeśli sprawca wypadku ma wykupione ubezpieczenie OC. Wynajem auta z OC sprawcy Poznań organizujemy w ciągu 24 godzin."
    },
    {
      question: "Ile kosztuje holowanie po wypadku Poznań?",
      answer: "Koszty holowania po wypadku Poznań są zazwyczaj pokrywane przez ubezpieczenie OC sprawcy. Holowanie z OC sprawcy Poznań obejmuje transport pojazdu z OC sprawcy Poznań do wybranego serwisu. Oferujemy również bezpłatne holowanie Poznań w ramach niektórych polis ubezpieczeniowych."
    },
    {
      question: "Jak zgłosić szkodę komunikacyjną Poznań?",
      answer: "Zgłoszenie szkody komunikacyjnej Poznań można dokonać telefonicznie lub osobiście w naszym biurze. Pomożemy w zgłoszeniu szkody ubezpieczeniowej Poznań i przeprowadzimy wycenę szkody powypadkowej Poznań. Nasz likwidator szkód Poznań zadba o całą dokumentację."
    },
    {
      question: "Czy naprawa bezgotówkowa Poznań jest możliwa?",
      answer: "Tak, oferujemy naprawa bezgotówkowa Poznań w przypadku szkód z OC sprawcy. Naprawa powypadkowa bezgotówkowa Poznań jest dostępna po ustaleniu winy sprawcy wypadku. Naprawy ubezpieczeniowe Poznań realizujemy bez konieczności płacenia z własnej kieszeni."
    },
    {
      question: "Jaki jest zakres usług blacharstwa powypadkowego Poznań?",
      answer: "Nasze blacharstwo powypadkowe Poznań obejmuje usuwanie uszkodzeń powypadkowych Poznań, naprawy karoserii po stłuczce Poznań oraz pełne lakierowanie samochodów Poznań. Nasz blacharz samochodowy Poznań wykonuje również lakierowanie elementów karoserii Poznań, lakierowanie zderzaka Poznań i lakierowanie maski Poznań."
    },
    {
      question: "Czy oferujecie serwis mechaniczny powypadkowy Poznań?",
      answer: "Tak, nasz serwis samochodowy po wypadku Poznań obejmuje mechanika samochodowa Poznań, naprawa silnika po kolizji Poznań, wymiana rozrządu po wypadku Poznań oraz przegląd techniczny auta Poznań. Nasz mechanik samochodowy Poznań ma doświadczenie w naprawach samochodów osobowych Poznań."
    },
    {
      question: "Jak długo mogę korzystać z pojazdu zastępczego Poznań?",
      answer: "Czas wynajmu auta z OC sprawcy Poznań zależy od czasu naprawy. Samochód zastępczy na czas naprawy Poznań jest dostępny przez cały okres naprawy pojazdu. Wynajem pojazdów zastępczych z OC sprawcy Poznań może trwać od kilku dni do kilku tygodni."
    },
    {
      question: "Czy oferujecie pomoc drogową 24h Poznań?",
      answer: "Tak, nasza pomoc drogowa 24/7 Poznań jest dostępna całą dobę. Laweta 24h Poznań dojedzie na miejsce wypadku w ciągu 30 minut w obrębie miasta. Oferujemy także ściąganie samochodu z drogi Poznań i holowanie samochodu osobowego Poznań."
    },
    {
      question: "Jakie pojazdy zastępcze są dostępne Poznań?",
      answer: "Oferujemy szeroki wybór pojazdów: od małych aut miejskich po wynajem busa z OC sprawcy Poznań. Mamy także wynajem pojazdów specjalistycznych z OC sprawcy Poznań. Nasza wypożyczalnia współpracująca z ubezpieczalniami Poznań oferuje auta wszystkich klas."
    },
    {
      question: "Czy można wynająć auto z OC sprawcy bez limitu kilometrów Poznań?",
      answer: "Tak, oferujemy wynajem auta z OC sprawcy bez limitu kilometrów Poznań w wybranych pakietach. Wynajem pojazdu z OC sprawcy Poznań może obejmować nieograniczone kilometry, szczególnie w przypadku długotrwałych napraw."
    },
    {
      question: "Jak przebiega likwidacja szkody z OC Poznań?",
      answer: "Likwidacja szkód komunikacyjnych Poznań rozpoczyna się od ocena uszkodzeń pojazdu Poznań. Następnie przygotowujemy kosztorys naprawy z OC sprawcy Poznań i prowadzimy obsługa szkody z OC Poznań. Bezpośrednia likwidacja szkód (BLS) Poznań pozwala na szybkie rozliczenie sprawy."
    },
    {
      question: "Czy oferujecie transport aut powypadkowych Poznań?",
      answer: "Tak, specjalizujemy się w transport pojazdów Poznań, szczególnie transport aut powypadkowych Poznań. Oferujemy przewóz uszkodzonego pojazdu Poznań oraz usuwanie aut z miejsca kolizji Poznań. Nasze usługi lawetą Poznań obejmują także usunięcie pojazdu z miejsca wypadku Poznań."
    },
    {
      question: "Jakie są koszty wynajmu auta z OC sprawcy Poznań?",
      answer: "Koszt wynajmu auta z OC sprawcy Poznań jest zazwyczaj pokrywany przez ubezpieczenie sprawcy wypadku. Auto zastępcze bezgotówkowo Poznań oznacza, że nie płacisz z własnej kieszeni. Samochód zastępczy z ubezpieczenia Poznań jest dostępny zgodnie z warunkami polisy."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge className="bg-blue-100 text-blue-800">
                🏢 CENTRUM LIKWIDACJI SZKÓD POZNAŃ
              </Badge>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                <span className="text-blue-600">Centrum likwidacji szkód</span>
                <br />
                <span className="text-gray-900">Poznań</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Kompleksowa obsługa powypadkowa dla mieszkańców Poznania. 
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

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Naprawy powypadkowe Poznań - Profesjonalne usługi dla mieszkańców
          </h2>
          
          <p className="text-gray-600 mb-8">
            Nasze centrum napraw powypadkowych Poznań oferuje kompleksową obsługę powypadkową dla wszystkich mieszkańców miasta i okolic. Specjalizujemy się w naprawach z winy sprawcy Poznań, oferując pełen zakres usług związanych z likwidacją szkód komunikacyjnych.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Naprawy z OC sprawcy Poznań - Bezgotówkowa obsługa
          </h3>
          
          <p className="text-gray-600 mb-6">
            Nasza naprawa bezgotówkowa Poznań to rozwiązanie dla wszystkich poszkodowanych w wypadkach drogowych. Oferujemy naprawy ubezpieczeniowe Poznań, które obejmują:
          </p>

          <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
            <li>Naprawa auta po kolizji z OC sprawcy Poznań</li>
            <li>Naprawa auta po wypadku z OC sprawcy Poznań</li>
            <li>Naprawa pojazdu po stłuczce z OC sprawcy Poznań</li>
            <li>Naprawa powypadkowa bezgotówkowa Poznań</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Blacharstwo powypadkowe Poznań - Specjalistyczne usługi
          </h2>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Naprawy blacharskie Poznań
          </h3>
          
          <p className="text-gray-600 mb-6">
            Nasz blacharz samochodowy Poznań oferuje profesjonalne usuwanie uszkodzeń powypadkowych Poznań. Naprawy karoserii po stłuczce Poznań wykonujemy przy użyciu najnowocześniejszego sprzętu i technologii.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Lakierowanie samochodów Poznań
          </h3>
          
          <p className="text-gray-600 mb-4">
            Nasze lakierowanie z OC sprawcy Poznań obejmuje:
          </p>

          <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
            <li>Lakierowanie elementów karoserii Poznań</li>
            <li>Lakierowanie zderzaka Poznań</li>
            <li>Lakierowanie maski Poznań</li>
            <li>Malowanie auta Poznań</li>
            <li>Lakierowanie powypadkowe Poznań</li>
          </ul>

          <p className="text-gray-600 mb-8">
            Nasz lakiernik samochodowy Poznań gwarantuje najwyższą jakość wykonanych prac i naprawa blacharsko-lakiernicza z OC sprawcy Poznań jest wykonywana zgodnie ze standardami producentów.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Serwis samochodowy Poznań - Kompleksowa obsługa
          </h2>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Serwis samochodowy po wypadku Poznań
          </h3>
          
          <p className="text-gray-600 mb-4">
            Nasz serwis mechaniczny powypadkowy Poznań oferuje:
          </p>

          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>Naprawa samochodów osobowych Poznań</li>
            <li>Mechanika samochodowa Poznań</li>
            <li>Naprawa silnika po kolizji Poznań</li>
            <li>Wymiana rozrządu po wypadku Poznań</li>
            <li>Naprawa silnika Poznań</li>
            <li>Przegląd techniczny auta Poznań</li>
          </ul>

          <p className="text-gray-600 mb-8">
            Nasz mechanik samochodowy Poznań posiada wieloletnie doświadczenie w naprawach powypadkowych.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Pojazdy zastępcze Poznań - Mobilność podczas naprawy
          </h2>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Samochód zastępczy z OC sprawcy Poznań
          </h3>
          
          <p className="text-gray-600 mb-4">
            Oferujemy kompleksowe usługi wynajmu pojazdów zastępczych:
          </p>

          <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
            <li>Auto zastępcze z OC sprawcy Poznań</li>
            <li>Auto zastępcze po wypadku z OC sprawcy Poznań</li>
            <li>Auto zastępcze z OC sprawcy bezgotówkowo Poznań</li>
            <li>Auto na czas szkody z OC Poznań</li>
            <li>Pojazd zastępczy z OC Poznań</li>
            <li>Samochód na czas likwidacji szkody Poznań</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Wynajem pojazdów z OC sprawcy Poznań
          </h3>
          
          <p className="text-gray-600 mb-4">
            Nasza wypożyczalnia współpracująca z ubezpieczalniami Poznań oferuje:
          </p>

          <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
            <li>Auto zastępcze ze szkody sprawcy Poznań</li>
            <li>Pojazd zastępczy na czas naprawy Poznań</li>
            <li>Samochód zastępczy na czas naprawy Poznań</li>
            <li>Wynajem pojazdów zastępczych z OC sprawcy Poznań</li>
            <li>Wynajem auta z OC sprawcy Poznań</li>
            <li>Wynajem pojazdu z OC sprawcy Poznań</li>
            <li>Wynajem samochodu zastępczego z OC sprawcy Poznań</li>
          </ul>

          <h4 className="text-xl font-bold text-gray-900 mb-4">
            Specjalistyczne pojazdy zastępcze Poznań
          </h4>

          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>Wynajęcie pojazdów OC sprawcy Poznań</li>
            <li>Wynajem auta z OC sprawcy bez limitu kilometrów Poznań</li>
            <li>Auto zastępcze bezgotówkowo Poznań</li>
            <li>Samochód zastępczy z ubezpieczenia Poznań</li>
            <li>Pojazd zastępczy z OC sprawcy dla firm Poznań</li>
            <li>Wynajem busa z OC sprawcy Poznań</li>
            <li>Wynajem pojazdów specjalistycznych z OC sprawcy Poznań</li>
          </ul>

          <p className="text-gray-600 mb-8">
            Oferujemy elastyczny czas wynajmu auta z OC sprawcy Poznań oraz konkurencyjny koszt wynajmu auta z OC sprawcy Poznań.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Pomoc drogowa Poznań - Całodobowa obsługa
          </h2>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Pomoc drogowa 24h Poznań
          </h3>
          
          <p className="text-gray-600 mb-4">
            Nasza pomoc drogowa 24/7 Poznań oferuje:
          </p>

          <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
            <li>Autolaweta Poznań</li>
            <li>Laweta Poznań</li>
            <li>Laweta 24h Poznań</li>
            <li>Usługi lawetą Poznań</li>
            <li>Holowanie samochodu Poznań</li>
            <li>Holowanie Poznań</li>
            <li>Ściąganie samochodu z drogi Poznań</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Holowanie powypadkowe Poznań
          </h3>
          
          <p className="text-gray-600 mb-4">
            Specjalizujemy się w:
          </p>

          <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
            <li>Holowanie auta po wypadku Poznań</li>
            <li>Holowanie po kolizji Poznań</li>
            <li>Holowanie po awarii Poznań</li>
            <li>Holowanie samochodu osobowego Poznań</li>
            <li>Holowanie busów i pojazdów specjalistycznych Poznań</li>
            <li>Holowanie z OC sprawcy Poznań</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Transport pojazdów Poznań
          </h3>
          
          <p className="text-gray-600 mb-4">
            Oferujemy również:
          </p>

          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>Usuwanie aut z miejsca kolizji Poznań</li>
            <li>Usunięcie pojazdu z miejsca wypadku Poznań</li>
            <li>Transport samochodu Poznań</li>
            <li>Transport pojazdu z OC sprawcy Poznań</li>
            <li>Transport aut powypadkowych Poznań</li>
            <li>Przewóz uszkodzonego pojazdu Poznań</li>
            <li>Bezpłatne holowanie Poznań (w ramach ubezpieczenia)</li>
            <li>Transport pojazdu z OC sprawcy Poznań</li>
          </ul>

          <p className="text-gray-600 mb-8">
            Zapewniamy podstawienie lawety Poznań oraz naprawa na miejscu zdarzenia Poznań, a także pomoc drogową na autostradzie Poznań.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Likwidacja szkód komunikacyjnych Poznań
          </h2>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Obsługa szkody z OC Poznań
          </h3>
          
          <p className="text-gray-600 mb-4">
            Nasza likwidacja szkody z OC Poznań obejmuje:
          </p>

          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>Bezpośrednia likwidacja szkód (BLS) Poznań</li>
            <li>Zgłoszenie szkody komunikacyjnej Poznań</li>
            <li>Zgłoszenie szkody ubezpieczeniowej Poznań</li>
            <li>Wycena szkody powypadkowej Poznań</li>
            <li>Kosztorys naprawy z OC sprawcy Poznań</li>
            <li>Ocena uszkodzeń pojazdu Poznań</li>
            <li>Odszkodowanie z OC sprawcy Poznań</li>
          </ul>

          <p className="text-gray-600 mb-8">
            Nasz likwidator szkód Poznań zapewnia profesjonalną obsługę każdej sprawy.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Kompleksowa obsługa powypadkowa Poznań
          </h2>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Pakiet usług powypadkowych Poznań
          </h3>
          
          <p className="text-gray-600 mb-4">
            Oferujemy obsługę od A do Z Poznań, która obejmuje:
          </p>

          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>Pełna obsługa poszkodowanych Poznań</li>
            <li>Centrum pomocy po wypadku Poznań</li>
            <li>Wszystko z jednego miejsca Poznań</li>
          </ul>

          <p className="text-gray-600 mb-8">
            Nasze centrum napraw powypadkowych Poznań to miejsce, gdzie znajdziesz kompleksową pomoc po każdym wypadku drogowym.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nasze usługi w Poznaniu
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kompleksowa obsługa powypadkowa w centrum Wielkopolski
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
              FAQ - Najczęściej zadawane pytania
            </h2>
            <p className="text-xl text-gray-600">
              Odpowiedzi na najważniejsze pytania dotyczące usług w Poznaniu
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

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Kontakt - Centrum likwidacji szkód Poznań
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 mb-2" />
              <h3 className="font-semibold mb-2">Adres</h3>
              <p className="text-blue-100">[Adres w Poznaniu]</p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 mb-2" />
              <h3 className="font-semibold mb-2">Telefon</h3>
              <p className="text-blue-100">+48 506 066 525</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 mb-2" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-blue-100">office24@autoram.eu</p>
            </div>
          </div>

          <p className="text-xl mb-8 text-blue-100">
            Nasze centrum napraw powypadkowych Poznań oferuje kompleksową obsługę powypadkową dla wszystkich mieszkańców miasta. Skorzystaj z naszych usług i przekonaj się, dlaczego jesteśmy numerem jeden w Poznaniu!
          </p>

          <p className="text-2xl font-bold mb-8">
            Centrum pomocy po wypadku Poznań - wszystko z jednego miejsca!
          </p>

          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4" asChild>
            <a href="tel:+48506066525">
              <Phone className="w-5 h-5 mr-2" />
              Zadzwoń teraz: +48 506 066 525
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CentrumLikwidacjiSzkodPoznan;
