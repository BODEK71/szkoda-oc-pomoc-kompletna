
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  Phone, 
  ArrowRight, 
  Car, 
  Clock, 
  Shield, 
  FileText,
  AlertTriangle,
  Users,
  Calculator
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SamochodZastepczyZOCSprawcy = () => {
  const conditions = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Udowodniona wina sprawcy",
      description: "Jednoznaczne ustalenie odpowiedzialności za wypadek"
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: "Rzeczywista potrzeba naprawy",
      description: "Uszkodzenia uniemożliwiające bezpieczne użytkowanie"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Uzasadniona konieczność",
      description: "Wykazanie potrzeby korzystania z pojazdu"
    }
  ];

  const procedureSteps = [
    {
      step: "1",
      title: "Zgłoszenie szkody",
      description: "Niezwłoczny kontakt z ubezpieczycielem sprawcy",
      icon: <Phone className="w-8 h-8" />
    },
    {
      step: "2", 
      title: "Ekspertyza pojazdu",
      description: "Ocena uszkodzeń przez rzeczoznawcę",
      icon: <FileText className="w-8 h-8" />
    },
    {
      step: "3",
      title: "Wybór wypożyczalni", 
      description: "Samodzielny wybór lub firma współpracująca",
      icon: <Car className="w-8 h-8" />
    },
    {
      step: "4",
      title: "Podpisanie umowy",
      description: "Sprawdzenie warunków najmu i limitów",
      icon: <CheckCircle className="w-8 h-8" />
    }
  ];

  const coveredCosts = [
    "Dzienną stawkę za wynajem samochodu",
    "Podstawowe ubezpieczenie AC/OC pojazdu",
    "Paliwo w uzgodnionych limitach",
    "Koszty podstawowego wyposażenia"
  ];

  const commonMistakes = [
    "Odkładanie zgłoszenia szkody",
    "Akceptacja pierwszej oferty bez sprawdzenia",
    "Podpisywanie niezrozumiałych dokumentów", 
    "Brak dokumentowania kosztów wypadku"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800">
                  🚗 TWOJE PRAWO
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-blue-600">Samochód zastępczy</span>
                  <br />
                  <span className="text-gray-900">z OC sprawcy</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Twoje prawo do mobilności po wypadku. Sprawca lub jego ubezpieczyciel 
                  ma obowiązek pokryć koszty zastępczego środka transportu.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Prawo do samochodu zastępczego",
                  "Pokrycie kosztów przez OC sprawcy",
                  "Pomoc w załatwieniu formalności",
                  "Wsparcie prawne w sporach"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
                  <Phone className="w-5 h-5 mr-2" />
                  Pomoc prawna: 123-456-789
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-blue-200 text-blue-600 hover:bg-blue-50">
                  Darmowa konsultacja
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/76305d0f-89ec-4769-aaba-307d63ecc85b.png"
                alt="Samochód zastępczy z OC sprawcy"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Conditions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Kiedy przysługuje Ci samochód zastępczy?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Podstawowe warunki otrzymania samochodu zastępczego z OC sprawcy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {conditions.map((condition, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                    {condition.icon}
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {condition.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {condition.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Procedure Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Procedura otrzymania samochodu zastępczego
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Krok po kroku do uzyskania zastępczego środka transportu
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {procedureSteps.map((step, index) => (
              <Card key={index} className="relative group hover:shadow-xl transition-all duration-300">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                
                <CardHeader className="text-center pt-8 pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-4 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">
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

      {/* Costs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Co pokrywa ubezpieczenie OC sprawcy?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Ubezpieczenie odpowiedzialności cywilnej sprawcy pokrywa podstawowe koszty samochodu zastępczego.
              </p>
              
              <div className="space-y-4">
                {coveredCosts.map((cost, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{cost}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-yellow-800 font-medium">Uwaga:</p>
                    <p className="text-sm text-yellow-700">
                      Dodatkowe usługi jak GPS, fotelik dziecięcy czy rozszerzone ubezpieczenie 
                      mogą wymagać dopłaty z własnej kieszeni.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/c3fc47fd-bd5c-47cc-8f97-eee71fe44429.png"
                alt="Koszty samochodu zastępczego"
                className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Najczęstsze błędy do uniknięcia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unikaj tych częstych pomyłek przy dochodzeniu samochodu zastępczego
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {commonMistakes.map((mistake, index) => (
              <Card key={index} className="border-red-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Błąd #{index + 1}</h3>
                      <p className="text-gray-600">{mistake}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Potrzebujesz pomocy prawnej?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Skontaktuj się z naszymi ekspertami, którzy pomogą Ci skutecznie 
            dochodzić swoich praw i otrzymać należne odszkodowanie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
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

export default SamochodZastepczyZOCSprawcy;
