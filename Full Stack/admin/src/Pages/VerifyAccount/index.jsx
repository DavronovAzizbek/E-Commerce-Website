import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { CgLogIn } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa6";
import { NavLink } from "react-router";
import OtpBox from "../../Components/OtpBox/index";
import { useState } from "react";

const VerifyAccount = () => {
  const [otp, setOtp] = useState("");
  const handleOtpChange = (value) => {
    setOtp(value);
  };

  return (
    <section className="bg-white w-full h-[100vh]">
      <header className="w-full fixed top-0 left-0  px-4 py-3 flex items-center justify-between z-50">
        <Link to="/">
          <img
            src="https://1000logos.net/wp-content/uploads/2023/11/Flow-Logo.jpg"
            alt=""
            className="w-[120px]"
          />
        </Link>

        <div className="flex items-center gap-0">
          <NavLink to="/login" exact={true} activeClassName="isActive">
            <Button className="!rounded-full !text-[rgba(0,0,0,0.8)] !px-5 flex gap-1">
              <CgLogIn className="text-[18px]" /> Login
            </Button>
          </NavLink>

          <NavLink to="/sign-up" exact={true} activeClassName="isActive">
            <Button className="!rounded-full !text-[rgba(0,0,0,0.8)] !px-5 flex gap-1">
              <FaRegUser className="text-[15px]" /> Sign Up
            </Button>
          </NavLink>
        </div>
      </header>
      <img
        src="/pattern.webp"
        alt=""
        className="w-full fixed top-0 left-0 opacity-5"
      />

      <div className="loginBox card w-[600px] h-[auto] pb-20 mx-auto pt-20 relative z-50">
        <div className="text-center">
          <img src="/verify.png" alt="" className="w-[100px] m-auto" />
        </div>

        <h1 className="text-center text-[35px] font-[800] mt-4">
          Welcome Back! <br /> Please Verify your Email
        </h1>

        <br />
        <p className="text-center text-[15px]">
          OTP send to &nbsp;
          <span className="text-primary font-bold">john21@gmail.com</span>
        </p>

        <br />

        <div className="text-center flex items-center justify-center flex-col">
          <OtpBox length={6} onChange={handleOtpChange} />
        </div>

        <br />

        <div className="w-[300px] m-auto">
          <Button className="btn-blue w-full">Verify OTP</Button>
        </div>
      </div>
    </section>
  );
};

export default VerifyAccount;
