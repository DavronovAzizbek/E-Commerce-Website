import { IoMdTime } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const BlogItem = (props) => {
  return (
    <div className="blogItem group">
      <div className="imgWrapper w-full overflow-hidden rounded-md cursor-pointer relative">
        <img
          src={props?.item?.images[0]}
          className="w-full transition-all group-hover:scale-105 group-hover:rotate-1"
          alt="blog image"
        />
      </div>

      <div className="info py-4">
        <div className="flex items-center text-[14px] font-[500] text-primary gap-1 mb-2">
          <IoMdTime className="text-[16px]" />{" "}
          {props?.item?.createdAt?.split("T")[0]}
        </div>

        <h2 className="text-[15px] font-[600] text-black">
          <Link to="/" className="link">
            {props?.item?.title}
          </Link>
        </h2>

        <div
          dangerouslySetInnerHTML={{
            __html: item?.description?.substr(0, 100) + "...",
          }}
        />

        <Link className="link font-[500] text-[14px] flex items-center gap-1">
          Read More
          <IoIosArrowForward />
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
