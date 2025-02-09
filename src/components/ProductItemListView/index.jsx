import { Link } from "react-router-dom";
import "../ProductItem/style.css";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";
import { MdZoomOutMap } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";

const ProductItem = ({
  // eslint-disable-next-line react/prop-types
  image1,
  // eslint-disable-next-line react/prop-types
  image2,
  // eslint-disable-next-line react/prop-types
  title,
  // eslint-disable-next-line react/prop-types
  category,
  // eslint-disable-next-line react/prop-types
  oldPrice,
  // eslint-disable-next-line react/prop-types
  price,
  // eslint-disable-next-line react/prop-types
  badge,
}) => {
  return (
    <div className="productItem shadow-lg rounded-md overflow-hidden border-1 border-[rgba(0,0,0,0.1)] group flex items-center">
      <div className="imgWrapper w-[18%] overflow-hidden rounded-md relative">
        <Link to="/">
          <div className="img h-[220px] overflow-hidden">
            <img src={image1} className="w-full" alt="Product Image 1" />
            <img
              src={image2}
              className="w-full transition-all duration-700 absolute top-0 left-0 opacity-0 group-hover:opacity-100 group-hover:scale-105"
              alt="Product Image 2"
            />
          </div>
        </Link>

        {badge && (
          <span
            className={`discount flex items-center absolute top-[10px] left-[10px] z-50 rounded-lg p-1 text-[12px] font-[500] 
    ${
      badge === "NEW"
        ? "bg-green-500 text-white opacity-0 invisible group-hover:opacity-100 group-hover:visible"
        : ""
    }
    ${
      badge === "-12%" || badge === "-8%"
        ? "bg-red-500 text-white opacity-100 visible"
        : "opacity-100 visible"
    }
  `}
          >
            {badge}
          </span>
        )}

        <div className="actions absolute top-[-200px] right-[5px] z-50 flex items-center gap-2 flex-col w-[50px] transition-all duration-300 group-hover:top-[15px] opacity-0 group-hover:opacity-100">
          <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-primary hover:text-white group">
            <MdZoomOutMap className="text-[18px] !text-black group-hover:text-white hover:!text-white" />
          </Button>

          <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-primary hover:text-white group">
            <IoGitCompareOutline className="text-[18px] !text-black group-hover:text-white hover:!text-white" />
          </Button>

          <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-primary hover:text-white group">
            <FaRegHeart className="text-[18px] !text-black group-hover:text-white hover:!text-white" />
          </Button>
        </div>
      </div>

      <div className="info p-3 py-5 px-8 w-[75%]">
        <h6 className="text-[15px]">
          <Link to="/" className="link transition-all">
            {category}
          </Link>
        </h6>
        <h3 className="text-[18px] title mt-2 font-[500] mb-1 text-[#000]">
          <Link to="/" className="link transition-all">
            {title}
          </Link>
        </h3>

        <p className="text-[14px] mb-3">
          We denounce with righteous indignation and dislike men who are so
          beguiled and demoralized by the charms of pleasure of the moment, so
          blinded by desire that they cannot.
        </p>

        <Rating name="size-small" defaultValue={4} size="small" readOnly />

        <div className="flex items-center gap-4">
          <span className="oldPrice line-through text-gray-500 text-[15px] font-[500]">
            ${oldPrice}
          </span>
          <span className="price text-primary text-[15px] font-[600]">
            ${price}
          </span>
        </div>

        <div className="mt-3">
          <Button className="btn-org flex gap-2">
            <MdOutlineShoppingCart className="text-[20px]" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
