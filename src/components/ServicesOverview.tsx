
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
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=400&q=80",
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
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
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
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=400&q=80",
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
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80",
      href: "/pomoc-drogowa-z-oc"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-800 mb-4">
            Nasze usługi
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Kompleksowa obsługa po wypadku
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specjalizujemy się w obsłudze szkód z OC sprawcy. 
            Oferujemy pełen zakres usług - od zgłoszenia szkody po naprawę pojazdu.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-xl transition-all duration-300 overflow-hidden ${
                service.highlight ? 'ring-2 ring-blue-500 bg-gradient-to-br from-blue-50 to-white' : 'hover:shadow-lg'
              }`}
            >
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {service.highlight && (
                  <Badge className="absolute top-4 left-4 bg-blue-600 text-white">
                    ⭐ SPECJALIZACJA
                  </Badge>
                )}
                <div className="absolute bottom-4 right-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${
                    service.highlight ? 'bg-blue-600' : 'bg-gray-800'
                  }`}>
                    {service.icon}
                  </div>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {service.title}
                    </CardTitle>
                    <Badge variant="outline" className="mt-2 text-xs">
                      {service.subtitle}
                    </Badge>
                  </div>
                </div>
                <CardDescription className="text-gray-600 mt-2">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link to={service.href}>
                  <Button 
                    className={`w-full group ${
                      service.highlight 
                        ? 'bg-blue-600 hover:bg-blue-700' 
                        : 'bg-gray-800 hover:bg-gray-900'
                    }`}
                  >
                    Dowiedz się więcej
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto border-t-4 border-blue-600">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Potrzebujesz pomocy po wypadku?
            </h3>
            <p className="text-gray-600 mb-6">
              Skontaktuj się z nami już teraz. Oferujemy bezpłatną konsultację i szybką wycenę szkody.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <CreditCard className="w-5 h-5 mr-2" />
                Zgłoś szkodę online
              </Button>
              <Button variant="outline" size="lg">
                <Car className="w-5 h-5 mr-2" />
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
