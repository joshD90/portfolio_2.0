import { FC } from "react";
import chessImg from "../assets/projects/chessProjBanner.png";
import lodgeImg from "../assets/projects/cssProjBanner.png";
import eCommerceImg from "../assets/projects/eCommerceProjBanner.png";
import { projectArray } from "../assets/projects/projectArray";
import HomeProject from "./HomeProject";

const Projects: FC = () => {
  return (
    <div className="w-full h-screen bg-emerald-50 p-10">
      <div className="w-full h-full p-5 bg-white shadow-xl rounded-sm grid gap-4 grid-rows-5 grid-cols-5">
        {projectArray.map((project) => (
          <HomeProject project={project} />
        ))}
      </div>
    </div>
  );
};
export default Projects;
