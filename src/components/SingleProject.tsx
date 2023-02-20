import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

import { SwiperImage } from "./Swiper";
import { Project } from "../assets/projects/projectArray";
import SingleProjectSection from "./SingleProjectSection";
import SingleProjTechs from "./SingleProjTechs";

//project data - may need to index this if gets unwieldy
import { chessImages } from "../assets/projects/chess/chessImageIndex";
import { chessInfo } from "../assets/projects/chess/chessInfo";
import { eCommerceImages } from "../assets/projects/eCommerce/eCommerceImageIndex";
import { eCommerceInfo } from "../assets/projects/eCommerce/eCommerceInfo";
import { staticImages } from "../assets/projects/static/staticImagesIndex";
import { staticInfo } from "../assets/projects/static/staticInfo";

import SwiperWrapper from "./SwiperWrapper";
import { kanbanInfo } from "../assets/projects/kanban/kanbanInfo";
import { kanbanImages } from "../assets/projects/kanban/kanbanImageIndex";

export type FullProject = {
  info: Project;
  images: SwiperImage[];
};

const SingleProject: FC = () => {
  const [projectInfo, setProjectInfo] = useState<FullProject | null>(null);

  //get the param that has been passed with this project and use this to set our state
  const { projectName } = useParams();

  useEffect(() => {
    if (projectName === "chess")
      return setProjectInfo({ info: chessInfo, images: chessImages });
    if (projectName === "eCommerce")
      return setProjectInfo({ info: eCommerceInfo, images: eCommerceImages });
    if (projectName === "static")
      return setProjectInfo({ info: staticInfo, images: staticImages });
    if (projectName === "kanban")
      return setProjectInfo({ info: kanbanInfo, images: kanbanImages });
    setProjectInfo(null);
  }, [projectName]);

  //if there is no project or it is loading return this
  if (!projectInfo)
    return (
      <div className="w-full h-screen bg-emerald-50 flex items-center justify-center">
        Cant Seem To Find This Project
      </div>
    );

  const { info } = projectInfo;

  //stick a title on top
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      className="w-full pt-16 flex flex-col items-center"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgb(209 250 229) 0 50%,rgb(236 253 245)50% 100%)",
      }}
    >
      {/* swiper */}
      <SwiperWrapper projectInfo={projectInfo} />
      {/* information section */}
      <section className="flex items-center flex-col">
        <SingleProjectSection title="Overview" content={info.description} />
        <SingleProjectSection
          title="Project Hightlights"
          content={info.highlights}
        />
        <SingleProjectSection
          child={<SingleProjTechs techs={info.techs} title="Key Techs Used" />}
        />

        <SingleProjectSection
          child={
            <SingleProjTechs techs={info.keyLearnings} title="Key Learnings" />
          }
        />
        <SingleProjectSection
          title="Motivations for doing this Project"
          content={info.motivation}
        />
      </section>
    </motion.div>
  );
  //links to live and github
  //description
  //highlights
  //techs involved
  //key learnings
  //project motivation
};

export default SingleProject;
