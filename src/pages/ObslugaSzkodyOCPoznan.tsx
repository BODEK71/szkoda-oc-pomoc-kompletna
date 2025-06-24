
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, ArrowRight, MapPin, Clock, Car, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BenefitsSection from "@/components/BenefitsSection";
import WhyChooseUs from "@/components/WhyChooseUs";

const ObslugaSzkodyOCPoznan = () => {
  const localServices = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Obsługa szkody OC w Poznaniu",
      description: "Kompleksowa obsługa szkód z OC sprawcy"
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: "Auto zastępcze",
      description: "Pojazd zastępczy na czas naprawy"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Szybka realizacja",
      description: "Ekspresowa obsługa w Poznaniu"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 via-white to-amber-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-amber-100 text-amber-800">
                  📍 POZNAŃ
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-amber-600">Obsługa szkody OC</span>
                  <br />
                  <span className="text-gray-900">Poznań</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Kompleksowa obsługa szkód z OC sprawcy w Poznaniu. 
                  Pełne wsparcie od zgłoszenia do wypłaty odszkodowania.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Obsługa OC 24/7",
                  "Lokalni partnerzy",
                  "Szybka likwidacja",
                  "Auto zastępcze"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-8 py-4">
                  <Phone className="w-5 h-5 mr-2" />
                  Zadzwoń: 123-456-789
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-amber-200 text-amber-600 hover:bg-amber-50">
                  Zgłoś szkodę OC
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/250f3df5-0af2-4c94-b521-bf9d59babee1.png"
                alt="Obsługa szkody OC Poznań"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Local Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Obsługa szkody OC w Poznaniu
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {localServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 text-center">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
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
      <Footer />
    </div>
  );
};

export default ObslugaSzkodyOCPoznan;
