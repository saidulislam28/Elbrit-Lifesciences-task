import Image from "next/image";
import bottleImg from "../../public/2023, 15_42_43 GMT+3.png";
import vitaminsImg from "../../public/Frame-8363.png";
import weightImg from "../../public/Frame-8364.png";
import foodsImg from "../../public/Frame-8365.png";
import Benefit from "./Benefit";

const Banner = () => {
  return (
    <div className="relative">
      <div className="bg-[#E2F5FB] pb-0 lg:pb-[200px] h-full lg:h-[900px] mb-10 lg:mb-[400px]"> {/* Added bottom padding */}
        <h1 className="font-bold  text-2xl lg:text-8xl text-center py-10 text-[#003569] tracking-[8px] lg:tracking-[16px]">
          Essential Vitamins
        </h1>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 items-end gap-10">
          {/* Explore section  */}
          <div className="flex flex-col justify-start pl-10">
            <p className="text-lg text-[#727272]">Online Medical Supplies</p>
            <h3 className="font-medium text-xl text-[#17414F] my-5">
              Get Your Vitamins <br /> & Minerals
            </h3>
            <button className="w-40 bg-[#17414F] h-10 lg:h-14 text-white rounded-full font-semibold">
              EXPLORE
            </button>
          </div>
          {/* capsule section  */}
          <div className="bg-[#FFE9B5] rounded-tl-[130px] rounded-br-[130px] relative h-[250px] lg:h-[362px] mt-10 lg:mt-0">
            <Image className="absolute -top-24" src={bottleImg} alt="" />
          </div>
          {/* vitamins section  */}
          <div className="space-y-3 ml-0 lg:ml-auto ">
            <div className="flex flex-col lg:flex-row gap-5 items-center">
              <Image className="w-[75px] h-[74px]" src={vitaminsImg} alt="" />
              <div className="w-[146px] text-center lg:text-start">
                <h2 className="font-semibold text-2xl text-[#17414F]">
                  Vitamins
                </h2>
                <p className="text-[14px] text-[#727272]">
                  Increased Vitamins and minerals in your diet
                </p>
              </div>
            </div>
            <div className="flex  flex-col lg:flex-row gap-5 items-center">
              <Image className="w-[75px] h-[74px]" src={weightImg} alt="" />
              <div className="w-[146px] text-center lg:text-start">
                <h2 className="font-semibold text-2xl text-[#17414F]">
                  Weight Loss
                </h2>
                <p className="text-[14px] text-[#727272]">
                  Weight Loss Find scientifically proven solutions
                </p>
              </div>
            </div>
            <div className="flex  flex-col lg:flex-row gap-5 items-center">
              <Image className="w-[75px] h-[74px]" src={foodsImg} alt="" />
              <div className="w-[146px] text-center lg:text-start">
                <h2 className="font-semibold text-2xl text-[#17414F]">
                  Functional Foods
                </h2>
                <p className="text-[14px] text-[#727272]">
                  Functional Foods From protein powers to baby formula
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Benefit Component Positioned Inline */}
        <div className="max-w-6xl mx-auto mt-36"> {/* Added margin-top */}
          <Benefit />
        </div>
      </div>
    </div>
  );
};

export default Banner;
