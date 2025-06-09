import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import {
  // Nowe zorganizowane kategorie szkód
  likwidacjaSzkodKomunikacyjnychItems,
  zgaszanieSzkodItems,
  odszkodowaniaItems,
  wycenaSzkodPowypadkowychItems,
  // Lokalne kategorie szkód
  wolsztynSzkodyItems,
  poznanSzkodyItems,
  zielonaGoraSzkodyItems,
  nowyTomyslSzkodyItems,
  slawaSzkodyItems,
  lesznoSzkodyItems,
  glogowSzkodyItems,
  koscianSzkodyItems,
  szamotulySzkodyItems,
  miedzyrzeczSzkodyItems,
  // Pozostałe kategorie
  getAllNaprawyItems,
  poradnikItems,
  // Elementy wynajmu
  samochodZastepczyZOCItems,
  wynajemBezgotowkowyItems,
  rodzajePojazdowZastepczychItems,
  pojazdyNaCzasNaprawyItems,
  pojazdyPoWypadkuItems,
  parametryWynajmuItems,
  // Elementy pomocy drogowej
  pomocDrogowa24Items,
  holowaniePojazdowItems,
  uslugiLawetaItems,
  transportStandardowyItems,
  transportSpecjalistycznyItems,
  holowaniePoWypadkuItems,
  holowanieZOCItems,
  pomocDrogowaWolsztynItems,
  pomocDrogowaPoznanItems
} from "./NavigationItems";

import {
  // Usługi kompleksowe
  kompleksowaObslugaPowypadkowaItems,
  pakietyUslugItems,
  centrum_wolsztynItems as centrum_wolsztynKompleksItems,
  centrum_poznanItems as centrum_poznanKompleksItems
} from "./NavigationItems";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const MobileMenu = ({ isOpen, setIsOpen }: MobileMenuProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="lg:hidden text-autoram-text hover:bg-autoram-red hover:text-white">
          <Menu className="w-6 h-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] bg-autoram-white border-autoram-red">
        <div className="flex flex-col space-y-6 mt-8">
          <div className="space-y-4">
            {/* 🏢 USŁUGI KOMPLEKSOWE */}
            <div>
              <p className="font-bold text-autoram-text mb-3 text-base">🏢 USŁUGI KOMPLEKSOWE</p>
              <p className="text-xs text-autoram-text-muted mb-3 px-2">Kompleksowa obsługa powypadkowa</p>
              
              <p className="font-medium text-autoram-text mt-2 mb-1 px-4 text-xs">Centrum Pomocy Po Wypadku:</p>
              {kompleksowaObslugaPowypadkowaItems.slice(0, 2).map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-6 py-1 text-sm text-autoram-text-muted hover:text-autoram-red"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <p className="font-medium text-autoram-text mt-2 mb-1 px-4 text-xs">Pakiety Usług:</p>
              {pakietyUslugItems.slice(0, 2).map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-6 py-1 text-sm text-autoram-text-muted hover:text-autoram-red"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <p className="font-medium text-autoram-text mt-2 mb-1 px-4 text-xs">Centra Lokalne (przykłady):</p>
              {centrum_wolsztynKompleksItems.slice(0, 1).map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-6 py-1 text-sm text-autoram-text-muted hover:text-autoram-red"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {centrum_poznanKompleksItems.slice(0, 1).map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-6 py-1 text-sm text-autoram-text-muted hover:text-autoram-red"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* 📋 OBSŁUGA SZKÓD UBEZPIECZENIOWYCH */}
            <div>
              <p className="font-bold text-autoram-text mb-3 text-base">📋 OBSŁUGA SZKÓD UBEZPIECZENIOWYCH</p>
              <p className="text-xs text-autoram-text-muted mb-3 px-2">Główna kategoria dla obsługi szkód ubezpieczeniowych</p>
              
              {/* LIKWIDACJA SZKÓD */}
              <div className="mb-4">
                <p className="font-semibold text-autoram-text mb-2 text-sm">📋 LIKWIDACJA SZKÓD</p>
                
                <p className="font-medium text-autoram-text mt-2 mb-1 px-4 text-xs">Likwidacja Szkód Komunikacyjnych:</p>
                {likwidacjaSzkodKomunikacyjnychItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-6 py-1 text-sm text-autoram-text-muted hover:text-autoram-red"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                <p className="font-medium text-autoram-text mt-2 mb-1 px-4 text-xs">Zgłaszanie Szkód:</p>
                {zgaszanieSzkodItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-6 py-1 text-sm text-autoram-text-muted hover:text-autoram-red"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                <p className="font-medium text-autoram-text mt-2 mb-1 px-4 text-xs">Odszkodowania:</p>
                {odszkodowaniaItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-6 py-1 text-sm text-autoram-text-muted hover:text-autoram-red"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* 💰 WYCENA I KOSZTORYSY */}
              <div className="mb-4">
                <p className="font-semibold text-autoram-text mb-2 text-sm">💰 WYCENA I KOSZTORYSY</p>
                <p className="text-xs text-autoram-text-muted mb-2 px-2">Usługi związane z wyceną szkód</p>
                
                <p className="font-medium text-autoram-text mt-2 mb-1 px-4 text-xs">Wycena Szkód Powypadkowych:</p>
                {wycenaSzkodPowypadkowychItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-6 py-1 text-sm text-autoram-text-muted hover:text-autoram-red"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* 📍 OBSŁUGA SZKÓD LOKALNA */}
              <div className="mb-4">
                <p className="font-semibold text-autoram-text mb-2 text-sm">📍 OBSŁUGA SZKÓD LOKALNA</p>
                <p className="text-xs text-autoram-text-muted mb-2 px-2">Usługi w konkretnych lokalizacjach</p>
                
                <p className="font-medium text-autoram-text mt-2 mb-1 px-4 text-xs">Wolsztyn:</p>
                {wolsztynSzkodyItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-6 py-1 text-sm text-autoram-text-muted hover:text-autoram-red"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                <p className="font-medium text-autoram-text mt-2 mb-1 px-4 text-xs">Poznań:</p>
                {poznanSzkodyItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-6 py-1 text-sm text-autoram-text-muted hover:text-autoram-red"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                <p className="font-medium text-autoram-text mt-2 mb-1 px-4 text-xs">Zielona Góra:</p>
                {zielonaGoraSzkodyItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-6 py-1 text-sm text-autoram-text-muted hover:text-autoram-red"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                <p className="font-medium text-autoram-text mt-2 mb-1 px-4 text-xs">Nowy Tomyśl:</p>
                {nowyTomyslSzkodyItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-6 py-1 text-sm text-autoram-text-muted hover:text-autoram-red"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                <p className="font-medium text-autoram-text mt-2 mb-1 px-4 text-xs">Sława:</p>
                {slawaSzkodyItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-6 py-1 text-sm text-autoram-text-muted hover:text-autoram-red"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                <p className="font-medium text-autoram-text mt-2 mb-1 px-4 text-xs">Leszno:</p>
                {lesznoSzkodyItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-6 py-1 text-sm text-autoram-text-muted hover:text-autoram-red"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                <p className="font-medium text-autoram-text mt-2 mb-1 px-4 text-xs">Głogów:</p>
                {glogowSzkodyItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-6 py-1 text-sm text-autoram-text-muted hover:text-autoram-red"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                <p className="font-medium text-autoram-text mt-2 mb-1 px-4 text-xs">Kościan:</p>
                {koscianSzkodyItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-6 py-1 text-sm text-autoram-text-muted hover:text-autoram-red"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                <p className="font-medium text-autoram-text mt-2 mb-1 px-4 text-xs">Szamotuły:</p>
                {szamotulySzkodyItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-6 py-1 text-sm text-autoram-text-muted hover:text-autoram-red"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                <p className="font-medium text-autoram-text mt-2 mb-1 px-4 text-xs">Międzyrzecz:</p>
                {miedzyrzeczSzkodyItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-6 py-1 text-sm text-autoram-text-muted hover:text-autoram-red"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* NAPRAWY POJAZDÓW */}
            <div>
              <p className="font-semibold text-autoram-text mb-2">Naprawy pojazdów</p>
              {getAllNaprawyItems().slice(0, 3).map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-4 py-2 text-sm text-autoram-text-muted hover:text-autoram-red"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* WYNAJEM POJAZDÓW ZASTĘPCZYCH */}
            <div>
              <p className="font-semibold text-autoram-text mb-2">Wynajem pojazdów zastępczych</p>
              <p className="font-medium text-autoram-text mt-2 mb-1 px-4 text-xs">🚙 Samochody Zastępcze z OC:</p>
              {samochodZastepczyZOCItems.slice(0, 2).map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-6 py-1 text-sm text-autoram-text-muted hover:text-autoram-red"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <p className="font-medium text-autoram-text mt-2 mb-1 px-4 text-xs">Wynajem Bezgotówkowy:</p>
              {wynajemBezgotowkowyItems.slice(0, 1).map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-6 py-1 text-sm text-autoram-text-muted hover:text-autoram-red"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* POMOC DROGOWA */}
            <div>
              <p className="font-semibold text-autoram-text mb-2">Pomoc drogowa</p>
              <p className="font-medium text-autoram-text mt-2 mb-1 px-4 text-xs">🚛 Pomoc Drogowa 24/7:</p>
              {pomocDrogowa24Items.slice(0, 2).map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-6 py-1 text-sm text-autoram-text-muted hover:text-autoram-red"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <p className="font-medium text-autoram-text mt-2 mb-1 px-4 text-xs">Holowanie z OC:</p>
              {holowanieZOCItems.slice(0, 2).map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-6 py-1 text-sm text-autoram-text-muted hover:text-autoram-red"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* PORADNIK */}
            <div>
              <p className="font-semibold text-autoram-text mb-2">Poradnik</p>
              {poradnikItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-4 py-2 text-sm text-autoram-text-muted hover:text-autoram-red"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* KONTAKT */}
            <Link
              to="/kontakt"
              className="block px-4 py-2 text-sm font-medium text-autoram-text hover:text-autoram-red"
              onClick={() => setIsOpen(false)}
            >
              Kontakt
            </Link>
          </div>
          
          <div className="pt-6 border-t border-autoram-red">
            <p className="text-sm font-semibold text-autoram-text mb-2">Telefon 24/7</p>
            <p className="text-lg font-bold text-autoram-gold">123-456-789</p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
