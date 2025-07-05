
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqItems = [
    {
      question: "Jak często należy wykonywać przegląd techniczny pojazdu?",
      answer: "Częstotliwość przeglądów technicznych zależy od wieku pojazdu i zalecenia producenta. Zazwyczaj nowe samochody wymagają przeglądu co 15 000-30 000 km lub raz do roki. Starsze pojazdy mogą wymagać częstszych kontroli - co 10 000-15 000 km."
    },
    {
      question: "Co obejmuje standardowy przegląd techniczny?",
      answer: "Standardowy przegląd obejmuje kontrolę układu hamulcowego, zawieszenia, kierowniczego, oświetlenia, silnika, układu wydechowego, poziomu płynów eksploatacyjnych oraz ogólnego stanu technicznego pojazdu."
    },
    {
      question: "Ile kosztuje przegląd techniczny samochodu?",
      answer: "Koszt przeglądu zależy od typu pojazdu i zakresu wykonywanych czynności. Podstawowy przegląd kosztuje od 200-500 zł, natomiast rozszerzony przegląd może kosztować 500-1000 zł. Dokładną wycenę otrzymają Państwo po diagnostyce."
    },
    {
      question: "Czy przegląd techniczny jest obowiązkowy?",
      answer: "Tak, przegląd techniczny jest obowiązkowy dla wszystkich pojazdów używanych w ruchu drogowym. Pojazdy osobowe do 3 lat są zwolnione z badań, pojazdy 3-5 lat badane są co 2 lata, a starsze niż 5 lat - co rok."
    },
    {
      question: "Jak długo trwa przegląd techniczny pojazdu?",
      answer: "Czas trwania przeglądu zależy od jego zakresu. Podstawowy przegląd trwa 1-2 godziny, natomiast kompleksowy przegląd może zająć 3-5 godzin. W przypadku wykrycia usterek wymagających naprawy, czas może się wydłużyć."
    },
    {
      question: "Co to jest diagnostyka komputerowa i kiedy jest potrzebna?",
      answer: "Diagnostyka komputerowa to sprawdzenie systemów elektronicznych pojazdu za pomocą specjalistycznych urządzeń. Jest potrzebna przy wystąpieniu kontrolek na tablicy rozdzielczej, problemach z silnikiem lub innych systemami elektronicznymi."
    },
    {
      question: "Czy można wykonać przegląd bez wcześniejszego umówienia?",
      answer: "Zalecamy wcześniejsze umówienie wizyty, aby zapewnić najlepszą jakość obsługi i skrócić czas oczekiwania. W pilnych przypadkach przyjmujemy również bez umówienia, jednak może to wiązać się z dłuższym czasem oczekiwania."
    },
    {
      question: "Jakie dokumenty są potrzebne do przeglądu technicznego?",
      answer: "Do przeglądu technicznego potrzebny jest dowód rejestracyjny pojazdu oraz polisa OC. W przypadku pojazdu firmowego dodatkowo potrzebne może być pełnomocnictwo lub dokumenty potwierdzające prawo do dysponowania pojazdem."
    },
    {
      question: "Czy oferujecie gwarancję na wykonane usługi serwisowe?",
      answer: "Tak, wszystkie nasze usługi serwisowe objęte są gwarancją. Na wymienione części dajemy gwarancję zgodną z warunkami producenta, natomiast na robociznę udzielamy 6-miesięcznej gwarancji."
    },
    {
      question: "Co się dzieje, jeśli pojazd nie przejdzie przeglądu technicznego?",
      answer: "Jeśli pojazd nie przejdzie przeglądu, otrzymają Państwo protokół z opisem usterek wymagających usunięcia. Po wykonaniu napraw można ponownie zgłosić pojazd do badania w terminie 30 dni bez dodatkowych opłat."
    },
    {
      question: "Czy wykonujecie serwis klimatyzacji przez cały rok?",
      answer: "Tak, serwis klimatyzacji wykonujemy przez cały rok. Zalecamy kontrolę przed sezonem letnim (marzec-kwiecień) oraz jesiennym (wrzesień-październik). W sezonie zimowym można wykonać przegląd i ewentualne naprawy układu."
    },
    {
      question: "Jak przygotować samochód do przeglądu technicznego?",
      answer: "Przed przeglądem zalecamy sprawdzenie podstawowych elementów: poziomu oleju, płynu hamulcowego, chłodniczego, stanu opon, działania świateł i klaksonu. Samochód powinien być czysty, szczególnie obszary podlegające kontroli."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Najczęściej zadawane pytania
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Odpowiedzi na pytania dotyczące przeglądów technicznych i serwisu ogólnego
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold text-gray-900 pr-4">{item.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-6 leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
