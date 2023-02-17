import { FC } from "react";

type Props = {
  title: string;
  techs: string[];
};

const SingleProjTechs: FC<Props> = ({ title, techs }) => {
  return (
    <>
      <h4 className="text-stone-600 mb-5 text-xl ">{title}</h4>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-col-5 gap-2 sm:gap-5 justify-items-start">
        {techs.map((tech) => (
          <span>{tech}</span>
        ))}
      </div>
    </>
  );
};

export default SingleProjTechs;
