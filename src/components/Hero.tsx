
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                ✅ Specjalizacja: Obsługa szkód z OC sprawcy
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="text-blue-600">Obsługa szkody</span>
                <br />
                <span className="text-gray-900">z OC sprawcy</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Kompleksowa pomoc poszkodowanym w komunikacji. 
                Bezgotówkowa naprawa, auto zastępcze i holowanie - wszystko z OC sprawcy.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Bezgotówkowa naprawa z OC sprawcy",
                "Auto zastępcze bez limitu kilometrów",
                "Bezpośrednia likwidacja szkód (BLS)",
                "Holowanie i transport z OC sprawcy"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
                <Phone className="w-5 h-5 mr-2" />
                Zgłoś szkodę: 123-456-789
              </Button>
              <Link to="/obsługa-szkody-z-oc">
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 w-full sm:w-auto">
                  Dowiedz się więcej
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 border-t border-gray-200">
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Dostępni 24/7</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span>Bezpłatna wycena</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span>Szybka realizacja</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
                alt="Obsługa szkód powypadkowych - laptop z dokumentacją"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-lg font-semibold">Digitalna obsługa szkód</p>
                <p className="text-sm opacity-90">Nowoczesne podejście do likwidacji</p>
              </div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 border-l-4 border-green-500">
              <p className="text-sm font-semibold text-gray-900">Czas obsługi</p>
              <p className="text-2xl font-bold text-green-600">24h</p>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 border-l-4 border-blue-500">
              <p className="text-sm font-semibold text-gray-900">Zadowoleni klienci</p>
              <p className="text-2xl font-bold text-blue-600">98%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
