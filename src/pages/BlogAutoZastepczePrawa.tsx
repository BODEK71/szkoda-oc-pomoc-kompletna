
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Phone, Clock, Calendar, User, ArrowLeft, FileText, AlertCircle, Car } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BlogAutoZastepczePrawa = () => {
  return (
    <div className="min-h-screen bg-autoram-light">
      <Navbar />
      
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link to="/blog" className="inline-flex items-center text-autoram-red hover:text-autoram-red-dark">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Powrót do bloga
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Badge className="bg-autoram-gold text-black">Prawa poszkodowanych</Badge>
            <div className="flex items-center text-sm text-autoram-text-muted">
              <Calendar className="w-4 h-4 mr-1" />
              10 stycznia 2024
            </div>
            <div className="flex items-center text-sm text-autoram-text-muted">
              <Clock className="w-4 h-4 mr-1" />
              6 minut czytania
            </div>
            <div className="flex items-center text-sm text-autoram-text-muted">
              <User className="w-4 h-4 mr-1" />
              Auto-Ram Ekspert
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-autoram-text mb-6">
            Auto zastępcze z OC sprawcy - Twoje prawa i uprawnienia
          </h1>
          
          <p className="text-xl text-autoram-text-muted leading-relaxed">
            Poznaj swoje prawa do auta zastępczego po wypadku komunikacyjnym. Dowiedz się jak długo przysługuje, 
            jakie warunki musisz spełnić i jak uzyskać najlepsze auto zastępcze z ubezpieczenia OC sprawcy.
          </p>
        </header>

        {/* Table of Contents */}
        <Card className="mb-12 border-autoram-gold/30">
          <CardHeader>
            <CardTitle className="flex items-center text-autoram-text">
              <FileText className="w-5 h-5 mr-2" />
              Spis treści
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-2 text-autoram-text-muted">
              <li><a href="#podstawy-prawne" className="hover:text-autoram-red">Podstawy prawne auta zastępczego</a></li>
              <li><a href="#kiedy-przysluguje" className="hover:text-autoram-red">Kiedy przysługuje auto zastępcze</a></li>
              <li><a href="#jak-dlugo" className="hover:text-autoram-red">Jak długo można korzystać</a></li>
              <li><a href="#parametry-auta" className="hover:text-autoram-red">Parametry auta zastępczego</a></li>
              <li><a href="#koszty-i-limity" className="hover:text-autoram-red">Koszty i limity</a></li>
              <li><a href="#procedura-otrzymania" className="hover:text-autoram-red">Procedura otrzymania auta</a></li>
              <li><a href="#problemy-i-spory" className="hover:text-autoram-red">Typowe problemy i spory</a></li>
            </ol>
          </CardContent>
        </Card>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          
          <section id="podstawy-prawne" className="mb-12">
            <h2 className="text-3xl font-bold text-autoram-text mb-6">Podstawy prawne auta zastępczego</h2>
            
            <p className="text-autoram-text-muted mb-6">
              Prawo do auta zastępczego wynika z ustawy o ubezpieczeniach obowiązkowych i stanowi element 
              odszkodowania za szkodę rzeczową. Ubezpieczyciel sprawcy jest zobowiązany pokryć koszty 
              alternatywnego środka transportu na czas naprawy uszkodzonego pojazdu.
            </p>

            <Card className="mb-6 bg-autoram-white border-autoram-red/30">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-autoram-text mb-4">Podstawa prawna:</h3>
                <div className="bg-autoram-gray p-4 rounded-lg border-l-4 border-autoram-red">
                  <p className="text-autoram-text-muted">
                    <strong>Art. 36 ust. 1 ustawy o ubezpieczeniach obowiązkowych:</strong><br />
                    "Ubezpieczyciel jest obowiązany naprawić szkodę rzeczową do wysokości rzeczywistej wartości 
                    przedmiotu ubezpieczenia w dniu wypadku, nie więcej jednak niż do sum gwarancyjnych."
                  </p>
                </div>
                <p className="text-autoram-text-muted mt-4">
                  Auto zastępcze jest uznawane za część szkody rzeczowej, gdyż poszkodowany traci możliwość 
                  korzystania ze swojego pojazdu.
                </p>
              </CardContent>
            </Card>
          </section>

          <section id="kiedy-przysluguje" className="mb-12">
            <h2 className="text-3xl font-bold text-autoram-text mb-6">Kiedy przysługuje auto zastępcze</h2>
            
            <p className="text-autoram-text-muted mb-6">
              Auto zastępcze przysługuje w każdej sytuacji, gdy poszkodowany traci możliwość korzystania 
              ze swojego pojazdu z winy sprawcy wypadku.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-green-500/30">
                <CardHeader>
                  <CardTitle className="text-green-600 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Sytuacje, gdy przysługuje
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-autoram-text">Naprawa pojazdu</span>
                        <p className="text-sm text-autoram-text-muted">Na cały czas trwania naprawy w warsztacie</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-autoram-text">Oczekiwanie na części</span>
                        <p className="text-sm text-autoram-text-muted">Gdy warsztat czeka na dostawę części zamiennych</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-autoram-text">Całkowite zniszczenie</span>
                        <p className="text-sm text-autoram-text-muted">Do momentu wypłaty odszkodowania</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-autoram-text">Wycena szkody</span>
                        <p className="text-sm text-autoram-text-muted">Podczas oczekiwania na decyzję ubezpieczyciela</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-autoram-red/30">
                <CardHeader>
                  <CardTitle className="text-autoram-red flex items-center">
                    <AlertCircle className="w-5 h-5 mr-2" />
                    Warunki konieczne
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-autoram-red rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold text-autoram-text">Wina sprawcy</span>
                        <p className="text-sm text-autoram-text-muted">Sprawca musi być w 100% winny wypadku</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-autoram-red rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold text-autoram-text">Pojazd niezdatny</span>
                        <p className="text-sm text-autoram-text-muted">Auto musi być niezdatne do użytku</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-autoram-red rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold text-autoram-text">Uzasadniona potrzeba</span>
                        <p className="text-sm text-autoram-text-muted">Poszkodowany musi wykazać potrzebę transportu</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-autoram-red rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold text-autoram-text">Brak alternatywy</span>
                        <p className="text-sm text-autoram-text-muted">Brak możliwości korzystania z innego pojazdu</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="jak-dlugo" className="mb-12">
            <h2 className="text-3xl font-bold text-autoram-text mb-6">Jak długo można korzystać z auta zastępczego</h2>
            
            <p className="text-autoram-text-muted mb-6">
              Czas korzystania z auta zastępczego nie jest ograniczony żadnymi limitami czasowymi, 
              ale musi być uzasadniony rzeczywistą potrzebą.
            </p>

            <div className="space-y-6">
              <Card className="border-autoram-gold/30">
                <CardHeader>
                  <CardTitle className="text-autoram-text">Okresy korzystania w różnych sytuacjach</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start p-4 bg-autoram-light rounded-lg">
                      <Car className="w-6 h-6 text-autoram-gold-dark mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-autoram-text mb-2">Naprawa standardowa</h4>
                        <p className="text-autoram-text-muted mb-2">
                          <strong>Czas:</strong> Zwykle 2-4 tygodnie, w zależności od zakresu uszkodzeń
                        </p>
                        <p className="text-autoram-text-muted">
                          Auto zastępcze przysługuje od momentu przekazania pojazdu do warsztatu 
                          do jego odbioru po zakończeniu naprawy.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start p-4 bg-autoram-light rounded-lg">
                      <Car className="w-6 h-6 text-autoram-gold-dark mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-autoram-text mb-2">Oczekiwanie na części</h4>
                        <p className="text-autoram-text-muted mb-2">
                          <strong>Czas:</strong> Dodatkowe 1-8 tygodni (zależnie od dostępności części)
                        </p>
                        <p className="text-autoram-text-muted">
                          Jeśli warsztat oczekuje na części zamienne, auto zastępcze przysługuje 
                          przez cały okres oczekiwania.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start p-4 bg-autoram-light rounded-lg">
                      <Car className="w-6 h-6 text-autoram-gold-dark mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-autoram-text mb-2">Całkowite zniszczenie</h4>
                        <p className="text-autoram-text-muted mb-2">
                          <strong>Czas:</strong> Do momentu wypłaty odszkodowania lub zakupu nowego auta
                        </p>
                        <p className="text-autoram-text-muted">
                          Maksymalnie do 3 miesięcy, chyba że poszkodowany udowodni dłuższą potrzebę 
                          poszukiwania odpowiedniego pojazdu.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="parametry-auta" className="mb-12">
            <h2 className="text-3xl font-bold text-autoram-text mb-6">Parametry auta zastępczego</h2>
            
            <p className="text-autoram-text-muted mb-6">
              Auto zastępcze powinno być podobne do uszkodzonego pojazdu pod względem klasy, 
              pojemności silnika i funkcjonalności.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-autoram-gold/30">
                <CardHeader>
                  <CardTitle className="text-autoram-text">Parametry techniczne</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-autoram-gold-dark mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-autoram-text">Podobna klasa</span>
                        <p className="text-sm text-autoram-text-muted">Segment A, B, C, D - zgodnie z uszkodzonym autem</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-autoram-gold-dark mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-autoram-text">Pojemność silnika</span>
                        <p className="text-sm text-autoram-text-muted">±20% pojemności silnika uszkodzonego pojazdu</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-autoram-gold-dark mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-autoram-text">Rodzaj paliwa</span>
                        <p className="text-sm text-autoram-text-muted">Benzyna, diesel, hybryda - zgodnie z oryginałem</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-autoram-gold-dark mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-autoram-text">Liczba miejsc</span>
                        <p className="text-sm text-autoram-text-muted">Nie mniej niż w uszkodzonym pojeździe</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-autoram-red/30">
                <CardHeader>
                  <CardTitle className="text-autoram-text">Wyposażenie i komfort</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-autoram-red mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-autoram-text">Klimatyzacja</span>
                        <p className="text-sm text-autoram-text-muted">Jeśli była w uszkodzonym aucie</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-autoram-red mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-autoram-text">Skrzynia biegów</span>
                        <p className="text-sm text-autoram-text-muted">Manualna lub automatyczna - jak w oryginale</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-autoram-red mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-autoram-text">Napęd</span>
                        <p className="text-sm text-autoram-text-muted">Przód, tył, 4x4 - zgodnie z potrzebami</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-autoram-red mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-autoram-text">Wiek pojazdu</span>
                        <p className="text-sm text-autoram-text-muted">Maksymalnie 5-7 lat, w dobrym stanie technicznym</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="koszty-i-limity" className="mb-12">
            <h2 className="text-3xl font-bold text-autoram-text mb-6">Koszty i limity</h2>
            
            <p className="text-autoram-text-muted mb-6">
              Wszystkie koszty związane z autem zastępczym pokrywa ubezpieczyciel sprawcy wypadku. 
              Nie ma limitów kilometrów ani dodatkowych opłat dla poszkodowanego.
            </p>

            <Card className="mb-6 bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-700">Co pokrywa ubezpieczyciel</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-autoram-text-muted">Koszt wynajmu auta</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-autoram-text-muted">Pełne ubezpieczenie AC i OC</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-autoram-text-muted">Pomoc drogowa</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-autoram-text-muted">Unlimited kilometry</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-autoram-text-muted">Dostawa i odbiór auta</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-autoram-text-muted">Obsługa 24/7</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-autoram-red/30">
              <CardHeader>
                <CardTitle className="text-autoram-text flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  Koszty własne poszkodowanego
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-autoram-text-muted mb-4">Jedyne koszty, które ponosi poszkodowany:</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-autoram-red rounded-full mr-3"></div>
                    <span className="text-autoram-text-muted"><strong>Paliwo</strong> - koszty tankowania podczas użytkowania</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-autoram-red rounded-full mr-3"></div>
                    <span className="text-autoram-text-muted"><strong>Mandaty</strong> - za ewentualne wykroczenia drogowe</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-autoram-red rounded-full mr-3"></div>
                    <span className="text-autoram-text-muted"><strong>Uszkodzenia</strong> - jeśli poszkodowany uszkodzi auto zastępcze</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section id="procedura-otrzymania" className="mb-12">
            <h2 className="text-3xl font-bold text-autoram-text mb-6">Procedura otrzymania auta zastępczego</h2>
            
            <p className="text-autoram-text-muted mb-6">
              Auto-Ram prowadzi cały proces uzyskania auta zastępczego, od kontaktu z ubezpieczycielem 
              po dostawę pojazdu pod wskazany adres.
            </p>

            <div className="space-y-4">
              {[
                {
                  step: "1",
                  title: "Kontakt z Auto-Ram",
                  description: "Dzwonisz do nas zaraz po wypadku - 123-456-789",
                  time: "Od razu po wypadku"
                },
                {
                  step: "2", 
                  title: "Analiza sprawy",
                  description: "Analizujemy dokumenty wypadku i sprawdzamy podstawy do auta zastępczego",
                  time: "W ciągu 1 godziny"
                },
                {
                  step: "3",
                  title: "Kontakt z ubezpieczycielem", 
                  description: "Zgłaszamy wniosek o auto zastępcze do ubezpieczyciela sprawcy",
                  time: "W ciągu 2-4 godzin"
                },
                {
                  step: "4",
                  title: "Rezerwacja pojazdu",
                  description: "Rezerwujemy odpowiednie auto zastępcze w naszej flocie partnerskiej",
                  time: "W ciągu 4-6 godzin"
                },
                {
                  step: "5",
                  title: "Dostawa auta",
                  description: "Dostarczamy auto zastępcze pod wskazany adres z pełną dokumentacją",
                  time: "W ciągu 24 godzin"
                }
              ].map((item, index) => (
                <Card key={index} className="border-autoram-gold/20">
                  <CardContent className="pt-6">
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-autoram-gold text-black rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-autoram-text">{item.title}</h4>
                          <Badge variant="outline" className="text-xs">{item.time}</Badge>
                        </div>
                        <p className="text-autoram-text-muted">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section id="problemy-i-spory" className="mb-12">
            <h2 className="text-3xl font-bold text-autoram-text mb-6">Typowe problemy i spory</h2>
            
            <p className="text-autoram-text-muted mb-6">
              Ubezpieczyciele często próbują ograniczyć lub odmówić świadczenia auta zastępczego. 
              Auto-Ram zna wszystkie takie praktyki i wie jak skutecznie im przeciwdziałać.
            </p>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="problem-1" className="border border-autoram-red/20 rounded-lg px-4">
                <AccordionTrigger className="text-autoram-text hover:text-autoram-red">
                  Ubezpieczyciel odmawia auta zastępczego
                </AccordionTrigger>
                <AccordionContent className="text-autoram-text-muted">
                  <p className="mb-3">
                    <strong>Typowe wymówki ubezpieczycieli:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li>"Nie ma podstaw do auta zastępczego"</li>
                    <li>"Poszkodowany może korzystać z komunikacji publicznej"</li>
                    <li>"Auto jest sprawne do jazdy"</li>
                    <li>"Zbyt długo trwa naprawa"</li>
                  </ul>
                  <p>
                    <strong>Rozwiązanie:</strong> Auto-Ram zna przepisy i skutecznie argumentuje prawo do auta zastępczego. 
                    W razie potrzeby skierujemy sprawę do Rzecznika Ubezpieczonych lub na drogę sądową.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="problem-2" className="border border-autoram-red/20 rounded-lg px-4">
                <AccordionTrigger className="text-autoram-text hover:text-autoram-red">
                  Zbyt niski standard auta zastępczego
                </AccordionTrigger>
                <AccordionContent className="text-autoram-text-muted">
                  <p className="mb-3">
                    Ubezpieczyciel proponuje auto znacznie gorsze od uszkodzonego (np. małego city car zamiast SUV-a).
                  </p>
                  <p>
                    <strong>Rozwiązanie:</strong> Przedstawiamy szczegółową argumentację dot. parametrów uszkodzonego pojazdu 
                    i żądamy auta o podobnych parametrach. Powoływujemy się na wyroki sądowe w podobnych sprawach.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="problem-3" className="border border-autoram-red/20 rounded-lg px-4">
                <AccordionTrigger className="text-autoram-text hover:text-autoram-red">
                  Ograniczenia czasowe lub kilometrowe
                </AccordionTrigger>
                <AccordionContent className="text-autoram-text-muted">
                  <p className="mb-3">
                    Ubezpieczyciel próbuje narzucić limity czasowe (np. "tylko 2 tygodnie") lub kilometrowe.
                  </p>
                  <p>
                    <strong>Rozwiązanie:</strong> Przepisy nie przewidują takich limitów. Auto zastępcze przysługuje 
                    przez cały uzasadniony okres niemożności korzystania z własnego pojazdu, bez ograniczeń kilometrowych.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="problem-4" className="border border-autoram-red/20 rounded-lg px-4">
                <AccordionTrigger className="text-autoram-text hover:text-autoram-red">
                  Długie oczekiwanie na decyzję
                </AccordionTrigger>
                <AccordionContent className="text-autoram-text-muted">
                  <p className="mb-3">
                    Ubezpieczyciel przeciąga decyzję o przyznaniu auta zastępczego, a poszkodowany zostaje bez transportu.
                  </p>
                  <p>
                    <strong>Rozwiązanie:</strong> Auto-Ram może zapewnić auto zastępcze z własnej floty już w pierwszym dniu, 
                    a następnie rozliczyć koszty z ubezpieczycielem. Nie musisz czekać na decyzję ubezpieczyciela.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </div>

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-autoram-text mb-8">Najczęściej zadawane pytania</h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="faq-1" className="border border-autoram-red/20 rounded-lg px-4">
              <AccordionTrigger className="text-autoram-text hover:text-autoram-red">
                Czy przysługuje mi auto zastępcze, jeśli nie jestem współwinny wypadku?
              </AccordionTrigger>
              <AccordionContent className="text-autoram-text-muted">
                Tak, jeśli sprawca jest w 100% winny wypadku, przysługuje Ci pełny pakiet świadczeń z jego OC, 
                w tym auto zastępcze na cały czas niemożności korzystania z Twojego pojazdu.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-2" className="border border-autoram-red/20 rounded-lg px-4">
              <AccordionTrigger className="text-autoram-text hover:text-autoram-red">
                Czy mogę wybrać konkretny model auta zastępczego?
              </AccordionTrigger>
              <AccordionContent className="text-autoram-text-muted">
                Masz prawo do auta o podobnych parametrach do uszkodzonego. Konkretny model zależy od dostępności 
                w flocie, ale Auto-Ram zadba, żeby auto było maksymalnie podobne do Twojego uszkodzonego pojazdu.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-3" className="border border-autoram-red/20 rounded-lg px-4">
              <AccordionTrigger className="text-autoram-text hover:text-autoram-red">
                Co jeśli moje auto ma napęd 4x4 - czy dostanę podobne?
              </AccordionTrigger>
              <AccordionContent className="text-autoram-text-muted">
                Tak, jeśli Twój pojazd ma napęd 4x4 i jest to istotne dla Twojego sposobu użytkowania 
                (np. mieszkasz w terenie górskim), masz prawo do auta zastępczego z napędem 4x4.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-4" className="border border-autoram-red/20 rounded-lg px-4">
              <AccordionTrigger className="text-autoram-text hover:text-autoram-red">
                Czy auto zastępcze przysługuje mi też w weekendy?
              </AccordionTrigger>
              <AccordionContent className="text-autoram-text-muted">
                Oczywiście! Auto zastępcze przysługuje Ci 24/7 przez cały okres naprawy lub do wypłaty odszkodowania. 
                Nie ma żadnych ograniczeń czasowych w ciągu dnia czy tygodnia.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-5" className="border border-autoram-red/20 rounded-lg px-4">
              <AccordionTrigger className="text-autoram-text hover:text-autoram-red">
                Co się stanie, jeśli uszkodzę auto zastępcze?
              </AccordionTrigger>
              <AccordionContent className="text-autoram-text-muted">
                Auto zastępcze jest objęte pełnym ubezpieczeniem AC i OC. W przypadku drobnych uszkodzeń 
                możesz ponieść franszyze ubezpieczeniową. Auto-Ram pomoże Ci w całej procedurze likwidacji 
                ewentualnej szkody w aucie zastępczym.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* CTA Section */}
        <section className="mt-16">
          <Card className="bg-gradient-to-r from-autoram-gold to-autoram-gold-dark text-black">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Potrzebujesz auta zastępczego?</h3>
              <p className="mb-6">
                Zadzwoń do Auto-Ram już dziś. Zapewnimy Ci auto zastępcze w ciągu 24 godzin 
                i zadbamy o wszystkie formalności z ubezpieczycielem sprawcy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-autoram-red hover:bg-autoram-red-dark text-white font-bold">
                  <Phone className="w-5 h-5 mr-2" />
                  Zadzwoń: 123-456-789
                </Button>
                <Link to="/auto-zastepcze-z-oc">
                  <Button size="lg" variant="outline" className="border-autoram-red text-autoram-red hover:bg-autoram-red hover:text-white">
                    Auto zastępcze z OC
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </article>

      <Footer />
    </div>
  );
};

export default BlogAutoZastepczePrawa;
