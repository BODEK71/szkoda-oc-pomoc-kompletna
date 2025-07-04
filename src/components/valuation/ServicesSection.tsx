
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Calculator, FileText, Car } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Wycena szkody powypadkowej",
      description: "Profesjonalna ocena wszystkich uszkodzeń pojazdu",
      features: ["Zgodność ze standardami", "Akceptacja ubezpieczycieli", "Szczegółowa dokumentacja"]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Kosztorys naprawy z OC sprawcy",
      description: "Kompleksowy kosztorys wszystkich niezbędnych napraw",
      features: ["Wszystkie części zamienne", "Robocizna i materiały", "Ukryte szkody"]
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Ocena uszkodzeń pojazdu",
      description: "Dokładna analiza widocznych i ukrytych szkód",
      features: ["Nowoczesne narzędzia", "Doświadczeni eksperci", "Pełna dokumentacja"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Profesjonalna wycena szkody powypadkowej
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Czy potrzebujesz rzetelnej wyceny szkody powypadkowej swojego pojazdu? 
            Specjalizujemy się w dokładnej ocenie uszkodzeń pojazdów po zdarzeniach drogowych.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
