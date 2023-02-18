import { FC } from "react";
import { LanguageOutlined, GitHub } from "@mui/icons-material";

import { FullProject } from "./SingleProject";
import Swiper from "./Swiper";

type Props = {
  projectInfo: FullProject;
};

const SwiperWrapper: FC<Props> = ({ projectInfo }) => {
  const { info } = projectInfo;
  return (
    <section className="w-full sm:w-11/12 md:w-4/5 lg:w-2/3 flex items-center flex-col">
      <div className="w-full sm:w-11/12 flex flex-wrap items-center justify-center">
        <h1 className="w-full text-center text-3xl text-stone-600 pb-5">
          {info.title}
        </h1>
        <Swiper swiperImages={projectInfo.images} />
      </div>
      <div className="p-10 w-full flex items-center justify-center gap-5 font-bold text-stone-600 mr-5">
        <a href={info.siteLink} target="_blank" rel="noreferrer">
          <button className="text-sm p-1 sm:text-lg sm:p-2 rounded-md bg-white border-2 border-stone-500 shadow-sm hover:text-stone-800 hover:shadow-lg hover:border-stone-800 flex items-center gap-2">
            Live Website <LanguageOutlined />
          </button>
        </a>
        <a href={info.gitLink} target="_blank" rel="noreferrer">
          <button className="p-1 text-sm sm:text-lg sm:p-2 rounded-md bg-emerald-100 border-2 border-stone-500 shadow-sm hover:text-stone-800 hover:shadow-lg ml-5 hover:border-stone-800 flex items-center gap-2">
            Source Code <GitHub />
          </button>
        </a>
      </div>
    </section>
  );
};

export default SwiperWrapper;
