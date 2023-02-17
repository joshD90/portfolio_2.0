import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { LanguageOutlined, GitHub } from "@mui/icons-material";

import Swiper from "./Swiper";

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

type FullProject = {
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
    setProjectInfo(null);
  }, [projectName]);

  //if there is no project or it is loading return this
  if (!projectInfo)
    return (
      <div className="w-full h-full bg-emerald-50 flex items-center justify-center">
        Cant Seem To Find This Project
      </div>
    );

  const { info } = projectInfo;

  //stick a title on top
  return (
    <div
      className="w-screen px-0 sm:w-full flex flex-col items-center sm:p-5 md:p-10 bg-emerald-50 pt-16 sm:pt-16 md:pt-16"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgb(209 250 229) 0 50%,rgb(236 253 245)50% 100%)",
      }}
    >
      {/* swiper */}
      <section className="w-screen md:w-4/5 lg:w-2/3">
        <div className="w-full flex flex-wrap justify-center">
          <h1 className="w-full text-center text-3xl text-stone-600 pb-5">
            {info.title}
          </h1>
          <Swiper swiperImages={projectInfo.images} />
        </div>
        <div className="p-10 w-full flex items-center justify-center gap-5 font-bold text-stone-600 mr-5">
          <button className="text-sm p-1 sm:text-lg sm:p-2 rounded-md bg-white border-2 border-stone-500 shadow-sm hover:text-stone-800 hover:shadow-lg hover:border-stone-800 flex items-center gap-2">
            Live Website <LanguageOutlined />
          </button>
          <button className="p-1 text-sm sm:text-lg sm:p-2 rounded-md bg-emerald-100 border-2 border-stone-500 shadow-sm hover:text-stone-800 hover:shadow-lg ml-5 hover:border-stone-800 flex items-center gap-2">
            Source Code <GitHub />
          </button>
        </div>
      </section>
      {/* information section */}
      <section>
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
    </div>
  );
  //links to live and github
  //description
  //highlights
  //techs involved
  //key learnings
  //project motivation
};

export default SingleProject;
