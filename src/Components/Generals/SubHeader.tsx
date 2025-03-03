import { HeadingLink } from '@/Utils/Typography'
import React from 'react'
import SearchBar from './SearchBar'
import rawProducts from "@/Utils/CarsData.json";
import { Car } from "@/Utils/utils";

const products: Car[] = JSON.parse(JSON.stringify(rawProducts));

const SubHeader = ({title, route}:{title:string,route:string}) => {
  return (
    <div
    className="relative bg-cover bg-center  py-8 md:py-16  "
    style={{ backgroundImage: "url('/assets/images/car6.webp')" }} 
  >

    <div className="relative text-white text-center z-10 px-4 sm:px-8 md:px-16 lg:px-32 max-w-7xl w-full mx-auto overflow-visible">
       <div className="bg-[#0b0f23c7] space-y-2 py-5 md:py-10 w-full md:w-[70%] mx-auto rounded-lg border-[0.5px] border-surface shadow-lux-gold">
      
<HeadingLink route={route} title={title}/>
    <div className=" z-20 relative  mx-auto md:w-[70%] w-[90%] ">
        <SearchBar products={products} />
    </div>
      </div>
      </div>
    </div>
  )
}

export default SubHeader