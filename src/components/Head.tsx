import { FC } from "react";

import profilePic from "../assets/porfolio.jpg";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import SendIcon from "@mui/icons-material/Send";

type Props = {
  goToAbout: () => void;
  goToProjects: () => void;
};

const Head: FC<Props> = ({ goToAbout, goToProjects }) => {
  return (
    <div className="w-full h-screen flex relative">
      <div className="w-1/2 h-full bg-emerald-600 text-white pr-5 overflow-hidden">
        <div className="h-1/4 sm:h-1/3 flex items-end justify-end">
          <h1 className="text-8xl sm:text-9xl p-0 m-0">Hi.</h1>
        </div>
        <div className="h-2/5 sm:h-48"></div>
        <div className="w-full flex justify-end">
          <h2 className="text-xl sm:text-4xl w-1/2 text-right font-bold">
            A Full Stack
          </h2>
        </div>
        <button
          className="absolute shadow-md bottom-10 left-1/2 p-3 rounded-md bg-white text-stone-600 font-bold opacity-90 hover:opacity-100 hover:shadow-xl"
          style={{ transform: "translateX(-133%)" }}
          onClick={goToProjects}
        >
          Projects
        </button>
      </div>
      {/* right hand side */}
      <div className="w-1/2 h-full text-stone-700  overflow-hidden">
        <div className="h-1/4 sm:h-1/3 flex items-end justify-start ml-5">
          <h2 className="text-xl sm:text-3xl p-0 sm:mb-2 font-bold w-4/5">
            My name is Josh
          </h2>
        </div>
        <div className="h-2/5 sm:h-48"></div>
        <h2 className="text-2xl sm:text-5xl font-bold w-1/2 ml-5">
          Web Developer
        </h2>
        <button className="absolute shadow-md bottom-10 left-1/2 p-3 rounded-md translate-x-1/3 bg-emerald-500 text-white font-bold flex items-center opacity-90 hover:opacity-100 hover:shadow-xl">
          Contact <SendIcon style={{ fontSize: "1.2rem" }} className="pl-1" />
        </button>
        {/* bouncing arrow downs - set width full to center other divs without transform as transform breaks the animate */}
        <div className="flex absolute w-full bottom-2  animate-bounce left-0">
          <div className="text-white w-1/2 flex justify-end overflow-hidden">
            <KeyboardDoubleArrowDownIcon
              className="translate-x-1/2"
              style={{ fontSize: "2.5rem" }}
            />
          </div>
          <div className="text-stone-600 overflow-hidden w-1/2">
            <KeyboardDoubleArrowDownIcon
              className="-translate-x-1/2"
              style={{ fontSize: "2.5rem" }}
            />
          </div>
        </div>
      </div>
      <div onClick={goToAbout}>
        <img
          src={profilePic}
          className="h-36 w-36 object-cover rounded-full border-8 border-stone-700 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 shadow-sm cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Head;
