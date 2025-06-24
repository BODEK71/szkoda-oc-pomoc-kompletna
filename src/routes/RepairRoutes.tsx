
import { Route } from "react-router-dom";
import NaprawyBezgotowkowe from "../pages/NaprawyBezgotowkowe";
import BlacharstwoPowyypadkowe from "../pages/BlacharstwoPowyypadkowe";
import NaprawyZWinySprawcy from "../pages/NaprawyZWinySprawcy";
import CentrumNaprawPowypadkowych from "../pages/CentrumNaprawPowypadkowych";
import LakierowaniePowypadkowe from "../pages/LakierowaniePowypadkowe";
import WynajemBezgotowkowy from "../pages/WynajemBezgotowkowy";
import Holowanie24h from "../pages/Holowanie24h";

export const RepairRoutes = () => (
  <>
    <Route path="/naprawy-bezgotowkowe" element={<NaprawyBezgotowkowe />} />
    <Route path="/naprawa-bezgotowkowa" element={<NaprawyBezgotowkowe />} />
    <Route path="/blacharstwo-powypadkowe" element={<BlacharstwoPowyypadkowe />} />
    <Route path="/naprawy-z-winy-sprawcy" element={<NaprawyZWinySprawcy />} />
    <Route path="/centrum-napraw-powypadkowych" element={<CentrumNaprawPowypadkowych />} />
    <Route path="/lakierowanie-powypadkowe" element={<LakierowaniePowypadkowe />} />
    <Route path="/wynajem-bezgotowkowy" element={<WynajemBezgotowkowy />} />
    <Route path="/holowanie-24h" element={<Holowanie24h />} />
    <Route path="/pomoc-drogowa-24h" element={<Holowanie24h />} />
  </>
);
