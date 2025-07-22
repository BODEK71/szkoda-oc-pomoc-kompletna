import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Phone, Mail, MapPin, Car, Wrench, Palette, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CentrumLikwidacjiSzkodGrodziskWielkopolski = () => {
  const services = [
    {
      icon: <Car className="w-6 h-6" />,
      title: "Naprawy powypadkowe",
      description: "Profesjonalne naprawy z OC sprawcy w Grodzisku Wielkopolskim"
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
      question: "Jak długo trwa naprawa powypadkowa Grodzisk Wielkopolski?",
      answer: "Czas naprawy powypadkowej Grodzisk Wielkopolski zależy od zakresu uszkodzeń. Proste naprawy blacharskie Grodzisk Wielkopolski trwają 3-5 dni roboczych, bardziej skomplikowane naprawy z OC sprawcy Grodzisk Wielkopolski mogą wymagać 1-2 tygodni."
    },
    {
      question: "Czy mogę otrzymać samochód zastępczy z OC sprawcy Grodzisk Wielkopolski?",
      answer: "Tak, oferujemy auto zastępcze z OC sprawcy Grodzisk Wielkopolski na czas naprawy. Pojazd zastępczy z OC sprawcy Grodzisk Wielkopolski jest dostępny bezgotówkowo, jeśli sprawca wypadku ma wykupione ubezpieczenie OC."
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
                🏢 CENTRUM LIKWIDACJI SZKÓD GRODZISK WIELKOPOLSKI
              </Badge>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                <span className="text-blue-600">Centrum likwidacji szkód</span>
                <br />
                <span className="text-gray-900">Grodzisk Wielkopolski</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Nasze centrum napraw powypadkowych Grodzisk Wielkopolski oferuje kompleksową obsługę powypadkową dla wszystkich mieszkańców miasta i okolic. 
                Specjalizujemy się w naprawach z winy sprawcy Grodzisk Wielkopolski, oferując pełen zakres usług związanych z likwidacją szkód komunikacyjnych.
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
              Naprawy z OC sprawcy Grodzisk Wielkopolski - Bezgotówkowa obsługa
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nasza naprawa bezgotówkowa Grodzisk Wielkopolski to rozwiązanie dla wszystkich poszkodowanych w wypadkach drogowych. 
              Oferujemy naprawy ubezpieczeniowe Grodzisk Wielkopolski.
            </p>
            <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-left max-w-4xl mx-auto">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-semibold text-blue-800">• Naprawa auta po kolizji z OC sprawcy Grodzisk Wielkopolski</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-semibold text-blue-800">• Naprawa auta po wypadku z OC sprawcy Grodzisk Wielkopolski</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-semibold text-blue-800">• Naprawa pojazdu po stłuczce z OC sprawcy Grodzisk Wielkopolski</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-semibold text-blue-800">• Naprawa powypadkowa bezgotówkowa Grodzisk Wielkopolski</p>
              </div>
            </div>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Blacharstwo powypadkowe Grodzisk Wielkopolski - Specjalistyczne usługi
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Nasz blacharz samochodowy Grodzisk Wielkopolski oferuje profesjonalne usuwanie uszkodzeń powypadkowych Grodzisk Wielkopolski. 
              Naprawy karoserii po stłuczce Grodzisk Wielkopolski wykonujemy przy użyciu najnowocześniejszego sprzętu i technologii.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Lakierowanie samochodów Grodzisk Wielkopolski</h3>
              <p className="text-gray-600 mb-4">Nasze lakierowanie z OC sprawcy Grodzisk Wielkopolski obejmuje:</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Lakierowanie elementów karoserii Grodzisk Wielkopolski</li>
                <li>• Lakierowanie zderzaka Grodzisk Wielkopolski</li>
                <li>• Lakierowanie maski Grodzisk Wielkopolski</li>
                <li>• Malowanie auta Grodzisk Wielkopolski</li>
                <li>• Lakierowanie powypadkowe Grodzisk Wielkopolski</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Serwis samochodowy Grodzisk Wielkopolski</h3>
              <p className="text-gray-600 mb-4">Nasz serwis mechaniczny powypadkowy Grodzisk Wielkopolski oferuje:</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Naprawa samochodów osobowych Grodzisk Wielkopolski</li>
                <li>• Mechanika samochodowa Grodzisk Wielkopolski</li>
                <li>• Naprawa silnika po kolizji Grodzisk Wielkopolski</li>
                <li>• Wymiana rozrządu po wypadku Grodzisk Wielkopolski</li>
                <li>• Naprawa silnika Grodzisk Wielkopolski</li>
                <li>• Przegląd techniczny auta Grodzisk Wielkopolski</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Pojazdy zastępcze Grodzisk Wielkopolski</h3>
              <p className="text-gray-600 mb-4">Oferujemy kompleksowe usługi wynajmu pojazdów zastępczych:</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Auto zastępcze z OC sprawcy Grodzisk Wielkopolski</li>
                <li>• Auto zastępcze po wypadku z OC sprawcy Grodzisk Wielkopolski</li>
                <li>• Auto zastępcze z OC sprawcy bezgotówkowo Grodzisk Wielkopolski</li>
                <li>• Pojazd zastępczy na czas naprawy Grodzisk Wielkopolski</li>
                <li>• Wynajem pojazdów zastępczych z OC sprawcy Grodzisk Wielkopolski</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Pomoc drogowa Grodzisk Wielkopolski</h3>
              <p className="text-gray-600 mb-4">Nasza pomoc drogowa 24/7 Grodzisk Wielkopolski oferuje:</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Autolaweta Grodzisk Wielkopolski</li>
                <li>• Laweta 24h Grodzisk Wielkopolski</li>
                <li>• Holowanie samochodu Grodzisk Wielkopolski</li>
                <li>• Ściąganie samochodu z drogi Grodzisk Wielkopolski</li>
                <li>• Usługi lawetą Grodzisk Wielkopolski</li>
              </ul>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Najczęściej zadawane pytania
            </h2>
            <p className="text-xl text-gray-600">
              Odpowiedzi na pytania dotyczące usług w Grodzisku Wielkopolskim
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
            Jesteśmy dostępni 24/7 dla mieszkańców Grodziska Wielkopolskiego
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
              <p>Grodzisk Wielkopolski i okolice</p>
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

export default CentrumLikwidacjiSzkodGrodziskWielkopolski;