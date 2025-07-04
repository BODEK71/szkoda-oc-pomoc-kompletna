
const FAQSection = () => {
  const faqItems = [
    {
      question: "Ile kosztuje wycena szkody powypadkowej?",
      answer: "Koszt wyceny zależy od zakresu uszkodzeń pojazdu. W większości przypadków koszt ten może być rozliczony z ubezpieczeniem sprawcy wypadku. Oferujemy bezpłatną wstępną konsultację."
    },
    {
      question: "Jak długo trwa przygotowanie kosztorysu naprawy?",
      answer: "Standardowo kosztorys naprawy z OC sprawcy przygotowujemy w ciągu 2-3 dni roboczych od momentu przeprowadzenia oględzin pojazdu. W pilnych przypadkach możliwa jest ekspresowa realizacja."
    },
    {
      question: "Czy wycena jest akceptowana przez ubezpieczycieli?",
      answer: "Tak, nasze wyceny są przygotowywane zgodnie z wymogami towarzystw ubezpieczeniowych i są przez nie akceptowane. Współpracujemy z największymi ubezpieczycielami w Polsce."
    },
    {
      question: "Co obejmuje ocena uszkodzeń pojazdu?",
      answer: "Ocena uszkodzeń pojazdu obejmuje analizę wszystkich elementów uszkodzonych w wypadku, w tym karoserii, mechaniki, elektroniki oraz wnętrza. Sprawdzamy również ukryte szkody, które mogą być niewidoczne na pierwszy rzut oka."
    },
    {
      question: "Czy mogę otrzymać kopię kosztorysu?",
      answer: "Oczywiście! Każdy klient otrzymuje pełną dokumentację wyceny, w tym szczegółowy kosztorys, zdjęcia uszkodzeń oraz opis przeprowadzonych czynności. Dokumentację przekazujemy w formie papierowej i elektronicznej."
    },
    {
      question: "Co jeśli ubezpieczyciel nie zgadza się z wyceną?",
      answer: "W przypadku niezgody ubezpieczyciela z naszą wyceną, możemy przeprowadzić dodatkową ekspertyzę lub negocjacje. Nasz zespół ma doświadczenie w rozwiązywaniu sporów z towarzystwami ubezpieczeniowymi."
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Często zadawane pytania
          </h2>
          <p className="text-xl text-gray-600">
            Odpowiedzi na najczęściej zadawane pytania dotyczące wyceny i kosztorysów
          </p>
        </div>

        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">{item.question}</h3>
              <p className="text-gray-600 leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
