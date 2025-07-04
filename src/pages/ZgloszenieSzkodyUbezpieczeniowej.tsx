
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, ArrowRight, FileText, Clock, Shield, AlertTriangle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BenefitsSection from "@/components/BenefitsSection";
import WhyChooseUs from "@/components/WhyChooseUs";

const ZgloszenieSzkodyUbezpieczeniowej = () => {
  const requiredDocuments = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Protokół policji",
      description: "Oryginał lub kopia protokołu z miejsca zdarzenia",
      required: true
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Polisa ubezpieczeniowa",
      description: "Aktualna polisa OC i AC (jeśli dotyczy)",
      required: true
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Dowód rejestracyjny",
      description: "Dokumenty pojazdu i prawo jazdy",
      required: true
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Dokumentacja medyczna",
      description: "Zaświadczenia lekarskie (w przypadku obrażeń)",
      required: false
    }
  ];

  const processSteps = [
    "Natychmiastowe zgłoszenie szkody",
    "Przygotowanie dokumentacji",
    "Złożenie wniosku do ubezpieczyciela",
    "Monitoring postępowania",
    "Odbiór odszkodowania"
  ];

  const faqData = [
    {
      question: "Jak szybko należy zgłosić szkodę ubezpieczeniową?",
      answer: "Szkodę należy zgłosić niezwłocznie po zdarzeniu, najlepiej w ciągu 24 godzin. Standardowo termin wynosi do 7 dni od zdarzenia, ale im szybciej tym lepiej dla zabezpieczenia dowodów."
    },
    {
      question: "Jakie dokumenty są potrzebne do zgłoszenia szkody komunikacyjnej?",
      answer: "Podstawowe dokumenty to: polisa ubezpieczeniowa, dowód rejestracyjny, prawo jazdy, protokół policji (jeśli sporządzono), oświadczenie o zdarzeniu drogowym oraz zdjęcia z miejsca wypadku."
    },
    {
      question: "Czy można zgłosić szkodę online?",
      answer: "Tak, większość ubezpieczycieli oferuje możliwość zgłoszenia szkody przez stronę internetową lub aplikację mobilną. Można tam wypełnić formularz i załączyć niezbędne dokumenty."
    },
    {
      question: "Co to jest system BLS i kiedy można z niego skorzystać?",
      answer: "BLS (Bezpośrednia Likwidacja Szkód) pozwala zgłosić szkodę do własnego ubezpieczyciela zamiast do ubezpieczyciela sprawcy. Można z niego skorzystać gdy wypadek miał miejsce w Polsce, uczestniczyły maksymalnie 2 pojazdy, oba są ubezpieczone w Polsce i nie ma szkód osobowych."
    },
    {
      question: "Co się dzieje jeśli sprawca wypadku nie ma ubezpieczenia?",
      answer: "W przypadku braku ubezpieczenia OC u sprawcy, odszkodowanie wypłaca Ubezpieczeniowy Fundusz Gwarancyjny (UFG). Należy zgłosić szkodę bezpośrednio do UFG z odpowiednią dokumentacją."
    },
    {
      question: "Jakie błędy najczęściej popełnia się przy zgłaszaniu szkody?",
      answer: "Najczęstsze błędy to: niepełny opis zdarzenia, błędy w danych uczestników, niekompletna dokumentacja, opóźnione zgłoszenie oraz nieścisłe informacje o uszkodzeniach."
    },
    {
      question: "Czy można naprawić pojazd przed oględzinami rzeczoznawcy?",
      answer: "Nie, pojazdu nie wolno naprawiać przed oględzinami rzeczoznawcy ubezpieczyciela. Może to skutkować odmową wypłaty odszkodowania lub jego obniżeniem."
    },
    {
      question: "Jak długo trwa proces likwidacji szkody po zgłoszeniu?",
      answer: "Ubezpieczyciel ma 30 dni na zajęcie stanowiska ws. szkody i 14 dni na wypłatę odszkodowania po ustaleniu jego wysokości. W praktyce może to trwać od kilku tygodni do kilku miesięcy."
    },
    {
      question: "Co robić gdy ubezpieczyciel odmawia wypłaty odszkodowania?",
      answer: "Można złożyć reklamację do ubezpieczyciela, skontaktować się z rzecznikiem klienta, zwrócić się do Rzecznika Finansowego lub skorzystać z pomocy prawnej."
    },
    {
      question: "Czy można śledzić status sprawy po zgłoszeniu szkody?",
      answer: "Tak, większość ubezpieczycieli oferuje możliwość śledzenia statusu sprawy online lub przez aplikację mobilną. Można także kontaktować się bezpośrednio z przydzielonym likwidatorem."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-orange-50 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-100 text-orange-800 px-3 py-1">
              <FileText className="w-4 h-4 mr-2" />
              ZGŁOSZENIE SZKODY
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Zgłoszenie szkody ubezpieczeniowej
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Przewodnik krok po kroku - profesjonalne wsparcie w zgłaszaniu szkód ubezpieczeniowych. 
              Zajmiemy się całą procedurą od dokumentacji po wypłatę odszkodowania.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-4">
                <Phone className="w-5 h-5 mr-2" />
                Zgłoś szkodę: 123-456-789
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-orange-200 text-orange-600 hover:bg-orange-50">
                Bezpłatna konsultacja
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          {/* Main Content Sections */}
          <div className="space-y-16">
            
            {/* Podstawowe informacje */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Zgłoszenie szkody ubezpieczeniowej - podstawowe informacje
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Zgłoszenie szkody ubezpieczeniowej</strong> to pierwszy i najważniejszy krok w procesie 
                dochodzenia odszkodowania. Prawidłowe zgłoszenie decyduje o sprawności całego postępowania 
                i może znacząco wpłynąć na wysokość otrzymanego odszkodowania.
              </p>
              
              <div className="bg-orange-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Znaczenie prawidłowego zgłoszenia
                </h3>
                <p className="text-gray-700 mb-4">
                  <strong>Zgłoszenie szkody ubezpieczeniowej</strong> ma kluczowe znaczenie dla:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Uruchomienia procedury likwidacji szkody",
                    "Zachowania uprawnień do odszkodowania",
                    "Dochowania terminów przewidzianych w polisie",
                    "Zabezpieczenia dowodów i dokumentacji",
                    "Właściwego udokumentowania zdarzenia"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Terminy zgłoszenia */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Terminy zgłoszenia szkody
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-l-4 border-l-green-600">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-gray-900 flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-green-600" />
                      Ustawowe terminy
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      <strong>Zgłoszenie szkody ubezpieczeniowej</strong> powinno nastąpić:
                    </p>
                    <div className="space-y-2">
                      {[
                        "Niezwłocznie po zdarzeniu (najlepiej w ciągu 24 godzin)",
                        "Nie później niż w terminie określonym w polisie",
                        "Standardowo do 7 dni od zdarzenia",
                        "W przypadku kradzieży - natychmiast po odkryciu"
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-red-600">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-gray-900 flex items-center">
                      <AlertTriangle className="w-5 h-5 mr-2 text-red-600" />
                      Konsekwencje opóźnień
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      Opóźnione <strong>zgłoszenie szkody komunikacyjnej</strong> może skutkować:
                    </p>
                    <div className="space-y-2">
                      {[
                        "Odmową wypłaty odszkodowania",
                        "Obniżeniem kwoty odszkodowania",
                        "Trudnościami w udowodnieniu okoliczności",
                        "Utratą możliwości zabezpieczenia dowodów",
                        "Problemami z ustaleniem sprawcy"
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Sposoby zgłoszenia */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Sposoby zgłoszenia szkody
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Zgłoszenie telefoniczne",
                    description: "Infolinia ubezpieczyciela dostępna 24/7",
                    items: ["Natychmiastowe otrzymanie numeru szkody", "Możliwość uzyskania pierwszych instrukcji", "Rejestracja podstawowych danych", "Umówienie oględzin pojazdu"]
                  },
                  {
                    title: "Zgłoszenie online",
                    description: "Elektroniczne zgłoszenie szkody komunikacyjnej",
                    items: ["Formularz na stronie ubezpieczyciela", "Możliwość załączenia dokumentów", "Śledzenie statusu sprawy online", "Automatyczne potwierdzenie przyjęcia"]
                  },
                  {
                    title: "Zgłoszenie w placówce",
                    description: "Osobiste zgłoszenie szkody ubezpieczeniowej",
                    items: ["Bezpośredni kontakt z konsultantem", "Możliwość wyjaśnienia wątpliwości", "Kompleksowe wypełnienie dokumentów", "Otrzymanie kopii dokumentów"]
                  }
                ].map((method, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-gray-900">
                        {method.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        {method.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {method.items.map((item, idx) => (
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

            {/* System BLS */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Zgłoszenie szkody w systemie BLS
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Zgłoszenie szkody komunikacyjnej</strong> w systemie BLS (Bezpośrednia Likwidacja Szkód) 
                umożliwia szybsze i prostsze dochodzenie odszkodowań.
              </p>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Zasady działania BLS
                </h3>
                <p className="text-gray-700 mb-4">
                  <strong>Bezpośrednia likwidacja szkód (BLS)</strong> polega na:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Zgłaszaniu szkody do własnego ubezpieczyciela",
                    "Pominięciu bezpośredniego kontaktu ze sprawcą",
                    "Szybszej procedurze likwidacji",
                    "Rozliczeniach między ubezpieczycielami"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Wymagane dokumenty
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lista dokumentów potrzebnych do zgłoszenia szkody
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {requiredDocuments.map((doc, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <div className={`w-16 h-16 ${doc.required ? 'bg-gradient-to-br from-red-500 to-red-600' : 'bg-gradient-to-br from-blue-500 to-blue-600'} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                      {doc.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <CardTitle className="text-lg font-bold text-gray-900">
                          {doc.title}
                        </CardTitle>
                        {doc.required && (
                          <Badge variant="destructive" className="text-xs">
                            Wymagane
                          </Badge>
                        )}
                      </div>
                      <CardDescription className="text-gray-600">
                        {doc.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Proces zgłoszenia szkody
            </h2>
            <p className="text-xl text-gray-600">
              Procedura krok po kroku
            </p>
          </div>

          <div className="space-y-4">
            {processSteps.map((step, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <span className="text-lg text-gray-900">{step}</span>
              </div>
            ))}
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
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Potrzebujesz pomocy w zgłoszeniu szkody?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Nie zwlekaj! Im szybciej zgłosisz szkodę, tym szybciej otrzymasz odszkodowanie. 
            Skontaktuj się z nami już teraz.
          </p>
          <p className="text-orange-100 leading-relaxed mb-8">
            Nasze doświadczenie w obsłudze <strong>zgłoszeń szkód komunikacyjnych</strong> zapewni Ci 
            właściwe przygotowanie dokumentacji i maksymalizację szans na otrzymanie sprawiedliwego odszkodowania.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Zadzwoń: 123-456-789
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              <FileText className="w-5 h-5 mr-2" />
              Formularz online
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ZgloszenieSzkodyUbezpieczeniowej;
