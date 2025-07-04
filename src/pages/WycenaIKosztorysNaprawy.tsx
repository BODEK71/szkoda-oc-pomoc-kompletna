
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, ArrowRight, Calculator, FileText, Clock, Car, Shield, Wrench } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BenefitsSection from "@/components/BenefitsSection";
import WhyChooseUs from "@/components/WhyChooseUs";

const WycenaIKosztorysNaprawy = () => {
  const services = [
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Wycena szkody powypadkowej",
      description: "Profesjonalna ocena wszystkich uszkodzeń pojazdu",
      features: ["Zgodność ze standardami", "Akceptacja ubezpieczycieli", "Szczegółowa dokumentacja"]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Kosztorys naprawy z OC sprawcy",
      description: "Kompleksowy kosztorys wszystkich niezbędnych napraw",
      features: ["Wszystkie części zamienne", "Robocizna i materiały", "Ukryte szkody"]
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Ocena uszkodzeń pojazdu",
      description: "Dokładna analiza widocznych i ukrytych szkód",
      features: ["Nowoczesne narzędzia", "Doświadczeni eksperci", "Pełna dokumentacja"]
    }
  ];

  const processSteps = [
    { step: "1", title: "Zgłoszenie", description: "Skontaktuj się z nami telefonicznie lub przez formularz" },
    { step: "2", title: "Oględziny", description: "Przeprowadzamy szczegółowe oględziny pojazdu" },
    { step: "3", title: "Ocena uszkodzeń", description: "Analizujemy wszystkie szkody i ich wpływ na pojazd" },
    { step: "4", title: "Kosztorys", description: "Przygotowujemy szczegółowy kosztorys naprawy z OC sprawcy" },
    { step: "5", title: "Dokumentacja", description: "Przekazujemy kompletną dokumentację z wyceny" }
  ];

  const faqItems = [
    {
      question: "Ile kosztuje wycena szkody powypadkowej?",
      answer: "Koszt wyceny zależy od zakresu uszkodzeń pojazdu. W większości przypadków koszt ten może być rozliczony z ubezpieczeniem sprawcy wypadku. Oferujemy bezpłatną wstępną konsultację."
    },
    {
      question: "Jak długo trwa przygotowanie kosztorysu naprawy?",
      answer: "Standardowo kosztorys naprawy z OC sprawcy przygotowujemy w ciągu 2-3 dni roboczych od momentu przeprowadzenia oględzin pojazdu. W pilnych przypadkach możliwa jest ekspresowa realizacja."
    },
    {
      question: "Czy wycena jest akceptowana przez ubezpieczycieli?",
      answer: "Tak, nasze wyceny są przygotowywane zgodnie z wymogami towarzystw ubezpieczeniowych i są przez nie akceptowane. Współpracujemy z największymi ubezpieczycielami w Polsce."
    },
    {
      question: "Co obejmuje ocena uszkodzeń pojazdu?",
      answer: "Ocena uszkodzeń pojazdu obejmuje analizę wszystkich elementów uszkodzonych w wypadku, w tym karoserii, mechaniki, elektroniki oraz wnętrza. Sprawdzamy również ukryte szkody, które mogą być niewidoczne na pierwszy rzut oka."
    },
    {
      question: "Czy mogę otrzymać kopię kosztorysu?",
      answer: "Oczywiście! Każdy klient otrzymuje pełną dokumentację wyceny, w tym szczegółowy kosztorys, zdjęcia uszkodzeń oraz opis przeprowadzonych czynności. Dokumentację przekazujemy w formie papierowej i elektronicznej."
    },
    {
      question: "Co jeśli ubezpieczyciel nie zgadza się z wyceną?",
      answer: "W przypadku niezgody ubezpieczyciela z naszą wyceną, możemy przeprowadzić dodatkową ekspertyzę lub negocjacje. Nasz zespół ma doświadczenie w rozwiązywaniu sporów z towarzystwami ubezpieczeniowymi."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 via-white to-teal-50 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-teal-100 text-teal-800">
                  <Calculator className="w-4 h-4 mr-2" />
                  WYCENA I KOSZTORYS
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-teal-600">Wycena i kosztorys</span>
                  <br />
                  <span className="text-gray-900">naprawy pojazdu</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Profesjonalna wycena szkody powypadkowej i szczegółowy kosztorys naprawy 
                  z OC sprawcy. Rzetelna ocena uszkodzeń pojazdu akceptowana przez ubezpieczycieli.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Akceptacja ubezpieczycieli",
                  "Szczegółowe kosztorysy",
                  "Szybka realizacja",
                  "Doświadczeni eksperci"
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
                  Zamów wycenę: 123-456-789
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-teal-200 text-teal-600 hover:bg-teal-50">
                  Bezpłatna konsultacja
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/0e823a63-eccb-449c-849f-922c9794e9aa.png"
                alt="Wycena i kosztorys naprawy pojazdu"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Profesjonalna wycena szkody powypadkowej
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Czy potrzebujesz rzetelnej wyceny szkody powypadkowej swojego pojazdu? 
              Specjalizujemy się w dokładnej ocenie uszkodzeń pojazdów po zdarzeniach drogowych.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Dlaczego warto wybrać nasze usługi?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mx-auto">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Kompleksowa obsługa</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Wycena szkody powypadkowej zgodna ze standardami branżowymi</li>
                <li>• Kosztorys naprawy z OC sprawcy uwzględniający wszystkie uszkodzenia</li>
                <li>• Szczegółowa ocena uszkodzeń pojazdu z wykorzystaniem nowoczesnych narzędzi</li>
              </ul>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white mx-auto">
                <Wrench className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Doświadczenie i profesjonalizm</h3>
              <p className="text-gray-600">
                Nasz zespół posiada wieloletnie doświadczenie w przygotowywaniu wycen powypadkowych. 
                Współpracujemy z największymi towarzystwami ubezpieczeniowymi w Polsce, 
                dzięki czemu znamy ich wymagania i procedury.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center text-white mx-auto">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Szybka realizacja</h3>
              <p className="text-gray-600">
                Rozumiemy, że po wypadku czas jest bardzo cenny. Dlatego staramy się wykonać 
                wycenę szkody powypadkowej w najkrótszym możliwym terminie, 
                nie tracąc przy tym na dokładności i rzetelności oceny.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Proces wyceny krok po kroku
            </h2>
            <p className="text-xl text-gray-600">
              Profesjonalny proces od zgłoszenia do przekazania dokumentacji
            </p>
          </div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div key={index} className="flex items-start space-x-6 p-6 bg-white rounded-xl shadow-sm border">
                <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Często zadawane pytania
            </h2>
            <p className="text-xl text-gray-600">
              Odpowiedzi na najczęściej zadawane pytania dotyczące wyceny i kosztorysów
            </p>
          </div>

          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border p-6">
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
            Potrzebujesz profesjonalnej wyceny szkody powypadkowej?
          </h2>
          <p className="text-xl mb-8 text-teal-100">
            Skontaktuj się z nami już dziś! Nasz zespół ekspertów jest gotowy pomóc Ci 
            w prawidłowym rozliczeniu szkody z ubezpieczeniem sprawcy wypadku.
          </p>
          <p className="text-teal-100 leading-relaxed mb-8">
            Gwarantujemy rzetelność, profesjonalizm i terminowość w każdej sprawie. 
            Twoja satysfakcja i sprawiedliwe odszkodowanie to nasz priorytet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Zadzwoń: 123-456-789
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              <Calculator className="w-5 h-5 mr-2" />
              Bezpłatna wycena
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WycenaIKosztorysNaprawy;
