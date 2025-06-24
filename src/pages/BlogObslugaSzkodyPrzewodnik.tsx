
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, User, CheckCircle, AlertTriangle, FileText, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BlogObslugaSzkodyPrzewodnik = () => {
  const steps = [
    {
      title: "Zabezpiecz miejsce wypadku",
      description: "Postaw trójkąt ostrzegawczy, włącz światła awaryjne",
      important: true
    },
    {
      title: "Wezwij pomoc",
      description: "Zadzwoń na 112 w przypadku obrażeń lub dużych szkód",
      important: true
    },
    {
      title: "Dokumentuj zdarzenie",
      description: "Zrób zdjęcia, zapisz dane uczestników",
      important: false
    },
    {
      title: "Wypełnij oświadczenie",
      description: "Wspólne oświadczenie o zdarzeniu drogowym",
      important: false
    },
    {
      title: "Zgłoś szkodę",
      description: "Skontaktuj się z ubezpieczycielem w ciągu 7 dni",
      important: true
    }
  ];

  const documents = [
    "Dowód rejestracyjny pojazdu",
    "Polisa ubezpieczeniowa OC",
    "Prawo jazdy",
    "Protokół policji (jeśli sporządzony)",
    "Oświadczenie o zdarzeniu drogowym",
    "Zdjęcia z miejsca zdarzenia"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Powrót do bloga
          </Link>
        </div>

        {/* Article Header */}
        <article className="space-y-8">
          <header className="space-y-6">
            <Badge className="bg-blue-100 text-blue-800">
              📚 PRZEWODNIK
            </Badge>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Obsługa szkody OC - kompletny przewodnik krok po kroku
            </h1>
            
            <div className="flex items-center space-x-6 text-gray-600">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">15 min czytania</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span className="text-sm">Auto-Ram Team</span>
              </div>
            </div>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Miałeś wypadek i nie wiesz co robić dalej? Nasz szczegółowy przewodnik pomoże Ci 
              przejść przez cały proces obsługi szkody z OC sprawcy - od pierwszych chwil po wypadku 
              do otrzymania odszkodowania.
            </p>
          </header>

          {/* Article Image */}
          <div className="rounded-2xl overflow-hidden">
            <img
              src="/lovable-uploads/98c1a9a6-892d-403f-a83e-d61e11ade53e.png"
              alt="Obsługa szkody OC - przewodnik"
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-12">
            
            {/* Co to jest OC sprawcy */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Co to jest ubezpieczenie OC sprawcy?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ubezpieczenie odpowiedzialności cywilnej (OC) to obowiązkowe ubezpieczenie każdego pojazdu. 
                Gdy sprawca wypadku ma wykupione OC, jego ubezpieczyciel pokrywa szkody powstałe u poszkodowanych.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Jako poszkodowany masz prawo do pełnego odszkodowania z polisy OC sprawcy, 
                bez względu na to, czy sam jesteś ubezpieczony.
              </p>
            </section>

            {/* Pierwsze kroki */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Pierwsze kroki po wypadku
              </h2>
              <div className="space-y-4">
                {steps.map((step, index) => (
                  <Card key={index} className={`${step.important ? 'border-red-200 bg-red-50' : 'border-gray-200'}`}>
                    <CardHeader className="pb-3">
                      <div className="flex items-start space-x-4">
                        <div className={`w-8 h-8 ${step.important ? 'bg-red-600' : 'bg-blue-600'} text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0`}>
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg font-bold text-gray-900 flex items-center">
                            {step.title}
                            {step.important && <AlertTriangle className="w-5 h-5 text-red-600 ml-2" />}
                          </CardTitle>
                          <CardDescription className="text-gray-600 mt-1">
                            {step.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </section>

            {/* Wymagane dokumenty */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Wymagane dokumenty
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Do zgłoszenia szkody z OC sprawcy będziesz potrzebować następujących dokumentów:
              </p>
              <div className="grid gap-3">
                {documents.map((doc, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-900">{doc}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Proces likwidacji */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Jak przebiega proces likwidacji?
              </h2>
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">1. Zgłoszenie szkody</h3>
                  <p className="text-gray-700">
                    Szkodę zgłaszasz do ubezpieczyciela sprawcy wypadku. Możesz to zrobić telefonicznie, 
                    online lub osobiście w oddziale. Pamiętaj o terminie 7 dni od zdarzenia.
                  </p>
                </div>
                
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">2. Wycena szkody</h3>
                  <p className="text-gray-700">
                    Rzeczoznawca ubezpieczyciela oceni szkody w Twoim pojeździe i wyceni koszty naprawy. 
                    Możesz uczestniczyć w oględzinach i przedstawić własną wycenę.
                  </p>
                </div>
                
                <div className="bg-orange-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">3. Decyzja o odszkodowaniu</h3>
                  <p className="text-gray-700">
                    Ubezpieczyciel podejmuje decyzję o wysokości odszkodowania i sposobie likwidacji szkody - 
                    może to być naprawa w wybranym warsztacie lub wypłata pieniędzy.
                  </p>
                </div>
                
                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">4. Realizacja odszkodowania</h3>
                  <p className="text-gray-700">
                    Po akceptacji warunków otrzymujesz odszkodowanie - pojazd trafia do naprawy 
                    lub dostajesz wypłatę pieniężną na wskazane konto.
                  </p>
                </div>
              </div>
            </section>

            {/* Na co uważać */}
            <section className="bg-red-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <AlertTriangle className="w-8 h-8 text-red-600 mr-3" />
                Na co należy uważać?
              </h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                  <span>Nie podpisuj dokumentów, których nie rozumiesz</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                  <span>Zachowaj kopie wszystkich dokumentów i korespondencji</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                  <span>Nie zgadzaj się na zaniżone wyceny szkód</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                  <span>Sprawdź czy warsztat ma odpowiednie certyfikaty</span>
                </li>
              </ul>
            </section>

            {/* Kiedy skorzystać z pomocy */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Kiedy warto skorzystać z profesjonalnej pomocy?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Proces likwidacji szkody może być skomplikowany, szczególnie gdy:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Szkody są znaczne (powyżej 10 000 zł)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Ubezpieczyciel zaniża wycenę lub odmawia wypłaty</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Doszło do obrażeń ciała</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Sprawca wypadku nie ma ubezpieczenia OC</span>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                W takich sytuacjach profesjonalna pomoc może znacznie zwiększyć Twoje szanse 
                na otrzymanie pełnego odszkodowania.
              </p>
            </section>

          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              Potrzebujesz pomocy w obsłudze szkody?
            </h3>
            <p className="text-blue-100 mb-6">
              Nasz zespół ekspertów pomoże Ci przejść przez cały proces i uzyskać maksymalne odszkodowanie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Phone className="w-5 h-5 mr-2" />
                Zadzwoń: 123-456-789
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <FileText className="w-5 h-5 mr-2" />
                Bezpłatna konsultacja
              </Button>
            </div>
          </div>

        </article>
      </div>

      <Footer />
    </div>
  );
};

export default BlogObslugaSzkodyPrzewodnik;
