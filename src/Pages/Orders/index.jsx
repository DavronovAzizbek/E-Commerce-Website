import AccountSidebar from "../../components/AccountSidebar";
import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa6";

const Orders = () => {
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
                        <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1]">
                          <FaAngleDown className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                        </Button>
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
                      <td className="px-6 py-4 font-[500]">&nbsp;</td>
                      <td className="px-6 py-4 font-[500]">
                        <span className="text-primary">
                          6751449914dab0b78a342b261
                        </span>
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        <span className="text-primary">pay_PTP0qEXFhrtpy8</span>
                      </td>
                      <td className="px-6 py-4 font-[500] whitespace-nowrap">
                        RINKU VERMA
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
                      <td className="px-6 py-4 font-[500]">Pending</td>
                      <td className="px-6 py-4 font-[500] whitespace-nowrap">
                        2024-12-04
                      </td>
                    </tr>
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
