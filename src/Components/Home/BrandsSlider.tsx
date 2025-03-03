import { H_Six, H_Two } from "@/Utils/Typography";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const brands = [
  { name: "Ferrari", logo: "https://img.icons8.com/color/48/ferrari-badge.png" },
  { name: "BMW", logo: "https://img.icons8.com/color/48/bmw--v1.png" },
  { name: "Porsche", logo: "https://img.icons8.com/color/48/porsche.png" },
  { name: "Maserati", logo: "https://img.icons8.com/color/48/maserati.png" },
  { name: "Lamborghini", logo: "https://img.icons8.com/color/48/lamborghini.png" },
  { name: "Land Rover", logo: "https://img.icons8.com/color/48/land-rover.png" },
];

const BrandsSlider = () => {
  return (
    <div className=" px-4 sm:px-8 md:px-16 lg:px-32 max-w-7xl w-full mx-auto py-8 md:py-16">
      {/* Header Section */}
      <div className="flex justify-between items-center py-4 md:py-6 text-center md:text-left">
        <H_Two text="Our Brands" className="text-primary font-bold mb-6 " />
        <Link
          href="#"
          className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-bold bg-primary text-surface rounded-full ring-1 ring-primary transition-all duration-300 hover:bg-white hover:text-primary active:scale-95"
        >
          All Brands
          <IoIosArrowForward className="text-base" />
        </Link>
      </div>

      {/* Brands Slider */}
      <div className="flex overflow-x-auto justify-center snap-x snap-mandatory space-x-4 py-4 scrollbar-hide">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="flex flex-col justify-center rounded-md shadow-lux-white items-center flex-shrink-0 w-28 h-28 md:w-32 md:h-32 snap-center bg-surface"
          >
            {/* for development purpose , will replace img with Image in production */}
           <img
              src={brand.logo}
              alt={brand.name}
              width={100}
              height={100}
              className="w-16 h-16 md:w-20 md:h-20  "
            />
            <H_Six className="mt-2  font-medium text-secondary" text={brand.name}/>
      </div>   
        ))}
      </div>
      <br />
      <div className="relative mb-10">

      <Link
          href="#"
          className="absolute right-2  md:hidden  flex w-fit items-center gap-2 px-4 py-2 text-sm font-bold bg-primary text-surface rounded-full ring-1 ring-primary transition-all duration-300 hover:bg-white hover:text-primary active:scale-95"
          >
          All Brands
          <IoIosArrowForward className="text-base" />
        </Link>
    </div>
{/* <div className="h-[0.5px] w-full bg-primary opacity-50"></div> */}

          </div>
  );
};

export default BrandsSlider;
