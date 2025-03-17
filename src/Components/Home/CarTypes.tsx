// "use client";
// import { H_Five } from '@/Utils/Typography';
// import React, { useRef } from 'react';
// import { motion, useInView } from 'framer-motion';
// import { getResponsiveAnimationVariants } from '@/Utils/hooks';
// import Image from 'next/image';

// const CarTypes = () => {
//     const sectionRef = useRef(null);
//     const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
//     const { staggerContainer, staggerItem } = getResponsiveAnimationVariants();

//     const carTypes = [
//         {
//           type: "SUV Cars",
//           example: "Land Rover Defender",
//           image: "/assets/images/car3.webp"        
//         },
//         {
//           type: "Sports Cars",
//           example: "Porsche 911",
//           image: "/assets/images/car4.webp"        
//         },
//         {
//           type: "Luxury Cars",
//           example: "Mercedes-Benz S-Class",
//           image: "/assets/images/car4.webp"        
//         },
//         {
//           type: "Exotic Cars",
//           example: "Lamborghini Aventador",
//           image: "/assets/images/car6.webp"        
//         },
//         {
//           type: "Electric Cars",
//           example: "Tesla Model S",
//           image: "/assets/images/car7.webp"        
//         },
//         {
//           type: "Off-Road Cars",
//           example: "Jeep Wrangler",
//           image: "/assets/images/car7.webp"        
//         },
//       ];
      
//   return (
//     <motion.div 
//       ref={sectionRef}
//       className='px-4 sm:px-8 md:px-16 lg:px-32 max-w-7xl w-full mx-auto pb-8 md:pb-16 overflow-hidden'
//     >
//       <motion.h2
//         initial={{ opacity: 0, y: -30 }}
//         animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
//         transition={{ duration: 0.6 }}
//         className="text-center text-primary uppercase text-2xl md:text-3xl font-bold mb-8"
//       >
//         Our Car Categories
//       </motion.h2>

//       <motion.div 
//         variants={staggerContainer}
//         initial="hidden"
//         animate={isInView ? "visible" : "hidden"}
//         className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'
//       >
//         {carTypes.map((car, index) => (
//           <motion.div 
//             key={index} 
//             variants={staggerItem}
//             whileHover={{ scale: 1.03 }}
//             whileTap={{ scale: 0.98 }}
//             className='w-full p-4 text-secondary space-y-1 md:space-y-2 mx-auto hover:text-primary transition-all duration-300 cursor-pointer group bg-surface bg-opacity-40 rounded-lg hover:shadow-lg'
//           >
//             <div className="overflow-hidden rounded-lg">
//               <motion.div
//                 whileHover={{ scale: 1.1 }}
//                 transition={{ duration: 0.4 }}
//               >
//                 <Image
//                   src={car.image}
//                   alt={car.type}
//                   width={500}
//                   height={300}
//                   className='w-full h-48 md:h-44 lg:h-40 object-cover rounded-lg ring-1 ring-secondary group-hover:ring-primary group-hover:opacity-90'
//                 />
//               </motion.div>
//             </div>
//             <H_Five text={car.type} className='font-bold text-center mt-3'/>
//             <p className="text-sm text-center opacity-80 group-hover:opacity-100">{car.example}</p>
//           </motion.div>
//         ))}
//       </motion.div>
//     </motion.div>
//   );
// };

// export default CarTypes;