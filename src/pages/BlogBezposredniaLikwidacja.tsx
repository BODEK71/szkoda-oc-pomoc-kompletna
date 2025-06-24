
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, ArrowRight, FileText, Shield, Clock, Users, AlertTriangle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BenefitsSection from "@/components/BenefitsSection";
import WhyChooseUs from "@/components/WhyChooseUs";

const BlogBezposredniaLikwidacja = () => {
  const blsAdvantages = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Szybsza likwidacja",
      description: "Średnio o 30% szybsza niż tradycyjna procedura"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Mniej formalności",
      description: "Ograniczona ilość dokumentów do załatwienia"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Jeden kontakt",
      description: "Wszystko załatwiasz z jednym ubezpieczycielem"
    }
  ];

  const blsRequirements = [
    "Szkoda nie przekracza 20 000 zł",
    "Brak osób poszkodowanych",
    "Sprawca ma ubezpieczenie OC",
    "Oba pojazdy są ubezpieczone w Polsce",
    "Szkoda powstała na terytorium RP"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-white to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-indigo-100 text-indigo-800">
                  📚 PRZEWODNIK
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-indigo-600">Bezpośrednia Likwidacja</span>
                  <br />
                  <span className="text-gray-900">Szkód (BLS)</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Kompletny przewodnik po Bezpośredniej Likwidacji Szkód. 
                  Dowiedz się, jak działa BLS, jakie są jej zalety i kiedy można z niej skorzystać.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Szybsza likwidacja szkód",
                  "Mniej dokumentów",
                  "Jeden ubezpieczyciel",
                  "Ograniczenia BLS"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-lg px-8 py-4">
                  <Phone className="w-5 h-5 mr-2" />
                  Zadzwoń: 123-456-789
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-indigo-200 text-indigo-600 hover:bg-indigo-50">
                  Bezpłatna konsultacja
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/98c1a9a6-892d-403f-a83e-d61e11ade53e.png"
                alt="Bezpośrednia Likwidacja Szkód BLS"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is BLS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Czym jest Bezpośrednia Likwidacja Szkód?
            </h2>
            <p className="text-xl text-gray-600">
              BLS to uproszczona procedura likwidacji szkód komunikacyjnych
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Definicja BLS</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Bezpośrednia Likwidacja Szkód (BLS) to system, w którym poszkodowany zgłasza szkodę 
                bezpośrednio do własnego ubezpieczyciela, zamiast do ubezpieczyciela sprawcy wypadku. 
                Dzięki temu procedura jest znacznie prostsza i szybsza.
              </p>
              
              <div className="bg-indigo-50 rounded-xl p-6 mb-6">
                <h4 className="text-lg font-semibold text-indigo-900 mb-3">Kluczowe informacje:</h4>
                <ul className="space-y-2 text-indigo-800">
                  <li>• Wprowadzono w Polsce w 2009 roku</li>
                  <li>• Dotyczy szkód do 20 000 zł</li>
                  <li>• Tylko szkody w pojazdach (bez osób poszkodowanych)</li>
                  <li>• Obowiązkowe dla ubezpieczycieli</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLS Advantages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Zalety Bezpośredniej Likwidacji Szkód
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Poznaj wszystkie korzyści płynące z procedury BLS
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blsAdvantages.map((advantage, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 text-center">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                    {advantage.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {advantage.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {advantage.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* BLS Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Warunki stosowania BLS
            </h2>
            <p className="text-xl text-gray-600">
              Sprawdź, czy Twoja szkoda kwalifikuje się do BLS
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-start space-x-4 mb-6">
              <AlertTriangle className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Wymagania BLS</h3>
                <p className="text-gray-700 mb-6">
                  Aby skorzystać z Bezpośredniej Likwidacji Szkód, muszą być spełnione wszystkie poniższe warunki:
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {blsRequirements.map((requirement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{requirement}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-amber-50 rounded-xl">
              <h4 className="text-lg font-semibold text-amber-900 mb-3">Ważne!</h4>
              <p className="text-amber-800">
                Jeśli którykolwiek z warunków nie jest spełniony, szkoda musi być likwidowana 
                w tradycyjny sposób przez ubezpieczyciela sprawcy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BenefitsSection />
      <WhyChooseUs />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Masz pytania o BLS?
          </h2>
          <p className="text-xl mb-8 text-indigo-100">
            Skontaktuj się z nami, aby dowiedzieć się więcej o Bezpośredniej Likwidacji Szkód. 
            Pomoże Ci określić, czy Twoja szkoda kwalifikuje się do tej procedury.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Zadzwoń: 123-456-789
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              <FileText className="w-5 h-5 mr-2" />
              Bezpłatna konsultacja BLS
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogBezposredniaLikwidacja;
