
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Truck, Wrench, Clock, CheckCircle, AlertTriangle, Phone, FileText, ArrowRight, Shield, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PodstawienieLawetyINaprawaNaMiejscu = () => {
  const services = [
    {
      title: "Podstawienie lawety",
      description: "Bezpieczny transport pojazdu na platformie",
      icon: <Truck className="w-6 h-6" />,
      features: ["Transport pojazdów uszkodzonych", "Lawety hydrauliczne", "Zabezpieczenie podczas transportu"]
    },
    {
      title: "Naprawa na miejscu",
      description: "Szybka interwencja techniczna bez transportu",
      icon: <Wrench className="w-6 h-6" />,
      features: ["Wymiana kół", "Naprawa akumulatora", "Uzupełnienie płynów"]
    },
    {
      title: "Diagnostyka mobilna",
      description: "Ocena usterek i możliwości naprawy",
      icon: <Settings className="w-6 h-6" />,
      features: ["Profesjonalne narzędzia", "Szybka diagnoza", "Doradztwo techniczne"]
    }
  ];

  const laweetaWhen = [
    "Pojazd ma uszkodzone koła lub zawieszenie",
    "Samochód nie może być holowany tradycyjnie",
    "Uszkodzenia podwozia uniemożliwiają holowanie",
    "Transport pojazdów luksusowych i sportowych",
    "Wypadek z udziałem motocykla"
  ];

  const repairsOnSite = [
    "Wymiana koła lub naprawa przebicia",
    "Doładowanie lub wymiana akumulatora",
    "Uzupełnienie płynów eksploatacyjnych",
    "Naprawa drobnych uszkodzeń mechanicznych",
    "Regulacja reflektorów po kolizji",
    "Tymczasowe zabezpieczenie uszkodzeń"
  ];

  const faqData = [
    {
      question: "Ile kosztuje podstawienie lawety?",
      answer: "Koszt podstawienia lawety zależy od odległości, typu pojazdu i czasu realizacji. Oferujemy konkurencyjne ceny i możliwość rozliczenia z polisą assistance lub OC sprawcy."
    },
    {
      question: "Jak długo trwa przyjazd lawety?",
      answer: "W obszarze miejskim przyjazd lawety trwa 30-60 minut. W przypadku sytuacji awaryjnych staramy się być na miejscu jak najszybciej, nawet w ciągu 15-20 minut."
    },
    {
      question: "Czy można naprawić każdą usterkę na miejscu?",
      answer: "Naprawa na miejscu jest możliwa w przypadku prostych usterek jak przebicie opony, rozładowany akumulator czy brak paliwa. Złożone naprawy wymagają transportu do warsztatu."
    },
    {
      question: "Jakie pojazdy można transportować na lawecie?",
      answer: "Nasze lawety mogą transportować samochody osobowe, dostawcze, motocykle, skutery oraz pojazdy zabytkowe. Mamy lawety o różnej nośności dopasowane do typu pojazdu."
    },
    {
      question: "Czy usługa jest dostępna całodobowo?",
      answer: "Tak, podstawienie lawety i naprawa na miejscu są dostępne 24 godziny na dobę, 7 dni w tygodniu, przez cały rok, włącznie z dniami świątecznymi."
    },
    {
      question: "Czy można rozliczyć usługę z ubezpieczeniem?",
      answer: "Tak, usługi można rozliczyć z polisą assistance, ubezpieczeniem OC sprawcy wypadku lub polisą casco z pakietem pomocy drogowej. Zapewniamy pełną dokumentację."
    },
    {
      question: "Jak przygotować pojazd do transportu na lawecie?",
      answer: "Nasi specjaliści zajmują się przygotowaniem pojazdu do transportu. Wystarczy zabezpieczyć osobiste rzeczy z wnętrza samochodu i przekazać dokumenty pojazdu."
    },
    {
      question: "Czy laweta może dojechać wszędzie?",
      answer: "Nasze lawety są przystosowane do jazdy po różnych drogach, jednak w przypadku bardzo trudno dostępnych miejsc może być konieczne holowanie pojazdu do miejsca, gdzie laweta może podjechać."
    },
    {
      question: "Ile czasu zajmuje naprawa na miejscu?",
      answer: "Proste naprawy jak wymiana koła trwają 15-30 minut. Bardziej złożone interwencje mogą zająć do 60 minut. Czas zależy od rodzaju usterki i warunków pogodowych."
    },
    {
      question: "Co zrobić jeśli naprawa na miejscu nie jest możliwa?",
      answer: "Jeśli naprawa na miejscu nie jest możliwa, organizujemy transport pojazdu na lawecie do wybranego warsztatu lub bezpiecznego miejsca. Pomagamy też w organizacji transportu zastępczego."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800 px-3 py-1">
            <Truck className="w-4 h-4 mr-2" />
            Pomoc na miejscu
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Podstawienie lawety i naprawa na miejscu zdarzenia
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kompleksowa pomoc drogowa - od transportu na lawecie po naprawę na miejscu. 
            Profesjonalne rozwiązania dostępne 24/7
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 space-y-12">
            
            {/* Usługi */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Nasze usługi pomocy drogowej
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <Card key={index} className="border-l-4 border-l-green-600">
                    <CardHeader className="pb-3">
                      <div className="w-12 h-12 bg-green-600 text-white rounded-lg flex items-center justify-center mb-3">
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
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Kiedy podstawienie lawety */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Kiedy konieczne jest podstawienie lawety?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Podstawienie lawety</strong> to profesjonalna usługa, która pozwala na bezpieczny 
                transport pojazdu w sytuacjach, gdy standardowe holowanie nie jest możliwe lub bezpieczne. 
                Laweta jest szczególnie przydatna w przypadku pojazdów o niskim prześwicie, 
                uszkodzonych kołach lub znacznych uszkodzeniach podwozia.
              </p>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Podstawienie lawety jest niezbędne gdy:
                </h3>
                <div className="space-y-3">
                  {laweetaWhen.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Naprawa na miejscu */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Naprawa na miejscu zdarzenia
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Naprawa na miejscu zdarzenia</strong> to szybka interwencja techniczna, 
                która często pozwala na kontynuację podróży bez konieczności transportu pojazdu do warsztatu. 
                Nasi specjaliści są wyposażeni w narzędzia i części zamienne potrzebne do wykonania podstawowych napraw.
              </p>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Jakie naprawy można wykonać na miejscu:
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {repairsOnSite.map((repair, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{repair}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Proces realizacji */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Jak przebiega realizacja usług?
              </h2>
              <div className="space-y-6">
                <Card className="border-l-4 border-l-orange-500">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <Phone className="w-5 h-5 text-orange-500 mr-2" />
                      1. Zgłoszenie potrzeby
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Kontakt z dyspozytornią 24/7</li>
                      <li>• Ocena sytuacji i rodzaju uszkodzeń</li>
                      <li>• Wybór odpowiedniej lawety lub zespołu naprawczego</li>
                      <li>• Ustalenie czasu przyjazdu i kosztów</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-l-4 border-l-blue-500">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <Truck className="w-5 h-5 text-blue-500 mr-2" />
                      2. Przyjazd na miejsce
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Zabezpieczenie miejsca zdarzenia</li>
                      <li>• Wstępna diagnoza usterki lub uszkodzeń</li>
                      <li>• Ocena możliwości naprawy na miejscu vs. transport</li>
                      <li>• Przygotowanie odpowiedniego sprzętu</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-l-4 border-l-green-500">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <Wrench className="w-5 h-5 text-green-500 mr-2" />
                      3. Wykonanie usługi
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Bezpieczne załadowanie na lawetę lub naprawa</li>
                      <li>• Zabezpieczenie pojazdu podczas transportu</li>
                      <li>• Test funkcjonalności po naprawie</li>
                      <li>• Dostarczenie do wskazanego miejsca</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Zalety */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Zalety naszych usług
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">Podstawienie lawety</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Całkowite zabezpieczenie pojazdu podczas transportu</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Brak dodatkowych uszkodzeń mechanicznych</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Truck className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span>Transport pojazdów niezdatnych do holowania</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">Naprawa na miejscu</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <Clock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Oszczędność czasu - kontynuacja podróży</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Uniknięcie kosztów holowania</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Wrench className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span>Profesjonalne narzędzia i części</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Obszar działania */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Obszar działania i dostępność
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Pokrycie geograficzne</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Całe województwo i okoliczne tereny</li>
                      <li>• Główne trasy komunikacyjne</li>
                      <li>• Obszary miejskie i podmiejskie</li>
                      <li>• Drogi lokalne i regionalne</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Dostępność</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Całodobowa dyspozytornia 24/7</li>
                      <li>• Serwis przez cały rok</li>
                      <li>• Możliwość pilnego wyjazdu</li>
                      <li>• Obsługa w dni świąteczne</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-green-600 to-green-800 text-white">
              <CardHeader>
                <CardTitle className="text-xl">Potrzebujesz pomocy?</CardTitle>
                <CardDescription className="text-green-100">
                  Skontaktuj się z nami - jesteśmy dostępni 24/7
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button className="w-full bg-white text-green-600 hover:bg-gray-100">
                    <Phone className="w-4 h-4 mr-2" />
                    Zadzwoń teraz
                  </Button>
                  <Button variant="outline" className="w-full border-white text-white hover:bg-white/10">
                    <FileText className="w-4 h-4 mr-2" />
                    Wycena online
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
                  <span className="text-sm font-medium">Holowanie 24/7</span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </Link>
                <Link 
                  to="/transport-pojazdow" 
                  className="flex items-center justify-between p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors"
                >
                  <span className="text-sm font-medium">Transport pojazdów</span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </Link>
                <Link 
                  to="/pomoc-drogowa" 
                  className="flex items-center justify-between p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors"
                >
                  <span className="text-sm font-medium">Pomoc drogowa</span>
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
        <section className="bg-gradient-to-r from-green-600 to-green-800 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Skontaktuj się z nami</h2>
          <p className="text-green-100 leading-relaxed mb-6">
            <strong>Podstawienie lawety</strong> i <strong>naprawa na miejscu zdarzenia</strong> to profesjonalne usługi, 
            które mogą uratować Twoją podróż i zaoszczędzić czas oraz pieniądze. Nasze doświadczenie i profesjonalne 
            wyposażenie gwarantują wysoką jakość usług i bezpieczeństwo Twojego pojazdu.
          </p>
          <p className="text-green-100 font-semibold">
            Niezależnie od tego, czy potrzebujesz podstawienia lawety czy naprawy na miejscu zdarzenia, 
            jesteśmy gotowi pomóc 24 godziny na dobę.
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default PodstawienieLawetyINaprawaNaMiejscu;
