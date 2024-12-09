import Image from "next/image";
import image1 from "../../public/bottle.png";
import image3 from "../../public/div.post-thumb (2).png"
import image2 from "../../public/div.post-thumb.png";

const LatestNews = () => {
  return (
    <div className="max-w-[1660px] mx-auto">
      <div className="grid grid-cols-4 gap-5">
        <div className="flex flex-col gap-5">
          {/* 1st image  */}
          <div className="relative">
            <Image
              className="rounded-2xl h-[500px] w-[390px]"
              src={image3}
              alt=""
            ></Image>
            <div className=" text-white">
              <p className="bg-[#003569] font-medium text-lg w-[114px] h-9 rounded-tr-[30px] rounded-br-[30px] flex justify-center items-center absolute top-5 -left-3">
                20 APR
              </p>
              <h1 className="text-xl font-bold absolute top-[70px] left-[45px] w-[298px]">
                The Covid-19 Epidemic In 2022 <br /> Is Back
              </h1>
            </div>
          </div>
          {/* 2nd image  */}
          <div className="relative">
            <Image
              className="rounded-2xl h-[226px] w-[390px]"
              src={image2}
              alt=""
            ></Image>
            <div className=" text-white">
              <p className="bg-[#003569] font-medium text-lg w-[114px] h-9 rounded-tr-[30px] rounded-br-[30px] flex justify-center items-center absolute top-5 -left-3">
                20 APR
              </p>
              <h1 className="text-xl font-bold absolute top-[70px] left-[45px] w-[298px]">
                The Covid-19 Epidemic In 2022 <br /> Is Back
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          {/* 1st image  */}
          <div className="relative">
            <Image
              className="rounded-2xl h-[226px] w-[390px]"
              src={image1}
              alt=""
            ></Image>
            <div className=" text-white">
              <p className="bg-[#003569] font-medium text-lg w-[114px] h-9 rounded-tr-[30px] rounded-br-[30px] flex justify-center items-center absolute top-5 -left-3">
                20 APR
              </p>
              <h1 className="text-xl font-bold absolute top-[70px] left-[45px] w-[298px]">
                The Covid-19 Epidemic In 2022 <br /> Is Back
              </h1>
            </div>
          </div>
          {/* 2nd image  */}
          <div className="relative">
            <Image
              className="rounded-2xl h-[500px] w-[390px]"
              src={image2}
              alt=""
            ></Image>
            <div className=" text-white">
              <p className="bg-[#003569] font-medium text-lg w-[114px] h-9 rounded-tr-[30px] rounded-br-[30px] flex justify-center items-center absolute top-5 -left-3">
                20 APR
              </p>
              <h1 className="text-xl font-bold absolute top-[70px] left-[45px] w-[298px]">
                The Covid-19 Epidemic In 2022 <br /> Is Back
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          {/* 1st image  */}
          <div className="relative">
            <Image
              className="rounded-2xl h-[500px] w-[390px]"
              src={image3}
              alt=""
            ></Image>
            <div className=" text-white">
              <p className="bg-[#003569] font-medium text-lg w-[114px] h-9 rounded-tr-[30px] rounded-br-[30px] flex justify-center items-center absolute top-5 -left-3">
                20 APR
              </p>
              <h1 className="text-xl font-bold absolute top-[70px] left-[45px] w-[298px]">
                The Covid-19 Epidemic In 2022 <br /> Is Back
              </h1>
            </div>
          </div>
          {/* 2nd image  */}
          <div className="relative">
            <Image
              className="rounded-2xl h-[226px] w-[390px]"
              src={image2}
              alt=""
            ></Image>
            <div className=" text-white">
              <p className="bg-[#003569] font-medium text-lg w-[114px] h-9 rounded-tr-[30px] rounded-br-[30px] flex justify-center items-center absolute top-5 -left-3">
                20 APR
              </p>
              <h1 className="text-xl font-bold absolute top-[70px] left-[45px] w-[298px]">
                The Covid-19 Epidemic In 2022 <br /> Is Back
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          {/* 1st image  */}
          <div className="relative h-[226px] w-[390px]">
            <Image
              className="rounded-2xl h-full "
              src={image1}
              alt=""
            ></Image>
            <div className=" text-white">
              <p className="bg-[#003569] font-medium text-lg w-[114px] h-9 rounded-tr-[30px] rounded-br-[30px] flex justify-center items-center absolute top-5 -left-3">
                20 APR
              </p>
              <h1 className="text-xl font-bold absolute top-[70px] left-[45px] w-[298px]">
                The Covid-19 Epidemic In 2022 <br /> Is Back
              </h1>
            </div>
          </div>
          {/* 2nd image  */}
          <div className="relative w-[390px] h-[500px]">
            <Image
              className="h-full  rounded-2xl"
              src={image2}
              alt=""
            ></Image>
            <div className=" text-white">
              <p className="bg-[#003569] font-medium text-lg w-[114px] h-9 rounded-tr-[30px] rounded-br-[30px] flex justify-center items-center absolute top-5 -left-3">
                20 APR
              </p>
              <h1 className="text-xl font-bold absolute top-[70px] left-[45px] w-[298px]">
                The Covid-19 Epidemic In 2022 <br /> Is Back
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
