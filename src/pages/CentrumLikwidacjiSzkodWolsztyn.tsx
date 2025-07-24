import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Phone, ArrowRight, MapPin, Clock, Car, Shield, Wrench, Palette, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CentrumLikwidacjiSzkodWolsztyn = () => {
  const services = [
    {
      icon: <Car className="w-6 h-6" />,
      title: "Naprawy powypadkowe",
      description: "Kompleksowe naprawy pojazdów uszkodzonych w wypadkach"
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Blacharstwo i mechanika", 
      description: "Profesjonalne usługi blacharskie i mechaniczne"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Lakierowanie",
      description: "Wysokiej jakości lakierowanie pojazdów"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Pojazdy zastępcze",
      description: "Auto zastępcze na czas naprawy"
    }
  ];

  const faqItems = [
    {
      question: "Jak długo trwa naprawa pojazdu w Wolsztynie?",
      answer: "Czas naprawy zależy od zakresu uszkodzeń. Standardowe naprawy trwają 3-7 dni roboczych. Przy większych uszkodzeniach może to być 10-14 dni."
    },
    {
      question: "Czy mogę otrzymać pojazd zastępczy w Wolsztynie?",
      answer: "Tak, zapewniamy pojazdy zastępcze na czas naprawy. Samochód zastępczy jest dostępny z OC sprawcy wypadku."
    },
    {
      question: "Czy holowanie jest bezpłatne w Wolsztynie?",
      answer: "Tak, holowanie jest bezpłatne w ramach OC sprawcy wypadku na terenie Wolsztyna i okolic."
    },
    {
      question: "Jak zgłosić szkodę w centrum w Wolsztynie?",
      answer: "Szkodę można zgłosić telefonicznie lub osobiście w naszym centrum. Przyjmujemy zgłoszenia 24/7."
    },
    {
      question: "Czy naprawy są bezgotówkowe w Wolsztynie?",
      answer: "Tak, wszystkie naprawy realizujemy bezgotówkowo z ubezpieczeniem sprawcy wypadku."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-100 text-blue-800">
              📍 WOLSZTYN
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-blue-600">Centrum Likwidacji Szkód</span>
              <br />
              <span className="text-gray-900">Wolsztyn</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Profesjonalna obsługa szkód komunikacyjnych w Wolsztynie. 
              Kompleksowe naprawy powypadkowe, blacharstwo, lakierowanie i pojazdy zastępcze.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
                <Phone className="w-5 h-5 mr-2" />
                Zadzwoń: 123-456-789
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-blue-200 text-blue-600 hover:bg-blue-50">
                <MapPin className="w-5 h-5 mr-2" />
                Odwiedź centrum
              </Button>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                "Naprawy 24/7",
                "Auto zastępcze", 
                "Bezgotówkowe",
                "Holowanie gratis"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center justify-center space-x-2 p-4 bg-white rounded-lg shadow-sm border">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nasze usługi w Wolsztynie
            </h2>
            <p className="text-xl text-gray-600">
              Kompleksowa obsługa pojazdów po wypadkach
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

      {/* SEO Content Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold text-primary mb-8">Centrum likwidacji szkód Wolsztyn - Kompleksowa obsługa powypadkowa</h2>
            
            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Naprawy powypadkowe Wolsztyn - Profesjonalne usługi dla mieszkańców</h3>
            <p>Nasze centrum napraw powypadkowych Wolsztyn oferuje kompleksową obsługę powypadkową dla wszystkich mieszkańców miasta i okolic. Specjalizujemy się w naprawach z winy sprawcy Wolsztyn, oferując pełen zakres usług związanych z likwidacją szkód komunikacyjnych.</p>
            
            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Naprawy z OC sprawcy Wolsztyn - Bezgotówkowa obsługa</h3>
            <p>Nasza naprawa bezgotówkowa Wolsztyn to rozwiązanie dla wszystkich poszkodowanych w wypadkach drogowych. Oferujemy naprawy ubezpieczeniowe Wolsztyn, które obejmują:</p>
            <ul>
              <li>Naprawa auta po kolizji z OC sprawcy Wolsztyn</li>
              <li>Naprawa auta po wypadku z OC sprawcy Wolsztyn</li>
              <li>Naprawa pojazdu po stłuczce z OC sprawcy Wolsztyn</li>
              <li>Naprawa powypadkowa bezgotówkowa Wolsztyn</li>
            </ul>
            
            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Blacharstwo powypadkowe Wolsztyn - Specjalistyczne usługi</h3>
            <h4 className="text-xl font-medium text-primary mt-6 mb-3">Naprawy blacharskie Wolsztyn</h4>
            <p>Nasz blacharz samochodowy Wolsztyn oferuje profesjonalne usuwanie uszkodzeń powypadkowych Wolsztyn. Naprawy karoserii po stłuczce Wolsztyn wykonujemy przy użyciu najnowocześniejszego sprzętu i technologii.</p>
            
            <h4 className="text-xl font-medium text-primary mt-6 mb-3">Lakierowanie samochodów Wolsztyn</h4>
            <p>Nasze lakierowanie z OC sprawcy Wolsztyn obejmuje:</p>
            <ul>
              <li>Lakierowanie elementów karoserii Wolsztyn</li>
              <li>Lakierowanie zderzaka Wolsztyn</li>
              <li>Lakierowanie maski Wolsztyn</li>
              <li>Malowanie auta Wolsztyn</li>
              <li>Lakierowanie powypadkowe Wolsztyn</li>
            </ul>
            <p>Nasz lakiernik samochodowy Wolsztyn gwarantuje najwyższą jakość wykonanych prac i naprawa blacharsko-lakiernicza z OC sprawcy Wolsztyn jest wykonywana zgodnie ze standardami producentów.</p>
            
            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Serwis samochodowy Wolsztyn - Kompleksowa obsługa</h3>
            <h4 className="text-xl font-medium text-primary mt-6 mb-3">Serwis samochodowy po wypadku Wolsztyn</h4>
            <p>Nasz serwis mechaniczny powypadkowy Wolsztyn oferuje:</p>
            <ul>
              <li>Naprawa samochodów osobowych Wolsztyn</li>
              <li>Mechanika samochodowa Wolsztyn</li>
              <li>Naprawa silnika po kolizji Wolsztyn</li>
              <li>Wymiana rozrządu po wypadku Wolsztyn</li>
              <li>Naprawa silnika Wolsztyn</li>
              <li>Przegląd techniczny auta Wolsztyn</li>
            </ul>
            <p>Nasz mechanik samochodowy Wolsztyn posiada wieloletnie doświadczenie w naprawach powypadkowych.</p>
            
            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Pojazdy zastępcze Wolsztyn - Mobilność podczas naprawy</h3>
            <h4 className="text-xl font-medium text-primary mt-6 mb-3">Samochód zastępczy z OC sprawcy Wolsztyn</h4>
            <p>Oferujemy kompleksowe usługi wynajmu pojazdów zastępczych:</p>
            <ul>
              <li>Auto zastępcze z OC sprawcy Wolsztyn</li>
              <li>Auto zastępcze po wypadku z OC sprawcy Wolsztyn</li>
              <li>Auto zastępcze z OC sprawcy bezgotówkowo Wolsztyn</li>
              <li>Auto na czas szkody z OC Wolsztyn</li>
              <li>Pojazd zastępczy z OC Wolsztyn</li>
              <li>Samochód na czas likwidacji szkody Wolsztyn</li>
            </ul>
            
            <h4 className="text-xl font-medium text-primary mt-6 mb-3">Wynajem pojazdów z OC sprawcy Wolsztyn</h4>
            <p>Nasza wypożyczalnia współpracująca z ubezpieczalniami Wolsztyn oferuje:</p>
            <ul>
              <li>Auto zastępcze ze szkody sprawcy Wolsztyn</li>
              <li>Pojazd zastępczy na czas naprawy Wolsztyn</li>
              <li>Samochód zastępczy na czas naprawy Wolsztyn</li>
              <li>Wynajem pojazdów zastępczych z OC sprawcy Wolsztyn</li>
              <li>Wynajem auta z OC sprawcy Wolsztyn</li>
              <li>Wynajem pojazdu z OC sprawcy Wolsztyn</li>
              <li>Wynajem samochodu zastępczego z OC sprawcy Wolsztyn</li>
            </ul>
            
            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Pomoc drogowa Wolsztyn - Całodobowa obsługa</h3>
            <h4 className="text-xl font-medium text-primary mt-6 mb-3">Pomoc drogowa 24h Wolsztyn</h4>
            <p>Nasza pomoc drogowa 24/7 Wolsztyn oferuje:</p>
            <ul>
              <li>Autolaweta Wolsztyn</li>
              <li>Laweta Wolsztyn</li>
              <li>Laweta 24h Wolsztyn</li>
              <li>Usługi lawetą Wolsztyn</li>
              <li>Holowanie samochodu Wolsztyn</li>
              <li>Holowanie Wolsztyn</li>
              <li>Ściąganie samochodu z drogi Wolsztyn</li>
            </ul>
            
            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Likwidacja szkód komunikacyjnych Wolsztyn</h3>
            <h4 className="text-xl font-medium text-primary mt-6 mb-3">Obsługa szkody z OC Wolsztyn</h4>
            <p>Nasza likwidacja szkody z OC Wolsztyn obejmuje:</p>
            <ul>
              <li>Bezpośrednia likwidacja szkód (BLS) Wolsztyn</li>
              <li>Zgłoszenie szkody komunikacyjnej Wolsztyn</li>
              <li>Zgłoszenie szkody ubezpieczeniowej Wolsztyn</li>
              <li>Wycena szkody powypadkowej Wolsztyn</li>
              <li>Kosztorys naprawy z OC sprawcy Wolsztyn</li>
              <li>Ocena uszkodzeń pojazdu Wolsztyn</li>
              <li>Odszkodowanie z OC sprawcy Wolsztyn</li>
            </ul>
            <p>Nasze centrum napraw powypadkowych Wolsztyn to miejsce, gdzie znajdziesz kompleksową pomoc po każdym wypadku drogowym.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Często zadawane pytania - Wolsztyn
            </h2>
            <p className="text-xl text-gray-600">
              Odpowiedzi na najważniejsze pytania dotyczące naszych usług
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-2">
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
            Skontaktuj się z nami w Wolsztynie
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Jesteśmy dostępni 24/7 dla mieszkańców Wolsztyna i okolic
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Phone className="w-8 h-8 mx-auto mb-4 text-blue-200" />
              <h3 className="font-bold text-lg mb-2">Telefon</h3>
              <p className="text-blue-100">123-456-789</p>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 mx-auto mb-4 text-blue-200" />
              <h3 className="font-bold text-lg mb-2">Adres</h3>
              <p className="text-blue-100">ul. Główna 123<br />64-200 Wolsztyn</p>
            </div>
            <div className="text-center">
              <Clock className="w-8 h-8 mx-auto mb-4 text-blue-200" />
              <h3 className="font-bold text-lg mb-2">Godziny</h3>
              <p className="text-blue-100">24/7</p>
            </div>
          </div>

          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
            <Phone className="w-5 h-5 mr-2" />
            Zadzwoń teraz: 123-456-789
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CentrumLikwidacjiSzkodWolsztyn;