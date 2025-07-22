
import { Route } from "react-router-dom";
import CentrumLikwidacjiSzkodPoznan from "../pages/CentrumLikwidacjiSzkodPoznan";
import CentrumLikwidacjiSzkodBojanowo from "../pages/CentrumLikwidacjiSzkodBojanowo";
import CentrumLikwidacjiSzkodBrodnica from "../pages/CentrumLikwidacjiSzkodBrodnica";
import CentrumLikwidacjiSzkodChodziez from "../pages/CentrumLikwidacjiSzkodChodziez";
import CentrumLikwidacjiSzkodCzarnkow from "../pages/CentrumLikwidacjiSzkodCzarnkow";
import CentrumLikwidacjiSzkodGniezno from "../pages/CentrumLikwidacjiSzkodGniezno";
import CentrumLikwidacjiSzkodGostyn from "../pages/CentrumLikwidacjiSzkodGostyn";
import CentrumLikwidacjiSzkodGrodziskWielkopolski from "../pages/CentrumLikwidacjiSzkodGrodziskWielkopolski";
import CentrumLikwidacjiSzkodGlogow from "../pages/CentrumLikwidacjiSzkodGlogow";
import CentrumLikwidacjiSzkodJarocin from "../pages/CentrumLikwidacjiSzkodJarocin";
import CentrumLikwidacjiSzkodJastrowie from "../pages/CentrumLikwidacjiSzkodJastrowie";

export const CentrumLikwidacjiRoutes = () => (
  <>
    <Route path="/centrum-likwidacji-szkod-poznan" element={<CentrumLikwidacjiSzkodPoznan />} />
    <Route path="/centrum-likwidacji-szkod-bojanowo" element={<CentrumLikwidacjiSzkodBojanowo />} />
    <Route path="/centrum-likwidacji-szkod-brodnica" element={<CentrumLikwidacjiSzkodBrodnica />} />
    <Route path="/centrum-likwidacji-szkod-chodziez" element={<CentrumLikwidacjiSzkodChodziez />} />
    <Route path="/centrum-likwidacji-szkod-czarnkow" element={<CentrumLikwidacjiSzkodCzarnkow />} />
    <Route path="/centrum-likwidacji-szkod-gniezno" element={<CentrumLikwidacjiSzkodGniezno />} />
    <Route path="/centrum-likwidacji-szkod-gostyn" element={<CentrumLikwidacjiSzkodGostyn />} />
    <Route path="/centrum-likwidacji-szkod-grodzisk-wielkopolski" element={<CentrumLikwidacjiSzkodGrodziskWielkopolski />} />
    <Route path="/centrum-likwidacji-szkod-glogow" element={<CentrumLikwidacjiSzkodGlogow />} />
    <Route path="/centrum-likwidacji-szkod-jarocin" element={<CentrumLikwidacjiSzkodJarocin />} />
    <Route path="/centrum-likwidacji-szkod-jastrowie" element={<CentrumLikwidacjiSzkodJastrowie />} />
  </>
);
