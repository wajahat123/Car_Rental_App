import { RiTwitterFill,RiFacebookFill,RiWhatsappFill,RiPhoneFill, RiPinterestFill } from "react-icons/ri";
import { PiPinterestLogoBold } from "react-icons/pi";
import Link from "next/link";

export const ContactLinks = () => {
  return (
    <div className="flex items-center justify-center gap-2 md:gap-4 py-2 md:py-4">
        <Link href="#">
        <RiTwitterFill className=" hover:bg-white hover:text-primary hover:ring:white transition-all duration-300 w-6  h-6 md:w-8 md:h-8 active:scale-95 active:bg-primary active:ring-primary active:text-white ring-2 rounded-full ring-primary p-[2px] md:p-[4px] "/>
        </Link>
        <Link href="#">
        <RiWhatsappFill className=" hover:bg-white hover:text-primary hover:ring:white transition-all duration-300 w-6  h-6 md:w-8 md:h-8 active:scale-95 active:bg-primary active:ring-primary active:text-white ring-2 rounded-full ring-primary p-[2px] md:p-[4px] "/>
        </Link>
        <Link href="#">
        <RiPhoneFill className=" hover:bg-white hover:text-primary hover:ring:white transition-all duration-300 w-6  h-6 md:w-8 md:h-8 active:scale-95 active:bg-primary active:ring-primary active:text-white ring-2 rounded-full ring-primary p-[2px] md:p-[4px] "/>
        </Link>
        <Link href="#">
        <RiFacebookFill className=" hover:bg-white hover:text-primary hover:ring:white transition-all duration-300 w-6  h-6 md:w-8 md:h-8 active:scale-95 active:bg-primary active:ring-primary active:text-white ring-2 rounded-full ring-primary p-[2px] md:p-[4px] "/>
        </Link>  <Link href="#">
        <PiPinterestLogoBold className=" hover:bg-white hover:text-primary hover:ring:white transition-all duration-300 w-6  h-6 md:w-8 md:h-8 active:scale-95 active:bg-primary active:ring-primary active:text-white ring-2 rounded-full ring-primary p-[2px] md:p-[4px] "/>
        </Link>
    </div>
  )
}
