import Link from "@mui/material/Link";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import ProductZoom from "../../components/ProductZoom";
import Rating from "@mui/material/Rating";

const ProductDetails = () => {
  return (
    <>
      <div className="py-5">
        <div className="container">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition !text-[14px]"
            >
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition !text-[14px]"
            >
              Fashion
            </Link>

            <Link
              underline="hover"
              color="inherit"
              className="link transition !text-[14px]"
            >
              Cropped Satin Bomber Jacket
            </Link>
          </Breadcrumbs>
        </div>
      </div>

      <section className="bg-white py-5">
        <div className="container flex gap-8">
          <div className="productZoomContainer w-[40%]">
            <ProductZoom />
          </div>

          <div className="productContent w-[60%]">
            <h1 className="text-[22px] font-[600] mb-2">
              Cropped Satin Bomber Jacket
            </h1>
            <div className="flex items-center gap-3">
              <span className="text-gray-400 text-[13px]">
                Brands :{" "}
                <span className="font-[500] text-black opacity-75">
                  Pro Tech Gear
                </span>
              </span>

              <Rating
                name="size-small"
                defaultValue={4}
                size="small"
                readOnly
              />
              <span className="text-[13px] cursor-pointer">Review (5)</span>
            </div>

            <div className="flex items-center gap-4 mt-4">
              <span className="oldPrice line-through text-gray-500 text-[18px] font-[500]">
                $110.00
              </span>
              <span className="price text-primary text-[18px] font-[600]">
                $94.00
              </span>
            </div>

            <br />

            <p>
              Established fact that a reader will be distracted by the readable
              content of a page when looking at its layout. The point of using
              Lorem Ipsum is that it has a more-or-less.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
