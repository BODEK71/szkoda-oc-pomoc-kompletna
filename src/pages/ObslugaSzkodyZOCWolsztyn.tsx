
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, ArrowRight, FileText, Calculator, Car, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ObslugaSzkodyZOCWolsztyn = () => {
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
                  🏆 OBSŁUGA SZKÓD Z OC SPRAWCY - WOLSZTYN
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-blue-600">Obsługa szkody z OC</span>
                  <br />
                  <span className="text-gray-900">sprawcy Wolsztyn</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Kompleksowa obsługa szkód komunikacyjnych w Wolsztynie. 
                  Bezgotówkowa naprawa, auto zastępcze i pomoc drogowa - wszystko z OC sprawcy.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Bezpośrednia likwidacja szkód (BLS)",
                  "Wycena szkody przez rzeczoznawcę",
                  "Auto zastępcze z OC sprawcy",
                  "Holowanie i transport Wolsztyn"
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
                  Zgłoś szkodę Wolsztyn: 123-456-789
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                  Bezpłatna wycena
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/ed7a47ae-36e0-465d-ac4d-f9b660d03ffc.png"
                alt="Obsługa szkód z OC sprawcy Wolsztyn"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
                <p className="text-sm font-semibold text-gray-900">Obszar działania</p>
                <p className="text-3xl font-bold text-blue-600">Wolsztyn</p>
                <p className="text-xs text-gray-600">i okolice</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Wolsztyn */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Usługi w Wolsztynie
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pełen zakres usług związanych z obsługą szkód komunikacyjnych w Wolsztynie
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FileText className="w-8 h-8" />,
                title: "Likwidacja szkody z OC",
                description: "Profesjonalna likwidacja szkód z OC sprawcy w Wolsztynie",
                features: ["BLS - Bezpośrednia likwidacja", "Współpraca z ubezpieczalniami", "Szybka procedura"]
              },
              {
                icon: <Calculator className="w-8 h-8" />,
                title: "Wycena szkody Wolsztyn",
                description: "Rzeczoznawca majątkowy - wycena szkód powypadkowych",
                features: ["Kosztorysy napraw", "Wycena przez eksperta", "Dokumentacja fotograficzna"]
              },
              {
                icon: <Car className="w-8 h-8" />,
                title: "Auto zastępcze z OC",
                description: "Pojazdy zastępcze na czas naprawy w Wolsztynie",
                features: ["Bez limitu kilometrów", "Podstawienie pojazdu", "Rozliczenie z OC"]
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Kompleksowa obsługa",
                description: "Pełna opieka poszkodowanego w Wolsztynie",
                features: ["Wsparcie prawne", "Kontakt z ubezpieczalniami", "Pomoc 24/7"]
              }
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
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

      {/* Local Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Obsługa szkód z OC sprawcy w Wolsztynie
          </h2>
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="mb-6">
              Auto-Ram oferuje kompleksową obsługę szkód komunikacyjnych w Wolsztynie i okolicach. 
              Specjalizujemy się w bezgotówkowych naprawach rozliczanych bezpośrednio z ubezpieczeniem sprawcy wypadku.
            </p>
            <p className="mb-6">
              Nasze usługi w Wolsztynie obejmują: bezpośrednią likwidację szkód (BLS), 
              wycenę przez rzeczoznawcę, auto zastępcze bez limitu kilometrów oraz kompleksową pomoc prawną.
            </p>
            <p>
              Działamy na terenie całego Wolsztyna, zapewniając szybką interwencję i profesjonalną obsługę. 
              Zadzwoń 24/7: <strong>123-456-789</strong>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ObslugaSzkodyZOCWolsztyn;
