
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ObslugaSzkodyZOC from "./pages/ObslugaSzkodyZOC";
import NaprawyZOC from "./pages/NaprawyZOC";
import NaprawyBezgotowkoweZOC from "./pages/NaprawyBezgotowkoweZOC";
import AutoZastepczeZOC from "./pages/AutoZastepczeZOC";
import PomocDrogowaZOC from "./pages/PomocDrogowaZOC";
import NaprawyPowypadkowe from "./pages/NaprawyPowypadkowe";
import Kontakt from "./pages/Kontakt";

// Location-specific pages
import ObslugaSzkodyZOCWolsztyn from "./pages/ObslugaSzkodyZOCWolsztyn";
import ObslugaSzkodyZOCPoznan from "./pages/ObslugaSzkodyZOCPoznan";
import AutoZastepczeZOCPoznan from "./pages/AutoZastepczeZOCPoznan";
import HolowanieZOCGlogów from "./pages/HolowanieZOCGlogów";

// New location pages
import ObslugaSzkodyZielonaGora from "./pages/ObslugaSzkodyZielonaGora";
import ObslugaSzkodyNowyTomysl from "./pages/ObslugaSzkodyNowyTomysl";
import ObslugaSzkodySlawa from "./pages/ObslugaSzkodySlawa";
import ObslugaSzkodyLeszno from "./pages/ObslugaSzkodyLeszno";
import ObslugaSzkodyKoscian from "./pages/ObslugaSzkodyKoscian";
import ObslugaSzkodySzamotuly from "./pages/ObslugaSzkodySzamotuly";
import ObslugaSzkodyMiedzyrzecz from "./pages/ObslugaSzkodyMiedzyrzecz";

// Blog pages
import Blog from "./pages/Blog";
import BlogObslugaSzkodyPrzewodnik from "./pages/BlogObslugaSzkodyPrzewodnik";
import BlogAutoZastepczePrawa from "./pages/BlogAutoZastepczePrawa";
import BlogBezposredniaLikwidacja from "./pages/BlogBezposredniaLikwidacja";

// Service pages
import LikwidacjaSzkodKomunikacyjnych from "./pages/LikwidacjaSzkodKomunikacyjnych";
import LikwidacjaSzkodyZOC from "./pages/LikwidacjaSzkodyZOC";
import ZgloszenieSzkodyKomunikacyjnej from "./pages/ZgloszenieSzkodyKomunikacyjnej";
import ZgloszenieSzkodyUbezpieczeniowej from "./pages/ZgloszenieSzkodyUbezpieczeniowej";
import WycenaSzkodyPowypadkowej from "./pages/WycenaSzkodyPowypadkowej";
import KosztorysNaprawyZOCSprawcy from "./pages/KosztorysNaprawyZOCSprawcy";
import OcenaUszkodzenPojazdu from "./pages/OcenaUszkodzenPojazdu";
import OdszkodowanieZOCSprawcy from "./pages/OdszkodowanieZOCSprawcy";
import LikwidatorSzkod from "./pages/LikwidatorSzkod";
import LikwidacjaSzkodyGrodziskWielkopolski from "./pages/LikwidacjaSzkodyGrodziskWielkopolski";
import WycenaSzkodyPoznan from "./pages/WycenaSzkodyPoznan";

// New repair pages
import NaprawyBezgotowkowe from "./pages/NaprawyBezgotowkowe";
import BlacharstwoPowyypadkowe from "./pages/BlacharstwoPowyypadkowe";
import NaprawyZWinySprawcy from "./pages/NaprawyZWinySprawcy";
import CentrumNaprawPowypadkowych from "./pages/CentrumNaprawPowypadkowych";
import LakierowaniePowypadkowe from "./pages/LakierowaniePowypadkowe";

// New rental pages
import WynajemBezgotowkowy from "./pages/WynajemBezgotowkowy";

// New roadside assistance pages
import Holowanie24h from "./pages/Holowanie24h";

// New comprehensive service pages
import KompleksowaObslugaPowypadkowa from "./pages/KompleksowaObslugaPowypadkowa";
import CentrumPomocyPoWypadku from "./pages/CentrumPomocyPoWypadku";
import PelnaObslugaPoszkodowanych from "./pages/PelnaObslugaPoszkodowanych";

// New package service pages
import PakietUslugPowypadkowych from "./pages/PakietUslugPowypadkowych";
import WszystkoZJednegoMiejsca from "./pages/WszystkoZJednegoMiejsca";
import ObslugaOdADoZ from "./pages/ObslugaOdADoZ";

// Local comprehensive service pages
import KompleksowaObslugaPowypadkowaWolsztyn from "./pages/KompleksowaObslugaPowypadkowaWolsztyn";
import CentrumPomocyPoWypadkuWolsztyn from "./pages/CentrumPomocyPoWypadkuWolsztyn";
import KompleksowaObslugaPowypadkowaPoznan from "./pages/KompleksowaObslugaPowypadkowaPoznan";
import CentrumPomocyPoWypadkuPoznan from "./pages/CentrumPomocyPoWypadkuPoznan";
import KompleksowaObslugaPowypadkowaZielonaGora from "./pages/KompleksowaObslugaPowypadkowaZielonaGora";
import CentrumPomocyPoWypadkuZielonaGora from "./pages/CentrumPomocyPoWypadkuZielonaGora";
import KompleksowaObslugaPowypadkowaNowyTomysl from "./pages/KompleksowaObslugaPowypadkowaNowyTomysl";
import CentrumPomocyPoWypadkuNowyTomysl from "./pages/CentrumPomocyPoWypadkuNowyTomysl";
import KompleksowaObslugaPowypadkowaSlawa from "./pages/KompleksowaObslugaPowypadkowaSlawa";
import CentrumPomocyPoWypadkuSlawa from "./pages/CentrumPomocyPoWypadkuSlawa";
import KompleksowaObslugaPowypadkowaLeszno from "./pages/KompleksowaObslugaPowypadkowaLeszno";
import CentrumPomocyPoWypadkuLeszno from "./pages/CentrumPomocyPoWypadkuLeszno";
import KompleksowaObslugaPowypadkowaGlogow from "./pages/KompleksowaObslugaPowypadkowaGlogow";
import CentrumPomocyPoWypadkuGlogow from "./pages/CentrumPomocyPoWypadkuGlogow";
import KompleksowaObslugaPowypadkowaKoscian from "./pages/KompleksowaObslugaPowypadkowaKoscian";
import CentrumPomocyPoWypadkuKoscian from "./pages/CentrumPomocyPoWypadkuKoscian";
import KompleksowaObslugaPowypadkowaSzamotuly from "./pages/KompleksowaObslugaPowypadkowaSzamotuly";
import CentrumPomocyPoWypadkuSzamotuly from "./pages/CentrumPomocyPoWypadkuSzamotuly";
import KompleksowaObslugaPowypadkowaMiedzyrzecz from "./pages/KompleksowaObslugaPowypadkowaMiedzyrzecz";
import CentrumPomocyPoWypadkuMiedzyrzecz from "./pages/CentrumPomocyPoWypadkuMiedzyrzecz";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/obsługa-szkody-z-oc" element={<ObslugaSzkodyZOC />} />
          <Route path="/naprawy-z-oc" element={<NaprawyZOC />} />
          <Route path="/naprawy-bezgotowkowe-z-oc" element={<NaprawyBezgotowkoweZOC />} />
          <Route path="/naprawy-powypadkowe" element={<NaprawyPowypadkowe />} />
          <Route path="/auto-zastepcze-z-oc" element={<AutoZastepczeZOC />} />
          <Route path="/pomoc-drogowa-z-oc" element={<PomocDrogowaZOC />} />
          <Route path="/kontakt" element={<Kontakt />} />
          
          {/* Location-specific routes */}
          <Route path="/obsługa-szkody-z-oc-wolsztyn" element={<ObslugaSzkodyZOCWolsztyn />} />
          <Route path="/obsługa-szkody-z-oc-poznan" element={<ObslugaSzkodyZOCPoznan />} />
          <Route path="/auto-zastepcze-z-oc-poznan" element={<AutoZastepczeZOCPoznan />} />
          <Route path="/holowanie-z-oc-glogów" element={<HolowanieZOCGlogów />} />
          
          {/* New location routes */}
          <Route path="/obsługa-szkody-zielona-gora" element={<ObslugaSzkodyZielonaGora />} />
          <Route path="/obsługa-szkody-nowy-tomysl" element={<ObslugaSzkodyNowyTomysl />} />
          <Route path="/obsługa-szkody-slawa" element={<ObslugaSzkodySlawa />} />
          <Route path="/obsługa-szkody-leszno" element={<ObslugaSzkodyLeszno />} />
          <Route path="/obsługa-szkody-koscian" element={<ObslugaSzkodyKoscian />} />
          <Route path="/obsługa-szkody-szamotuly" element={<ObslugaSzkodySzamotuly />} />
          <Route path="/obsługa-szkody-miedzyrzecz" element={<ObslugaSzkodyMiedzyrzecz />} />
          
          {/* Blog routes */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/obsługa-szkody-oc-przewodnik" element={<BlogObslugaSzkodyPrzewodnik />} />
          <Route path="/blog/auto-zastepcze-oc-prawa" element={<BlogAutoZastepczePrawa />} />
          <Route path="/blog/bezposrednia-likwidacja-szkod-bls" element={<BlogBezposredniaLikwidacja />} />
          
          {/* Service routes */}
          <Route path="/likwidacja-szkod-komunikacyjnych" element={<LikwidacjaSzkodKomunikacyjnych />} />
          <Route path="/likwidacja-szkody-z-oc" element={<LikwidacjaSzkodyZOC />} />
          <Route path="/zgloszenie-szkody-komunikacyjnej" element={<ZgloszenieSzkodyKomunikacyjnej />} />
          <Route path="/zgloszenie-szkody-ubezpieczeniowej" element={<ZgloszenieSzkodyUbezpieczeniowej />} />
          <Route path="/wycena-szkody-powypadkowej" element={<WycenaSzkodyPowypadkowej />} />
          <Route path="/kosztorys-naprawy-z-oc-sprawcy" element={<KosztorysNaprawyZOCSprawcy />} />
          <Route path="/ocena-uszkodzen-pojazdu" element={<OcenaUszkodzenPojazdu />} />
          <Route path="/odszkodowanie-z-oc-sprawcy" element={<OdszkodowanieZOCSprawcy />} />
          <Route path="/likwidator-szkod" element={<LikwidatorSzkod />} />
          <Route path="/likwidacja-szkody-grodzisk-wielkopolski" element={<LikwidacjaSzkodyGrodziskWielkopolski />} />
          <Route path="/wycena-szkody-poznan" element={<WycenaSzkodyPoznan />} />
          
          {/* New repair routes */}
          <Route path="/naprawy-bezgotowkowe" element={<NaprawyBezgotowkowe />} />
          <Route path="/naprawa-bezgotowkowa" element={<NaprawyBezgotowkowe />} />
          <Route path="/blacharstwo-powypadkowe" element={<BlacharstwoPowyypadkowe />} />
          <Route path="/naprawy-z-winy-sprawcy" element={<NaprawyZWinySprawcy />} />
          <Route path="/centrum-napraw-powypadkowych" element={<CentrumNaprawPowypadkowych />} />
          <Route path="/lakierowanie-powypadkowe" element={<LakierowaniePowypadkowe />} />
          
          {/* New rental routes */}
          <Route path="/wynajem-bezgotowkowy" element={<WynajemBezgotowkowy />} />
          
          {/* New roadside assistance routes */}
          <Route path="/holowanie-24h" element={<Holowanie24h />} />
          <Route path="/pomoc-drogowa-24h" element={<Holowanie24h />} />
          
          {/* New comprehensive service routes */}
          <Route path="/kompleksowa-obsluga-powypadkowa" element={<KompleksowaObslugaPowypadkowa />} />
          <Route path="/centrum-pomocy-po-wypadku" element={<CentrumPomocyPoWypadku />} />
          <Route path="/pelna-obsluga-poszkodowanych" element={<PelnaObslugaPoszkodowanych />} />
          
          {/* New package service routes */}
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
          
          {/* Catch-all route must be last */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
