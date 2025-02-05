/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "../BannerBoxV2/style.css";

const BannerBoxV2 = (props) => {
  return (
    <div className="bannerBoxV2 w-full overflow-hidden rounded-md group relative">
      <img
        src={props.image}
        className="w-full h-full object-cover transition-all duration-150 group-hover:scale-105"
      />

      <div
        className={`info absolute p-5 top-0 left-0 w-full h-full z-50 flex flex-col justify-center ${
          props.info === "left" ? "items-start pl-6" : "items-end pr-6"
        }`}
      >
        <h2 className="text-[18px] font-[600] text-black">{props.title}</h2>

        <span className="text-[20px] text-primary font-[600]">$129.00</span>

        <Link to="/" className="text-[16px] font-[600] link mt-2">
          SHOP NOW
        </Link>
      </div>
    </div>
  );
};

export default BannerBoxV2;
