import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const HomeCatSlider = () => {
  return (
    <div className="homeCatSlider pt-4 py-8">
      <div className="container">
        <Swiper
          slidesPerView={8}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://gadgetclick.ru/wa-data/public/shop/products/63/40/4063/images/23837/23837.750x0.jpg"
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Aqlli planshet</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://www.foroffice.ru/upload/iblock/2d8/16900.20_19_1000x1000.jpg"
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Krepli futbolka</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://cdn1.ozone.ru/s3/multimedia-1-t/6935744513.jpg"
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Soat</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://www.bronnitsy.com/upload/iblock/067/jjfgd0amb7edko0xaadb0p2cpu8au2yn.jpg"
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Rolling olmos</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://i.pinimg.com/736x/d1/3f/ed/d13fedbdd48e926729a67c7da00c3094.jpg"
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Yogoch stul</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://cdn1.ozone.ru/s3/multimedia-1-w/7034028836.jpg"
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Krossovkalar</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://tovary-obzor.ru/wp-content/uploads/2017/02/1-105.jpg"
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Sumkalar</h3>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://dreamcontroller.com/cdn/shop/products/Xbox_SX_Front_11fbe445-0dd0-4aae-b7c3-07bf3f54e2ac.jpg?v=1680736288&width=2048"
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[15px] font-[500] mt-3">Xbox Controller</h3>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeCatSlider;
