
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Phone, Mail, MapPin, Car, Wrench, Palette, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CentrumLikwidacjiSzkodGniezno = () => {
  const services = [
    {
      icon: <Car className="w-6 h-6" />,
      title: "Naprawy powypadkowe",
      description: "Profesjonalne naprawy z OC sprawcy w Gnieźnie"
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
      question: "Jak długo trwa naprawa powypadkowa Gniezno?",
      answer: "Czas naprawy powypadkowej Gniezno zależy od zakresu uszkodzeń. Proste naprawy blacharskie Gniezno trwają 3-5 dni roboczych, bardziej skomplikowane naprawy z OC sprawcy Gniezno mogą wymagać 1-2 tygodni. Zawsze informujemy o przewidywanym terminie zakończenia prac."
    },
    {
      question: "Czy mogę otrzymać samochód zastępczy z OC sprawcy Gniezno?",
      answer: "Tak, oferujemy auto zastępcze z OC sprawcy Gniezno na czas naprawy. Pojazd zastępczy z OC sprawcy Gniezno jest dostępny bezgotówkowo, jeśli sprawca wypadku ma wykupione ubezpieczenie OC. Wynajem auta z OC sprawcy Gniezno organizujemy w ciągu 24 godzin."
    },
    {
      question: "Ile kosztuje holowanie po wypadku Gniezno?",
      answer: "Koszty holowania po wypadku Gniezno są zazwyczaj pokrywane przez ubezpieczenie OC sprawcy. Holowanie z OC sprawcy Gniezno obejmuje transport pojazdu z OC sprawcy Gniezno do wybranego serwisu. Oferujemy również bezpłatne holowanie Gniezno w ramach niektórych polis ubezpieczeniowych."
    },
    {
      question: "Jak zgłosić szkodę komunikacyjną Gniezno?",
      answer: "Zgłoszenie szkody komunikacyjnej Gniezno można dokonać telefonicznie lub osobiście w naszym biurze. Pomożemy w zgłoszeniu szkody ubezpieczeniowej Gniezno i przeprowadzimy wycenę szkody powypadkowej Gniezno. Nasz likwidator szkód Gniezno zadba o całą dokumentację."
    },
    {
      question: "Czy naprawa bezgotówkowa Gniezno jest możliwa?",
      answer: "Tak, oferujemy naprawa bezgotówkowa Gniezno w przypadku szkód z OC sprawcy. Naprawa powypadkowa bezgotówkowa Gniezno jest dostępna po ustaleniu winy sprawcy wypadku. Naprawy ubezpieczeniowe Gniezno realizujemy bez konieczności płacenia z własnej kieszeni."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-50 via-white to-red-50 py-20 pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge className="bg-red-100 text-red-800">
                🏢 CENTRUM LIKWIDACJI SZKÓD GNIEZNO
              </Badge>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                <span className="text-red-600">Centrum likwidacji szkód</span>
                <br />
                <span className="text-gray-900">Gniezno</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Kompleksowa obsługa powypadkowa dla mieszkańców Gniezna. 
                Profesjonalne usługi napraw, likwidacji szkód i pomocy drogowej.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-lg px-8 py-4" asChild>
                <a href="tel:+48506066525">
                  <Phone className="w-5 h-5 mr-2" />
                  Zadzwoń: +48 506 066 525
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-red-200 text-red-600 hover:bg-red-50">
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
              Nasze usługi w Gnieźnie
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferujemy pełen zakres usług powypadkowych dla mieszkańców Gniezna i okolic
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 text-red-600">
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
              Kompleksowa obsługa powypadkowa Gniezno
            </h2>
            
            <div className="space-y-12 mt-8">
              {/* Naprawy powypadkowe */}
              <div>
                <h3 className="text-2xl font-bold text-red-600 mb-4">Naprawy powypadkowe Gniezno</h3>
                <p className="text-gray-600 mb-4">
                  Nasze centrum napraw powypadkowych Gniezno oferuje kompleksową obsługę powypadkową dla wszystkich mieszkańców miasta i okolic. Specjalizujemy się w naprawach z winy sprawcy Gniezno, oferując pełen zakres usług związanych z likwidacją szkód komunikacyjnych.
                </p>
                <p className="text-gray-600 mb-4">
                  Nasza naprawa bezgotówkowa Gniezno to rozwiązanie dla wszystkich poszkodowanych w wypadkach drogowych. Oferujemy naprawy ubezpieczeniowe Gniezno, które obejmują naprawę auta po kolizji z OC sprawcy Gniezno, naprawę auta po wypadku z OC sprawcy Gniezno, naprawę pojazdu po stłuczce z OC sprawcy Gniezno oraz naprawę powypadkową bezgotówkową Gniezno.
                </p>
              </div>
              
              {/* Blacharstwo powypadkowe */}
              <div>
                <h3 className="text-2xl font-bold text-red-600 mb-4">Blacharstwo powypadkowe Gniezno</h3>
                <p className="text-gray-600 mb-4">
                  Nasz blacharz samochodowy Gniezno oferuje profesjonalne usuwanie uszkodzeń powypadkowych Gniezno. Naprawy karoserii po stłuczce Gniezno wykonujemy przy użyciu najnowocześniejszego sprzętu i technologii.
                </p>
                <p className="text-gray-600 mb-4">
                  Nasze lakierowanie z OC sprawcy Gniezno obejmuje lakierowanie elementów karoserii Gniezno, lakierowanie zderzaka Gniezno, lakierowanie maski Gniezno, malowanie auta Gniezno oraz lakierowanie powypadkowe Gniezno. Nasz lakiernik samochodowy Gniezno gwarantuje najwyższą jakość wykonanych prac.
                </p>
              </div>
              
              {/* Serwis samochodowy */}
              <div>
                <h3 className="text-2xl font-bold text-red-600 mb-4">Serwis samochodowy Gniezno</h3>
                <p className="text-gray-600 mb-4">
                  Nasz serwis mechaniczny powypadkowy Gniezno oferuje naprawę samochodów osobowych Gniezno, mechanikę samochodową Gniezno, naprawę silnika po kolizji Gniezno, wymianę rozrządu po wypadku Gniezno, naprawę silnika Gniezno oraz przegląd techniczny auta Gniezno.
                </p>
                <p className="text-gray-600 mb-4">
                  Nasz mechanik samochodowy Gniezno posiada wieloletnie doświadczenie w naprawach powypadkowych.
                </p>
              </div>
              
              {/* Pojazdy zastępcze */}
              <div>
                <h3 className="text-2xl font-bold text-red-600 mb-4">Pojazdy zastępcze Gniezno</h3>
                <p className="text-gray-600 mb-4">
                  Oferujemy kompleksowe usługi wynajmu pojazdów zastępczych: auto zastępcze z OC sprawcy Gniezno, auto zastępcze po wypadku z OC sprawcy Gniezno, auto zastępcze z OC sprawcy bezgotówkowo Gniezno, auto na czas szkody z OC Gniezno, pojazd zastępczy z OC Gniezno i samochód na czas likwidacji szkody Gniezno.
                </p>
                <p className="text-gray-600 mb-4">
                  Nasza wypożyczalnia współpracująca z ubezpieczalniami Gniezno oferuje: auto zastępcze ze szkody sprawcy Gniezno, pojazd zastępczy na czas naprawy Gniezno, wynajem pojazdów zastępczych z OC sprawcy Gniezno i wynajem auta z OC sprawcy Gniezno.
                </p>
              </div>
              
              {/* Pomoc drogowa */}
              <div>
                <h3 className="text-2xl font-bold text-red-600 mb-4">Pomoc drogowa Gniezno</h3>
                <p className="text-gray-600 mb-4">
                  Nasza pomoc drogowa 24/7 Gniezno oferuje: autolaweta Gniezno, laweta Gniezno, laweta 24h Gniezno, usługi lawetą Gniezno, holowanie samochodu Gniezno, holowanie Gniezno i ściąganie samochodu z drogi Gniezno.
                </p>
              </div>
              
              {/* Likwidacja szkód */}
              <div>
                <h3 className="text-2xl font-bold text-red-600 mb-4">Likwidacja szkód komunikacyjnych Gniezno</h3>
                <p className="text-gray-600 mb-4">
                  Nasza likwidacja szkody z OC Gniezno obejmuje: bezpośrednia likwidacja szkód (BLS) Gniezno, zgłoszenie szkody komunikacyjnej Gniezno, zgłoszenie szkody ubezpieczeniowej Gniezno, wycena szkody powypadkowej Gniezno, kosztorys naprawy z OC sprawcy Gniezno, ocena uszkodzeń pojazdu Gniezno i odszkodowanie z OC sprawcy Gniezno.
                </p>
                <p className="text-gray-600 mb-4">
                  Nasze centrum napraw powypadkowych Gniezno to miejsce, gdzie znajdziesz kompleksową pomoc po każdym wypadku drogowym.
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
              Odpowiedzi na pytania dotyczące usług w Gnieźnie
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
      <section className="py-20 bg-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Skontaktuj się z nami
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Jesteśmy dostępni 24/7 dla mieszkańców Gniezna
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
              <p>Gniezno i okolice</p>
            </div>
          </div>

          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100" asChild>
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

export default CentrumLikwidacjiSzkodGniezno;
