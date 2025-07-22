import { Route } from "react-router-dom";
import CentrumLikwidacjiSzkodPoznan from "../pages/CentrumLikwidacjiSzkodPoznan";
import CentrumLikwidacjiSzkodBojanowo from "../pages/CentrumLikwidacjiSzkodBojanowo";
import CentrumLikwidacjiSzkodBrodnica from "../pages/CentrumLikwidacjiSzkodBrodnica";
import CentrumLikwidacjiSzkodChodziez from "../pages/CentrumLikwidacjiSzkodChodziez";
import CentrumLikwidacjiSzkodCzarnkow from "../pages/CentrumLikwidacjiSzkodCzarnkow";
import CentrumLikwidacjiSzkodGniezno from "../pages/CentrumLikwidacjiSzkodGniezno";
import CentrumLikwidacjiSzkodGostyn from "../pages/CentrumLikwidacjiSzkodGostyn";

export const CentrumLikwidacjiRoutes = () => (
  <>
    <Route path="/centrum-likwidacji-szkod-poznan" element={<CentrumLikwidacjiSzkodPoznan />} />
    <Route path="/centrum-likwidacji-szkod-bojanowo" element={<CentrumLikwidacjiSzkodBojanowo />} />
    <Route path="/centrum-likwidacji-szkod-brodnica" element={<CentrumLikwidacjiSzkodBrodnica />} />
    <Route path="/centrum-likwidacji-szkod-chodziez" element={<CentrumLikwidacjiSzkodChodziez />} />
    <Route path="/centrum-likwidacji-szkod-czarnkow" element={<CentrumLikwidacjiSzkodCzarnkow />} />
    <Route path="/centrum-likwidacji-szkod-gniezno" element={<CentrumLikwidacjiSzkodGniezno />} />
    <Route path="/centrum-likwidacji-szkod-gostyn" element={<CentrumLikwidacjiSzkodGostyn />} />
  </>
);