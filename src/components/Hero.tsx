
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-autoram-white via-autoram-light to-autoram-gray py-20 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-r from-autoram-red-light/10 to-autoram-gold-light/10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            <div className="space-y-8">
              <Badge className="bg-autoram-gold text-black hover:bg-autoram-gold-dark font-semibold text-sm px-4 py-2">
                ⭐ OBSŁUGA SZKODY Z OC SPRAWCY - TWÓJ PARTNER PO WYPADKU
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-autoram-red">Obsługa szkody</span>
                <br />
                <span className="text-autoram-text">z OC sprawcy</span>
              </h1>
              
              <div className="bg-autoram-white p-6 rounded-xl border-2 border-autoram-gold/20 shadow-lg">
                <p className="text-sm font-semibold text-autoram-text mb-3">Działamy w:</p>
                <p className="text-sm text-autoram-text-muted leading-relaxed">
                  Wolsztyn | Poznań | Zielona Góra | Nowy Tomyśl | Sława | Leszno | Głogów | Kościan | Szamotuły | Międzyrzecz
                </p>
              </div>
              
              <p className="text-xl lg:text-2xl text-autoram-text-muted leading-relaxed font-light">
                Kompleksowa pomoc poszkodowanym w komunikacji. 
                <span className="text-autoram-gold-dark font-semibold"> Bezgotówkowa naprawa, auto zastępcze i holowanie</span> - wszystko z OC sprawcy.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Bezgotówkowa naprawa z OC sprawcy",
                "Auto zastępcze bez limitu kilometrów",
                "Bezpośrednia likwidacja szkód (BLS)",
                "Holowanie i transport z OC sprawcy",
                "Kompleksowa pomoc poszkodowanym",
                "Wycena szkody przez rzeczoznawcę"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 bg-autoram-white p-4 rounded-xl border border-autoram-red/10 shadow-sm hover:shadow-md transition-shadow">
                  <CheckCircle className="w-5 h-5 text-autoram-gold-dark flex-shrink-0" />
                  <span className="text-autoram-text font-medium text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Button size="lg" className="bg-autoram-red hover:bg-autoram-red-dark text-white text-lg px-8 py-6 shadow-2xl hover:shadow-xl transition-shadow font-semibold">
                <Phone className="w-5 h-5 mr-3" />
                Zgłoś szkodę: 123-456-789
              </Button>
              <Link to="/obsługa-szkody-z-oc">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 w-full sm:w-auto border-2 border-autoram-gold text-autoram-gold-dark hover:bg-autoram-gold hover:text-black font-semibold">
                  Dowiedz się więcej
                  <ArrowRight className="w-5 h-5 ml-3" />
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-autoram-red/20">
              <div className="grid sm:grid-cols-3 gap-6 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start space-x-3">
                  <div className="w-4 h-4 bg-autoram-gold rounded-full animate-pulse"></div>
                  <span className="text-autoram-text-muted font-medium">Dostępni 24/7</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start space-x-3">
                  <div className="w-4 h-4 bg-autoram-red rounded-full animate-pulse"></div>
                  <span className="text-autoram-text-muted font-medium">Bezpłatna wycena</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start space-x-3">
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-autoram-text-muted font-medium">Szybka realizacja</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-autoram-red/20">
              <img
                src="/lovable-uploads/ed7a47ae-36e0-465d-ac4d-f9b660d03ffc.png"
                alt="Obsługa szkód powypadkowych - uszkodzony pojazd"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-autoram-text/50 via-transparent to-autoram-red/10"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-xl font-semibold mb-2">Profesjonalna obsługa szkód</p>
                <p className="text-sm text-autoram-gold-light">Kompleksowe rozwiązania powypadkowe</p>
              </div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-6 -right-6 bg-autoram-white border-2 border-autoram-gold rounded-xl shadow-2xl p-6">
              <p className="text-sm font-semibold text-autoram-text mb-1">Czas obsługi</p>
              <p className="text-3xl font-bold text-autoram-gold">24h</p>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-autoram-white border-2 border-autoram-red rounded-xl shadow-2xl p-6">
              <p className="text-sm font-semibold text-autoram-text mb-1">Zadowoleni klienci</p>
              <p className="text-3xl font-bold text-autoram-red">98%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
