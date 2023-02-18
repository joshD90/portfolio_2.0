import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import LandingPage from "./containers/LandingPage";
import Navbar from "./components/Navbar";
import SingleProject from "./components/SingleProject";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/projects/:projectName" element={<SingleProject />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
