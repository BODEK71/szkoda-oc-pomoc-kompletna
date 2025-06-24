
import { Route } from "react-router-dom";
import Blog from "../pages/Blog";
import BlogObslugaSzkodyPrzewodnik from "../pages/BlogObslugaSzkodyPrzewodnik";
import BlogAutoZastepczePrawa from "../pages/BlogAutoZastepczePrawa";
import BlogBezposredniaLikwidacja from "../pages/BlogBezposredniaLikwidacja";

export const BlogRoutes = () => (
  <>
    <Route path="/blog" element={<Blog />} />
    <Route path="/blog/obsługa-szkody-oc-przewodnik" element={<BlogObslugaSzkodyPrzewodnik />} />
    <Route path="/blog/auto-zastepcze-oc-prawa" element={<BlogAutoZastepczePrawa />} />
    <Route path="/blog/bezposrednia-likwidacja-szkod-bls" element={<BlogBezposredniaLikwidacja />} />
  </>
);
