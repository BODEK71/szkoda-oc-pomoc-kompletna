
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Car, Wrench, FileCheck, ArrowRight } from "lucide-react";

const HowCenterWorksSection = () => {
  const steps = [
    {
      icon: <Phone className="w-8 h-8" />,
      step: "1",
      title: "Zadzwoń do Centrum",
      description: "Jeden telefon i wszystko się zaczyna. Nasz koordynator przyjmuje zgłoszenie i organizuje pomoc.",
      details: "Tel: +48 506 066 525 (24/7)"
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Holowanie do Centrum",
      step: "2",
      description: "Nasz laweta przywozi uszkodzony pojazd do Centrum, a Ty otrzymujesz auto zastępcze.",
      details: "Bezpłatnie z OC sprawcy"
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Ocena w Centrum",
      step: "3",
      description: "Rzeczoznawca w naszym Centrum wycenia szkodę i przygotowuje dokumentację dla ubezpieczyciela.",
      details: "Profesjonalna wycena"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Naprawa w Centrum",
      step: "4",
      description: "Warsztat w Centrum naprawia pojazd, a Ty odbierasz go gotowy do jazdy.",
      details: "Gwarancja na naprawę"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Jak działa nasze <span className="text-autoram-red">Centrum</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prosty proces w 4 krokach - od wypadku do odebrania naprawionego auta
          </p>
        </div>

        <div className="relative">
          {/* Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="group hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    {/* Step Number */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-8 h-8 bg-autoram-red text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {step.step}
                      </div>
                    </div>
                    
                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-autoram-red to-autoram-red-dark rounded-2xl flex items-center justify-center text-white mx-auto mb-6 mt-4 group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="bg-autoram-gold/10 rounded-lg p-3">
                      <p className="text-sm font-semibold text-autoram-red">
                        {step.details}
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Arrow (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-autoram-gold" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-autoram-red/10 to-autoram-gold/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Gotowy na start?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Jeden telefon wystarczy, żeby uruchomić cały proces w naszym Centrum
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+48506066525" className="inline-flex items-center justify-center px-8 py-4 bg-autoram-red text-white font-semibold rounded-lg hover:bg-autoram-red-dark transition-colors">
                <Phone className="w-5 h-5 mr-2" />
                Zadzwoń teraz: +48 506 066 525
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowCenterWorksSection;
