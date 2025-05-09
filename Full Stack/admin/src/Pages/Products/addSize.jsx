import Button from "@mui/material/Button";
import { FaCloudUploadAlt } from "react-icons/fa";
import { AiOutlineEdit } from "react-icons/ai";
import { GoTrash } from "react-icons/go";
import { useContext, useState } from "react";
import { MyContext } from "../../App";
import { deleteData } from "../../utils/api";
import CircularProgress from "@mui/material/CircularProgress";

const AddSize = () => {
  const [name, setName] = useState();
  const [data] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const context = useContext(MyContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    if (name === "") {
      context.alertBox("error", "Please enter product Ram");
      return false;
    }
  };

  const deleteItem = (id) => {
    deleteData(`/api/product/productSize/${id}`).then(() => {
      context.alertBox("success", "Item deleted");
    });
  };

  return (
    <>
      <div className="flex items-center justify-between px-2 py-0 mt-3">
        <h2 className="text-[18px] font-[600]">Add Product Size</h2>
      </div>

      <div className="card my-4 pt-5 shadow-md sm:rounded-lg bg-white w-[65%]">
        <form className="form py-3 p-6" onSubmit={handleSubmit}>
          <div className="col mb-4">
            <h3 className="text-[14px] font-[500] mb-1 text-black">
              Product Size
            </h3>
            <input
              type="text"
              className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>

          <Button type="submit" className="btn-blue btn-lg w-full flex gap-2">
            {isLoading === true ? (
              <CircularProgress color="inherit" />
            ) : (
              <>
                <FaCloudUploadAlt className="text-[25px] text-white" />
                Publish and View
              </>
            )}
          </Button>
        </form>
      </div>

      {data?.length !== 0 && (
        <div className="card my-4 pt-5 shadow-md sm:rounded-lg bg-white w-[65%]">
          <div className="relative overflow-x-auto mt-5 pb-5">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-white dark:text-gray-400">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 whitespace-nowrap"
                    width="60%"
                  >
                    Product Size
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 whitespace-nowrap"
                    width="30%"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {data?.map((item, index) => {
                  return (
                    <tr className="border-b border-gray-200 dark:border-gray-300">
                      <td className="px-6 py-2">
                        <span className="font-[600]">{item?.name}</span>
                      </td>

                      <td className="px-6 py-2">
                        <div className="flex items-center gap-1">
                          <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1] !min-w-[35px]">
                            <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                          </Button>

                          <Button
                            className="!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1] !min-w-[35px]"
                            onClick={() => deleteItem(item?._id)}
                          >
                            <GoTrash className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default AddSize;
