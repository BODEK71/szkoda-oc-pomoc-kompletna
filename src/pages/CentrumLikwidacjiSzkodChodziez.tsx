
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Phone, ArrowRight, MapPin, Clock, Car, Shield, Wrench, Palette, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CentrumLikwidacjiSzkodChodziez = () => {
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
      question: "Jak długo trwa naprawa pojazdu w Chodzieży?",
      answer: "Czas naprawy zależy od zakresu uszkodzeń. Standardowe naprawy trwają 3-7 dni roboczych. Przy większych uszkodzeniach może to być 10-14 dni."
    },
    {
      question: "Czy mogę otrzymać pojazd zastępczy w Chodzieży?",
      answer: "Tak, zapewniamy pojazdy zastępcze na czas naprawy. Samochód zastępczy jest dostępny z OC sprawcy wypadku."
    },
    {
      question: "Czy holowanie jest bezpłatne w Chodzieży?",
      answer: "Tak, holowanie jest bezpłatne w ramach OC sprawcy wypadku na terenie Chodzieży i okolic."
    },
    {
      question: "Jak zgłosić szkodę w centrum w Chodzieży?",
      answer: "Szkodę można zgłosić telefonicznie lub osobiście w naszym centrum. Przyjmujemy zgłoszenia 24/7."
    },
    {
      question: "Czy naprawy są bezgotówkowe w Chodzieży?",
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
              📍 CHODZIEŻ
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-blue-600">Centrum Likwidacji Szkód</span>
              <br />
              <span className="text-gray-900">Chodzież</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Profesjonalna obsługa szkód komunikacyjnych w Chodzieży. 
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
              Nasze usługi w Chodzieży
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

      {/* Detailed SEO Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            
            {/* Naprawy powypadkowe */}
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Naprawy powypadkowe Chodzież - Profesjonalne usługi dla mieszkańców
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Nasze centrum napraw powypadkowych Chodzież oferuje kompleksową obsługę powypadkową dla wszystkich mieszkańców miasta i okolic. Specjalizujemy się w naprawach z winy sprawcy Chodzież, oferując pełen zakres usług związanych z likwidacją szkód komunikacyjnych.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Naprawy z OC sprawcy Chodzież - Bezgotówkowa obsługa
              </h3>
              <p className="text-gray-700 mb-6">
                Nasza naprawa bezgotówkowa Chodzież to rozwiązanie dla wszystkich poszkodowanych w wypadkach drogowych. Oferujemy naprawy ubezpieczeniowe Chodzież, które obejmują:
              </p>
              <ul className="grid md:grid-cols-2 gap-4 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Naprawa auta po kolizji z OC sprawcy Chodzież</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Naprawa auta po wypadku z OC sprawcy Chodzież</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Naprawa pojazdu po stłuczce z OC sprawcy Chodzież</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Naprawa powypadkowa bezgotówkowa Chodzież</span>
                </li>
              </ul>
            </div>

            {/* Blacharstwo */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Blacharstwo powypadkowe Chodzież - Specjalistyczne usługi
              </h3>
              <p className="text-gray-700 mb-6">
                Nasz blacharz samochodowy Chodzież oferuje profesjonalne usuwanie uszkodzeń powypadkowych Chodzież. Naprawy karoserii po stłuczce Chodzież wykonujemy przy użyciu najnowocześniejszego sprzętu i technologii.
              </p>
            </div>

            {/* Lakierowanie */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Lakierowanie samochodów Chodzież
              </h3>
              <p className="text-gray-700 mb-6">
                Nasze lakierowanie z OC sprawcy Chodzież obejmuje:
              </p>
              <ul className="grid md:grid-cols-2 gap-4 mb-6">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Lakierowanie elementów karoserii Chodzież</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Lakierowanie zderzaka Chodzież</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Lakierowanie maski Chodzież</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Malowanie auta Chodzież</span>
                </li>
              </ul>
              <p className="text-gray-700">
                Nasz lakiernik samochodowy Chodzież gwarantuje najwyższą jakość wykonanych prac i naprawa blacharsko-lakiernicza z OC sprawcy Chodzież jest wykonywana zgodnie ze standardami producentów.
              </p>
            </div>

            {/* Serwis */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Serwis samochodowy Chodzież - Kompleksowa obsługa
              </h3>
              <p className="text-gray-700 mb-6">
                Nasz serwis mechaniczny powypadkowy Chodzież oferuje:
              </p>
              <ul className="grid md:grid-cols-2 gap-4 mb-6">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Naprawa samochodów osobowych Chodzież</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Mechanika samochodowa Chodzież</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Naprawa silnika po kolizji Chodzież</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Wymiana rozrządu po wypadku Chodzież</span>
                </li>
              </ul>
            </div>

            {/* Pojazdy zastępcze */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Pojazdy zastępcze Chodzież - Mobilność podczas naprawy
              </h3>
              <p className="text-gray-700 mb-6">
                Oferujemy kompleksowe usługi wynajmu pojazdów zastępczych:
              </p>
              <ul className="grid md:grid-cols-2 gap-4 mb-6">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Auto zastępcze z OC sprawcy Chodzież</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Auto zastępcze po wypadku z OC sprawcy Chodzież</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Auto zastępcze z OC sprawcy bezgotówkowo Chodzież</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Pojazd zastępczy z OC Chodzież</span>
                </li>
              </ul>
            </div>

            {/* Pomoc drogowa */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Pomoc drogowa Chodzież - Całodobowa obsługa
              </h3>
              <p className="text-gray-700 mb-6">
                Nasza pomoc drogowa 24/7 Chodzież oferuje:
              </p>
              <ul className="grid md:grid-cols-2 gap-4 mb-6">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Autolaweta Chodzież</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Laweta 24h Chodzież</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Holowanie samochodu Chodzież</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Ściąganie samochodu z drogi Chodzież</span>
                </li>
              </ul>
            </div>

            {/* Likwidacja szkód */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Likwidacja szkód komunikacyjnych Chodzież
              </h3>
              <p className="text-gray-700 mb-6">
                Nasza likwidacja szkody z OC Chodzież obejmuje:
              </p>
              <ul className="grid md:grid-cols-2 gap-4 mb-6">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Bezpośrednia likwidacja szkód (BLS) Chodzież</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Zgłoszenie szkody komunikacyjnej Chodzież</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Wycena szkody powypadkowej Chodzież</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Odszkodowanie z OC sprawcy Chodzież</span>
                </li>
              </ul>
              <p className="text-gray-700">
                Nasze centrum napraw powypadkowych Chodzież to miejsce, gdzie znajdziesz kompleksową pomoc po każdym wypadku drogowym.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Często zadawane pytania - Chodzież
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
            Skontaktuj się z nami w Chodzieży
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Jesteśmy dostępni 24/7 dla mieszkańców Chodzieży i okolic
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
              <p className="text-blue-100">ul. Główna 123<br />64-800 Chodzież</p>
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

export default CentrumLikwidacjiSzkodChodziez;
