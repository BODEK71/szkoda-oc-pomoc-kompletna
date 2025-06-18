
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Car, Wrench, CreditCard, Truck, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const ModernServicesOverview = () => {
  const services = [
    {
      icon: Shield,
      title: "Kompleksowa obsługa szkód",
      description: "Pełny zakres usług związanych z obsługą szkód komunikacyjnych z OC sprawcy",
      features: ["Bezpośrednia likwidacja szkód", "Wsparcie w kontakcie z ubezpieczycielem", "Profesjonalna dokumentacja"],
      link: "/obsługa-szkody-z-oc",
      gradient: "from-autoram-red/20 to-autoram-red-dark/20",
      hoverGradient: "hover:from-autoram-red/30 hover:to-autoram-red-dark/30"
    },
    {
      icon: Wrench,
      title: "Naprawy powypadkowe",
      description: "Profesjonalne naprawy pojazdów z pełną gwarancją jakości",
      features: ["Naprawy blacharske i lakiernicze", "Mechanika powypadkowa", "Gwarancja na wykonane prace"],
      link: "/naprawy-z-oc",
      gradient: "from-autoram-gold/20 to-autoram-gold-dark/20",
      hoverGradient: "hover:from-autoram-gold/30 hover:to-autoram-gold-dark/30"
    },
    {
      icon: Car,
      title: "Auto zastępcze",
      description: "Pojazd zastępczy bez limitu kilometrów na czas naprawy",
      features: ["Bez limitu kilometrów", "Różne kategorie pojazdów", "Dostawa pod wskazany adres"],
      link: "/auto-zastepcze-z-oc",
      gradient: "from-blue-500/20 to-blue-600/20",
      hoverGradient: "hover:from-blue-500/30 hover:to-blue-600/30"
    },
    {
      icon: Truck,
      title: "Pomoc drogowa 24/7",
      description: "Całodobowa pomoc drogowa i holowanie pojazdów",
      features: ["Dostępni 24/7", "Holowanie na lawecie", "Transport specjalistyczny"],
      link: "/pomoc-drogowa-z-oc",
      gradient: "from-green-500/20 to-green-600/20",
      hoverGradient: "hover:from-green-500/30 hover:to-green-600/30"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-autoram-light/30 to-transparent rounded-full transform rotate-12"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-autoram-red/5 to-transparent rounded-full transform -rotate-12"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-autoram-text mb-8">
            Nasze <span className="text-autoram-red">usługi</span>
          </h2>
          <p className="text-xl text-autoram-text-muted max-w-3xl mx-auto leading-relaxed">
            Oferujemy kompleksową obsługę powypadkową - od zgłoszenia szkody, przez naprawę, 
            aż po odbiór gotowego pojazdu. Wszystko z OC sprawcy.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`group relative overflow-hidden border-0 bg-gradient-to-br ${service.gradient} ${service.hoverGradient} backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/60 group-hover:from-white/90 group-hover:to-white/70 transition-all duration-500"></div>
              
              <CardHeader className="relative z-10 pb-4">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-4 bg-gradient-to-br from-autoram-red to-autoram-red-dark rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-autoram-text group-hover:text-autoram-red transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </div>
                </div>
                <CardDescription className="text-lg text-autoram-text-muted leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-autoram-gold rounded-full"></div>
                      <span className="text-autoram-text font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to={service.link}>
                  <Button 
                    variant="outline"
                    className="w-full border-2 border-autoram-red text-autoram-red hover:bg-autoram-red hover:text-white font-semibold py-6 text-lg group-hover:scale-105 transition-all duration-300"
                  >
                    Dowiedz się więcej
                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-autoram-red to-autoram-red-dark rounded-3xl p-12 text-white">
          <Clock className="w-16 h-16 mx-auto mb-6 text-autoram-gold" />
          <h3 className="text-3xl font-bold mb-4">Potrzebujesz pomocy już teraz?</h3>
          <p className="text-xl mb-8 text-white/90">Zadzwoń na naszą infolinię - jesteśmy dostępni 24/7</p>
          <Button 
            size="lg"
            className="bg-autoram-gold hover:bg-autoram-gold-dark text-black font-bold text-xl px-12 py-6 hover:scale-105 transition-all duration-300"
          >
            <Phone className="w-6 h-6 mr-3" />
            123-456-789
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ModernServicesOverview;
