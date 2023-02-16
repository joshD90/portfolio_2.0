import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./containers/LandingPage";
import Navbar from "./components/Navbar";
import SingleProject from "./components/SingleProject";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects/:projectName" element={<SingleProject />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
