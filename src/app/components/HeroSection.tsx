import Image from "next/image";
import heroImg from "@/app/assests/Rectangle 2.png";
import rectangle from "@/app/assests/Rectangle 3.png";
import text1 from "@/app/assests/Group (1).png";
import text2 from "@/app/assests/Group.png";
import text3 from "@/app/assests/prada-logo-1 1.png";
import text4 from "@/app/assests/Vector (2).png";
import text5 from "@/app/assests/Vector (3).png";

const HeroSection = () => {
  return (
    <>
      <section className="relative h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px]">
        {/* Background Image */}
        <Image
          src={heroImg}
          alt="Hero Background"
          className="w-full h-full object-cover"
        ></Image>

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center bg-opacity-50 text-black w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] px-4 sm:px-8">
          <h1 className=" animate-bounce text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-[64px] leading-tight uppercase">
            Find Clothes <br /> That Match <br /> Your Style
          </h1>
          <p className="text-sm sm:text-base md:text-lg mb-6 font-medium leading-relaxed text-[#00000099]">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="w-full sm:w-[210px] h-[52px] px-6 py-3 font-medium text-center rounded-full bg-black text-white  transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-gray-200 hover:text-black">
            Shop Now
          </button>
        </div>
      </section>

      {/* Logo Section */}
      <div className="relative bg-black py-6 sm:py-8">
        <Image
          src={rectangle}
          alt="black-background"
          className="w-full h-auto"
        ></Image>
        <div className="absolute inset-0 flex flex-wrap justify-around items-center px-4 sm:px-8">
          <Image
            src={text2}
            alt="text"
            className="w-[80px] sm:w-[120px] md:w-[140px] lg:w-[160px] transition-transform duration-500 hover:rotate-12"
          ></Image>
          <Image
            src={text4}
            alt="text"
            className="w-[50px] sm:w-[60px] md:w-[70px] lg:w-[80px] transition-transform duration-500 hover:rotate-12 "
          ></Image>
          <Image
            src={text5}
            alt="text"
            className="w-[100px] sm:w-[130px] md:w-[150px] lg:w-[170px] transition-transform duration-500 hover:rotate-12"
          ></Image>
          <Image
            src={text3}
            alt="text"
            className="w-[120px] sm:w-[160px] md:w-[180px] lg:w-[200px] transition-transform duration-500 hover:rotate-12"
          ></Image>
          <Image
            src={text1}
            alt="text"
            className="w-[140px] sm:w-[180px] md:w-[200px] lg:w-[220px] transition-transform duration-500 hover:rotate-12"
          ></Image>
        </div>
      </div>
    </>
  );
};

export default HeroSection;


