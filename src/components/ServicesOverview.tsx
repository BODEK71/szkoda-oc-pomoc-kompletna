
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Car, Wrench, CreditCard, Truck, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesOverview = () => {
  const services = [
    {
      icon: <CreditCard className="w-12 h-12" />,
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
      icon: <Wrench className="w-12 h-12" />,
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
      icon: <Car className="w-12 h-12" />,
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
      icon: <Truck className="w-12 h-12" />,
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
    <section className="py-40 bg-autoram-white">
      <div className="max-w-8xl mx-auto px-8 sm:px-12 lg:px-16">
        {/* Section Header - Enhanced spacing and centering */}
        <div className="text-center mb-32 max-w-6xl mx-auto">
          <Badge className="bg-autoram-red text-white mb-12 font-semibold text-lg px-8 py-4 rounded-full">
            Nasze usługi
          </Badge>
          <h2 className="text-6xl lg:text-7xl font-bold text-autoram-text mb-12 leading-tight max-w-5xl mx-auto">
            Kompleksowa obsługa po wypadku
          </h2>
          <p className="text-3xl lg:text-4xl text-autoram-text-muted max-w-5xl mx-auto font-light leading-relaxed">
            Specjalizujemy się w obsłudze szkód z OC sprawcy. 
            <span className="text-autoram-gold-dark font-semibold block mt-4 text-2xl lg:text-3xl"> 
              Oferujemy pełen zakres usług
            </span> 
            <span className="block mt-2 text-xl lg:text-2xl">
              od zgłoszenia szkody po naprawę pojazdu
            </span>
          </p>
        </div>

        {/* Services Grid - Better spacing and layout */}
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 max-w-8xl mx-auto">
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
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-autoram-text/70 to-transparent"></div>
                {service.highlight && (
                  <Badge className="absolute top-10 left-10 bg-autoram-red text-white font-bold text-base px-6 py-3 rounded-full shadow-lg">
                    ⭐ SPECJALIZACJA
                  </Badge>
                )}
                <div className="absolute bottom-10 right-10">
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center text-white shadow-xl transform group-hover:scale-110 transition-transform duration-300 ${
                    service.highlight ? 'bg-autoram-red' : 'bg-autoram-gold'
                  }`}>
                    {service.icon}
                  </div>
                </div>
              </div>
              
              <CardHeader className="pb-10 bg-autoram-white p-12">
                <div className="space-y-6">
                  <Badge variant="outline" className="text-base border-2 border-autoram-gold text-autoram-gold-dark px-6 py-3 w-fit font-semibold">
                    {service.subtitle}
                  </Badge>
                  <CardTitle className="text-4xl font-bold text-autoram-text leading-tight">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-autoram-text-muted text-xl leading-relaxed">
                    {service.description}
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="pt-0 bg-autoram-white p-12">
                <div className="space-y-8 mb-12">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-6">
                      <CheckCircle className={`w-7 h-7 flex-shrink-0 ${
                        service.highlight ? 'text-autoram-red' : 'text-autoram-gold'
                      }`} />
                      <span className="text-autoram-text-muted font-medium text-xl">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link to={service.href}>
                  <Button 
                    className={`w-full group font-bold text-xl py-8 px-8 rounded-2xl transition-all duration-300 ${
                      service.highlight 
                        ? 'bg-autoram-red hover:bg-autoram-red-dark text-white shadow-xl hover:shadow-2xl' 
                        : 'bg-autoram-gold hover:bg-autoram-gold-dark text-black shadow-xl hover:shadow-2xl'
                    }`}
                  >
                    Dowiedz się więcej
                    <ArrowRight className="w-7 h-7 ml-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA - Enhanced spacing and design */}
        <div className="text-center mt-40">
          <div className="bg-gradient-to-br from-autoram-light to-autoram-gray rounded-3xl shadow-3xl p-20 max-w-7xl mx-auto border-3 border-autoram-red/20">
            <h3 className="text-5xl lg:text-6xl font-bold text-autoram-text mb-12 leading-tight max-w-5xl mx-auto">
              Potrzebujesz pomocy po wypadku?
            </h3>
            <p className="text-autoram-text-muted mb-16 text-3xl leading-relaxed max-w-5xl mx-auto">
              Skontaktuj się z nami już teraz. Oferujemy 
              <span className="text-autoram-gold-dark font-semibold"> bezpłatną konsultację</span> 
              <span className="block mt-2">i szybką wycenę szkody.</span>
            </p>
            <div className="flex flex-col lg:flex-row gap-10 justify-center max-w-4xl mx-auto">
              <Button size="lg" className="bg-autoram-gold hover:bg-autoram-gold-dark text-black font-bold text-2xl px-16 py-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <CreditCard className="w-8 h-8 mr-6" />
                Zgłoś szkodę online
              </Button>
              <Button variant="outline" size="lg" className="border-3 border-autoram-red text-autoram-red hover:bg-autoram-red hover:text-white font-bold text-2xl px-16 py-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <Car className="w-8 h-8 mr-6" />
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
