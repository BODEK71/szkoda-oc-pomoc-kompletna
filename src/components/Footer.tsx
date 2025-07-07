
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">AR</span>
              </div>
              <div>
                <span className="text-xl font-bold">Auto-Ram</span>
                <p className="text-xs text-gray-400">Grodzisk Wielkopolski</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Specjalizujemy się w kompleksowej obsłudze szkód komunikacyjnych. 
              Bezgotówkowa naprawa, auto zastępcze i holowanie - wszystko z OC sprawcy.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>24/7: <strong>+48 506 066 525</strong></span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>office24@autoram.eu</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>ul. Zdrojowa 17, 62-065 Grodzisk Wielkopolski</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Clock className="w-4 h-4 text-blue-400" />
                <span>Warsztat: Pn-Pt 7:30-17:30, Sb 7:30-15:00</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <div className="w-5 h-5 mr-2 text-blue-400">💳</div>
              Obsługa szkód z OC
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/obsługa-szkody-z-oc" className="hover:text-white transition-colors">Likwidacja szkód komunikacyjnych</Link></li>
              <li><Link to="/bezposrednia-likwidacja-szkod" className="hover:text-white transition-colors">Bezpośrednia likwidacja szkód (BLS)</Link></li>
              <li><Link to="/wycena-szkody" className="hover:text-white transition-colors">Wycena i kosztorysowanie</Link></li>
              <li><Link to="/zgłaszanie-szkod" className="hover:text-white transition-colors">Zgłaszanie szkód</Link></li>
              <li><Link to="/odszkodowanie-z-oc" className="hover:text-white transition-colors">Odszkodowania z OC sprawcy</Link></li>
            </ul>
          </div>

          {/* Other Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <div className="w-5 h-5 mr-2 text-green-400">🔧</div>
              Pozostałe usługi
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/naprawy-z-oc" className="hover:text-white transition-colors">Naprawy z OC sprawcy</Link></li>
              <li><Link to="/auto-zastepcze-z-oc" className="hover:text-white transition-colors">Auto zastępcze z OC</Link></li>
              <li><Link to="/pomoc-drogowa-z-oc" className="hover:text-white transition-colors">Pomoc drogowa z OC</Link></li>
              <li><Link to="/blacharstwo-lakiernictwo" className="hover:text-white transition-colors">Blacharstwo i lakiernictwo</Link></li>
              <li><Link to="/mechanika-samochodowa" className="hover:text-white transition-colors">Mechanika samochodowa</Link></li>
            </ul>
          </div>

          {/* Contact & Emergency */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Phone className="w-5 h-5 mr-2 text-red-400" />
              Kontakt awaryjny
            </h3>
            <div className="space-y-4">
              <div className="bg-red-600/20 border border-red-600/30 rounded-lg p-4">
                <p className="text-sm text-red-300 mb-2">Miałeś wypadek?</p>
                <a href="tel:+48506066525" className="text-2xl font-bold text-white hover:text-red-300 transition-colors">
                  +48 506 066 525
                </a>
                <p className="text-xs text-red-300">Assistance dostępne 24/7</p>
              </div>
              <div className="bg-blue-600/20 border border-blue-600/30 rounded-lg p-4">
                <p className="text-sm text-blue-300 mb-2">Email kontaktowy</p>
                <a href="mailto:office24@autoram.eu" className="text-lg font-semibold text-white hover:text-blue-300 transition-colors break-all">
                  office24@autoram.eu
                </a>
                <p className="text-xs text-blue-300">Odpowiedź w ciągu 2h</p>
              </div>
              <div className="bg-green-600/20 border border-green-600/30 rounded-lg p-3">
                <p className="text-sm text-green-300 mb-1">Godziny warsztatu</p>
                <p className="text-xs text-green-200">Pn-Pt: 7:30-17:30</p>
                <p className="text-xs text-green-200">Sobota: 7:30-15:00</p>
                <p className="text-xs text-gray-400">Niedziela: Nieczynne</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 Auto-Ram. Wszystkie prawa zastrzeżone.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/polityka-prywatnosci" className="text-gray-400 hover:text-white transition-colors">
                Polityka prywatności
              </Link>
              <Link to="/regulamin" className="text-gray-400 hover:text-white transition-colors">
                Regulamin
              </Link>
              <Link to="/kontakt" className="text-gray-400 hover:text-white transition-colors">
                Kontakt
              </Link>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <div className="inline-flex items-center space-x-6 text-xs text-gray-500">
              <span className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Assistance 24/7</span>
              </span>
              <span className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Bezgotówkowe rozliczenia</span>
              </span>
              <span className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span>Grodzisk Wielkopolski</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
