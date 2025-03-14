import data from "@/Utils/CarsData.json";
import { motion } from "framer-motion";
import Image from "next/image";
import { IoCarSport } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineLocalPhone } from "react-icons/md";
import { TbCrown } from "react-icons/tb";

const FleetCard = () => {
  const cars = JSON.parse(JSON.stringify(data))[1];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative border-b-4 border-b-blue-400 w-[350px] h-[390px] text-sm md:text-base p-2  rounded-md hover:shadow-xl hover:shadow-blue-400/20  mx-auto transition-all duration-300 text-text-light"
    >
      <motion.div
        className="w-full h-[60%] rounded-md overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
          <Image
            src={cars.image}
            alt="car"
            width={350}
            height={300}
            className="rounded-md"
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="h-[40%] absolute flex flex-col justify-between bottom-2 w-[90%]  left-0 right-0 mx-auto p-2 bg-black/95 backdrop-blur-sm rounded-md shadow-lg border border-blue-500/30"
      >
        <div className="space-y-2">
          <motion.div 
            className="relative pb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <motion.div 
              className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-blue-400 to-transparent"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.4, duration: 0.8 }}
            />
            
            <div className="flex items-center justify-between mt-1">
              <motion.div 
                className="flex items-center gap-1.5"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <TbCrown className="text-yellow-400 text-lg" />
                <h4 className="text-md font-bold text-white tracking-wide relative">
                  {cars.name}
                  <motion.div 
                    className="absolute -bottom-1 left-0 h-[1px] bg-blue-400/50"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.6, duration: 0.4 }}
                  />
                </h4>
              </motion.div>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="relative group"
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-sm"
                  whileHover={{ opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <p className="relative px-2 py-0.5 text-[10px] font-bold rounded-xl bg-black/50 backdrop-blur-sm border border-blue-400/30 text-blue-400 shadow-sm">
                  {cars.original_price ? (
                    <span className="line-through text-text-muted">
                      {cars.original_price}&nbsp;
                    </span>
                  ) : null}
                  <span className="text-white group-hover:text-secondary transition-colors duration-300">
                        {cars.price_per_day}
                  </span>
                    </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center gap-2 -mt-1"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
              className="text-lg text-blue-400 bg-blue-900/20 p-1 rounded-full"
            >
              <IoCarSport />
            </motion.div>
            <p className="text-sm text-gray-300 ">{cars.type}</p>
          </motion.div>
</div>

        <div className="w-full h-[1px] bg-gradient-to-r from-blue-500/50 via-white/20 to-blue-500/50 -mt-1"></div>

        <motion.div
          className="flex items-center gap-2 justify-between md:text-xs text-[10px] my-[0.5px]"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
            <motion.button
          whileHover={{
            scale: 1.02,
            boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)",
            borderColor: "rgba(59, 130, 246, 1)",
          }}
          whileTap={{ scale: 0.98 }}
          className="relative bg-black border w-full bg-gradient-to-br from-white/10 via-black to-white/20 border-blue-500/80 text-white px-2 py-1 text-xs md:text-sm rounded-md transition-all duration-300 overflow-hidden group"
        >
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-transparent w-[25%]"
            animate={{
              x: ["-100%", "400%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.span
            className="relative z-10"
            animate={{
              color: ["#ffffff", "#3b82f6", "#ffffff"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
                    Book Now
          </motion.span>
        </motion.button>   <motion.button
          whileHover={{
            scale: 1.02,
            boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)",
            borderColor: "rgba(59, 130, 246, 1)",
          }}
          whileTap={{ scale: 0.98 }}
          className="relative bg-black border w-full bg-gradient-to-br from-white/10 via-black to-white/20 border-blue-500/80 text-white px-2 py-1 text-xs md:text-sm rounded-md transition-all duration-300 overflow-hidden group"
        >
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-transparent w-[25%]"
            animate={{
              x: ["-100%", "400%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.span
            className="relative z-10"
            animate={{
              color: ["#ffffff", "#3b82f6", "#ffffff"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
                    Whats App
          </motion.span>
        </motion.button>
         
        </motion.div>
{/* 
        <motion.button
          whileHover={{
            scale: 1.02,
            boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)",
            borderColor: "rgba(59, 130, 246, 1)",
          }}
          whileTap={{ scale: 0.98 }}
          className="relative bg-black border w-full bg-gradient-to-br from-white/10 via-black to-white/20 border-blue-500/80 text-white px-2 py-1 text-xs md:text-sm rounded-md transition-all duration-300 overflow-hidden group"
        >
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-transparent w-[25%]"
            animate={{
              x: ["-100%", "400%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.span
            className="relative z-10"
            animate={{
              color: ["#ffffff", "#3b82f6", "#ffffff"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
                    Book Now
          </motion.span>
        </motion.button> */}
      </motion.div>
    </motion.div>
  );
};

export default FleetCard;
