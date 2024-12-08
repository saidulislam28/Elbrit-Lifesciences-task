import Image from "next/image";
import telephoneImg from '../../public/telephone.png'
import emailImg from '../../public/mail.png'
import mapImg from '../../public/map.png'
const Footer = () => {
  return (
    <div className="h-[387px] bg-[#17414F]">
      <div className="w-[1548px] mx-auto flex justify-between gap-5 pt-8 pb-10">
        <div className="flex justify-center items-center bg-[#215D72]  w-[435px] h-[100px] rounded-2xl">
          <Image className="w-[60px] h-[61px]" src={telephoneImg} alt="" />
          <div className="w-[310px] pl-5">
            <h2 className="text-lg text-white">
            Phone Number            </h2>
            <p className="text-[20px] text-white">
            +974 3118 1843
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center bg-[#215D72]  w-[435px] h-[100px] rounded-2xl">
          <Image className="w-[60px] h-[61px]" src={emailImg} alt="" />
          <div className="w-[310px] pl-5">
            <h2 className="text-lg text-white">
            Email Address</h2>
            <p className="text-[20px] text-white">
            Elbrithcqhr@gmail.com
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center bg-[#215D72]  w-[435px] h-[100px] rounded-2xl">
          <Image className="w-[60px] h-[61px]" src={mapImg} alt="" />
          <div className="w-[310px] pl-5">
            <h2 className="text-lg text-white">
            Office Location</h2>
            <p className="text-[20px] text-white">
            Ambassador Street, Zone 61,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
