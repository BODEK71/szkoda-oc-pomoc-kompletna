
import { CheckCircle } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    "Bezgotówkowa naprawa z OC sprawcy", 
    "Auto zastępcze bez limitu kilometrów",
    "Bezpośrednia likwidacja szkód (BLS)",
    "Holowanie i transport z OC sprawcy",
    "Kompleksowa pomoc poszkodowanym",
    "Wycena szkody przez rzeczoznawcę"
  ];

  const cities = [
    "Wolsztyn", "Poznań", "Zielona Góra", "Nowy Tomyśl", "Sława", 
    "Leszno", "Głogów", "Kościan", "Szamotuły"
  ];

  return (
    <section className="relative z-10 bg-white shadow-lg border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center text-center bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CheckCircle className="w-8 h-8 text-autoram-red flex-shrink-0 mb-3" />
              <span className="text-autoram-text font-semibold text-base leading-tight">{benefit}</span>
            </div>
          ))}
        </div>

        {/* Cities section */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm animate-slide-up">
          <h3 className="text-lg font-semibold text-autoram-text mb-4 text-center">
            Obsługujemy szkody w regionach:
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {cities.map((city, index) => (
              <div key={index} className="flex items-center">
                <div className="w-2 h-2 bg-autoram-red rounded-full mr-3"></div>
                <span className="text-autoram-text font-medium text-sm whitespace-nowrap">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
