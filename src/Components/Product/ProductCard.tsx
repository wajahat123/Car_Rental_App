import { H_Four} from "@/Utils/Typography";
import Image from "next/image";
import {Car} from "@/Utils/utils"
import Link from "next/link";
import { RiPhoneFill, RiWhatsappFill } from "react-icons/ri";


const ProductCard = ({data}:{data: Car}) => {
  return (
    <div className="bg-surface w-[300px] h-[450px] mx-auto p-4 shadow-lux-white ring-1 ring-primary rounded-md">
      <Image
        src="/assets/images/CARS2.png"
        alt="image"
        width={400}
        height={400}
        className="h-[70%] w-full "
      />
        <H_Four text={data.name} /> 
    <div className="flex justify-between items-start">
    <div>
        
         <p className="text-secondary">{data.type}</p>
       </div>
        <div className="text-xs md:text-sm ">
       {data.original_price ? <p className="gap-2 flex"><span className="line-through text-text-muted">{data.original_price}</span><span className="text-warning font-bold">{data.price_per_day}</span>
        
        </p>: <p className="text-warning font-bold">{data.price_per_day}</p> }
       </div>
    </div>
    <div className="flex w-full justify-between items-center gap-2 text-xs md:text-sm mt-2">
    <button className="flex justify-center gap-2 items-center w-[50%] hover:bg-white hover:text-primary hover:ring:white transition-all duration-300  active:scale-95 active:bg-primary active:ring-primary active:text-white ring-1 rounded-md ring-primary p-[2px] md:p-[4px] ">
       
       
        <RiWhatsappFill /> Whatsapp </button>
        <button className="flex justify-center gap-2 items-center w-[50%] hover:bg-white hover:text-primary hover:ring:white transition-all duration-300  active:scale-95 active:bg-primary active:ring-primary active:text-white ring-1 rounded-md ring-primary p-[2px] md:p-[4px] ">
        <RiPhoneFill /> Phone </button>
    </div>
    <button className="flex justify-center gap-2 items-center w-full mt-2 text-xs md:text-sm hover:bg-white hover:text-primary hover:ring:white transition-all duration-300  active:scale-95 active:bg-primary active:ring-primary active:text-white ring-1 rounded-md ring-primary p-[2px] md:p-[4px] ">
     Book </button>
     </div>
  );
};

export default ProductCard;
