"use client"
import { H_Two } from '@/Utils/Typography';
import { Car } from "@/Utils/types";
import SubHeader from '@/Components/Generals/Subheader_About';
import SideBar from '@/Components/Product/SideBar';
import { useEffect, useState } from 'react';
import { fetchCars } from '@/Utils/fetchCars';
import Image from 'next/image';

const LuxuriousCars = () => {
  const [cars, setCars] = useState<Car[] >([]);
  useEffect(() => {
    fetchCars().then((res)=>setCars(res)); // Fetch once, reuse everywhere

  }, []);
    return (
    <>
      <SubHeader />
      <div className="px-4 sm:px-8 md:px-16 lg:px-20 max-w-7xl w-full mx-auto pb-8 md:pb-16 min-h-screen ">
        
        <H_Two className="text-center text-primary mb-6 uppercase my-16" text="Browse Our Luxurious Cars" />
        
        <div className="flex items-start justify-between gap-12">
          
          {/* Product List */}<>
          <div className="flex gap-2 flex-wrap flex-grow text-white bg-red-700">
            {cars.map((car: Car, index) => (
              // <ProductCardTwo data={car} key={index} />
              <div key={index}>
              <Image  src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/${car.image}`} alt='image' width={200} height={200}/>
             <h1>{car.name}</h1></div>
            ))}
          </div>
            </>

          {/* Sticky Sidebar */}
          <div className="hidden md:block w-[300px] flex-shrink-0 h-screen sticky top-0  py-10 rounded-lg shadow-md">
            <SideBar />
          </div>

        </div>
      </div>
    </>
  );
};

export default LuxuriousCars;
