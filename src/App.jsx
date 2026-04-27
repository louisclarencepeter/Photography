import { Route, Routes } from "react-router-dom";
import ScrollManager from "./components/ScrollManager";
import SiteLayout from "./components/SiteLayout";
import ThemeManager from "./components/ThemeManager";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import ImpressumPage from "./pages/ImpressumPage";
import ThanksPage from "./pages/ThanksPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <ThemeManager />
      <ScrollManager />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/impressum" element={<ImpressumPage />} />
          <Route path="/thanks" element={<ThanksPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
