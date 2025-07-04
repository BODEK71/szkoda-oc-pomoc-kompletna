
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, ArrowRight, Calculator } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-teal-50 via-white to-teal-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-teal-100 text-teal-800">
                <Calculator className="w-4 h-4 mr-2" />
                WYCENA I KOSZTORYS
              </Badge>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                <span className="text-teal-600">Wycena i kosztorys</span>
                <br />
                <span className="text-gray-900">naprawy pojazdu</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Profesjonalna wycena szkody powypadkowej i szczegółowy kosztorys naprawy 
                z OC sprawcy. Rzetelna ocena uszkodzeń pojazdu akceptowana przez ubezpieczycieli.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Akceptacja ubezpieczycieli",
                "Szczegółowe kosztorysy",
                "Szybka realizacja",
                "Doświadczeni eksperci"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-lg px-8 py-4">
                <Phone className="w-5 h-5 mr-2" />
                Zamów wycenę: 123-456-789
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-teal-200 text-teal-600 hover:bg-teal-50">
                Bezpłatna konsultacja
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <img
              src="/lovable-uploads/0e823a63-eccb-449c-849f-922c9794e9aa.png"
              alt="Wycena i kosztorys naprawy pojazdu"
              className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
