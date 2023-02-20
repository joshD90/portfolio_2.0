import React from "react";
import { motion } from "framer-motion";

import SingleProjectSection from "./SingleProjectSection";
import { aboutMe } from "../assets/aboutMe";

export type Ref = HTMLDivElement;

const AboutMe = React.forwardRef<Ref>((props, ref) => {
  return (
    <motion.div
      initial={{ y: 20 }}
      whileInView={{ y: 0 }}
      className="max-w-screen bg-emerald-50 py-10 shadow-lg flex items-center justify-center"
      ref={ref}
    >
      <SingleProjectSection title={aboutMe.title} content={aboutMe.content} />
    </motion.div>
  );
});

export default AboutMe;
