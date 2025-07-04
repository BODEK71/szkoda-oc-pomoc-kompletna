
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Truck, Shield, Clock, CheckCircle, AlertTriangle, Phone, FileText, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BezplatneHolowanieZOCSprawcy = () => {
  const steps = [
    {
      title: "Zabezpieczenie na miejscu zdarzenia",
      description: "Wezwanie służb, dokumentacja zdarzenia, kontakt z ubezpieczycielem sprawcy",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Wybór firmy holowniczej",
      description: "Możliwość wyboru własnej firmy lub skorzystanie z wskazanej przez ubezpieczyciela",
      icon: <Truck className="w-6 h-6" />
    },
    {
      title: "Dokumentacja procesu",
      description: "Protokół, zlecenie holowania, potwierdzenia transportu i faktury",
      icon: <FileText className="w-6 h-6" />
    }
  ];

  const conditions = [
    "Sprawca wypadku posiada ważną polisę OC",
    "Pojazd nie może kontynuować jazdy z przyczyn bezpieczeństwa",
    "Złożono odpowiednią dokumentację do ubezpieczyciela",
    "Holowanie nastąpiło w rozsądnym czasie po wypadku"
  ];

  const faqData = [
    {
      question: "Czy holowanie z OC sprawcy jest zawsze bezpłatne?",
      answer: "Tak, jeśli spełnisz podstawowe warunki: sprawca ma ubezpieczenie OC, Twój pojazd nie może jechać dalej, a koszty holowania są rozsądne w stosunku do szkody."
    },
    {
      question: "Czy mogę wybrać własną firmę holowniczą?",
      answer: "Tak, masz prawo wyboru firmy holowniczej, jednak koszty muszą być rozsądne i zgodne z taryfą rynkową. Ubezpieczyciel może wskazać preferowanego wykonawcę."
    },
    {
      question: "Jak daleko mogę holować pojazd z OC sprawcy?",
      answer: "Nie ma sztywnych limitów odległości, ale transport musi być uzasadniony. Możesz holować do wybranego warsztatu, miejsca zamieszkania lub parkingu."
    },
    {
      question: "Co jeśli ubezpieczyciel odmawia pokrycia kosztów holowania?",
      answer: "Możesz złożyć reklamację, skontaktować się z rzecznikiem ubezpieczonych lub skorzystać z pomocy prawnej. Holowanie z OC sprawcy to Twoje prawo."
    },
    {
      question: "Czy holowanie obejmuje również przechowanie pojazdu?",
      answer: "Tak, koszty przechowania pojazdu przez rozsądny czas również powinny być pokryte przez ubezpieczyciela sprawcy, szczególnie jeśli warsztat jest zamknięty."
    },
    {
      question: "Ile czasu mam na zorganizowanie holowania?",
      answer: "Holowanie powinno nastąpić w rozsądnym czasie po wypadku. Nie ma sztywnego terminu, ale im szybciej, tym lepiej dla wszystkich stron."
    },
    {
      question: "Co zrobić, jeśli potrzebuję pilnego holowania?",
      answer: "W pilnych przypadkach możesz skorzystać z płatnego holowania, zachowując dokumenty do późniejszej refundacji od ubezpieczyciela sprawcy."
    },
    {
      question: "Czy holowanie z assistance można rozliczyć z OC sprawcy?",
      answer: "Tak, jeśli skorzystasz z holowania w ramach własnej polisy assistance, możesz później dochodzić kosztów od ubezpieczyciela sprawcy."
    },
    {
      question: "Jakie dokumenty są potrzebne do rozliczenia holowania?",
      answer: "Potrzebujesz: protokołu z miejsca zdarzenia, zlecenia holowania, potwierdzenia transportu, faktur oraz dokumentów finansowych."
    },
    {
      question: "Czy mogę holować pojazd do domu zamiast do warsztatu?",
      answer: "Tak, masz prawo wybrać miejsce docelowe holowania - może to być dom, garaż, parking lub warsztat. Ważne, żeby było to uzasadnione."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 px-3 py-1">
            <Truck className="w-4 h-4 mr-2" />
            Bezpłatne holowanie
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Bezpłatne holowanie z OC sprawcy
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Wszystko co musisz wiedzieć o prawie do bezpłatnego transportu pojazdu 
            po wypadku z winy drugiej strony
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 space-y-12">
            
            {/* Kiedy przysługuje */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Holowanie z OC sprawcy - kiedy przysługuje?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Bezpłatne holowanie</strong> to jedno z najważniejszych świadczeń, które może zapewnić 
                ubezpieczenie OC sprawcy wypadku. Jeśli stałeś się poszkodowanym w kolizji drogowej, 
                masz prawo do pokrycia kosztów transportu swojego pojazdu przez towarzystwo ubezpieczeniowe sprawcy.
              </p>
              
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Transport pojazdu z OC sprawcy obejmuje:
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Zabezpieczenie pojazdu na miejscu zdarzenia</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Transport do wskazanego przez poszkodowanego miejsca</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Przechowanie pojazdu (jeśli jest to konieczne)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Dokumentację całego procesu</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Warunki */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Warunki otrzymania świadczenia
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Bezpłatne holowanie</strong> z OC sprawcy otrzymasz, gdy spełnisz następujące warunki:
              </p>
              <div className="grid gap-4">
                {conditions.map((condition, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-gray-900">{condition}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Jak skorzystać */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Jak skorzystać z holowania z OC sprawcy?
              </h2>
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <Card key={index} className="border-l-4 border-l-blue-600">
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center">
                          {step.icon}
                        </div>
                        <div>
                          <CardTitle className="text-lg font-bold text-gray-900">
                            Krok {index + 1}: {step.title}
                          </CardTitle>
                          <CardDescription className="text-gray-600 mt-1">
                            {step.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </section>

            {/* Limity i ograniczenia */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Limity i ograniczenia holowania z OC sprawcy
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-orange-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <AlertTriangle className="w-6 h-6 text-orange-600 mr-2" />
                    Limity finansowe
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Maksymalna kwota zgodna z taryfą ubezpieczyciela</li>
                    <li>• Rozsądny koszt w stosunku do wartości pojazdu</li>
                    <li>• Ograniczenie dystansu holowania</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Clock className="w-6 h-6 text-red-600 mr-2" />
                    Ograniczenia czasowe
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• W rozsądnym czasie po wypadku</li>
                    <li>• Po uprzednim uzgodnieniu z ubezpieczycielem</li>
                    <li>• Z zachowaniem terminów zgłoszenia szkody</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Praktyczne porady */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Praktyczne porady dotyczące holowania z OC sprawcy
              </h2>
              <div className="space-y-6">
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Przed holowaniem</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Skontaktuj się z ubezpieczycielem sprawcy</li>
                    <li>• Uzgodnij miejsce docelowe</li>
                    <li>• Sprawdź reputację firmy holowniczej</li>
                    <li>• Udokumentuj stan pojazdu</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Podczas holowania</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Nadzoruj proces bezpłatnego holowania</li>
                    <li>• Sprawdź zabezpieczenie pojazdu</li>
                    <li>• Otrzymaj dokumenty transportu</li>
                    <li>• Potwierdź miejsce dostawy</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Po holowaniu</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Sprawdź stan pojazdu po transporcie</li>
                    <li>• Zachowaj wszystkie dokumenty</li>
                    <li>• Przekaż dokumentację ubezpieczycielowi</li>
                    <li>• Monitoruj proces likwidacji szkody</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Alternatywy */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Alternatywy dla holowania z OC sprawcy
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <Shield className="w-5 h-5 text-blue-600 mr-2" />
                      Holowanie w ramach assistance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Skorzystanie z holowania w ramach własnej polisy</li>
                      <li>• Późniejsze dochodzenie kosztów od sprawcy</li>
                      <li>• Uniknięcie oczekiwania na decyzję ubezpieczyciela</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <Truck className="w-5 h-5 text-green-600 mr-2" />
                      Holowanie komercyjne
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Skorzystanie z płatnego holowania</li>
                      <li>• Zachowanie dokumentów do refundacji</li>
                      <li>• Dochodzenie kosztów transportu pojazdu z OC</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
              <CardHeader>
                <CardTitle className="text-xl">Potrzebujesz holowania?</CardTitle>
                <CardDescription className="text-blue-100">
                  Skontaktuj się z nami - pomożemy w całym procesie
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">
                    <Phone className="w-4 h-4 mr-2" />
                    Zadzwoń teraz
                  </Button>
                  <Button variant="outline" className="w-full border-white text-white hover:bg-white/10">
                    <FileText className="w-4 h-4 mr-2" />
                    Bezpłatna konsultacja
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Powiązane usługi</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link 
                  to="/holowanie-po-wypadku-awarii-kolizji" 
                  className="flex items-center justify-between p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors"
                >
                  <span className="text-sm font-medium">Holowanie po wypadku</span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </Link>
                <Link 
                  to="/transport-pojazdow" 
                  className="flex items-center justify-between p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors"
                >
                  <span className="text-sm font-medium">Transport pojazdów</span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </Link>
                <Link 
                  to="/pomoc-drogowa" 
                  className="flex items-center justify-between p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors"
                >
                  <span className="text-sm font-medium">Pomoc drogowa 24/7</span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mb-16">
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
        </section>

        {/* Podsumowanie */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Podsumowanie</h2>
          <p className="text-blue-100 leading-relaxed mb-6">
            <strong>Bezpłatne holowanie</strong> z OC sprawcy to ważne świadczenie przysługujące poszkodowanym 
            w wypadkach drogowych. Pamiętaj o właściwej dokumentacji i terminowym zgłoszeniu potrzeby 
            holowania z OC sprawcy. W przypadku problemów nie wahaj się skorzystać z pomocy specjalistów 
            lub rzecznika ubezpieczonych.
          </p>
          <p className="text-blue-100 font-semibold">
            <strong>Transport pojazdu z OC sprawcy</strong> to prawo, a nie przysługa - 
            dbaj o jego właściwą realizację i nie pozwól na zaniżenie należnych Ci świadczeń.
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default BezplatneHolowanieZOCSprawcy;
