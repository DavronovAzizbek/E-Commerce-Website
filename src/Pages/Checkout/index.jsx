import Button from "@mui/material/Button";
import { BsFillBagCheckFill } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../App";
import { FaPlus } from "react-icons/fa6";
import Radio from "@mui/material/Radio";
import { deleteData, postData } from "../../utils/api";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const VITE_APP_RAZORPAY_KEY_ID = import.meta.env.VITE_APP_RAZORPAY_KEY_ID;
const VITE_APP_RAZORPAY_KEY_SECRET = import.meta.env
  .VITE_APP_RAZORPAY_KEY_SECRET;

const VITE_APP_PAYPAL_CLIENT_ID = import.meta.env.VITE_APP_PAYPAL_CLIENT_ID;
const VITE_API_URL = import.meta.env.VITE_API_URL;

const Checkout = () => {
  const context = useContext(MyContext);
  const [userData, setUserData] = useState(null);
  const [isChecked, setIsChecked] = useState(0);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [totalAmount, setTotalAmount] = useState();

  const history = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    setUserData(context?.userData);
    setSelectedAddress(context?.userData?.address_details[0]?._id);
  }, [context?.userData, userData]);

  useEffect(() => {
    setTotalAmount(
      context.cartData?.length !== 0
        ? context.cartData
            ?.map((item) => parseInt(item.price) * item.quantity)
            .reduce((total, value) => total + value, 0)
            ?.toLocaleString("en-US", { style: "currency", currency: "INR" })
        : 0
    );

    // localStorage.setItem(
    //   "totalAmount",
    //   context.cartData?.length !== 0
    //     ? context.cartData
    //         ?.map((item) => parseInt(item.price) * item.quantity)
    //         .reduce((total, value) => total + value, 0)
    //         ?.toLocaleString("en-US", { style: "currency", currency: "INR" })
    //     : 0
    // );
  }, [context.cartData]);

  useEffect(() => {
    // Load the PayPal JavaScript SDK
    const script = document.createElement("script");
    script.src = `https://www.paypal.com/sdk/js?client-id=${VITE_APP_PAYPAL_CLIENT_ID}&disable-funding=card`;
    script.async = true;
    script.onload = () => {
      window.paypal
        .Button({
          createOrder: async () => {
            const resp = await fetch(
              "https://v6.exchangerate-api.com/v6/8f85eea95dae9336b9ea3ce9/latest/INR"
            );

            const respData = await resp.json();
            var convertedAmount = 0;

            if (respData.result === "success") {
              const usdToInrRate = respData.conversion_rates.USD;
              convertedAmount = (totalAmount * usdToInrRate).toFixed(2);
            }

            const headers = {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              "Content-Type": "application/json",
            };

            const data = {
              userId: context?.userData?._id,
              totalAmount: convertedAmount,
            };

            const response = await axios.get(
              VITE_API_URL +
                `/api/order/create-order-paypal?userId=${data?.userId}&totalAmount=${data?.totalAmount}`,
              { headers }
            );

            return response?.data?.id;
          },
          onApprove: async (data) => {
            onApprovePayment(data);
          },
          onError: (err) => {
            history("/order/failed");
            console.error("PayPal Checkout onError:", err);
          },
        })
        .render("#paypal-button-container");
    };
    document.body.appendChild(script);
  }, [context?.cartData, context?.userData, selectedAddress]);

  const onApprovePayment = async (data) => {
    const user = context?.userData;

    const info = {
      userId: user?._id,
      products: context?.cartData,
      payment_status: "COMPLETE",
      delivery_address: selectedAddress,
      totalAmount: totalAmount,
      date: new Date().toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };

    const headers = {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`, // Include your API key in the Authorization header
      "Content-Type": "application/json", // Adjust the content type as needed
    };

    const response = await axios
      .post(
        VITE_API_URL + "/api/order/capture-order-paypal",
        {
          ...info,
          paymentId: data.orderID,
        },
        { headers }
      )
      .then((res) => {
        context.alertBox("success", res?.data?.message);
        history("/order/success");
        deleteData(`/api/cart/emptyCart/${context?.userData?._id}`).then(
          (res) => {
            context?.getCartItems();
          }
        );
      });

    if (response.data.success) {
      context.alertBox("success", "Order completed and saved to database!");
    }
  };

  const editAddress = (id) => {
    context?.setOpenAddressPanel(true);
    context?.setAddressMode("edit");
    context?.setAddressId(id);
  };

  const handleChange = (e, index) => {
    if (e.target.checked) {
      setIsChecked(index);
      setSelectedAddress(e.target.value);
    }
  };

  const checkout = (e) => {
    e.preventDefault();

    var options = {
      key: VITE_APP_RAZORPAY_KEY_ID,
      key_secret: VITE_APP_RAZORPAY_KEY_SECRET,
      amount: parseInt(totalAmount * 100),
      currency: "INR",
      order_receipt: context?.userData?.name,
      name: "The Float",
      description: "For testing purpose",
      handler: function (response) {
        const paymentId = response.razorpay_payment_id;

        const user = context?.userData;

        const payLoad = {
          userId: user?._id,
          products: context?.cartData,
          paymentId: paymentId,
          payment_status: "Completed",
          delivery_address: selectedAddress,
          totalAmt: totalAmount,
          date: new Date().toLocaleString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          }),
        };

        postData(`/api/order/create`, payLoad).then((res) => {
          context.alertBox("success", res?.message);
          if (res?.error === false) {
            deleteData(`/api/cart/emptyCart/${user?._id}`).then(() => {
              context?.getCartItems();
            });
            history("/order/success");
          } else {
            history("/order/failed");
            context.alertBox("error", res?.message);
          }
        });
      },
      theme: {
        color: "#ff5252",
      },
    };

    var pay = new window.Razorpay(options);
    pay.open();
  };

  const cashOnDelivery = (e) => {
    const user = context?.userData;

    const payLoad = {
      userId: user?._id,
      products: context?.cartData,
      paymentId: "",
      payment_status: "Cash on Delivery",
      delivery_address: selectedAddress,
      totalAmt: totalAmount,
      date: new Date().toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };

    postData(`/api/order/create`, payLoad).then((res) => {
      context.alertBox("success", res?.message);

      if (res?.error === false) {
        deleteData(`/api/cart/emptyCart/${user?._id}`).then(() => {
          context?.getCartItems();
        });
      } else {
        context.alertBox("error", res?.message);
      }
      history("/order/success");
    });
  };

  return (
    <section className="py-10">
      <form onSubmit={checkout}>
        <div className="w-[70%] m-auto flex gap-5">
          <div className="leftCol w-[60%]">
            <div className="card bg-white shadow-md p-5 rounded-md w-full">
              <div className="flex items-center justify-between">
                <h2>Select Delivery Address</h2>
                <Button
                  variant="outlined"
                  onClick={() => {
                    context?.setOpenAddressPanel(true);
                    context?.setAddressMode("add");
                  }}
                >
                  <FaPlus />
                  Add New Address
                </Button>
              </div>

              <br />

              <div className="flex flex-col gap-4">
                {userData?.address_details?.length !== 0 ? (
                  userData?.address_details?.map((address, index) => {
                    return (
                      <label
                        className={`flex gap-3 p-4 border border-[rgba(0,0,0,0.1)] rounded-md relative ${
                          isChecked === index && "bg-[#fff2f2]"
                        }`}
                        key={index}
                      >
                        <div>
                          <Radio
                            size="small"
                            onChange={(e) => handleChange(e, index)}
                            checked={isChecked === index}
                            value={address?._id}
                          />
                        </div>
                        <div className="info">
                          <span className="inline-block text-[13px] font-[500] p-1 bg-[#f1f1f1] rounded-md">
                            {address?.addressType}
                          </span>
                          <h3>{userData?.name}</h3>
                          <p className="mt-0 mb-0">
                            {address?.address_line1 +
                              " " +
                              address?.city +
                              " " +
                              address?.country +
                              " " +
                              address?.state +
                              " " +
                              address?.landmark}
                          </p>
                          <p className="mb-0 font-[500]">+{userData?.mobile}</p>
                        </div>

                        <Button
                          variant="text"
                          className="!absolute top-[15px] right-[15px]"
                          size="small"
                          onClick={() => editAddress(address?._id)}
                        >
                          Edit
                        </Button>
                      </label>
                    );
                  })
                ) : (
                  <>
                    <div className="flex items-center mt-5 justify-between flex-col p-5">
                      <img src="/relocation.png" width="100" />
                      <h2 className="text-center">
                        No Addresses found in your account!
                      </h2>
                      <p className="mt-0">Add a delivery address.</p>
                      <Button className="btn-org">Add Address</Button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="rightCol w-[40%]">
            <div className="card shadow-md bg-white p-5 rounded-md">
              <h2 className="mb-4">Your Order</h2>

              <div className="flex items-center justify-between py-3 border-t border-b border-[rgba(0,0,0,0.1)]">
                <span className="text-[14px] font-[600]">Product</span>
                <span className="text-[14px] font-[600]">Subtotal</span>
              </div>

              <div className="mb-5 scroll max-h-[250px] overflow-y-scroll overflow-x-hidden pr-2">
                {context?.cartData?.length !== 0 &&
                  context?.cartData?.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="flex items-center justify-between py-2"
                      >
                        <div className="part1 flex items-center gap-3">
                          <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                            <img
                              src={item?.image}
                              alt=""
                              className="w-full transition-all group-hover:scale-105"
                            />
                          </div>

                          <div className="info">
                            <h4
                              className="text-[14px]"
                              title={item?.productTitle}
                            >
                              {item?.productTitle?.substr(0, 20) + "..."}
                            </h4>
                            <span className="text-[13px]">
                              Qty :{item?.quantity}
                            </span>
                          </div>
                        </div>

                        <span className="text-[14px] font-[500]">
                          {(item?.quantity * item?.price)?.toLocaleString(
                            "en-US",
                            { style: "currency", currency: "INR" }
                          )}
                        </span>
                      </div>
                    );
                  })}
              </div>

              <div className="flex items-center flex-col gap-3 mb-2">
                <Button
                  type="submit"
                  className="btn-org btn-lg w-full flex gap-2 items-center"
                >
                  <BsFillBagCheckFill className="text-[20px]" /> Checkout
                </Button>

                <div id="paypal-button-container"></div>

                <Button
                  type="button"
                  className="btn-dark btn-lg w-full flex gap-2 items-center"
                  onClick={cashOnDelivery}
                >
                  <BsFillBagCheckFill className="text-[20px]" />
                  Cash on Delivery
                </Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Checkout;
