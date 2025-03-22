import { H_Two } from "@/Utils/Typography";
import Link from "next/link";

const SubHeader = () => {
  return (
    <div
      className="relative bg-cover bg-center min-h-[400px] md:h-80 pt-32 pb-14"
      style={{ backgroundImage: "url('/assets/images/car1.webp')" }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tl from-black to-black/60"></div>

      {/* Content Container */}
      <div className="relative z-10 px-4 sm:px-8 md:px-16 lg:px-32 max-w-7xl mx-auto flex justify-end">
        
        {/* Left Text Section */}
        <div className="text-center md:text-right md:w-2/3 space-y-4 px-8">
          <H_Two text="Where Elegance Meets Performance on the Road" className="text-primary" />
          <p className="text-text text-justify md:text-left">
            At <span className="text-primary font-bold">ASMAR</span>, we turn your supercar dreams into reality. Cruise Dubai in a Ferrari, feel the power of a Lamborghini, or enjoy the luxury of a Range Rover—all at unbeatable prices. With flexible rentals and top-tier service, driving luxury has never been easier.
          </p>

          {/* Button Wrapper */}
          <div className="flex md:justify-end justify-center">
            <Link
              className="font-extrabold w-[70%] sm:w-1/2 md:w-1/3 transition-all duration-300 active:scale-95 ring-1 ring-primary/30 hover:ring-primary bg-background rounded-full  text-primary hover:bg-background hover:shadow-lux-gold hover:text-primary active:bg-primary active:opacity-90 active:text-background active:ring-primary text-center py-2  md:px-6"
              href="/contact-us"
            >
              Book Now
            </Link>
          </div>

        </div>
        
      </div>
    </div>
  );
};

export default SubHeader;
