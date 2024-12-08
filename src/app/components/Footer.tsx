import Image from "next/image";
import footer from "@/app/assests/Group 4.png";

const Footer = () => {
  return (
    <footer className=" py-4">
      <div className="container mx-auto px-4 sm:px-8 md:px-12">
        <Image
          src={footer}
          alt="footer"
          className="w-full h-auto max-w-screen-lg mx-auto"
          priority={true}
        />
      </div>
    </footer>
  );
};

export default Footer;
