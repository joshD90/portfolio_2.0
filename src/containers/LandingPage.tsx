import { createRef, FC, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import Head from "../components/Head";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import AboutMe from "../components/AboutMe";

const LandingPage: FC = () => {
  const location = useLocation();
  const aboutRef = createRef<HTMLDivElement>();

  useEffect(() => {
    if (location.state?.aboutScroll) {
      aboutRef.current?.scrollIntoView({ behavior: "smooth" });
      console.log(aboutRef.current);
    }
  }, [aboutRef]);

  return (
    <div className="w-screen overflow-hidden">
      <Head />
      <Skills />
      <Projects />
      <AboutMe ref={aboutRef} />
    </div>
  );
};

export default LandingPage;
