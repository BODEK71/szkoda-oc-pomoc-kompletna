
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Phone, Mail, MapPin, Car, Wrench, Palette, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CentrumLikwidacjiSzkodGlogow = () => {
  const services = [
    {
      icon: <Car className="w-6 h-6" />,
      title: "Naprawy powypadkowe",
      description: "Profesjonalne naprawy z OC sprawcy w Głogowie"
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
      question: "Jak długo trwa naprawa powypadkowa Głogów?",
      answer: "Czas naprawy powypadkowej Głogów zależy od zakresu uszkodzeń. Proste naprawy blacharskie Głogów trwają 3-5 dni roboczych, bardziej skomplikowane naprawy z OC sprawcy Głogów mogą wymagać 1-2 tygodni. Zawsze informujemy o przewidywanym terminie zakończenia prac."
    },
    {
      question: "Czy mogę otrzymać samochód zastępczy z OC sprawcy Głogów?",
      answer: "Tak, oferujemy auto zastępcze z OC sprawcy Głogów na czas naprawy. Pojazd zastępczy z OC sprawcy Głogów jest dostępny bezgotówkowo, jeśli sprawca wypadku ma wykupione ubezpieczenie OC. Wynajem auta z OC sprawcy Głogów organizujemy w ciągu 24 godzin."
    },
    {
      question: "Ile kosztuje holowanie po wypadku Głogów?",
      answer: "Koszty holowania po wypadku Głogów są zazwyczaj pokrywane przez ubezpieczenie OC sprawcy. Holowanie z OC sprawcy Głogów obejmuje transport pojazdu z OC sprawcy Głogów do wybranego serwisu. Oferujemy również bezpłatne holowanie Głogów w ramach niektórych polis ubezpieczeniowych."
    },
    {
      question: "Jak zgłosić szkodę komunikacyjną Głogów?",
      answer: "Zgłoszenie szkody komunikacyjnej Głogów można dokonać telefonicznie lub osobiście w naszym biurze. Pomożemy w zgłoszeniu szkody ubezpieczeniowej Głogów i przeprowadzimy wycenę szkody powypadkowej Głogów. Nasz likwidator szkód Głogów zadba o całą dokumentację."
    },
    {
      question: "Czy naprawa bezgotówkowa Głogów jest możliwa?",
      answer: "Tak, oferujemy naprawa bezgotówkowa Głogów w przypadku szkód z OC sprawcy. Naprawa powypadkowa bezgotówkowa Głogów jest dostępna po ustaleniu winy sprawcy wypadku. Naprawy ubezpieczeniowe Głogów realizujemy bez konieczności płacenia z własnej kieszeni."
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
                🏢 CENTRUM LIKWIDACJI SZKÓD GŁOGÓW
              </Badge>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                <span className="text-blue-600">Centrum likwidacji szkód</span>
                <br />
                <span className="text-gray-900">Głogów</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Kompleksowa obsługa powypadkowa dla mieszkańców Głogowa. 
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
              Nasze usługi w Głogowie
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferujemy pełen zakres usług powypadkowych dla mieszkańców Głogowa i okolic
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

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Najczęściej zadawane pytania
            </h2>
            <p className="text-xl text-gray-600">
              Odpowiedzi na pytania dotyczące usług w Głogowie
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
            Jesteśmy dostępni 24/7 dla mieszkańców Głogowa
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
              <p>Głogów i okolice</p>
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

export default CentrumLikwidacjiSzkodGlogow;
