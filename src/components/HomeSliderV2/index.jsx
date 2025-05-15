import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import Button from "@mui/material/Button";

const HomeBannerV2 = (props) => {
  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="homeSliderV2"
      >
        {props?.data?.map((item, index) => {
          if (item?.isDisplayOnHomeBanner === true) {
            return (
              <SwiperSlide key={index}>
                <div className="item w-full rounded-md overflow-hidden relative">
                  <img src={item?.bannerImages[0]} />

                  <div className="info absolute top-0 -right-[100%] opacity-0 w-[50%] h-[100%] z-50 p-8 flex items-center flex-col justify-center transition-all duration-700">
                    <h4 className="text-[18px] font-[500] w-full text-left mb-3 relative -right-[100%] opacity-0">
                      {item?.bannerTitleName}
                    </h4>
                    <h2 className="text-[35px] font-[700] w-full relative -right-[100%] opacity-0">
                      {item?.name}
                    </h2>

                    <h3 className="flex items-center gap-3 text-[18px] font-[500] w-full text-left mt-3 mb-3 relative -right-[100%] opacity-0">
                      Starting At Only{" "}
                      <span className="text-primary text-[30px] font-[700]">
                        &#x20b9; {item?.price}
                      </span>
                    </h3>

                    <div className="w-full relative -right-[100%] opacity-0 btn_">
                      <Button className="btn-org">SHOP NOW</Button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          }
        })}
      </Swiper>
    </>
  );
};

export default HomeBannerV2;
