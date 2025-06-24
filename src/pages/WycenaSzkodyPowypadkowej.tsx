
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, ArrowRight, Calculator, Car, FileText, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BenefitsSection from "@/components/BenefitsSection";
import WhyChooseUs from "@/components/WhyChooseUs";

const WycenaSzkodyPowypadkowej = () => {
  const valuationTypes = [
    {
      icon: <Car className="w-8 h-8" />,
      title: "Wycena kosztów naprawy",
      description: "Szczegółowy kosztorys wszystkich napraw",
      features: ["Części zamienne", "Robocizna", "Lakierowanie", "Kalibracja systemów"]
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Wycena utraty wartości",
      description: "Ustalenie spadku wartości pojazdu",
      features: ["Analiza rynkowa", "Wiek pojazdu", "Przebieg", "Stan techniczny"]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Wycena szkody całkowitej",
      description: "Ocena w przypadku zniszczenia pojazdu",
      features: ["Wartość pojazdu", "Koszty ratownictwa", "Opłaty dodatkowe", "Wartość pozostałości"]
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Wycena kosztów zastępczych",
      description: "Koszty pojazdu na czas naprawy",
      features: ["Wynajem auta", "Koszty transportu", "Parking", "Dodatkowe wydatki"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-800">
                  📊 WYCENA SZKÓD
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-green-600">Wycena szkody</span>
                  <br />
                  <span className="text-gray-900">powypadkowej</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Profesjonalna i szczegółowa wycena szkód powypadkowych. 
                  Zapewniamy rzetelną ocenę wszystkich kosztów związanych z wypadkiem.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Certyfikowani rzeczoznawcy",
                  "Wycena w 24h",
                  "Szczegółowe kosztorysy",
                  "Obsługa ubezpieczycieli"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4">
                  <Phone className="w-5 h-5 mr-2" />
                  Zamów wycenę: 123-456-789
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-green-200 text-green-600 hover:bg-green-50">
                  Bezpłatna konsultacja
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/0e823a63-eccb-449c-849f-922c9794e9aa.png"
                alt="Wycena szkody powypadkowej"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Valuation Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Rodzaje wyceny szkód
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kompleksowa ocena wszystkich aspektów szkody powypadkowej
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {valuationTypes.map((type, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {type.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                        {type.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        {type.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 pl-20">
                  <div className="space-y-2">
                    {type.features.map((feature, featureIndex) => (
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

      <BenefitsSection />
      <WhyChooseUs />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Potrzebujesz profesjonalnej wyceny szkody?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Nasi certyfikowani rzeczoznawcy przeprowadzą szczegółową wycenę Twojej szkody. 
            Zapewniamy rzetelną ocenę wszystkich kosztów.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Zadzwoń: 123-456-789
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              <Calculator className="w-5 h-5 mr-2" />
              Wycena online
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WycenaSzkodyPowypadkowej;
