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
    <div className="relative Hero min-w-screen min-h-[400px] md:min-h-[600px] overflow-visible text-primary">
      {/* Optimized Next.js Image */}
      <Image
        // src="/assets/images/bg-home.webp"
        src="/assets/images/car7.webp"
        alt="Car Rental Hero"
        width={1200}
        height={600}
        priority
        className="h-[400px] md:h-[600px] w-[100vw] opacity-50"
      />


      {/* Hero Content */}
      <div className="relative  text-center z-10 px-4 sm:px-8 md:px-16 lg:px-32 max-w-7xl w-full mx-auto overflow-visible ">
       <div className=" bg-[#0812419d] border border-[#ffbf004b] py-5 md:py-10 w-full md:w-[70%] mx-auto rounded-lg  shadow-lux-gold space-y-2 md:space-y-4">
       <H_One className="font-bold text-secondary " text="Find Your Dream Car"/>


        {/* Ensure SearchBar is visible */}
        <div className="relative z-20 w-[80%] mx-auto">
          <SearchBar products={products} />
        </div>

        <ContactLinks/>
        <button className="flex justify-center items-center gap-2 w-[70%] sm:w-1/2 font-extrabold md:w-1/3 mx-auto mt-2   transition-all duration-300  active:scale-95 ring-1 ring-primary hover:ring-primary bg-primary rounded-md md:p-[4px] text-background hover:bg-background  hover:text-primary  active:bg-background active:opacity-90 active:text-primary active:ring-primary">
        Book Now
      </button>
       </div>
      </div>
    </div>
  );
};

export default Hero;
