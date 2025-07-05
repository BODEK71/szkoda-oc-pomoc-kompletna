
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 pt-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-blue-100 text-blue-800">
                🔧 SERWIS
              </Badge>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                <span className="text-blue-600">Przeglądy</span>
                <br />
                <span className="text-gray-900">i serwis ogólny</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Kompleksowa obsługa techniczna pojazdów. 
                Zapewniamy bezpieczną i niezawodną eksploatację Twojego samochodu.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Przeglądy techniczne",
                "Diagnostyka komputerowa",
                "Serwis klimatyzacji",
                "Gwarancja jakości"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
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
                Umów przegląd
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <img
              src="/lovable-uploads/5679ec86-072c-4128-b1f8-0dec36dd67a9.png"
              alt="Przeglądy i serwis ogólny"
              className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
