import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const HomeSlider = () => {
  return (
    <div className="homeSlider py-4">
      <div className="container">
        <Swiper
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="sliderHome"
        >
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="https://images.uzum.uz/cpg5ce3mdtjnp738eaig/main_page_banner.jpg"
                alt="Banner slide"
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="https://images.uzum.uz/cqsrq17frr8a72r87mug/main_page_banner.jpg"
                alt="Banner slide"
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="https://icms-image.slatic.net/images/ims-web/efa7f8f4-f9e7-45b2-934a-f3e44dfd9551.jpg_1200x1200.jpg"
                alt="Banner slide"
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="https://icms-image.slatic.net/images/ims-web/df1a7ab9-5c4c-485c-9a52-60b4741df45e.jpg"
                alt="Banner slide"
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="https://icms-image.slatic.net/images/ims-web/c31ecfa3-6e6c-4612-b528-d947e62cfee2.jpeg"
                alt="Banner slide"
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="https://icms-image.slatic.net/images/ims-web/e74fcf13-9382-458b-bd1b-9d801a51e1d1.jpg"
                alt="Banner slide"
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="https://icms-image.slatic.net/images/ims-web/450b7a24-5950-4a1f-b55c-75760427626b.jpg"
                alt="Banner slide"
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="https://icms-image.slatic.net/images/ims-web/3366c4ed-1b59-4985-adfd-cee7f10c6a52.jpg"
                alt="Banner slide"
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="https://icms-image.slatic.net/images/ims-web/5e0ca18b-4c34-4f36-92f9-c077df79104e.jpg"
                alt="Banner slide"
                className="w-full"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSlider;
