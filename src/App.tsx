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
          
          {/* Catch-all route must be last */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
