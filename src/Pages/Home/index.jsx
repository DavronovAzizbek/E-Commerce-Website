import HomeSlider from "../../components/HomeSlider";
import HomeCatSlider from "../../components/HomeCatSlider";
import { LiaShippingFastSolid } from "react-icons/lia";

const Home = () => {
  return (
    <>
      <HomeSlider />
      <HomeCatSlider />

      <section className="py-16 bg-white">
        <div className="container">
          <div className="freeShipping w-full py-4 p-4 border-2 border-[#ff5252] flex items-center justify-between rounded-md">
            <div className="col1 flex items-center gap-4">
              <LiaShippingFastSolid className="text-[50px]" />
              <span className="text-[20px] font-[600] uppercase">
                Yetkazib berish bepul
              </span>
            </div>

            <div className="col2">
              <p className="mb-0 font-[500]">
                Birinchi buyurtmangizda va $200 dan ortiq bepul yetkazib berish
              </p>
            </div>

            <p className="font-bold text-[25px]">- Faqat $200*</p>
          </div>
        </div>
      </section>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Home;
