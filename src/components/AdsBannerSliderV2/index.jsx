import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import BannerBoxV2 from "../BannerBox";

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
        {props?.data?.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <BannerBoxV2
                info={item?.alignInfo}
                item={item}
                image={item?.images[0]}
                link={"/"}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default AdsBannerSlider;
