import { useState } from "react";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { GoTriangleDown } from "react-icons/go";
import Rating from "@mui/material/Rating";
import { MyContext } from "../../App";
import { useContext } from "react";
import { deleteData, editData } from "../../utils/api";

const CartItems = (props) => {
  const [sizeanchorEl, setSizeAnchorEl] = useState(null);
  const [selectedSize, setCartItems] = useState(props.size);
  const openSize = Boolean(sizeanchorEl);

  const [qtyanchorEl, setQtyAnchorEl] = useState(null);
  const [selectedQty, setSelectedQty] = useState(props.qty);
  const openQty = Boolean(qtyanchorEl);

  const context = useContext(MyContext);

  const handleClickSize = (event) => {
    setSizeAnchorEl(event.currentTarget);
  };

  const handleCloseSize = (value) => {
    setSizeAnchorEl(null);
    if (value !== null) {
      setCartItems(value);
    }
  };

  const handleClickQty = (event) => {
    setQtyAnchorEl(event.currentTarget);
  };

  const handleCloseQty = (value) => {
    setQtyAnchorEl(null);
    if (value !== null) {
      setSelectedQty(value);

      const cartObj = {
        _id: props?.item?._id,
        qty: value,
        subTotal: props?.item?.price * value,
      };

      editData("/api/cart/update-qty", cartObj).then((res) => {
        if (res?.data?.error === false) {
          context.alertBox("success", res?.data?.message);
          context?.getCartItems();
        }
      });
    }
  };

  const removeItem = (id) => {
    deleteData(`/api/cart/delete-cart-item/${id}`).then((res) => {
      context.alertBox("success", "Product removed from cart");
      context?.getCartItems();
    });
  };

  return (
    <div className="cartItem w-full p-3 flex items-center gap-4 pb-5 border-b border-[rgba(0,0,0,0.1)]">
      <div className="img w-[15%] rounded-md overflow-hidden">
        <Link to="/product/0987" className="group">
          <img
            src={props?.item?.image}
            className="w-full group-hover:scale-105 transition-all"
          />
        </Link>
      </div>

      <div className="info w-[85%] relative">
        <IoCloseSharp
          className="cursor-pointer absolute top-[0px] right-[0px] text-[22px] link transition-all"
          onClick={() => removeItem(props?.item?._id)}
        />
        <span className="text-[13px]">{props?.item?.brand}</span>
        <h3 className="text-[15px]">
          <Link className="link">{props?.item?.productTitle}</Link>
        </h3>

        <Rating
          name="size-small"
          value={props?.item?.rating}
          size="small"
          readOnly
        />

        <div className="flex items-center gap-4 mt-2">
          <div className="relative">
            <span
              className="flex items-center justify-center bg-[#f1f1f1] text-[11px] font-[600] py-1 px-2 rounded-md cursor-pointer"
              onClick={handleClickSize}
            >
              Size: {selectedSize} <GoTriangleDown />
            </span>
            <Menu
              id="size-menu"
              anchorEl={sizeanchorEl}
              open={openSize}
              onClose={() => handleCloseSize(null)}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={() => handleCloseSize("S")}>S</MenuItem>
              <MenuItem onClick={() => handleCloseSize("M")}>M</MenuItem>
              <MenuItem onClick={() => handleCloseSize("L")}>L</MenuItem>
              <MenuItem onClick={() => handleCloseSize("XL")}>XL</MenuItem>
              <MenuItem onClick={() => handleCloseSize("XXL")}>XXL</MenuItem>
            </Menu>
          </div>

          <div className="relative">
            <span
              className="flex items-center justify-center bg-[#f1f1f1] text-[11px] font-[600] py-1 px-2 rounded-md cursor-pointer"
              onClick={handleClickQty}
            >
              Qty: {selectedQty} <GoTriangleDown />
            </span>
            <Menu
              id="size-menu"
              anchorEl={qtyanchorEl}
              open={openQty}
              onClose={() => handleCloseQty(null)}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {Array.from({ length: 15 }).map((_, index) => (
                <MenuItem key={index} onClick={() => handleCloseQty(index + 1)}>
                  {index + 1}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-2">
          <span className="price text-[14px] font-[600]">
            &#x20b9; {props?.item?.price}
          </span>

          <span className="oldPrice line-through text-gray-500 text-[14px] font-[500]">
            &#x20b9; {props?.item?.oldPrice}
          </span>

          <span className="price text-primary text-[14px] font-[600]">
            {props?.item?.discount}% OFF
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
