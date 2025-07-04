
const ProcessStepsSection = () => {
  const processSteps = [
    "Natychmiastowe zgłoszenie szkody",
    "Przygotowanie dokumentacji",
    "Złożenie wniosku do ubezpieczyciela",
    "Monitoring postępowania",
    "Odbiór odszkodowania"
  ];

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Proces zgłoszenia szkody
          </h2>
          <p className="text-xl text-gray-600">
            Procedura krok po kroku
          </p>
        </div>

        <div className="space-y-4">
          {processSteps.map((step, index) => (
            <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                {index + 1}
              </div>
              <span className="text-lg text-gray-900">{step}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessStepsSection;
