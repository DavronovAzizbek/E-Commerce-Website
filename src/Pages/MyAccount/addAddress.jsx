import { useContext, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import { MyContext } from "../../App";
import { editData, fetchDataFromApi } from "../../utils/api";

const AddAddress = () => {
  const [phone, setPhone] = useState("");
  const [addressType, setAddressType] = useState("");
  const [mode, setMode] = useState("add");
  const [isLoading, setIsLoading] = useState(false);

  const context = useContext(MyContext);

  const [formFields, setFormsFields] = useState({
    address_line1: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    mobile: "",
    userId: "",
    addressType: "",
    landmark: "",
  });

  useEffect(() => {
    if (context?.userData?._id !== undefined) {
      setFormsFields((prevState) => ({
        ...prevState,
        userId: context?.userData?._id,
      }));
    }
  }, [context?.userData]);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormsFields(() => {
      return {
        ...formFields,
        [name]: value,
      };
    });
  };

  const handleChangeAddressType = (event) => {
    setAddressType(event.target.value);
    setFormsFields(() => ({
      ...formFields,
      addressType: event.target.value,
    }));
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

    if (formFields.landmark === "") {
      context.alertBox("error", "Please enter your 10 digit mobile number");
      return false;
    }

    if (formFields.addressType === "") {
      context.alertBox("error", "Please select address type");
      return false;
    }

    if (mode === "add") {
      postData(`/api/address/add`, formFields, { withCredentials: true }).then(
        (res) => {
          if (res?.error !== true) {
            context.alertBox("success", res?.message);
            setTimeout(() => {
              setIsLoading(false);
              setisOpenModel(false);
            }, 500);

            fetchDataFromApi(
              `/api/address/get?userId=${context?.userData?._id}`
            ).then((res) => {
              setAddress(res.data);

              setFormsFields({
                address_line1: "",
                city: "",
                state: "",
                pincode: "",
                country: "",
                mobile: "",
                userId: "",
                addressType: "",
                landmark: "",
              });

              setAddressType("");
              setPhone("");
            });
          } else {
            context.alertBox("error", res?.message);
            setIsLoading(false);
          }
        }
      );
    }

    if (mode === "edit") {
      setIsLoading(true);
      editData(`/api/address/${addressId}`, formFields, {
        withCredentials: true,
      }).then((res) => {
        fetchDataFromApi(
          `/api/address/get?userId=${context?.userData?._id}`
        ).then((res) => {
          setTimeout(() => {
            setIsLoading(false);
            setisOpenModel(false);
          }, 500);
          setAddress(res.data);

          setFormsFields({
            address_line1: "",
            city: "",
            state: "",
            pincode: "",
            country: "",
            mobile: "",
            userId: "",
            addressType: "",
            landmark: "",
          });

          setAddressType("");
          setPhone("");
        });
      });
    }
  };
    
  const editAddress = (id) => {
    setMode("edit");
    setisOpenModel(true);

    setAddressId(id);

    fetchDataFromApi(`/api/address/${id}`).then((res) => {
      setFormsFields({
        address_line1: res?.address?.address_line1,
        city: res?.address?.city,
        state: res?.address?.state,
        pincode: res?.address?.pincode,
        country: res?.address?.country,
        mobile: res?.address?.mobile,
        userId: res?.address?.userId,
        addressType: res?.address?.addressType,
        landmark: res?.address?.landmark,
      });

      const ph = `"${res?.address?.mobile}"`;
      setPhone(ph);
      setAddressType(res?.address?.addressType);
    });
  };

  return (
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
          <TextField
            className="w-full"
            label="Landmark"
            variant="outlined"
            size="small"
            name="landmark"
            onChange={onChangeInput}
            value={formFields.landmark}
          />
        </div>
      </div>

      <div className="flex items-center gap-5  pb-5">
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Address Type
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            className="flex items-center gap-5"
            value={addressType}
            onChange={handleChangeAddressType}
          >
            <FormControlLabel value="home" control={<Radio />} label="Home" />
            <FormControlLabel
              value="office"
              control={<Radio />}
              label="Office"
            />
          </RadioGroup>
        </FormControl>
      </div>

      <div className="flex items-center gap-5">
        <Button
          type="submit"
          className="btn-org btn-lg w-full flex gap-2 items-center"
        >
          {isLoading === true ? <CircularProgress color="inherit" /> : "Save"}
        </Button>
        <Button
          className="btn-org btn-border btn-lg w-full flex gap-2 items-center"
          onClick={handleClose}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default AddAddress;
