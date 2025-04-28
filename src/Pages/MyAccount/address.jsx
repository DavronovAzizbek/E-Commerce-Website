import { useContext, useEffect, useState } from "react";
import AccountSidebar from "../../components/AccountSidebar";
import Radio from "@mui/material/Radio";
import { MyContext } from "../../App";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { deleteData, fetchDataFromApi, postData } from "../../utils/api";
import { FaRegTrashAlt } from "react-icons/fa";

const label = { inputProps: { "aria-label": "Radio demo" } };

const Address = () => {
  const context = useContext(MyContext);
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState(false);
  const [isOpenModel, setisOpenModel] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [address, setAddress] = useState([]);

  useEffect(() => {
    if (context?.userData?._id !== undefined) {
      setFormsFields((prevState) => ({
        ...prevState,
        userId: context?.userData?._id,
      }));
    }
  }, [context?.userData]);

  useEffect(() => {
    if (context?.userData?._id !== "" && context?.userData?._id !== undefined) {
      fetchDataFromApi(
        `/api/address/get?userId=${context?.userData?._id}`
      ).then((res) => {
        setAddress(res.data);
      });
    }
  }, [context?.userData]);

  const handleClose = () => {
    setisOpenModel(false);
  };

  const handleClickOpen = () => setOpen(true);

  const [formFields, setFormsFields] = useState({
    address_line1: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    mobile: "",
    status: "",
    userId: "",
    selected: false,
  });

  const [selectedValue, setSelectedValue] = useState(
    "H No 222 Street No 6 Adarsh Mohalla"
  );

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
    setFormsFields((prevState) => ({
      ...prevState,
      status: event.target.value,
    }));
  };

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormsFields(() => {
      return {
        ...formFields,
        [name]: value,
      };
    });
  };

  const removeAddress = (id) => {
    deleteData(`/api/address/${id}`).then((res) => {
      fetchDataFromApi(
        `/api/address/get?userId=${context?.userData?._id}`
      ).then((res) => {
        setAddress(res.data);
      });
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    if (formFields.address_line1 === "") {
      context.alertBox("error", "Please enter Address Line 1");
      return false;
    }

    if (formFields.city === "") {
      context.alertBox("error", "Please enter Your city name");
      return false;
    }

    if (formFields.state === "") {
      context.alertBox("error", "Please enter your state");
      return false;
    }

    if (formFields.pincode === "") {
      context.alertBox("error", "Please enter your pincode");
      return false;
    }

    if (formFields.country === "") {
      context.alertBox("error", "Please enter your country");
      return false;
    }

    if (phone === "") {
      context.alertBox("error", "Please enter your 10 digit mobile number");
      return false;
    }

    postData(`/api/address/add`, formFields, { withCredentials: true }).then(
      (res) => {
        if (res?.error !== true) {
          setIsLoading(false);
          context.alertBox("success", res?.message);

          setisOpenModel(false);

          fetchDataFromApi(
            `/api/address/get?userId=${context?.userData?._id}`
          ).then((res) => {
            setAddress(res.data);
          });
        } else {
          context.alertBox("error", res?.message);
          setIsLoading(false);
        }
      }
    );
  };

  return (
    <>
      <section className="py-10 w-full">
        <div className="container flex gap-5">
          <div className="col1 w-[20%]">
            <AccountSidebar />
          </div>

          <div className="col2 w-[50%]">
            <div className="card bg-white p-5 shadow-md rounded-md mb-5">
              <div className="flex items-center pb-3">
                <h2 className="pb-0">Address</h2>
              </div>
              <hr />

              <div
                className="flex items-center justify-center p-5 rounded-md border border-dashed border-[rgba(0,0,0,0.2)] bg-[#f1faff] hover:bg-[#e7f3f9] cursor-pointer"
                onClick={() => setisOpenModel(true)}
              >
                <span className="text-[14px] font-[500]">Add Address</span>
              </div>

              <div className="flex flex-col gap-2 mt-4">
                {address?.length > 0 &&
                  address?.map((address, index) => {
                    return (
                      <>
                        <div className="group relative border border-dashed border-[rgba(0,0,0,0.2)] addressBox w-full flex items-center justify-center bg-[#f1f1f1] p-3 rounded-md cursor-pointer">
                          <label className="mr-auto">
                            <Radio
                              {...label}
                              name="address"
                              checked={selectedValue === address?._id}
                              value={address?._id}
                              onChange={handleChange}
                            />

                            <span className="text-[12px]">
                              {address?.address_line1 +
                                " " +
                                address?.city +
                                " " +
                                address?.country +
                                " " +
                                address?.state +
                                " " +
                                address?.pincode}
                            </span>
                          </label>

                          <span
                            onClick={() => removeAddress(address?._id)}
                            className="hidden group-hover:flex items-center justify-center w-[30px] h-[30px] rounded-full bg-gray-500 z-50 text-white ml-auto"
                          >
                            <FaRegTrashAlt />
                          </span>
                        </div>
                      </>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={isOpenModel}>
        <DialogTitle>Add Address</DialogTitle>

        <form className="p-8 py-3 pb-8" onSubmit={handleSubmit}>
          <div className="flex items-center gap-5  pb-5">
            <div className="col w-[100%]">
              <TextField
                className="w-full"
                label="Address Line 1"
                variant="outlined"
                size="small"
                name="address_line1"
                onChange={onChangeInput}
                value={formFields.address_line1}
              />
            </div>
          </div>

          <div className="flex items-center gap-5  pb-5">
            <div className="col w-[50%]">
              <TextField
                className="w-full"
                label="City"
                variant="outlined"
                size="small"
                name="city"
                onChange={onChangeInput}
                value={formFields.city}
              />
            </div>

            <div className="col w-[50%]">
              <TextField
                className="w-full"
                label="State"
                variant="outlined"
                size="small"
                name="state"
                onChange={onChangeInput}
                value={formFields.state}
              />
            </div>
          </div>

          <div className="flex items-center gap-5  pb-5">
            <div className="col w-[50%]">
              <TextField
                className="w-full"
                label="Pincode"
                variant="outlined"
                size="small"
                name="pincode"
                onChange={onChangeInput}
                value={formFields.pincode}
              />
            </div>

            <div className="col w-[50%]">
              <TextField
                className="w-full"
                label="Country"
                variant="outlined"
                size="small"
                name="country"
                onChange={onChangeInput}
                value={formFields.country}
              />
            </div>
          </div>

          <div className="flex items-center gap-5  pb-5">
            <div className="col w-[50%]">
              <PhoneInput
                defaultCountry="in"
                value={phone}
                onChange={(phone) => {
                  setPhone(phone);
                  setFormsFields((prevState) => ({
                    ...prevState,
                    mobile: phone,
                  }));
                }}
              />
            </div>

            <div className="col w-[50%]">
              <Select
                value={status}
                onChange={handleChangeStatus}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                size="small"
                className="w-full"
              >
                <MenuItem value={true}>True</MenuItem>
                <MenuItem value={false}>False</MenuItem>
              </Select>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <Button
              type="submit"
              className="btn-org btn-lg w-full flex gap-2 items-center"
            >
              Save
            </Button>
            <Button
              className="btn-org btn-border btn-lg w-full flex gap-2 items-center"
              onClick={handleClose}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Dialog>
    </>
  );
};

export default Address;
