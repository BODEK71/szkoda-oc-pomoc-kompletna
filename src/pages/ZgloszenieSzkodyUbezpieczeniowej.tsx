
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

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-orange-100 text-orange-800">
                  📋 ZGŁOSZENIE SZKODY
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-orange-600">Zgłoszenie szkody</span>
                  <br />
                  <span className="text-gray-900">ubezpieczeniowej</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Profesjonalne wsparcie w zgłaszaniu szkód ubezpieczeniowych. 
                  Zajmiemy się całą procedurą - od dokumentacji po wypłatę odszkodowania.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Szybkie zgłoszenie 24/7",
                  "Pomoc w dokumentacji",
                  "Monitoring sprawy",
                  "Maksymalne odszkodowanie"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
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

            <div className="relative">
              <img
                src="/lovable-uploads/a244758c-a742-4eab-a4e7-125d3d6649fd.png"
                alt="Zgłoszenie szkody ubezpieczeniowej"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
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
