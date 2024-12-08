import Image from "next/image";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Footer></Footer>
    </div>
  );
}
