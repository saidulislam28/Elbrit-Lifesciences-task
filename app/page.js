import Image from "next/image";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import LatestNews from "./components/LatestNews";
import Ingredients from "./components/Ingredients";
// import Benefit from "./components/Benefit";

export default function Home() {
  return (
    <div>
      <Header></Header>
    
      <Banner></Banner>
      <Ingredients></Ingredients>
      <LatestNews></LatestNews>
      
      <Footer></Footer>

    </div>
  );
}
