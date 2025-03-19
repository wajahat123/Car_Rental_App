"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { FaWhatsapp, FaTicketAlt } from "react-icons/fa";
import {Car} from "@/Utils/types"
const FleetCard = ({car}:{car:Car}) => {
 console.log(car,"car")

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="border-b-4 border-b-gold-500 min-w-[300px] sm:min-w-[380px] max-w-[480px] bg-gradient-to-br from-slate-900 to-black h-[450px] text-sm md:text-base p-4 rounded-md hover:shadow-xl hover:shadow-blue-400/20 mx-auto transition-all duration-300 text-white flex flex-col justify-between "
    >
      {/* Image Section */}
      <motion.div
        className="w-full h-[50%] rounded-md overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          // src={car.image}
          src="/assets/images/car1.webp"
          alt="car"
          width={500}
          height={450}
          className="rounded-md h-full object-cover"
        />
      </motion.div>

      {/* Details Section */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="h-[45%] flex flex-col justify-between p-1 "
      >
        {/* Title & Brand */}
        <div className="flex justify-between items-start">
        <div className="space-y-1">
          <h4 className="font-bold  tracking-wide flex items-center gap-2">
              {car.name} 
          </h4>
          <h6 className="text-gray-400 ">{car.brand} - {car.category}</h6>
          <p className="text-gray-300 ">
            {car.shortDescription}
            </p>
        </div>

        {/* Price Display */}
        <motion.div
          className="flex items-center justify-center  font-bold mt-2 text-primary text-2xl  w-1/3 text-left"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
        
            {car.price} AED / Day
        </motion.div>
        </div>
        {/* Buttons */}
        <div className="flex gap-4 mt-3">
  {/* Book Now Button - Glossy Gold */}
  <motion.button
    whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255, 215, 0, 0.5)" }}
    whileTap={{ scale: 0.98 }}
    className="w-full text-sm md:text-base bg-gradient-to-b from-gold-300 to-gold-600 text-black font-semibold py-2 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-lg border border-gold-500"
  >
    <FaTicketAlt className="text-black" />
    Book Now
  </motion.button>

  {/* WhatsApp Button - Glossy Black with Gold */}
  <motion.button
    whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255, 215, 0, 0.5)" }}
    whileTap={{ scale: 0.98 }}
    className="w-full text-sm md:text-base bg-gradient-to-b from-gray-800 to-black  font-semibold py-2 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-lg border border-gray-700"
  >
    <FaWhatsapp className="text-green-500 text-lg" />
    WhatsApp
  </motion.button>
</div>
      </motion.div>
    </motion.div>

  );
};

export default FleetCard;
