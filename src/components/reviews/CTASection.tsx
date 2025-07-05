
import { Button } from "@/components/ui/button";
import { Phone, Settings } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Potrzebujesz przeglądu lub serwisu pojazdu?
        </h2>
        <p className="text-xl mb-8 text-blue-100">
          Zadbamy o bezpieczeństwo i niezawodność Twojego samochodu!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
            <Phone className="w-5 h-5 mr-2" />
            Zadzwoń: 123-456-789
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
            <Settings className="w-5 h-5 mr-2" />
            Umów przegląd
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
