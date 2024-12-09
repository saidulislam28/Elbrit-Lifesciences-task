import Image from "next/image";
import image1 from "../../public/image1.jpeg";
import image2 from "../../public/image2.jpeg";
import image3 from "../../public/image3.jpeg";
import image4 from "../../public/image4.jpeg";
import image5 from "../../public/image5.png";
import image6 from "../../public/image6.png";

const Ingredients = () => {
  return (
    <div className="max-w-6xl mx-auto my-20">
      <div className="grid grid-cols-10 gap-4">
        {/* card  */}
        <div className="col-span-4 flex flex-col gap-5 text-start">
          <h5 className="text-[#003569] font-semibold">INGREDIENTS</h5>

          <h2 className="text-[#17414F] text-5xl font-semibold">
            Better Ingredients{" "}
          </h2>
          <p className="text-[#727272]">
            Only the best when you choose products offered on our platform -
            high-quality ingredients for high quality products!
          </p>
        </div>
        {/* card  */}
        <div className="col-span-3 relative">
          <Image className="rounded-xl" src={image1} alt=""></Image>
          <div className="absolute top-5 left-4">
            <h2 className="text-2xl font-semibold text-[#2D3F59]">Vitamin C</h2>
            <p className="mt-2 font-medium text-lg text-[#727272]">
              Vitamin C as ascorbic acid
            </p>
          </div>
          <p className="underline text-[#003569] font-semibold absolute bottom-5 left-4">
            See More
          </p>
        </div>
        {/* card  */}
        <div className="col-span-3 relative">
          <Image className="rounded-xl" src={image2} alt=""></Image>
          <div className="absolute top-5 left-4">
            <h2 className="text-2xl font-semibold text-[#2D3F59]">Vitamin C</h2>
            <p className="mt-2 font-medium text-lg text-[#727272]">
              Vitamin C as ascorbic acid
            </p>
          </div>
          <p className="underline text-[#003569] font-semibold absolute bottom-5 left-4">
            See More
          </p>
        </div>
      </div>
      <div className="grid grid-cols-10 gap-5 mt-5">
        {/* card  */}
        <div className="col-span-3 relative">
          <Image className="rounded-xl" src={image2} alt=""></Image>
          <div className="absolute top-5 left-4">
            <h2 className="text-2xl font-semibold text-[#2D3F59]">Vitamin C</h2>
            <p className="mt-2 font-medium text-lg text-[#727272]">
              Vitamin C as ascorbic acid
            </p>
          </div>
          <p className="underline text-[#003569] font-semibold absolute bottom-5 left-4">
            See More
          </p>
        </div>
       {/* card  */}
       <div className="col-span-3 relative">
          <Image className="rounded-xl" src={image2} alt=""></Image>
          <div className="absolute top-5 left-4">
            <h2 className="text-2xl font-semibold text-[#2D3F59]">Vitamin C</h2>
            <p className="mt-2 font-medium text-lg text-[#727272]">
              Vitamin C as ascorbic acid
            </p>
          </div>
          <p className="underline text-[#003569] font-semibold absolute bottom-5 left-4">
            See More
          </p>
        </div>
       {/* card  */}
       <div className="col-span-3 relative">
          <Image className="rounded-xl" src={image2} alt=""></Image>
          <div className="absolute top-5 left-4">
            <h2 className="text-2xl font-semibold text-[#2D3F59]">Vitamin C</h2>
            <p className="mt-2 font-medium text-lg text-[#727272]">
              Vitamin C as ascorbic acid
            </p>
          </div>
          <p className="underline text-[#003569] font-semibold absolute bottom-5 left-4">
            See More
          </p>
        </div>

        {/* card  */}
        <div className="col-span-1">
          <Image src={image6} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Ingredients;
