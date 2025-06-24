
import { Route } from "react-router-dom";
import LikwidacjaSzkodyWolsztyn from "../pages/LikwidacjaSzkodyWolsztyn";
import WycenaSzkodyWolsztyn from "../pages/WycenaSzkodyWolsztyn";
import LikwidacjaSzkodyPoznan from "../pages/LikwidacjaSzkodyPoznan";
import ObslugaSzkodyOCPoznan from "../pages/ObslugaSzkodyOCPoznan";
import LikwidacjaSzkodyZielonaGora from "../pages/LikwidacjaSzkodyZielonaGora";

export const DamageRoutes = () => (
  <>
    <Route path="/likwidacja-szkody-wolsztyn" element={<LikwidacjaSzkodyWolsztyn />} />
    <Route path="/wycena-szkody-wolsztyn" element={<WycenaSzkodyWolsztyn />} />
    <Route path="/likwidacja-szkody-poznan" element={<LikwidacjaSzkodyPoznan />} />
    <Route path="/obsługa-szkody-oc-poznan" element={<ObslugaSzkodyOCPoznan />} />
    <Route path="/likwidacja-szkody-zielona-gora" element={<LikwidacjaSzkodyZielonaGora />} />
  </>
);
