import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { Project } from "../assets/projects/projectArray";
import gridSpanGenerator from "../utils/gridSpanGenerator";
import "./homeProject.css";
type props = {
  project: Project;
};

const HomeProject: FC<props> = ({ project }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [gridSpan, setGridSpan] = useState([1, 1]);
  const navigate = useNavigate();

  //set a listener for our screen width change
  useEffect(() => {
    const setWidth = (): void => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", setWidth);
    () => window.removeEventListener("resize", setWidth);
  }, []);

  //on screenwidth changing we update our gridspan array if needs be
  useEffect(() => {
    const gridSpanToUse = gridSpanGenerator(screenWidth, project);
    setGridSpan(gridSpanToUse);
  }, [screenWidth]);

  return (
    <section
      className={`shadow-md rounded-md overflow-hidden border-2 border-stone-500 relative projectDiv hover:scale-105 transition-all w-full`}
      style={{
        gridRow: `span ${gridSpan[0]}`,
        gridColumn: `span ${gridSpan[1]}`,
      }}
      onClick={() => navigate(`/projects/${project.link}`)}
    >
      <img
        src={project.bannerImage}
        className="w-full h-full  brightness-75 hover:brightness-50 cursor-pointer object-cover transition-all"
      />
      <h1 className="text-white absolute top-2 left-2 text-2xl drop-shadow-lg shadow-black p-2 rounded-md bg-stone-800 bg-opacity-30">
        {project.title}
      </h1>

      <p className="text-white absolute left-2 projectParagraph transition-all translate-y-full text-sm md:text-xl lg-2xl p-1 sm:p-2 md:p-4 lg:p-5">
        {project.description}
      </p>
    </section>
  );
};

export default HomeProject;
