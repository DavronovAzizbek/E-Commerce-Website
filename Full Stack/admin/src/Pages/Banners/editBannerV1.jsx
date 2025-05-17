import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useContext } from "react";
import { useState } from "react";
import { MyContext } from "../../App";
import { deleteImages } from "../../utils/api";
import UploadBox from "../../Components/UploadBox";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import { FaCloudUploadAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const EditBannerV1 = () => {
  const [formFields, setFormFields] = useState({
    catId: "",
    bannerTitle: "",
    subCatId: "",
    thirdsubCatId: "",
    price: "",
  });
  const [productCat, setProductCat] = useState("");
  const [previews, setPreviews] = useState([]);
  const [productSubCat, setProductSubCat] = useState("");
  const [productThirdLevelCat, setProductThirdLevelCat] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const history = useNavigate();

  const context = useContext(MyContext);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormFields(() => {
      return {
        ...formFields,
        [name]: value,
      };
    });
  };

  const handleChangeProductCat = (event) => {
    setProductCat(event.target.value);
    formFields.catId = event.target.value;
  };

  const handleChangeProductSubCat = (event) => {
    setProductSubCat(event.target.value);
    formFields.subCatId = event.target.value;
  };

  const handleChangeProductThirdLevelCat = (event) => {
    setProductThirdLevelCat(event.target.value);
    formFields.thirdsubCatId = event.target.value;
  };

  const setPreviewsFun = (previewsArr) => {
    const imgArr = previews;
    for (let i = 0; i < previewsArr.length; i++) {
      imgArr.push(previewsArr[i]);
    }

    setPreviews([]);
    setTimeout(() => {
      setPreviews(imgArr);
      formFields.images = imgArr;
    }, 10);
  };

  const removeImg = (image, index) => {
    var imageArr = [];
    imageArr = previews;
    deleteImages(`/api/category/deleteImage?img=${image}`).then(() => {
      imageArr.splice(index, 1);
      setPreviews([]);
      setTimeout(() => {
        setPreviews(imageArr);
        formFields.images = imageArr;
      }, 100);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    if (formFields.bannerTitle === "") {
      context.alertBox("error", "Please enter bannerTitle");
      setIsLoading(false);
      return false;
    }

    if (formFields.price === "") {
      context.alertBox("error", "Please enter price");
      setIsLoading(false);
      return false;
    }

    if (previews?.length === 0) {
      context.alertBox("error", "Please select category image");
      setIsLoading(false);
      return false;
    }
  };

  return (
    <section className="p-5 bg-gray-50">
      <form className="form py-3 p-8" onSubmit={handleSubmit}>
        <div className="scroll max-h-[72vh] overflow-y-scroll pr-4 pt-4">
          <div className="grid grid-cols-5 mb-3 gap-5">
            <div className="col">
              <h3 className="text-[14px] font-[500] mb-1 text-black">
                Banner Title
              </h3>
              <input
                type="text"
                className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm "
                name="bannerTitle"
                value={formFields.bannerTitle}
                onChange={onChangeInput}
              />
            </div>

            <div className="col">
              <h3 className="text-[14px] font-[500] mb-1 text-black">
                Category
              </h3>
              {context?.catData}
              <Select
                labelId="demo-simple-select-label"
                id="productCatDrop"
                size="small"
                className="w-full"
                value={productCat}
                label="Category"
                onChange={handleChangeProductCat}
              >
                <MenuItem value={""}>None</MenuItem>
                <MenuItem value={10}>Fashion</MenuItem>
                <MenuItem value={20}>Beauty</MenuItem>
                <MenuItem value={30}>Wellness</MenuItem>
              </Select>
            </div>

            <div className="col">
              <h3 className="text-[14px] font-[500] mb-1 text-black">
                Sub Category
              </h3>
              <Select
                labelId="demo-simple-select-label"
                id="productCatDrop"
                size="small"
                className="w-full"
                value={productSubCat}
                label="Category"
                onChange={handleChangeProductSubCat}
              >
                <MenuItem value={""}>None</MenuItem>
                <MenuItem value={10}>Men</MenuItem>
                <MenuItem value={20}>Women</MenuItem>
                <MenuItem value={30}>Kids</MenuItem>
              </Select>
            </div>

            <div className="col">
              <h3 className="text-[14px] font-[500] mb-1 text-black">
                Third Level Category
              </h3>
              <input
                type="number"
                className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
                name="price"
                value={formFields.price}
                onChange={onChangeInput}
              />
            </div>

            <div className="col">
              <h3 className="text-[14px] font-[500] mb-1 text-black">Price</h3>
              <input
                type="number"
                className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm "
                name="price"
                value={formFields.price}
                onChange={onChangeInput}
              />
            </div>
          </div>

          <br />

          <h3 className="text-[18px] font-[500] mb-0 text-black">Image</h3>
          <br />

          <div className="grid grid-cols-7 gap-4">
            {previews?.length !== 0 &&
              previews?.map((image, index) => {
                return (
                  <div className="uploadBoxWrapper relative" key={index}>
                    <span
                      className="absolute w-[20px] h-[20px] rounded-full overflow-hidden bg-red-700 -top-[5px] -right-[5px] flex items-center justify-center z-50 cursor-pointer"
                      onClick={() => removeImg(image, index)}
                    >
                      <IoMdClose className="text-white text-[17px]" />
                    </span>

                    <div className="uploadBox p-0 rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-200 flex items-center justify-center flex-col relative">
                      <img src={image} alt="" className="w-100" />
                    </div>
                  </div>
                );
              })}

            <UploadBox
              multiple={true}
              name="images"
              url="/api/bannerV1/uploadImages"
              setPreviewsFun={setPreviewsFun}
            />
          </div>
        </div>

        <br />
        <div className="w-[250px]">
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
        </div>
      </form>
    </section>
  );
};

export default EditBannerV1;
