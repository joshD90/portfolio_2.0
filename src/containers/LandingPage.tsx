import { FC } from "react";

import Head from "../components/Head";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

const LandingPage: FC = () => {
  return (
    <div className="w-screen overflow-hidden">
      <Head />
      <Skills />
      <Projects />
    </div>
  );
};

export default LandingPage;
