import HomeSlider from "../../components/HomeSlider";
import HomeCatSlider from "../../components/HomeCatSlider";
import { LiaShippingFastSolid } from "react-icons/lia";
import AdsBannerSlider from "../../components/AdsBannerSlider";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import React from "react";
import ProductsSlider from "../../components/ProductsSlider";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <HomeSlider />
      <HomeCatSlider />

      <section className="bg-white py-8">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="leftSec">
              <h2 className="text-[20px] font-[600]">Ommabop mahsulotlar</h2>
              <p className="text-[14px] font-[400]">
                Mart oyining oxirigacha joriy takliflarni otkazib yubormang.
              </p>
            </div>

            <div className="rightSec w-[60%]">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="Fashion" />
                <Tab label="Elektronika" />
                <Tab label="Sumkalar" />
                <Tab label="Oyoq kiyimlar" />
                <Tab label="Oziq-ovqat" />
                <Tab label="Go'zallik" />
                <Tab label="Salomatlik" />
                <Tab label="Zargarlik buyumlari" />
              </Tabs>
            </div>
          </div>

          <ProductsSlider items={6} />
        </div>
      </section>

      <section className="py-4 pt-2 bg-white">
        <div className="container">
          <div className="freeShipping w-[80%] m-auto py-4 p-4 border-2 border-[#ff5252] flex items-center justify-between rounded-md mb-7">
            <div className="col1 flex items-center gap-4">
              <LiaShippingFastSolid className="text-[50px]" />
              <span className="text-[20px] font-[600] uppercase">
                Yetkazib berish bepul
              </span>
            </div>

            <div className="col2">
              <p className="mb-0 font-[500]">
                Birinchi buyurtmangizda va $200 dan ortiq bepul yetkazib berish
              </p>
            </div>

            <p className="font-bold text-[25px]">- Faqat $200*</p>
          </div>

          <AdsBannerSlider items={4} />
        </div>
      </section>

      <section className="py-5 pt-0 bg-white">
        <div className="container">
          <h2 className="text-[20px] font-[600]">Latest Products</h2>
          <ProductsSlider items={6} />

          <AdsBannerSlider items={3} />
        </div>
      </section>

      <section className="py-5 pt-0 bg-white">
        <div className="container">
          <h2 className="text-[20px] font-[600]">Featured Products</h2>
          <ProductsSlider items={6} />

          <AdsBannerSlider items={3} />
        </div>
      </section>

      <section className="py-5 pt-0 bg-white blogSection">
        <div className="py-5">
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            className="blogSlider"
          >
            <SwiperSlide></SwiperSlide>
          </Swiper>
        </div>
      </section>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Home;
