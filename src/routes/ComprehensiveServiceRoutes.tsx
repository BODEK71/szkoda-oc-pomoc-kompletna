
import { Route } from "react-router-dom";
import KompleksowaObslugaPowypadkowa from "../pages/KompleksowaObslugaPowypadkowa";
import CentrumPomocyPoWypadku from "../pages/CentrumPomocyPoWypadku";
import PelnaObslugaPoszkodowanych from "../pages/PelnaObslugaPoszkodowanych";
import PakietUslugPowypadkowych from "../pages/PakietUslugPowypadkowych";
import WszystkoZJednegoMiejsca from "../pages/WszystkoZJednegoMiejsca";
import ObslugaOdADoZ from "../pages/ObslugaOdADoZ";

// Local comprehensive service pages
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

export const ComprehensiveServiceRoutes = () => (
  <>
    {/* General comprehensive service routes */}
    <Route path="/kompleksowa-obsluga-powypadkowa" element={<KompleksowaObslugaPowypadkowa />} />
    <Route path="/centrum-pomocy-po-wypadku" element={<CentrumPomocyPoWypadku />} />
    <Route path="/pelna-obsluga-poszkodowanych" element={<PelnaObslugaPoszkodowanych />} />
    <Route path="/pakiet-uslug-powypadkowych" element={<PakietUslugPowypadkowych />} />
    <Route path="/wszystko-z-jednego-miejsca" element={<WszystkoZJednegoMiejsca />} />
    <Route path="/obsluga-od-a-do-z" element={<ObslugaOdADoZ />} />
    
    {/* Local comprehensive service routes */}
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
  </>
);
