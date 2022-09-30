// Import Swiper React components
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

export default ({ images }) => {
  return (
    <Swiper
      className='swiper'

      modules={[Navigation]}
      navigation
      spaceBetween={5}
      slidesPerView={1}
/*       onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)} */
      data-scroll
    >
      {images.map((img,index) => {
        return (
          <SwiperSlide
          key={index}
          className='swiper-slide'
          >
            <img src={img.image.url}/>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
