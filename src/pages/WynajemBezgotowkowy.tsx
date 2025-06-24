
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, ArrowRight, Car, CreditCard, Clock, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BenefitsSection from "@/components/BenefitsSection";
import WhyChooseUs from "@/components/WhyChooseUs";

const WynajemBezgotowkowy = () => {
  const carTypes = [
    {
      icon: <Car className="w-8 h-8" />,
      title: "Samochody osobowe",
      description: "Kompaktowe i średnie pojazdy na codzienne potrzeby",
      features: ["Ekonomiczne w eksploatacji", "Komfortowe wnętrze", "Automatyczna skrzynia"]
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Samochody premium",
      description: "Luksusowe pojazdy dla wymagających klientów",
      features: ["Najwyższa jakość", "Bogate wyposażenie", "Prestiż i komfort"]
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
                  🚗 WYNAJEM BEZGOTÓWKOWY
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-green-600">Wynajem</span>
                  <br />
                  <span className="text-gray-900">bezgotówkowy</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Samochód zastępczy bez opłat z Twojej strony. 
                  Rozliczamy wynajem bezpośrednio z ubezpieczycielem sprawcy.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Bez kosztów z Twojej strony",
                  "Szybkie dostarczenie auta",
                  "Pełne ubezpieczenie",
                  "Rozliczenie z OC sprawcy"
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
                  Zadzwoń: 123-456-789
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-green-200 text-green-600 hover:bg-green-50">
                  Zamów auto
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/ed7a47ae-36e0-465d-ac4d-f9b660d03ffc.png"
                alt="Wynajem bezgotówkowy"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Car Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Dostępne pojazdy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Szeroka gama samochodów dostępnych w wynajmie bezgotówkowym
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {carTypes.map((carType, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                    {carType.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {carType.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {carType.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    {carType.features.map((feature, featureIndex) => (
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

      <BenefitsSection />
      <WhyChooseUs />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Potrzebujesz samochodu zastępczego?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Zapewnimy Ci pojazd bez dodatkowych kosztów - rozliczymy wszystko z ubezpieczycielem!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Zadzwoń: 123-456-789
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              <CreditCard className="w-5 h-5 mr-2" />
              Zamów bezgotówkowo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WynajemBezgotowkowy;
