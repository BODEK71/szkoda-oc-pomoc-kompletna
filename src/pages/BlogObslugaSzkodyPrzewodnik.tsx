
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Phone, Clock, Calendar, User, ArrowLeft, FileText, AlertCircle, Car } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BlogObslugaSzkodyPrzewodnik = () => {
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
            <Badge className="bg-autoram-gold text-black">Przewodnik</Badge>
            <div className="flex items-center text-sm text-autoram-text-muted">
              <Calendar className="w-4 h-4 mr-1" />
              15 stycznia 2024
            </div>
            <div className="flex items-center text-sm text-autoram-text-muted">
              <Clock className="w-4 h-4 mr-1" />
              8 minut czytania
            </div>
            <div className="flex items-center text-sm text-autoram-text-muted">
              <User className="w-4 h-4 mr-1" />
              Auto-Ram Ekspert
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-autoram-text mb-6">
            Obsługa szkody z OC sprawcy - kompletny przewodnik 2024
          </h1>
          
          <p className="text-xl text-autoram-text-muted leading-relaxed">
            Kompleksowy przewodnik po obsłudze szkody z OC sprawcy wypadku. Dowiedz się krok po kroku 
            jak przebiega cały proces, jakie masz prawa jako poszkodowany i jak uzyskać pełne odszkodowanie 
            za uszkodzenia pojazdu.
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
              <li><a href="#co-to-jest-oc" className="hover:text-autoram-red">Co to jest ubezpieczenie OC sprawcy?</a></li>
              <li><a href="#pierwsze-kroki" className="hover:text-autoram-red">Pierwsze kroki po wypadku</a></li>
              <li><a href="#zgłoszenie-szkody" className="hover:text-autoram-red">Zgłoszenie szkody do ubezpieczyciela</a></li>
              <li><a href="#wycena-szkody" className="hover:text-autoram-red">Proces wyceny szkody</a></li>
              <li><a href="#auto-zastepcze" className="hover:text-autoram-red">Auto zastępcze z OC sprawcy</a></li>
              <li><a href="#naprawa-bezgotowkowa" className="hover:text-autoram-red">Naprawa bezgotówkowa</a></li>
              <li><a href="#problemy-rozwiazania" className="hover:text-autoram-red">Typowe problemy i rozwiązania</a></li>
            </ol>
          </CardContent>
        </Card>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          
          <section id="co-to-jest-oc" className="mb-12">
            <h2 className="text-3xl font-bold text-autoram-text mb-6">Co to jest ubezpieczenie OC sprawcy?</h2>
            
            <p className="text-autoram-text-muted mb-6">
              Ubezpieczenie odpowiedzialności cywilnej (OC) to obowiązkowe ubezpieczenie każdego pojazdu 
              mechanicznego w Polsce. Chroni ono poszkodowanych w wypadkach komunikacyjnych, pokrywając 
              koszty napraw, leczenia i innych szkód wyrządzonych przez ubezpieczonego sprawcę.
            </p>

            <Card className="mb-6 bg-autoram-white border-autoram-gold/30">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-autoram-text mb-4">Zakres ochrony ubezpieczenia OC:</h3>
                <ul className="space-y-2">
                  {[
                    "Szkody w pojazdach poszkodowanych",
                    "Koszty naprawy lub wypłata wartości pojazdu",
                    "Auto zastępcze dla poszkodowanych", 
                    "Koszty holowania i transport pojazdu",
                    "Szkody na osobie (leczenie, rehabilitacja)",
                    "Utrata wartości handlowej pojazdu"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-autoram-gold-dark mr-3 flex-shrink-0" />
                      <span className="text-autoram-text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>

          <section id="pierwsze-kroki" className="mb-12">
            <h2 className="text-3xl font-bold text-autoram-text mb-6">Pierwsze kroki po wypadku</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-autoram-red/30">
                <CardHeader>
                  <CardTitle className="text-autoram-red flex items-center">
                    <AlertCircle className="w-5 h-5 mr-2" />
                    Na miejscu wypadku
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal list-inside space-y-2 text-autoram-text-muted">
                    <li>Zabezpiecz miejsce wypadku</li>
                    <li>Wezwij służby ratunkowe jeśli potrzeba</li>
                    <li>Sporządź notatki z miejsca zdarzenia</li>
                    <li>Zrób zdjęcia uszkodzeń i miejsca wypadku</li>
                    <li>Zbierz dane sprawcy i świadków</li>
                    <li>Wypełnij oświadczenie o wypadku</li>
                  </ol>
                </CardContent>
              </Card>

              <Card className="border-autoram-gold/30">
                <CardHeader>
                  <CardTitle className="text-autoram-gold-dark flex items-center">
                    <Car className="w-5 h-5 mr-2" />
                    Po opuszczeniu miejsca wypadku
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal list-inside space-y-2 text-autoram-text-muted">
                    <li>Zgłoś szkodę do ubezpieczyciela sprawcy</li>
                    <li>Zgłoś sprawę do Auto-Ram</li>
                    <li>Zabezpiecz wszystkie dokumenty</li>
                    <li>Nie podpisuj żadnych dokumentów bez konsultacji</li>
                    <li>Skontaktuj się z nami: 123-456-789</li>
                    <li>Otrzymaj bezpłatną wycenę szkody</li>
                  </ol>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-autoram-red text-white">
              <CardContent className="pt-6">
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Ważne! Nie podpisuj ugody na miejscu</h3>
                    <p className="text-autoram-white/90">
                      Nigdy nie podpisuj dokumentów o zrzeczeniu się roszczeń na miejscu wypadku. 
                      Pełny zakres szkód może ujawnić się dopiero po dokładnych oględzinach w warsztacie.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section id="zgłoszenie-szkody" className="mb-12">
            <h2 className="text-3xl font-bold text-autoram-text mb-6">Zgłoszenie szkody do ubezpieczyciela</h2>
            
            <p className="text-autoram-text-muted mb-6">
              Szkodę należy zgłosić do ubezpieczyciela sprawcy wypadku w terminie 7 dni od zdarzenia. 
              Auto-Ram pomoże Ci w całym procesie zgłoszenia i będzie reprezentować Twoje interesy.
            </p>

            <div className="space-y-6">
              <Card className="border-autoram-gold/30">
                <CardHeader>
                  <CardTitle className="text-autoram-text">Dokumenty potrzebne do zgłoszenia szkody</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-autoram-gold-dark mr-2" />
                        <span className="text-autoram-text-muted">Oświadczenie o wypadku</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-autoram-gold-dark mr-2" />
                        <span className="text-autoram-text-muted">Protokół policji (jeśli był spisany)</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-autoram-gold-dark mr-2" />
                        <span className="text-autoram-text-muted">Zdjęcia uszkodzeń</span>
                      </li>
                    </ul>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-autoram-gold-dark mr-2" />
                        <span className="text-autoram-text-muted">Dokumenty pojazdu</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-autoram-gold-dark mr-2" />
                        <span className="text-autoram-text-muted">Dane sprawcy wypadku</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-autoram-gold-dark mr-2" />
                        <span className="text-autoram-text-muted">Dane świadków</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="wycena-szkody" className="mb-12">
            <h2 className="text-3xl font-bold text-autoram-text mb-6">Proces wyceny szkody</h2>
            
            <p className="text-autoram-text-muted mb-6">
              Wycena szkody to kluczowy etap procesu likwidacji. Od jej prawidłowości zależy wysokość 
              odszkodowania. Auto-Ram współpracuje z doświadczonymi rzeczoznawcami, którzy zadbają 
              o rzetelną wycenę wszystkich uszkodzeń.
            </p>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-autoram-text">Etapy wyceny szkody:</h3>
              
              <div className="grid gap-4">
                {[
                  {
                    step: "1",
                    title: "Oględziny wstępne",
                    description: "Rzeczoznawca dokonuje pierwszych oględzin uszkodzeń widocznych gołym okiem"
                  },
                  {
                    step: "2", 
                    title: "Demontaż diagnostyczny",
                    description: "W warsztacie przeprowadzany jest szczegółowy demontaż w celu wykrycia ukrytych uszkodzeń"
                  },
                  {
                    step: "3",
                    title: "Wycena ostateczna", 
                    description: "Na podstawie pełnych oględzin sporządzana jest końcowa wycena szkody"
                  },
                  {
                    step: "4",
                    title: "Akceptacja ubezpieczyciela",
                    description: "Ubezpieczyciel akceptuje wycenę i wydaje zgodę na naprawę"
                  }
                ].map((item, index) => (
                  <Card key={index} className="border-autoram-red/20">
                    <CardContent className="pt-6">
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-autoram-red text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                          {item.step}
                        </div>
                        <div>
                          <h4 className="font-semibold text-autoram-text mb-2">{item.title}</h4>
                          <p className="text-autoram-text-muted">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section id="auto-zastepcze" className="mb-12">
            <h2 className="text-3xl font-bold text-autoram-text mb-6">Auto zastępcze z OC sprawcy</h2>
            
            <p className="text-autoram-text-muted mb-6">
              Jako poszkodowany masz prawo do auta zastępczego na czas naprawy swojego pojazdu. 
              Koszty pokrywa ubezpieczyciel sprawcy wypadku.
            </p>

            <Card className="mb-6 border-autoram-gold/30">
              <CardHeader>
                <CardTitle className="text-autoram-text">Twoje prawa do auta zastępczego</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-autoram-text mb-3">Kiedy przysługuje:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-autoram-gold-dark mr-2" />
                        <span className="text-autoram-text-muted">Podczas naprawy pojazdu</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-autoram-gold-dark mr-2" />
                        <span className="text-autoram-text-muted">Po całkowitym zniszczeniu</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-autoram-gold-dark mr-2" />
                        <span className="text-autoram-text-muted">Podczas oczekiwania na części</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-autoram-text mb-3">Parametry auta:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-autoram-gold-dark mr-2" />
                        <span className="text-autoram-text-muted">Podobna klasa do uszkodzonego</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-autoram-gold-dark mr-2" />
                        <span className="text-autoram-text-muted">Bez limitów kilometrów</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-autoram-gold-dark mr-2" />
                        <span className="text-autoram-text-muted">Pełne ubezpieczenie</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section id="naprawa-bezgotowkowa" className="mb-12">
            <h2 className="text-3xl font-bold text-autoram-text mb-6">Naprawa bezgotówkowa</h2>
            
            <p className="text-autoram-text-muted mb-6">
              Naprawa bezgotówkowa to najbardziej wygodna forma likwidacji szkody. Oznacza, że nie musisz 
              płacić za naprawę - warsztat rozlicza się bezpośrednio z ubezpieczycielem sprawcy.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-green-500/30">
                <CardHeader>
                  <CardTitle className="text-green-600">Zalety naprawy bezgotówkowej</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-autoram-text-muted">Brak konieczności płacenia z góry</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-autoram-text-muted">Szybszy proces naprawy</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-autoram-text-muted">Gwarancja na naprawę</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-autoram-text-muted">Mniej formalności</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-autoram-gold/30">
                <CardHeader>
                  <CardTitle className="text-autoram-gold-dark">Jak działa proces</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal list-inside space-y-2 text-autoram-text-muted">
                    <li>Wybór warsztatu partnerskiego</li>
                    <li>Zgodać ubezpieczyciela na naprawę</li>
                    <li>Wykonanie naprawy zgodnie z wycená</li>
                    <li>Odbiór pojazdu po naprawie</li>
                    <li>Rozliczenie między warsztatem a ubezpieczycielem</li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="problemy-rozwiazania" className="mb-12">
            <h2 className="text-3xl font-bold text-autoram-text mb-6">Typowe problemy i rozwiązania</h2>
            
            <p className="text-autoram-text-muted mb-6">
              W procesie likwidacji szkody mogą pojawić się różne problemy. Auto-Ram pomoże Ci 
              je rozwiązać i zapewni profesjonalne wsparcie na każdym etapie.
            </p>

            <div className="space-y-4">
              {[
                {
                  problem: "Ubezpieczyciel zaniża odszkodowanie",
                  solution: "Możemy zlecić niezależną ekspertyzę i reprezentować Twoje interesy w sporze z ubezpieczycielem."
                },
                {
                  problem: "Długie oczekiwanie na decyzję",
                  solution: "Regularnie monitorujemy postęp sprawy i interweniujemy w przypadku opóźnień."
                },
                {
                  problem: "Problemy z auto zastępczym", 
                  solution: "Zapewniamy auto zastępcze z naszej floty, gdy ubezpieczyciel przeciąga decyzję."
                },
                {
                  problem: "Ukryte uszkodzenia po wypadku",
                  solution: "Przeprowadzamy dokładne oględziny i dopilnowujemy uwzględnienia wszystkich uszkodzeń."
                }
              ].map((item, index) => (
                <Card key={index} className="border-autoram-red/20">
                  <CardContent className="pt-6">
                    <div className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-autoram-red mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-autoram-text mb-2">{item.problem}</h4>
                        <p className="text-autoram-text-muted">{item.solution}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-autoram-text mb-8">Najczęściej zadawane pytania</h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="faq-1" className="border border-autoram-red/20 rounded-lg px-4">
              <AccordionTrigger className="text-autoram-text hover:text-autoram-red">
                Jak długo trwa cały proces obsługi szkody z OC sprawcy?
              </AccordionTrigger>
              <AccordionContent className="text-autoram-text-muted">
                Czas obsługi szkody zależy od jej złożoności. Proste przypadki mogą być załatwione w ciągu 2-3 tygodni, 
                podczas gdy bardziej skomplikowane sprawy mogą trwać do 2 miesięcy. Auto-Ram aktywnie monitoruje 
                postęp każdej sprawy i interweniuje w przypadku opóźnień.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-2" className="border border-autoram-red/20 rounded-lg px-4">
              <AccordionTrigger className="text-autoram-text hover:text-autoram-red">
                Czy muszę płacić za usługi Auto-Ram?
              </AccordionTrigger>
              <AccordionContent className="text-autoram-text-muted">
                Nie, nasze podstawowe usługi obsługi szkody z OC sprawcy są bezpłatne. Zarabiamy na współpracy 
                z warsztatami i ubezpieczycielami. Płacisz tylko wtedy, gdy korzystasz z dodatkowych usług 
                jak auto zastępcze premium czy ekspresowa naprawa.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-3" className="border border-autoram-red/20 rounded-lg px-4">
              <AccordionTrigger className="text-autoram-text hover:text-autoram-red">
                Co się stanie, jeśli sprawca wypadku nie miał ubezpieczenia OC?
              </AccordionTrigger>
              <AccordionContent className="text-autoram-text-muted">
                W przypadku braku OC u sprawcy, szkody pokrywa Ubezpieczeniowy Fundusz Gwarancyjny (UFG). 
                Procedura jest podobna, ale może trwać nieco dłużej. Auto-Ram pomoże Ci także w tym przypadku, 
                reprezentując Twoje interesy wobec UFG.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-4" className="border border-autoram-red/20 rounded-lg px-4">
              <AccordionTrigger className="text-autoram-text hover:text-autoram-red">
                Czy mogę wybrać warsztat naprawczy?
              </AccordionTrigger>
              <AccordionContent className="text-autoram-text-muted">
                Tak, masz prawo wyboru warsztatu naprawczego. Auto-Ram współpracuje z siecią sprawdzonych 
                warsztatów, ale możesz też wybrać swój zaufany serwis. Ważne, aby warsztat był w stanie 
                przeprowadzić naprawę bezgotówkową z ubezpieczycielem sprawcy.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-5" className="border border-autoram-red/20 rounded-lg px-4">
              <AccordionTrigger className="text-autoram-text hover:text-autoram-red">
                Jak długo będę mieć auto zastępcze?
              </AccordionTrigger>
              <AccordionContent className="text-autoram-text-muted">
                Auto zastępcze przysługuje Ci na cały czas naprawy Twojego pojazdu. Jeśli naprawa trwa 3 tygodnie, 
                przez cały ten czas masz prawo do auta zastępczego. W przypadku całkowitego zniszczenia pojazdu, 
                auto zastępcze przysługuje do momentu wypłaty odszkodowania lub zakupu nowego auta.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* CTA Section */}
        <section className="mt-16">
          <Card className="bg-gradient-to-r from-autoram-red to-autoram-red-dark text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Potrzebujesz pomocy w obsłudze szkody?</h3>
              <p className="mb-6 text-autoram-white/90">
                Skontaktuj się z Auto-Ram już dziś. Zapewnimy profesjonalną obsługę Twojej szkody 
                z OC sprawcy i zadbamy o Twoje interesy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-autoram-gold hover:bg-autoram-gold-dark text-black font-bold">
                  <Phone className="w-5 h-5 mr-2" />
                  Zadzwoń: 123-456-789
                </Button>
                <Link to="/obsługa-szkody-z-oc">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-autoram-red">
                    Dowiedz się więcej
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

export default BlogObslugaSzkodyPrzewodnik;
