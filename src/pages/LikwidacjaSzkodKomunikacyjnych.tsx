
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, ArrowRight, FileText, Shield, Clock, Users, AlertTriangle, Scale } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BenefitsSection from "@/components/BenefitsSection";
import WhyChooseUs from "@/components/WhyChooseUs";

const LikwidacjaSzkodKomunikacyjnych = () => {
  const processSteps = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Zgłoszenie szkody",
      description: "Kontakt telefoniczny lub przez formularz online",
      details: ["Przyjęcie zgłoszenia 24/7", "Pierwsza pomoc prawna", "Ustalenie okoliczności"]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Dokumentacja",
      description: "Zebranie i przygotowanie niezbędnych dokumentów",
      details: ["Protokół policji", "Dokumenty pojazdu", "Zaświadczenia lekarskie"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Negocjacje",
      description: "Rozmowy z ubezpieczycielem sprawcy",
      details: ["Ustalenie wysokości odszkodowania", "Negocjacja warunków", "Obrona Twoich praw"]
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Wypłata",
      description: "Otrzymanie pełnego odszkodowania",
      details: ["Szybka wypłata", "Bez ukrytych kosztów", "Pełne zadowolenie klienta"]
    }
  ];

  const damageTypes = [
    {
      title: "Szkody rzeczowe",
      description: "Uszkodzenia pojazdów i mienia",
      items: ["Koszt naprawy pojazdu", "Utrata wartości handlowej", "Koszty holowania", "Pojazd zastępczy"]
    },
    {
      title: "Szkody osobowe", 
      description: "Obrażenia i szkody na osobie",
      items: ["Koszty leczenia", "Utrata zarobków", "Zadośćuczynienie", "Renta dla rodziny"]
    },
    {
      title: "Bezpośrednia likwidacja (BLS)",
      description: "Szybsza procedura przez własnego ubezpieczyciela",
      items: ["Maksymalnie 2 pojazdy", "Brak szkód osobowych", "Szybsza realizacja", "Prostsze procedury"]
    }
  ];

  const faqData = [
    {
      question: "Czym jest likwidacja szkód komunikacyjnych?",
      answer: "Likwidacja szkód komunikacyjnych to kompleksowy proces dochodzenia odszkodowania po wypadku drogowym, obejmujący ustalenie okoliczności zdarzenia, wycenę szkody, negocjacje z ubezpieczycielami i wypłatę należnego odszkodowania."
    },
    {
      question: "Jak długo trwa proces likwidacji szkody z OC?",
      answer: "Standardowo ubezpieczyciel ma 30 dni na zajęcie stanowiska ws. szkody i 14 dni na wypłatę odszkodowania. W praktyce proces może trwać od kilku tygodni do kilku miesięcy, w zależności od złożoności sprawy."
    },
    {
      question: "Co to jest bezpośrednia likwidacja szkód (BLS)?",
      answer: "BLS to system pozwalający na zgłoszenie szkody do własnego ubezpieczyciela zamiast do ubezpieczyciela sprawcy. Dotyczy wypadków z udziałem maksymalnie 2 pojazdów, bez szkód osobowych, gdzie szkoda nie przekracza określonego limitu."
    },
    {
      question: "Jakie dokumenty są potrzebne do likwidacji szkody?",
      answer: "Podstawowe dokumenty to: protokół policji (jeśli sporządzono), oświadczenie o zdarzeniu drogowym, dokumenty pojazdu i ubezpieczenia, zdjęcia z miejsca wypadku oraz zeznania świadków."
    },
    {
      question: "Czy mogę samodzielnie prowadzić likwidację szkody?",
      answer: "Tak, ale profesjonalna obsługa znacznie zwiększa szanse na otrzymanie pełnego odszkodowania. Specjaliści znają procedury, potrafią negocjować z ubezpieczycielami i unikać typowych pułapek."
    },
    {
      question: "Co zrobić, gdy ubezpieczyciel zaniża odszkodowanie?",
      answer: "Należy złożyć reklamację, zlecić niezależną ekspertyzę, skontaktować się ze specjalistą ds. likwidacji szkód lub w ostateczności skierować sprawę do sądu. Można też zgłosić się do Rzecznika Finansowego."
    },
    {
      question: "Jakie są terminy przedawnienia roszczeń?",
      answer: "Roszczenia z tytułu szkód komunikacyjnych przedawniają się po 3 latach od dnia, w którym poszkodowany dowiedział się o szkodzie i osobie obowiązanej do jej naprawienia."
    },
    {
      question: "Czy można dochodzić odszkodowania za utratę wartości pojazdu?",
      answer: "Tak, można dochodzić odszkodowania za utratę wartości handlowej pojazdu (deprecjację), która powstaje nawet po profesjonalnej naprawie. To jedno z często pomijanych przez ubezpieczycieli roszczeń."
    },
    {
      question: "Kto pokrywa koszty obsługi prawnej szkody?",
      answer: "W wielu przypadkach koszty obsługi prawnej mogą być dochodzene od ubezpieczyciela sprawcy jako szkoda wtórna. Oferujemy też możliwość rozliczenia kosztów bezpośrednio z ubezpieczycielami."
    },
    {
      question: "Co się dzieje, gdy sprawca nie ma ubezpieczenia OC?",
      answer: "W przypadku braku ubezpieczenia OC u sprawcy, odszkodowanie wypłaca Ubezpieczeniowy Fundusz Gwarancyjny (UFG). Procedura jest podobna, ale może trwać dłużej i wymaga szczególnej dokumentacji."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-50 via-white to-red-50 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-red-100 text-red-800 px-3 py-1">
              <Scale className="w-4 h-4 mr-2" />
              LIKWIDACJA SZKÓD
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Likwidacja szkód komunikacyjnych
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Profesjonalne wsparcie w procesie odszkodowawczym - kompleksowe podejście 
              do likwidacji szkód z OC sprawcy i bezpośredniej likwidacji szkód (BLS)
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-lg px-8 py-4">
                <Phone className="w-5 h-5 mr-2" />
                Zadzwoń: 123-456-789
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-red-200 text-red-600 hover:bg-red-50">
                Bezpłatna konsultacja
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          {/* Main Content Sections */}
          <div className="space-y-16">
            
            {/* Kompleksowe podejście */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Likwidacja szkód komunikacyjnych - kompleksowe podejście
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Likwidacja szkód komunikacyjnych</strong> to złożony proces, który wymaga znajomości prawa, 
                procedur ubezpieczeniowych i praktycznego doświadczenia. Nasze biuro oferuje pełne wsparcie w każdym 
                etapie likwidacji szkody, od momentu zdarzenia do wypłaty odszkodowania.
              </p>
              
              <div className="bg-blue-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Czym jest likwidacja szkód komunikacyjnych?
                </h3>
                <p className="text-gray-700 mb-4">
                  <strong>Likwidacja szkód komunikacyjnych</strong> obejmuje wszystkie działania związane z:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Ustaleniem okoliczności wypadku",
                    "Określeniem wysokości szkody", 
                    "Negocjacjami z ubezpieczycielami",
                    "Dochodzeniem należnych odszkodowań",
                    "Reprezentacją interesów poszkodowanych"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Rodzaje szkód */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Rodzaje odszkodowań w szkodach komunikacyjnych
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {damageTypes.map((type, index) => (
                  <Card key={index} className="border-l-4 border-l-red-600">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-gray-900">
                        {type.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        {type.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {type.items.map((item, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Proces likwidacji */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Obsługa szkody z OC - etapy procesu
              </h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                <strong>Obsługa szkody z OC</strong> przebiega w kilku kluczowych etapach, 
                z których każdy wymaga właściwego podejścia i dokumentacji.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {processSteps.map((step, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 relative">
                    <div className="absolute -top-4 left-4 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <CardHeader className="text-center pb-4 pt-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                        {step.icon}
                      </div>
                      <CardTitle className="text-lg font-bold text-gray-900">
                        {step.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        {step.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Bezpośrednia likwidacja szkód */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Bezpośrednia likwidacja szkód (BLS) - nowoczesne rozwiązanie
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Bezpośrednia likwidacja szkód (BLS)</strong> to system umożliwiający szybsze 
                i prostsze dochodzenie odszkodowań po wypadkach komunikacyjnych.
              </p>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Zasady działania BLS
                </h3>
                <p className="text-gray-700 mb-4">
                  <strong>Bezpośrednia likwidacja szkód (BLS)</strong> polega na:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Zgłaszaniu szkody do własnego ubezpieczyciela",
                    "Pominięciu bezpośredniego kontaktu z ubezpieczycielem sprawcy",
                    "Szybszej realizacji odszkodowania", 
                    "Rozliczeniach między ubezpieczycielami"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Problemy w likwidacji */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Częste problemy w likwidacji szkód
              </h2>
              <div className="bg-orange-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Typowe trudności w obsłudze szkody z OC:
                </h3>
                <div className="space-y-3">
                  {[
                    "Zaniżanie wyceny przez ubezpieczycieli",
                    "Odmowa uznania odpowiedzialności",
                    "Przeciąganie postępowania",
                    "Niepełne dokumentowanie szkody",
                    "Problemy z ustaleniem sprawcy"
                  ].map((problem, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{problem}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

          </div>
        </div>
      </section>

      <BenefitsSection />
      <WhyChooseUs />

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Najczęściej zadawane pytania
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {faqData.map((faq, index) => (
              <Card key={index} className="h-fit">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Potrzebujesz pomocy w likwidacji szkody?
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Skontaktuj się z nami już teraz. Zajmiemy się wszystkimi formalnościami, 
            abyś mógł skupić się na powrocie do normalności.
          </p>
          <p className="text-red-100 leading-relaxed mb-8">
            Nasze kompleksowe podejście do <strong>likwidacji szkód komunikacyjnych</strong> to gwarancja 
            skutecznego dochodzenia należnych Ci odszkodowań. Nie pozwól, aby <strong>likwidacja szkody z OC</strong> 
            stała się źródłem problemów i stresu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Zadzwoń: 123-456-789
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              <FileText className="w-5 h-5 mr-2" />
              Bezpłatna konsultacja
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LikwidacjaSzkodKomunikacyjnych;
