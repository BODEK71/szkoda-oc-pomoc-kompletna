
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, ArrowRight, CreditCard, Shield, Clock, Wrench } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BenefitsSection from "@/components/BenefitsSection";
import WhyChooseUs from "@/components/WhyChooseUs";

const NaprawyBezgotowkowe = () => {
  const benefits = [
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Bez Twojego udziału finansowego",
      description: "Nie płacisz nic z własnej kieszeni - wszystko rozliczamy z ubezpieczycielem sprawcy"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Pełna gwarancja",
      description: "Gwarancja na wykonane naprawy oraz użyte części zamienne"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Szybka realizacja",
      description: "Sprawne załatwienie formalności i szybki rozpoczęcie naprawy"
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Sprawdzone warsztaty",
      description: "Współpracujemy tylko z certyfikowanymi warsztatami"
    }
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
                  💳 BEZGOTÓWKOWE
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-blue-600">Naprawy</span>
                  <br />
                  <span className="text-gray-900">bezgotówkowe</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Napraw swój samochód bez wydawania własnych pieniędzy. 
                  Rozliczamy wszystko bezpośrednio z ubezpieczycielem sprawcy wypadku.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Bez kosztów z Twojej strony",
                  "Rozliczenie z OC sprawcy",
                  "Gwarancja na naprawy",
                  "Sprawdzone warsztaty"
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
                  Zadzwoń: 123-456-789
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-blue-200 text-blue-600 hover:bg-blue-50">
                  Umów naprawę
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/98c1a9a6-892d-403f-a83e-d61e11ade53e.png"
                alt="Naprawy bezgotówkowe"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Zalety napraw bezgotówkowych
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Poznaj korzyści z wyboru napraw bezgotówkowych
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 text-center">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {benefit.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {benefit.description}
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Chcesz naprawić auto bez płacenia?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Skontaktuj się z nami już dziś i załatwimy wszystko za Ciebie!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Zadzwoń: 123-456-789
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              <CreditCard className="w-5 h-5 mr-2" />
              Bezpłatna wycena
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NaprawyBezgotowkowe;
