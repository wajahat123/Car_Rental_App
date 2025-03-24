"use client"
import { H_Two } from '@/Utils/Typography';
import { Car } from "@/Utils/types";
import SubHeader from '@/Components/Generals/Subheader_About';
import SideBar from '@/Components/Product/SideBar';
import { useEffect, useState } from 'react';
import { fetchCars } from '@/Utils/fetchCars';
import Image from 'next/image';
import FleetCard from '@/Components/Home/FleetCard';

const LuxuriousCars = () => {
  const [cars, setCars] = useState<Car[] >([]);
  useEffect(() => {
    fetchCars().then((res)=>setCars(res)); 

  }, []);
    return (
    <>
      <SubHeader />
      <div className="px-4 sm:px-8 md:px-16  max-w-7xl w-full mx-auto pb-8 md:pb-16 min-h-screen ">
        
        <H_Two className="text-center text-primary mb-6 uppercase my-16" text="Browse Our Luxurious Cars" />
        
        <div className="flex items-start justify-between  gap-10">
          
          {/* Product List */}<>
          <div className="grid grid-cols-2  gap-x-4 text-white  gap-y-6 ">
            {cars.map((car: Car, index) => (
              // <ProductCardTwo data={car} key={index} />
             <FleetCard car={car} key={index}/>
            ))}
          </div>
            </>

          {/* Sticky Sidebar */}
          <div className="hidden md:block  flex-shrink-0 h-screen sticky top-0 right-0  py-10 rounded-lg shadow-md">
            <SideBar />
          </div>

        </div>
      </div>
    </>
  );
};

export default LuxuriousCars;
