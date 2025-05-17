import HomeCatSlider from "../../components/HomeCatSlider";
import { LiaShippingFastSolid } from "react-icons/lia";
import AdsBannerSlider from "../../components/AdsBannerSlider";
import AdsBannerSliderV2 from "../../components/AdsBannerSliderV2";
import HomeSlider from "../../components/HomeSlider";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import React, { useContext, useEffect, useState } from "react";
import ProductsSlider from "../../components/ProductsSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import BlogItem from "../../components/BlogItem";
import HomeBannerV2 from "../../components/HomeSliderV2";
import BannerBoxV2 from "../../components/BannerBoxV2";
import { fetchDataFromApi } from "../../utils/api";
import { MyContext } from "../../App";
import ProductLoading from "../../components/ProductLoading";

const Home = () => {
  const [value, setValue] = React.useState(0);
  const [homeSlidesData, setHomeSlidesData] = useState([]);
  const [popularProductsData, setPopularProductsData] = useState([]);
  const [productsData, setAllProductsData] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [bannerV1Data, setBannerV1Data] = useState([]);

  const context = useContext(MyContext);

  useEffect(() => {
    fetchDataFromApi("/api/homeSlides").then((res) => {
      setHomeSlidesData(res?.data);
    });

    fetchDataFromApi("/api/product/getAllProducts").then((res) => {
      setAllProductsData(res?.products);
    });

    fetchDataFromApi("/api/product/getAllFeaturedProducts").then((res) => {
      setFeaturedProducts(res?.products);
    });

    fetchDataFromApi("/api/bannerV1").then((res) => {
      setBannerV1Data(res?.data);
    });
  }, []);

  useEffect(() => {
    fetchDataFromApi(
      `/api/product/getAllProductsByCatId/${context?.catData[0]?._id}`
    ).then((res) => {
      if (res?.error === false) {
        setPopularProductsData(res?.products);
      }
    });
  }, [context?.catData]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const filterByCatId = (id) => {
    fetchDataFromApi(`/api/product/getAllProductsByCatId/${id}`).then((res) => {
      if (res?.error === false) {
        setPopularProductsData(res?.products);
      }
    });
  };

  return (
    <>
      {homeSlidesData?.length !== 0 && <HomeSlider data={homeSlidesData} />}

      {context?.catData?.length !== 0 && (
        <HomeCatSlider data={context?.catData} />
      )}

      <section className="bg-white py-8">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="leftSec">
              <h2 className="text-[20px] font-[600]">Ommabop mahsulotlar</h2>
              <p className="text-[14px] font-[400] mt-0 mb-0">
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
                {context?.catData?.length !== 0 &&
                  context?.catData?.map((cat, index) => {
                    return (
                      <Tab
                        key={index}
                        label={cat?.name}
                        onClick={() => filterByCatId(cat?._id)}
                      />
                    );
                  })}
              </Tabs>
            </div>
          </div>

          {popularProductsData?.length === 0 && <ProductLoading />}

          {popularProductsData?.length !== 0 && (
            <ProductsSlider items={6} data={popularProductsData} />
          )}
        </div>
      </section>

      <section className="py-6">
        <div className="container flex gap-5">
          <div className="part1 w-full max-w-screen-lg">
            {productsData?.length !== 0 && <HomeBannerV2 data={productsData} />}
          </div>

          <div className="part2 w-[30%] flex items-center gap-5 justify-between flex-col">
            <BannerBoxV2
              info="left"
              image="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg"
              title="Samsung Gear VR Camera"
            />
            <BannerBoxV2
              info="right"
              image="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-2.jpg"
              title="Marcel Dining Room Chair"
            />
          </div>
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

          {bannerV1Data?.length !== 0 && (
            <AdsBannerSliderV2 items={4} data={bannerV1Data} />
          )}
        </div>
      </section>

      <section className="py-5 pt-0 bg-white">
        <div className="container">
          <h2 className="text-[20px] font-[600]">Latest Products</h2>

          {productsData?.length === 0 && <ProductLoading />}

          {productsData?.length !== 0 && (
            <ProductsSlider items={6} data={productsData} />
          )}

          <AdsBannerSlider items={3} />
        </div>
      </section>

      <section className="py-5 pt-0 bg-white">
        <div className="container">
          <h2 className="text-[20px] font-[600]">Featured Products</h2>

          {featuredProducts?.length === 0 && <ProductLoading />}

          {featuredProducts?.length !== 0 && (
            <ProductsSlider items={6} data={featuredProducts} />
          )}

          <AdsBannerSlider items={3} />
        </div>
      </section>

      <section className="py-5 pb-8 pt-0 bg-white blogSection">
        <div className="container">
          <h2 className="text-[20px] font-[600] mb-4">From The Blog</h2>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            navigation={true}
            modules={[Navigation]}
            className="blogSlider"
          >
            <SwiperSlide>
              <BlogItem
                image="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/psblog/b/9/1105_813/b-blog-7.jpg"
                date="3 February, 2025"
                title="Nullam ullamcorper ornare molestie"
                description="Suspendisse posuere, diam in bibendum lobortis, turpis ipsum aliquam..."
              />
            </SwiperSlide>

            <SwiperSlide>
              <BlogItem
                image="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/psblog/b/8/1105_813/b-blog-6.jpg"
                date="4 February, 2025"
                title="Turpis at eleifend Aenean porta"
                description="Turpis at eleifend ps mi elit Aenean porta ac sed faucibus.Nunc urna..."
              />
            </SwiperSlide>

            <SwiperSlide>
              <BlogItem
                image="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/psblog/b/7/1105_813/b-blog-5.jpg"
                date="5 February, 2025"
                title="Morbi condimentum molestie Nam"
                description="Sed mauris Pellentesque elit Aliquam at lacus interdum nascetur elit..."
              />
            </SwiperSlide>

            <SwiperSlide>
              <BlogItem
                image="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/psblog/b/6/1105_813/b-blog-4.jpg"
                date="6 February, 2025"
                title="Curabitur at elit Vestibulum"
                description="Mi vitae magnis Fusce laoreet nibh felis porttitor laoreet Vestibulum..."
              />
            </SwiperSlide>

            <SwiperSlide>
              <BlogItem
                image="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/psblog/b/5/1105_813/b-blog-3.jpg"
                date="7 February, 2025"
                title="Urna pretium elit mauris cursus"
                description="Mi vitae magnis Fusce laoreet nibh felis porttitor laoreet Vestibulum..."
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Home;
