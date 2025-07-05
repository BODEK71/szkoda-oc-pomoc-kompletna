
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, ArrowRight, MapPin, Clock } from "lucide-react";

const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const fullText = "Centrum Likwidacji Szkód";
  
  // All images used on the website for slideshow
  const backgroundImages = [
    "/lovable-uploads/ed7a47ae-36e0-465d-ac4d-f9b660d03ffc.png",
    "/lovable-uploads/0e823a63-eccb-449c-849f-922c9794e9aa.png",
    "/lovable-uploads/250f3df5-0af2-4c94-b521-bf9d59babee1.png",
    "/lovable-uploads/5679ec86-072c-4128-b1f8-0dec36dd67a9.png",
    "/lovable-uploads/71edeeac-71be-4e75-ab8f-996c0158b06e.png",
    "/lovable-uploads/76305d0f-89ec-4769-aaba-307d63ecc85b.png",
    "/lovable-uploads/93ced69c-ab42-4978-ae9c-74d304614342.png",
    "/lovable-uploads/98c1a9a6-892d-403f-a83e-d61e11ade53e.png",
    "/lovable-uploads/a244758c-a742-4eab-a4e7-125d3d6649fd.png",
    "/lovable-uploads/c3fc47fd-bd5c-47cc-8f97-eee71fe44429.png"
  ];
  
  // Typewriter effect
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

  // Slideshow effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000); // Change image every 5 seconds
    
    return () => clearInterval(timer);
  }, [backgroundImages.length]);

  return (
    <section className="relative h-screen flex flex-col overflow-hidden">
      {/* Background Slideshow with Overlay */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-autoram-text/60 to-autoram-red/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8">
        {/* Badge */}
        <div className="mb-6">
          <Badge className="bg-autoram-gold text-black hover:bg-autoram-gold-dark font-semibold text-sm px-4 py-2 mb-8">
            🏢 CENTRUM LIKWIDACJI SZKÓD - WSZYSTKO W JEDNYM MIEJSCU
          </Badge>
          
          {/* Main Title with Typewriter Effect */}
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-3">
            <span className="text-white block mb-2">{currentText}</span>
            <span className="text-autoram-gold-light bg-gradient-to-r from-autoram-gold to-autoram-gold-light bg-clip-text text-transparent">
              Wszystko w jednym miejscu
            </span>
          </h1>
          
          <p className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-4xl mx-auto font-light mb-8">
            Jedyne miejsce, gdzie załatwisz <span className="text-autoram-gold font-semibold">wszystko po wypadku</span>. 
            Kompleksowa obsługa szkód, naprawy, auto zastępcze i formalności - wszystko pod jednym dachem.
          </p>

          {/* Cities Box */}
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-autoram-gold/20 shadow-lg max-w-2xl mx-auto mb-8">
            <p className="text-sm font-semibold text-white mb-2">Nasze Centra działają w:</p>
            <p className="text-sm text-white/90 leading-relaxed">
              Wolsztyn | Poznań | Zielona Góra | Nowy Tomyśl | Sława | Leszno | Głogów | Kościan | Szamotuły | Międzyrzecz
            </p>
          </div>

          {/* Key Benefits */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8 max-w-4xl mx-auto">
            {[
              "Centrum czynne 24/7",
              "Wszystko w jednym miejscu", 
              "Bezgotówkowa obsługa z OC",
              "Auto zastępcze od razu",
              "Specjaliści w każdym dziale",
              "Kompleksowa pomoc prawna"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-autoram-gold/20">
                <CheckCircle className="w-4 h-4 text-autoram-gold flex-shrink-0" />
                <span className="text-white font-medium text-sm">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="grid sm:grid-cols-3 gap-4 text-center mb-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2">
              <Clock className="w-4 h-4 text-autoram-gold animate-pulse" />
              <span className="text-white/90 font-medium text-sm">Centrum 24/7</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-3 h-3 bg-autoram-red rounded-full animate-pulse"></div>
              <span className="text-white/90 font-medium text-sm">Bezpłatna konsultacja</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-white/90 font-medium text-sm">Natychmiastowa pomoc</span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Buttons at bottom of image */}
      <div className="relative z-10 pb-8">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
          <Button 
            size="lg" 
            className="bg-autoram-red hover:bg-autoram-red-dark text-white text-xl px-10 py-7 shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 font-bold rounded-lg"
          >
            <Phone className="w-6 h-6 mr-3" />
            Centrum Pomocy: 123-456-789
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-8 py-6 border-2 border-autoram-gold text-autoram-gold hover:bg-autoram-gold hover:text-black font-bold rounded-lg backdrop-blur-sm bg-white/10 hover:scale-105 transition-all duration-300"
          >
            <MapPin className="w-5 h-5 mr-3" />
            Dojazd do Centrum
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
