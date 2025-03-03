import { H_Five } from "@/Utils/Typography";
import Image from "next/image";
import { Car } from "@/Utils/utils";
import Link from "next/link";
import { RiPhoneFill, RiWhatsappFill } from "react-icons/ri";

const ProductCard = ({ data }: { data: Car }) => {
  return (
    <div className="bg-[rgba(11,15,35,0.46)] hover:scale-105 w-[300px] h-[440px] mx-auto p-2  ring-1 ring-primary hover:ring-accent text-textSecondary  transition-all duration-300 cursor-pointer rounded-md hover:shadow-lux-white mb-2 ml:mb-4">
      <Image
        src={data.image}
        alt="image"
        width={400}
        height={400}
        
        className="h-[70%] w-full rounded-md shadow-lg "
      />
      <H_Five text={data.name} className="text-white font-bold"/>
      <div className="flex justify-between items-start ">
        <div>
          <p className="text-secondary text-sm md:text-base">{data.type}</p>
        </div>
        <div className="text-xs md:text-sm ">
          {data.original_price ? (
            <p className="gap-2 flex">
              <span className="line-through text-textMuted">
                {data.original_price}
              </span>
              <span className="text-warning font-bold">
                {data.price_per_day}
              </span>
            </p>
          ) : (
            <p className="text-warning font-bold">{data.price_per_day}</p>
          )}
        </div>
      </div>
      <div className="flex w-full justify-between items-center gap-2 text-xs md:text-sm mt-2">
        <button className="flex justify-center gap-2 items-center w-[50%] p-[2px] md:p-[4px] rounded-sm ring-primary ring-1 hover:ring-accent active:ring-primary hover:bg-white active:bg-primary hover:text-accent active:text-white transition-all duration-300 active:scale-95">
          <RiWhatsappFill /> Whatsapp
        </button>
        <button className="flex justify-center gap-2 items-center w-[50%] p-[2px] md:p-[4px] rounded-sm ring-primary ring-1 hover:ring-accent active:ring-primary hover:bg-white active:bg-primary hover:text-accent active:text-white transition-all duration-300 active:scale-95">
          <RiPhoneFill /> Phone
        </button>
      </div>
      <button className="flex justify-center items-center gap-2 w-full mt-2  transition-all duration-300   text-xs md:text-sm active:scale-95 ring-1  ring-primary hover:ring-primary bg-primary rounded-sm p-[2px] md:p-[4px] text-white hover:bg-background  hover:text-secondary  active:bg-background active:opacity-90 active:text-secondary active:ring-primary">
        Book Now
      </button>
    </div>
  );
};

export default ProductCard;
