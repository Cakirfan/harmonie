import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import UberUns from "../pages/UberUns";
import Kontakt from "../pages/Kontakt";
import Aktuelles from "../pages/veranstaltungen/Aktuelles";
import Archiv from "../pages/veranstaltungen/Archiv";
import Impressum from "../pages/Impressum";
import KulturKunst from "../pages/KulturKunst";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="uberUns" element={<UberUns />} />
        <Route path="kontakt" element={<Kontakt />} />
        <Route path="aktuelles" element={<Aktuelles />} />
        <Route path="archiv" element={<Archiv />} />
        <Route path="impressum" element={<Impressum />} />
        <Route path="kulturundkunst" element={<KulturKunst />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
