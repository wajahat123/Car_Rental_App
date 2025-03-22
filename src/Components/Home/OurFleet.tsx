"use client"
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import FleetCard from './FleetCard';
import { FaCar, FaChevronRight } from 'react-icons/fa';
import { RiSteeringFill } from 'react-icons/ri';
import { fetchCars } from '@/Utils/fetchCars';
import { Car } from '@/Utils/types';

export const OurFleet = () => {
   const [cars, setCars] = useState<Car[] >([]);
  //  const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        fetchCars().then((res)=>setCars(res)); // Fetch once, reuse everywhere
        // setIsMounted(true);
  
    }, []);
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const underlineVariants = {
    hidden: { width: "0%" },
    visible: {
      width: "100%",
      transition: {
        duration: 1,
        delay: 0.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="md:py-20 py-10 px-4 sm:px-8 md:px-16 lg:px-32 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
    {/* Enhanced Background Elements */}
    <motion.div
      className="absolute top-0 left-0 w-full h-full opacity-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.05 }}
      transition={{ duration: 1.5 }}
    >
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-blue-400 blur-[100px]" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-blue-600 blur-[100px]" />

      {/* Add decorative car shapes */}
      <motion.div
        className="absolute top-40 right-20 text-blue-500/10 text-6xl"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        <RiSteeringFill />
      </motion.div>
      <motion.div
        className="absolute bottom-40 left-20 text-blue-500/10 text-6xl"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        <FaCar />
      </motion.div>
    </motion.div>

    <div className="max-w-7xl w-full mx-auto relative">
      {/* Enhanced Header Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="text-center mb-10 md:mb-20"
      >
        {/* Elegant Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mb-4 flex justify-center"
        >
          <div className="w-16 h-1 bg-blue-500/60 rounded-full" />
        </motion.div>

        <motion.div variants={titleVariants} className="inline-block relative">
          {/* Top accent line */}
          <motion.div
            className="absolute -top-6 left-1/2 -translate-x-1/2 w-24 h-0.5"
            initial={{ width: 0 }}
            whileInView={{ width: '40%' }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            <div className="w-full h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          </motion.div>

          <div className="flex items-center justify-center gap-x-4">
            {/* Left decorative element */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="hidden md:flex items-center"
            >
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-blue-400"></div>
              <div className="w-2 h-2 rounded-full bg-blue-400"></div>
            </motion.div>

            {/* Main title with animation */}
            <div className="relative flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute -top-6 md:-top-4 text-xs font-semibold tracking-widest text-gray-400 uppercase"
              >
                Premium Selection
              </motion.div>

              <h2 className=" font-bold text-white relative z-10 flex items-center mt-6 md:mt-0">
                Our Fleet
              </h2>

              <motion.div
                className="h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 mt-3 rounded-full"
                variants={underlineVariants}
              />
            </div>

            {/* Right decorative element */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="hidden md:flex items-center"
            >
              <div className="w-2 h-2 rounded-full bg-blue-400"></div>
              <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-blue-400"></div>
            </motion.div>
          </div>

          {/* Bottom accent line */}
          <motion.div
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-24 h-0.5"
            initial={{ width: 0 }}
            whileInView={{ width: '30%' }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="w-full h-full bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-gray-300 mt-6 md:mt-10 max-w-2xl mx-auto leading-relaxed text-sm md:text-base"
        >
          Experience unparalleled luxury and performance with our premium fleet of vehicles. Each car is meticulously
          maintained to ensure your journey is nothing short of extraordinary.
        </motion.p>

        {/* Animated indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex items-center justify-center mt-6 text-sm text-text-secondary"
        >
          <span>Explore</span>
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FaChevronRight className="ml-1" />
          </motion.div>
        </motion.div>
      </motion.div>


        {/* Fleet Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}     className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-14 justify-items-center items-center"
        >
     {
     cars.map((car,index:number )=><motion.div variants={itemVariants} key={index}>
            <FleetCard car={car}/>

          </motion.div>)}
       
       
        </motion.div>

        {/* Enhanced View All Button */}
        <motion.div
          className="flex justify-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="relative overflow-hidden group bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-medium py-4 px-10 rounded-full shadow-lg"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 25px rgba(59, 130, 246, 0.6)" 
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.span
              className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/30 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            <motion.div 
              className="relative z-10 flex items-center gap-2"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.3 }}
            >
              <span>View All Vehicles</span>
              <motion.span
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FaChevronRight />
              </motion.span>
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
// "use client"; // Required for data fetching in client components
// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import FleetCard from "./FleetCard";
// import { FaCar, FaChevronRight } from "react-icons/fa";
// import { RiSteeringFill } from "react-icons/ri";
// import axiosInstance from "@/Utils/axiosInstance"; // Import Axios instance
// import { API_ENDPOINTS } from "@/Utils/apiEndpoints";
// import { Car } from "@/Utils/types";

// // Animation variants
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//       delayChildren: 0.3,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { y: 20, opacity: 0 },
//   visible: { y: 0, opacity: 1 },
// };

// export const OurFleet = () => {
//   const [cars, setCars] = useState<Car[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const fetchCars = async () => {
//       try {
//         const response = await axiosInstance.get<Car[]>(API_ENDPOINTS.user.carList);
//         setCars(response.data); // Store fetched car data in state
//       } catch (error) {
//         console.error("Error fetching cars:", error);
//       } finally {
//         setLoading(false); // Stop loading indicator
//       }
//     };

//     fetchCars();
//   }, []);

//   return (
//     <section className="md:py-20 py-10 px-4 sm:px-8 md:px-16 lg:px-32 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
//       <div className="max-w-7xl w-full mx-auto relative">
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.1 }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-14 justify-items-center items-center"
//         >
//           {loading ? (
//             <p className="text-white">Loading cars...</p>
//           ) : cars.length > 0 ? (
//             cars.map((car) => (
//               <motion.div key={car._id} variants={itemVariants}>
//                 <FleetCard car={car} />
//               </motion.div>
//             ))
//           ) : (
//             <p className="text-white">No cars available.</p>
//           )}
//         </motion.div>
//       </div>
//     </section>
//   );
// };
