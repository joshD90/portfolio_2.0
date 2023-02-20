import { FC } from "react";

import skillsArray from "../assets/skillsAssets";
import SkillsSection from "./SkillsSection";

const Skills: FC = () => {
  console.log(skillsArray);
  return (
    <div className="w-full bg-emerald-50 flex items-center justify-center py-10">
      <div className="w-full sm:w-11/12 bg-white shadow-xl flex flex-col items-start pt-5 rounded-sm p-5 sm:p-10">
        <h1 className="text-3xl text-stone-500 mb-5">Skills</h1>
        <SkillsSection skillsArray={skillsArray} skillType="Frontend" />
        <SkillsSection skillsArray={skillsArray} skillType="Backend" />
        <SkillsSection skillsArray={skillsArray} skillType="Other" />
      </div>
    </div>
  );
};

export default Skills;
