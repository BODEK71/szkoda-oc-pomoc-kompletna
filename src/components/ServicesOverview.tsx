
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Car, Wrench, CreditCard, Truck, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesOverview = () => {
  const services = [
    {
      icon: <CreditCard className="w-8 h-8 md:w-12 md:h-12" />,
      title: "Obsługa szkody z OC",
      subtitle: "GŁÓWNA SPECJALIZACJA",
      description: "Kompleksowa obsługa szkód komunikacyjnych z ubezpieczenia sprawcy",
      features: [
        "Bezpośrednia likwidacja szkód (BLS)",
        "Wycena i kosztorysowanie",
        "Zgłaszanie szkód",
        "Odszkodowania z OC sprawcy"
      ],
      image: "/lovable-uploads/93ced69c-ab42-4978-ae9c-74d304614342.png",
      href: "/obsługa-szkody-z-oc",
      highlight: true
    },
    {
      icon: <Wrench className="w-8 h-8 md:w-12 md:h-12" />,
      title: "Naprawy z OC sprawcy",
      subtitle: "BEZGOTÓWKOWE NAPRAWY",
      description: "Profesjonalne naprawy powypadkowe rozliczane z OC sprawcy",
      features: [
        "Naprawa bezgotówkowa",
        "Blacharstwo i lakiernictwo",
        "Mechanika powypadkowa",
        "Usługi specjalistyczne"
      ],
      image: "/lovable-uploads/98c1a9a6-892d-403f-a83e-d61e11ade53e.png",
      href: "/naprawy-z-oc"
    },
    {
      icon: <Car className="w-8 h-8 md:w-12 md:h-12" />,
      title: "Auto zastępcze z OC",
      subtitle: "BEZ LIMITU KILOMETRÓW",
      description: "Pojazdy zastępcze na czas naprawy z ubezpieczenia sprawcy",
      features: [
        "Wynajem z OC sprawcy",
        "Pojazdy na czas naprawy",
        "Bez limitu kilometrów",
        "Dla firm i osób prywatnych"
      ],
      image: "/lovable-uploads/76305d0f-89ec-4769-aaba-307d63ecc85b.png",
      href: "/auto-zastepcze-z-oc"
    },
    {
      icon: <Truck className="w-8 h-8 md:w-12 md:h-12" />,
      title: "Pomoc drogowa z OC",
      subtitle: "HOLOWANIE 24/7",
      description: "Transport i holowanie pojazdów rozliczane z OC sprawcy",
      features: [
        "Holowanie 24/7",
        "Transport z OC sprawcy",
        "Usługi lawetą",
        "Usunięcie z miejsca wypadku"
      ],
      image: "/lovable-uploads/250f3df5-0af2-4c94-b521-bf9d59babee1.png",
      href: "/pomoc-drogowa-z-oc"
    }
  ];

  return (
    <section className="py-20 md:py-40 bg-autoram-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        {/* Section Header - Responsive spacing and text sizes */}
        <div className="text-center mb-16 md:mb-32 max-w-6xl mx-auto">
          <Badge className="bg-autoram-red text-white mb-6 md:mb-12 font-semibold text-sm md:text-lg px-4 md:px-8 py-2 md:py-4 rounded-full">
            Nasze usługi
          </Badge>
          <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-autoram-text mb-6 md:mb-12 leading-tight max-w-5xl mx-auto">
            Kompleksowa obsługa po wypadku
          </h2>
          <p className="text-lg md:text-2xl lg:text-3xl xl:text-4xl text-autoram-text-muted max-w-5xl mx-auto font-light leading-relaxed">
            Specjalizujemy się w obsłudze szkód z OC sprawcy. 
            <span className="text-autoram-gold-dark font-semibold block mt-2 md:mt-4 text-base md:text-xl lg:text-2xl xl:text-3xl"> 
              Oferujemy pełen zakres usług
            </span> 
            <span className="block mt-1 md:mt-2 text-sm md:text-lg lg:text-xl xl:text-2xl">
              od zgłoszenia szkody po naprawę pojazdu
            </span>
          </p>
        </div>

        {/* Services Grid - Better mobile spacing */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 xl:gap-20 max-w-8xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-4xl transition-all duration-700 overflow-hidden border-3 h-full transform hover:-translate-y-2 ${
                service.highlight 
                  ? 'border-autoram-red bg-gradient-to-br from-autoram-white to-autoram-light shadow-3xl shadow-autoram-red/15 scale-[1.02]' 
                  : 'border-autoram-gray bg-autoram-light hover:border-autoram-gold hover:shadow-2xl'
              }`}
            >
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 md:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-autoram-text/70 to-transparent"></div>
                {service.highlight && (
                  <Badge className="absolute top-4 md:top-10 left-4 md:left-10 bg-autoram-red text-white font-bold text-xs md:text-base px-3 md:px-6 py-2 md:py-3 rounded-full shadow-lg">
                    ⭐ SPECJALIZACJA
                  </Badge>
                )}
                <div className="absolute bottom-4 md:bottom-10 right-4 md:right-10">
                  <div className={`w-12 h-12 md:w-20 md:h-20 rounded-full flex items-center justify-center text-white shadow-xl transform group-hover:scale-110 transition-transform duration-300 ${
                    service.highlight ? 'bg-autoram-red' : 'bg-autoram-gold'
                  }`}>
                    {service.icon}
                  </div>
                </div>
              </div>
              
              <CardHeader className="pb-6 md:pb-10 bg-autoram-white p-6 md:p-12">
                <div className="space-y-3 md:space-y-6">
                  <Badge variant="outline" className="text-xs md:text-base border-2 border-autoram-gold text-autoram-gold-dark px-3 md:px-6 py-2 md:py-3 w-fit font-semibold">
                    {service.subtitle}
                  </Badge>
                  <CardTitle className="text-2xl md:text-3xl lg:text-4xl font-bold text-autoram-text leading-tight">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-autoram-text-muted text-base md:text-lg lg:text-xl leading-relaxed">
                    {service.description}
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="pt-0 bg-autoram-white p-6 md:p-12">
                <div className="space-y-4 md:space-y-8 mb-8 md:mb-12">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3 md:space-x-6">
                      <CheckCircle className={`w-5 h-5 md:w-7 md:h-7 flex-shrink-0 ${
                        service.highlight ? 'text-autoram-red' : 'text-autoram-gold'
                      }`} />
                      <span className="text-autoram-text-muted font-medium text-sm md:text-lg lg:text-xl">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link to={service.href}>
                  <Button 
                    className={`w-full group font-bold text-base md:text-lg lg:text-xl py-6 md:py-8 px-6 md:px-8 rounded-2xl transition-all duration-300 ${
                      service.highlight 
                        ? 'bg-autoram-red hover:bg-autoram-red-dark text-white shadow-xl hover:shadow-2xl' 
                        : 'bg-autoram-gold hover:bg-autoram-gold-dark text-black shadow-xl hover:shadow-2xl'
                    }`}
                  >
                    Dowiedz się więcej
                    <ArrowRight className="w-5 h-5 md:w-7 md:h-7 ml-3 md:ml-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA - Mobile responsive */}
        <div className="text-center mt-20 md:mt-40">
          <div className="bg-gradient-to-br from-autoram-light to-autoram-gray rounded-2xl md:rounded-3xl shadow-3xl p-8 md:p-20 max-w-7xl mx-auto border-3 border-autoram-red/20">
            <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-autoram-text mb-6 md:mb-12 leading-tight max-w-5xl mx-auto">
              Potrzebujesz pomocy po wypadku?
            </h3>
            <p className="text-autoram-text-muted mb-8 md:mb-16 text-lg md:text-2xl lg:text-3xl leading-relaxed max-w-5xl mx-auto">
              Skontaktuj się z nami już teraz. Oferujemy 
              <span className="text-autoram-gold-dark font-semibold"> bezpłatną konsultację</span> 
              <span className="block mt-1 md:mt-2">i szybką wycenę szkody.</span>
            </p>
            <div className="flex flex-col gap-6 md:gap-10 justify-center max-w-4xl mx-auto">
              <Button size="lg" className="bg-autoram-gold hover:bg-autoram-gold-dark text-black font-bold text-lg md:text-xl lg:text-2xl px-8 md:px-16 py-8 md:py-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <CreditCard className="w-6 h-6 md:w-8 md:h-8 mr-4 md:mr-6" />
                Zgłoś szkodę online
              </Button>
              <Button variant="outline" size="lg" className="border-3 border-autoram-red text-autoram-red hover:bg-autoram-red hover:text-white font-bold text-lg md:text-xl lg:text-2xl px-8 md:px-16 py-8 md:py-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <Car className="w-6 h-6 md:w-8 md:h-8 mr-4 md:mr-6" />
                Zamów auto zastępcze
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
