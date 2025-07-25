
import { Routes, Route } from "react-router-dom";
import Index from "../pages/Index";
import NotFound from "../pages/NotFound";
import Kontakt from "../pages/Kontakt";

// Main category pages (nadrzędne)
import NaprawyPowypadkowe from "../pages/NaprawyPowypadkowe";
import AutoZastepczeZOC from "../pages/AutoZastepczeZOC";
import PomocDrogowaZOC from "../pages/PomocDrogowaZOC";
import LikwidacjaSzkodKomunikacyjnych from "../pages/LikwidacjaSzkodKomunikacyjnych";
import KompleksowaObslugaPowypadkowa from "../pages/KompleksowaObslugaPowypadkowa";

// Blog pages
import Blog from "../pages/Blog";
import BlogObslugaSzkodyPrzewodnik from "../pages/BlogObslugaSzkodyPrzewodnik";
import BlogAutoZastepczePrawa from "../pages/BlogAutoZastepczePrawa";
import BlogBezposredniaLikwidacja from "../pages/BlogBezposredniaLikwidacja";

// Existing service pages that still match the new structure
import NaprawyZOC from "../pages/NaprawyZOC";
import NaprawyBezgotowkoweZOC from "../pages/NaprawyBezgotowkoweZOC";
import ZgloszenieSzkodyUbezpieczeniowej from "../pages/ZgloszenieSzkodyUbezpieczeniowej";
import WycenaSzkodyPowypadkowej from "../pages/WycenaSzkodyPowypadkowej";
import OdszkodowanieZOCSprawcy from "../pages/OdszkodowanieZOCSprawcy";
import LikwidatorSzkod from "../pages/LikwidatorSzkod";
import CentrumPomocyPoWypadku from "../pages/CentrumPomocyPoWypadku";
import CentrumNaprawPowypadkowych from "../pages/CentrumNaprawPowypadkowych";
import LakierowaniePowypadkowe from "../pages/LakierowaniePowypadkowe";
import BlacharstwoPowyypadkowe from "../pages/BlacharstwoPowyypadkowe";
import MechanikaSamochodowaPoWypadku from "../pages/MechanikaSamochodowaPoWypadku";
import Holowanie24h from "../pages/Holowanie24h";
import HolowaniePoWypadkuAwariiKolizji from "../pages/HolowaniePoWypadkuAwariiKolizji";
import TransportPojazdow from "../pages/TransportPojazdow";
import PrzegladyISerwisOgolny from "../pages/PrzegladyISerwisOgolny";
import SamochodZastepczyZOCSprawcy from "../pages/SamochodZastepczyZOCSprawcy";
import BezplatneHolowanieZOCSprawcy from "../pages/BezplatneHolowanieZOCSprawcy";
import PodstawienieLawetyINaprawaNaMiejscu from "../pages/PodstawienieLawetyINaprawaNaMiejscu";
import PomocDrogowaAutostradia from "../pages/PomocDrogowaAutostradia";

// Service pages
import ObslugaSzkodyZOC from "../pages/ObslugaSzkodyZOC";
import LikwidacjaSzkodyZOC from "../pages/LikwidacjaSzkodyZOC";
import ZgloszenieSzkodyKomunikacyjnej from "../pages/ZgloszenieSzkodyKomunikacyjnej";
import KosztorysNaprawyZOCSprawcy from "../pages/KosztorysNaprawyZOCSprawcy";
import OcenaUszkodzenPojazdu from "../pages/OcenaUszkodzenPojazdu";
import LikwidacjaSzkodyGrodziskWielkopolski from "../pages/LikwidacjaSzkodyGrodziskWielkopolski";
import WycenaSzkodyPoznan from "../pages/WycenaSzkodyPoznan";

// Repair pages
import NaprawyBezgotowkowe from "../pages/NaprawyBezgotowkowe";
import NaprawyZWinySprawcy from "../pages/NaprawyZWinySprawcy";
import WynajemBezgotowkowy from "../pages/WynajemBezgotowkowy";

// Location pages
import ObslugaSzkodyZOCWolsztyn from "../pages/ObslugaSzkodyZOCWolsztyn";
import ObslugaSzkodyZOCPoznan from "../pages/ObslugaSzkodyZOCPoznan";
import AutoZastepczeZOCPoznan from "../pages/AutoZastepczeZOCPoznan";
import HolowanieZOCGlogów from "../pages/HolowanieZOCGlogów";
import ObslugaSzkodyZielonaGora from "../pages/ObslugaSzkodyZielonaGora";
import ObslugaSzkodyNowyTomysl from "../pages/ObslugaSzkodyNowyTomysl";
import ObslugaSzkodySlawa from "../pages/ObslugaSzkodySlawa";
import ObslugaSzkodyLeszno from "../pages/ObslugaSzkodyLeszno";
import ObslugaSzkodyKoscian from "../pages/ObslugaSzkodyKoscian";
import ObslugaSzkodySzamotuly from "../pages/ObslugaSzkodySzamotuly";
import ObslugaSzkodyMiedzyrzecz from "../pages/ObslugaSzkodyMiedzyrzecz";

// Comprehensive service pages
import PelnaObslugaPoszkodowanych from "../pages/PelnaObslugaPoszkodowanych";
import PakietUslugPowypadkowych from "../pages/PakietUslugPowypadkowych";
import WszystkoZJednegoMiejsca from "../pages/WszystkoZJednegoMiejsca";
import ObslugaOdADoZ from "../pages/ObslugaOdADoZ";
import KompleksowaObslugaPowypadkowaWolsztyn from "../pages/KompleksowaObslugaPowypadkowaWolsztyn";
import CentrumPomocyPoWypadkuWolsztyn from "../pages/CentrumPomocyPoWypadkuWolsztyn";
import KompleksowaObslugaPowypadkowaPoznan from "../pages/KompleksowaObslugaPowypadkowaPoznan";
import CentrumPomocyPoWypadkuPoznan from "../pages/CentrumPomocyPoWypadkuPoznan";
import KompleksowaObslugaPowypadkowaZielonaGora from "../pages/KompleksowaObslugaPowypadkowaZielonaGora";
import CentrumPomocyPoWypadkuZielonaGora from "../pages/CentrumPomocyPoWypadkuZielonaGora";
import KompleksowaObslugaPowypadkowaNowyTomysl from "../pages/KompleksowaObslugaPowypadkowaNowyTomysl";
import CentrumPomocyPoWypadkuNowyTomysl from "../pages/CentrumPomocyPoWypadkuNowyTomysl";
import KompleksowaObslugaPowypadkowaSlawa from "../pages/KompleksowaObslugaPowypadkowaSlawa";
import CentrumPomocyPoWypadkuSlawa from "../pages/CentrumPomocyPoWypadkuSlawa";
import KompleksowaObslugaPowypadkowaLeszno from "../pages/KompleksowaObslugaPowypadkowaLeszno";
import CentrumPomocyPoWypadkuLeszno from "../pages/CentrumPomocyPoWypadkuLeszno";
import KompleksowaObslugaPowypadkowaGlogow from "../pages/KompleksowaObslugaPowypadkowaGlogow";
import CentrumPomocyPoWypadkuGlogow from "../pages/CentrumPomocyPoWypadkuGlogow";
import KompleksowaObslugaPowypadkowaKoscian from "../pages/KompleksowaObslugaPowypadkowaKoscian";
import CentrumPomocyPoWypadkuKoscian from "../pages/CentrumPomocyPoWypadkuKoscian";
import KompleksowaObslugaPowypadkowaSzamotuly from "../pages/KompleksowaObslugaPowypadkowaSzamotuly";
import CentrumPomocyPoWypadkuSzamotuly from "../pages/CentrumPomocyPoWypadkuSzamotuly";
import KompleksowaObslugaPowypadkowaMiedzyrzecz from "../pages/KompleksowaObslugaPowypadkowaMiedzyrzecz";
import CentrumPomocyPoWypadkuMiedzyrzecz from "../pages/CentrumPomocyPoWypadkuMiedzyrzecz";

// Damage pages
import LikwidacjaSzkodyWolsztyn from "../pages/LikwidacjaSzkodyWolsztyn";
import WycenaSzkodyWolsztyn from "../pages/WycenaSzkodyWolsztyn";
import LikwidacjaSzkodyPoznan from "../pages/LikwidacjaSzkodyPoznan";
import ObslugaSzkodyOCPoznan from "../pages/ObslugaSzkodyOCPoznan";
import LikwidacjaSzkodyZielonaGora from "../pages/LikwidacjaSzkodyZielonaGora";
import WynajemAutZOCSprawcy from "../pages/WynajemAutZOCSprawcy";

// New imports for the cash-free substitute car page, company cars and specialist rental
import SamochodZastepczyBezgotowkowo from "../pages/SamochodZastepczyBezgotowkowo";
import AutoZastepczeDlaFirm from "../pages/AutoZastepczeDlaFirm";
import WynajemSpecjalistycznyZOCSprawcy from "../pages/WynajemSpecjalistycznyZOCSprawcy";
import InformacjeOWynajmieAutaZOCSprawcy from "../pages/InformacjeOWynajmieAutaZOCSprawcy";

// New damage center pages for all cities
import CentrumLikwidacjiSzkodPoznan from "../pages/CentrumLikwidacjiSzkodPoznan";
import CentrumLikwidacjiSzkodBojanowo from "../pages/CentrumLikwidacjiSzkodBojanowo";
import CentrumLikwidacjiSzkodBrodnica from "../pages/CentrumLikwidacjiSzkodBrodnica";
import CentrumLikwidacjiSzkodChodziez from "../pages/CentrumLikwidacjiSzkodChodziez";
import CentrumLikwidacjiSzkodCzarnkow from "../pages/CentrumLikwidacjiSzkodCzarnkow";
import CentrumLikwidacjiSzkodGniezno from "../pages/CentrumLikwidacjiSzkodGniezno";
import CentrumLikwidacjiSzkodGostyn from "../pages/CentrumLikwidacjiSzkodGostyn";
import CentrumLikwidacjiSzkodGrodziskWielkopolski from "../pages/CentrumLikwidacjiSzkodGrodziskWielkopolski";
import CentrumLikwidacjiSzkodGlogow from "../pages/CentrumLikwidacjiSzkodGlogow";
import CentrumLikwidacjiSzkodJarocin from "../pages/CentrumLikwidacjiSzkodJarocin";
import CentrumLikwidacjiSzkodJastrowie from "../pages/CentrumLikwidacjiSzkodJastrowie";
import CentrumLikwidacjiSzkodKalisz from "../pages/CentrumLikwidacjiSzkodKalisz";
import CentrumLikwidacjiSzkodKolo from "../pages/CentrumLikwidacjiSzkodKolo";
import CentrumLikwidacjiSzkodKonin from "../pages/CentrumLikwidacjiSzkodKonin";
import CentrumLikwidacjiSzkodKoscian from "../pages/CentrumLikwidacjiSzkodKoscian";
import CentrumLikwidacjiSzkodKrobia from "../pages/CentrumLikwidacjiSzkodKrobia";
import CentrumLikwidacjiSzkodKrotoszyn from "../pages/CentrumLikwidacjiSzkodKrotoszyn";
import CentrumLikwidacjiSzkodLeszno from "../pages/CentrumLikwidacjiSzkodLeszno";
import CentrumLikwidacjiSzkodLubin from "../pages/CentrumLikwidacjiSzkodLubin";
import CentrumLikwidacjiSzkodMiedzychod from "../pages/CentrumLikwidacjiSzkodMiedzychod";
import CentrumLikwidacjiSzkodMiedzyrzecz from "../pages/CentrumLikwidacjiSzkodMiedzyrzecz";
import CentrumLikwidacjiSzkodNowyTomysl from "../pages/CentrumLikwidacjiSzkodNowyTomysl";
import CentrumLikwidacjiSzkodOborniki from "../pages/CentrumLikwidacjiSzkodOborniki";
import CentrumLikwidacjiSzkodOpalenica from "../pages/CentrumLikwidacjiSzkodOpalenica";
import CentrumLikwidacjiSzkodOstrowWielkopolski from "../pages/CentrumLikwidacjiSzkodOstrowWielkopolski";
import CentrumLikwidacjiSzkodPila from "../pages/CentrumLikwidacjiSzkodPila";
import CentrumLikwidacjiSzkodPleszew from "../pages/CentrumLikwidacjiSzkodPleszew";
import CentrumLikwidacjiSzkodRawicz from "../pages/CentrumLikwidacjiSzkodRawicz";
import CentrumLikwidacjiSzkodSlupca from "../pages/CentrumLikwidacjiSzkodSlupca";
import CentrumLikwidacjiSzkodSzamotuly from "../pages/CentrumLikwidacjiSzkodSzamotuly";
import CentrumLikwidacjiSzkodSrem from "../pages/CentrumLikwidacjiSzkodSrem";
import CentrumLikwidacjiSzkodSrodaWielkopolska from "../pages/CentrumLikwidacjiSzkodSrodaWielkopolska";
import CentrumLikwidacjiSzkodTurek from "../pages/CentrumLikwidacjiSzkodTurek";
import CentrumLikwidacjiSzkodWagrowiec from "../pages/CentrumLikwidacjiSzkodWagrowiec";
import CentrumLikwidacjiSzkodWolsztyn from "../pages/CentrumLikwidacjiSzkodWolsztyn";
import CentrumLikwidacjiSzkodWronki from "../pages/CentrumLikwidacjiSzkodWronki";
import CentrumLikwidacjiSzkodWrzesnia from "../pages/CentrumLikwidacjiSzkodWrzesnia";
import CentrumLikwidacjiSzkodWyrzysk from "../pages/CentrumLikwidacjiSzkodWyrzysk";
import CentrumLikwidacjiSzkodZbaszyn from "../pages/CentrumLikwidacjiSzkodZbaszyn";
import CentrumLikwidacjiSzkodZbaszynek from "../pages/CentrumLikwidacjiSzkodZbaszynek";
import CentrumLikwidacjiSzkodZielonaGora from "../pages/CentrumLikwidacjiSzkodZielonaGora";
import CentrumLikwidacjiSzkodZlotow from "../pages/CentrumLikwidacjiSzkodZlotow";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      
      {/* Main category pages */}
      <Route path="/naprawy-powypadkowe" element={<NaprawyPowypadkowe />} />
      <Route path="/auto-zastepcze" element={<AutoZastepczeZOC />} />
      <Route path="/pomoc-drogowa" element={<PomocDrogowaZOC />} />
      <Route path="/likwidacja-szkod" element={<LikwidacjaSzkodKomunikacyjnych />} />
      <Route path="/obsluga-kompleksowa" element={<KompleksowaObslugaPowypadkowa />} />
      
      {/* Naprawy powypadkowe subcategories */}
      <Route path="/naprawy-z-oc-sprawcy" element={<NaprawyZOC />} />
      <Route path="/blacharstwo-samochodowe" element={<BlacharstwoPowyypadkowe />} />
      <Route path="/lakiernictwo-samochodowe" element={<LakierowaniePowypadkowe />} />
      <Route path="/mechanika-samochodowa-po-wypadku" element={<MechanikaSamochodowaPoWypadku />} />
      <Route path="/przeglady-i-serwis-ogolny" element={<PrzegladyISerwisOgolny />} />
      
      {/* Auto zastępcze subcategories */}
      <Route path="/wynajem-aut-z-oc-sprawcy" element={<WynajemAutZOCSprawcy />} />
      <Route path="/samochod-zastepczy-bezgotowkowo" element={<SamochodZastepczyBezgotowkowo />} />
      <Route path="/auta-zastepcze-dla-firm" element={<AutoZastepczeDlaFirm />} />
      <Route path="/wynajem-specjalistyczny-z-oc-sprawcy" element={<WynajemSpecjalistycznyZOCSprawcy />} />
      <Route path="/informacje-o-wynajmie-auta-z-oc-sprawcy" element={<InformacjeOWynajmieAutaZOCSprawcy />} />
      <Route path="/samochod-zastepcze-z-oc-sprawcy" element={<SamochodZastepczyZOCSprawcy />} />
      
      {/* Pomoc drogowa subcategories */}
      <Route path="/holowanie-po-wypadku-awarii-kolizji" element={<HolowaniePoWypadkuAwariiKolizji />} />
      <Route path="/transport-pojazdow" element={<TransportPojazdow />} />
      <Route path="/bezplatne-holowanie-z-oc-sprawcy" element={<BezplatneHolowanieZOCSprawcy />} />
      <Route path="/podstawienie-lawety-i-naprawa-na-miejscu" element={<PodstawienieLawetyINaprawaNaMiejscu />} />
      <Route path="/pomoc-drogowa-na-autostradzie" element={<PomocDrogowaAutostradia />} />
      
      {/* Likwidacja szkód subcategories */}
      <Route path="/zgloszenie-szkody-ubezpieczeniowej" element={<ZgloszenieSzkodyUbezpieczeniowej />} />
      <Route path="/wycena-i-kosztorys-naprawy" element={<WycenaSzkodyPowypadkowej />} />
      <Route path="/odszkodowanie-z-oc-sprawcy" element={<OdszkodowanieZOCSprawcy />} />
      <Route path="/likwidator-szkod" element={<LikwidatorSzkod />} />
      
      {/* Obsługa kompleksowa subcategories */}
      <Route path="/centrum-pomocy-po-wypadku" element={<CentrumPomocyPoWypadku />} />
      <Route path="/centrum-napraw-powypadkowych" element={<CentrumNaprawPowypadkowych />} />
      
      {/* Blog routes */}
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/obsługa-szkody-oc-przewodnik" element={<BlogObslugaSzkodyPrzewodnik />} />
      <Route path="/blog/auto-zastepcze-oc-prawa" element={<BlogAutoZastepczePrawa />} />
      <Route path="/blog/bezposrednia-likwidacja-szkod-bls" element={<BlogBezposredniaLikwidacja />} />
      
      {/* Contact */}
      <Route path="/kontakt" element={<Kontakt />} />
      
      <Route path="/obsługa-szkody-z-oc" element={<ObslugaSzkodyZOC />} />
      <Route path="/naprawy-z-oc" element={<NaprawyZOC />} />
      <Route path="/naprawy-bezgotowkowe-z-oc" element={<NaprawyBezgotowkoweZOC />} />
      <Route path="/auto-zastepcze-z-oc" element={<AutoZastepczeZOC />} />
      <Route path="/pomoc-drogowa-z-oc" element={<PomocDrogowaZOC />} />
      
      {/* Service routes */}
      <Route path="/likwidacja-szkod-komunikacyjnych" element={<LikwidacjaSzkodKomunikacyjnych />} />
      <Route path="/likwidacja-szkody-z-oc" element={<LikwidacjaSzkodyZOC />} />
      <Route path="/zgloszenie-szkody-komunikacyjnej" element={<ZgloszenieSzkodyKomunikacyjnej />} />
      <Route path="/wycena-szkody-powypadkowej" element={<WycenaSzkodyPowypadkowej />} />
      <Route path="/kosztorys-naprawy-z-oc-sprawcy" element={<KosztorysNaprawyZOCSprawcy />} />
      <Route path="/ocena-uszkodzen-pojazdu" element={<OcenaUszkodzenPojazdu />} />
      <Route path="/likwidacja-szkody-grodzisk-wielkopolski" element={<LikwidacjaSzkodyGrodziskWielkopolski />} />
      <Route path="/wycena-szkody-poznan" element={<WycenaSzkodyPoznan />} />
      
      {/* Repair routes */}
      <Route path="/naprawy-bezgotowkowe" element={<NaprawyBezgotowkowe />} />
      <Route path="/naprawa-bezgotowkowa" element={<NaprawyBezgotowkowe />} />
      <Route path="/naprawy-z-winy-sprawcy" element={<NaprawyZWinySprawcy />} />
      <Route path="/wynajem-bezgotowkowy" element={<WynajemBezgotowkowy />} />
      <Route path="/holowanie-24h" element={<Holowanie24h />} />
      <Route path="/pomoc-drogowa-24h" element={<Holowanie24h />} />
      
      {/* Location routes */}
      <Route path="/obsługa-szkody-z-oc-wolsztyn" element={<ObslugaSzkodyZOCWolsztyn />} />
      <Route path="/obsługa-szkody-z-oc-poznan" element={<ObslugaSzkodyZOCPoznan />} />
      <Route path="/auto-zastepcze-z-oc-poznan" element={<AutoZastepczeZOCPoznan />} />
      <Route path="/holowanie-z-oc-glogów" element={<HolowanieZOCGlogów />} />
      <Route path="/obsługa-szkody-zielona-gora" element={<ObslugaSzkodyZielonaGora />} />
      <Route path="/obsługa-szkody-nowy-tomysl" element={<ObslugaSzkodyNowyTomysl />} />
      <Route path="/obsługa-szkody-slawa" element={<ObslugaSzkodySlawa />} />
      <Route path="/obsługa-szkody-leszno" element={<ObslugaSzkodyLeszno />} />
      <Route path="/obsługa-szkody-koscian" element={<ObslugaSzkodyKoscian />} />
      <Route path="/obsługa-szkody-szamotuly" element={<ObslugaSzkodySzamotuly />} />
      <Route path="/obsługa-szkody-miedzyrzecz" element={<ObslugaSzkodyMiedzyrzecz />} />
      
      {/* Comprehensive service routes */}
      <Route path="/kompleksowa-obsluga-powypadkowa" element={<KompleksowaObslugaPowypadkowa />} />
      <Route path="/pelna-obsluga-poszkodowanych" element={<PelnaObslugaPoszkodowanych />} />
      <Route path="/pakiet-uslug-powypadkowych" element={<PakietUslugPowypadkowych />} />
      <Route path="/wszystko-z-jednego-miejsca" element={<WszystkoZJednegoMiejsca />} />
      <Route path="/obsluga-od-a-do-z" element={<ObslugaOdADoZ />} />
      <Route path="/kompleksowa-obsluga-powypadkowa-wolsztyn" element={<KompleksowaObslugaPowypadkowaWolsztyn />} />
      <Route path="/centrum-pomocy-po-wypadku-wolsztyn" element={<CentrumPomocyPoWypadkuWolsztyn />} />
      <Route path="/kompleksowa-obsluga-powypadkowa-poznan" element={<KompleksowaObslugaPowypadkowaPoznan />} />
      <Route path="/centrum-pomocy-po-wypadku-poznan" element={<CentrumPomocyPoWypadkuPoznan />} />
      <Route path="/kompleksowa-obsluga-powypadkowa-zielona-gora" element={<KompleksowaObslugaPowypadkowaZielonaGora />} />
      <Route path="/centrum-pomocy-po-wypadku-zielona-gora" element={<CentrumPomocyPoWypadkuZielonaGora />} />
      <Route path="/kompleksowa-obsluga-powypadkowa-nowy-tomysl" element={<KompleksowaObslugaPowypadkowaNowyTomysl />} />
      <Route path="/centrum-pomocy-po-wypadku-nowy-tomysl" element={<CentrumPomocyPoWypadkuNowyTomysl />} />
      <Route path="/kompleksowa-obsluga-powypadkowa-slawa" element={<KompleksowaObslugaPowypadkowaSlawa />} />
      <Route path="/centrum-pomocy-po-wypadku-slawa" element={<CentrumPomocyPoWypadkuSlawa />} />
      <Route path="/kompleksowa-obsluga-powypadkowa-leszno" element={<KompleksowaObslugaPowypadkowaLeszno />} />
      <Route path="/centrum-pomocy-po-wypadku-leszno" element={<CentrumPomocyPoWypadkuLeszno />} />
      <Route path="/kompleksowa-obsluga-powypadkowa-glogow" element={<KompleksowaObslugaPowypadkowaGlogow />} />
      <Route path="/centrum-pomocy-po-wypadku-glogow" element={<CentrumPomocyPoWypadkuGlogow />} />
      <Route path="/kompleksowa-obsluga-powypadkowa-koscian" element={<KompleksowaObslugaPowypadkowaKoscian />} />
      <Route path="/centrum-pomocy-po-wypadku-koscian" element={<CentrumPomocyPoWypadkuKoscian />} />
      <Route path="/kompleksowa-obsluga-powypadkowa-szamotuly" element={<KompleksowaObslugaPowypadkowaSzamotuly />} />
      <Route path="/centrum-pomocy-po-wypadku-szamotuly" element={<CentrumPomocyPoWypadkuSzamotuly />} />
      <Route path="/kompleksowa-obsluga-powypadkowa-miedzyrzecz" element={<KompleksowaObslugaPowypadkowaMiedzyrzecz />} />
      <Route path="/centrum-pomocy-po-wypadku-miedzyrzecz" element={<CentrumPomocyPoWypadkuMiedzyrzecz />} />
      
      {/* Damage routes */}
      <Route path="/likwidacja-szkody-wolsztyn" element={<LikwidacjaSzkodyWolsztyn />} />
      <Route path="/wycena-szkody-wolsztyn" element={<WycenaSzkodyWolsztyn />} />
      <Route path="/likwidacja-szkody-poznan" element={<LikwidacjaSzkodyPoznan />} />
      <Route path="/obsługa-szkody-oc-poznan" element={<ObslugaSzkodyOCPoznan />} />
      <Route path="/likwidacja-szkody-zielona-gora" element={<LikwidacjaSzkodyZielonaGora />} />
      
      {/* Centrum likwidacji szkód - all cities */}
      <Route path="/centrum-likwidacji-szkod-poznan" element={<CentrumLikwidacjiSzkodPoznan />} />
      <Route path="/centrum-likwidacji-szkod-bojanowo" element={<CentrumLikwidacjiSzkodBojanowo />} />
      <Route path="/centrum-likwidacji-szkod-brodnica" element={<CentrumLikwidacjiSzkodBrodnica />} />
      <Route path="/centrum-likwidacji-szkod-chodziez" element={<CentrumLikwidacjiSzkodChodziez />} />
      <Route path="/centrum-likwidacji-szkod-czarnkow" element={<CentrumLikwidacjiSzkodCzarnkow />} />
      <Route path="/centrum-likwidacji-szkod-gniezno" element={<CentrumLikwidacjiSzkodGniezno />} />
      <Route path="/centrum-likwidacji-szkod-gostyn" element={<CentrumLikwidacjiSzkodGostyn />} />
      <Route path="/centrum-likwidacji-szkod-grodzisk-wielkopolski" element={<CentrumLikwidacjiSzkodGrodziskWielkopolski />} />
      <Route path="/centrum-likwidacji-szkod-glogow" element={<CentrumLikwidacjiSzkodGlogow />} />
      <Route path="/centrum-likwidacji-szkod-jarocin" element={<CentrumLikwidacjiSzkodJarocin />} />
      <Route path="/centrum-likwidacji-szkod-jastrowie" element={<CentrumLikwidacjiSzkodJastrowie />} />
      <Route path="/centrum-likwidacji-szkod-kalisz" element={<CentrumLikwidacjiSzkodKalisz />} />
      <Route path="/centrum-likwidacji-szkod-kolo" element={<CentrumLikwidacjiSzkodKolo />} />
      <Route path="/centrum-likwidacji-szkod-konin" element={<CentrumLikwidacjiSzkodKonin />} />
      <Route path="/centrum-likwidacji-szkod-koscian" element={<CentrumLikwidacjiSzkodKoscian />} />
      <Route path="/centrum-likwidacji-szkod-krobia" element={<CentrumLikwidacjiSzkodKrobia />} />
      <Route path="/centrum-likwidacji-szkod-krotoszyn" element={<CentrumLikwidacjiSzkodKrotoszyn />} />
      <Route path="/centrum-likwidacji-szkod-leszno" element={<CentrumLikwidacjiSzkodLeszno />} />
      <Route path="/centrum-likwidacji-szkod-lubin" element={<CentrumLikwidacjiSzkodLubin />} />
      <Route path="/centrum-likwidacji-szkod-miedzychod" element={<CentrumLikwidacjiSzkodMiedzychod />} />
      <Route path="/centrum-likwidacji-szkod-miedzyrzecz" element={<CentrumLikwidacjiSzkodMiedzyrzecz />} />
      <Route path="/centrum-likwidacji-szkod-nowy-tomysl" element={<CentrumLikwidacjiSzkodNowyTomysl />} />
      <Route path="/centrum-likwidacji-szkod-oborniki" element={<CentrumLikwidacjiSzkodOborniki />} />
      <Route path="/centrum-likwidacji-szkod-opalenica" element={<CentrumLikwidacjiSzkodOpalenica />} />
      <Route path="/centrum-likwidacji-szkod-ostrow-wielkopolski" element={<CentrumLikwidacjiSzkodOstrowWielkopolski />} />
      <Route path="/centrum-likwidacji-szkod-pila" element={<CentrumLikwidacjiSzkodPila />} />
      <Route path="/centrum-likwidacji-szkod-pleszew" element={<CentrumLikwidacjiSzkodPleszew />} />
      <Route path="/centrum-likwidacji-szkod-rawicz" element={<CentrumLikwidacjiSzkodRawicz />} />
      <Route path="/centrum-likwidacji-szkod-slupca" element={<CentrumLikwidacjiSzkodSlupca />} />
      <Route path="/centrum-likwidacji-szkod-szamotuly" element={<CentrumLikwidacjiSzkodSzamotuly />} />
      <Route path="/centrum-likwidacji-szkod-srem" element={<CentrumLikwidacjiSzkodSrem />} />
      <Route path="/centrum-likwidacji-szkod-sroda-wielkopolska" element={<CentrumLikwidacjiSzkodSrodaWielkopolska />} />
      <Route path="/centrum-likwidacji-szkod-turek" element={<CentrumLikwidacjiSzkodTurek />} />
      <Route path="/centrum-likwidacji-szkod-wagrowiec" element={<CentrumLikwidacjiSzkodWagrowiec />} />
      <Route path="/centrum-likwidacji-szkod-wolsztyn" element={<CentrumLikwidacjiSzkodWolsztyn />} />
      <Route path="/centrum-likwidacji-szkod-wronki" element={<CentrumLikwidacjiSzkodWronki />} />
      <Route path="/centrum-likwidacji-szkod-wrzesnia" element={<CentrumLikwidacjiSzkodWrzesnia />} />
      <Route path="/centrum-likwidacji-szkod-wyrzysk" element={<CentrumLikwidacjiSzkodWyrzysk />} />
      <Route path="/centrum-likwidacji-szkod-zbaszyn" element={<CentrumLikwidacjiSzkodZbaszyn />} />
      <Route path="/centrum-likwidacji-szkod-zbaszynek" element={<CentrumLikwidacjiSzkodZbaszynek />} />
      <Route path="/centrum-likwidacji-szkod-zielona-gora" element={<CentrumLikwidacjiSzkodZielonaGora />} />
      <Route path="/centrum-likwidacji-szkod-zlotow" element={<CentrumLikwidacjiSzkodZlotow />} />
      
      {/* Catch-all route must be last */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
