import { FC, useState } from "react";

import "./navbar.css";

const Navbar: FC = () => {
  const [projectsDropped, setProjectsDropped] = useState(false);
  return (
    <div
      className={`fixed left-1/2 -translate-x-1/2 top-2 z-50 bg-emerald-800 bg-opacity-80 font-bold text-xl text-emerald-50 rounded-full px-4 ${
        projectsDropped && "rounded-bl-none"
      }`}
    >
      {/* projects drop down menu */}
      <div className="flex items-center gap-5 w-full h-full relative">
        <span
          className="projectsSpan cursor-pointer hover:bg-emerald-600 rounded-full p-2 bg-opacity-70"
          onMouseEnter={() => setProjectsDropped(true)}
          onMouseLeave={() => setProjectsDropped(false)}
        >
          Project
          <div className="projectsList absolute top-full bg-emerald-800 bg-opacity-80 hidden flex-col -left-4 rounded-b-md ">
            <span className="hover:bg-emerald-700 bg-opacity-60 px-4 p-2">
              Project 1
            </span>
            <span className="hover:bg-emerald-700 bg-opacity-60 px-4 p-2">
              Project 2
            </span>
            <span className="hover:bg-emerald-700 bg-opacity-60 px-4 p-2">
              Project 2
            </span>
          </div>
        </span>
        <span className="cursor-pointer hover:bg-emerald-600 rounded-full p-2 bg-opacity-70">
          Contact
        </span>
        <span className="cursor-pointer hover:bg-emerald-600 rounded-full p-2 bg-opacity-70">
          About
        </span>
      </div>
    </div>
  );
};

export default Navbar;
