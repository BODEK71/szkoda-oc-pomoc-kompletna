
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Shield, Users, Award, Phone } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Specjalizacja w OC sprawcy",
      description: "Skupiamy się wyłącznie na obsłudze szkód z ubezpieczenia sprawcy wypadku",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Dostępność 24/7",
      description: "Pomoc drogowa i zgłaszanie szkód dostępne przez całą dobę, 7 dni w tygodniu",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Bezgotówkowe rozliczenia",
      description: "Naprawy, auto zastępcze i holowanie bez Twojego udziału finansowego",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Doświadczona kadra",
      description: "Zespół ekspertów z wieloletnim doświadczeniem w branży ubezpieczeniowej",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certyfikowane usługi",
      description: "Współpracujemy z najlepszymi warsztatami i rzeczoznawcami w regionie",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Szybka realizacja",
      description: "Rozpoczęcie procesu obsługi szkody w ciągu 24 godzin od zgłoszenia",
      color: "bg-red-100 text-red-600"
    }
  ];

  const stats = [
    { number: "98%", label: "Zadowolonych klientów", description: "Wysoka ocena naszych usług" },
    { number: "24h", label: "Czas reakcji", description: "Szybka obsługa zgłoszeń" },
    { number: "5000+", label: "Obsłużonych szkód", description: "Doświadczenie w praktyce" },
    { number: "100%", label: "Bezgotówkowe", description: "Naprawy z OC sprawcy" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-800 mb-4">
            Dlaczego my?
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Centrum pomocy poszkodowanym w komunikacji
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kompleksowa obsługa od wypadku do naprawy. Zajmujemy się wszystkim, 
            abyś mógł spokojnie wrócić na drogę.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 mb-4">
                <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm font-semibold text-gray-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-600">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-gradient-to-br from-blue-50 to-blue-100">
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 rounded-2xl ${reason.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {reason.icon}
                </div>
                <CardTitle className="text-lg font-bold text-gray-900">
                  {reason.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-gray-600 leading-relaxed">
                  {reason.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Steps */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Jak przebiega obsługa szkody?
            </h3>
            <p className="text-gray-600">
              Prosty proces w 4 krokach - zajmiemy się wszystkim za Ciebie
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Zgłoś szkodę",
                description: "Zadzwoń lub wypełnij formularz online",
                icon: <Phone className="w-6 h-6" />
              },
              {
                step: "02", 
                title: "Wycena szkody",
                description: "Bezpłatna wycena uszkodzeń pojazdu",
                icon: <CheckCircle className="w-6 h-6" />
              },
              {
                step: "03",
                title: "Auto zastępcze",
                description: "Podstawienie pojazdu na czas naprawy",
                icon: <Users className="w-6 h-6" />
              },
              {
                step: "04",
                title: "Naprawa",
                description: "Bezgotówkowa naprawa z OC sprawcy",
                icon: <Award className="w-6 h-6" />
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                    {step.step}
                  </div>
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mx-auto -mt-12 mb-4 text-red-600">
                    {step.icon}
                  </div>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
