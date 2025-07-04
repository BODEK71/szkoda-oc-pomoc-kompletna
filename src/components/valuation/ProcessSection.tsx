
const ProcessSection = () => {
  const processSteps = [
    { step: "1", title: "Zgłoszenie", description: "Skontaktuj się z nami telefonicznie lub przez formularz" },
    { step: "2", title: "Oględziny", description: "Przeprowadzamy szczegółowe oględziny pojazdu" },
    { step: "3", title: "Ocena uszkodzeń", description: "Analizujemy wszystkie szkody i ich wpływ na pojazd" },
    { step: "4", title: "Kosztorys", description: "Przygotowujemy szczegółowy kosztorys naprawy z OC sprawcy" },
    { step: "5", title: "Dokumentacja", description: "Przekazujemy kompletną dokumentację z wyceny" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Proces wyceny krok po kroku
          </h2>
          <p className="text-xl text-gray-600">
            Profesjonalny proces od zgłoszenia do przekazania dokumentacji
          </p>
        </div>

        <div className="space-y-8">
          {processSteps.map((step, index) => (
            <div key={index} className="flex items-start space-x-6 p-6 bg-white rounded-xl shadow-sm border">
              <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                {step.step}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
