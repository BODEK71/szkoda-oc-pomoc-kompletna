import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Phone, Mail, MapPin, Car, Wrench, Palette, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CentrumLikwidacjiSzkodGostyn = () => {
  const services = [
    {
      icon: <Car className="w-6 h-6" />,
      title: "Naprawy powypadkowe",
      description: "Profesjonalne naprawy z OC sprawcy w Gostyniu"
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
      question: "Jak długo trwa naprawa powypadkowa Gostyń?",
      answer: "Czas naprawy powypadkowej Gostyń zależy od zakresu uszkodzeń. Proste naprawy blacharskie Gostyń trwają 3-5 dni roboczych, bardziej skomplikowane naprawy z OC sprawcy Gostyń mogą wymagać 1-2 tygodni. Zawsze informujemy o przewidywanym terminie zakończenia prac."
    },
    {
      question: "Czy mogę otrzymać samochód zastępczy z OC sprawcy Gostyń?",
      answer: "Tak, oferujemy auto zastępcze z OC sprawcy Gostyń na czas naprawy. Pojazd zastępczy z OC sprawcy Gostyń jest dostępny bezgotówkowo, jeśli sprawca wypadku ma wykupione ubezpieczenie OC. Wynajem auta z OC sprawcy Gostyń organizujemy w ciągu 24 godzin."
    },
    {
      question: "Ile kosztuje holowanie po wypadku Gostyń?",
      answer: "Koszty holowania po wypadku Gostyń są zazwyczaj pokrywane przez ubezpieczenie OC sprawcy. Holowanie z OC sprawcy Gostyń obejmuje transport pojazdu z OC sprawcy Gostyń do wybranego serwisu. Oferujemy również bezpłatne holowanie Gostyń w ramach niektórych polis ubezpieczeniowych."
    },
    {
      question: "Jak zgłosić szkodę komunikacyjną Gostyń?",
      answer: "Zgłoszenie szkody komunikacyjnej Gostyń można dokonać telefonicznie lub osobiście w naszym biurze. Pomożemy w zgłoszeniu szkody ubezpieczeniowej Gostyń i przeprowadzimy wycenę szkody powypadkowej Gostyń. Nasz likwidator szkód Gostyń zadba o całą dokumentację."
    },
    {
      question: "Czy naprawa bezgotówkowa Gostyń jest możliwa?",
      answer: "Tak, oferujemy naprawa bezgotówkowa Gostyń w przypadku szkód z OC sprawcy. Naprawa powypadkowa bezgotówkowa Gostyń jest dostępna po ustaleniu winy sprawcy wypadku. Naprawy ubezpieczeniowe Gostyń realizujemy bez konieczności płacenia z własnej kieszeni."
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
                🏢 CENTRUM LIKWIDACJI SZKÓD GOSTYŃ
              </Badge>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                <span className="text-blue-600">Centrum likwidacji szkód</span>
                <br />
                <span className="text-gray-900">Gostyń</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Kompleksowa obsługa powypadkowa dla mieszkańców Gostynia. 
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

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nasze usługi w Gostyniu
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferujemy pełen zakres usług powypadkowych dla mieszkańców Gostynia i okolic
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
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Centrum likwidacji szkód Gostyń - Kompleksowa obsługa powypadkowa</h2>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Naprawy powypadkowe Gostyń - Profesjonalne usługi dla mieszkańców</h3>
            <p className="text-gray-600 mb-6">
              Nasze centrum napraw powypadkowych Gostyń oferuje kompleksową obsługę powypadkową dla wszystkich mieszkańców miasta i okolic. 
              Specjalizujemy się w naprawach z winy sprawcy Gostyń, oferując pełen zakres usług związanych z likwidacją szkód komunikacyjnych.
            </p>

            <h4 className="text-xl font-semibold text-gray-800 mb-3">Naprawy z OC sprawcy Gostyń - Bezgotówkowa obsługa</h4>
            <p className="text-gray-600 mb-4">
              Nasza naprawa bezgotówkowa Gostyń to rozwiązanie dla wszystkich poszkodowanych w wypadkach drogowych. 
              Oferujemy naprawy ubezpieczeniowe Gostyń, które obejmują:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Naprawa auta po kolizji z OC sprawcy Gostyń</li>
              <li>Naprawa auta po wypadku z OC sprawcy Gostyń</li>
              <li>Naprawa pojazdu po stłuczce z OC sprawcy Gostyń</li>
              <li>Naprawa powypadkowa bezgotówkowa Gostyń</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Blacharstwo powypadkowe Gostyń - Specjalistyczne usługi</h3>
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Naprawy blacharskie Gostyń</h4>
            <p className="text-gray-600 mb-6">
              Nasz blacharz samochodowy Gostyń oferuje profesjonalne usuwanie uszkodzeń powypadkowych Gostyń. 
              Naprawy karoserii po stłuczce Gostyń wykonujemy przy użyciu najnowocześniejszego sprzętu i technologii.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Lakierowanie samochodów Gostyń</h3>
            <p className="text-gray-600 mb-4">Nasze lakierowanie z OC sprawcy Gostyń obejmuje:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Lakierowanie elementów karoserii Gostyń</li>
              <li>Lakierowanie zderzaka Gostyń</li>
              <li>Lakierowanie maski Gostyń</li>
              <li>Malowanie auta Gostyń</li>
              <li>Lakierowanie powypadkowe Gostyń</li>
            </ul>
            <p className="text-gray-600 mb-6">
              Nasz lakiernik samochodowy Gostyń gwarantuje najwyższą jakość wykonanych prac i naprawa blacharsko-lakiernicza z OC sprawcy Gostyń 
              jest wykonywana zgodnie ze standardami producentów.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Serwis samochodowy Gostyń - Kompleksowa obsługa</h3>
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Serwis samochodowy po wypadku Gostyń</h4>
            <p className="text-gray-600 mb-4">Nasz serwis mechaniczny powypadkowy Gostyń oferuje:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Naprawa samochodów osobowych Gostyń</li>
              <li>Mechanika samochodowa Gostyń</li>
              <li>Naprawa silnika po kolizji Gostyń</li>
              <li>Wymiana rozrządu po wypadku Gostyń</li>
              <li>Naprawa silnika Gostyń</li>
              <li>Przegląd techniczny auta Gostyń</li>
            </ul>
            <p className="text-gray-600 mb-6">
              Nasz mechanik samochodowy Gostyń posiada wieloletnie doświadczenie w naprawach powypadkowych.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Pojazdy zastępcze Gostyń - Mobilność podczas naprawy</h3>
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Samochód zastępczy z OC sprawcy Gostyń</h4>
            <p className="text-gray-600 mb-4">Oferujemy kompleksowe usługi wynajmu pojazdów zastępczych:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Auto zastępcze z OC sprawcy Gostyń</li>
              <li>Auto zastępcze po wypadku z OC sprawcy Gostyń</li>
              <li>Auto zastępcze z OC sprawcy bezgotówkowo Gostyń</li>
              <li>Auto na czas szkody z OC Gostyń</li>
              <li>Pojazd zastępczy z OC Gostyń</li>
              <li>Samochód na czas likwidacji szkody Gostyń</li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-800 mb-3">Wynajem pojazdów z OC sprawcy Gostyń</h4>
            <p className="text-gray-600 mb-4">Nasza wypożyczalnia współpracująca z ubezpieczalniami Gostyń oferuje:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Auto zastępcze ze szkody sprawcy Gostyń</li>
              <li>Pojazd zastępczy na czas naprawy Gostyń</li>
              <li>Samochód zastępczy na czas naprawy Gostyń</li>
              <li>Wynajem pojazdów zastępczych z OC sprawcy Gostyń</li>
              <li>Wynajem auta z OC sprawcy Gostyń</li>
              <li>Wynajem pojazdu z OC sprawcy Gostyń</li>
              <li>Wynajem samochodu zastępczego z OC sprawcy Gostyń</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Pomoc drogowa Gostyń - Całodobowa obsługa</h3>
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Pomoc drogowa 24h Gostyń</h4>
            <p className="text-gray-600 mb-4">Nasza pomoc drogowa 24/7 Gostyń oferuje:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Autolaweta Gostyń</li>
              <li>Laweta Gostyń</li>
              <li>Laweta 24h Gostyń</li>
              <li>Usługi lawetą Gostyń</li>
              <li>Holowanie samochodu Gostyń</li>
              <li>Holowanie Gostyń</li>
              <li>Ściąganie samochodu z drogi Gostyń</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Likwidacja szkód komunikacyjnych Gostyń</h3>
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Obsługa szkody z OC Gostyń</h4>
            <p className="text-gray-600 mb-4">Nasza likwidacja szkody z OC Gostyń obejmuje:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Bezpośrednia likwidacja szkód (BLS) Gostyń</li>
              <li>Zgłoszenie szkody komunikacyjnej Gostyń</li>
              <li>Zgłoszenie szkody ubezpieczeniowej Gostyń</li>
              <li>Wycena szkody powypadkowej Gostyń</li>
              <li>Kosztorys naprawy z OC sprawcy Gostyń</li>
              <li>Ocena uszkodzeń pojazdu Gostyń</li>
              <li>Odszkodowanie z OC sprawcy Gostyń</li>
            </ul>
            <p className="text-gray-600 mb-6">
              Nasze centrum napraw powypadkowych Gostyń to miejsce, gdzie znajdziesz kompleksową pomoc po każdym wypadku drogowym.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Najczęściej zadawane pytania
            </h2>
            <p className="text-xl text-gray-600">
              Odpowiedzi na pytania dotyczące usług w Gostyniu
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
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Skontaktuj się z nami
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Jesteśmy dostępni 24/7 dla mieszkańców Gostynia
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
              <p>Gostyń i okolice</p>
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

export default CentrumLikwidacjiSzkodGostyn;