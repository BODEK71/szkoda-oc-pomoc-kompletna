
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Settings, Wrench, Cog, Star } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Przeglądy okresowe",
      description: "Kompleksowe przeglądy zgodnie z zaleceniami producenta"
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Serwis ogólny", 
      description: "Naprawy bieżące i wymiana części eksploatacyjnych"
    },
    {
      icon: <Cog className="w-6 h-6" />,
      title: "Diagnostyka komputerowa",
      description: "Precyzyjne wykrywanie usterek elektronicznych"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Serwis klimatyzacji",
      description: "Kompleksowa obsługa układów klimatyzacyjnych"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nasze usługi serwisowe
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kompleksowa obsługa techniczna wszystkich marek pojazdów
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 text-center">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
