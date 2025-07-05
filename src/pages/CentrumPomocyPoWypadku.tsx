
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, ArrowRight, Heart, Shield, Headphones, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BenefitsSection from "@/components/BenefitsSection";
import WhyChooseUs from "@/components/WhyChooseUs";

const CentrumPomocyPoWypadku = () => {
  const helpServices = [
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Linia pomocowa 24/7",
      description: "Całodobowe wsparcie telefoniczne"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Pomoc w dokumentacji",
      description: "Wypełnianie formularzy i wniosków"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Ochrona prawna",
      description: "Profesjonalna pomoc prawna"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Wsparcie psychologiczne",
      description: "Pomoc w trudnych chwilach"
    }
  ];

  const faqItems = [
    {
      question: "Co to jest centrum pomocy po wypadku?",
      answer: "Centrum pomocy po wypadku to kompleksowy punkt obsługi, który oferuje wszystkie usługi związane z obsługą spraw powypadkowych w jednym miejscu. Dzięki temu nie musisz szukać różnych specjalistów - wszystko załatwisz u nas."
    },
    {
      question: "Jakie usługi oferuje centrum pomocy po wypadku?",
      answer: "Nasze centrum oferuje pełen zakres usług: pomoc prawną, wyceny szkód, organizację naprawy, wsparcie w kontaktach z ubezpieczycielem, pomoc w uzyskaniu pojazdu zastępczego oraz kompleksowe doradztwo w sprawach odszkodowawczych."
    },
    {
      question: "Czy centrum pomocy po wypadku jest czynne całą dobę?",
      answer: "Tak, nasza infolinia jest dostępna 24/7. Rozumiemy, że wypadki zdarzają się o każdej porze, dlatego pierwsza pomoc i doradztwo są zawsze dostępne."
    },
    {
      question: "Ile kosztują usługi centrum pomocy po wypadku?",
      answer: "Oferujemy różne pakiety usług dostosowane do potrzeb klienta. Pierwsza konsultacja jest bezpłatna, a szczegółowe informacje o kosztach otrzymasz po analizie Twojej sprawy. Wszystkie opłaty są transparentne i znane z góry."
    },
    {
      question: "Czy mogę skorzystać z usług centrum, jeśli wypadek zdarzył się dawno temu?",
      answer: "Tak, możesz skorzystać z naszej pomocy również w przypadku starszych spraw. Nasze centrum pomocy po wypadku zajmuje się również sprawami, które wymagają dodatkowego wsparcia czy ponownej analizy."
    },
    {
      question: "Jak długo trwa obsługa sprawy w centrum?",
      answer: "Czas obsługi zależy od złożoności sprawy. Proste przypadki mogą być załatwione w ciągu kilku tygodni, natomiast bardziej skomplikowane sprawy mogą wymagać kilku miesięcy. Zawsze informujemy o przewidywanym czasie obsługi."
    },
    {
      question: "Czy centrum pomocy po wypadku współpracuje z ubezpieczycielami?",
      answer: "Tak, współpracujemy z większością towarzystw ubezpieczeniowych na polskim rynku. Znamy ich procedury i wymagania, co pozwala nam na sprawną obsługę spraw i maksymalizację odszkodowań."
    },
    {
      question: "Co powinienem zrobić bezpośrednio po wypadku?",
      answer: "Bezpośrednio po wypadku skontaktuj się z naszym centrum pomocy po wypadku. Nasz ekspert udzieli Ci pierwszych wskazówek telefonicznie i poinformuje o dalszych krokach. Pamiętaj również o zabezpieczeniu dowodów i dokumentacji miejsca wypadku."
    },
    {
      question: "Czy mogę zmienić warsztat naprawy wybrany przez ubezpieczyciela?",
      answer: "Tak, masz prawo wyboru warsztatu naprawy. Nasze centrum pomocy po wypadku pomoże Ci w wyborze sprawdzonego warsztatu i dopilnuje, aby naprawa została wykonana zgodnie z najwyższymi standardami."
    },
    {
      question: "Czy centrum pomocy po wypadku pomaga również w sprawach sądowych?",
      answer: "Tak, jeśli sprawa wymaga postępowania sądowego, nasz zespół prawników zapewni Ci profesjonalną reprezentację. Wszystko z jednego miejsca - również obsługa sporów sądowych."
    },
    {
      question: "Jak skontaktować się z centrum pomocy po wypadku?",
      answer: "Możesz skontaktować się z nami telefonicznie pod numerem 24/7, przez formularz kontaktowy na stronie internetowej lub osobiście w naszym biurze. Pierwsza konsultacja jest zawsze bezpłatna."
    },
    {
      question: "Czy centrum pomocy po wypadku działa na terenie całego kraju?",
      answer: "Tak, nasze centrum pomocy po wypadku oferuje usługi na terenie całej Polski. Dzięki sieci partnerów i nowoczesnym technologiom możemy skutecznie obsługiwać sprawy w każdym regionie kraju."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-50 via-white to-red-50 py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-red-100 text-red-800">
                  🚨 CENTRUM POMOCY
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-red-600">Centrum pomocy po wypadku</span>
                </h1>
                
                <h2 className="text-2xl font-semibold text-gray-800">
                  Wszystko z jednego miejsca - Twoje wsparcie w trudnych chwilach
                </h2>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Wypadek drogowy to moment, w którym potrzebujesz szybkiej, profesjonalnej pomocy i jasnych odpowiedzi. 
                  Nasze centrum pomocy po wypadku to miejsce, gdzie znajdziesz kompleksowe wsparcie, doradztwo 
                  i wszystkie niezbędne usługi - wszystko z jednego miejsca.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Całodobowa linia pomocowa",
                  "Natychmiastowa pomoc na miejscu",
                  "Wsparcie psychologiczne",
                  "Pomoc prawna i administracyjna"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-lg px-8 py-4">
                  <Phone className="w-5 h-5 mr-2" />
                  Pomoc: 123-456-789
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-red-200 text-red-600 hover:bg-red-50">
                  Zgłoś wypadek
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/98c1a9a6-892d-403f-a83e-d61e11ade53e.png"
                alt="Centrum pomocy po wypadku"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* What is our help center */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                Czym jest nasze centrum pomocy po wypadku?
              </h2>
              <p className="text-xl text-gray-600 text-center mb-12 max-w-4xl mx-auto">
                Centrum pomocy po wypadku to nowoczesny punkt obsługi, który integruje wszystkie aspekty wsparcia 
                poszkodowanych w wypadkach drogowych. Oferujemy kompleksowe rozwiązania, które pozwalają na sprawne 
                załatwienie wszystkich formalności związanych ze zdarzeniem drogowym.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Nasze usługi w jednym miejscu:
              </h3>
              
              <div className="grid lg:grid-cols-3 gap-8">
                <Card className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Pomoc prawna i doradztwo</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">Konsultacje prawne dotyczące Twoich uprawnień</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">Reprezentacja w postępowaniu z ubezpieczycielem</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">Pomoc w dochodzeniu odszkodowań</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">Wsparcie w sprawach spornych</span>
                    </li>
                  </ul>
                </Card>
                
                <Card className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Obsługa techniczna i wyceny</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">Profesjonalne wyceny szkód powypadkowych</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">Kosztorysy naprawy</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">Organizacja naprawy pojazdu</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">Nadzór nad jakością prac</span>
                    </li>
                  </ul>
                </Card>
                
                <Card className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Wsparcie logistyczne</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">Pomoc w organizacji transportu</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">Assistance w uzyskaniu pojazdu zastępczego</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">Koordinacja z służbami ratunkowymi</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">Dokumentacja zdarzenia</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>

            {/* Why choose our center */}
            <div className="bg-gray-50 p-12 rounded-2xl">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                Dlaczego warto wybrać nasze centrum?
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Kompleksowość</h3>
                  <p className="text-gray-600">
                    W naszym centrum pomocy po wypadku znajdziesz wszystkie niezbędne usługi pod jednym dachem. 
                    Nie musisz szukać różnych specjalistów w różnych miejscach - wszystko z jednego miejsca.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Doświadczenie</h3>
                  <p className="text-gray-600">
                    Nasz zespół to eksperci z wieloletnim doświadczeniem w obsłudze spraw powypadkowych. 
                    Znamy procedury, wiemy jak skutecznie dochodzić odszkodowań i jak uniknąć typowych błędów.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Dostępność</h3>
                  <p className="text-gray-600">
                    Nasze centrum pomocy po wypadku jest dostępne 24/7. Wypadki nie wybierają pory dnia 
                    ani dnia tygodnia, dlatego nasza pomoc jest zawsze w zasięgu ręki.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Transparentność</h3>
                  <p className="text-gray-600">
                    Oferujemy jasne zasady współpracy, przejrzyste cenniki i szczegółowe informacje o każdym etapie obsługi. 
                    Wszystko z jednego miejsca - również informacje o kosztach.
                  </p>
                </div>
              </div>
            </div>

            {/* Process */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                Proces obsługi w centrum
              </h2>
              <div className="grid md:grid-cols-5 gap-8">
                {[
                  { step: "1", title: "Zgłoszenie sprawy", desc: "Pierwszy kontakt i ocena sytuacji" },
                  { step: "2", title: "Analiza przypadku", desc: "Szczegółowa analiza okoliczności wypadku" },
                  { step: "3", title: "Plan działania", desc: "Przygotowanie strategii obsługi sprawy" },
                  { step: "4", title: "Realizacja usług", desc: "Kompleksowa obsługa wszystkich aspektów" },
                  { step: "5", title: "Finalizacja", desc: "Rozliczenie i przekazanie dokumentacji" }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Help Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Rodzaje pomocy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kompleksowe wsparcie w każdej sytuacji powypadkowej
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {helpServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 text-center">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
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

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              FAQ - Najczęściej zadawane pytania
            </h2>
            <p className="text-xl text-gray-600">
              Odpowiedzi na najważniejsze pytania dotyczące centrum pomocy po wypadku
            </p>
          </div>

          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.question}</h3>
                <p className="text-gray-600 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BenefitsSection />
      <WhyChooseUs />

      {/* Emergency CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Skontaktuj się z nami
          </h2>
          <p className="text-xl mb-6 text-red-100">
            Potrzebujesz pomocy po wypadku? Nasze centrum pomocy po wypadku to miejsce, 
            gdzie znajdziesz wszystko czego potrzebujesz - wszystko z jednego miejsca.
          </p>
          <p className="text-lg mb-8 text-red-100">
            Zadzwoń już teraz i otrzymaj pierwszą bezpłatną konsultację!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Zadzwoń: 123-456-789
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              <Heart className="w-5 h-5 mr-2" />
              Otrzymaj pomoc
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CentrumPomocyPoWypadku;
