import InnerImageZoom from "react-inner-image-zoom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useRef, useState } from "react";
import { MdBrandingWatermark } from "react-icons/md";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { MdFilterVintage } from "react-icons/md";
import { MdRateReview } from "react-icons/md";
import { BsPatchCheckFill } from "react-icons/bs";
import Rating from "@mui/material/Rating";
import CircularProgress from "@mui/material/CircularProgress";

const ProductDetails = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [product, setProduct] = useState();
  const zoomSliderBig = useRef();
  const zoomSliderSml = useRef();

  const goto = (index) => {
    setSlideIndex(index);
    zoomSliderSml.current.swiper.slideTo(index);
    zoomSliderBig.current.swiper.slideTo(index);
  };
  return (
    <>
      <div className="flex items-center justify-between px-2 py-0 mt-3">
        <h2 className="text-[18px] font-[600]">Products Details</h2>
      </div>

      <br />

      {product?._id !== "" &&
      product?._id !== undefined &&
      product?._id !== null ? (
        <>
          <div className="productDetails flex gap-8">
            <div className="w-[40%]">
              {product?.images?.length !== 0 && (
                <div className="flex gap-3">
                  <div className={`slider w-[15%] `}>
                    <Swiper
                      ref={zoomSliderSml}
                      direction={"vertical"}
                      slidesPerView={5}
                      spaceBetween={10}
                      navigation={true}
                      modules={[Navigation]}
                      className={`zoomProductSliderThumbs h-[400px] overflow-hidden ${
                        product?.images?.length > 5 && "space"
                      }`}
                    >
                      <SwiperSlide>
                        <div
                          className={`item rounded-md overflow-hidden cursor-pointer group ${
                            slideIndex === 0 ? "opacity-1" : "opacity-30"
                          }`}
                          onClick={() => goto(0)}
                        >
                          <img
                            src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/51-medium_default/today-is-a-good-day-framed-poster.jpg"
                            className="w-full transition-all group-hover:scale-105"
                            alt=""
                          />
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div
                          className={`item rounded-md overflow-hidden cursor-pointer group ${
                            slideIndex === 1 ? "opacity-1" : "opacity-30"
                          }`}
                          onClick={() => goto(1)}
                        >
                          <img
                            src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/51-medium_default/today-is-a-good-day-framed-poster.jpg"
                            className="w-full transition-all group-hover:scale-105"
                            alt=""
                          />
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div
                          className={`item rounded-md overflow-hidden cursor-pointer group ${
                            slideIndex === 2 ? "opacity-1" : "opacity-30"
                          }`}
                          onClick={() => goto(2)}
                        >
                          <img
                            src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/51-medium_default/today-is-a-good-day-framed-poster.jpg"
                            className="w-full transition-all group-hover:scale-105"
                            alt=""
                          />
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div
                          className={`item rounded-md overflow-hidden cursor-pointer group ${
                            slideIndex === 3 ? "opacity-1" : "opacity-30"
                          }`}
                          onClick={() => goto(3)}
                        >
                          <img
                            src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/51-medium_default/today-is-a-good-day-framed-poster.jpg"
                            className="w-full transition-all group-hover:scale-105"
                            alt=""
                          />
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div
                          className={`item rounded-md overflow-hidden cursor-pointer group ${
                            slideIndex === 4 ? "opacity-1" : "opacity-30"
                          }`}
                          onClick={() => goto(4)}
                        >
                          <img
                            src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/51-medium_default/today-is-a-good-day-framed-poster.jpg"
                            className="w-full transition-all group-hover:scale-105"
                            alt=""
                          />
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div
                          className={`item rounded-md overflow-hidden cursor-pointer group ${
                            slideIndex === 5 ? "opacity-1" : "opacity-30"
                          }`}
                          onClick={() => goto(5)}
                        >
                          <img
                            src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/51-medium_default/today-is-a-good-day-framed-poster.jpg"
                            className="w-full transition-all group-hover:scale-105"
                            alt=""
                          />
                        </div>
                      </SwiperSlide>

                      <SwiperSlide></SwiperSlide>
                    </Swiper>
                  </div>

                  <div className="zoomContainer w-[85%] h-[500px] overflow-hidden rounded-md">
                    <Swiper
                      ref={zoomSliderBig}
                      slidesPerView={1}
                      spaceBetween={0}
                      navigation={false}
                    >
                      <SwiperSlide>
                        <InnerImageZoom
                          zoomType="hover"
                          zoomScale={1}
                          src={
                            "https://demos.codezeel.com/prestashop/PRS21/PRS210502/51-medium_default/today-is-a-good-day-framed-poster.jpg"
                          }
                        />
                      </SwiperSlide>

                      <SwiperSlide>
                        <InnerImageZoom
                          zoomType="hover"
                          zoomScale={1}
                          src={
                            "https://demos.codezeel.com/prestashop/PRS21/PRS210502/51-medium_default/today-is-a-good-day-framed-poster.jpg"
                          }
                        />
                      </SwiperSlide>

                      <SwiperSlide>
                        <InnerImageZoom
                          zoomType="hover"
                          zoomScale={1}
                          src={
                            "https://demos.codezeel.com/prestashop/PRS21/PRS210502/51-medium_default/today-is-a-good-day-framed-poster.jpg"
                          }
                        />
                      </SwiperSlide>

                      <SwiperSlide>
                        <InnerImageZoom
                          zoomType="hover"
                          zoomScale={1}
                          src={
                            "https://demos.codezeel.com/prestashop/PRS21/PRS210502/51-medium_default/today-is-a-good-day-framed-poster.jpg"
                          }
                        />
                      </SwiperSlide>

                      <SwiperSlide>
                        <InnerImageZoom
                          zoomType="hover"
                          zoomScale={1}
                          src={
                            "https://demos.codezeel.com/prestashop/PRS21/PRS210502/51-medium_default/today-is-a-good-day-framed-poster.jpg"
                          }
                        />
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              )}
            </div>

            <div className="w-[60%]">
              <h1 className="text-[25px] font-[500] mb-4">{product?.name}</h1>

              <div className="flex items-center py-2">
                <span className="w-[20%] font-[500] flex items-center gap-2 text-[14px]">
                  <MdBrandingWatermark className="opacity-65" />
                  Brand :
                </span>
                <span className="text-[14px]">{product?.brand}</span>
              </div>

              <div className="flex items-center py-1">
                <span className="w-[20%] font-[500] flex items-center gap-2 text-[14px]">
                  <BiSolidCategoryAlt className="opacity-65" />
                  Category :
                </span>
                <span className="text-[14px]">{product?.catName}</span>
              </div>

              {product?.productRam?.length !== 0 && (
                <div className="flex items-center py-1">
                  <span className="w-[20%] font-[500] flex items-center gap-2 text-[14px]">
                    <MdFilterVintage className="opacity-65" />
                    RAM :
                  </span>

                  <div className="flex items-center gap-2">
                    {product?.productRam?.map((ram, index) => {
                      return (
                        <span
                          className=" inline-block p-1 shadow-sm bg-[#fff] text-[12px] font-[500]"
                          key={index}
                        >
                          {ram}
                        </span>
                      );
                    })}
                  </div>
                </div>
              )}

              {product?.size?.length !== 0 && (
                <div className="flex items-center py-1">
                  <span className="w-[20%] font-[500] flex items-center gap-2 text-[14px]">
                    <MdFilterVintage className="opacity-65" />
                    SIZE :
                  </span>

                  <div className="flex items-center gap-2">
                    {product?.size?.map((size, index) => {
                      return (
                        <span
                          className=" inline-block p-1 shadow-sm bg-[#fff] text-[12px] font-[500]"
                          key={index}
                        >
                          {size}
                        </span>
                      );
                    })}
                  </div>
                </div>
              )}

              {product?.productWeight?.length !== 0 && (
                <div className="flex items-center py-1">
                  <span className="w-[20%] font-[500] flex items-center gap-2 text-[14px]">
                    <MdFilterVintage className="opacity-65" />
                    Weight :
                  </span>

                  <div className="flex items-center gap-2">
                    {product?.productWeight?.map((weight, index) => {
                      return (
                        <span
                          className=" inline-block p-1 shadow-sm bg-[#fff] text-[12px] font-[500]"
                          key={index}
                        >
                          {weight}
                        </span>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="flex items-center py-1">
                <span className="w-[20%] font-[500] flex items-center gap-2 text-[14px]">
                  <MdRateReview className="opacity-65" />
                  Review :
                </span>
                <span className="text-[14px]">
                  ({product?.reviews?.length > 0 ? product?.reviews?.length : 0}
                  ) Review
                </span>
              </div>

              <div className="flex items-center py-1">
                <span className="w-[20%] font-[500] flex items-center gap-2 text-[14px]">
                  <BsPatchCheckFill className="opacity-65" />
                  Published :
                </span>
                <span className="text-[14px]">
                  {product?.createdAt?.split("T")[0]}
                </span>
              </div>

              <br />

              <h2 className="text-[20px] font-[500]">Product Description</h2>
              {product?.description && (
                <p className="text-[14px]">{product?.description}</p>
              )}
            </div>
          </div>
          <br />

          <h2 className="text-[18px] font-[500]">Customer Reviews</h2>

          <div className="reviewsWrap mt-3">
            <div className="reviews w-full h-auto mb-3 p-4 bg-white rounded-sm shadow-md flex items-center justify-between">
              <div className="flex items-center gap-8">
                <div className="img w-[85px] h-[85px] rounded-full overflow-hidden">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmpoQaaw13BKAmYv1iRPzkz9AkM0ZskCqK_g&s"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="info w-[80%]">
                  <div className="flex items-center justify-between">
                    <h4 className="text-[16px] font-[500]">Joe Doe</h4>
                    <Rating name="read-only" value={5} readOnly size="small" />
                  </div>
                  <span className="text-[13px]">2025-05-07</span>
                  <p className="text-[13px] mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur, similique.
                  </p>
                </div>
              </div>
            </div>

            <div className="reviews w-full h-auto mb-3 p-4 bg-white rounded-sm shadow-md flex items-center justify-between">
              <div className="flex items-center gap-8">
                <div className="img w-[85px] h-[85px] rounded-full overflow-hidden">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmpoQaaw13BKAmYv1iRPzkz9AkM0ZskCqK_g&s"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="info w-[80%]">
                  <div className="flex items-center justify-between">
                    <h4 className="text-[16px] font-[500]">Joe Doe</h4>
                    <Rating name="read-only" value={5} readOnly size="small" />
                  </div>
                  <span className="text-[13px]">2025-05-07</span>
                  <p className="text-[13px] mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur, similique.
                  </p>
                </div>
              </div>
            </div>

            <div className="reviews w-full h-auto mb-3 p-4 bg-white rounded-sm shadow-md flex items-center justify-between">
              <div className="flex items-center gap-8">
                <div className="img w-[85px] h-[85px] rounded-full overflow-hidden">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmpoQaaw13BKAmYv1iRPzkz9AkM0ZskCqK_g&s"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="info w-[80%]">
                  <div className="flex items-center justify-between">
                    <h4 className="text-[16px] font-[500]">Joe Doe</h4>
                    <Rating name="read-only" value={5} readOnly size="small" />
                  </div>
                  <span className="text-[13px]">2025-05-07</span>
                  <p className="text-[13px] mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur, similique.
                  </p>
                </div>
              </div>
            </div>

            <div className="reviews w-full h-auto mb-3 p-4 bg-white rounded-sm shadow-md flex items-center justify-between">
              <div className="flex items-center gap-8">
                <div className="img w-[85px] h-[85px] rounded-full overflow-hidden">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmpoQaaw13BKAmYv1iRPzkz9AkM0ZskCqK_g&s"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="info w-[80%]">
                  <div className="flex items-center justify-between">
                    <h4 className="text-[16px] font-[500]">Joe Doe</h4>
                    <Rating name="read-only" value={5} readOnly size="small" />
                  </div>
                  <span className="text-[13px]">2025-05-07</span>
                  <p className="text-[13px] mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur, similique.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center h-96">
          <CircularProgress color="inherit" />
        </div>
      )}
    </>
  );
};

export default ProductDetails;
