import { FC } from "react";
import { Email, GitHub, LinkedIn, Phone } from "@mui/icons-material";

const Footer = () => {
  return (
    <div className="w-full bg-emerald-600 h-20 px-5 flex items-center text-emerald-50 justify-between text-sm">
      <div className="md:w-1/3">
        <div className="flex items-center gap-2">
          <Email />
          <span>joshuadancey@hotmail.com</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone />
          <span>085 237 4436</span>
        </div>
      </div>
      <div className="hidden md:flex justify-center w-1/3 ">
        © Joshua Dancey 2023
      </div>
      <div className="flex gap-2 sm:gap-5 md:w-1/3 justify-end">
        <a
          href="https://www.linkedin.com/in/jdancey"
          className="hover:text-white hover:scale-110 transition-all"
        >
          <LinkedIn />
        </a>
        <a
          href="https://github.com/joshD90"
          className="hover:text-white hover:scale-110 transition-all"
        >
          <GitHub />
        </a>
      </div>
    </div>
  );
};

export default Footer;
