
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Phone, Clock, Calendar, User, ArrowLeft, FileText, AlertCircle, Car, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BlogBezposredniaLikwidacja = () => {
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
            <Badge className="bg-autoram-gold text-black">System ubezpieczeń</Badge>
            <div className="flex items-center text-sm text-autoram-text-muted">
              <Calendar className="w-4 h-4 mr-1" />
              5 stycznia 2024
            </div>
            <div className="flex items-center text-sm text-autoram-text-muted">
              <Clock className="w-4 h-4 mr-1" />
              7 minut czytania
            </div>
            <div className="flex items-center text-sm text-autoram-text-muted">
              <User className="w-4 h-4 mr-1" />
              Auto-Ram Ekspert
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-autoram-text mb-6">
            Bezpośrednia likwidacja szkód (BLS) - jak działa system
          </h1>
          
          <p className="text-xl text-autoram-text-muted leading-relaxed">
            Poznaj system bezpośredniej likwidacji szkód i dowiedz się jak znacznie przyspieszyć 
            proces otrzymania odszkodowania bez konieczności kontaktu ze sprawcą wypadku i jego ubezpieczycielem.
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
              <li><a href="#co-to-jest-bls" className="hover:text-autoram-red">Co to jest system BLS?</a></li>
              <li><a href="#kiedy-mozna-skorzystac" className="hover:text-autoram-red">Kiedy można skorzystać z BLS?</a></li>
              <li><a href="#zalety-bls" className="hover:text-autoram-red">Zalety bezpośredniej likwidacji</a></li>
              <li><a href="#jak-dziala-procedura" className="hover:text-autoram-red">Jak działa procedura BLS?</a></li>
              <li><a href="#wymagane-dokumenty" className="hover:text-autoram-red">Wymagane dokumenty</a></li>
              <li><a href="#ograniczenia-systemu" className="hover:text-autoram-red">Ograniczenia systemu BLS</a></li>
              <li><a href="#bls-vs-tradycyjna" className="hover:text-autoram-red">BLS vs tradycyjna likwidacja</a></li>
            </ol>
          </CardContent>
        </Card>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          
          <section id="co-to-jest-bls" className="mb-12">
            <h2 className="text-3xl font-bold text-autoram-text mb-6">Co to jest system BLS?</h2>
            
            <p className="text-autoram-text-muted mb-6">
              Bezpośrednia Likwidacja Szkód (BLS) to system umożliwiający poszkodowanym otrzymanie 
              odszkodowania bezpośrednio od własnego ubezpieczyciela, zamiast czekania na wypłatę 
              od ubezpieczyciela sprawcy wypadku.
            </p>

            <Card className="mb-6 bg-autoram-white border-autoram-gold/30">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-autoram-text mb-4">Jak to działa w praktyce:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-autoram-text mb-3 text-autoram-red">
                      🏃‍♂️ Z systemem BLS:
                    </h4>
                    <ol className="list-decimal list-inside space-y-2 text-autoram-text-muted">
                      <li>Zgłaszasz szkodę do SWOJEGO ubezpieczyciela</li>
                      <li>Otrzymujesz szybką wycenę i decyzję</li>
                      <li>Dostajesz odszkodowanie w ciągu 14-30 dni</li>
                      <li>Twój ubezpieczyciel rozlicza się ze sprawcą</li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-semibold text-autoram-text mb-3 text-autoram-gray-dark">
                      🐌 Bez systemu BLS:
                    </h4>
                    <ol className="list-decimal list-inside space-y-2 text-autoram-text-muted">
                      <li>Zgłaszasz szkodę do ubezpieczyciela SPRAWCY</li>
                      <li>Czekasz na ustalenie winy i wycenę</li>
                      <li>Proces może trwać 2-6 miesięcy</li>
                      <li>Możliwe spory i opóźnienia</li>
                    </ol>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-autoram-red/30">
              <CardContent className="pt-6">
                <div className="flex items-start">
                  <CreditCard className="w-6 h-6 text-autoram-gold-dark mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-autoram-text mb-2">Ważne!</h3>
                    <p className="text-autoram-text-muted">
                      System BLS działa tylko między ubezpieczycielami, którzy podpisali odpowiednie umowy. 
                      Auto-Ram sprawdzi, czy Twoja szkoda kwalifikuje się do szybkiej likwidacji przez BLS.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section id="kiedy-mozna-skorzystac" className="mb-12">
            <h2 className="text-3xl font-bold text-autoram-text mb-6">Kiedy można skorzystać z BLS?</h2>
            
            <p className="text-autoram-text-muted mb-6">
              System BLS ma określone warunki i ograniczenia. Nie wszystkie szkody mogą być 
              likwidowane w ten sposób.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-green-500/30">
                <CardHeader>
                  <CardTitle className="text-green-600 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Warunki konieczne
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-autoram-text">Umowa BLS</span>
                        <p className="text-sm text-autoram-text-muted">Obaj ubezpieczyciele mają podpisaną umowę BLS</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-autoram-text">Szkoda rzeczowa</span>
                        <p className="text-sm text-autoram-text-muted">Tylko uszkodzenia pojazdu, bez szkód na osobie</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-autoram-text">Limit kwotowy</span>
                        <p className="text-sm text-autoram-text-muted">Szkoda nie przekracza ustalonego limitu (zwykle 50-100 tys. zł)</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-autoram-text">Oczywista wina</span>
                        <p className="text-sm text-autoram-text-muted">Jednoznaczne ustalenie winy sprawcy</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-autoram-red/30">
                <CardHeader>
                  <CardTitle className="text-autoram-red flex items-center">
                    <AlertCircle className="w-5 h-5 mr-2" />
                    Wykluczenia z BLS
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-autoram-red rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold text-autoram-text">Szkody na osobie</span>
                        <p className="text-sm text-autoram-text-muted">Obrażenia ciała, koszty leczenia</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-autoram-red rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold text-autoram-text">Sporna wina</span>
                        <p className="text-sm text-autoram-text-muted">Gdy nie ma jednoznacznego sprawcy</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-autoram-red rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold text-autoram-text">Wysokie szkody</span>
                        <p className="text-sm text-autoram-text-muted">Przekraczające limit kwotowy BLS</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-autoram-red rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold text-autoram-text">Brak OC sprawcy</span>
                        <p className="text-sm text-autoram-text-muted">Gdy sprawca nie miał ubezpieczenia</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="zalety-bls" className="mb-12">
            <h2 className="text-3xl font-bold text-autoram-text mb-6">Zalety bezpośredniej likwidacji</h2>
            
            <p className="text-autoram-text-muted mb-6">
              System BLS oferuje wiele korzyści zarówno dla poszkodowanych jak i ubezpieczycieli, 
              głównie dzięki znacznemu przyspieszeniu całego procesu.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-autoram-gold/30">
                <CardHeader>
                  <CardTitle className="text-autoram-text flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-autoram-gold-dark" />
                    Szybkość
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-autoram-text-muted">
                    <li>• Wypłata w ciągu 14-30 dni</li>
                    <li>• Brak oczekiwania na sprawcę</li>
                    <li>• Szybka wycena szkody</li>
                    <li>• Natychmiastowe auto zastępcze</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-autoram-gold/30">
                <CardHeader>
                  <CardTitle className="text-autoram-text flex items-center">
                    <CreditCard className="w-5 h-5 mr-2 text-autoram-gold-dark" />
                    Wygoda
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-autoram-text-muted">
                    <li>• Kontakt z jednym ubezpieczycielem</li>
                    <li>• Mniej formalności</li>
                    <li>• Znany proces i procedury</li>
                    <li>• Profesjonalna obsługa</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-autoram-gold/30">
                <CardHeader>
                  <CardTitle className="text-autoram-text flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-autoram-gold-dark" />
                    Pewność
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-autoram-text-muted">
                    <li>• Gwarancja wypłaty</li>
                    <li>• Brak sporów o winę</li>
                    <li>• Standardowe procedury</li>
                    <li>• Przejrzysty proces</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-6 bg-green-50 border-green-200">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-green-700 mb-4">Przykład oszczędności czasu:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-autoram-text mb-2">🏃‍♂️ Z systemem BLS:</h4>
                    <ul className="space-y-1 text-autoram-text-muted">
                      <li>📞 Dzień 1: Zgłoszenie szkody</li>
                      <li>🔍 Dzień 3: Wycena szkody</li>
                      <li>✅ Dzień 7: Decyzja o wypłacie</li>
                      <li>💰 Dzień 14: Otrzymanie pieniędzy</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-autoram-text mb-2">🐌 Tradycyjna likwidacja:</h4>
                    <ul className="space-y-1 text-autoram-text-muted">
                      <li>📞 Dzień 1: Zgłoszenie szkody</li>
                      <li>⏳ Dzień 30: Ustalenie winy</li>
                      <li>🔍 Dzień 45: Wycena szkody</li>
                      <li>💰 Dzień 90: Otrzymanie pieniędzy</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section id="jak-dziala-procedura" className="mb-12">
            <h2 className="text-3xl font-bold text-autoram-text mb-6">Jak działa procedura BLS?</h2>
            
            <p className="text-autoram-text-muted mb-6">
              Auto-Ram sprawdzi, czy Twoja szkoda kwalifikuje się do BLS i przeprowadzi cały proces 
              w Twoim imieniu, zapewniając maksymalną wygodę i szybkość.
            </p>

            <div className="space-y-4">
              {[
                {
                  step: "1",
                  title: "Weryfikacja warunków BLS",
                  description: "Auto-Ram sprawdza, czy między ubezpieczycielami istnieje umowa BLS i czy szkoda spełnia warunki",
                  time: "W ciągu 1 godziny"
                },
                {
                  step: "2", 
                  title: "Zgłoszenie do Twojego ubezpieczyciela",
                  description: "Zgłaszamy szkodę do Twojego ubezpieczyciela zamiast do ubezpieczyciela sprawcy",
                  time: "W ciągu 2 godzin"
                },
                {
                  step: "3",
                  title: "Wycena i ekspertyza", 
                  description: "Rzeczoznawca Twojego ubezpieczyciela przeprowadza wycenę szkody",
                  time: "2-5 dni roboczych"
                },
                {
                  step: "4",
                  title: "Decyzja o wypłacie",
                  description: "Ubezpieczyciel wydaje decyzję o wysokości odszkodowania",
                  time: "3-7 dni roboczych"
                },
                {
                  step: "5",
                  title: "Wypłata odszkodowania",
                  description: "Otrzymujesz pieniądze na swoje konto lub organizujemy naprawę bezgotówkową",
                  time: "1-3 dni robocze"
                },
                {
                  step: "6",
                  title: "Rozliczenie między ubezpieczycielami",
                  description: "Twój ubezpieczyciel rozlicza się z ubezpieczycielem sprawcy (to już nie Twoja sprawa)",
                  time: "W tle procesu"
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

          <section id="wymagane-dokumenty" className="mb-12">
            <h2 className="text-3xl font-bold text-autoram-text mb-6">Wymagane dokumenty</h2>
            
            <p className="text-autoram-text-muted mb-6">
              Do rozpoczęcia procesu BLS potrzebny jest ten sam zestaw dokumentów co w tradycyjnej 
              likwidacji szkody, ale proces ich weryfikacji jest znacznie szybszy.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-autoram-gold/30">
                <CardHeader>
                  <CardTitle className="text-autoram-text">Dokumenty podstawowe</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-autoram-gold-dark mr-2" />
                      <span className="text-autoram-text-muted">Oświadczenie o wypadku</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-autoram-gold-dark mr-2" />
                      <span className="text-autoram-text-muted">Polisa ubezpieczeniowa poszkodowanego</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-autoram-gold-dark mr-2" />
                      <span className="text-autoram-text-muted">Dowód rejestracyjny pojazdu</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-autoram-gold-dark mr-2" />
                      <span className="text-autoram-text-muted">Prawo jazdy poszkodowanego</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-autoram-red/30">
                <CardHeader>
                  <CardTitle className="text-autoram-text">Dokumenty dodatkowe</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-autoram-red mr-2" />
                      <span className="text-autoram-text-muted">Protokół policji (jeśli był sporządzony)</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-autoram-red mr-2" />
                      <span className="text-autoram-text-muted">Zdjęcia miejsca wypadku i uszkodzeń</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-autoram-red mr-2" />
                      <span className="text-autoram-text-muted">Dane sprawcy i jego ubezpieczyciela</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-autoram-red mr-2" />
                      <span className="text-autoram-text-muted">Kontakt do świadków zdarzenia</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="ograniczenia-systemu" className="mb-12">
            <h2 className="text-3xl font-bold text-autoram-text mb-6">Ograniczenia systemu BLS</h2>
            
            <p className="text-autoram-text-muted mb-6">
              Chociaż system BLS jest bardzo korzystny, ma swoje ograniczenia i nie wszystkie 
              szkody mogą być w ten sposób likwidowane.
            </p>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="limit-1" className="border border-autoram-red/20 rounded-lg px-4">
                <AccordionTrigger className="text-autoram-text hover:text-autoram-red">
                  Limity kwotowe BLS
                </AccordionTrigger>
                <AccordionContent className="text-autoram-text-muted">
                  <p className="mb-3">
                    Każda umowa BLS ma określony limit kwotowy, zwykle między 50 000 a 100 000 zł. 
                    Szkody przekraczające ten limit muszą być likwidowane tradycyjnie.
                  </p>
                  <p>
                    <strong>Rozwiązanie:</strong> Auto-Ram sprawdzi limit dla Twoich ubezpieczycieli 
                    i zaproponuje najlepszą ścieżkę likwidacji.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="limit-2" className="border border-autoram-red/20 rounded-lg px-4">
                <AccordionTrigger className="text-autoram-text hover:text-autoram-red">
                  Dostępność między ubezpieczycielami
                </AccordionTrigger>
                <AccordionContent className="text-autoram-text-muted">
                  <p className="mb-3">
                    Nie wszystkie towarzystwa ubezpieczeniowe mają podpisane umowy BLS między sobą. 
                    System działa tylko gdy oba ubezpieczyciele uczestniczą w programie.
                  </p>
                  <p>
                    Auto-Ram sprawdzi dostępność BLS na podstawie danych ubezpieczycieli zaangażowanych w Twoją sprawę.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="limit-3" className="border border-autoram-red/20 rounded-lg px-4">
                <AccordionTrigger className="text-autoram-text hover:text-autoram-red">
                  Wyłączenie szkód na osobie
                </AccordionTrigger>
                <AccordionContent className="text-autoram-text-muted">
                  <p className="mb-3">
                    System BLS obejmuje tylko szkody rzeczowe. Jeśli w wypadku wystąpiły również obrażenia ciała, 
                    ta część szkody musi być likwidowana tradycyjnie.
                  </p>
                  <p>
                    W takich przypadkach Auto-Ram może przeprowadzić "hybryową" likwidację - szkody rzeczowe przez BLS, 
                    a personalne tradycyjnie.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          <section id="bls-vs-tradycyjna" className="mb-12">
            <h2 className="text-3xl font-bold text-autoram-text mb-6">BLS vs tradycyjna likwidacja</h2>
            
            <p className="text-autoram-text-muted mb-6">
              Porównanie obu systemów pokazuje wyraźne zalety BLS w przypadkach, gdzie system jest dostępny.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-autoram-red/30 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-autoram-gold text-black">
                    <th className="border border-autoram-red/30 p-4 text-left">Aspekt</th>
                    <th className="border border-autoram-red/30 p-4 text-center">System BLS</th>
                    <th className="border border-autoram-red/30 p-4 text-center">Tradycyjna likwidacja</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-autoram-white">
                    <td className="border border-autoram-red/30 p-4 font-semibold text-autoram-text">Czas wypłaty</td>
                    <td className="border border-autoram-red/30 p-4 text-center text-green-600">14-30 dni</td>
                    <td className="border border-autoram-red/30 p-4 text-center text-autoram-red">2-6 miesięcy</td>
                  </tr>
                  <tr className="bg-autoram-light">
                    <td className="border border-autoram-red/30 p-4 font-semibold text-autoram-text">Kontakt z ubezpieczycielem</td>
                    <td className="border border-autoram-red/30 p-4 text-center text-green-600">Własny (znany)</td>
                    <td className="border border-autoram-red/30 p-4 text-center text-autoram-red">Sprawcy (obcy)</td>
                  </tr>
                  <tr className="bg-autoram-white">
                    <td className="border border-autoram-red/30 p-4 font-semibold text-autoram-text">Procedury</td>
                    <td className="border border-autoram-red/30 p-4 text-center text-green-600">Uproszczone</td>
                    <td className="border border-autoram-red/30 p-4 text-center text-autoram-red">Standardowe (długie)</td>
                  </tr>
                  <tr className="bg-autoram-light">
                    <td className="border border-autoram-red/30 p-4 font-semibold text-autoram-text">Ryzyko sporów</td>
                    <td className="border border-autoram-red/30 p-4 text-center text-green-600">Minimalne</td>
                    <td className="border border-autoram-red/30 p-4 text-center text-autoram-red">Wysokie</td>
                  </tr>
                  <tr className="bg-autoram-white">
                    <td className="border border-autoram-red/30 p-4 font-semibold text-autoram-text">Auto zastępcze</td>
                    <td className="border border-autoram-red/30 p-4 text-center text-green-600">Od razu</td>
                    <td className="border border-autoram-red/30 p-4 text-center text-autoram-red">Po decyzji</td>
                  </tr>
                  <tr className="bg-autoram-light">
                    <td className="border border-autoram-red/30 p-4 font-semibold text-autoram-text">Dostępność</td>
                    <td className="border border-autoram-red/30 p-4 text-center text-orange-600">Ograniczona</td>
                    <td className="border border-autoram-red/30 p-4 text-center text-green-600">Zawsze</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-autoram-text mb-8">Najczęściej zadawane pytania</h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="faq-1" className="border border-autoram-red/20 rounded-lg px-4">
              <AccordionTrigger className="text-autoram-text hover:text-autoram-red">
                Czy BLS oznacza, że płacę z własnego ubezpieczenia?
              </AccordionTrigger>
              <AccordionContent className="text-autoram-text-muted">
                Nie! To nie jest wypłata z Twojego ubezpieczenia AC. Twój ubezpieczyciel wypłaca Ci odszkodowanie, 
                ale następnie odzyskuje te pieniądze od ubezpieczyciela sprawcy. Nie tracisz bonusa ani innych korzyści.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-2" className="border border-autoram-red/20 rounded-lg px-4">
              <AccordionTrigger className="text-autoram-text hover:text-autoram-red">
                Skąd mam wiedzieć, czy mogę skorzystać z BLS?
              </AccordionTrigger>
              <AccordionContent className="text-autoram-text-muted">
                Auto-Ram sprawdzi to za Ciebie bezpłatnie. Wystarczy podać nam dane swojego ubezpieczyciela 
                i ubezpieczyciela sprawcy - sprawdzimy dostępność BLS w ciągu kilku minut.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-3" className="border border-autoram-red/20 rounded-lg px-4">
              <AccordionTrigger className="text-autoram-text hover:text-autoram-red">
                Czy przez BLS dostanę mniej pieniędzy?
              </AccordionTrigger>
              <AccordionContent className="text-autoram-text-muted">
                Nie, wysokość odszkodowania jest identyczna jak w tradycyjnej likwidacji. Różni się tylko 
                sposób i szybkość wypłaty. BLS nie wpływa na wycenę szkody ani wysokość odszkodowania.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-4" className="border border-autoram-red/20 rounded-lg px-4">
              <AccordionTrigger className="text-autoram-text hover:text-autoram-red">
                Co jeśli moja szkoda przekracza limit BLS?
              </AccordionTrigger>
              <AccordionContent className="text-autoram-text-muted">
                W takim przypadku szkoda będzie likwidowana tradycyjnie przez ubezpieczyciela sprawcy. 
                Auto-Ram i tak pomoże Ci w całym procesie, dbając o Twoje interesy i przyspieszając procedury.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-5" className="border border-autoram-red/20 rounded-lg px-4">
              <AccordionTrigger className="text-autoram-text hover:text-autoram-red">
                Czy mogę wybrać, czy chcę BLS czy tradycyjną likwidację?
              </AccordionTrigger>
              <AccordionContent className="text-autoram-text-muted">
                Tak, to Twoja decyzja. Jeśli BLS jest dostępny, możesz wybrać tę szybszą ścieżkę lub 
                zdecydować się na tradycyjną likwidację. Auto-Ram doradzi Ci najlepsze rozwiązanie dla Twojej sytuacji.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* CTA Section */}
        <section className="mt-16">
          <Card className="bg-gradient-to-r from-autoram-red to-autoram-red-dark text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Sprawdź dostępność BLS dla Twojej szkody</h3>
              <p className="mb-6 text-autoram-white/90">
                Zadzwoń do Auto-Ram i sprawdzimy, czy Twoja szkoda kwalifikuje się do szybkiej likwidacji 
                przez system BLS. Bezpłatna konsultacja i pełna obsługa procesu.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-autoram-gold hover:bg-autoram-gold-dark text-black font-bold">
                  <Phone className="w-5 h-5 mr-2" />
                  Sprawdź BLS: 123-456-789
                </Button>
                <Link to="/obsługa-szkody-z-oc">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-autoram-red">
                    Obsługa szkody z OC
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

export default BlogBezposredniaLikwidacja;
