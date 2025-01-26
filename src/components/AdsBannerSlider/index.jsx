import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import BannerBox from "../BannerBox";

const AdsBannerSlider = (props) => {
  return (
    <div className="py-5 w-full">
      <Swiper
        // eslint-disable-next-line react/prop-types
        slidesPerView={props.items}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="smlBtn"
      >
        <SwiperSlide>
          <BannerBox img={"/Banner1.webp"} link={"/"} />
        </SwiperSlide>

        <SwiperSlide>
          <BannerBox img={"/Banner2.jpg"} link={"/"} />
        </SwiperSlide>

        <SwiperSlide>
          <BannerBox img={"/Banner3.png"} link={"/"} />
        </SwiperSlide>

        <SwiperSlide>
          <BannerBox img={"/Banner4.jpg"} link={"/"} />
        </SwiperSlide>

        <SwiperSlide>
          <BannerBox img={"/Banner5.png"} link={"/"} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AdsBannerSlider;
