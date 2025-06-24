
import { Route } from "react-router-dom";
import LikwidacjaSzkodKomunikacyjnych from "../pages/LikwidacjaSzkodKomunikacyjnych";
import LikwidacjaSzkodyZOC from "../pages/LikwidacjaSzkodyZOC";
import ZgloszenieSzkodyKomunikacyjnej from "../pages/ZgloszenieSzkodyKomunikacyjnej";
import ZgloszenieSzkodyUbezpieczeniowej from "../pages/ZgloszenieSzkodyUbezpieczeniowej";
import WycenaSzkodyPowypadkowej from "../pages/WycenaSzkodyPowypadkowej";
import KosztorysNaprawyZOCSprawcy from "../pages/KosztorysNaprawyZOCSprawcy";
import OcenaUszkodzenPojazdu from "../pages/OcenaUszkodzenPojazdu";
import OdszkodowanieZOCSprawcy from "../pages/OdszkodowanieZOCSprawcy";
import LikwidatorSzkod from "../pages/LikwidatorSzkod";
import LikwidacjaSzkodyGrodziskWielkopolski from "../pages/LikwidacjaSzkodyGrodziskWielkopolski";
import WycenaSzkodyPoznan from "../pages/WycenaSzkodyPoznan";

export const ServiceRoutes = () => (
  <>
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
  </>
);
