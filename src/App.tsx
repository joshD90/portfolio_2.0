import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./containers/LandingPage";
import Navbar from "./components/Navbar";
import SingleProject from "./components/SingleProject";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects/:projectName" element={<SingleProject />} />
      </Routes>
    </Router>
  );
}

export default App;
