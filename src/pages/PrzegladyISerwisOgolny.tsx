import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BenefitsSection from "@/components/BenefitsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import HeroSection from "@/components/reviews/HeroSection";
import ServicesSection from "@/components/reviews/ServicesSection";
import FAQSection from "@/components/reviews/FAQSection";
import CTASection from "@/components/reviews/CTASection";

const PrzegladyISerwisOgolny = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <HeroSection />

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Przeglądy i serwis ogólny - kompleksowa obsługa techniczna pojazdów
            </h1>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Nasz <strong>przegląd techniczny auta</strong> to kompleksowa usługa obejmująca szczegółową kontrolę wszystkich systemów pojazdu oraz wykonanie niezbędnych napraw i regulacji. Oferujemy profesjonalne przeglądy techniczne oraz szeroki zakres usług serwisowych, które zapewniają bezpieczną i niezawodną eksploatację Twojego samochodu.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Profesjonalny przegląd techniczny auta</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>Przegląd techniczny auta</strong> wykonywany w naszym warsztacie to gwarancja dokładnego sprawdzenia wszystkich kluczowych systemów pojazdu. Nasi doświadczoni mechanicy przeprowadzają kompleksową kontrolę techniczną zgodnie z najwyższymi standardami branżowymi.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Zakres naszego przeglądu technicznego obejmuje:
            </p>

            <ul className="text-lg text-gray-700 leading-relaxed mb-8 space-y-2">
              <li>• <strong>Kontrola układu hamulcowego</strong> - sprawdzenie klocków, tarcz, płynu hamulcowego</li>
              <li>• <strong>Diagnostyka układu kierowniczego</strong> - kontrola luzów, geometrii kół</li>
              <li>• <strong>Sprawdzenie zawieszenia</strong> - ocena stanu amortyzatorów, sprężyn, tulei</li>
              <li>• <strong>Kontrola oświetlenia</strong> - sprawdzenie wszystkich lamp i reflektorów</li>
              <li>• <strong>Diagnostyka silnika</strong> - kontrola parametrów pracy, emisji spalin</li>
              <li>• <strong>Sprawdzenie układu wydechowego</strong> - kontrola szczelności i stanu katalizatora</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Kompleksowy serwis ogólny</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Nasz serwis ogólny to pełen zakres usług mechanicznych zapewniających prawidłowe funkcjonowanie pojazdu. Specjalizujemy się w obsłudze samochodów wszystkich marek, oferując zarówno przeglądy okresowe, jak i naprawy bieżące.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Przeglądy okresowe</h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Wykonujemy przeglądy okresowe zgodnie z zaleceniami producentów pojazdów:
            </p>

            <ul className="text-lg text-gray-700 leading-relaxed mb-6 space-y-2">
              <li>• <strong>Przeglądy podstawowe</strong> - wymiana oleju, filtrów, kontrola płynów</li>
              <li>• <strong>Przeglądy rozszerzone</strong> - dodatowa kontrola układów, diagnostyka komputerowa</li>
              <li>• <strong>Przeglądy roczne</strong> - kompleksowa kontrola stanu technicznego pojazdu</li>
              <li>• <strong>Przeglądy sezonowe</strong> - przygotowanie auta do zimy lub lata</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Serwis bieżący i naprawy</h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Nasz serwis obejmuje również naprawy bieżące i wymianę eksploatacyjnych części pojazdu:
            </p>

            <ul className="text-lg text-gray-700 leading-relaxed mb-8 space-y-2">
              <li>• Wymiana oleju silnikowego i filtrów</li>
              <li>• Serwis układu hamulcowego</li>
              <li>• Naprawa i wymiana elementów zawieszenia</li>
              <li>• Serwis układu klimatyzacji</li>
              <li>• Wymiana opon i wyważanie kół</li>
              <li>• Naprawa układu elektrycznego</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Diagnostyka komputerowa</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Nowoczesne pojazdy wymagają specjalistycznej diagnostyki komputerowej. Nasz warsztat wyposażony jest w najnowocześniejsze urządzenia diagnostyczne, które pozwalają na precyzyjne wykrywanie usterek elektronicznych.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Oferujemy:
            </p>

            <ul className="text-lg text-gray-700 leading-relaxed mb-8 space-y-2">
              <li>• <strong>Diagnostyka wszystkich systemów</strong> - silnik, skrzynia, ABS, ESP, airbag</li>
              <li>• <strong>Kodowanie i programowanie</strong> - aktualizacja oprogramowania sterowników</li>
              <li>• <strong>Kasowanie błędów</strong> - usuwanie kodów usterek po wykonanych naprawach</li>
              <li>• <strong>Adaptacje serwisowe</strong> - reset liczników serwisowych, kalibracja systemów</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Przygotowanie do badań technicznych</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Oferujemy kompleksowe przygotowanie pojazdu do obowiązkowych badań technicznych. Nasz przegląd przed badaniami technicznymi pozwala uniknąć nieprzyjemnych niespodzianek podczas kontroli w stacji diagnostycznej.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Kontrolujemy wszystkie elementy sprawdzane podczas badań:
            </p>

            <ul className="text-lg text-gray-700 leading-relaxed mb-8 space-y-2">
              <li>• Stan oświetlenia i sygnalizacji</li>
              <li>• Skuteczność układu hamulcowego</li>
              <li>• Emisja spalin i hałasu</li>
              <li>• Stan opon i geometria kół</li>
              <li>• Sprawność układu kierowniczego</li>
              <li>• Bezpieczeństwo konstrukcji pojazdu</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Serwis klimatyzacji</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Specjalizujemy się w kompleksowym serwisie układów klimatyzacji samochodowej. Oferujemy zarówno przeglądy okresowe, jak i naprawy układów chłodzących.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Nasze usługi klimatyzacyjne:
            </p>

            <ul className="text-lg text-gray-700 leading-relaxed mb-8 space-y-2">
              <li>• <strong>Przegląd układu klimatyzacji</strong> - kontrola szczelności, wydajności</li>
              <li>• <strong>Uzupełnienie czynnika</strong> - uzupełnienie gazu chłodniczego</li>
              <li>• <strong>Wymiana filtrów</strong> - kabinowy, osuszacz, filtr cząstek stałych</li>
              <li>• <strong>Dezynfekcja układu</strong> - usuwanie bakterii i nieprzyjemnych zapachów</li>
              <li>• <strong>Naprawa komponentów</strong> - wymiana sprężarek, skraplaczy, parowników</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Gwarancja jakości usług serwisowych</h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Wszystkie wykonane przez nas usługi serwisowe objęte są gwarancją jakości. Stosujemy wyłącznie oryginalne części zamienne lub ich wysokiej jakości odpowiedniki, co zapewnia niezawodność i trwałość wykonanych prac.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Nasze zalety:
            </p>

            <ul className="text-lg text-gray-700 leading-relaxed mb-12 space-y-2">
              <li>• Doświadczony zespół mechaników</li>
              <li>• Nowoczesne wyposażenie diagnostyczne</li>
              <li>• Konkurencyjne ceny usług</li>
              <li>• Szybkie terminy realizacji</li>
              <li>• Profesjonalna obsługa klienta</li>
              <li>• Gwarancja na wykonane prace</li>
            </ul>

            <hr className="border-gray-300 my-12" />

            <p className="text-base text-gray-600 italic leading-relaxed">
              Potrzebujesz przeglądu technicznego lub serwisu swojego pojazdu? Umów się na wizytę - nasi specjaliści zadbają o bezpieczeństwo i niezawodność Twojego samochodu.
            </p>
          </div>
        </div>
      </section>

      <ServicesSection />
      <FAQSection />

      <BenefitsSection />
      <WhyChooseUs />

      <CTASection />

      <Footer />
    </div>
  );
};

export default PrzegladyISerwisOgolny;
