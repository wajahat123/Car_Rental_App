"use client";
import Image from "next/image";
import "../../Styles/Hero.css";
import SearchBar from "@/Components/Generals/SearchBar";
import { ContactLinks } from "../Generals/ContactLinks";
import { H_One } from "@/Utils/Typography";
import rawProducts from "@/Utils/CarsData.json";
import { Car } from "@/Utils/utils";

const products: Car[] = JSON.parse(JSON.stringify(rawProducts));

const Hero = () => {
  return (
    <div className="relative Hero min-w-screen min-h-[400px] md:min-h-[600px] overflow-visible">
      {/* Optimized Next.js Image */}
      <Image
        src="/assets/images/CARS2.png"
        alt="Car Rental Hero"
        width={1200}
        height={600}
        priority
        className="h-[400px] md:h-[600px] w-[100vw]"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-[#000000a8]"></div>

      {/* Hero Content */}
      <div className="relative text-white text-center z-10 px-4 sm:px-8 md:px-16 lg:px-32 max-w-7xl w-full mx-auto overflow-visible">
       <div className="bg-[#000000a0] py-5 md:py-10 w-full md:w-[70%] mx-auto rounded-lg border-[0.5px] border-surface shadow-lux-gold">
       <H_One className="text-5xl font-bold " text="Find Your Dream Car"/>
        <br />


        {/* Ensure SearchBar is visible */}
        <div className="relative z-20 w-[80%] mx-auto">
          <SearchBar products={products} />
        </div>

        <ContactLinks/>
        <button className="flex justify-center items-center gap-2 w-[70%] sm:w-1/2 font-extrabold md:w-1/3 mx-auto mt-2  transition-all duration-300  active:scale-95 ring-1 ring-primary hover:ring-royal-blue bg-primary rounded-md p-[2px] md:p-[4px] text-white hover:bg-white  hover:text-primary  active:bg-black active:text-primary active:ring-primary">
        Book Now
      </button>
       </div>
      </div>
    </div>
  );
};

export default Hero;
