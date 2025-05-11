import { useContext, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { GoRocket } from "react-icons/go";
import CategoryPanel from "./CategoryPanel";
import "../Navigation/style.css";
import { MyContext } from "../../../App";

const Navigation = () => {
  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);
  const [catData, setCatData] = useState([]);

  const context = useContext(MyContext);

  useEffect(() => {
    setCatData(context?.catData);
  }, [context?.catData]);

  const openCategoryPanel = () => {
    setIsOpenCatPanel(true);
  };

  return (
    <>
      <nav>
        <div className="container flex items-center justify-end gap-8">
          <div className="col_1 w-[25%]">
            <Button
              className="!text-black gap-2 w-full"
              onClick={openCategoryPanel}
            >
              <RiMenu2Fill className="text-[18px]" />
              Shop by category
              <LiaAngleDownSolid className="text-[13px] ml-auto font-bold" />
            </Button>
          </div>

          <div className="col_2 w-[60%]">
            <ul className="flex items-center gap-3 nav">
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button
                    className="!link transition !font-[500] !text-[rgba(0,0,0,0.8)]
                hover:!text-[#ff5252] !py-4"
                  >
                    Uy
                  </Button>
                </Link>
              </li>

              {/* Dynamic categories from map */}
              {catData?.length !== 0 &&
                catData?.map((cat, index) => (
                  <li className="list-none relative" key={index}>
                    <Link
                      to="/productListing"
                      className="link transition text-[14px] font-[500]"
                    >
                      <Button
                        className="!link transition !font-[500] !text-[rgba(0,0,0,0.8)]
                    hover:!text-[#ff5252] !py-4"
                      >
                        {cat?.name}
                      </Button>
                    </Link>

                    {cat?.children?.length !== 0 && (
                      <div className="submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                        <ul>
                          {cat?.children?.map((subCat, index_) => (
                            <li
                              className="list-none w-full relative"
                              key={index_}
                            >
                              <Link to="/productListing" className="w-full">
                                <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                  {subCat?.name}
                                </Button>

                                {subCat?.children?.length !== 0 && (
                                  <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                                    <ul>
                                      {subCat?.children?.map(
                                        (thirdLevelCat, index__) => {
                                          return (
                                            <li
                                              className="list-none w-full"
                                              key={index__}
                                            >
                                              <Link
                                                to="/productListing"
                                                className="w-full"
                                              >
                                                <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                  {thirdLevelCat?.name}
                                                </Button>
                                              </Link>
                                            </li>
                                          );
                                        }
                                      )}
                                    </ul>
                                  </div>
                                )}
                              </Link>
                            </li>
                          ))}

                          {/* Static subcategories moved outside the map */}
                          <li className="list-none w-full">
                            <Link to="/" className="w-full">
                              <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                Women
                              </Button>
                            </Link>
                          </li>
                          <li className="list-none w-full">
                            <Link to="/" className="w-full">
                              <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                Kids
                              </Button>
                            </Link>
                          </li>
                          <li className="list-none w-full">
                            <Link to="/" className="w-full">
                              <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                Girls
                              </Button>
                            </Link>
                          </li>
                          <li className="list-none w-full">
                            <Link to="/" className="w-full">
                              <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                Boys
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </li>
                ))}

              {/* Static categories */}
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button
                    className="!link transition !font-[500] !text-[rgba(0,0,0,0.8)]
                hover:!text-[#ff5252] !py-4"
                  >
                    Elektronika
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button
                    className="!link transition !font-[500] !text-[rgba(0,0,0,0.8)]
                hover:!text-[#ff5252] !py-4"
                  >
                    Sumkalar
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button
                    className="!link transition !font-[500] !text-[rgba(0,0,0,0.8)]
                hover:!text-[#ff5252] !py-4"
                  >
                    Footwear
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button
                    className="!link transition !font-[500] !text-[rgba(0,0,0,0.8)]
                hover:!text-[#ff5252] !py-4"
                  >
                    Groceries
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button
                    className="!link transition !font-[500] !text-[rgba(0,0,0,0.8)]
                hover:!text-[#ff5252] !py-4"
                  >
                    Gozallik
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button
                    className="!link transition !font-[500] !text-[rgba(0,0,0,0.8)]
                hover:!text-[#ff5252] !py-4"
                  >
                    Salomatlik
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button
                    className="!link transition !font-[500] !text-[rgba(0,0,0,0.8)]
                hover:!text-[#ff5252] !py-4"
                  >
                    Jewelry
                  </Button>
                </Link>
              </li>
            </ul>
          </div>

          <div className="col_3 w-[20%]">
            <p className="text-[14px] font-[500] flex items-center gap-3 mb-0 mt-0">
              <GoRocket className="text-[18px]" />
              Bepul xalqaro yetkazib berish
            </p>
          </div>
        </div>
      </nav>

      {catData?.length !== 0 && (
        <CategoryPanel
          isOpenCatPanel={isOpenCatPanel}
          setIsOpenCatPanel={setIsOpenCatPanel}
          data={catData}
        />
      )}
    </>
  );
};

export default Navigation;
