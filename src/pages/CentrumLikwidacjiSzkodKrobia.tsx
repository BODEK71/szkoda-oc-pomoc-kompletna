import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Phone, ArrowRight, MapPin, Clock, Car, Shield, Wrench, Palette, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CentrumLikwidacjiSzkodKrobia = () => {
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
      question: "Jak długo trwa naprawa pojazdu w Krobi?",
      answer: "Czas naprawy zależy od zakresu uszkodzeń. Standardowe naprawy trwają 3-7 dni roboczych. Przy większych uszkodzeniach może to być 10-14 dni."
    },
    {
      question: "Czy mogę otrzymać pojazd zastępczy w Krobi?",
      answer: "Tak, zapewniamy pojazdy zastępcze na czas naprawy. Samochód zastępczy jest dostępny z OC sprawcy wypadku."
    },
    {
      question: "Czy holowanie jest bezpłatne w Krobi?",
      answer: "Tak, holowanie jest bezpłatne w ramach OC sprawcy wypadku na terenie Krobi i okolic."
    },
    {
      question: "Jak zgłosić szkodę w centrum w Krobi?",
      answer: "Szkodę można zgłosić telefonicznie lub osobiście w naszym centrum. Przyjmujemy zgłoszenia 24/7."
    },
    {
      question: "Czy naprawy są bezgotówkowe w Krobi?",
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
              📍 KROBIA
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-blue-600">Centrum Likwidacji Szkód</span>
              <br />
              <span className="text-gray-900">Krobia</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Profesjonalna obsługa szkód komunikacyjnych w Krobi. 
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
              Nasze usługi w Krobi
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
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Centrum likwidacji szkód Krobia - Kompleksowa obsługa powypadkowa</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Naprawy powypadkowe Krobia - Profesjonalne usługi dla mieszkańców</h3>
            <p>Nasze centrum napraw powypadkowych Krobia oferuje kompleksową obsługę powypadkową dla wszystkich mieszkańców miasta i okolic. Specjalizujemy się w naprawach z winy sprawcy Krobia, oferując pełen zakres usług związanych z likwidacją szkód komunikacyjnych.</p>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Naprawy z OC sprawcy Krobia - Bezgotówkowa obsługa</h3>
            <p>Nasza naprawa bezgotówkowa Krobia to rozwiązanie dla wszystkich poszkodowanych w wypadkach drogowych. Oferujemy naprawy ubezpieczeniowe Krobia, które obejmują:</p>
            <ul>
              <li>Naprawa auta po kolizji z OC sprawcy Krobia</li>
              <li>Naprawa auta po wypadku z OC sprawcy Krobia</li>
              <li>Naprawa pojazdu po stłuczce z OC sprawcy Krobia</li>
              <li>Naprawa powypadkowa bezgotówkowa Krobia</li>
            </ul>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Blacharstwo powypadkowe Krobia - Specjalistyczne usługi</h3>
            <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Naprawy blacharskie Krobia</h4>
            <p>Nasz blacharz samochodowy Krobia oferuje profesjonalne usuwanie uszkodzeń powypadkowych Krobia. Naprawy karoserii po stłuczce Krobia wykonujemy przy użyciu najnowocześniejszego sprzętu i technologii.</p>
            
            <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Lakierowanie samochodów Krobia</h4>
            <p>Nasze lakierowanie z OC sprawcy Krobia obejmuje:</p>
            <ul>
              <li>Lakierowanie elementów karoserii Krobia</li>
              <li>Lakierowanie zderzaka Krobia</li>
              <li>Lakierowanie maski Krobia</li>
              <li>Malowanie auta Krobia</li>
              <li>Lakierowanie powypadkowe Krobia</li>
            </ul>
            <p>Nasz lakiernik samochodowy Krobia gwarantuje najwyższą jakość wykonanych prac i naprawa blacharsko-lakiernicza z OC sprawcy Krobia jest wykonywana zgodnie ze standardami producentów.</p>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Serwis samochodowy Krobia - Kompleksowa obsługa</h3>
            <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Serwis samochodowy po wypadku Krobia</h4>
            <p>Nasz serwis mechaniczny powypadkowy Krobia oferuje:</p>
            <ul>
              <li>Naprawa samochodów osobowych Krobia</li>
              <li>Mechanika samochodowa Krobia</li>
              <li>Naprawa silnika po kolizji Krobia</li>
              <li>Wymiana rozrządu po wypadku Krobia</li>
              <li>Naprawa silnika Krobia</li>
              <li>Przegląd techniczny auta Krobia</li>
            </ul>
            <p>Nasz mechanik samochodowy Krobia posiada wieloletnie doświadczenie w naprawach powypadkowych.</p>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Pojazdy zastępcze Krobia - Mobilność podczas naprawy</h3>
            <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Samochód zastępczy z OC sprawcy Krobia</h4>
            <p>Oferujemy kompleksowe usługi wynajmu pojazdów zastępczych:</p>
            <ul>
              <li>Auto zastępcze z OC sprawcy Krobia</li>
              <li>Auto zastępcze po wypadku z OC sprawcy Krobia</li>
              <li>Auto zastępcze z OC sprawcy bezgotówkowo Krobia</li>
              <li>Auto na czas szkody z OC Krobia</li>
              <li>Pojazd zastępczy z OC Krobia</li>
              <li>Samochód na czas likwidacji szkody Krobia</li>
            </ul>
            
            <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Wynajem pojazdów z OC sprawcy Krobia</h4>
            <p>Nasza wypożyczalnia współpracująca z ubezpieczalniami Krobia oferuje:</p>
            <ul>
              <li>Auto zastępcze ze szkody sprawcy Krobia</li>
              <li>Pojazd zastępczy na czas naprawy Krobia</li>
              <li>Samochód zastępczy na czas naprawy Krobia</li>
              <li>Wynajem pojazdów zastępczych z OC sprawcy Krobia</li>
              <li>Wynajem auta z OC sprawcy Krobia</li>
              <li>Wynajem pojazdu z OC sprawcy Krobia</li>
              <li>Wynajem samochodu zastępczego z OC sprawcy Krobia</li>
            </ul>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Pomoc drogowa Krobia - Całodobowa obsługa</h3>
            <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Pomoc drogowa 24h Krobia</h4>
            <p>Nasza pomoc drogowa 24/7 Krobia oferuje:</p>
            <ul>
              <li>Autolaweta Krobia</li>
              <li>Laweta Krobia</li>
              <li>Laweta 24h Krobia</li>
              <li>Usługi lawetą Krobia</li>
              <li>Holowanie samochodu Krobia</li>
              <li>Holowanie Krobia</li>
              <li>Ściąganie samochodu z drogi Krobia</li>
            </ul>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Likwidacja szkód komunikacyjnych Krobia</h3>
            <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Obsługa szkody z OC Krobia</h4>
            <p>Nasza likwidacja szkody z OC Krobia obejmuje:</p>
            <ul>
              <li>Bezpośrednia likwidacja szkód (BLS) Krobia</li>
              <li>Zgłoszenie szkody komunikacyjnej Krobia</li>
              <li>Zgłoszenie szkody ubezpieczeniowej Krobia</li>
              <li>Wycena szkody powypadkowej Krobia</li>
              <li>Kosztorys naprawy z OC sprawcy Krobia</li>
              <li>Ocena uszkodzeń pojazdu Krobia</li>
              <li>Odszkodowanie z OC sprawcy Krobia</li>
            </ul>
            <p>Nasze centrum napraw powypadkowych Krobia to miejsce, gdzie znajdziesz kompleksową pomoc po każdym wypadku drogowym.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Często zadawane pytania - Krobia
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
            Skontaktuj się z nami w Krobi
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Jesteśmy dostępni 24/7 dla mieszkańców Krobi i okolic
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
              <p className="text-blue-100">ul. Główna 123<br />63-635 Krobia</p>
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

export default CentrumLikwidacjiSzkodKrobia;