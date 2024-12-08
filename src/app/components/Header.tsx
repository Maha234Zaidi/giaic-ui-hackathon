import Image from "next/image";
import crossImage from "@/app/assests/Frame.png";

const Header = () => {
  return (
    <header className="bg-black text-white p-2 relative">
      {/* Cross Image */}
      <div className="absolute right-4 top-2 lg:right-12 lg:top-3">
        <Image
          src={crossImage}
          alt="Close Notification"
          width={20}
          height={20}
          className="cursor-pointer"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-2">
        <span className="text-sm lg:text-base font-thin text-center">
          Sign up and get 20% off your first order.
        </span>
        <span className="text-sm lg:text-base font-bold underline text-center">
          Sign Up Now
        </span>
      </div>
    </header>
  );
};

export default Header;
