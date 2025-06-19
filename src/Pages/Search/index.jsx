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

const SearchPage = () => {
  const [itemView, setItemView] = useState("grid");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedSortVal, setSelectedSortVal] = useState("Name, A to Z");

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSortBy = (name, order, products, value) => {
    setSelectedSortVal(value);
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
          <div className="sidebarWrapper w-[20%] bg-white">
            <Sidebar
              productsData={productsData}
              setProductsData={setProductsData}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              page={page}
              setTotalPages={setTotalPages}
            />
          </div>

          <div className="rightContent w-[80%] py-3">
            <div className="bg-[#f1f1f1] p-2 w-full mb-4 rounded-md flex items-center justify-between sticky top-[130px] z-[99]">
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
                  There are
                  {productsData?.products?.length !== 0
                    ? productsData?.products?.length
                    : 0}{" "}
                  products.
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
                  {selectedSortVal}
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
                    onClick={() =>
                      handleSortBy("name", "asc", productsData, "Name, A to Z")
                    }
                    className="!text-[13px] !text-[#000] !capitalize"
                  >
                    Name, A to Z
                  </MenuItem>

                  <MenuItem
                    onClick={() =>
                      handleSortBy("name", "desc", productsData, "Name, Z to A")
                    }
                    className="!text-[13px] !text-[#000] !capitalize"
                  >
                    Name, Z to A
                  </MenuItem>

                  <MenuItem
                    onClick={() =>
                      handleSortBy(
                        "price",
                        "asc",
                        productsData,
                        "Price, low to high"
                      )
                    }
                    className="!text-[13px] !text-[#000] !capitalize"
                  >
                    Price, low to high
                  </MenuItem>

                  <MenuItem
                    onClick={() =>
                      handleSortBy(
                        "price",
                        "desc",
                        productsData,
                        "Price, high to low"
                      )
                    }
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
                  ? "grid-cols-5 md:grid-cols-5"
                  : "grid-cols-1 md:grid-cols-1"
              } gap-4`}
            >
              {itemView === "grid" ? (
                <>
                  {isLoading === true
                    ? { itemView }
                    : productsData?.products?.length !== 0 &&
                      productsData?.products?.map((item, index) => {
                        return <ProductItem key={index} item={item} />;
                      })}
                </>
              ) : (
                <>
                  {isLoading === true
                    ? { itemView }
                    : productsData?.products?.length !== 0 &&
                      productsData?.products?.map((item, index) => {
                        return <ProductItemListView key={index} item={item} />;
                      })}
                </>
              )}
            </div>

            {totalPages > 1 && (
              <div className="flex items-center justify-center mt-10">
                <Pagination
                  showFirstButton
                  showLastButton
                  count={totalPages}
                  page={page}
                  onChange={(e, value) => setPage(value)}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchPage;
