
import { CheckCircle } from "lucide-react";

const BasicInformationSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Zgłoszenie szkody ubezpieczeniowej - podstawowe informacje
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          <strong>Zgłoszenie szkody ubezpieczeniowej</strong> to pierwszy i najważniejszy krok w procesie 
          dochodzenia odszkodowania. Prawidłowe zgłoszenie decyduje o sprawności całego postępowania 
          i może znacząco wpłynąć na wysokość otrzymanego odszkodowania.
        </p>
        
        <div className="bg-orange-50 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Znaczenie prawidłowego zgłoszenia
          </h3>
          <p className="text-gray-700 mb-4">
            <strong>Zgłoszenie szkody ubezpieczeniowej</strong> ma kluczowe znaczenie dla:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Uruchomienia procedury likwidacji szkody",
              "Zachowania uprawnień do odszkodowania",
              "Dochowania terminów przewidzianych w polisie",
              "Zabezpieczenia dowodów i dokumentacji",
              "Właściwego udokumentowania zdarzenia"
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BasicInformationSection;
