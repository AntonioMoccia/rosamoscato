// Import Swiper React components
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

export default ({ images }) => {
  return (
    <Swiper
      style={{
        width: "80vw",
      }}
      modules={[Navigation]}
      navigation
      spaceBetween={5}
      slidesPerView={1}
/*       onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)} */
      data-scroll
    >
      {images.map((img) => {
        return (
          <SwiperSlide>
            <img
              src={img.image.url}
              style={{
                width: "80vw",
                maxHeight: "70vh",
              }}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
