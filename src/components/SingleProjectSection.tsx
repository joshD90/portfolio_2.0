import { FC, ReactNode } from "react";

type Props = {
  title?: string;
  content?: string | string[];
  child?: ReactNode;
};

const SingleProjectSection: FC<Props> = ({ title, content, child }) => {
  if (child)
    return (
      <section className="bg-white shadow-lg p-5 pt-3 mb-10 text-stone-800 bg-opacity-90">
        {child}
      </section>
    );

  return (
    <section className="bg-white shadow-lg p-5 pt-3 mb-10 text-stone-800 bg-opacity-90">
      {title && <h4 className="text-stone-600 pb-2 text-xl">{title}</h4>}
      {typeof content === "string" ? (
        <p>{content}</p>
      ) : (
        content?.map((item) => <p className="mb-2">{item}</p>)
      )}
    </section>
  );
};

export default SingleProjectSection;
