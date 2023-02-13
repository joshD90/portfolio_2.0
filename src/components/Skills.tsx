import { FC } from "react";

import skillsArray from "../assets/skillsAssets";

const Skills: FC = () => {
  return (
    <div className="w-full p-10 bg-emerald-50 flex items-center justify-center">
      <div className=" bg-white shadow-xl flex flex-col items-center pt-5 rounded-sm">
        <h1 className="text-3xl text-stone-500 mb-5">Skills</h1>
        <div className="flex w-full flex-wrap gap-16 p-5 justify-center">
          {skillsArray.map((skill) => (
            <div
              className="w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24 flex flex-col items-center justify-end opacity-80 hover:opacity-100"
              key={skill.name}
            >
              <img src={skill.image} className="" />
              <p className="text-stone-800">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
