
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ObslugaSzkodyZOC from "./pages/ObslugaSzkodyZOC";
import NaprawyZOC from "./pages/NaprawyZOC";
import AutoZastepczeZOC from "./pages/AutoZastepczeZOC";
import PomocDrogowaZOC from "./pages/PomocDrogowaZOC";

// Location-specific pages
import ObslugaSzkodyZOCWolsztyn from "./pages/ObslugaSzkodyZOCWolsztyn";
import ObslugaSzkodyZOCPoznan from "./pages/ObslugaSzkodyZOCPoznan";
import AutoZastepczeZOCPoznan from "./pages/AutoZastepczeZOCPoznan";
import HolowanieZOCGlogów from "./pages/HolowanieZOCGlogów";

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
          <Route path="/auto-zastepcze-z-oc" element={<AutoZastepczeZOC />} />
          <Route path="/pomoc-drogowa-z-oc" element={<PomocDrogowaZOC />} />
          
          {/* Location-specific routes */}
          <Route path="/obsługa-szkody-z-oc-wolsztyn" element={<ObslugaSzkodyZOCWolsztyn />} />
          <Route path="/obsługa-szkody-z-oc-poznan" element={<ObslugaSzkodyZOCPoznan />} />
          <Route path="/auto-zastepcze-z-oc-poznan" element={<AutoZastepczeZOCPoznan />} />
          <Route path="/holowanie-z-oc-glogów" element={<HolowanieZOCGlogów />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
