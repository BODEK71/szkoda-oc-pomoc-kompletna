
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

      {/* Main Content - optimized for 14-17" monitors */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-32">
        {/* Badge */}
        <div className="mb-4 animate-fade-in">
          <Badge className="bg-autoram-gold/20 border border-autoram-gold text-autoram-gold hover:bg-autoram-gold hover:text-black font-semibold text-sm px-4 py-2 backdrop-blur-sm">
            <Star className="w-4 h-4 mr-2" />
            KOMPLEKSOWA OBSŁUGA POWYPADKOWA
          </Badge>
        </div>

        {/* Main Title with Typewriter Effect - reduced size */}
        <div className="mb-6">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-3">
            <span className="text-white block mb-2">{currentText}</span>
            <span className="text-autoram-gold-light bg-gradient-to-r from-autoram-gold to-autoram-gold-light bg-clip-text text-transparent">
              Bez stresu, bez kosztów
            </span>
          </h1>
          
          <p className="text-base lg:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto font-light">
            Kompleksowa pomoc poszkodowanym w komunikacji. 
            <span className="text-autoram-gold font-semibold"> Bezgotówkowa naprawa, auto zastępcze i holowanie</span> 
            - wszystko z OC sprawcy.
          </p>
        </div>

        {/* Cities - reduced size */}
        <div className="mb-6">
          <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 max-w-3xl">
            <p className="text-autoram-gold font-semibold mb-2 text-sm">Działamy w 10 miastach:</p>
            <p className="text-white/90 leading-relaxed text-sm lg:text-base">
              Wolsztyn • Poznań • Zielona Góra • Nowy Tomyśl • Sława • Leszno • Głogów • Kościan • Szamotuły • Międzyrzecz
            </p>
          </div>
        </div>

        {/* CTA Buttons - reduced size */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button 
            size="lg" 
            className="bg-autoram-red hover:bg-autoram-red-dark text-white text-base px-6 py-4 shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 font-bold rounded-lg"
          >
            <Phone className="w-4 h-4 mr-2" />
            Zgłoś szkodę: 123-456-789
          </Button>
          
          <Link to="/obsługa-szkody-z-oc">
            <Button 
              variant="outline" 
              size="lg" 
              className="text-base px-6 py-4 border-2 border-autoram-gold text-autoram-gold hover:bg-autoram-gold hover:text-black font-bold rounded-lg backdrop-blur-sm bg-white/10 hover:scale-105 transition-all duration-300"
            >
              Dowiedz się więcej
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        {/* Trust Indicators - reduced size */}
        <div className="grid sm:grid-cols-3 gap-4 max-w-xl mx-auto">
          <div className="text-center">
            <div className="w-4 h-4 bg-autoram-gold rounded-full mx-auto mb-2 animate-pulse"></div>
            <span className="text-white/80 font-semibold text-sm">Dostępni 24/7</span>
          </div>
          <div className="text-center">
            <div className="w-4 h-4 bg-autoram-red rounded-full mx-auto mb-2 animate-pulse"></div>
            <span className="text-white/80 font-semibold text-sm">Bezpłatna wycena</span>
          </div>
          <div className="text-center">
            <div className="w-4 h-4 bg-green-500 rounded-full mx-auto mb-2 animate-pulse"></div>
            <span className="text-white/80 font-semibold text-sm">Szybka realizacja</span>
          </div>
        </div>
      </div>

      {/* Benefits as tabs/tiles at the bottom - adjusted height */}
      <div className="relative z-10 bg-gradient-to-r from-black/80 via-black/70 to-black/80 backdrop-blur-md border-t border-white/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="grid grid-cols-6 gap-2">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center justify-center text-center bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 aspect-square"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="w-4 h-4 text-autoram-gold flex-shrink-0 mb-1" />
                <span className="text-white font-medium text-xs leading-tight">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;
