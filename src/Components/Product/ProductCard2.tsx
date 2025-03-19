import { H_Five } from "@/Utils/Typography";
import Image from "next/image";
import { Car } from "@/Utils/types";
import { RiPhoneFill, RiWhatsappFill } from "react-icons/ri";

const ProductCardTwo = ({ data }: { data: Car }) => {
  return (
    <div className="bg-surface hover:scale-105 w-full mx-auto p-4 ring-1 ring-primary hover:ring-accent text-textSecondary transition-all duration-300 cursor-pointer rounded-md hover:shadow-lux-white mb-4 flex flex-row items-center gap-4">
      {/* Image Section (Left) */}
      <div className="w-[40%] h-[200px] relative">
        <Image
          src={data.image}
          alt={data.name}
          layout="fill"
          objectFit="cover"
          className="rounded-md shadow-lg"
        />
      </div>

      {/* Product Info (Right) */}
      <div className="w-[60%] flex flex-col">
        <H_Five text={data.name} className="text-background font-bold text-lg" />
        <p className="text-secondary text-sm md:text-base">{data.type}</p>

        {/* Pricing */}
        <div className="flex justify-start items-center text-sm mt-2">
          {data.original_price ? (
            <p className="flex gap-2">
              <span className="line-through text-textMuted">
                {data.original_price}
              </span>
              <span className="text-warning font-bold">{data.price_per_day}</span>
            </p>
          ) : (
            <p className="text-warning font-bold">{data.price_per_day}</p>
          )}
        </div>

        {/* Buttons Section */}
        <div className="flex w-full justify-between items-center gap-2 mt-3">
          <button className="flex justify-center items-center gap-2 w-[50%] py-1 rounded-sm ring-1 ring-primary hover:ring-accent active:ring-primary hover:bg-white active:bg-primary hover:text-accent active:text-background transition-all duration-300 active:scale-95">
            <RiWhatsappFill /> WhatsApp
          </button>
          <button className="flex justify-center items-center gap-2 w-[50%] py-1 rounded-sm ring-1 ring-primary hover:ring-accent active:ring-primary hover:bg-white active:bg-primary hover:text-accent active:text-background transition-all duration-300 active:scale-95">
            <RiPhoneFill /> Phone
          </button>
        </div>

        {/* Book Now Button */}
        <button className="w-full mt-3 p-2 text-xs md:text-sm font-semibold transition-all duration-300 active:scale-95 ring-1 ring-primary hover:ring-primary bg-primary rounded-sm text-background hover:bg-surface hover:text-secondary active:bg-surface active:opacity-90 active:text-secondary active:ring-primary">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default ProductCardTwo;
