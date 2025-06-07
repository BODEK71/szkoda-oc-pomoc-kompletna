
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Car, Wrench, CreditCard, Truck, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesOverview = () => {
  const services = [
    {
      icon: <CreditCard className="w-8 h-8" />,
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
      icon: <Wrench className="w-8 h-8" />,
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
      icon: <Car className="w-8 h-8" />,
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
      icon: <Truck className="w-8 h-8" />,
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
    <section className="py-24 bg-autoram-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <Badge className="bg-autoram-red text-white mb-6 font-semibold text-sm px-4 py-2">
            Nasze usługi
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-autoram-text mb-6">
            Kompleksowa obsługa po wypadku
          </h2>
          <p className="text-xl lg:text-2xl text-autoram-text-muted max-w-4xl mx-auto font-light leading-relaxed">
            Specjalizujemy się w obsłudze szkód z OC sprawcy. 
            <span className="text-autoram-gold-dark font-semibold"> Oferujemy pełen zakres usług</span> - od zgłoszenia szkody po naprawę pojazdu.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 ${
                service.highlight 
                  ? 'border-autoram-red bg-gradient-to-br from-autoram-white to-autoram-light shadow-2xl shadow-autoram-red/5' 
                  : 'border-autoram-gray bg-autoram-light hover:border-autoram-gold'
              }`}
            >
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-autoram-text/60 to-transparent"></div>
                {service.highlight && (
                  <Badge className="absolute top-6 left-6 bg-autoram-red text-white font-semibold">
                    ⭐ SPECJALIZACJA
                  </Badge>
                )}
                <div className="absolute bottom-6 right-6">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg ${
                    service.highlight ? 'bg-autoram-red' : 'bg-autoram-gold'
                  }`}>
                    {service.icon}
                  </div>
                </div>
              </div>
              
              <CardHeader className="pb-6 bg-autoram-white p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl font-bold text-autoram-text mb-3">
                      {service.title}
                    </CardTitle>
                    <Badge variant="outline" className="text-xs border-autoram-gold text-autoram-gold-dark px-3 py-1">
                      {service.subtitle}
                    </Badge>
                  </div>
                </div>
                <CardDescription className="text-autoram-text-muted mt-4 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0 bg-autoram-white p-8">
                <div className="space-y-4 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-4">
                      <CheckCircle className={`w-5 h-5 flex-shrink-0 ${
                        service.highlight ? 'text-autoram-red' : 'text-autoram-gold'
                      }`} />
                      <span className="text-autoram-text-muted font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link to={service.href}>
                  <Button 
                    className={`w-full group font-semibold text-base py-6 ${
                      service.highlight 
                        ? 'bg-autoram-red hover:bg-autoram-red-dark text-white' 
                        : 'bg-autoram-gold hover:bg-autoram-gold-dark text-black'
                    }`}
                  >
                    Dowiedz się więcej
                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-br from-autoram-light to-autoram-gray rounded-3xl shadow-2xl p-12 max-w-5xl mx-auto border-2 border-autoram-red/20">
            <h3 className="text-3xl lg:text-4xl font-bold text-autoram-text mb-6">
              Potrzebujesz pomocy po wypadku?
            </h3>
            <p className="text-autoram-text-muted mb-10 text-xl leading-relaxed max-w-3xl mx-auto">
              Skontaktuj się z nami już teraz. Oferujemy <span className="text-autoram-gold-dark font-semibold">bezpłatną konsultację</span> i szybką wycenę szkody.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-autoram-gold hover:bg-autoram-gold-dark text-black font-semibold text-lg px-10 py-6">
                <CreditCard className="w-5 h-5 mr-3" />
                Zgłoś szkodę online
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-autoram-red text-autoram-red hover:bg-autoram-red hover:text-white font-semibold text-lg px-10 py-6">
                <Car className="w-5 h-5 mr-3" />
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
