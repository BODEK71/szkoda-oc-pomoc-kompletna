import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Phone, Mail, MapPin, Car, Wrench, Palette, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CentrumLikwidacjiSzkodCzarnkow = () => {
  const services = [
    {
      icon: <Car className="w-6 h-6" />,
      title: "Naprawy powypadkowe",
      description: "Profesjonalne naprawy z OC sprawcy w Czarnkowie"
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
      question: "Jak długo trwa naprawa powypadkowa Czarnków?",
      answer: "Czas naprawy powypadkowej Czarnków zależy od zakresu uszkodzeń. Proste naprawy blacharskie Czarnków trwają 3-5 dni roboczych, bardziej skomplikowane naprawy z OC sprawcy Czarnków mogą wymagać 1-2 tygodni. Zawsze informujemy o przewidywanym terminie zakończenia prac."
    },
    {
      question: "Czy mogę otrzymać samochód zastępczy z OC sprawcy Czarnków?",
      answer: "Tak, oferujemy auto zastępcze z OC sprawcy Czarnków na czas naprawy. Pojazd zastępczy z OC sprawcy Czarnków jest dostępny bezgotówkowo, jeśli sprawca wypadku ma wykupione ubezpieczenie OC. Wynajem auta z OC sprawcy Czarnków organizujemy w ciągu 24 godzin."
    },
    {
      question: "Ile kosztuje holowanie po wypadku Czarnków?",
      answer: "Koszty holowania po wypadku Czarnków są zazwyczaj pokrywane przez ubezpieczenie OC sprawcy. Holowanie z OC sprawcy Czarnków obejmuje transport pojazdu z OC sprawcy Czarnków do wybranego serwisu. Oferujemy również bezpłatne holowanie Czarnków w ramach niektórych polis ubezpieczeniowych."
    },
    {
      question: "Jak zgłosić szkodę komunikacyjną Czarnków?",
      answer: "Zgłoszenie szkody komunikacyjnej Czarnków można dokonać telefonicznie lub osobiście w naszym biurze. Pomożemy w zgłoszeniu szkody ubezpieczeniowej Czarnków i przeprowadzimy wycenę szkody powypadkowej Czarnków. Nasz likwidator szkód Czarnków zadba o całą dokumentację."
    },
    {
      question: "Czy naprawa bezgotówkowa Czarnków jest możliwa?",
      answer: "Tak, oferujemy naprawa bezgotówkowa Czarnków w przypadku szkód z OC sprawcy. Naprawa powypadkowa bezgotówkowa Czarnków jest dostępna po ustaleniu winy sprawcy wypadku. Naprawy ubezpieczeniowe Czarnków realizujemy bez konieczności płacenia z własnej kieszeni."
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
                🏢 CENTRUM LIKWIDACJI SZKÓD CZARNKÓW
              </Badge>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                <span className="text-blue-600">Centrum likwidacji szkód</span>
                <br />
                <span className="text-gray-900">Czarnków</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Kompleksowa obsługa powypadkowa dla mieszkańców Czarnkowa. 
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
              Nasze usługi w Czarnkowie
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferujemy pełen zakres usług powypadkowych dla mieszkańców Czarnkowa i okolic
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Centrum likwidacji szkód Czarnków - Kompleksowa obsługa powypadkowa</h2>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Naprawy powypadkowe Czarnków - Profesjonalne usługi dla mieszkańców</h3>
            <p className="text-gray-600 mb-6">
              Nasze centrum napraw powypadkowych Czarnków oferuje kompleksową obsługę powypadkową dla wszystkich mieszkańców miasta i okolic. 
              Specjalizujemy się w naprawach z winy sprawcy Czarnków, oferując pełen zakres usług związanych z likwidacją szkód komunikacyjnych.
            </p>

            <h4 className="text-xl font-semibold text-gray-800 mb-3">Naprawy z OC sprawcy Czarnków - Bezgotówkowa obsługa</h4>
            <p className="text-gray-600 mb-4">
              Nasza naprawa bezgotówkowa Czarnków to rozwiązanie dla wszystkich poszkodowanych w wypadkach drogowych. 
              Oferujemy naprawy ubezpieczeniowe Czarnków, które obejmują:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Naprawa auta po kolizji z OC sprawcy Czarnków</li>
              <li>Naprawa auta po wypadku z OC sprawcy Czarnków</li>
              <li>Naprawa pojazdu po stłuczce z OC sprawcy Czarnków</li>
              <li>Naprawa powypadkowa bezgotówkowa Czarnków</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Blacharstwo powypadkowe Czarnków - Specjalistyczne usługi</h3>
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Naprawy blacharskie Czarnków</h4>
            <p className="text-gray-600 mb-6">
              Nasz blacharz samochodowy Czarnków oferuje profesjonalne usuwanie uszkodzeń powypadkowych Czarnków. 
              Naprawy karoserii po stłuczce Czarnków wykonujemy przy użyciu najnowocześniejszego sprzętu i technologii.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Lakierowanie samochodów Czarnków</h3>
            <p className="text-gray-600 mb-4">Nasze lakierowanie z OC sprawcy Czarnków obejmuje:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Lakierowanie elementów karoserii Czarnków</li>
              <li>Lakierowanie zderzaka Czarnków</li>
              <li>Lakierowanie maski Czarnków</li>
              <li>Malowanie auta Czarnków</li>
              <li>Lakierowanie powypadkowe Czarnków</li>
            </ul>
            <p className="text-gray-600 mb-6">
              Nasz lakiernik samochodowy Czarnków gwarantuje najwyższą jakość wykonanych prac i naprawa blacharsko-lakiernicza z OC sprawcy Czarnków 
              jest wykonywana zgodnie ze standardami producentów.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Serwis samochodowy Czarnków - Kompleksowa obsługa</h3>
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Serwis samochodowy po wypadku Czarnków</h4>
            <p className="text-gray-600 mb-4">Nasz serwis mechaniczny powypadkowy Czarnków oferuje:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Naprawa samochodów osobowych Czarnków</li>
              <li>Mechanika samochodowa Czarnków</li>
              <li>Naprawa silnika po kolizji Czarnków</li>
              <li>Wymiana rozrządu po wypadku Czarnków</li>
              <li>Naprawa silnika Czarnków</li>
              <li>Przegląd techniczny auta Czarnków</li>
            </ul>
            <p className="text-gray-600 mb-6">
              Nasz mechanik samochodowy Czarnków posiada wieloletnie doświadczenie w naprawach powypadkowych.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Pojazdy zastępcze Czarnków - Mobilność podczas naprawy</h3>
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Samochód zastępczy z OC sprawcy Czarnków</h4>
            <p className="text-gray-600 mb-4">Oferujemy kompleksowe usługi wynajmu pojazdów zastępczych:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Auto zastępcze z OC sprawcy Czarnków</li>
              <li>Auto zastępcze po wypadku z OC sprawcy Czarnków</li>
              <li>Auto zastępcze z OC sprawcy bezgotówkowo Czarnków</li>
              <li>Auto na czas szkody z OC Czarnków</li>
              <li>Pojazd zastępczy z OC Czarnków</li>
              <li>Samochód na czas likwidacji szkody Czarnków</li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-800 mb-3">Wynajem pojazdów z OC sprawcy Czarnków</h4>
            <p className="text-gray-600 mb-4">Nasza wypożyczalnia współpracująca z ubezpieczalniami Czarnków oferuje:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Auto zastępcze ze szkody sprawcy Czarnków</li>
              <li>Pojazd zastępczy na czas naprawy Czarnków</li>
              <li>Samochód zastępczy na czas naprawy Czarnków</li>
              <li>Wynajem pojazdów zastępczych z OC sprawcy Czarnków</li>
              <li>Wynajem auta z OC sprawcy Czarnków</li>
              <li>Wynajem pojazdu z OC sprawcy Czarnków</li>
              <li>Wynajem samochodu zastępczego z OC sprawcy Czarnków</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Pomoc drogowa Czarnków - Całodobowa obsługa</h3>
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Pomoc drogowa 24h Czarnków</h4>
            <p className="text-gray-600 mb-4">Nasza pomoc drogowa 24/7 Czarnków oferuje:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Autolaweta Czarnków</li>
              <li>Laweta Czarnków</li>
              <li>Laweta 24h Czarnków</li>
              <li>Usługi lawetą Czarnków</li>
              <li>Holowanie samochodu Czarnków</li>
              <li>Holowanie Czarnków</li>
              <li>Ściąganie samochodu z drogi Czarnków</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Likwidacja szkód komunikacyjnych Czarnków</h3>
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Obsługa szkody z OC Czarnków</h4>
            <p className="text-gray-600 mb-4">Nasza likwidacja szkody z OC Czarnków obejmuje:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Bezpośrednia likwidacja szkód (BLS) Czarnków</li>
              <li>Zgłoszenie szkody komunikacyjnej Czarnków</li>
              <li>Zgłoszenie szkody ubezpieczeniowej Czarnków</li>
              <li>Wycena szkody powypadkowej Czarnków</li>
              <li>Kosztorys naprawy z OC sprawcy Czarnków</li>
              <li>Ocena uszkodzeń pojazdu Czarnków</li>
              <li>Odszkodowanie z OC sprawcy Czarnków</li>
            </ul>
            <p className="text-gray-600 mb-6">
              Nasze centrum napraw powypadkowych Czarnków to miejsce, gdzie znajdziesz kompleksową pomoc po każdym wypadku drogowym.
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
              Odpowiedzi na pytania dotyczące usług w Czarnkowie
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
            Jesteśmy dostępni 24/7 dla mieszkańców Czarnkowa
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
              <p>Czarnków i okolice</p>
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

export default CentrumLikwidacjiSzkodCzarnkow;