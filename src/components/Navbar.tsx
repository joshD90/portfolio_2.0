import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

import "./navbar.css";

const Navbar: FC = () => {
  const [projectsDropped, setProjectsDropped] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const [bgOpacity, setBgOpacity] = useState(80);

  //make our navbar more transparent when we are scrolling down
  useEffect(() => {
    const doWindowScroll = () => {
      setScrollPos((prev) => {
        if (window.pageYOffset > prev) {
          setBgOpacity(30);
        } else {
          setBgOpacity(80);
        }
        return window.pageYOffset;
      });
      console.log("scrolling");
    };

    window.addEventListener("scroll", doWindowScroll);
    return () => window.removeEventListener("scroll", doWindowScroll);
  }, []);

  //return our navbar opacity when finished scrolling
  useEffect(() => {
    const scrollTimer = setTimeout(() => setBgOpacity(80), 1000);
    return () => clearTimeout(scrollTimer);
  }, [scrollPos]);

  return (
    <div
      className={`fixed left-1/2 -translate-x-1/2 top-2 z-50 bg-emerald-800 bg-opacity-${bgOpacity} transition-all font-bold text-xl text-emerald-50 rounded-full px-4 ${
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
          Projects
          <div className="projectsList absolute top-full bg-emerald-800 bg-opacity-80 hidden flex-col -left-4 rounded-b-md ">
            <Link
              to="/projects/eCommerce"
              className="hover:bg-emerald-700 bg-opacity-60 px-4 p-2"
              replace
            >
              <span>eCommerce</span>
            </Link>
            <Link
              to="/projects/chess"
              className="hover:bg-emerald-700 bg-opacity-60 px-4 p-2"
              replace
            >
              <span>Chess Game</span>
            </Link>
            <Link
              to="/projects/kanban"
              className="hover:bg-emerald-700 bg-opacity-60 px-4 p-2"
              replace
            >
              <span>Kanban</span>
            </Link>
            <Link
              to="/projects/static "
              className="hover:bg-emerald-700 bg-opacity-60 px-4 p-2"
              replace
            >
              <span>Static</span>
            </Link>
          </div>
        </span>
        <Link
          to="/contact"
          className="cursor-pointer hover:bg-emerald-600 rounded-full p-2 bg-opacity-70"
        >
          <span>Contact</span>
        </Link>
        {/* <Link
          to="/"
          state={{ aboutScroll: true }}
          className="cursor-pointer hover:bg-emerald-600 rounded-full p-2 bg-opacity-70"
        >
          <span>About</span>
        </Link> */}
        <Link
          to="/"
          state={{ aboutScroll: false }}
          className="cursor-pointer hover:bg-emerald-600 rounded-full p-2 bg-opacity-70 flex items-center justify-center"
        >
          <HomeIcon />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
