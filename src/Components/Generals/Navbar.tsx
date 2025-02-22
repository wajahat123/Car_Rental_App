import { PiWhatsappLogoBold } from "react-icons/pi";
import { PiFacebookLogoBold } from "react-icons/pi";
import { PiTwitterLogoBold } from "react-icons/pi";
import { PiPinterestLogoBold } from "react-icons/pi";
import { PiYoutubeLogoBold } from "react-icons/pi";
import { PiPhoneBold } from "react-icons/pi";
import { PiInstagramLogoBold } from "react-icons/pi";

const Navbar = () => {
  return (
    <div className=" bg-black text-[#c4c4c4] text-lg px-12 shadow-md shadow-[#ebb86627]">
      <h3 className='text-2xl font-bold font-serif pt-4 text-center text-yellow-500 '>
        CarRental
        </h3> 
        <div className="flex justify-between px-20 py-3 items-center">
            <nav className='flex gap-4'>
                <li className='list-none hover:text-yellow-600 hover:underline underline-offset-[8px]  cursor-pointer'>Home</li>
                <li className='list-none hover:text-yellow-600 hover:underline underline-offset-[8px]  cursor-pointer'>About</li>
                <li className='list-none hover:text-yellow-600 hover:underline underline-offset-[8px]  cursor-pointer'>Blog</li>
                <li className='list-none hover:text-yellow-600 hover:underline underline-offset-[8px]  cursor-pointer'>Contact</li></nav>
                <div className="social flex gap-4">
                  <li className='list-none hover:text-yellow-600 hover:underline underline-offset-[8px]  cursor-pointer' ><PiWhatsappLogoBold/></li>
                  <li className='list-none hover:text-yellow-600 hover:underline underline-offset-[8px]  cursor-pointer'><PiInstagramLogoBold/></li>
                  <li className='list-none hover:text-yellow-600 hover:underline underline-offset-[8px]  cursor-pointer'><PiFacebookLogoBold/></li>
                  <li className='list-none hover:text-yellow-600 hover:underline underline-offset-[8px]  cursor-pointer'><PiPinterestLogoBold/></li>
                  <li className='list-none hover:text-yellow-600 hover:underline underline-offset-[8px]  cursor-pointer'><PiTwitterLogoBold/></li>
                  <li className='list-none hover:text-yellow-600 hover:underline underline-offset-[8px]  cursor-pointer'><PiYoutubeLogoBold/></li>
                </div>
                </div>  </div>
  )
}

export default Navbar