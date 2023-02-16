import { FC } from "react";

type Props = {
  techs: string[];
};

const SingleProjTechs: FC<Props> = ({ techs }) => {
  return (
    <>
      <div className="grid grid-cols-5 gap-y-5 justify-items-start">
        {techs.map((tech) => (
          <span>{tech}</span>
        ))}
      </div>
    </>
  );
};

export default SingleProjTechs;
