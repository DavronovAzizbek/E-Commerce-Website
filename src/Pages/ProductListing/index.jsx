import Sidebar from "../../components/Sidebar";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import ProductItem from "../../components/ProductItem";
import "../ProductListing/style.css";

const ProductListing = () => {
  return (
    <section className="py-5">
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

      <div className="bg-white p-2 mt-4">
        <div className="container flex gap-3">
          <div className="sidebarWrapper w-[20%] h-full bg-white">
            <Sidebar />
          </div>

          <div className="rightContent w-[80%]">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <ProductItem
                image1="https://demos.codezeel.com/prestashop/PRS21/PRS210502/35-large_default/brown-bear-printed-sweater.jpg"
                image2="https://demos.codezeel.com/prestashop/PRS21/PRS210502/32-medium_default/brown-bear-printed-sweater.jpg"
                category="Initech space"
                title="Apple Smart Watch / Midnight Aluminum"
                oldPrice="58.00"
                price="51.04"
                badge="-12%"
              />
              <ProductItem
                image1="https://demos.codezeel.com/prestashop/PRS21/PRS210502/49-large_default/today-is-a-good-day-framed-poster.jpg"
                image2="https://demos.codezeel.com/prestashop/PRS21/PRS210502/53-medium_default/today-is-a-good-day-framed-poster.jpg"
                category="Pro Tech Gear"
                title="Convenient Bags For Students And Adults Too"
                oldPrice="100.00"
                price="94.00"
                badge="NEW"
              />
              <ProductItem
                image1="https://demos.codezeel.com/prestashop/PRS21/PRS210502/70-large_default/mug-today-is-a-good-day.jpg"
                image2="https://demos.codezeel.com/prestashop/PRS21/PRS210502/71-medium_default/mug-today-is-a-good-day.jpg"
                category="Soylent Green"
                title="Mens Cotton Casual Short Sleeve T-Shirts"
                oldPrice="90.00"
                price="86.00"
                badge="NEW"
              />
              <ProductItem
                image1="https://demos.codezeel.com/prestashop/PRS21/PRS210502/133-large_default/customizable-mug.jpg"
                image2="https://demos.codezeel.com/prestashop/PRS21/PRS210502/130-medium_default/customizable-mug.jpg"
                category="Soylent Green"
                title="Plastic Bamboo Dustpan & Brush Black"
                oldPrice="57.00"
                price="52.44"
                badge="-8%"
              />
              <ProductItem
                image1="https://demos.codezeel.com/prestashop/PRS21/PRS210502/104-large_default/brown-bear-vector-graphics.jpg"
                image2="https://demos.codezeel.com/prestashop/PRS21/PRS210502/105-medium_default/brown-bear-vector-graphics.jpg"
                category="Looney Tunes"
                title="Beautiful And Affordable Bags For Women"
                oldPrice="92.00"
                price="82.00"
                badge="NEW"
              />
              <ProductItem
                image1="https://demos.codezeel.com/prestashop/PRS21/PRS210502/120-large_default/brown-bear-notebook.jpg"
                image2="https://demos.codezeel.com/prestashop/PRS21/PRS210502/119-medium_default/brown-bear-notebook.jpg"
                category="The Simpsons"
                title="Smart Speaker & Google Assistant, Light Grey"
                oldPrice="60.00"
                price="54.00"
                badge="NEW"
              />
              <ProductItem
                image1="https://demos.codezeel.com/prestashop/PRS21/PRS210502/103-large_default/pack-mug-framed-poster.jpg"
                image2="https://demos.codezeel.com/prestashop/PRS21/PRS210502/97-medium_default/pack-mug-framed-poster.jpg"
                category="Pro Tech Gear"
                title="GENELEC Compact two-way Active Speaker"
                oldPrice="58.00"
                price="54.00"
                badge="NEW"
              />
              <ProductItem
                image1="https://demos.codezeel.com/prestashop/PRS21/PRS210502/91-large_default/mountain-fox-vector-graphics.jpg"
                image2="https://demos.codezeel.com/prestashop/PRS21/PRS210502/93-medium_default/mountain-fox-vector-graphics.jpg"
                category="Initech space"
                title="Pendant Light Lamps for Home Decor"
                oldPrice="82.00"
                price="76.00"
                badge="NEW"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductListing;
