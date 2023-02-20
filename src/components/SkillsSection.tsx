import { FC } from "react";
import { Skill } from "../assets/skillsAssets";

type Props = {
  skillsArray: Skill[];
  skillType: string;
};

const SkillsSection: FC<Props> = ({ skillsArray, skillType }) => {
  return (
    <div className="flex flex-col items-start gap-5  w-full">
      <h4 className="text-stone-500 p-2 text-lg font-bold">{skillType}</h4>
      <hr className="border-1 border-stone-300 w-1/3 -mt-5" />
      <div className="flex flex-wrap gap-10 p-5 justify-start w-full">
        {skillsArray.map((skill) => {
          if (skill.type !== skillType.toLowerCase()) return;
          return (
            <div
              className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 flex flex-col items-center justify-end opacity-80 hover:opacity-100"
              key={skill.name}
            >
              <img src={skill.image} className="contain h-4/5" />
              <p className="text-stone-800 text-sm md:text-md lg:text-lg">
                {skill.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsSection;
