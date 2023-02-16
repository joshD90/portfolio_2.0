// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./swiper.css";

export type SwiperImage = {
  image: string;
  text: string;
};

export default ({ swiperImages }: { swiperImages: SwiperImage[] }) => {
  console.log(swiperImages);

  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        scrollbar={{ draggable: true }}
        loop={false}
        style={{
          height: "inherit",
          width: "inherit",
          margin: "inherit",
          padding: "inherit",
        }}
      >
        {swiperImages.map((info, index) => {
          console.log(info, index);
          return (
            <SwiperSlide key={info.image} className="relative">
              <img src={info.image} className="w-full h-full object-contain" />
              <p className="absolute bottom-1 left-0 text-sm sm:text-md md:text-lg bg-stone-800 bg-opacity-80 rounded-sm text-emerald-50 p-5 w-full text-center">
                {info.text}
              </p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
