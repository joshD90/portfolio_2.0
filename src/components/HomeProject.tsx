import { FC } from "react";

import { Project } from "../assets/projects/projectArray";
import "./homeProject.css";
type props = {
  project: Project;
};

const HomeProject: FC<props> = ({ project }) => {
  return (
    <div
      className={`row-start-${project.gridPos[0]} row-span-${project.gridPos[1]} col-start-${project.gridPos[2]} col-span-${project.gridPos[3]}  shadow-md rounded-md overflow-hidden border-2 border-stone-500 relative projectDiv`}
    >
      <img
        src={project.bannerImage}
        className="w-full h-full object-cover brightness-75 hover:brightness-50 cursor-pointer"
      />
      <h1 className="text-white absolute top-2 left-2 text-2xl drop-shadow-lg shadow-black p-2 rounded-md">
        {project.title}
      </h1>
      <p className="text-white absolute left-2 projectParagraph transition-all translate-y-full">
        {project.description}
      </p>
    </div>
  );
};

export default HomeProject;
