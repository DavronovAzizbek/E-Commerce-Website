import { IoMdTime } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

// eslint-disable-next-line react/prop-types
const BlogItem = ({ image, date, title, description }) => {
  return (
    <div className="blogItem group">
      <div className="imgWrapper w-full overflow-hidden rounded-md cursor-pointer relative">
        <img
          src={image}
          className="w-full transition-all group-hover:scale-105 group-hover:rotate-1"
          alt="blog image"
        />
      </div>

      <div className="info py-4">
        <div className="flex items-center text-[14px] font-[500] text-primary gap-1 mb-2">
          <IoMdTime className="text-[16px]" /> {date}
        </div>

        <h2 className="text-[15px] font-[600] text-black">
          <Link to="/" className="link">
            {title}
          </Link>
        </h2>
        <p className="text-[13px] font-[400] text-[rgba(0,0,0,0.8)] mb-4">
          {description}
        </p>

        <Link className="link font-[500] text-[14px] flex items-center gap-1">
          Read More
          <IoIosArrowForward />
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
