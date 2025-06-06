
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-autoram-darker via-autoram-dark to-autoram-darker py-24">
      <div className="absolute inset-0 bg-gradient-to-r from-autoram-red/5 to-autoram-gold/5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge className="bg-autoram-gold text-black hover:bg-autoram-gold-dark font-bold">
                ⭐ SPECJALIZACJA: Obsługa szkód z OC sprawcy
              </Badge>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-autoram-red">Obsługa szkody</span>
                <br />
                <span className="text-white">z OC sprawcy</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Kompleksowa pomoc poszkodowanym w komunikacji. 
                <span className="text-autoram-gold font-semibold"> Bezgotówkowa naprawa, auto zastępcze i holowanie</span> - wszystko z OC sprawcy.
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
                <div key={index} className="flex items-center space-x-3 bg-autoram-dark/50 p-3 rounded-lg border border-autoram-red/20">
                  <CheckCircle className="w-5 h-5 text-autoram-gold flex-shrink-0" />
                  <span className="text-gray-200 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-autoram-red hover:bg-autoram-red-dark text-white text-lg px-8 py-6 shadow-xl">
                <Phone className="w-5 h-5 mr-2" />
                Zgłoś szkodę: 123-456-789
              </Button>
              <Link to="/obsługa-szkody-z-oc">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 w-full sm:w-auto border-autoram-gold text-autoram-gold hover:bg-autoram-gold hover:text-black">
                  Dowiedz się więcej
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 border-t border-autoram-red/30">
              <div className="flex items-center space-x-8 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-autoram-gold rounded-full animate-pulse"></div>
                  <span className="text-gray-300">Dostępni 24/7</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-autoram-red rounded-full animate-pulse"></div>
                  <span className="text-gray-300">Bezpłatna wycena</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">Szybka realizacja</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-autoram-red/30">
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
                alt="Obsługa szkód powypadkowych - laptop z dokumentacją"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-autoram-dark/80 via-transparent to-autoram-red/20"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-lg font-semibold">Digitalna obsługa szkód</p>
                <p className="text-sm text-autoram-gold">Nowoczesne podejście do likwidacji</p>
              </div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 bg-autoram-dark border border-autoram-gold rounded-lg shadow-xl p-4">
              <p className="text-sm font-semibold text-white">Czas obsługi</p>
              <p className="text-2xl font-bold text-autoram-gold">24h</p>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-autoram-dark border border-autoram-red rounded-lg shadow-xl p-4">
              <p className="text-sm font-semibold text-white">Zadowoleni klienci</p>
              <p className="text-2xl font-bold text-autoram-red">98%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
