import { RiTwitterFill,RiFacebookFill,RiWhatsappLine,RiPhoneFill, RiTiktokFill, RiYoutubeFill,RiInstagramLine } from "react-icons/ri";
import { PiPinterestLogoBold } from "react-icons/pi";
import Link from "next/link";

export const ContactLinks = () => {
  return (
    <div className="flex items-center justify-center gap-2 md:gap-4 py-2 md:py-4 text-accent">
        <Link href="#">
        <RiTwitterFill className="w-6 md:w-8 h-6 md:h-8 p-[2px] md:p-[4px] rounded-full ring-primary ring-1 hover:ring-blue-700 active:ring-primary hover:bg-white active:bg-primary hover:text-blue-700 active:text-white transition-all duration-300 active:scale-95"/>
        </Link>
        <Link href="#">
        <RiWhatsappLine className="w-6 md:w-8 h-6 md:h-8 p-[2px] md:p-[4px] rounded-full ring-primary ring-1 hover:ring-blue-700 active:ring-primary hover:bg-white active:bg-primary hover:text-blue-700 active:text-white transition-all duration-300 active:scale-95"/>
        </Link>
        <Link href="#">
        <RiPhoneFill className="w-6 md:w-8 h-6 md:h-8 p-[2px] md:p-[4px] rounded-full ring-primary ring-1 hover:ring-blue-700 active:ring-primary hover:bg-white active:bg-primary hover:text-blue-700 active:text-white transition-all duration-300 active:scale-95"/>
        </Link>
        <Link href="#">
        <RiFacebookFill className="w-6 md:w-8 h-6 md:h-8 p-[2px] md:p-[4px] rounded-full ring-primary ring-1 hover:ring-blue-700 active:ring-primary hover:bg-white active:bg-primary hover:text-blue-700 active:text-white transition-all duration-300 active:scale-95"/>
        </Link>  
        <Link href="#">
        <PiPinterestLogoBold className="w-6 md:w-8 h-6 md:h-8 p-[2px] md:p-[4px] rounded-full ring-primary ring-1 hover:ring-blue-700 active:ring-primary hover:bg-white active:bg-primary hover:text-blue-700 active:text-white transition-all duration-300 active:scale-95"/>
        </Link> <Link href="#">
        <RiTiktokFill className="w-6 md:w-8 h-6 md:h-8 p-[2px] md:p-[4px] rounded-full ring-primary ring-1 hover:ring-blue-700 active:ring-primary hover:bg-white active:bg-primary hover:text-blue-700 active:text-white transition-all duration-300 active:scale-95"/>
        </Link> <Link href="#">
        <RiYoutubeFill className="w-6 md:w-8 h-6 md:h-8 p-[2px] md:p-[4px] rounded-full ring-primary ring-1 hover:ring-blue-700 active:ring-primary hover:bg-white active:bg-primary hover:text-blue-700 active:text-white transition-all duration-300 active:scale-95"/>
        </Link> <Link href="#">
        <RiInstagramLine className="w-6 md:w-8 h-6 md:h-8 p-[2px] md:p-[4px] rounded-full ring-primary ring-1 hover:ring-blue-700 active:ring-primary hover:bg-white active:bg-primary hover:text-blue-700 active:text-white transition-all duration-300 active:scale-95"/>
        </Link>
    </div>
  )
}