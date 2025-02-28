import AccountSidebar from "../../components/AccountSidebar";
import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa6";
import Badge from "../../components/Badge";
import { useState } from "react";
import { FaAngleUp } from "react-icons/fa6";

const Orders = () => {
  const [isOpenOrderdProduct, setIsOpenOrderdProduct] = useState(null);

  const isShowOrderdProduct = (index) => {
    if (isOpenOrderdProduct === index) {
      setIsOpenOrderdProduct(null);
    } else {
      setIsOpenOrderdProduct(index);
    }
  };

  return (
    <section className="py-10 w-full">
      <div className="container flex gap-5">
        <div className="col1 w-[20%]">
          <AccountSidebar />
        </div>

        <div className="col2 w-[80%]">
          <div className="shadow-md rounded-md  bg-white">
            <div className="py-2 px-3 border-b border-[rgba(0,0,0,0.1)]">
              <h2>My Orders</h2>
              <p className="mt-0">
                There are <span className="font-bold text-primary">2</span>
                orders
              </p>

              <div className="relative overflow-x-auto mt-5">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-white dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        &nbsp;
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        Order Id
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        Payment Id
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        Phone Number
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        Address
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        Pincode
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        Total Amount
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        User Id
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        Order Status
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b dark:bg-white dark:border-gray-200">
                      <td className="px-6 py-4 font-[500]">
                        <Button
                          className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1]"
                          onClick={() => isShowOrderdProduct(0)}
                        >
                          {isOpenOrderdProduct === 0 ? (
                            <FaAngleUp className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                          ) : (
                            <FaAngleDown className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                          )}
                        </Button>
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        <span className="text-primary">
                          6751449914dab0b78a342b261
                        </span>
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        <span className="text-primary">pay_PTP0qEXFhrtpy8</span>
                      </td>
                      <td className="px-6 py-4 font-[500] whitespace-nowrap">
                        John Doe
                      </td>
                      <td className="px-6 py-4 font-[500]">09643990046 </td>
                      <td className="px-6 py-4 font-[500]">
                        <span className="block w-[400px]">
                          H No 222 Street No 6 Adarsh Mohalla Maujpur Delhi near
                          shivam medical ph. +91-9643990046
                        </span>
                      </td>
                      <td className="px-6 py-4 font-[500]">110053</td>
                      <td className="px-6 py-4 font-[500]">3800</td>
                      <td className="px-6 py-4 font-[500]">
                        john.doe@gmail.com
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        <span className="text-primary">
                          66e120733d4b2dc4a19335ab{" "}
                        </span>
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        <Badge status="pending" />
                      </td>
                      <td className="px-6 py-4 font-[500] whitespace-nowrap">
                        2024-12-04
                      </td>
                    </tr>

                    {isOpenOrderdProduct === 0 && (
                      <tr>
                        <td className="pl-20" colSpan="6">
                          <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-white dark:text-gray-400">
                                <tr>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 whitespace-nowrap"
                                  >
                                    Product Id
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 whitespace-nowrap"
                                  >
                                    Product Title
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 whitespace-nowrap"
                                  >
                                    Image
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 whitespace-nowrap"
                                  >
                                    Quantity
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 whitespace-nowrap"
                                  >
                                    Price
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 whitespace-nowrap"
                                  >
                                    SubTotal
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="bg-white border-b dark:bg-white dark:border-gray-200">
                                  <td className="px-6 py-4 font-[500]">
                                    <span className="text-gray-600">
                                      6751449914dab0b78a342b261
                                    </span>
                                  </td>
                                  <td className="px-6 py-4 font-[500]">
                                    A-Line Kurti With Sharara & Du...
                                  </td>
                                  <td className="px-6 py-4 font-[500] whitespace-nowrap">
                                    <img
                                      src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/71-medium_default/mug-today-is-a-good-day.jpg"
                                      alt=""
                                      className="w-[40px] h-[40px] object-cover rounded-md"
                                    />
                                  </td>
                                  <td className="px-6 py-4 font-[500]">2</td>
                                  <td className="px-6 py-4 font-[500]">1300</td>
                                  <td className="px-6 py-4 font-[500]">1300</td>
                                </tr>

                                <tr className="bg-white border-b dark:bg-white dark:border-gray-200">
                                  <td className="px-6 py-4 font-[500]">
                                    <span className="text-gray-600">
                                      6751449914dab0b78a342b261
                                    </span>
                                  </td>
                                  <td className="px-6 py-4 font-[500]">
                                    A-Line Kurti With Sharara & Du...
                                  </td>
                                  <td className="px-6 py-4 font-[500] whitespace-nowrap">
                                    <img
                                      src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/71-medium_default/mug-today-is-a-good-day.jpg"
                                      alt=""
                                      className="w-[40px] h-[40px] object-cover rounded-md"
                                    />
                                  </td>
                                  <td className="px-6 py-4 font-[500]">2</td>
                                  <td className="px-6 py-4 font-[500]">1300</td>
                                  <td className="px-6 py-4 font-[500]">1300</td>
                                </tr>

                                <tr>
                                  <td
                                    className="bg-[#f1f1f1]"
                                    colSpan="12"
                                  ></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Orders;
