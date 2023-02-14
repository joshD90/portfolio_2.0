import Head from "./components/Head";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-screen overflow-hidden">
      <Navbar />
      <Head />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
