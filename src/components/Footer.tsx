import { FC } from "react";
import { Email, GitHub, LinkedIn, Phone } from "@mui/icons-material";

const Footer = () => {
  return (
    <div className="bg-emerald-600 h-20 flex items-center text-emerald-50 justify-between p-5 text-sm">
      <div className="md:w-1/3">
        <div className="flex items-center">
          <Email />
          <span>joshuadancey@hotmail.com</span>
        </div>
        <div className="flex items-center">
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
