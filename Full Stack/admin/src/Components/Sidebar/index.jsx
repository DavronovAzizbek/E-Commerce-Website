import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { RxDashboard } from "react-icons/rx";
import { FaRegImage } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { RiProductHuntLine } from "react-icons/ri";
import { TbCategory } from "react-icons/tb";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Collapse } from "react-collapse";
import { useContext, useState } from "react";
import { MyContext } from "../../App";

const Sidebar = () => {
  const [submenuIndex, setSubmenuIndex] = useState(null);
  const isOpenSubMenu = (index) => {
    if (submenuIndex === index) {
      setSubmenuIndex(null);
    } else {
      setSubmenuIndex(index);
    }
  };

  const context = useContext(MyContext);

  return (
    <>
      <div
        className={`sidebar fixed top-0 left-0 z-[50] bg-[#fff]  h-full border-r border-[rgba(0,0,0,0.1)] py-2 px-4 w-[${
          context.isSidebarOpen === true ? "18%" : "0px"
        }]`}
      >
        <div className="py-1 w-full mt-[-10px]">
          <Link to="/">
            <img
              src="https://1000logos.net/wp-content/uploads/2023/11/Flow-Logo.jpg"
              alt=""
              className="w-[120px]"
            />
          </Link>
        </div>

        <ul className="mt-4">
          <li>
            <Link to="/">
              <Button className="w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]">
                <RxDashboard className="text-[18px]" /> <span>Dashboard</span>
              </Button>
            </Link>
          </li>

          <li>
            <Button
              className="w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]"
              onClick={() => isOpenSubMenu(1)}
            >
              <FaRegImage className="text-[18px]" /> <span>Home Slides</span>
              <span className="ml-auto  w-[30px] h-[30px] flex items-center justify-center">
                <FaAngleDown
                  className={`transition-all ${
                    submenuIndex === 1 ? "rotate-180" : ""
                  }`}
                />
              </span>
            </Button>

            <Collapse isOpened={submenuIndex === 1 ? true : false}>
              <ul className="w-full">
                <li className="w-full">
                  <Button className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3">
                    {" "}
                    <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                    Home Banners List
                  </Button>
                </li>
                <li className="w-full">
                  <Button className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3">
                    {" "}
                    <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                    Add Home Banner Slide
                  </Button>
                </li>
              </ul>
            </Collapse>
          </li>

          <li>
            <Link to="/users">
              <Button className="w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]">
                <FiUsers className="text-[18px]" /> <span>Users</span>
              </Button>
            </Link>
          </li>

          <li>
            <Button
              className="w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]"
              onClick={() => isOpenSubMenu(3)}
            >
              <RiProductHuntLine className="text-[18px]" />{" "}
              <span>Products</span>
              <span className="ml-auto  w-[30px] h-[30px] flex items-center justify-center">
                <FaAngleDown
                  className={`transition-all ${
                    submenuIndex === 3 ? "rotate-180" : ""
                  }`}
                />
              </span>
            </Button>

            <Collapse isOpened={submenuIndex === 3 ? true : false}>
              <ul className="w-full">
                <li className="w-full">
                  <Link to="/products">
                    <Button className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3">
                      {" "}
                      <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                      Product List
                    </Button>
                  </Link>
                </li>
                <li className="w-full">
                  <Button
                    className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3"
                    onClick={() =>
                      context.setIsOpenFullScreenPanel({
                        open: true,
                        model: "Add Product",
                      })
                    }
                  >
                    {" "}
                    <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                    Product Upload
                  </Button>
                </li>

                <li className="w-full">
                  <Link to="/product/addRams">
                    <Button className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3">
                      <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                      Add Product Rams
                    </Button>
                  </Link>
                </li>

                <li className="w-full">
                  <Link to="/product/addWeight">
                    <Button className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3">
                      <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                      Add Product Weight
                    </Button>
                  </Link>
                </li>

                <li className="w-full">
                  <Link to="/product/addSize">
                    <Button className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3">
                      <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                      Add Product Size
                    </Button>
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li>

          <li>
            <Button
              className="w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]"
              onClick={() => isOpenSubMenu(4)}
            >
              <TbCategory className="text-[18px]" /> <span>Category</span>
              <span className="ml-auto  w-[30px] h-[30px] flex items-center justify-center">
                <FaAngleDown
                  className={`transition-all ${
                    submenuIndex === 4 ? "rotate-180" : ""
                  }`}
                />
              </span>
            </Button>

            <Collapse isOpened={submenuIndex === 4 ? true : false}>
              <ul className="w-full">
                <li className="w-full">
                  <Link to="/category/list">
                    <Button className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3">
                      {" "}
                      <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                      Category List
                    </Button>
                  </Link>
                </li>
                <li className="w-full">
                  <Button
                    className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3"
                    onClick={() =>
                      context.setIsOpenFullScreenPanel({
                        open: true,
                        model: "Add New Category",
                      })
                    }
                  >
                    {" "}
                    <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                    Add a Category
                  </Button>
                </li>
                <li className="w-full">
                  <Link to="/subCategory/list">
                    <Button className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3">
                      {" "}
                      <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                      Sub Category List
                    </Button>
                  </Link>
                </li>
                <li className="w-full">
                  <Button
                    className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3"
                    onClick={() =>
                      context.setIsOpenFullScreenPanel({
                        open: true,
                        model: "Add New Sub Category",
                      })
                    }
                  >
                    {" "}
                    <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                    Add a Sub Category
                  </Button>
                </li>
              </ul>
            </Collapse>
          </li>

          <li>
            <Link to="/orders">
              <Button className="w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]">
                <IoBagCheckOutline className="text-[20px]" />{" "}
                <span>Orders</span>
              </Button>
            </Link>
          </li>

          <li>
            <Button
              className="w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]"
              onClick={() => isOpenSubMenu(5)}
            >
              <RiProductHuntLine className="text-[18px]" /> <span>Banners</span>
              <span className="ml-auto  w-[30px] h-[30px] flex items-center justify-center">
                <FaAngleDown
                  className={`transition-all ${
                    submenuIndex === 5 ? "rotate-180" : ""
                  }`}
                />
              </span>
            </Button>

            <Collapse isOpened={submenuIndex === 5 ? true : false}>
              <ul className="w-full">
                <li className="w-full">
                  <Link to="/bannerV1List">
                    <Button className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3">
                      {" "}
                      <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                      Banner V1 List
                    </Button>
                  </Link>
                </li>
                <li className="w-full">
                  <Button
                    className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3"
                    onClick={() =>
                      context.setIsOpenFullScreenPanel({
                        open: true,
                        model: "Add BannerV1",
                      })
                    }
                  >
                    {" "}
                    <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                    Add Banner V1
                  </Button>
                </li>
              </ul>
            </Collapse>
          </li>

          <li>
            <Button className="w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]">
              <IoMdLogOut className="text-[20px]" /> <span>Logout</span>
            </Button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
