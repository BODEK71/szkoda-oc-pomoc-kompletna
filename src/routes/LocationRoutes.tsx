
import { Route } from "react-router-dom";
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

export const LocationRoutes = () => (
  <>
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
  </>
);
