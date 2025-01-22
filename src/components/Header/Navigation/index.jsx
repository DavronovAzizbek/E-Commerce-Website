import React, { useState } from "react";
import Button from "@mui/material/Button";
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { GoRocket } from "react-icons/go";
import CategoryPanel from "./CategoryPanel";

const Navigation = () => {
  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

  const openCategoryPanel = () => {
    setIsOpenCatPanel(true);
  };

  return (
    <>
      <nav className="py-2">
        <div className="container flex items-center justify-end gap-8">
          <div className="col_1 w-[25%]">
            <Button
              className="!text-black gap-2 w-full"
              onClick={openCategoryPanel}
            >
              <RiMenu2Fill className="text-[18px]" />
              Kategoriyalar boyicha xarid qiling
              <LiaAngleDownSolid className="text-[13px] ml-auto font-bold" />
            </Button>
          </div>

          <div className="col_2 w-[60%]">
            <ul className="flex items-center gap-3">
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button
                    className="!link transition !font-[500] !text-[rgba(0,0,0,0.8)]
                hover:!text-[#ff5252]"
                  >
                    Uy
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button
                    className="!link transition !font-[500] !text-[rgba(0,0,0,0.8)]
                hover:!text-[#ff5252]"
                  >
                    Fashion
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button
                    className="!link transition !font-[500] !text-[rgba(0,0,0,0.8)]
                hover:!text-[#ff5252]"
                  >
                    Elektronika
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button
                    className="!link transition !font-[500] !text-[rgba(0,0,0,0.8)]
                hover:!text-[#ff5252]"
                  >
                    Sumkalar
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button
                    className="!link transition !font-[500] !text-[rgba(0,0,0,0.8)]
                hover:!text-[#ff5252]"
                  >
                    Oyoq Kiyimlar
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button
                    className="!link transition !font-[500] !text-[rgba(0,0,0,0.8)]
                hover:!text-[#ff5252]"
                  >
                    Oziq-ovqat
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button
                    className="!link transition !font-[500] !text-[rgba(0,0,0,0.8)]
                hover:!text-[#ff5252]"
                  >
                    Gozallik
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button
                    className="!link transition !font-[500] !text-[rgba(0,0,0,0.8)]
                hover:!text-[#ff5252]"
                  >
                    Salomatlik
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button
                    className="!link transition !font-[500] !text-[rgba(0,0,0,0.8)]
                hover:!text-[#ff5252]"
                  >
                    Zargarlik buyumlari
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

      {/*Category panel component */}
      <CategoryPanel
        isOpenCatPanel={isOpenCatPanel}
        setIsOpenCatPanel={setIsOpenCatPanel}
      />
    </>
  );
};

export default Navigation;
