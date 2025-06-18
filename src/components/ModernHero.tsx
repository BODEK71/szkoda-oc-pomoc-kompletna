
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

const ModernHero = () => {
  const [currentText, setCurrentText] = useState("");
  const fullText = "Obsługa szkody z OC sprawcy";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setCurrentText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/ed7a47ae-36e0-465d-ac4d-f9b660d03ffc.png"
          alt="Uszkodzony pojazd - obsługa szkód"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-autoram-text/60 to-autoram-red/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="mb-8 animate-fade-in">
          <Badge className="bg-autoram-gold/20 border border-autoram-gold text-autoram-gold hover:bg-autoram-gold hover:text-black font-semibold text-lg px-6 py-3 backdrop-blur-sm">
            <Star className="w-5 h-5 mr-2" />
            KOMPLEKSOWA OBSŁUGA POWYPADKOWA
          </Badge>
        </div>

        {/* Main Title with Typewriter Effect */}
        <div className="mb-12">
          <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-6">
            <span className="text-white block mb-4">{currentText}</span>
            <span className="text-autoram-gold-light bg-gradient-to-r from-autoram-gold to-autoram-gold-light bg-clip-text text-transparent">
              Bez stresu, bez kosztów
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto font-light">
            Kompleksowa pomoc poszkodowanym w komunikacji. 
            <span className="text-autoram-gold font-semibold"> Bezgotówkowa naprawa, auto zastępcze i holowanie</span> 
            - wszystko z OC sprawcy.
          </p>
        </div>

        {/* Cities */}
        <div className="mb-12">
          <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 max-w-4xl">
            <p className="text-autoram-gold font-semibold mb-3">Działamy w 10 miastach:</p>
            <p className="text-white/90 leading-relaxed text-lg">
              Wolsztyn • Poznań • Zielona Góra • Nowy Tomyśl • Sława • Leszno • Głogów • Kościan • Szamotuły • Międzyrzecz
            </p>
          </div>
        </div>

        {/* Key Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
          {[
            "Bezgotówkowa naprawa z OC sprawcy",
            "Auto zastępcze bez limitu kilometrów", 
            "Bezpośrednia likwidacja szkód (BLS)",
            "Holowanie i transport z OC sprawcy",
            "Kompleksowa pomoc poszkodowanym",
            "Wycena szkody przez rzeczoznawcę"
          ].map((benefit, index) => (
            <div 
              key={index} 
              className="flex items-center space-x-3 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CheckCircle className="w-6 h-6 text-autoram-gold flex-shrink-0" />
              <span className="text-white font-medium">{benefit}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-autoram-red hover:bg-autoram-red-dark text-white text-xl px-12 py-8 shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 font-bold rounded-2xl"
          >
            <Phone className="w-6 h-6 mr-4" />
            Zgłoś szkodę: 123-456-789
          </Button>
          
          <Link to="/obsługa-szkody-z-oc">
            <Button 
              variant="outline" 
              size="lg" 
              className="text-xl px-12 py-8 border-2 border-autoram-gold text-autoram-gold hover:bg-autoram-gold hover:text-black font-bold rounded-2xl backdrop-blur-sm bg-white/10 hover:scale-105 transition-all duration-300"
            >
              Dowiedz się więcej
              <ArrowRight className="w-6 h-6 ml-4" />
            </Button>
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="w-6 h-6 bg-autoram-gold rounded-full mx-auto mb-3 animate-pulse"></div>
            <span className="text-white/80 font-semibold text-lg">Dostępni 24/7</span>
          </div>
          <div className="text-center">
            <div className="w-6 h-6 bg-autoram-red rounded-full mx-auto mb-3 animate-pulse"></div>
            <span className="text-white/80 font-semibold text-lg">Bezpłatna wycena</span>
          </div>
          <div className="text-center">
            <div className="w-6 h-6 bg-green-500 rounded-full mx-auto mb-3 animate-pulse"></div>
            <span className="text-white/80 font-semibold text-lg">Szybka realizacja</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;
