import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { AiTwotoneGift } from "react-icons/ai";
import { IoStatsChartSharp } from "react-icons/io5";
import { AiTwotonePieChart } from "react-icons/ai";
import { BsBank } from "react-icons/bs";
import { RiProductHuntLine } from "react-icons/ri";
import { MdOutlineReviews } from "react-icons/md";
import { FiPieChart } from "react-icons/fi";
import { GoGift } from "react-icons/go";


const DashboardBoxes = (props) => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="dashboardBoxesSlider"
      >
        <SwiperSlide>
          <div className="box bg-[#10b981] p-5 py-6 cursor-pointer hover:bg-[#289974] rounded-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4">
            <FiPieChart className="text-[50px] text-[#fff]" />
            <div className="info w-[70%]">
              <h3 className="text-white">Total Users</h3>
              <b className="text-white text-[20px]">{props?.users}</b>
            </div>
            <IoStatsChartSharp className="text-[50px] text-[#fff]" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="box bg-[#3872fa] p-5 py-6 cursor-pointer hover:bg-[#346ae8] rounded-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4">
            <GoGift className="text-[40px] text-[#fff]" />
            <div className="info w-[70%]">
              <h3 className="text-white">Total Orders</h3>
              <b className="text-white text-[20px]">{props?.orders}</b>
            </div>
            <FiPieChart className="text-[50px] text-[#fff]" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="box p-5 bg-[#31be1d8] py-6 cursor-pointer hover:bg-[#423eadd8] rounded-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4">
            <RiProductHuntLine className="text-[40px] text-[#fff]" />
            <div className="info w-[70%]">
              <h3 className="text-white">Total Products</h3>
              <b className="text-white text-[20px]">{props?.products}</b>
            </div>
            <IoStatsChartSharp className="text-[50px] text-[#fff]" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default DashboardBoxes;
