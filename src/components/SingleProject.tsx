import { FC } from "react";

import Swiper from "./Swiper";
import { chessImages } from "../assets/projects/chess/chessImageIndex";

const SingleProject: FC = () => {
  return (
    <div className="h-96 w-full">
      <div className="w-full h-full p-2">
        <Swiper swiperImages={chessImages} />
      </div>
    </div>
  );
};

export default SingleProject;
