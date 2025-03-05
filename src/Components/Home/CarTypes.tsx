import { H_Five } from '@/Utils/Typography';
import React from 'react'

const CarTypes = () => {
    const carTypes = [
        {
          type: "SUV Cars",
          example: "Land Rover Defender",
image:"/assets/images/car3.webp"        },
        {
          type: "Sports Cars",
          example: "Porsche 911",
image:"/assets/images/car4.webp"        },
        {
          type: "Luxury Cars",
          example: "Mercedes-Benz S-Class",
image:"/assets/images/car4.webp"        },
        {
          type: "Exotic Cars",
          example: "Lamborghini Aventador",
image:"/assets/images/car6.webp"        },
        {
          type: "Electric Cars",
          example: "Tesla Model S",
image:"/assets/images/car7.webp"        },
        {
          type: "Off-Road Cars",
          example: "Jeep Wrangler",
image:"/assets/images/car7.webp"        },
      ];
      
      
  return (
    <div className='grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 px-4 sm:px-8 md:px-16 lg:px-32 max-w-7xl w-full mx-auto pb-8 md:pb-16'>

{
    carTypes.map((car, index) => (
      <div key={index} className='w-full p-4 text-secondary  space-y-1 md:space-y-2 mx-auto hover:text-accent transition-all active:scale-95 duration-500 cursor-pointer group'>
        <img src={car.image} alt={car.type} className='w-full  h-56 md:h-48 lg:h-44 rounded-lg ring-1 ring-secondary object-cover group-hover:ring-primary group-hover:opacity-80 ' />
<H_Five text={car.type} className='font-bold text-center'/>     </div>
    ))
 
}    </div>
  )
}

export default CarTypes