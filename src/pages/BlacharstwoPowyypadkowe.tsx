
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, ArrowRight, Hammer, Shield, Settings, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BenefitsSection from "@/components/BenefitsSection";
import WhyChooseUs from "@/components/WhyChooseUs";

const BlacharstwoPowyypadkowe = () => {
  const services = [
    {
      icon: <Hammer className="w-6 h-6" />,
      title: "Prostowanie karoserii",
      description: "Profesjonalne usuwanie wgnieceń i deformacji"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Wymiana elementów",
      description: "Wymiana uszkodzonych części karoserii"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Spawanie karoserii",
      description: "Naprawy spawalnicze elementów nośnych"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Finishing i wykończenie",
      description: "Przygotowanie do lakierowania"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-50 via-white to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-yellow-100 text-yellow-800">
                  🔨 BLACHARSTWO
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-yellow-600">Blacharstwo</span>
                  <br />
                  <span className="text-gray-900">powypadkowe</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Profesjonalne usługi blacharskie po wypadkach. 
                  Przywracamy Twojemu samochodowi pierwotny kształt.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Prostowanie wgnieceń",
                  "Wymiana elementów karoserii",
                  "Spawanie profesjonalne",
                  "Przygotowanie do lakierowania"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-lg px-8 py-4">
                  <Phone className="w-5 h-5 mr-2" />
                  Zadzwoń: 123-456-789
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-yellow-200 text-yellow-600 hover:bg-yellow-50">
                  Wycena naprawy
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/5679ec86-072c-4128-b1f8-0dec36dd67a9.png"
                alt="Blacharstwo powypadkowe"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nasze usługi blacharskie
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kompleksowe naprawy karoserii po wypadkach
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 text-center">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <BenefitsSection />
      <WhyChooseUs />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-yellow-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Potrzebujesz naprawy blacharskiej?
          </h2>
          <p className="text-xl mb-8 text-yellow-100">
            Skontaktuj się z nami - naprawimy Twój samochód profesjonalnie!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-yellow-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Zadzwoń: 123-456-789
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              <Hammer className="w-5 h-5 mr-2" />
              Umów wizytę
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlacharstwoPowyypadkowe;
