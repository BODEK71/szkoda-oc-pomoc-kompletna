import { CheckCircle } from "lucide-react";

const KeyBenefitsSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {[
            "Centrum czynne 24/7",
            "Wszystko w jednym miejscu", 
            "Bezgotówkowa obsługa z OC",
            "Auto zastępcze od razu",
            "Specjaliści w każdym dziale",
            "Kompleksowa pomoc prawna"
          ].map((benefit, index) => (
            <div key={index} className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg border border-gray-200">
              <CheckCircle className="w-5 h-5 text-autoram-gold flex-shrink-0" />
              <span className="text-gray-900 font-medium">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyBenefitsSection;