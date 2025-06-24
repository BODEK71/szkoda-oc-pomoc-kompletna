
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, User, Clock, CheckCircle, AlertTriangle, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BlogAutoZastepczePrawa = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Powrót do bloga
          </Link>
          
          <div className="space-y-6">
            <Badge className="bg-blue-100 text-blue-800">
              🚗 PRAWA KIEROWCY
            </Badge>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Auto zastępcze z OC: Twoje prawa i uprawnienia
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-600">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>15 grudnia 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>Zespół AutoRAM</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>8 min czytania</span>
              </div>
            </div>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Dowiedz się, jakie masz prawa do pojazdu zastępczego po wypadku komunikacyjnym 
              i jak skutecznie je wyegzekwować.
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Kiedy przysługuje Ci auto zastępcze?</h2>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-green-800 mb-2">Podstawowe warunki</h3>
                  <ul className="text-green-700 space-y-2">
                    <li>• Wypadek spowodowany przez inną osobę (nie jesteś sprawcą)</li>
                    <li>• Twój pojazd wymaga naprawy trwającej dłużej niż 1 dzień</li>
                    <li>• Posiadasz ważne prawo jazdy kategorii odpowiedniej do pojazdu</li>
                    <li>• Korzystałeś z pojazdu na co dzień (nie stał w garażu)</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Okres przysługiwania auta zastępczego</h3>
            
            <p className="text-gray-700 mb-6">
              Auto zastępcze przysługuje Ci przez cały okres, w którym Twój pojazd jest niezdatny do użytku. 
              Obejmuje to czas od momentu wypadku do chwili odebrania naprawionego samochodu z warsztatu.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-blue-900 mb-3">Maksymalne okresy:</h4>
              <ul className="text-blue-800 space-y-2">
                <li>• <strong>14 dni</strong> - dla szkód lekkich (bez wymiany części)</li>
                <li>• <strong>21 dni</strong> - dla szkód średnich</li>
                <li>• <strong>30 dni</strong> - dla szkód ciężkich</li>
                <li>• <strong>Bez limitu</strong> - gdy warsztat ma problemy z częściami</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Jaki pojazd Ci przysługuje?</h3>
            
            <p className="text-gray-700 mb-6">
              Pojazd zastępczy powinien być zbliżony do Twojego samochodu pod względem:
            </p>

            <ul className="text-gray-700 space-y-3 mb-8 pl-6">
              <li>• <strong>Klasy i segmentu</strong> (kompakt, średni, premium)</li>
              <li>• <strong>Pojemności bagażnika</strong> (ważne dla rodzin)</li>
              <li>• <strong>Liczby miejsc</strong> (minimum tyle, ile miał Twój samochód)</li>
              <li>• <strong>Typu napędu</strong> (przód, tył, 4x4 w uzasadnionych przypadkach)</li>
            </ul>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-8">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-amber-800 mb-2">Ważne!</h4>
                  <p className="text-amber-700">
                    Nie musisz się zgadzać na pojazd znacznie gorszy od Twojego. 
                    Masz prawo domagać się odpowiedniego standardu.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Jak wyegzekwować swoje prawa?</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Zgłoś roszczenie od razu</h4>
                  <p className="text-gray-700">
                    Nie czekaj na wycenę szkody. Zgłoś potrzebę auta zastępczego 
                    bezpośrednio po wypadku do ubezpieczyciela sprawcy.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Udokumentuj potrzebę</h4>
                  <p className="text-gray-700">
                    Zbierz dokumenty potwierdzające, że korzystałeś z pojazdu codziennie 
                    (tanki, parkingi, przejazdy autostradą).
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Nie płać z własnej kieszeni</h4>
                  <p className="text-gray-700">
                    Żądaj bezgotówkowego rozliczenia z wypożyczalnią. 
                    Ubezpieczyciel ma obowiązek zapłacić bezpośrednio.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Najczęstsze problemy i sposoby ich rozwiązania</h3>
            
            <div className="space-y-6 mb-8">
              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-2">
                  "Ubezpieczyciel oferuje zbyt słaby pojazd"
                </h4>
                <p className="text-gray-700">
                  <strong>Rozwiązanie:</strong> Odmów przyjęcia i zażądaj pojazdu odpowiadającego 
                  Twojemu standardowi. Powołaj się na art. 361 § 2 Kodeksu Cywilnego.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-2">
                  "Chcą ograniczyć okres wynajmu"
                </h4>
                <p className="text-gray-700">
                  <strong>Rozwiązanie:</strong> Zażądaj pisemnego uzasadnienia. Auto przysługuje 
                  przez cały okres niezdatności do użytku Twojego pojazdu.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-2">
                  "Każą płacić kaucję lub zaliczkę"
                </h4>
                <p className="text-gray-700">
                  <strong>Rozwiązanie:</strong> To nieprawne. Żądaj bezgotówkowego rozliczenia 
                  między ubezpieczycielem a wypożyczalnią.
                </p>
              </div>
            </div>

            <div className="bg-blue-600 text-white rounded-2xl p-8 text-center">
              <FileText className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Potrzebujesz pomocy?</h3>
              <p className="text-blue-100 mb-6">
                Nasz zespół pomoże Ci wyegzekwować prawo do auta zastępczego 
                i załatwi wszystkie formalności za Ciebie.
              </p>
              <Button className="bg-white text-blue-600 hover:bg-blue-50">
                Skontaktuj się z nami
              </Button>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogAutoZastepczePrawa;
