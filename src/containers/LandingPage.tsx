import { createRef, FC, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import Head from "../components/Head";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import AboutMe from "../components/AboutMe";

const LandingPage: FC = () => {
  const location = useLocation();
  const aboutRef = createRef<HTMLDivElement>();
  const projectsRef = createRef<HTMLDivElement>();

  useEffect(() => {
    if (location.state?.aboutScroll) {
      aboutRef.current?.scrollIntoView({ behavior: "smooth" });
      console.log(aboutRef.current);
    }
  }, [aboutRef]);

  const goToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const goToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-screen overflow-hidden">
      <Head goToAbout={goToAbout} goToProjects={goToProjects} />
      <Skills />
      <Projects ref={projectsRef} />
      <AboutMe ref={aboutRef} />
    </div>
  );
};

export default LandingPage;
