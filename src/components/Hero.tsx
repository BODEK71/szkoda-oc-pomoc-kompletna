
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, ArrowRight, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-autoram-white via-autoram-light to-autoram-gray py-20 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-r from-autoram-red-light/10 to-autoram-gold-light/10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Centered Header Section */}
        <div className="text-center mb-16">
          <Badge className="bg-autoram-gold text-black hover:bg-autoram-gold-dark font-semibold text-sm px-4 py-2 mb-8">
            🏢 CENTRUM LIKWIDACJI SZKÓD - WSZYSTKO W JEDNYM MIEJSCU
          </Badge>
          
          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8">
            <span className="text-autoram-red">Centrum Likwidacji</span>
            <br />
            <span className="text-autoram-text">Szkód</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-autoram-text-muted leading-relaxed font-light mb-8 max-w-4xl mx-auto">
            Jedyne miejsce, gdzie załatwisz <span className="text-autoram-gold-dark font-semibold">wszystko po wypadku</span>. 
            Kompleksowa obsługa szkód, naprawy, auto zastępcze i formalności - wszystko pod jednym dachem.
          </p>
          
          {/* Cities Box - Centered */}
          <div className="bg-autoram-white p-6 rounded-xl border-2 border-autoram-gold/20 shadow-lg max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-autoram-text mb-3">Nasze Centra działają w:</p>
            <p className="text-sm text-autoram-text-muted leading-relaxed">
              Wolsztyn | Poznań | Zielona Góra | Nowy Tomyśl | Sława | Leszno | Głogów | Kościan | Szamotuły | Międzyrzecz
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            <div className="space-y-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-autoram-text">
                Dlaczego nasze <span className="text-autoram-red">Centrum</span>?
              </h2>
            </div>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Wszystko w jednym miejscu",
                "Centrum czynne 24/7",
                "Bezgotówkowa obsługa z OC",
                "Auto zastępcze od razu",
                "Specjaliści w każdym dziale",
                "Kompleksowa pomoc prawna"
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
                Centrum Pomocy: 123-456-789
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 w-full sm:w-auto border-2 border-autoram-gold text-autoram-gold-dark hover:bg-autoram-gold hover:text-black font-semibold">
                <MapPin className="w-5 h-5 mr-3" />
                Dojazd do Centrum
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-autoram-red/20">
              <div className="grid sm:grid-cols-3 gap-6 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start space-x-3">
                  <Clock className="w-5 h-5 text-autoram-gold animate-pulse" />
                  <span className="text-autoram-text-muted font-medium">Centrum 24/7</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start space-x-3">
                  <div className="w-4 h-4 bg-autoram-red rounded-full animate-pulse"></div>
                  <span className="text-autoram-text-muted font-medium">Bezpłatna konsultacja</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start space-x-3">
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-autoram-text-muted font-medium">Natychmiastowa pomoc</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-autoram-red/20">
              <img
                src="/lovable-uploads/ed7a47ae-36e0-465d-ac4d-f9b660d03ffc.png"
                alt="Centrum Likwidacji Szkód - kompleksowa obsługa powypadkowa"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-autoram-text/50 via-transparent to-autoram-red/10"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-xl font-semibold mb-2">Centrum Likwidacji Szkód</p>
                <p className="text-sm text-autoram-gold-light">Wszystko pod jednym dachem</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
