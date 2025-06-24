
import { Routes, Route } from "react-router-dom";
import Index from "../pages/Index";
import NotFound from "../pages/NotFound";
import ObslugaSzkodyZOC from "../pages/ObslugaSzkodyZOC";
import NaprawyZOC from "../pages/NaprawyZOC";
import NaprawyBezgotowkoweZOC from "../pages/NaprawyBezgotowkoweZOC";
import AutoZastepczeZOC from "../pages/AutoZastepczeZOC";
import PomocDrogowaZOC from "../pages/PomocDrogowaZOC";
import NaprawyPowypadkowe from "../pages/NaprawyPowypadkowe";
import Kontakt from "../pages/Kontakt";

import { BlogRoutes } from "./BlogRoutes";
import { ServiceRoutes } from "./ServiceRoutes";
import { RepairRoutes } from "./RepairRoutes";
import { LocationRoutes } from "./LocationRoutes";
import { ComprehensiveServiceRoutes } from "./ComprehensiveServiceRoutes";
import { DamageRoutes } from "./DamageRoutes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/obsługa-szkody-z-oc" element={<ObslugaSzkodyZOC />} />
      <Route path="/naprawy-z-oc" element={<NaprawyZOC />} />
      <Route path="/naprawy-bezgotowkowe-z-oc" element={<NaprawyBezgotowkoweZOC />} />
      <Route path="/naprawy-powypadkowe" element={<NaprawyPowypadkowe />} />
      <Route path="/auto-zastepcze-z-oc" element={<AutoZastepczeZOC />} />
      <Route path="/pomoc-drogowa-z-oc" element={<PomocDrogowaZOC />} />
      <Route path="/kontakt" element={<Kontakt />} />
      
      {/* Blog routes */}
      <BlogRoutes />
      
      {/* Service routes */}
      <ServiceRoutes />
      
      {/* Repair routes */}
      <RepairRoutes />
      
      {/* Location routes */}
      <LocationRoutes />
      
      {/* Comprehensive service routes */}
      <ComprehensiveServiceRoutes />
      
      {/* Damage routes */}
      <DamageRoutes />
      
      {/* Catch-all route must be last */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
