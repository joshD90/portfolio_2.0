// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

type SwiperImage = {
  image: string;
  text: string;
};

export default ({ swiperImages }: { swiperImages: SwiperImage[] }) => {
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        scrollbar={{ draggable: true }}
        loop={true}
        style={{
          height: "inherit",
          width: "inherit",
          margin: "inherit",
          padding: "inherit",
        }}
      >
        {swiperImages.map((info, index) => {
          return (
            <SwiperSlide key={index} className="relative">
              <img src={info.image} className="w-full h-full object-contain" />
              <p className="absolute bottom-1 left-0 text-sm sm:text-md md:text-lg bg-stone-800 bg-opacity-80 rounded-sm text-emerald-50">
                {info.text}
              </p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
