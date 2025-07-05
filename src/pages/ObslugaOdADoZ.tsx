
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, ArrowRight, ListChecks, Clock, Users, Award, Shield, FileText, Wrench } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BenefitsSection from "@/components/BenefitsSection";
import WhyChooseUs from "@/components/WhyChooseUs";

const ObslugaOdADoZ = () => {
  const steps = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "A - Analiza sytuacji",
      description: "Szczegółowa analiza wypadku i dokumentacji"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "B - Bezpośredni kontakt z ubezpieczycielem",
      description: "Profesjonalna komunikacja z towarzystwem ubezpieczeniowym"
    },
    {
      icon: <ListChecks className="w-6 h-6" />,
      title: "C - Całościowa dokumentacja",
      description: "Kompletne przygotowanie wszystkich dokumentów"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "D - Dedykowana opieka",
      description: "Osobisty opiekun przez cały proces"
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "E - Ekspertkie naprawy",
      description: "Profesjonalne naprawy w sprawdzonych warsztatach"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "F - Finalizacja sprawy",
      description: "Pełne rozliczenie i przekazanie naprawionego pojazdu"
    }
  ];

  const packageServices = [
    {
      title: "Pomoc prawna i reprezentacja",
      items: [
        "Konsultacje prawne dotyczące Twoich uprawnień",
        "Reprezentacja w postępowaniu z ubezpieczycielem",
        "Pomoc w dochodzeniu odszkodowań i zadośćuczynień",
        "Wsparcie w sprawach spornych i sądowych"
      ]
    },
    {
      title: "Obsługa techniczna pojazdu",
      items: [
        "Profesjonalna wycena szkód powypadkowych",
        "Kosztorys naprawy akceptowany przez ubezpieczyciela",
        "Organizacja naprawy w sprawdzonych warsztatach",
        "Nadzór nad jakością wykonanych prac"
      ]
    },
    {
      title: "Usługi dodatkowe",
      items: [
        "Pomoc w uzyskaniu pojazdu zastępczego",
        "Organizacja transportu i holowania",
        "Wsparcie w kontaktach z policją i ubezpieczycielem",
        "Dokumentacja fotograficzna miejsca wypadku"
      ]
    }
  ];

  const processSteps = [
    {
      title: "Etap 1: Zgłoszenie i pierwsza pomoc",
      items: [
        "Natychmiastowa pomoc telefoniczna 24/7",
        "Instrukcje dotyczące zabezpieczenia dowodów",
        "Organizacja podstawowych usług (holowanie, transport)"
      ]
    },
    {
      title: "Etap 2: Analiza sprawy",
      items: [
        "Szczegółowa analiza okoliczności wypadku",
        "Ocena perspektyw dochodzenia odszkodowania",
        "Przygotowanie strategii działania"
      ]
    },
    {
      title: "Etap 3: Realizacja pakietu usług",
      items: [
        "Prowadzenie korespondencji z ubezpieczycielem",
        "Organizacja ekspertyz i wycen",
        "Nadzór nad procesem naprawy pojazdu"
      ]
    },
    {
      title: "Etap 4: Finalizacja sprawy",
      items: [
        "Rozliczenie wszystkich kosztów",
        "Przekazanie pełnej dokumentacji",
        "Wsparcie posprzedażowe"
      ]
    }
  ];

  const benefits = [
    "Oszczędność czasu - zajmujemy się wszystkimi formalnościami",
    "Spokój ducha - masz pewność, że sprawy są w dobrych rękach",
    "Maksymalne odszkodowanie - dbamy o Twoje interesy finansowe",
    "Profesjonalne wsparcie - dostęp do ekspertów w każdej dziedzinie",
    "Pełną dokumentację - przejrzyste rozliczenie wszystkich działań"
  ];

  const faqItems = [
    {
      question: "Ile kosztuje kompleksowa obsługa powypadkowa?",
      answer: "Koszt obsługi zależy od zakresu usług i skomplikowania sprawy. W większości przypadków koszty te można rozliczyć z ubezpieczeniem sprawcy. Oferujemy bezpłatną wstępną konsultację i wycenę usług."
    },
    {
      question: "Jak długo trwa cały proces obsługi od A do Z?",
      answer: "Czas trwania zależy od skomplikowania sprawy. Standardowo proces trwa od 2 do 6 tygodni. W przypadkach spornych może się wydłużyć. Zapewniamy regularne informacje o postępach."
    },
    {
      question: "Czy mogę zrezygnować z obsługi w trakcie procesu?",
      answer: "Tak, możesz zrezygnować w każdym momencie. Rozliczymy się tylko za faktycznie wykonane usługi zgodnie z zawartą umową."
    },
    {
      question: "Co jeśli ubezpieczyciel odmówi wypłaty odszkodowania?",
      answer: "W przypadku odmowy przeprowadzamy dodatkowe ekspertyzy i negocjacje. Jeśli to konieczne, reprezentujemy Cię w postępowaniu sądowym w ramach naszej obsługi."
    },
    {
      question: "Czy obsługujecie sprawy w całej Polsce?",
      answer: "Tak, nasza kompleksowa obsługa powypadkowa obejmuje całą Polskę. Mamy sieć partnerów, dzięki czemu zapewniamy lokalne wsparcie w każdym regionie."
    },
    {
      question: "Jakie dokumenty potrzebuję, aby skorzystać z waszych usług?",
      answer: "Potrzebujemy podstawowych dokumentów: dowodu osobistego, dokumentów pojazdu, polisy ubezpieczeniowej oraz protokołu policji (jeśli został sporządzony). Pomożemy w uzyskaniu brakujących dokumentów."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 via-white to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-teal-100 text-teal-800">
                  📋 KOMPLEKSOWA OBSŁUGA POWYPADKOWA
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-teal-600">Obsługa od A do Z</span>
                  <br />
                  <span className="text-gray-900">Twój partner w trudnych chwilach</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Wypadek drogowy to zawsze stresująca sytuacja, która wymaga szybkiego i profesjonalnego działania. 
                  Nasza kompleksowa obsługa powypadkowa to gwarancja spokoju i pewności, że wszystkie formalności 
                  będą załatwione zgodnie z prawem i w Twoim najlepszym interesie.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Sprawdzony system obsługi",
                  "Każdy etap pod kontrolą",
                  "Dedykowany opiekun",
                  "Gwarancja jakości"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-lg px-8 py-4">
                  <Phone className="w-5 h-5 mr-2" />
                  Rozpocznij: 123-456-789
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-teal-200 text-teal-600 hover:bg-teal-50">
                  Poznaj proces
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/98c1a9a6-892d-403f-a83e-d61e11ade53e.png"
                alt="Obsługa od A do Z"
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
            {/* Package Services */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
                Pakiet usług powypadkowych
              </h2>
              <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                Oferujemy kompletny pakiet usług powypadkowych, który obejmuje wszystkie aspekty obsługi szkody komunikacyjnej. 
                Nasz zespół ekspertów zadba o każdy szczegół, abyś mógł skupić się na powrocie do zdrowia i normalnego funkcjonowania.
              </p>
              
              <div className="grid lg:grid-cols-3 gap-8">
                {packageServices.map((service, index) => (
                  <Card key={index} className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <ul className="space-y-2">
                      {service.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </div>

            {/* Full Service Section */}
            <div className="bg-gray-50 p-12 rounded-2xl">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
                Pełna obsługa poszkodowanych
              </h2>
              <p className="text-xl text-gray-600 text-center mb-8 max-w-4xl mx-auto">
                Nasza pełna obsługa poszkodowanych to znacznie więcej niż standardowe usługi prawne. 
                To kompleksowe wsparcie, które obejmuje zarówno aspekty materialne, jak i emocjonalne trudnej sytuacji po wypadku.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <Award className="w-16 h-16 text-teal-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Doświadczenie i profesjonalizm</h3>
                  <p className="text-gray-600">
                    Nasz zespół posiada wieloletnie doświadczenie w obsłudze spraw powypadkowych. 
                    Znamy wszystkie procedury, pułapki prawne i sposoby na maksymalizację odszkodowania.
                  </p>
                </div>
                <div>
                  <Users className="w-16 h-16 text-teal-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Indywidualne podejście</h3>
                  <p className="text-gray-600">
                    Każda sprawa jest inna, dlatego nasza kompleksowa obsługa powypadkowa 
                    jest zawsze dostosowana do konkretnej sytuacji i potrzeb klienta.
                  </p>
                </div>
                <div>
                  <Shield className="w-16 h-16 text-teal-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Obsługa od A do Z bez ukrytych kosztów</h3>
                  <p className="text-gray-600">
                    Oferujemy transparentne warunki współpracy. Wiesz dokładnie, za co płacisz 
                    i jakie usługi otrzymujesz w ramach pakietu.
                  </p>
                </div>
              </div>
            </div>

            {/* Process Steps */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
                Proces kompleksowej obsługi
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {processSteps.map((step, index) => (
                  <Card key={index} className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <ul className="space-y-2">
                      {step.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-teal-50 p-12 rounded-2xl">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                Korzyści z wyboru naszej obsługi
              </h2>
              <p className="text-xl text-gray-600 text-center mb-8">
                Wybierając naszą kompleksową obsługę powypadkową, zyskujesz:
              </p>
              <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nasz sprawdzony proces
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Obsługa powypadkowa według alfabetu - każdy etap ma swoje miejsce
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 text-center">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {step.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {step.description}
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
              Często zadawane pytania
            </h2>
            <p className="text-xl text-gray-600">
              Odpowiedzi na najczęściej zadawane pytania dotyczące kompleksowej obsługi
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Skontaktuj się z nami już dziś
          </h2>
          <p className="text-xl mb-8 text-teal-100">
            Potrzebujesz kompleksowej obsługi powypadkowej? Nasz pakiet usług powypadkowych to gwarancja 
            profesjonalnego wsparcia w trudnym momencie. Pełna obsługa poszkodowanych to nasza specjalność - 
            obsługa od A do Z, na którą możesz liczyć.
          </p>
          <p className="text-lg mb-8 text-teal-100">
            Zadzwoń już teraz i przekonaj się, jak wiele możesz zyskać dzięki naszemu doświadczeniu i zaangażowaniu!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Zadzwoń: 123-456-789
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              <ListChecks className="w-5 h-5 mr-2" />
              Sprawdź proces
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ObslugaOdADoZ;
