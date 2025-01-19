import React from "react";
import "../Search/style.css";

const Search = () => {
  return (
    <div className="searchBox w-[100%] h-[50px] bg-[#e5e5e5] rounded-[5px] mt-[10px] relative p-2">
      <input
        type="text"
        placeholder="Mahsulotlarni qidirish..."
        className="w-full h-[35px] focus:outline-none bg-inherit p-2 text-[15px]"
      />
    </div>
  );
};

export default Search;
