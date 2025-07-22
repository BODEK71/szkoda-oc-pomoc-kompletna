
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Phone, Mail, MapPin, Car, Wrench, Palette, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CentrumLikwidacjiSzkodJastrowie = () => {
  const services = [
    {
      icon: <Car className="w-6 h-6" />,
      title: "Naprawy powypadkowe",
      description: "Profesjonalne naprawy z OC sprawcy w Jastrowiu"
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
      question: "Jak długo trwa naprawa powypadkowa Jastrowie?",
      answer: "Czas naprawy powypadkowej Jastrowie zależy od zakresu uszkodzeń. Proste naprawy blacharskie Jastrowie trwają 3-5 dni roboczych, bardziej skomplikowane naprawy z OC sprawcy Jastrowie mogą wymagać 1-2 tygodni. Zawsze informujemy o przewidywanym terminie zakończenia prac."
    },
    {
      question: "Czy mogę otrzymać samochód zastępczy z OC sprawcy Jastrowie?",
      answer: "Tak, oferujemy auto zastępcze z OC sprawcy Jastrowie na czas naprawy. Pojazd zastępczy z OC sprawcy Jastrowie jest dostępny bezgotówkowo, jeśli sprawca wypadku ma wykupione ubezpieczenie OC. Wynajem auta z OC sprawcy Jastrowie organizujemy w ciągu 24 godzin."
    },
    {
      question: "Ile kosztuje holowanie po wypadku Jastrowie?",
      answer: "Koszty holowania po wypadku Jastrowie są zazwyczaj pokrywane przez ubezpieczenie OC sprawcy. Holowanie z OC sprawcy Jastrowie obejmuje transport pojazdu z OC sprawcy Jastrowie do wybranego serwisu. Oferujemy również bezpłatne holowanie Jastrowie w ramach niektórych polis ubezpieczeniowych."
    },
    {
      question: "Jak zgłosić szkodę komunikacyjną Jastrowie?",
      answer: "Zgłoszenie szkody komunikacyjnej Jastrowie można dokonać telefonicznie lub osobiście w naszym biurze. Pomożemy w zgłoszeniu szkody ubezpieczeniowej Jastrowie i przeprowadzimy wycenę szkody powypadkowej Jastrowie. Nasz likwidator szkód Jastrowie zadba o całą dokumentację."
    },
    {
      question: "Czy naprawa bezgotówkowa Jastrowie jest możliwa?",
      answer: "Tak, oferujemy naprawa bezgotówkowa Jastrowie w przypadku szkód z OC sprawcy. Naprawa powypadkowa bezgotówkowa Jastrowie jest dostępna po ustaleniu winy sprawcy wypadku. Naprawy ubezpieczeniowe Jastrowie realizujemy bez konieczności płacenia z własnej kieszeni."
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
                🏢 CENTRUM LIKWIDACJI SZKÓD JASTROWIE
              </Badge>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                <span className="text-blue-600">Centrum likwidacji szkód</span>
                <br />
                <span className="text-gray-900">Jastrowie</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Kompleksowa obsługa powypadkowa dla mieszkańców Jastrowia. 
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
              Nasze usługi w Jastrowiu
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferujemy pełen zakres usług powypadkowych dla mieszkańców Jastrowia i okolic
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

      {/* Detailed Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-center">
              Kompleksowa obsługa powypadkowa Jastrowie
            </h2>
            
            <div className="space-y-12 mt-8">
              {/* Naprawy powypadkowe */}
              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-4">Naprawy powypadkowe Jastrowie</h3>
                <p className="text-gray-600 mb-4">
                  Nasze centrum napraw powypadkowych Jastrowie oferuje kompleksową obsługę powypadkową dla wszystkich mieszkańców miasta i okolic. Specjalizujemy się w naprawach z winy sprawcy Jastrowie, oferując pełen zakres usług związanych z likwidacją szkód komunikacyjnych.
                </p>
                <p className="text-gray-600 mb-4">
                  Nasza naprawa bezgotówkowa Jastrowie to rozwiązanie dla wszystkich poszkodowanych w wypadkach drogowych. Oferujemy naprawy ubezpieczeniowe Jastrowie, które obejmują naprawę auta po kolizji z OC sprawcy Jastrowie, naprawę auta po wypadku z OC sprawcy Jastrowie, naprawę pojazdu po stłuczce z OC sprawcy Jastrowie oraz naprawę powypadkową bezgotówkową Jastrowie.
                </p>
              </div>
              
              {/* Blacharstwo powypadkowe */}
              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-4">Blacharstwo powypadkowe Jastrowie</h3>
                <p className="text-gray-600 mb-4">
                  Nasz blacharz samochodowy Jastrowie oferuje profesjonalne usuwanie uszkodzeń powypadkowych Jastrowie. Naprawy karoserii po stłuczce Jastrowie wykonujemy przy użyciu najnowocześniejszego sprzętu i technologii.
                </p>
                <p className="text-gray-600 mb-4">
                  Nasze lakierowanie z OC sprawcy Jastrowie obejmuje lakierowanie elementów karoserii Jastrowie, lakierowanie zderzaka Jastrowie, lakierowanie maski Jastrowie, malowanie auta Jastrowie oraz lakierowanie powypadkowe Jastrowie. Nasz lakiernik samochodowy Jastrowie gwarantuje najwyższą jakość wykonanych prac.
                </p>
              </div>
              
              {/* Serwis samochodowy */}
              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-4">Serwis samochodowy Jastrowie</h3>
                <p className="text-gray-600 mb-4">
                  Nasz serwis mechaniczny powypadkowy Jastrowie oferuje naprawę samochodów osobowych Jastrowie, mechanikę samochodową Jastrowie, naprawę silnika po kolizji Jastrowie, wymianę rozrządu po wypadku Jastrowie, naprawę silnika Jastrowie oraz przegląd techniczny auta Jastrowie.
                </p>
                <p className="text-gray-600 mb-4">
                  Nasz mechanik samochodowy Jastrowie posiada wieloletnie doświadczenie w naprawach powypadkowych.
                </p>
              </div>
              
              {/* Pojazdy zastępcze */}
              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-4">Pojazdy zastępcze Jastrowie</h3>
                <p className="text-gray-600 mb-4">
                  Oferujemy kompleksowe usługi wynajmu pojazdów zastępczych: auto zastępcze z OC sprawcy Jastrowie, auto zastępcze po wypadku z OC sprawcy Jastrowie, auto zastępcze z OC sprawcy bezgotówkowo Jastrowie, auto na czas szkody z OC Jastrowie, pojazd zastępczy z OC Jastrowie i samochód na czas likwidacji szkody Jastrowie.
                </p>
                <p className="text-gray-600 mb-4">
                  Nasza wypożyczalnia współpracująca z ubezpieczalniami Jastrowie oferuje: auto zastępcze ze szkody sprawcy Jastrowie, pojazd zastępczy na czas naprawy Jastrowie, wynajem pojazdów zastępczych z OC sprawcy Jastrowie i wynajem auta z OC sprawcy Jastrowie.
                </p>
              </div>
              
              {/* Pomoc drogowa */}
              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-4">Pomoc drogowa Jastrowie</h3>
                <p className="text-gray-600 mb-4">
                  Nasza pomoc drogowa 24/7 Jastrowie oferuje: autolaweta Jastrowie, laweta Jastrowie, laweta 24h Jastrowie, usługi lawetą Jastrowie, holowanie samochodu Jastrowie, holowanie Jastrowie i ściąganie samochodu z drogi Jastrowie.
                </p>
              </div>
              
              {/* Likwidacja szkód */}
              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-4">Likwidacja szkód komunikacyjnych Jastrowie</h3>
                <p className="text-gray-600 mb-4">
                  Nasza likwidacja szkody z OC Jastrowie obejmuje: bezpośrednia likwidacja szkód (BLS) Jastrowie, zgłoszenie szkody komunikacyjnej Jastrowie, zgłoszenie szkody ubezpieczeniowej Jastrowie, wycena szkody powypadkowej Jastrowie, kosztorys naprawy z OC sprawcy Jastrowie, ocena uszkodzeń pojazdu Jastrowie i odszkodowanie z OC sprawcy Jastrowie.
                </p>
                <p className="text-gray-600 mb-4">
                  Nasze centrum napraw powypadkowych Jastrowie to miejsce, gdzie znajdziesz kompleksową pomoc po każdym wypadku drogowym.
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
              Odpowiedzi na pytania dotyczące usług w Jastrowiu
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
            Jesteśmy dostępni 24/7 dla mieszkańców Jastrowia
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
              <p>Jastrowie i okolice</p>
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

export default CentrumLikwidacjiSzkodJastrowie;
