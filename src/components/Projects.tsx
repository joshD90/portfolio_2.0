import { FC } from "react";

import { projectArray } from "../assets/projects/projectArray";
import HomeProject from "./HomeProject";

const Projects: FC = () => {
  return (
    <div className="w-full min-h-screen bg-emerald-50 sm:p-5 md:p-10 pt-10">
      <div className="w-full h-full p-5 bg-white shadow-xl rounded-sm grid gap-4 md:grid-rows-6 md:grid-cols-6 grid-flow-dense">
        {projectArray.map((project) => (
          <HomeProject project={project} />
        ))}
      </div>
    </div>
  );
};
export default Projects;
