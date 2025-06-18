
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

const ModernHero = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const fullText = "Obsługa szkody z OC sprawcy";
  
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

  const benefits = [
    "Bezgotówkowa naprawa z OC sprawcy",
    "Auto zastępcze bez limitu kilometrów",
    "Bezpośrednia likwidacja szkód (BLS)",
    "Holowanie i transport z OC sprawcy",
    "Kompleksowa pomoc poszkodowanym",
    "Wycena szkody przez rzeczoznawcę"
  ];

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
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

      {/* Main Content - positioned to fill most of the screen */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 lg:pt-24 pb-40">
        {/* Badge */}
        <div className="mb-6 animate-fade-in">
          <Badge className="bg-autoram-gold/20 border border-autoram-gold text-autoram-gold hover:bg-autoram-gold hover:text-black font-semibold text-base lg:text-lg px-4 lg:px-6 py-2 lg:py-3 backdrop-blur-sm">
            <Star className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
            KOMPLEKSOWA OBSŁUGA POWYPADKOWA
          </Badge>
        </div>

        {/* Main Title with Typewriter Effect */}
        <div className="mb-8 lg:mb-10">
          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 lg:mb-6">
            <span className="text-white block mb-2 lg:mb-4">{currentText}</span>
            <span className="text-autoram-gold-light bg-gradient-to-r from-autoram-gold to-autoram-gold-light bg-clip-text text-transparent">
              Bez stresu, bez kosztów
            </span>
          </h1>
          
          <p className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto font-light">
            Kompleksowa pomoc poszkodowanym w komunikacji. 
            <span className="text-autoram-gold font-semibold"> Bezgotówkowa naprawa, auto zastępcze i holowanie</span> 
            - wszystko z OC sprawcy.
          </p>
        </div>

        {/* Cities */}
        <div className="mb-8 lg:mb-10">
          <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-xl lg:rounded-2xl p-4 lg:p-6 max-w-4xl">
            <p className="text-autoram-gold font-semibold mb-2 lg:mb-3 text-sm lg:text-base">Działamy w 10 miastach:</p>
            <p className="text-white/90 leading-relaxed text-base lg:text-lg">
              Wolsztyn • Poznań • Zielona Góra • Nowy Tomyśl • Sława • Leszno • Głogów • Kościan • Szamotuły • Międzyrzecz
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center mb-8 lg:mb-12">
          <Button 
            size="lg" 
            className="bg-autoram-red hover:bg-autoram-red-dark text-white text-lg lg:text-xl px-8 lg:px-12 py-6 lg:py-8 shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 font-bold rounded-xl lg:rounded-2xl"
          >
            <Phone className="w-5 h-5 lg:w-6 lg:h-6 mr-3 lg:mr-4" />
            Zgłoś szkodę: 123-456-789
          </Button>
          
          <Link to="/obsługa-szkody-z-oc">
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg lg:text-xl px-8 lg:px-12 py-6 lg:py-8 border-2 border-autoram-gold text-autoram-gold hover:bg-autoram-gold hover:text-black font-bold rounded-xl lg:rounded-2xl backdrop-blur-sm bg-white/10 hover:scale-105 transition-all duration-300"
            >
              Dowiedz się więcej
              <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 ml-3 lg:ml-4" />
            </Button>
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="grid sm:grid-cols-3 gap-6 lg:gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="w-5 h-5 lg:w-6 lg:h-6 bg-autoram-gold rounded-full mx-auto mb-2 lg:mb-3 animate-pulse"></div>
            <span className="text-white/80 font-semibold text-base lg:text-lg">Dostępni 24/7</span>
          </div>
          <div className="text-center">
            <div className="w-5 h-5 lg:w-6 lg:h-6 bg-autoram-red rounded-full mx-auto mb-2 lg:mb-3 animate-pulse"></div>
            <span className="text-white/80 font-semibold text-base lg:text-lg">Bezpłatna wycena</span>
          </div>
          <div className="text-center">
            <div className="w-5 h-5 lg:w-6 lg:h-6 bg-green-500 rounded-full mx-auto mb-2 lg:mb-3 animate-pulse"></div>
            <span className="text-white/80 font-semibold text-base lg:text-lg">Szybka realizacja</span>
          </div>
        </div>
      </div>

      {/* Benefits as tabs/tiles at the bottom */}
      <div className="relative z-10 bg-gradient-to-r from-black/80 via-black/70 to-black/80 backdrop-blur-md border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-3 bg-white/10 backdrop-blur-md border border-white/20 p-3 lg:p-4 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-autoram-gold flex-shrink-0" />
                <span className="text-white font-medium text-xs lg:text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;
