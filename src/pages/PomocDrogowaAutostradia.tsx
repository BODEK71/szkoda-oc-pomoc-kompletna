
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Highway, Truck, Clock, CheckCircle, AlertTriangle, Phone, FileText, ArrowRight, Shield, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PomocDrogowaAutostradia = () => {
  const services = [
    {
      title: "Interwencja na autostradzie",
      description: "Specjalistyczna pomoc na trasach szybkiego ruchu",
      icon: <Highway className="w-6 h-6" />,
      features: ["Uprawnienia do pracy na autostradzie", "Profesjonalne oznakowanie", "Szybka reakcja"]
    },
    {
      title: "Naprawa na miejscu",
      description: "Usunięcie podstawowych usterek bez holowania",
      icon: <Settings className="w-6 h-6" />,
      features: ["Wymiana koła", "Doładowanie akumulatora", "Uzupełnienie paliwa"]
    },
    {
      title: "Holowanie z autostrady",
      description: "Bezpieczny transport gdy naprawa niemożliwa",
      icon: <Truck className="w-6 h-6" />,
      features: ["Transport do warsztatu", "Zabezpieczenie pojazdu", "Współpraca ze służbami"]
    }
  ];

  const emergencySituations = [
    "Uszkodzenie mechaniczne uniemożliwiające jazdę",
    "Przebicie opony lub uszkodzenie koła", 
    "Rozładowanie akumulatora",
    "Brak paliwa na autostradzie",
    "Kolizja lub wypadek drogowy",
    "Przegrzanie silnika",
    "Awaria układu elektrycznego"
  ];

  const safetyProcedures = [
    "Zatrzymać pojazd na pasie awaryjnym (jeśli to możliwe)",
    "Włączyć światła awaryjne",
    "Ustawić trójkąt ostrzegawczy w odpowiedniej odległości",
    "Założyć kamizelkę odblaskową",
    "Opuścić pojazd od strony pasa awaryjnego",
    "Przenieść się za barierę ochronną"
  ];

  const faqData = [
    {
      question: "Czy można samodzielnie naprawiać pojazd na autostradzie?",
      answer: "Absolutnie nie! Samodzielne naprawy na autostradzie są zabronione i niebezpieczne. Należy wezwać profesjonalną pomoc drogową, która ma odpowiednie uprawnienia i wyposażenie do pracy na trasach szybkiego ruchu."
    },
    {
      question: "Ile kosztuje pomoc drogowa na autostradzie?",
      answer: "Koszt zależy od rodzaju usługi, odległości holowania, pory dnia i stopnia skomplikowania interwencji. Wiele usług może być pokrytych przez polisy assistance lub ubezpieczenia OC sprawcy."
    },
    {
      question: "Jak długo trwa przyjazd pomocy drogowej na autostradę?",
      answer: "Czas reakcji na autostradzie jest skrócony dzięki uprzywilejowaniu. Standardowo 20-45 minut, w zależności od lokalizacji i natężenia ruchu. Interwencje na autostradzie mają priorytet."
    },
    {
      question: "Co zrobić jeśli pojazd zatrzymał się na pasie ruchu?",
      answer: "To sytuacja bardzo niebezpieczna! Włącz światła awaryjne, nie wychodź z pojazdu, natychmiast wezwij pomoc przez numer alarmowy 112 i naszą dyspozytornię. Służby pomogą w bezpiecznym przeniesieniu pojazdu."
    },
    {
      question: "Jakie informacje podać zgłaszając awarie na autostradzie?",
      answer: "Podaj dokładną lokalizację (nazwa autostrady, kierunek, kilometraż), numer rejestracyjny pojazdu, opis awarii, liczbę osób w pojeździe i czy są poszkodowani. Im więcej szczegółów, tym szybsza pomoc."
    },
    {
      question: "Czy pomoc drogowa może działać na każdej autostradzie?",
      answer: "Tak, ale wymaga to specjalnych uprawnień. Nasza firma posiada wszystkie niezbędne licencje i certyfikaty do świadczenia pomocy drogowej na autostradach w całym kraju."
    },
    {
      question: "Co można naprawić na miejscu na autostradzie?",
      answer: "Na autostradzie można wykonać tylko podstawowe naprawy: wymianę koła, doładowanie akumulatora, uzupełnienie paliwa czy płynów. Złożone naprawy wymagają holowania do warsztatu ze względów bezpieczeństwa."
    },
    {
      question: "Czy można holować pojazd tylko do najbliższego zjazdu?",
      answer: "Nie, możemy transportować pojazd do wskazanego przez Ciebie warsztatu lub miejsca. Holowanie tylko do zjazdu to opcja, gdy chcesz skrócić koszty lub szybko opuścić autostradę."
    },
    {
      question: "Co zrobić jeśli awaria nastąpi w tunelu autostradowym?",
      answer: "Tunel to szczególnie niebezpieczne miejsce. Włącz światła awaryjne, nie opuszczaj pojazdu, natychmiast powiadom służby przez instalacje alarmowe w tunelu i wezwij pomoc. Obowiązują specjalne procedury."
    },
    {
      question: "Czy pomoc drogowa na autostradzie działa w nocy?",
      answer: "Tak, świadczymy pomoc drogową na autostradzie 24/7. Nocne interwencje wymagają dodatkowego oświetlenia i szczególnych środków ostrożności, ale jesteśmy do tego przygotowani."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-red-100 text-red-800 px-3 py-1">
            <Highway className="w-4 h-4 mr-2" />
            Autostrada
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Pomoc drogowa na autostradzie
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Profesjonalne wsparcie na trasach szybkiego ruchu - bezpieczeństwo i szybkość reakcji 
            zgodnie z najwyższymi standardami
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 space-y-12">
            
            {/* Specjalistyczna usługa */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Pomoc drogowa na autostradzie - specjalistyczna usługa
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Pomoc drogowa na autostradzie</strong> to wysoce specjalistyczna usługa, która wymaga 
                odpowiednich uprawnień, doświadczenia i sprzętu. Autostrady to drogi o szczególnym znaczeniu, 
                gdzie bezpieczeństwo i szybkość reakcji są kluczowe dla wszystkich uczestników ruchu.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <Card key={index} className="border-l-4 border-l-red-600">
                    <CardHeader className="pb-3">
                      <div className="w-12 h-12 bg-red-600 text-white rounded-lg flex items-center justify-center mb-3">
                        {service.icon}
                      </div>
                      <CardTitle className="text-lg font-bold text-gray-900">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-red-600" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Najczęstsze sytuacje awaryjne */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Kiedy potrzebujesz pomocy drogowej na autostradzie?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Pomoc drogowa na autostradzie</strong> najczęściej jest potrzebna w przypadku 
                różnych awarii i sytuacji awaryjnych, które mogą wystąpić podczas jazdy trasami szybkiego ruchu.
              </p>
              
              <div className="bg-orange-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Najczęstsze sytuacje awaryjne:
                </h3>
                <div className="space-y-3">
                  {emergencySituations.map((situation, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{situation}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Procedury bezpieczeństwa */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Procedury bezpieczeństwa na autostradzie
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Przed przybyciem <strong>pomocy drogowej na autostradzie</strong> kierowca powinien 
                postępować zgodnie z ustalonymi procedurami bezpieczeństwa, aby zminimalizować ryzyko.
              </p>
              
              <div className="bg-red-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Postępowanie kierowcy przy awarii:
                </h3>
                <div className="space-y-3">
                  {safetyProcedures.map((procedure, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <span className="text-gray-700">{procedure}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Specyfika pracy na autostradzie */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Specyfika pracy na autostradzie
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Pomoc drogowa na autostradzie</strong> różni się od standardowych usług 
                pomocy drogowej pod wieloma względami i wymaga specjalnych kwalifikacji.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">Wymagania specjalne</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Specjalne uprawnienia do pracy na autostradzie</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Wymagania dotyczące oznakowania pojazdu</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span>Ścisłe procedury bezpieczeństwa</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">Współpraca z służbami</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <Highway className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Służby zarządzające autostradą</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Clock className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Najwyższe standardy czasowe reakcji</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Phone className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span>Koordynacja z centrami zarządzania ruchem</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Przygotowanie do podróży */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Przygotowanie do podróży autostradą
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Właściwe przygotowanie pojazdu przed podróżą autostradą może zapobiec wielu awariom 
                i zmniejszyć ryzyko konieczności wzywania pomocy drogowej.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Kontrola techniczna pojazdu</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Stan opon i ciśnienie</li>
                      <li>• Poziom wszystkich płynów</li>
                      <li>• Sprawność akumulatora</li>
                      <li>• Działanie świateł i sygnalizacji</li>
                      <li>• Kompletność wyposażenia awaryjnego</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Wyposażenie awaryjne</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Trójkąt ostrzegawczy</li>
                      <li>• Kamizelka odblaskowa</li>
                      <li>• Apteczka pierwszej pomocy</li>
                      <li>• Gaśnica (jeśli wymagana)</li>
                      <li>• Zapasowe koło i narzędzia</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-red-600 to-red-800 text-white">
              <CardHeader>
                <CardTitle className="text-xl">Pomoc na autostradzie 24/7</CardTitle>
                <CardDescription className="text-red-100">
                  Specjalistyczna pomoc drogowa na trasach szybkiego ruchu
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button className="w-full bg-white text-red-600 hover:bg-gray-100">
                    <Phone className="w-4 h-4 mr-2" />
                    Zadzwoń - Autostrada
                  </Button>
                  <Button variant="outline" className="w-full border-white text-white hover:bg-white/10">
                    <Highway className="w-4 h-4 mr-2" />
                    Zgłoś lokalizację
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Powiązane usługi</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link 
                  to="/holowanie-po-wypadku-awarii-kolizji" 
                  className="flex items-center justify-between p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors"
                >
                  <span className="text-sm font-medium">Holowanie po wypadku</span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </Link>
                <Link 
                  to="/pomoc-drogowa" 
                  className="flex items-center justify-between p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors"
                >
                  <span className="text-sm font-medium">Pomoc drogowa 24/7</span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </Link>
                <Link 
                  to="/podstawienie-lawety-i-naprawa-na-miejscu" 
                  className="flex items-center justify-between p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors"
                >
                  <span className="text-sm font-medium">Laweta i naprawa</span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mb-16">
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
        </section>

        {/* Podsumowanie */}
        <section className="bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Profesjonalna pomoc na autostradzie</h2>
          <p className="text-red-100 leading-relaxed mb-6">
            <strong>Pomoc drogowa na autostradzie</strong> to usługa wymagająca najwyższych standardów 
            bezpieczeństwa, profesjonalizmu i szybkości reakcji. Nasze doświadczenie i specjalistyczne 
            wyposażenie gwarantują skuteczną pomoc w każdej sytuacji awaryjnej na autostradzie.
          </p>
          <p className="text-red-100 font-semibold">
            Pamiętaj, że bezpieczeństwo na autostradzie jest priorytetem. Nie podejmuj samodzielnych prób 
            naprawy pojazdu na trasie szybkiego ruchu - zaufaj profesjonalistom świadczącym pomoc drogową na autostradzie.
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default PomocDrogowaAutostradia;
