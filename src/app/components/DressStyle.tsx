import Image from "next/image";
import StyleImg from "@/app/assests/Frame 60.png";

const DressStyle = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-16">
      {/* Container */}
      <div className="flex flex-wrap justify-center sm:justify-between items-center gap-4">
        {/* Image */}
        <Image
          src={StyleImg}
          alt="Style Image"
          className="w-full sm:w-[50%] md:w-[40%] lg:w-[100%] h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default DressStyle;

