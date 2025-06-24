
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, ArrowRight, Building, Users, Award, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BenefitsSection from "@/components/BenefitsSection";
import WhyChooseUs from "@/components/WhyChooseUs";

const CentrumNaprawPowypadkowych = () => {
  const centers = [
    {
      icon: <Building className="w-6 h-6" />,
      title: "Centrum Poznań",
      description: "Główne centrum napraw w Poznaniu",
      address: "ul. Przykładowa 123, Poznań"
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Centrum Wolsztyn",
      description: "Centrum napraw w Wolsztynie",
      address: "ul. Główna 45, Wolsztyn"
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Centrum Zielona Góra",
      description: "Punkt napraw w Zielonej Górze",
      address: "ul. Nowa 78, Zielona Góra"
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Centrum Leszno",
      description: "Centrum napraw w Lesznie",
      address: "ul. Centralna 90, Leszno"
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
                  🏢 CENTRUM NAPRAW
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-green-600">Centrum</span>
                  <br />
                  <span className="text-gray-900">napraw powypadkowych</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Sieć nowoczesnych centrów napraw powypadkowych w całej Wielkopolsce. 
                  Profesjonalne usługi w najwyższej jakości.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Certyfikowane centra napraw",
                  "Nowoczesny sprzęt i technologie",
                  "Wykwalifikowana kadra",
                  "Gwarancja na wszystkie usługi"
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
                  Kontakt: 123-456-789
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-green-200 text-green-600 hover:bg-green-50">
                  Znajdź centrum
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/98c1a9a6-892d-403f-a83e-d61e11ade53e.png"
                alt="Centrum napraw powypadkowych"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Centers Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nasze centra napraw
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profesjonalne centra napraw powypadkowych w kluczowych lokalizacjach
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {centers.map((center, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                    {center.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 text-center">
                    {center.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-center">
                    {center.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center space-x-2 text-sm text-gray-600 justify-center">
                    <MapPin className="w-4 h-4" />
                    <span>{center.address}</span>
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
            Wybierz najbliższe centrum napraw
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Skontaktuj się z nami i umów wizytę w najbliższym centrum!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Zadzwoń: 123-456-789
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              <MapPin className="w-5 h-5 mr-2" />
              Lokalizacje
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CentrumNaprawPowypadkowych;
