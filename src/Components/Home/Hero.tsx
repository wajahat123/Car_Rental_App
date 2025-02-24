"use client";
import Image from "next/image";
import "../../Styles/Hero.css";
import SearchBar from "@/Components/Generals/SearchBar";
import { ContactLinks } from "../Generals/ContactLinks";

const Hero = () => {
  return (
    <div className="Hero min-h-[400px] md:min-h-[700px] px-4 sm:px-8 md:px-16 xl:px-32 overflow-x-hidden  max-w-7xl w-full mx-auto">
      {/* Optimized Next.js Image */}
      <Image
        src="/assets/images/CARS2.png"
        alt="Car Rental Hero"
        width={1200}
        height={600}
        priority
        className="h-[400px] md:h-[700px]"
      />

      {/* Gradient Overlay */}
      <div className=" gradient min-h-[400px] md:min-h-[700px]  absolute bottom-0 left-0 right-0 bg-[#000000a8]"></div>

      {/* Hero Content (Optional) */}
      <div className="relative text-white text-center z-10">
        <h1 className="text-5xl font-bold">Find Your Dream Car</h1>
        <p className="text-lg mt-2">
          Best Rental Services at Affordable Prices
        </p>
        <h1 className="text-2xl font-bold mb-4">Search Products</h1>
        <SearchBar products={products} />
        <ContactLinks/>
      </div>
    </div>
  );
};

export default Hero;

const products = [
  {
    id: 1,
    name: "Apple iPhone 15",
    description: "Latest Apple smartphone",
    image: "/assets/images/cars1.png",
  },
  {
    id: 2,
    name: "Samsung Galaxy S23",
    description: "Flagship Samsung phone",
    image: "/assets/images/cars1.png",
  },
  {
    id: 3,
    name: "Sony Headphones",
    description: "Noise-canceling headphones",
    image: "/assets/images/cars1.png",
  },
  {
    id: 4,
    name: "MacBook Pro",
    description: "Powerful Apple laptop",
    image: "/assets/images/cars1.png",
  },
];
