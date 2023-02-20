import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  title?: string;
  content?: string | string[];
  child?: ReactNode;
};

const SingleProjectSection: FC<Props> = ({ title, content, child }) => {
  if (child)
    return (
      <motion.section
        initial={{ y: 20, scale: 0.9 }}
        whileInView={{ y: 0, scale: 1 }}
        className="bg-white shadow-lg p-5 pt-3 mb-10 text-stone-800 bg-opacity-90 sm:w-11/12 lg:w-4/5"
      >
        {child}
      </motion.section>
    );

  return (
    <motion.section
      initial={{ y: 20 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      className="w-full bg-white shadow-lg p-5 pt-3 mb-10 text-stone-800 bg-opacity-90 sm:w-11/12 lg:w-4/5"
    >
      {title && <h4 className="text-stone-600 pb-2 pl-2 text-xl">{title}</h4>}
      {typeof content === "string" ? (
        <p>{content}</p>
      ) : (
        content?.map((item) => (
          <p className="mb-2 ml-2" key={item}>
            {item}
          </p>
        ))
      )}
    </motion.section>
  );
};

export default SingleProjectSection;
