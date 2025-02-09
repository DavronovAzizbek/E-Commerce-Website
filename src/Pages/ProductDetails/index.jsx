import Link from "@mui/material/Link";
import Breadcrumbs from "@mui/material/Breadcrumbs";

const ProductDetails = () => {
  return (
    <section className="py-5 pb-0">
      <div className="container">
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            color="inherit"
            href="/"
            className="link transition"
          >
            Home
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/"
            className="link transition"
          >
            Fashion
          </Link>
        </Breadcrumbs>
          </div>
          
          <div className="container flex gap-4">
              <div className="productZoomContainer">
                  
              </div>
            </div>

    </section>
  );
};

export default ProductDetails;
