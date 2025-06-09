
import { Link, useLocation } from "react-router-dom";
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
  // Elementy poradnika
  poradnikItems,
  // Funkcje pomocnicze do agregacji elementów
  getAllNaprawyItems,
  getAllWynajemItems,
  getAllPomocDrogowaItems
} from "./NavigationItems";

// Importujemy nowe komponenty menu
import ObslugaSzkodMenu from "./menu-sections/ObslugaSzkodMenu";
import NaprawyMenu from "./menu-sections/NaprawyMenu";
import WynajemMenu from "./menu-sections/WynajemMenu";
import PomocDrogowaMenu from "./menu-sections/PomocDrogowaMenu";
import PoradnikMenu from "./menu-sections/PoradnikMenu";

const DesktopMenu = () => {
  const location = useLocation();

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  const isActiveSection = (items: any[]) => {
    return items.some(item => isActivePath(item.href));
  };

  const isActiveObslugaSzkody = () => {
    return isActiveSection(likwidacjaSzkodKomunikacyjnychItems) || 
           isActiveSection(zgaszanieSzkodItems) || 
           isActiveSection(odszkodowaniaItems) || 
           isActiveSection(wycenaSzkodPowypadkowychItems) ||
           isActiveSection(wolsztynSzkodyItems) ||
           isActiveSection(poznanSzkodyItems) ||
           isActiveSection(zielonaGoraSzkodyItems) ||
           isActiveSection(nowyTomyslSzkodyItems) ||
           isActiveSection(slawaSzkodyItems) ||
           isActiveSection(lesznoSzkodyItems) ||
           isActiveSection(glogowSzkodyItems) ||
           isActiveSection(koscianSzkodyItems) ||
           isActiveSection(szamotulySzkodyItems) ||
           isActiveSection(miedzyrzeczSzkodyItems);
  };

  const isActiveNaprawy = () => {
    return isActiveSection(getAllNaprawyItems());
  };

  const isActiveWynajem = () => {
    return isActiveSection(getAllWynajemItems());
  };

  const isActivePomocDrogowa = () => {
    return isActiveSection(getAllPomocDrogowaItems());
  };

  return (
    <div className="hidden lg:flex items-center justify-center h-16">
      <div className="flex items-center space-x-1">
        {/* Obsługa szkód ubezpieczeniowych */}
        <ObslugaSzkodMenu isActive={isActiveObslugaSzkody()} />

        {/* Naprawy pojazdów */}
        <NaprawyMenu isActive={isActiveNaprawy()} />

        {/* Wynajem pojazdów zastępczych */}
        <WynajemMenu isActive={isActiveWynajem()} />

        {/* Pomoc drogowa */}
        <PomocDrogowaMenu isActive={isActivePomocDrogowa()} />

        {/* Poradnik */}
        <PoradnikMenu isActive={isActiveSection(poradnikItems)} />

        {/* Kontakt */}
        <Link
          to="/kontakt"
          className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
            isActivePath("/kontakt")
              ? "bg-autoram-red text-white"
              : "text-autoram-text-muted hover:text-autoram-red hover:bg-autoram-gray"
          }`}
        >
          Kontakt
        </Link>
      </div>
    </div>
  );
};

export default DesktopMenu;
