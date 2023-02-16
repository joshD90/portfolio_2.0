import React, { FC } from "react";

import SingleProjectSection from "./SingleProjectSection";
import { aboutMe } from "../assets/aboutMe";

type Ref = HTMLDivElement;

const AboutMe = React.forwardRef<Ref>((props, ref) => {
  return (
    <div className="bg-emerald-50 p-10 shadow-lg" ref={ref}>
      <SingleProjectSection title={aboutMe.title} content={aboutMe.content} />
    </div>
  );
});

export default AboutMe;
