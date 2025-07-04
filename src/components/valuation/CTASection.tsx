
import { Button } from "@/components/ui/button";
import { Phone, Calculator } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Potrzebujesz profesjonalnej wyceny szkody powypadkowej?
        </h2>
        <p className="text-xl mb-8 text-teal-100">
          Skontaktuj się z nami już dziś! Nasz zespół ekspertów jest gotowy pomóc Ci 
          w prawidłowym rozliczeniu szkody z ubezpieczeniem sprawcy wypadku.
        </p>
        <p className="text-teal-100 leading-relaxed mb-8">
          Gwarantujemy rzetelność, profesjonalizm i terminowość w każdej sprawie. 
          Twoja satysfakcja i sprawiedliwe odszkodowanie to nasz priorytet.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 text-lg px-8 py-4">
            <Phone className="w-5 h-5 mr-2" />
            Zadzwoń: 123-456-789
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
            <Calculator className="w-5 h-5 mr-2" />
            Bezpłatna wycena
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
