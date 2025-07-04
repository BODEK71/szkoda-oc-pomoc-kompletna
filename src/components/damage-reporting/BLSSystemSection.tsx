
import { CheckCircle } from "lucide-react";

const BLSSystemSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Zgłoszenie szkody w systemie BLS
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          <strong>Zgłoszenie szkody komunikacyjnej</strong> w systemie BLS (Bezpośrednia Likwidacja Szkód) 
          umożliwia szybsze i prostsze dochodzenie odszkodowań.
        </p>
        
        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Zasady działania BLS
          </h3>
          <p className="text-gray-700 mb-4">
            <strong>Bezpośrednia likwidacja szkód (BLS)</strong> polega na:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Zgłaszaniu szkody do własnego ubezpieczyciela",
              "Pominięciu bezpośredniego kontaktu ze sprawcą",
              "Szybszej procedurze likwidacji",
              "Rozliczeniach między ubezpieczycielami"
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BLSSystemSection;
