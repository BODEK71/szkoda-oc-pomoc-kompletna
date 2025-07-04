
import { Shield, Wrench, Clock } from "lucide-react";

const WhyChooseUsSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Dlaczego warto wybrać nasze usługi?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mx-auto">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Kompleksowa obsługa</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Wycena szkody powypadkowej zgodna ze standardami branżowymi</li>
              <li>• Kosztorys naprawy z OC sprawcy uwzględniający wszystkie uszkodzenia</li>
              <li>• Szczegółowa ocena uszkodzeń pojazdu z wykorzystaniem nowoczesnych narzędzi</li>
            </ul>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white mx-auto">
              <Wrench className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Doświadczenie i profesjonalizm</h3>
            <p className="text-gray-600">
              Nasz zespół posiada wieloletnie doświadczenie w przygotowywaniu wycen powypadkowych. 
              Współpracujemy z największymi towarzystwami ubezpieczeniowymi w Polsce, 
              dzięki czemu znamy ich wymagania i procedury.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center text-white mx-auto">
              <Clock className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Szybka realizacja</h3>
            <p className="text-gray-600">
              Rozumiemy, że po wypadku czas jest bardzo cenny. Dlatego staramy się wykonać 
              wycenę szkody powypadkowej w najkrótszym możliwym terminie, 
              nie tracąc przy tym na dokładności i rzetelności oceny.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
