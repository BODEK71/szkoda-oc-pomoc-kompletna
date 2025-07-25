import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Phone, ArrowRight, MapPin, Clock, Car, Shield, Wrench, Palette, Users, Zap, DollarSign, FileText, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CentrumLikwidacjiSzkodWronki = () => {
  const services = [
    {
      icon: <Car className="w-6 h-6" />,
      title: "Naprawy powypadkowe Wronki",
      description: "Kompleksowa obsługa powypadkowa dla mieszkańców Wronek"
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Blacharstwo powypadkowe Wronki", 
      description: "Profesjonalne usługi blacharskie i mechaniczne po wypadkach"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Lakierowanie Wronki",
      description: "Lakierowanie z OC sprawcy - najwyższa jakość wykonanych prac"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Pojazdy zastępcze Wronki",
      description: "Auto zastępcze z OC sprawcy na czas naprawy"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Pomoc drogowa Wronki",
      description: "Całodobowa pomoc drogowa i holowanie 24h"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Likwidacja szkód Wronki",
      description: "Bezpośrednia likwidacja szkód (BLS) i obsługa z OC"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Naprawy bezgotówkowe Wronki",
      description: "Naprawy ubezpieczeniowe i bezgotówkowe z OC sprawcy"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Wycena szkód Wronki",
      description: "Kosztorys naprawy i ocena uszkodzeń pojazdu"
    }
  ];

  const faqItems = [
    {
      question: "Jak długo trwa naprawa pojazdu we Wronkach?",
      answer: "Czas naprawy zależy od zakresu uszkodzeń. Standardowe naprawy trwają 3-7 dni roboczych. Przy większych uszkodzeniach może to być 10-14 dni."
    },
    {
      question: "Czy mogę otrzymać pojazd zastępczy we Wronkach?",
      answer: "Tak, zapewniamy pojazdy zastępcze na czas naprawy. Samochód zastępczy jest dostępny z OC sprawcy wypadku."
    },
    {
      question: "Czy holowanie jest bezpłatne we Wronkach?",
      answer: "Tak, holowanie jest bezpłatne w ramach OC sprawcy wypadku na terenie Wronek i okolic."
    },
    {
      question: "Jak zgłosić szkodę w centrum we Wronkach?",
      answer: "Szkodę można zgłosić telefonicznie lub osobiście w naszym centrum. Przyjmujemy zgłoszenia 24/7."
    },
    {
      question: "Czy naprawy są bezgotówkowe we Wronkach?",
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
              📍 WRONKI
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-blue-600">Centrum likwidacji szkód Wronki</span>
              <br />
              <span className="text-gray-900">Kompleksowa obsługa powypadkowa</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Nasze centrum napraw powypadkowych Wronki oferuje kompleksową obsługę powypadkową dla wszystkich mieszkańców miasta i okolic. Specjalizujemy się w naprawach z winy sprawcy Wronki, oferując pełen zakres usług związanych z likwidacją szkód komunikacyjnych.
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
              Nasze usługi we Wronkach
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

          {/* Detailed Services Content */}
          <div className="mt-20 space-y-16">
            {/* Naprawy z OC sprawcy */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Naprawy z OC sprawcy Wronki - Bezgotówkowa obsługa</h2>
              <p className="text-lg text-gray-600 mb-6">
                Nasza naprawa bezgotówkowa Wronki to rozwiązanie dla wszystkich poszkodowanych w wypadkach drogowych. Oferujemy naprawy ubezpieczeniowe Wronki, które obejmują:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Naprawa auta po kolizji z OC sprawcy Wronki</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Naprawa auta po wypadku z OC sprawcy Wronki</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Naprawa pojazdu po stłuczce z OC sprawcy Wronki</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Naprawa powypadkowa bezgotówkowa Wronki</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Blacharstwo powypadkowe */}
            <div className="bg-blue-50 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Blacharstwo powypadkowe Wronki - Specjalistyczne usługi</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Naprawy blacharskie Wronki</h3>
                  <p className="text-gray-600 mb-4">
                    Nasz blacharz samochodowy Wronki oferuje profesjonalne usuwanie uszkodzeń powypadkowych Wronki. Naprawy karoserii po stłuczce Wronki wykonujemy przy użyciu najnowocześniejszego sprzętu i technologii.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Lakierowanie samochodów Wronki</h3>
                  <p className="text-gray-600 mb-4">
                    Nasze lakierowanie z OC sprawcy Wronki obejmuje lakierowanie elementów karoserii, zderzaka, maski oraz malowanie auta Wronki. Nasz lakiernik samochodowy Wronki gwarantuje najwyższą jakość.
                  </p>
                </div>
              </div>
            </div>

            {/* Serwis samochodowy */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Serwis samochodowy Wronki - Kompleksowa obsługa</h2>
              <p className="text-lg text-gray-600 mb-6">
                Nasz serwis mechaniczny powypadkowy Wronki oferuje pełen zakres usług mechanicznych:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Naprawa samochodów osobowych Wronki</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Mechanika samochodowa Wronki</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Naprawa silnika po kolizji Wronki</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Wymiana rozrządu po wypadku Wronki</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Naprawa silnika Wronki</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Przegląd techniczny auta Wronki</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pojazdy zastępcze */}
            <div className="bg-green-50 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Pojazdy zastępcze Wronki - Mobilność podczas naprawy</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Samochód zastępczy z OC sprawcy Wronki</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Auto zastępcze z OC sprawcy Wronki</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Auto zastępcze po wypadku z OC sprawcy Wronki</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Auto zastępcze z OC sprawcy bezgotówkowo Wronki</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Wynajem pojazdów z OC sprawcy Wronki</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Wynajem pojazdów zastępczych z OC sprawcy Wronki</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Wynajem samochodu zastępczego z OC sprawcy Wronki</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Samochód na czas likwidacji szkody Wronki</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pomoc drogowa */}
            <div className="bg-orange-50 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Pomoc drogowa Wronki - Całodobowa obsługa</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Pomoc drogowa 24h Wronki</h3>
                  <p className="text-gray-600 mb-4">
                    Nasza pomoc drogowa 24/7 Wronki oferuje pełen zakres usług holowniczych i transportowych.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Autolaweta Wronki</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Laweta 24h Wronki</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Holowanie samochodu Wronki</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Likwidacja szkód */}
            <div className="bg-purple-50 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Likwidacja szkód komunikacyjnych Wronki</h2>
              <p className="text-lg text-gray-600 mb-6">
                Nasza likwidacja szkody z OC Wronki obejmuje pełen zakres usług związanych z obsługą szkód:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Bezpośrednia likwidacja szkód (BLS) Wronki</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Zgłoszenie szkody komunikacyjnej Wronki</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Zgłoszenie szkody ubezpieczeniowej Wronki</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Wycena szkody powypadkowej Wronki</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Kosztorys naprawy z OC sprawcy Wronki</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Odszkodowanie z OC sprawcy Wronki</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Często zadawane pytania - Wronki
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
            Skontaktuj się z nami we Wronkach
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Jesteśmy dostępni 24/7 dla mieszkańców Wronek i okolic
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
              <p className="text-blue-100">ul. Główna 123<br />64-510 Wronki</p>
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

export default CentrumLikwidacjiSzkodWronki;