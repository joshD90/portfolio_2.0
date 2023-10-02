import React from "react";

import { projectArray } from "../assets/projects/projectArray";
import HomeProject from "./HomeProject";
import { Ref } from "./AboutMe";

const Projects = React.forwardRef<Ref>((props, ref) => {
  return (
    <div
      className="w-full min-h-screen bg-emerald-50 py-10 flex items-center justify-center"
      ref={ref}
    >
      <div className="w-full sm:w-11/12 h-full p-5 bg-white shadow-xl rounded-sm grid gap-4 md:grid-rows-6 md:grid-cols-6 grid-flow-dense">
        {projectArray.map((project) => (
          <HomeProject project={project} key={project.title} />
        ))}
      </div>
    </div>
  );
});
export default Projects;
