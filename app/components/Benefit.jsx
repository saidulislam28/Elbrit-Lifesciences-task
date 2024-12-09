import Image from "next/image";
import img1 from "../../public/Group-8111.svg.png";
import img2 from "../../public/Group-8110.svg.png";
import img3 from "../../public/Group-8117.svg.png";
import img4 from "../../public/a.item-icon-e.png";
import img5 from "../../public/a.item-icon-e (1).png";
import img6 from "../../public/a.item-icon-e (2).png";
const Benefit = () => {

  const benefitData = [
    {
      "id": 1,
      "image": img1,
      "title": "Clinically Studied",
      "description": "All products that we offer have undergone lab and safety tests"
    },
    {
      "id": 2,
      "image": img2,
      "title": "Vegetarian Friendly",
      "description": "We have a wide selection of vegetarian products to meet your needs"
    },
    {
      "id": 3,
      "image": img3,
      "title": "Made in India",
      "description": "Shop local and explore health products made right here in India"
    },
    {
      "id": 4,
      "image": img4,
      "title": "Free Shipping",
      "description": "We deliver to your door with no shipping costs on your orders"
    },
    {
      "id": 5,
      "image": img5,
      "title": "No Risk",
      "description": "We ensure that all products are safe and within their use-by date"
    },
    {
      "id": 6,
      "image": img6,
      "title": "GMO Free",
      "description": "Natural, no modified products and derivatives for those who need it"
    }
  ]
  


  return (
    <div className="max-w-[1464px] mx-auto h-[586px] bg-[#17414F] rounded-[80px]  relative">
      <div className="absolute -top-16 w-full">
        <div className=" flex justify-between gap-5 max-w-5xl mx-auto">
          {
            benefitData?.slice(0, 3).map(data=>(<div key={data.id} className="flex flex-col justify-center items-center">
              <div className="w-[130px] h-[130px] rounded-full bg-white flex items-center justify-center">
                <Image src={data.image} alt="" />
              </div>
              <div className="w-[322px] text-center">
                <h2 className="font-medium text-xl text-white my-2">
                  {data.title}
                </h2>
                <p className="text-[#D9D9D9] text-center W-[322px] px-12">
                 {data.description}
                </p>
              </div>
            </div>))
          }
          
          
        </div>


        <div className=" flex justify-between gap-5 max-w-5xl mx-auto mt-10">
          {benefitData?.slice(3, 6).map(data=>( <div key={data.id} className="flex flex-col justify-center items-center">
            <div className="w-[130px] h-[130px] rounded-full bg-white flex items-center justify-center">
              <Image src={data.image} alt="" />
            </div>
            <div className="w-[322px] text-center">
              <h2 className="font-medium text-xl text-white my-2">
              {data.title} </h2>
              <p className="text-[#D9D9D9] text-center W-[322px] px-12">
              {data.description}</p>
            </div>
          </div>))}
         
          
        </div>
      </div>
    </div>
  );
};

export default Benefit;
