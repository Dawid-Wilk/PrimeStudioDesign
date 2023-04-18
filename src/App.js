import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/HomePage";
import { Offer } from "./pages/Offer";
import { Porftolio } from "./pages/Portfolio";
import { Contact } from "./pages/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/oferta" element={<Offer />} />
        <Route path="/portfolio" element={<Porftolio />} />
        <Route path="/kontakt" element={<Contact />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
