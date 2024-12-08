import Header from "./components/Header";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProductList from "./components/Productlist";
import TopSelling from "./components/TopSelling";
import DressStyle from "./components/DressStyle";
import Customer from "./components/Customer";
import Footer from "@/app/components/Footer";


const page = () => {
  return (
    <>
      <Header />
      <Navbar />
      <HeroSection />
      <ProductList />
      <TopSelling />
      <DressStyle />
      <Customer />
      <Footer />
      
    </>
  );
};

export default page;
