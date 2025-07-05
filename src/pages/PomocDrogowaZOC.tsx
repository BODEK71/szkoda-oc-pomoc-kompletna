
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, ArrowRight, Truck, Clock, MapPin, Shield, Wrench, AlertTriangle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BenefitsSection from "@/components/BenefitsSection";
import WhyChooseUs from "@/components/WhyChooseUs";

const PomocDrogowaZOC = () => {
  const services = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Autolaweta 24h",
      description: "Nowoczesne lawety dostępne przez całą dobę"
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Naprawy na miejscu",
      description: "Podstawowe naprawy bez konieczności holowania"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Szybka reakcja",
      description: "Średni czas dojazdu 20-30 minut w mieście"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Pełne ubezpieczenie",
      description: "Bezpieczny transport z gwarancją ubezpieczenia"
    }
  ];

  const lawetaTypes = [
    "Laweta hydrauliczna - do pojazdów osobowych",
    "Laweta 24h - dostępna całą dobę", 
    "Laweta ciężka - do pojazdów dostawczych",
    "Laweta specjalistyczna - do aut luksusowych"
  ];

  const additionalServices = [
    "Uruchomienie silnika (rozruch)",
    "Wymiana koła na miejscu",
    "Dostarczanie paliwa",
    "Otwieranie zamkniętych pojazdów"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-50 via-white to-red-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-red-100 text-red-800">
                  🚛 POMOC DROGOWA 24H
                </Badge>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-red-600">Pomoc drogowa</span>
                  <br />
                  <span className="text-gray-900">24h - Zawsze w zasięgu ręki</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Awaria pojazdu może się zdarzyć w każdej chwili. Nasza pomoc drogowa 24/7 to gwarancja szybkiego i profesjonalnego wsparcia, niezależnie od pory dnia czy warunków pogodowych.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-lg px-8 py-4">
                  <Phone className="w-5 h-5 mr-2" />
                  Zadzwoń: 123-456-789
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-red-200 text-red-600 hover:bg-red-50">
                  Wezwij pomoc
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/lovable-uploads/76305d0f-89ec-4769-aaba-307d63ecc85b.png"
                alt="Pomoc drogowa 24h"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nasze usługi pomocy drogowej
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kompleksowa pomoc drogowa 24/7 na terenie całego kraju
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 text-center">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Autolaweta Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                Autolaweta - Bezpieczny transport Twojego pojazdu
              </h2>
              <p className="text-lg text-gray-600">
                Nasza flota nowoczesnych autolawetr jest gotowa do działania przez całą dobę. Autolaweta to najbezpieczniejszy sposób transportu uszkodzonych pojazdów.
              </p>
              
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">Rodzaje naszych lawetr:</h3>
                {lawetaTypes.map((type, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{type}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">20-30</div>
                  <div className="text-sm text-gray-600">minut dojazd w mieście</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">24/7</div>
                  <div className="text-sm text-gray-600">dostępność</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">365</div>
                  <div className="text-sm text-gray-600">dni w roku</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">100%</div>
                  <div className="text-sm text-gray-600">ubezpieczenie</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Details Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Truck className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle className="text-xl font-bold">Holowanie samochodu</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-600">Profesjonalne holowanie z miejsca awarii</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Bezpieczny transport do serwisu</li>
                  <li>• Holowanie po wypadkach</li>
                  <li>• Transport na duże odległości</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle className="text-xl font-bold">Ściąganie z drogi</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-600">Wyciąganie z trudno dostępnych miejsc</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Wyciąganie z rowu</li>
                  <li>• Pomoc przy wypadkach</li>
                  <li>• Usuwanie z jezdni</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle className="text-xl font-bold">Usługi dodatkowe</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-600">Kompleksowa pomoc na miejscu</p>
                <div className="space-y-2">
                  {additionalServices.map((service, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Najczęściej zadawane pytania
            </h2>
            <p className="text-xl text-gray-600">
              Odpowiedzi na pytania dotyczące pomocy drogowej 24h
            </p>
          </div>

          <div className="space-y-8">
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Jak szybko dotrze pomoc drogowa 24h?
              </h3>
              <p className="text-gray-600">
                Średni czas dojazdu naszej pomocy drogowej to 20-30 minut w mieście i do 45 minut na trasach pozamiejskich. Dokładny czas podamy podczas przyjmowania zgłoszenia.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Czy autolaweta może przewozić każdy typ pojazdu?
              </h3>
              <p className="text-gray-600">
                Nasza flota obejmuje różne typy lawetr. Standardowa laweta przewozi pojazdy do 3,5 tony. Dla cięższych pojazdów dysponujemy specjalistycznymi lawetami ciężkimi.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Ile kosztuje holowanie samochodu?
              </h3>
              <p className="text-gray-600">
                Koszt holowania zależy od odległości i typu pojazdu. Podstawowa opłata za dojazd to 80-120 zł, a holowanie kosztuje 3-5 zł za kilometr. Dokładną wycenę podamy telefonicznie.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Czy pomoc drogowa 24/7 działa w święta?
              </h3>
              <p className="text-gray-600">
                Tak, nasza pomoc drogowa 24h jest dostępna 365 dni w roku, również w święta i weekendy. Dyspozytornia pracuje całą dobę bez przerw.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Co zrobić po awarii na autostradzie?
              </h3>
              <p className="text-gray-600">
                Zabezpiecz miejsce awarii trójkątem, załóż kamizelkę odblaskową i zadzwoń po pomoc drogową 24/7. Nie próbuj samodzielnie naprawiać pojazdu na jezdni autostrady.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Czy można wybrać serwis, do którego ma trafić pojazd?
              </h3>
              <p className="text-gray-600">
                Tak, możesz wskazać warsztat lub serwis, do którego chcesz przetransportować pojazd. Nasze usługi lawetą obejmują transport do wybranego przez Ciebie miejsca.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Jak długo trwa ściąganie samochodu z drogi?
              </h3>
              <p className="text-gray-600">
                Czas ściągania zależy od sytuacji. Proste przypadki (np. wyciągnięcie z rowu) trwają 15-30 minut. Skomplikowane sytuacje mogą wymagać nawet kilku godzin.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Czy autolaweta może przewozić pojazd z płaskimi oponami?
              </h3>
              <p className="text-gray-600">
                Tak, nasza laweta 24h może przewozić pojazdy z uszkodzonymi oponami. Pojazd jest całkowicie podnoszony i bezpiecznie transportowany.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Co jest potrzebne do skorzystania z pomocy drogowej?
              </h3>
              <p className="text-gray-600">
                Wystarczy dowód rejestracyjny pojazdu i dokument tożsamości. Jeśli korzystasz z ubezpieczenia assistance, przygotuj również polisę ubezpieczeniową.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Czy można płacić kartą za usługi pomocy drogowej?
              </h3>
              <p className="text-gray-600">
                Tak, akceptujemy płatności kartą, gotówką oraz przelewy. Wystawiamy również faktury VAT dla firm korzystających z naszych usług.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Jak daleko może jechać laweta z moim pojazdem?
              </h3>
              <p className="text-gray-600">
                Nasze usługi lawetą obejmują transport na terenie całego kraju. Nie ma ograniczeń odległości - możemy przetransportować pojazd nawet na drugim końcu Polski.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Czy pomoc drogowa 24/7 oferuje naprawy na miejscu?
              </h3>
              <p className="text-gray-600">
                Tak, oferujemy podstawowe naprawy na miejscu: wymianę koła, dostarczenie paliwa, rozruch silnika, otwieranie zamkniętych pojazdów. Jeśli naprawa na miejscu nie jest możliwa, holujemy pojazd do serwisu.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Co się dzieje, jeśli pojazd jest uszkodzony podczas holowania?
              </h3>
              <p className="text-gray-600">
                Wszystkie nasze lawety są ubezpieczone. W razie szkody powstałej podczas transportu, koszty naprawy pokrywa nasze ubezpieczenie OC przewoźnika.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Czy można zamówić lawetę z wyprzedzeniem?
              </h3>
              <p className="text-gray-600">
                Tak, możesz zarezerwować lawetę na konkretny termin. Usługa ta jest szczególnie popularna przy transporcie pojazdów zabytkowych lub w przypadku planowanych remontów.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <BenefitsSection />
      <WhyChooseUs />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Potrzebujesz pomocy drogowej?
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Zadzwoń już teraz - jesteśmy dostępni 24 godziny na dobę!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Zadzwoń: 123-456-789
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              <Truck className="w-5 h-5 mr-2" />
              Pomoc natychmiast
            </Button>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg text-red-100 mb-4">
              Laweta 24h, usługi lawetą, holowanie i ściąganie samochodu z drogi - wszystko w jednym miejscu.
            </p>
            <p className="text-base text-red-200">
              Zaufaj naszemu doświadczeniu i skorzystaj z najlepszej pomocy drogowej 24/7 w Polsce!
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PomocDrogowaZOC;
