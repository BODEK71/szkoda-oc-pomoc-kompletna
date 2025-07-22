
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Phone, Mail, MapPin, Car, Wrench, Palette, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CentrumLikwidacjiSzkodOborniki = () => {
  const services = [
    {
      icon: <Car className="w-6 h-6" />,
      title: "Naprawy powypadkowe",
      description: "Profesjonalne naprawy z OC sprawcy w Obornikach"
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
      question: "Jak długo trwa naprawa powypadkowa Oborniki?",
      answer: "Czas naprawy powypadkowej Oborniki zależy od zakresu uszkodzeń. Proste naprawy blacharskie Oborniki trwają 3-5 dni roboczych, bardziej skomplikowane naprawy z OC sprawcy Oborniki mogą wymagać 1-2 tygodni. Zawsze informujemy o przewidywanym terminie zakończenia prac."
    },
    {
      question: "Czy mogę otrzymać samochód zastępczy z OC sprawcy Oborniki?",
      answer: "Tak, oferujemy auto zastępcze z OC sprawcy Oborniki na czas naprawy. Pojazd zastępczy z OC sprawcy Oborniki jest dostępny bezgotówkowo, jeśli sprawca wypadku ma wykupione ubezpieczenie OC. Wynajem auta z OC sprawcy Oborniki organizujemy w ciągu 24 godzin."
    },
    {
      question: "Ile kosztuje holowanie po wypadku Oborniki?",
      answer: "Koszty holowania po wypadku Oborniki są zazwyczaj pokrywane przez ubezpieczenie OC sprawcy. Holowanie z OC sprawcy Oborniki obejmuje transport pojazdu z OC sprawcy Oborniki do wybranego serwisu. Oferujemy również bezpłatne holowanie Oborniki w ramach niektórych polis ubezpieczeniowych."
    },
    {
      question: "Jak zgłosić szkodę komunikacyjną Oborniki?",
      answer: "Zgłoszenie szkody komunikacyjnej Oborniki można dokonać telefonicznie lub osobiście w naszym biurze. Pomożemy w zgłoszeniu szkody ubezpieczeniowej Oborniki i przeprowadzimy wycenę szkody powypadkowej Oborniki. Nasz likwidator szkód Oborniki zadba o całą dokumentację."
    },
    {
      question: "Czy naprawa bezgotówkowa Oborniki jest możliwa?",
      answer: "Tak, oferujemy naprawa bezgotówkowa Oborniki w przypadku szkód z OC sprawcy. Naprawa powypadkowa bezgotówkowa Oborniki jest dostępna po ustaleniu winy sprawcy wypadku. Naprawy ubezpieczeniowe Oborniki realizujemy bez konieczności płacenia z własnej kieszeni."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-green-50 py-20 pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge className="bg-green-100 text-green-800">
                🏢 CENTRUM LIKWIDACJI SZKÓD OBORNIKI
              </Badge>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                <span className="text-green-600">Centrum likwidacji szkód</span>
                <br />
                <span className="text-gray-900">Oborniki</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Kompleksowa obsługa powypadkowa dla mieszkańców Obornik. 
                Profesjonalne usługi napraw, likwidacji szkód i pomocy drogowej.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4" asChild>
                <a href="tel:+48506066525">
                  <Phone className="w-5 h-5 mr-2" />
                  Zadzwoń: +48 506 066 525
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-green-200 text-green-600 hover:bg-green-50">
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
              Nasze usługi w Obornikach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferujemy pełen zakres usług powypadkowych dla mieszkańców Obornik i okolic
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
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

      {/* Detailed Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-center">
              Kompleksowa obsługa powypadkowa Oborniki
            </h2>
            
            <div className="space-y-12 mt-8">
              {/* Naprawy powypadkowe */}
              <div>
                <h3 className="text-2xl font-bold text-green-600 mb-4">Naprawy powypadkowe Oborniki</h3>
                <p className="text-gray-600 mb-4">
                  Nasze centrum napraw powypadkowych Oborniki oferuje kompleksową obsługę powypadkową dla wszystkich mieszkańców miasta i okolic. Specjalizujemy się w naprawach z winy sprawcy Oborniki, oferując pełen zakres usług związanych z likwidacją szkód komunikacyjnych.
                </p>
                <p className="text-gray-600 mb-4">
                  Nasza naprawa bezgotówkowa Oborniki to rozwiązanie dla wszystkich poszkodowanych w wypadkach drogowych. Oferujemy naprawy ubezpieczeniowe Oborniki, które obejmują naprawę auta po kolizji z OC sprawcy Oborniki, naprawę auta po wypadku z OC sprawcy Oborniki, naprawę pojazdu po stłuczce z OC sprawcy Oborniki oraz naprawę powypadkową bezgotówkową Oborniki.
                </p>
              </div>
              
              {/* Blacharstwo powypadkowe */}
              <div>
                <h3 className="text-2xl font-bold text-green-600 mb-4">Blacharstwo powypadkowe Oborniki</h3>
                <p className="text-gray-600 mb-4">
                  Nasz blacharz samochodowy Oborniki oferuje profesjonalne usuwanie uszkodzeń powypadkowych Oborniki. Naprawy karoserii po stłuczce Oborniki wykonujemy przy użyciu najnowocześniejszego sprzętu i technologii.
                </p>
                <p className="text-gray-600 mb-4">
                  Nasze lakierowanie z OC sprawcy Oborniki obejmuje lakierowanie elementów karoserii Oborniki, lakierowanie zderzaka Oborniki, lakierowanie maski Oborniki, malowanie auta Oborniki oraz lakierowanie powypadkowe Oborniki. Nasz lakiernik samochodowy Oborniki gwarantuje najwyższą jakość wykonanych prac.
                </p>
              </div>
              
              {/* Pojazdy zastępcze */}
              <div>
                <h3 className="text-2xl font-bold text-green-600 mb-4">Pojazdy zastępcze Oborniki</h3>
                <p className="text-gray-600 mb-4">
                  Oferujemy kompleksowe usługi wynajmu pojazdów zastępczych: auto zastępcze z OC sprawcy Oborniki, auto zastępcze po wypadku z OC sprawcy Oborniki, auto zastępcze z OC sprawcy bezgotówkowo Oborniki, auto na czas szkody z OC Oborniki, pojazd zastępczy z OC Oborniki i samochód na czas likwidacji szkody Oborniki.
                </p>
                <p className="text-gray-600 mb-4">
                  Nasza wypożyczalnia współpracująca z ubezpieczalniami Oborniki oferuje: auto zastępcze ze szkody sprawcy Oborniki, pojazd zastępczy na czas naprawy Oborniki, wynajem pojazdów zastępczych z OC sprawcy Oborniki i wynajem auta z OC sprawcy Oborniki.
                </p>
              </div>
              
              {/* Pomoc drogowa */}
              <div>
                <h3 className="text-2xl font-bold text-green-600 mb-4">Pomoc drogowa Oborniki</h3>
                <p className="text-gray-600 mb-4">
                  Nasza pomoc drogowa 24/7 Oborniki oferuje: autolaweta Oborniki, laweta Oborniki, laweta 24h Oborniki, usługi lawetą Oborniki, holowanie samochodu Oborniki, holowanie Oborniki i ściąganie samochodu z drogi Oborniki.
                </p>
              </div>
              
              {/* Likwidacja szkód */}
              <div>
                <h3 className="text-2xl font-bold text-green-600 mb-4">Likwidacja szkód komunikacyjnych Oborniki</h3>
                <p className="text-gray-600 mb-4">
                  Nasza likwidacja szkody z OC Oborniki obejmuje: bezpośrednia likwidacja szkód (BLS) Oborniki, zgłoszenie szkody komunikacyjnej Oborniki, zgłoszenie szkody ubezpieczeniowej Oborniki, wycena szkody powypadkowej Oborniki, kosztorys naprawy z OC sprawcy Oborniki, ocena uszkodzeń pojazdu Oborniki i odszkodowanie z OC sprawcy Oborniki.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Najczęściej zadawane pytania
            </h2>
            <p className="text-xl text-gray-600">
              Odpowiedzi na pytania dotyczące usług w Obornikach
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
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Skontaktuj się z nami
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Jesteśmy dostępni 24/7 dla mieszkańców Obornik
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
              <p>Oborniki i okolice</p>
            </div>
          </div>

          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100" asChild>
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

export default CentrumLikwidacjiSzkodOborniki;
