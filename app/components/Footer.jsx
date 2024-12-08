import Image from "next/image";
import telephoneImg from "../../public/telephone.png";
import emailImg from "../../public/mail.png";
import mapImg from "../../public/map.png";
import footImg from "../../public/footImage.png";
import map1 from "../../public/Frame (1).png";
const Footer = () => {
  return (
    <div className="h-[387px] bg-[#17414F]">
      <div className="w-[1548px] mx-auto">
        <div className="grid grid-cols-3 gap-10 items-center pt-5 pb-10">
          <div className="flex justify-center items-center bg-[#215D72]  w-[435px] h-[100px] rounded-2xl">
            <Image className="w-[60px] h-[61px]" src={telephoneImg} alt="" />
            <div className="w-[310px] pl-5">
              <h2 className="text-lg text-white">Phone Number </h2>
              <p className="text-[20px] text-white">+974 3118 1843</p>
            </div>
          </div>
          <div className="flex justify-center items-center bg-[#215D72]  w-[435px] h-[100px] rounded-2xl">
            <Image className="w-[60px] h-[61px]" src={emailImg} alt="" />
            <div className="w-[310px] pl-5">
              <h2 className="text-lg text-white">Email Address</h2>
              <p className="text-[20px] text-white">Elbrithcqhr@gmail.com</p>
            </div>
          </div>
          <div className="flex justify-center items-center bg-[#215D72]  w-[435px] h-[100px] rounded-2xl">
            <Image className="w-[60px] h-[61px]" src={mapImg} alt="" />
            <div className="w-[310px] pl-5">
              <h2 className="text-lg text-white">Office Location</h2>
              <p className="text-[20px] text-white">
                Ambassador Street, Zone 61,
              </p>
            </div>
          </div>
          <Image src={footImg} alt="" />
          <p className="w-[416px] text-white opacity-85 pl-5">
            Your health, physical and emotional well-being is important to us.
            We are always by your side and have made it even easier for you to
            find the necessary vitamins.
          </p>
        </div>
        <div className="flex text-white opacity-90 gap-2 items-center">
          <Image className="w-4 h-4" src={map1} alt="" />
          <p>Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
