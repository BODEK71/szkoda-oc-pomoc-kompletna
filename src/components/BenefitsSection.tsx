
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Clock, Award, Shield } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: CheckCircle,
      title: "Bezpłatna wycena",
      description: "Profesjonalna wycena szkody bez żadnych kosztów"
    },
    {
      icon: Users,
      title: "Doświadczenie",
      description: "Ponad 10 lat na rynku ubezpieczeniowym"
    },
    {
      icon: Clock,
      title: "Szybka realizacja",
      description: "Błyskawiczna obsługa i realizacja zleceń"
    },
    {
      icon: Award,
      title: "Jakość usług",
      description: "Najwyższa jakość świadczonych usług"
    }
  ];

  const stats = [
    { number: "98%", label: "zadowolonych klientów" },
    { number: "24h", label: "czas reakcji" },
    { number: "5000+", label: "obsłużonych szkód" },
    { number: "100%", label: "profesjonalizm" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Benefits Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="bg-white rounded-3xl shadow-2xl p-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="text-5xl lg:text-6xl font-bold text-red-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium uppercase tracking-wide text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
