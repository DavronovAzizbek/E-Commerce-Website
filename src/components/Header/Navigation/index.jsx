import React from "react";
import Button from "@mui/material/Button";
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="py-2">
      <div className="container flex items-center justify-end gap-8">
        <div className="col_1 w-[25%]">
          <Button className="!text-black gap-2 w-full">
            <RiMenu2Fill className="text-[18px]" />
            Kategoriyalar boyicha xarid qiling
            <LiaAngleDownSolid className="text-[13px] ml-auto font-bold" />
          </Button>
        </div>

        <div className="col_2 w-[65%]">
          <ul className="flex items-center gap-5">
            <li className="list-none">
              <Link to="/" className="link transition text-[14px] font-[500]">
                Uy
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className="link transition text-[14px] font-[500]">
                Fashion
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className="link transition text-[14px] font-[500]">
                Elektronika
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className="link transition text-[14px] font-[500]">
                Sumkalar
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className="link transition text-[14px] font-[500]">
                Oyoq kiyimlari
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className="link transition text-[14px] font-[500]">
                Oziq-ovqat
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className="link transition text-[14px] font-[500]">
                Gozallik
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className="link transition text-[14px] font-[500]">
                Salomatlik
              </Link>
            </li>
            <li className="list-none">
              <Link to="/" className="link transition text-[14px] font-[500]">
                Zargarlik buyumlari
              </Link>
            </li>
          </ul>
        </div>

        <div className="col_3 w-[15%]">
          <p>Bepul xalqaro yetkazib berish</p>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
