
import { Button } from "@/components/ui/button";
import { Phone, FileText } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Potrzebujesz pomocy w zgłoszeniu szkody?
        </h2>
        <p className="text-xl mb-8 text-orange-100">
          Nie zwlekaj! Im szybciej zgłosisz szkodę, tym szybciej otrzymasz odszkodowanie. 
          Skontaktuj się z nami już teraz.
        </p>
        <p className="text-orange-100 leading-relaxed mb-8">
          Nasze doświadczenie w obsłudze <strong>zgłoszeń szkód komunikacyjnych</strong> zapewni Ci 
          właściwe przygotowanie dokumentacji i maksymalizację szans na otrzymanie sprawiedliwego odszkodowania.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-4">
            <Phone className="w-5 h-5 mr-2" />
            Zadzwoń: 123-456-789
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
            <FileText className="w-5 h-5 mr-2" />
            Formularz online
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
