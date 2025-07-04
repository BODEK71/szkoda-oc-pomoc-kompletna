
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FAQSection = () => {
  const faqData = [
    {
      question: "Jak szybko należy zgłosić szkodę ubezpieczeniową?",
      answer: "Szkodę należy zgłosić niezwłocznie po zdarzeniu, najlepiej w ciągu 24 godzin. Standardowo termin wynosi do 7 dni od zdarzenia, ale im szybciej tym lepiej dla zabezpieczenia dowodów."
    },
    {
      question: "Jakie dokumenty są potrzebne do zgłoszenia szkody komunikacyjnej?",
      answer: "Podstawowe dokumenty to: polisa ubezpieczeniowa, dowód rejestracyjny, prawo jazdy, protokół policji (jeśli sporządzono), oświadczenie o zdarzeniu drogowym oraz zdjęcia z miejsca wypadku."
    },
    {
      question: "Czy można zgłosić szkodę online?",
      answer: "Tak, większość ubezpieczycieli oferuje możliwość zgłoszenia szkody przez stronę internetową lub aplikację mobilną. Można tam wypełnić formularz i załączyć niezbędne dokumenty."
    },
    {
      question: "Co to jest system BLS i kiedy można z niego skorzystać?",
      answer: "BLS (Bezpośrednia Likwidacja Szkód) pozwala zgłosić szkodę do własnego ubezpieczyciela zamiast do ubezpieczyciela sprawcy. Można z niego skorzystać gdy wypadek miał miejsce w Polsce, uczestniczyły maksymalnie 2 pojazdy, oba są ubezpieczone w Polsce i nie ma szkód osobowych."
    },
    {
      question: "Co się dzieje jeśli sprawca wypadku nie ma ubezpieczenia?",
      answer: "W przypadku braku ubezpieczenia OC u sprawcy, odszkodowanie wypłaca Ubezpieczeniowy Fundusz Gwarancyjny (UFG). Należy zgłosić szkodę bezpośrednio do UFG z odpowiednią dokumentacją."
    },
    {
      question: "Jakie błędy najczęściej popełnia się przy zgłaszaniu szkody?",
      answer: "Najczęstsze błędy to: niepełny opis zdarzenia, błędy w danych uczestników, niekompletna dokumentacja, opóźnione zgłoszenie oraz nieścisłe informacje o uszkodzeniach."
    },
    {
      question: "Czy można naprawić pojazd przed oględzinami rzeczoznawcy?",
      answer: "Nie, pojazdu nie wolno naprawiać przed oględzinami rzeczoznawcy ubezpieczyciela. Może to skutkować odmową wypłaty odszkodowania lub jego obniżeniem."
    },
    {
      question: "Jak długo trwa proces likwidacji szkody po zgłoszeniu?",
      answer: "Ubezpieczyciel ma 30 dni na zajęcie stanowiska ws. szkody i 14 dni na wypłatę odszkodowania po ustaleniu jego wysokości. W praktyce może to trwać od kilku tygodni do kilku miesięcy."
    },
    {
      question: "Co robić gdy ubezpieczyciel odmawia wypłaty odszkodowania?",
      answer: "Można złożyć reklamację do ubezpieczyciela, skontaktować się z rzecznikiem klienta, zwrócić się do Rzecznika Finansowego lub skorzystać z pomocy prawnej."
    },
    {
      question: "Czy można śledzić status sprawy po zgłoszeniu szkody?",
      answer: "Tak, większość ubezpieczycieli oferuje możliwość śledzenia statusu sprawy online lub przez aplikację mobilną. Można także kontaktować się bezpośrednio z przydzielonym likwidatorem."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Najczęściej zadawane pytania
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {faqData.map((faq, index) => (
            <Card key={index} className="h-fit">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">
                  {faq.question}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
