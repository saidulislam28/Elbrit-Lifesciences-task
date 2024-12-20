import Image from "next/image";
import telephoneImg from "../../public/telephone.png";
import emailImg from "../../public/mail.png";
import mapImg from "../../public/map.png";
import footImg from "../../public/footImage.png";
import map1 from "../../public/Frame (1).png";
const Footer = () => {


  const footerCard =[
    {
      "id": 1,
      "title": "Phone Number",
      "content": "+974 3118 1843",
      "icon": telephoneImg,
      "bgColor": "#215D72"
    },
    {
      "id": 2,
      "title": "Email Address",
      "content": "Elbrithcqhr@gmail.com",
      "icon": emailImg,
      "bgColor": "#215D72"
    },
    {
      "id": 3,
      "title": "Office Location",
      "content": "Ambassador Street, Zone 61",
      "icon": mapImg,
      "bgColor": "#215D72"
    }
  ]
  


  return (
    <div className="h-full lg:h-[387px] bg-[#17414F] mt-5">
      <div className="w-full lg:w-[1548px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center pt-5 pb-4 lg:pb-10">
  {footerCard.map((data) => (
    <div
      key={data.id}
      className="flex flex-row  justify-normal lg:justify-center items-center bg-[#215D72] w-full lg:w-[435px] h-[100px] rounded-2xl px-4"
    >
      <Image className="w-[60px] h-[61px]" src={data.icon} alt="" />
      <div className="flex flex-col justify-center w-auto lg:w-[310px] pl-5">
        <h2 className="text-sm lg:text-lg text-white">{data.title}</h2>
        <p className="text-sm lg:text-[20px] text-white">{data.content}</p>
      </div>
    </div>
  ))}

  <Image src={footImg} alt="" />
  <p className="w-[300px] lg:w-[416px] text-white opacity-85 pl-5">
    Your health, physical and emotional well-being is important to us. We are
    always by your side and have made it even easier for you to find the
    necessary vitamins.
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
