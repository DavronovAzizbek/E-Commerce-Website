import Sidebar from "../../components/Sidebar";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import ProductItem from "../../components/ProductItem";
import "../ProductListing/style.css";
import Button from "@mui/material/Button";
import { IoGridSharp } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React, { useState } from "react";
import ProductItemListView from "../../components/ProductItemListView";
import Pagination from "@mui/material/Pagination";

const ProductListing = () => {
  const [itemView, setItemView] = useState("grid");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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

      <div className="bg-white p-2 mt-4">
        <div className="container flex gap-3">
          <div className="sidebarWrapper w-[20%] h-full bg-white">
            <Sidebar />
          </div>

          <div className="rightContent w-[80%] py-3">
            <div className="bg-[#f1f1f1] p-2 w-full mb-4 rounded-md flex items-center justify-between">
              <div className="col1 flex items-center itemViewActions">
                <Button
                  className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] ${
                    itemView === "list" && "active"
                  } `}
                  onClick={() => setItemView("list")}
                >
                  <LuMenu className="text-[rgba(0,0,0,0.7)]" />
                </Button>
                <Button
                  className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] ${
                    itemView === "grid" && "active"
                  } `}
                  onClick={() => setItemView("grid")}
                >
                  <IoGridSharp className="text-[rgba(0,0,0,0.7)]" />
                </Button>

                <span className="text-[14px] font-[500] pl-3 text-[rgba(0,0,0,0.7)]">
                  There are 27 products.
                </span>
              </div>

              <div className="col2 ml-auto flex items-center justify-end gap-3 pr-4">
                <span className="text-[14px] font-[500] pl-3 text-[rgba(0,0,0,0.7)]">
                  Sort By
                </span>

                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  className="!bg-white !text-[12px] !text-[#000] !capitalize !border-2 !border-[#000]"
                >
                  Sales, highest to lowest
                </Button>

                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem
                    onClick={handleClose}
                    className="!text-[13px] !text-[#000] !capitalize"
                  >
                    Sales, highest to lowest
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className="!text-[13px] !text-[#000] !capitalize"
                  >
                    Relevance
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className="!text-[13px] !text-[#000] !capitalize"
                  >
                    Name, A to Z
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className="!text-[13px] !text-[#000] !capitalize"
                  >
                    Name, Z to A
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className="!text-[13px] !text-[#000] !capitalize"
                  >
                    Price, low to high
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className="!text-[13px] !text-[#000] !capitalize"
                  >
                    Price, high to low
                  </MenuItem>
                </Menu>
              </div>
            </div>

            <div
              className={`grid ${
                itemView === "grid"
                  ? "grid-cols-4 md:grid-cols-4"
                  : "grid-cols-1 md:grid-cols-1"
              } gap-4`}
            >
              {itemView === "grid" ? (
                <>
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
                </>
              ) : (
                <>
                  <ProductItemListView
                    image1="https://demos.codezeel.com/prestashop/PRS21/PRS210502/35-large_default/brown-bear-printed-sweater.jpg"
                    image2="https://demos.codezeel.com/prestashop/PRS21/PRS210502/32-medium_default/brown-bear-printed-sweater.jpg"
                    category="Initech space"
                    title="Apple Smart Watch / Midnight Aluminum"
                    oldPrice="58.00"
                    price="51.04"
                    badge="-12%"
                    text=""
                  />
                  <ProductItemListView
                    image1="https://demos.codezeel.com/prestashop/PRS21/PRS210502/49-large_default/today-is-a-good-day-framed-poster.jpg"
                    image2="https://demos.codezeel.com/prestashop/PRS21/PRS210502/53-medium_default/today-is-a-good-day-framed-poster.jpg"
                    category="Pro Tech Gear"
                    title="Convenient Bags For Students And Adults Too"
                    oldPrice="100.00"
                    price="94.00"
                    badge="NEW"
                    text=""
                  />
                  <ProductItemListView
                    image1="https://demos.codezeel.com/prestashop/PRS21/PRS210502/70-large_default/mug-today-is-a-good-day.jpg"
                    image2="https://demos.codezeel.com/prestashop/PRS21/PRS210502/71-medium_default/mug-today-is-a-good-day.jpg"
                    category="Soylent Green"
                    title="Mens Cotton Casual Short Sleeve T-Shirts"
                    oldPrice="90.00"
                    price="86.00"
                    badge="NEW"
                    text=""
                  />
                  <ProductItemListView
                    image1="https://demos.codezeel.com/prestashop/PRS21/PRS210502/133-large_default/customizable-mug.jpg"
                    image2="https://demos.codezeel.com/prestashop/PRS21/PRS210502/130-medium_default/customizable-mug.jpg"
                    category="Soylent Green"
                    title="Plastic Bamboo Dustpan & Brush Black"
                    oldPrice="57.00"
                    price="52.44"
                    badge="-8%"
                    text=""
                  />
                  <ProductItemListView
                    image1="https://demos.codezeel.com/prestashop/PRS21/PRS210502/104-large_default/brown-bear-vector-graphics.jpg"
                    image2="https://demos.codezeel.com/prestashop/PRS21/PRS210502/105-medium_default/brown-bear-vector-graphics.jpg"
                    category="Looney Tunes"
                    title="Beautiful And Affordable Bags For Women"
                    oldPrice="92.00"
                    price="82.00"
                    badge="NEW"
                    text=""
                  />
                  <ProductItemListView
                    image1="https://demos.codezeel.com/prestashop/PRS21/PRS210502/120-large_default/brown-bear-notebook.jpg"
                    image2="https://demos.codezeel.com/prestashop/PRS21/PRS210502/119-medium_default/brown-bear-notebook.jpg"
                    category="The Simpsons"
                    title="Smart Speaker & Google Assistant, Light Grey"
                    oldPrice="60.00"
                    price="54.00"
                    badge="NEW"
                    text=""
                  />
                  <ProductItemListView
                    image1="https://demos.codezeel.com/prestashop/PRS21/PRS210502/103-large_default/pack-mug-framed-poster.jpg"
                    image2="https://demos.codezeel.com/prestashop/PRS21/PRS210502/97-medium_default/pack-mug-framed-poster.jpg"
                    category="Pro Tech Gear"
                    title="GENELEC Compact two-way Active Speaker"
                    oldPrice="58.00"
                    price="54.00"
                    badge="NEW"
                    text=""
                  />
                  <ProductItemListView
                    image1="https://demos.codezeel.com/prestashop/PRS21/PRS210502/91-large_default/mountain-fox-vector-graphics.jpg"
                    image2="https://demos.codezeel.com/prestashop/PRS21/PRS210502/93-medium_default/mountain-fox-vector-graphics.jpg"
                    category="Initech space"
                    title="Pendant Light Lamps for Home Decor"
                    oldPrice="82.00"
                    price="76.00"
                    badge="NEW"
                    text=""
                  />
                </>
              )}
            </div>

            <div className="flex items-center justify-center mt-10">
              <Pagination count={10} showFirstButton showLastButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductListing;
